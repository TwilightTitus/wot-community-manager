const BODY = document.body;

const ATTR__FILTER_CONTAINER = "filter-container";
const ATTR__FILTER_CONTENT_SELECTOR = "filter-content-selector";
const ATTR__FILTERABLE = "filterable";
const ATTR__FILTERABLE_CONTENT = "filterable-content";

BODY.on("action:filter", (event) => {
	event.stopPropagation();
	const target = event.target;
	const value = target.value;
	const filterContainer = target.find(target.attr(ATTR__FILTER_CONTAINER)).first();
	const filterContentSelector = target.attr("filter-content-selector") || `[${ATTR__FILTERABLE_CONTENT}]`;
	filterContainer.find(`[${ATTR__FILTERABLE}]`).removeClass("hidden");
	if (value.length > 0)
		filterContainer.find("[filterable]").forEach((element) => {
			const content = element.find(filterContentSelector).first().attr(ATTR__FILTERABLE_CONTENT);
			if (content.search(value) < 0)
				element.addClass("hidden");
		});
});