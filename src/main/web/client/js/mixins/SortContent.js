const BODY = document.body;

const ATTR__SORT_CONTAINER_SELECTOR = "sort-container-selector";
const ATTR__SORT_BY = "sort-by";

BODY.on("action:sort", (event) => {
	event.stopPropagation();
	const target = event.target;
	const sortContainer = target.find(target.attr(ATTR__SORT_CONTAINER_SELECTOR)).first();	
	const valueAttribute = `sort-by-${target.attr(ATTR__SORT_BY)}`;
	const sorted = Array.from(sortContainer.children).sort((a, b) => {				
		const valueA = (a.attr(valueAttribute) || "").toLowerCase();
		const valueB = (b.attr(valueAttribute) || "").toLowerCase()		
		if (valueA < valueB)
			return -1;
		if (valueA > valueB)
			return 1;
		return 0;		
	});	
	sortContainer.empty().append(sorted);
});