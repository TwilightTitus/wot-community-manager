package de.titus.wot.community.manager.scheduled;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.Configuration;
import de.titus.wot.community.manager.Constants;
import de.titus.wot.community.manager.database.ClanRepository;
import de.titus.wot.community.manager.database.MemberRepository;
import de.titus.wot.community.manager.database.entities.Clan;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.wotclient.WotClient;
import de.titus.wot.community.manager.wotclient.entities.WotAccount;
import de.titus.wot.community.manager.wotclient.entities.WotClan;
import de.titus.wot.community.manager.wotclient.entities.WotClan.WotClanMember;
import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

/**
 * The Class SyncDataTask.
 */
@ApplicationScoped
public class SyncDataTask {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(SyncDataTask.class);

	/** The configuration. */
	@Inject
	Configuration configuration;

	/** The entity manager. */
	@Inject
	EntityManager entityManager;

	/** The clan repository. */
	@Inject
	ClanRepository clanRepository;

	/** The member repository. */
	@Inject
	MemberRepository memberRepository;

	/** The wot client. */
	@Inject
	WotClient wotClient;

	/**
	 * Do sync.
	 */
	@Scheduled(every = "60m", delayed = "10s")
	@Transactional
	public void doSync() {
		SyncDataTask.LOGGER.info("start data sync");
		final List<WotClan> clans = this.wotClient.getClans(this.configuration.clanids());
		if (clans != null)
			for (WotClan clan : clans)
				this.syncWotClan(clan);

	}

	/**
	 * Sync wot clan.
	 *
	 * @param aWotClan the a wot clan
	 */
	private void syncWotClan(final WotClan aWotClan) {
		SyncDataTask.LOGGER.info(String.format("Sync clan data %s", aWotClan));

		final Map<Long, Member> currentMemberMap = this.getCurrentClanMemberMap(aWotClan.getId());

		Clan clan = new Clan();
		clan.setId(aWotClan.getId());
		clan.setName(aWotClan.getName());
		clan.setTag(aWotClan.getTag());

		clan = this.clanRepository.persist(clan);
		this.syncMembers(aWotClan, currentMemberMap);

		this.updateExMember(currentMemberMap.values());
	}

	/**
	 * Sync members.
	 *
	 * @param aWotClan          the a wot clan
	 * @param aCurrentMemberMap the a current members
	 */
	private void syncMembers(final WotClan aWotClan, final Map<Long, Member> aCurrentMemberMap) {
		final Map<String, WotClanMember> memberMap = aWotClan.getMembers();
		final List<WotAccount> accounts = this.wotClient.getAccounts(memberMap.keySet());
		if (accounts != null) {
			List<Member> members = accounts.stream().map((account) -> {
				return this.toMember(account, aWotClan, aCurrentMemberMap);
			}).toList();
			this.memberRepository.persist(members);
		}
	}

	/**
	 * To member.
	 *
	 * @param aWotAccount       the a wot account
	 * @param aWotClan          the a wot clan
	 * @param aCurrentMemberMap the a current members
	 * @return the member
	 */
	private Member toMember(final WotAccount aWotAccount, final WotClan aWotClan,
			final Map<Long, Member> aCurrentMemberMap) {
		final Member member = new Member();
		member.setId(aWotAccount.getId());
		member.setName(aWotAccount.getName());
		member.setClanId(aWotClan.getId());
		member.setClanname(aWotClan.getName());
		member.setClantag(aWotClan.getTag());
		String role = aWotClan.getMembers().get(Long.toString(member.getId())).getRole();
		member.setRole(role);
		member.setWtr(aWotAccount.getWtr());

		aCurrentMemberMap.remove(member.getId());

		return member;
	}

	/**
	 * Gets the current clan member map.
	 *
	 * @param aClanId the a clan id
	 * @return the current clan member map
	 */
	private Map<Long, Member> getCurrentClanMemberMap(final long aClanId) {
		Map<Long, Member> result = new HashMap<>();

		List<Member> list = this.memberRepository.allMembersByClan(aClanId);
		if (list == null)
			return result;

		for (Member member : list)
			result.put(member.getId(), member);

		return result;
	}

	/**
	 * Update ex member.
	 *
	 * @param theExMember the the ex member
	 */
	private void updateExMember(final Collection<Member> theExMember) {
		SyncDataTask.LOGGER.debug(String.format("Ex Community Members: ", theExMember));
		List<Member> exMember = theExMember.stream().map((member) -> {
			member.setClanId(null);
			member.setClanname(null);
			member.setClantag(null);
			member.setRole(Constants.MEMBER_ROLE__EXMEMBER);
			return member;
		}).toList();

		this.memberRepository.persist(exMember);
	}

}
