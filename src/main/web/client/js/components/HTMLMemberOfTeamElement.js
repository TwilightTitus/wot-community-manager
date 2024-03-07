import { TEMPLATE_BASEPATH, EVENT__GLOBAL_ACTION_RELOADPARENT } from "../Constants.js";
import { Component, define } from "@default-js/defaultjs-html-components";
import { Renderer, Template } from "@default-js/defaultjs-template-language";
import { getTeams } from "../services/TeamService.js";

const TEMPLATES_PATH = `${TEMPLATE_BASEPATH}/html-member-of-team-element`;

const NODENAME = "x-member-of-team";
const ATTR__CAMPAIGNID = "campaign-id";
const ATTR__MEMBERID = "member-id";

const TEMPLATE__ROOT = Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));

class HTMLMemberOfTeamElement extends Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;

	constructor() {
		super();
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.render();
			this.#initialized = true;
		}
	}

	get campaignId() {
		return parseInt(this.attr(ATTR__CAMPAIGNID));
	}
	
	get memberId(){
		return parseInt(this.attr(ATTR__MEMBERID));
	}

	async render() {
		const memberId = `${this.memberId}`;
		const template = await TEMPLATE__ROOT;
		debugger;
		const teams = (await getTeams(this.campaignId) || []).filter((team) => {
			return team?.payload?.fks?.includes(memberId) || team?.payload?.members?.includes(memberId);
		});
		
		
		await Renderer.render({ template, container: this.root, data: { teams } });
	}
}

define(HTMLMemberOfTeamElement);
export default HTMLMemberOfTeamElement;
