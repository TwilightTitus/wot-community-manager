import { TEMPLATE_BASEPATH, EVENT__GLOBAL_ACTION_RELOADPARENT } from "../Constants.js";
import { define } from "@default-js/defaultjs-html-components";
import { BaseField } from "@default-js/defaultjs-html-form";
import { Renderer, Template } from "@default-js/defaultjs-template-language";
import { getMembers } from "../services/MemberService.js";
import { getRegistrations } from "../services/CampaignRegistrationService.js";

const ATTR_CAMPAIGNID = "campaign-id";
const NODENAME = "x-team-member-search-field";
const TEMPLATES_PATH = `${TEMPLATE_BASEPATH}/html-team-member-search-field-element`;
const TEMPLATE_ROOT = Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));
const TEMPLATE_DIALOG = Template.load(new URL(`${TEMPLATES_PATH}/dialog.tpl.html`, location));

class HTMLTeamMemberSearchFieldElement extends BaseField {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
	#selectionDialog = null;

	constructor() {
		super();

		const root = this.root;
		root.on("action:show-selection-dialog", (event) => {
			event.stopPropagation();
			if(!this.readonly)		
				this.showSelectionDialog();
		});
		root.on("action:save-selection", (event) => {
			event.stopPropagation();
			if(!this.readonly){
				(async () => {
					const selections = this.#selectionDialog.find(".is-selected[member-id]");
					const memberids = await Promise.all(selections.map((selected) => selected.attr("member-id")));
					await this.publishValue(memberids);					
					await this.render();
					this.#selectionDialog.close();
					this.#selectionDialog.remove();
					this.#selectionDialog = null;
				})();
			}
		});
		root.on("action:filter", (event) => {
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
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.render();
		}
	}

	async showSelectionDialog() {
		if(!this.#selectionDialog){
			const {root} = this;
			const template = await TEMPLATE_DIALOG;
			const memberids = await (async () => {
				const result = new Set();
				const memberids = await this.value();
				if (memberids) {
					for (const memberid of memberids)
						result.add(memberid);
				}
				return result;
			})();
			
			const campaignid = this.campaignid;
			const members = await (async () => {
				if(campaignid)
					return (await getRegistrations(campaignid)).map(registration => {return { id: registration.memberid};});
				
				return getMembers();
			})();
			
			await Renderer.render({ template, container: root, data: { members, memberids, campaignid }, mode:"append"});	
			this.#selectionDialog = root.find(":scope > dialog").first();
			
		}
		this.#selectionDialog.showModal(); 
	}

	async render(value) {
		value = value || await this.value();
		const template = await TEMPLATE_ROOT;
		Renderer.render({ template, container: this.root, data: { memberids: value || [], campaignid: this.campaignid } });
	}

	get campaignid() {
		return this.attr(ATTR_CAMPAIGNID);
	}

	async acceptValue(value) {
		return value instanceof Array || value == null;
	}

	async readonlyUpdated() {}

	async updatedValue(value) {
		if(this.#selectionDialog)
			this.#selectionDialog.remove()
		
		await this.render(value);
	}
}

define(HTMLTeamMemberSearchFieldElement);
export default HTMLTeamMemberSearchFieldElement;
