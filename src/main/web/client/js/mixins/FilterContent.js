const BODY = document.body;
const TIMEOUT = 250;

const ATTR__FILTER_CONTAINER = "filter-container";
const ATTR__FILTER_CONTENT_SELECTOR = "filter-content-selector";
const ATTR__FILTERABLE_ITEM = "filterable-item";
const ATTR__FILTERABLE_CONTENT = "filterable-content";

const SELECTOR_FILTERABLE_ITEM = `[${ATTR__FILTERABLE_ITEM}]`;
const SELECTOR_FILTERABLE_CONTENT = `[${ATTR__FILTERABLE_CONTENT}]`;

const getFilterableContent = (target, filterContentSelector) => {
	const items = Array.from(target.find(filterContentSelector) || []);
	if(target.is(SELECTOR_FILTERABLE_CONTENT))
		items.push(target);
		
	return items.map((item) => item.attr(ATTR__FILTERABLE_CONTENT) || "").join(" ").toLowerCase();
}

const filter = (target) => {
	const values = (target.value || "").trim().toLowerCase();
	const filterContainer = target.find(target.attr(ATTR__FILTER_CONTAINER)).first();
	const filterContentSelector = (target.attr(ATTR__FILTER_CONTENT_SELECTOR) || SELECTOR_FILTERABLE_CONTENT).trim();
	filterContainer.find(SELECTOR_FILTERABLE_ITEM).removeClass("hidden");
	if (values.length > 0) {
		const filter = values.split(/\s+/)
		filterContainer.find(SELECTOR_FILTERABLE_ITEM).forEach((target) => {
			const content =  getFilterableContent(target, filterContentSelector);
			if (filter.some((filter) => content.search(filter) < 0))
				target.addClass("hidden");
		});
	}
}

let timeoutid = null;
BODY.on("global:action:filter-content", (event) => {
	event.stopPropagation();
	const target = event.target;
	if (timeoutid)
		clearTimeout(timeoutid);

	timeoutid = setTimeout(() => filter(target), TIMEOUT);
});