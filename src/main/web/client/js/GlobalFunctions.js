((Global) => {
	const calcCampaignAvailability = (registration) => {
		const { availability, fullyavailable, member: { name } } = registration;

		let score = 0;
		if (fullyavailable !== true)
			for (const day of availability) {
				const { available } = day;
				if ("partially" == available)
					score = score + 1;
				else if ("none" == available)
					score = score + 3;
			}


		return [("000000" + score).slice(-6), name.toLowerCase()].join("::");
	}

	Global["functions"] = {
		calcCampaignAvailability
	}
})(window);