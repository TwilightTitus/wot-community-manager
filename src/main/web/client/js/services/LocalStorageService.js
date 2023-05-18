const STORAGE = window.localStorage;


export const storeValue = (key, data) => {
	STORAGE.setItem(key, JSON.stringify({ data}));
};

export const loadValue = (key) => {
	const { data } = JSON.parse(STORAGE.getItem(key) || "{}");
	return data;
};

export const deleteValue = (key) => {
	STORAGE.removeItem(key);
};