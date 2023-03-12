export const TEMPLATE_BASEPATH = "/templates";
export const EVENT__GLOBAL_ACTION_RELOADPARENT = "global:action:reload-parent";
export const URL_LOGIN = "/api/system/login";
export const URL_ACCESS = "/api/system/access";
export const PAGEURL = new URL(location);

export const ROLEMAPPING = {
	"ex-member" : "EX Member",
	"reservist" : "Reservist",
	"recruit" : "Anwärter",
	"private" : "Member",
	"junior_officer" : "Member",
	"combat_officer" : "Feldkommandent",
	"personnel_officer": "Personal Offizier",
	"recruitment_officer" : "Anwerber",
	"executive_officer": "Ausführender Offizier",
	"commander" : "Clan Leader"
}

export const APPGLOBAL = {
	ROLEMAPPING
};
window.APPGLOBALS = APPGLOBAL;