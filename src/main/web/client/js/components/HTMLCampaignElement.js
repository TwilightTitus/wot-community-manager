import { TEMPLATE_BASEPATH, EVENT__GLOBAL_ACTION_RELOADPARENT } from "../Constants.js";
import { Component, define } from "@default-js/defaultjs-html-components";
import { Renderer, Template } from "@default-js/defaultjs-template-language";
import { getCampaign, deleteCampaign, storeCampaign } from "../services/CampaignService.js";
import { getRegistrations, getMyRegistration, getRegistrationByMember, storeRegistration } from "../services/CampaignRegistrationService.js";
import { accessRights } from "../services/LoginService.js";
import "@default-js/defaultjs-html-form";

const TEMPLATES_PATH = `${TEMPLATE_BASEPATH}/html-campaign-element`;
export const NODENAME = "x-campaign";
const ATTR__CAMPAIGNID = "campaign-id";

const TEMPLATE_ROOT = Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));
const TEMPLATE_REGISTRATION = Template.load(new URL(`${TEMPLATES_PATH}/registration.tpl.html`, location));
const TEMPLATE_REGISTRATIONS = Template.load(new URL(`${TEMPLATES_PATH}/registrations.tpl.html`, location));

const getDatesBetweenTwoDates = (a, b) => {
	a = a instanceof Date ? a : new Date(a);
	b = b instanceof Date ? b : new Date(b);

	const days = Math.ceil(Math.abs(a - b) / (1000 * 60 * 60 * 24));
	const dates = [];
	for (let i = 0; i < days; i++) dates.push(a.addDays(i));

	return dates;
};

class HTMLCampaignElement extends Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
	#open = false;
	constructor() {
		super();
		const root = this.root;
		root.on(EVENT__GLOBAL_ACTION_RELOADPARENT, (event) => {
			event.stopPropagation();
			this.render();
		});
		root.on("action:toogle-details", (event) => {
			event.stopPropagation();
			const {target} = event;
			if (target instanceof HTMLDetailsElement) 
				this.#open = target.open;
		});
		root.on("action:show-registrations", (event) => {
			event.stopPropagation();
			this.showRegistrations();
		});
		root.on("action:delete-campaign", (event) => {
			event.stopPropagation();
			(async () => {
				await deleteCampaign(this.campaignId);
				this.remove();
			})();
		});		
		root.on("action:member-registrate", (event) => {
			event.stopPropagation();
			this.openRegistrationDialog();
		});
		
		
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			await this.render();
			this.#initialized = true;
		}
	}

	get campaignId() {
		return parseInt(this.attr(ATTR__CAMPAIGNID));
	}

	async render() {
		const template = await TEMPLATE_ROOT;
		await Renderer.render({ container: this.root, template, data: {accessRights: accessRights(), open:this.#open, campaign: await getCampaign(this.campaignId) } });
	}

	async openRegistrationDialog() {
		const template = await TEMPLATE_REGISTRATION;
		const campaign = await getCampaign(this.campaignId);

		const data = {
			campaign,
			days: getDatesBetweenTwoDates(campaign.startdate, campaign.enddate),
		};

		const result = await Renderer.render({
			template,
			container: this.root,
			data,
			mode: "append",
		});

		const dialog = result.content[0];
		const form = dialog.find("d-form").first();

		form.on("d-form-submit", (event) => {
			console.log(event);
			event.stopPropagation();
			(async () => {
				const registration = await form.value();
				const availability = [];
				let fullyavailable = true;
				for (const day in registration) {
					if (fullyavailable && registration[day].available != "full") fullyavailable = false;
					availability.push(registration[day]);
				}

				await storeRegistration(this.campaignId, { fullyavailable, availability });
				dialog.hide();
				dialog.remove();
			})();
		});
		form.on("action:close-registration-dialog", (event) => {
			event.stopPropagation();
			dialog.hide();
			dialog.remove();
		});

		const registration = await getMyRegistration(this.campaignId);
		if(registration){
			const days = registration.availability || [];
			const data = {};
			for (let i = 0; i < days.length; i++)
				data[`day${i+1}`] = days[i];

			await form.value(data);
		}


		dialog.showModal();
	}

	async showRegistrations() {
		const template = await TEMPLATE_REGISTRATIONS;
		const registrations = await getRegistrations(this.campaignId, true);
		const result = await Renderer.render({ container: this, template, data: { registrations }, mode: "append" });
		const dialog = result.content[0];
		dialog.on("action:filter", (event) => {
			event.stopPropagation();
			const target = event.target;
			const value = target.value;
			const filterContainer = target.find(target.attr("filter-container")).first();
			filterContainer.find("[filterable]").removeClass("hidden");
			if(value.length > 0)
				filterContainer.find("[filterable]").forEach((element) => {
					const content = element.find("x-member[filterable-content]").first().attr("filterable-content");
					if(content.search(value) < 0)
						element.addClass("hidden");				
				});			
		});
		
		dialog.on("close", () => {
			dialog.remove();
		});

		dialog.showModal();
	}
}

define(HTMLCampaignElement);
export default HTMLCampaignElement;
