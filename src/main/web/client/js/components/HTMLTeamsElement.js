import { TEMPLATE_BASEPATH, EVENT__GLOBAL_ACTION_RELOADPARENT } from "../Constants.js";
import { Component, define } from "@default-js/defaultjs-html-components";
import { Renderer, Template } from "@default-js/defaultjs-template-language";
import { getTeams, storeTeam } from "../services/TeamService.js";
import { getCampaign, storeCampaign } from "../services/CampaignService.js";
import { accessRights } from "../services/LoginService.js";
import "@default-js/defaultjs-html-form";

const TEMPLATES_PATH = `${TEMPLATE_BASEPATH}/html-teams-element`;
const TEMPLATE__ROOT = Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));

const NODENAME = "x-teams";
const ATTR__CAMPAIGNID = "campaign-id"

class HTMLTeamsElement extends Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;

	constructor() {
		super();
		const root = this.root;
		root.on("action:create-team", (event) => {
			event.stopPropagation();
			(async () => {
				const campaignid = this.campaignId ? parseInt(this.campaignId) : null;
				await storeTeam({ name: "neues Team", campaignid });

				this.render();
			})();
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
		return this.attr(ATTR__CAMPAIGNID);
	}

	async render() {
		const template = await TEMPLATE__ROOT;
		const teams = await getTeams(this.campaignId);		
		await Renderer.render({ template, container: this.root, data: {accessRights: accessRights(), teams }});
	}
}

define(HTMLTeamsElement);
export default HTMLTeamsElement;
