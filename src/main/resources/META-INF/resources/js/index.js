/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Application": () => (/* reexport safe */ _src_Application__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Route": () => (/* reexport safe */ _src_Route__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "RouteLink": () => (/* reexport safe */ _src_RouteLink__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "View": () => (/* reexport safe */ _src_View__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _src_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Application */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Application.js");
/* harmony import */ var _src_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Route */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/index.js");
/* harmony import */ var _src_RouteLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/RouteLink */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/index.js");
/* harmony import */ var _src_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/View */ "./node_modules/@default-js/defaultjs-app-toolbox/src/View/index.js");







/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/Application.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/Application.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTR_ROUTE": () => (/* binding */ ATTR_ROUTE),
/* harmony export */   "ATTR_VIEW": () => (/* binding */ ATTR_VIEW),
/* harmony export */   "EVENT_STORE_CHANGED": () => (/* binding */ EVENT_STORE_CHANGED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/NodeHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _Route_Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Route/Events */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Events.js");
/* harmony import */ var _RouteLink_Events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RouteLink/Events */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Events.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Route */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/index.js");
/* harmony import */ var _RouteLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RouteLink */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./View */ "./node_modules/@default-js/defaultjs-app-toolbox/src/View/index.js");












const _view = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__.privatePropertyAccessor)("view");
const _store = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__.privatePropertyAccessor)("store");

const NODENAME = (0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__.toNodeName)("application");
const EVENT_STORE_CHANGED = "app-store-changed";
const ATTR_ROUTE = "route";
const ATTR_VIEW = "view";

const findRoute = (app, name) => {
	const selector = `${_Route__WEBPACK_IMPORTED_MODULE_8__["default"].NODENAME}[name="${name}"]`;
	return app.find(selector).first();
};

const closestView = (app, name) => {
	return (0,_default_js_defaultjs_html_components_src_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_2__.findClosestInDepth)(app.root, (node) => {
		return node instanceof _View__WEBPACK_IMPORTED_MODULE_10__["default"] && (name == null || node.name == name);
	});
};

const findView = (app, name) => {
	let view = null;
	if (name) {
		const result = app.root.find(`d-view[name="${name}"]`).first();
		if (result && result.length == 1) view = result.first();
	}

	if (!view) view = closestView(app, name);

	if (view) view.app = app;

	return view;
};

const buildRouteContext = async (context, app) => {
	try {
		return _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_7__["default"].resolve(context, app.store, null);
	} catch (e) {
		return null;
	}
};

const ATTRIBUTES = [ATTR_ROUTE, ATTR_VIEW];

class Application extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return NODENAME;
	}

	constructor(setting) {
		super(setting || {});

		this.root.on([_Route_Events__WEBPACK_IMPORTED_MODULE_5__.EVENT_CLICK, _RouteLink_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_TO_ROUTE], async (event) => {
			this.route({ route: event.target });
		});

		this.on((0,_default_js_defaultjs_html_components_src_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__.attributeChangeEventname)(ATTR_ROUTE, this), () => {
			if (this.hasAttribute(ATTR_ROUTE)) this.route({ route: this.attr(ATTR_ROUTE) });
		});		
	}

	async init() {
		await super.init();
		this.ready.then(() => {
			if (this.hasAttribute(ATTR_ROUTE)) this.route({ route: this.attr(ATTR_ROUTE) });
		});
	}

	async routes() {
		return this.root.find(_Route__WEBPACK_IMPORTED_MODULE_8__["default"].NODENAME);
	}

	async route({ route, refresh = null, context = null, view = null }) {
		await this.ready;

		if (arguments.length == 0) return this.view.route;

		if (typeof route === "string") route = findRoute(this, route);
		else if (route instanceof _RouteLink__WEBPACK_IMPORTED_MODULE_9__["default"]) {
			refresh = refresh != null ? refresh : route.refresh;
			if (context == null) context = await buildRouteContext(route.context, this);
			if (view == null) view = route.view;
			route = findRoute(this, route.target);
		}
		else if (!(route instanceof _Route__WEBPACK_IMPORTED_MODULE_8__["default"])) throw new Error("Unsupported route type!");

		if (refresh == null) refresh = false;
		if (view == null) view = route.view;

		view = view ? findView(this, view) : this.view;

		if (!refresh && view.route == route) return;

		if (context == null) context = await buildRouteContext(route.context, this);

		if (view.route) view.route.active = false;
		await view.display({ route, context, refresh });
		route.active = true;
	}

	get view() {
		let view = _view(this);
		if (!view) {
			view = findView(this, this.attr(ATTR_VIEW));
			_view(this, view);
			view.app = this;
		}

		return view;
	}

	get store() {
		let store = _store(this);
		if (!store) {
			store = {};
			_store(this, store);
		}
		return store;
	}
}

(0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__.define)(Application);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Attributes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Attributes.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTR_CONTEXT": () => (/* binding */ ATTR_CONTEXT),
/* harmony export */   "ATTR_REFRESH": () => (/* binding */ ATTR_REFRESH),
/* harmony export */   "ATTR_TARGET": () => (/* binding */ ATTR_TARGET),
/* harmony export */   "ATTR_VIEW": () => (/* binding */ ATTR_VIEW)
/* harmony export */ });
const ATTR_TARGET = "target";
const ATTR_CONTEXT = "context";
const ATTR_REFRESH = "refresh";
const ATTR_VIEW = "view";

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Events.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Events.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_TO_ROUTE": () => (/* binding */ EVENT_TO_ROUTE)
/* harmony export */ });
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nodename */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Nodename.js");

const EVENT_TO_ROUTE = _Nodename__WEBPACK_IMPORTED_MODULE_0__["default"] + "-to-route";

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Nodename.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Nodename.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__.toNodeName)("route-link"));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nodename */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Nodename.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Events.js");
/* harmony import */ var _Attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Attributes */ "./node_modules/@default-js/defaultjs-app-toolbox/src/RouteLink/Attributes.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/NodeHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js");







const ATTRIBUTES = [_Attributes__WEBPACK_IMPORTED_MODULE_4__.ATTR_TARGET, _Attributes__WEBPACK_IMPORTED_MODULE_4__.ATTR_CONTEXT];

const EVENTS = [_Events__WEBPACK_IMPORTED_MODULE_3__.EVENT_TO_ROUTE];

class RouteLink extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Nodename__WEBPACK_IMPORTED_MODULE_2__["default"];
	}

	static get EVENTS() {
		return EVENTS;
	}

	constructor(setting) {
		super(setting || {});
		this.on("click", (event) => {
			event.preventDefault();
			this.trigger(_Events__WEBPACK_IMPORTED_MODULE_3__.EVENT_TO_ROUTE);
		});
	}

	async init() {}

	get view() {
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_4__.ATTR_VIEW);
	}

	get target() {
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_4__.ATTR_TARGET);
	}

	get context() {
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_4__.ATTR_CONTEXT);
	}

	get refresh() {
		return this.hasAttribute(_Attributes__WEBPACK_IMPORTED_MODULE_4__.ATTR_REFRESH);
	}
}

(0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__.define)(RouteLink);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RouteLink);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Attributes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Attributes.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTR_ACTIVE": () => (/* binding */ ATTR_ACTIVE),
/* harmony export */   "ATTR_COMPONENT_TAG": () => (/* binding */ ATTR_COMPONENT_TAG),
/* harmony export */   "ATTR_COMPONENT_TAG_ATTRIBUTES": () => (/* binding */ ATTR_COMPONENT_TAG_ATTRIBUTES),
/* harmony export */   "ATTR_CONTEXT": () => (/* binding */ ATTR_CONTEXT),
/* harmony export */   "ATTR_NAME": () => (/* binding */ ATTR_NAME),
/* harmony export */   "ATTR_REFRESH": () => (/* binding */ ATTR_REFRESH),
/* harmony export */   "ATTR_STATEFUL": () => (/* binding */ ATTR_STATEFUL),
/* harmony export */   "ATTR_VIEW": () => (/* binding */ ATTR_VIEW)
/* harmony export */ });
const ATTR_NAME = "name";
const ATTR_ACTIVE = "active";
const ATTR_STATEFUL = "stateful";
const ATTR_COMPONENT_TAG = "component-tag";
const ATTR_COMPONENT_TAG_ATTRIBUTES = "component-tag-attributes";
const ATTR_CONTEXT = "context";
const ATTR_REFRESH = "refresh";
const ATTR_VIEW = "view";

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Events.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Events.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_ACTIVATE": () => (/* binding */ EVENT_ACTIVATE),
/* harmony export */   "EVENT_CLICK": () => (/* binding */ EVENT_CLICK),
/* harmony export */   "EVENT_DEACTIVATE": () => (/* binding */ EVENT_DEACTIVATE),
/* harmony export */   "EVENT_INIT": () => (/* binding */ EVENT_INIT)
/* harmony export */ });
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nodename */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Nodename.js");

const EVENT_INIT = `${_Nodename__WEBPACK_IMPORTED_MODULE_0__["default"]}-init`;
const EVENT_CLICK = `${_Nodename__WEBPACK_IMPORTED_MODULE_0__["default"]}-click`;
const EVENT_ACTIVATE = `${_Nodename__WEBPACK_IMPORTED_MODULE_0__["default"]}-activate`;
const EVENT_DEACTIVATE = `${_Nodename__WEBPACK_IMPORTED_MODULE_0__["default"]}-deactivate`;

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Nodename.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Nodename.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__.toNodeName)("route"));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/Route/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language/src/Template */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nodename */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Nodename.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Events */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Events.js");
/* harmony import */ var _Attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Attributes */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Route/Attributes.js");









const ATTRIBUTES = [_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_NAME, _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_2__.NODE_ATTRIBUTE_TEMPLATE, _Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_COMPONENT_TAG, _Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_COMPONENT_TAG_ATTRIBUTES, _Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_STATEFUL, _Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_VIEW];
const EVENTS = [_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_CLICK, _Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_ACTIVATE, _Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_DEACTIVATE];
const getTagAttributes = async (route) => {
	const attributes = route.attr(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_COMPONENT_TAG_ATTRIBUTES) || "{}";
	return _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(attributes, {}, {});
};

const _template = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__.privatePropertyAccessor)(_default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_2__.NODE_ATTRIBUTE_TEMPLATE);

const buildComponent = async (route) => {
	if (route.hasAttribute(_default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_2__.NODE_ATTRIBUTE_TEMPLATE)) {
		let template = _template(route);
		if (!template) {
			template = await _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_2__["default"].loadNodeTemplate(route, null, false);
			_template(route, template);
		}
		return template;
	} else {
		const tag = route.attr(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_COMPONENT_TAG);
		const clazz = customElements.get(tag);
		const attributes = await getTagAttributes(route);

		const element = new clazz();
		for (let attribute in attributes) {
			const value = attributes[attribute];
			if (typeof value === "string") element.attr(attribute, value);
		}

		return element;
	}
};

class Route extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Nodename__WEBPACK_IMPORTED_MODULE_5__["default"];
	}

	static get EVENTS() {
		return EVENTS;
	}

	#initialized = false;

	constructor(setting) {
		super(setting || {});
		this.on("click", () => {
			if(!this.active)
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_CLICK);
		});
	}

	async init() {
		await super.init();
		if(!this.#initialized){
			this.#initialized = true;
			this.trigger(_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_INIT);
			if(this.active)
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_CLICK);
		}
	}

	get name() {
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_NAME);
	}

	get view(){
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_VIEW);
	}

	get active() {
		return this.hasAttribute(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_ACTIVE);
	}

	set active(active) {
		const current = this.active;
		if (active != current) {
			this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_ACTIVE, active ? "" : null);
			if (active)
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_ACTIVATE);
			else 
				this.trigger(_Events__WEBPACK_IMPORTED_MODULE_6__.EVENT_DEACTIVATE);
		}
	}
	
	get stateful() {
		return this.hasAttribute(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_STATEFUL);
	}

	get context(){
		return this.attr(_Attributes__WEBPACK_IMPORTED_MODULE_7__.ATTR_CONTEXT);
	}	
	
	get refresh(){
		return this.hasAttribute(ATTR_REFRESH);
	}

	async component() {		
		return buildComponent(this);
	}
}

(0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__.define)(Route);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/View/Nodename.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/View/Nodename.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_0__.toNodeName)("view"));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-app-toolbox/src/View/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-app-toolbox/src/View/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _Nodename__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nodename */ "./node_modules/@default-js/defaultjs-app-toolbox/src/View/Nodename.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_WeakData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/WeakData */ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Application */ "./node_modules/@default-js/defaultjs-app-toolbox/src/Application.js");








const _app = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__.privatePropertyAccessor)("app");
const _route = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__.privatePropertyAccessor)("route");

const ROUTEDATA = new _default_js_defaultjs_html_components_src_utils_WeakData__WEBPACK_IMPORTED_MODULE_5__["default"]();

const ATTR_NAME = "name";
const ATTRIBUTES = [ATTR_NAME];
class View extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {

	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Nodename__WEBPACK_IMPORTED_MODULE_2__["default"];
	}

	constructor(setting) {
		super(setting || {});
	}

	get name(){
		return this.attr(ATTR_NAME);
	}

	get app() {
		return _app(this);
	}

	set app(app) {
		_app(this, app);
	}

	get route(){
		return _route(this);
	}

	async display({ route, context, view, refresh = false }) {
		if (view) throw new Error("you must override the display function!");

		_route(this, route);
		const { root, app } = this;
		root.empty();

		let component = route.stateful ? ROUTEDATA.value(route, "component") : null;
		if (refresh || !component) {
			component = await route.component();
			if (component instanceof _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__.Template) {
				await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__.Renderer.render({
					container: root,
					data: {
						$view: this,
						$app: app,
						$store: app.store,
						$route: route,
						$context: context,
					},
					template: component,
				});
				component = NodeList.from(root.childNodes);
			} else {
				if (component instanceof View) {
					component.app = app;
					component.ready.then(() => {
						component.display({ route, context, view: this });
					});
				}
				root.append(component);
			}

			if (route.stateful) ROUTEDATA.value(route, "component", component);
		} else {
			if (component instanceof View) {
				component.app = app;
				component.ready.then(() => {
					component.display({ route, context, view: this });
				});
			}
			root.append(component);
		}
	}
}
(0,_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__.define)(View);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GLOBAL = (() => {
	if(typeof __webpack_require__.g !== "undefined") return __webpack_require__.g;
	if(typeof window !== "undefined") return window;	
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GLOBAL);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ObjectProperty)
/* harmony export */ });
class ObjectProperty {
	constructor(key, context){
		this.key = key;
		this.context = context;
	}
	
	get keyDefined(){
		return this.key in this.context; 
	}
	
	get hasValue(){
		return !!this.context[this.key];
	}
	
	get value(){
		return this.context[this.key];
	}
	
	set value(data){
		this.context[this.key] = data;
	}
	
	set append(data) {
		if(!this.hasValue)
			this.value = data;
		else {
			const value = this.value;
			if(value instanceof Array)
				value.push(data);
			else
				this.value = [this.value, data];
		}
	}
	
	remove(){
		delete this.context[this.key];
	}
	
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split("\.");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(!context[name]){
				if(!create)
					return null;
				
				context[name] = {}
			}
			
			context = context[name];
			name = keys.shift().trim();
		}
		
		return new ObjectProperty(name, context);
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "defGet": () => (/* binding */ defGet),
/* harmony export */   "defGetSet": () => (/* binding */ defGetSet),
/* harmony export */   "defValue": () => (/* binding */ defValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "isPojo": () => (/* binding */ isPojo),
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 *
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *
 *  @return returns the changed object
 */
const append = function (aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true);
		property.append = aData;
	}
	return aObject;
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 *
 * @param aObject:object the object to be testing
 *
 * @return boolean
 */
const isPojo = function (aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object";
};

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other
 * value would be replaced by value from the source object.
 *
 * sample: merge(target, source-1, source-2, ...source-n)
 *
 * @param target:object the target object to merging into
 * @param sources:object
 *
 * @return object returns the target object
 */
const merge = function (target, ...sources) {
	if(!target)
		target = {};

	for (let source of sources) {
		if (isPojo(source)) {
			Object.getOwnPropertyNames(source).forEach((key) => {
				if (isPojo(target[key])) merge(target[key], source[key]);
				else target[key] = source[key];
			});
		}
	}

	return target;
};

const buildPropertyFilter = function ({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	};
};

const filter = function () {
	const [data, propFilter, { deep = false, recursive = true, parents = [] } = {}] = arguments;
	const result = {};

	for (let name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined)) result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object" || value instanceof Array || value instanceof Map || value instanceof Set || value instanceof RegExp || parents.includes[value] || value == data) result[name] = value;
			else result[name] = filter(value, propFilter, { deep, recursive, parents: parents.concat(data) });
		}
	}

	return result;
};

const defValue = (o, name, value) => {
	Object.defineProperty(o, name, {
		value,
		writable: false,
		configurable: false,
		enumerable: false,
	});
};
const defGet = (o, name, get) => {
	Object.defineProperty(o, name, {
		get,
		configurable: false,
		enumerable: false,
	});
};

const defGetSet = (o, name, get, set) => {
	Object.defineProperty(o, name, {
		get,
		set,
		configurable: false,
		enumerable: false,
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter,
	defValue,
	defGet,
	defGetSet,
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "privateProperty": () => (/* binding */ privateProperty),
/* harmony export */   "privatePropertyAccessor": () => (/* binding */ privatePropertyAccessor),
/* harmony export */   "privateStore": () => (/* binding */ privateStore)
/* harmony export */ });
const PRIVATE_PROPERTIES = new WeakMap();
const privateStore = (obj) => {
	if(PRIVATE_PROPERTIES.has(obj))
		return PRIVATE_PROPERTIES.get(obj);
	
	const data = {};
	PRIVATE_PROPERTIES.set(obj, data);
	return data;
};

const privateProperty = function(obj, name, value) {
	const data = privateStore(obj);
	if(arguments.length === 1)
		return data;
	else if(arguments.length === 2)
		return data[name];
	else if(arguments.length === 3)
		data[name] = value;
	else
		throw new Error("Not allowed size of arguments!");
};

const privatePropertyAccessor = (varname) => {
	return function(self, value){
		if(arguments.length == 2)
			privateProperty(self, varname, value);
		else
			return privateProperty(self, varname);
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({privateProperty, privatePropertyAccessor, privateStore});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lazyPromise": () => (/* binding */ lazyPromise),
/* harmony export */   "timeoutPromise": () => (/* binding */ timeoutPromise)
/* harmony export */ });
/* harmony import */ var _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");


const timeoutPromise = (fn, ms) =>{
	let canceled = false;
	let timeout = null;
	const promise = new Promise((r, e) => {
		timeout = setTimeout(()=> {
			timeout = null;
			fn(r,e);
		}, ms)
	});

	const then = promise.then;
	promise.then = (fn) => {
		then.call(promise, (result) => {
			if(!undefined.canceled)
				return fn(result);
		});
	}

	;(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "cancel", () => {
		if(timeout){
			clearTimeout(timeout);
			canceled = true;
		}
	});
	(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, canceld, () => canceled);

	return promise;
}


const lazyPromise = () => {
		let promiseResolve = null;
		let promiseError = null;

		const promise = new Promise((r, e) => {
			promiseResolve = r;
			promiseError = e;
		});

		let resolved = false;
		let error = false;
		let value = undefined;

		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defValue)(promise, "resolve", (result) => {
			value = result;
			resolved = true;
			if (value instanceof Error) {
				error = true;
				promiseError(value);
			} else promiseResolve(value);
		});

		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "value", () => value);
		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "error", () => error);
		(0,_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defGet)(promise, "resolved", () => resolved);

		return promise;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	lazyPromise,
	timeoutPromise
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/UUID.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/UUID.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UUID_SCHEMA": () => (/* binding */ UUID_SCHEMA),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
//the solution is found here: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
const UUID_SCHEMA = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

const uuid = () => {
	const buf = new Uint32Array(4);
	window.crypto.getRandomValues(buf);
	let idx = -1;
	return UUID_SCHEMA.replace(/[xy]/g, (c) => {
		idx++;
		const r = (buf[idx >> 3] >> ((idx % 8) * 4)) & 15;
		const v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ uuid });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "emtpyOrNoValueString": () => (/* binding */ emtpyOrNoValueString),
/* harmony export */   "noValue": () => (/* binding */ noValue)
/* harmony export */ });
const noValue = (value) => {
	return value == null || typeof value === "undefined";
};

const emtpyOrNoValueString = (value) => {	
	return noValue(value) || value.trim().length == 0;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	noValue,
	emtpyOrNoValueString
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js ***!
  \**********************************************************************************/
/***/ (() => {

if (!String.prototype.hashcode)
	String.prototype.hashcode = function() {
		if (this.length === 0)
			return 0;
		
		let hash = 0;
		const length = this.length;
		for (let i = 0; i < length; i++) {
			const c = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + c;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* reexport safe */ _src_Context__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ExpressionResolver": () => (/* reexport safe */ _src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _src_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Context */ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js");






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Context.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Context)
/* harmony export */ });
const seekAtChain = (resolver, property) => {
	while(resolver){
		const def = resolver.proxy.handle.getPropertyDef(property, false);
		if(def)
			return def;
		
		resolver = resolver.parent;
	}	
	return { data: null, resolver: null, defined: false };
}

class Handle {
	constructor(data, resolver) {
		this.data = data;
		this.resolver = resolver;
		this.cache = new Map();
	}
	
	updateData(data){
		this.data = data;
		this.cache = new Map();
	}
	
	resetCache(){
		this.cache = new Map();
	}

	getPropertyDef(property, seek = true) {
		if (this.cache.has(property))
			return this.cache.get(property);
		
		let def = null
		if (this.data && property in this.data)
			def = { data: this.data, resolver: this.resolver, defined: true };
		else if(seek)
			def = seekAtChain(this.resolver.parent, property);
		else
			return null;
		if(def.defined)
			this.cache.set(property, def);
		return def;
	}

	hasProperty(property) {
		//@TODO write tests!!!
		const { defined } = this.getPropertyDef(property);
		return defined;
	}
	getProperty(property) {
		//@TODO write tests!!!	
		const { data } = this.getPropertyDef(property);
		return data ? data[property] : undefined;
	}
	setProperty(property, value) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!
		const { data, defined } = this.getPropertyDef(property);
		if (defined)
			data[property] = value;
		else {
			if (this.data)
				this.data[property] = value;
			else {
				this.data = {}
				this.data[property] = value;
			}
			this.cache.set(property, { data: this.data, resolver: this.resolver, defined: true });
		}
	}
	deleteProperty(property) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!		
		throw new Error("unsupported function!")
	}
}

class Context {
	constructor(context, resolver) {
		this.handle = new Handle(context, resolver);		
		this.data = new Proxy(this.handle, {
			has: function(data, property) {
				return data.hasProperty(property);
			},
			get: function(data, property) {
				return data.getProperty(property);
			},
			set: function(data, property, value) {
				return data.setProperty(property, value);
			},
			deleteProperty: function(data, property) {
				return data.deleteProperty(property);
			}
			//@TODO need to support the other proxy actions		
		});;
	}
	
	updateData(data){
		this.handle.updateData(data)		
	}
	
	resetCache(){
		this.handle.resetCache();
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultValue)
/* harmony export */ });
class DefaultValue {
	constructor(value){
		this.hasValue = arguments.length == 1;
		this.value = value;
	}	
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpressionResolver)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectProperty.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultValue.js */ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js");







const EXECUTION_WARN_TIMEOUT = 1000;
const EXPRESSION = /(\\?)(\$\{(([a-zA-Z0-9\-_\s]+)::)?([^\{\}]+)\})/;
const MATCH_ESCAPED = 1;
const MATCH_FULL_EXPRESSION = 2;
const MATCH_EXPRESSION_SCOPE = 4;
const MATCH_EXPRESSION_STATEMENT = 5;

const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const toDefaultValue = value => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])
		return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"](value);
};

const execute = async function(aStatement, aContext) {
	if (typeof aStatement !== "string")
		return aStatement;
		
	const expression = new Function("context", 
`
return (async (context) => {
	try{ 
		with(context){
			 return ${aStatement}
		}
	}catch(e){
		throw e;
	}
})(context)`
	);
	
	let timeout = setTimeout(() => {
		timeout = null;
		console.warn("long running statement:", aStatement, new Error());
	}, EXECUTION_WARN_TIMEOUT)
	let result = undefined;
	try{
		result = await expression(aContext);
	}catch(e){}
	
	if(timeout)
		clearTimeout(timeout)
	return result;
};

const resolve = async function(aResolver, aExpression, aFilter, aDefault) {
	if (aFilter && aResolver.name != aFilter)
		return aResolver.parent ? resolve(aResolver.parent, aExpression, aFilter, aDefault) : null;
	
	const result = await execute(aExpression, aResolver.proxy.data);
	if (result !== null && typeof result !== "undefined")
		return result;

	else if (aDefault instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"] && aDefault.hasValue)
		return aDefault.value;
};

const resolveMatch = async (resolver, match, defaultValue) => {
	if(match[MATCH_ESCAPED])
		return match[MATCH_FULL_EXPRESSION]; 
		
	return resolve(resolver, match[MATCH_EXPRESSION_STATEMENT], normalize(match[MATCH_EXPRESSION_SCOPE]), defaultValue);
}

const normalize = value => {
	if (value) {
		value = value.trim();
		return value.length == 0 ? null : value;
	}
	return null;
};

class ExpressionResolver {
	constructor({ context = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"], parent = null, name = null }) {
		this.parent = (parent instanceof ExpressionResolver) ? parent : null;
		this.name = name;
		this.context = context;
		this.proxy = new _Context_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.context, this);
	}

	get chain() {
		return this.parent ? this.parent.chain + "/" + this.name : "/" + this.name;
	}

	get effectiveChain() {
		if (!this.context)
			return this.parent ? this.parent.effectiveChain : "";
		return this.parent ? this.parent.effectiveChain + "/" + this.name : "/" + this.name;
	}

	get contextChain() {
		const result = [];
		let resolver = this;
		while (resolver) {
			if (resolver.context)
				result.push(resolver.context);

			resolver = resolver.parent;
		}

		return result;
	}

	getData(key, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.getData(key, filter);
		} else {
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key, false);
			return property ? property.value : null;
		}
	}

	updateData(key, value, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.updateData(key, value, filter);
		} else {
			if(this.context == null || typeof this.context === "undefined"){
				this.context = {};				
				this.proxy.updateData(this.context);
			}
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key);
			property.value = value;
			this.proxy.resetCache();
		}
	}

	mergeContext(context, filter) {
		if (filter && filter != this.name) {
			if (this.parent)
				this.parent.mergeContext(context, filter);
		} else {
			this.context = this.context ? _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.context, context) : context;
		}
	}

	async resolve(aExpression, aDefault) {
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		try {
			const match = EXPRESSION.exec(aExpression);
			if (match)
				return await resolveMatch(this, match, defaultValue);
			else
				return await resolve(this, normalize(aExpression), null, defaultValue);
		} catch (e) {
			console.error("error at executing statment\"", aExpression, "\":", e);
			return defaultValue.hasValue ? defaultValue.value : aExpression;
		}
	}

	async resolveText(aText, aDefault) {
		let text = aText;
		let temp = aText; // required to prevent infinity loop
		let match = EXPRESSION.exec(text);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED
		while (match != null) {
			const result = await resolveMatch(this, match, defaultValue);
			temp = temp.split(match[0]).join(); // remove current match for next loop
			text = text.split(match[0]).join(typeof result === "undefined" ? "undefined" : (result == null ? "null" : result));
			match = EXPRESSION.exec(temp);
		}
		return text;
	}

	static async resolve(aExpression, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolve(aExpression, defaultValue));
				}, aTimeout);
			});

		return resolver.resolve(aExpression, defaultValue)
	}

	static async resolveText(aText, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolveText(aText, defaultValue));
				}, aTimeout);
			});

		return resolver.resolveText(aText, defaultValue);
	}
	
	static buildSecure({context, propFilter, option={deep:true}, name, parent}){
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].filter({data: context, propFilter, option});
		return new ExpressionResolver({context, name, parent});
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom || {
	VERSION : "${version}",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script(file, aTarget)));
	
	if(typeof aFile === "string")	
		return new Promise((r,e) => {
			const script = document.createElement("script");
			script.async = true;
			script.onload = function(){r()};
			script.onerror = function(){throw new Error("load error!")};
			!aTarget ? document.body.append(script) : aTarget.append(script);
			script.src = aFile;
		});
	else
		return Promise.reject("First parameter must be an array of strings or a string!");
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger("ready"));





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");



(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");





(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement,(0,_utils_Extender__WEBPACK_IMPORTED_MODULE_1__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

HTMLCollection.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

HTMLCollection.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		HTMLCollection.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

HTMLCollection.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof HTMLElement)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof HTMLCollection || arg instanceof NodeList || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof HTMLElement){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(HTMLCollection.prototype, data);
};


(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof HTMLCollection)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof HTMLElement || results[0] instanceof HTMLCollection)
		return HTMLCollection.from.apply(null, results);
	else
		return results;
},HTMLCollection.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




(0,_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

NodeList.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


(0,_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			const result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from(results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", Prototype => {
	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (() => {
				const result = {};
				this.getAttributeNames().forEach(name => {
					result[name] = this.getAttribute(name);
				});
				return result;
			})() : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {
	Prototype.data = function() {
		const data = {};
		if (typeof this.dataset !== "undefined")
			for (name in this.dataset)
				data[name] = this.dataset[name];

		this.data = (function() {
			if (arguments.length == 0)
				return data;
			else if (arguments.length == 1)
				return data[arguments[0]];
			else if (typeof arguments[1] === "undefined" || arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const DEFAULT_TIMEOUT = 100;
const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
	const EVENTSPLITER = /(\s+)|(\s*,\s*)/;
	const getWrapperHandleMap = (element) => {
		if (!element.__wrapperhandlemap__) element.__wrapperhandlemap__ = new Map();

		return element.__wrapperhandlemap__;
	};

	const getTriggerTimeouts = (element) => {
		if (!element.___EVENTTRIGGERTIMEOUTS___) element.___EVENTTRIGGERTIMEOUTS___ = {};

		return element.___EVENTTRIGGERTIMEOUTS___;
	};

	const removeWrapper = (element, data, eventTypes) => {
		const { wrapper, option, events, handle } = data;
		const capture = option.capture;
		if (eventTypes) {
			eventTypes = typeof eventTypes === "string" ? eventTypes.split(EVENTSPLITER) : eventTypes;
			for (let event of eventTypes) {
				const index = events.indexOf(event);
				if (index >= 0) {
					element.removeEventListener(event, wrapper, capture);
					events.splice(index, 1);
				}
				if (events.length == 0) getWrapperHandleMap(element).delete(handle);
			}
		} else {
			for (let event of events) {
				element.removeEventListener(event, wrapper, capture);
			}
			getWrapperHandleMap(element).delete(handle);
		}
	};

	Prototype.on = function () {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		let events = typeof args[0] === "string" ? args.shift().split(EVENTSPLITER) : args.shift();
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] === "undefined" ? { capture: false, once: false, passive: false } : typeof args[0] === "boolean" ? { capture: args.shift(), once: false, passive: false } : args.shift();
		const wrapper = function (event) {
			if (filter) {
				const target = event.target;
				if (typeof target.is === "function" && !target.is(filter)) return;
			}
			const result = handle.apply(null, arguments);
			if (option.once) removeWrapper(this, wrapper);
			return result;
		};

		getWrapperHandleMap(this).set(handle, { handle, wrapper: wrapper, events, option });

		for (let event of events) {
			this.addEventListener(event, wrapper, option);
		}

		return this;
	};

	Prototype.removeOn = function (handle, event, capture) {
		const data = getWrapperHandleMap(this).get(handle);
		if (data) removeWrapper(this, data, event);
		else this.removeEventListener(handle, event, capture);

		return this;
	};

	Prototype.trigger = function () {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts[type];
			if (timeoutid) clearTimeout(timeoutid);

			timeouts[type] = setTimeout(() => {
				delete timeouts[type];
				this.trigger.apply(this, args);
			}, timeout);
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 1 ? args.shift() : args) : delegate;
			const event = data ? new CustomEvent(type, { bubbles: true, cancelable: true, composed: true, detail: data }) : new Event(type, { bubbles: true, cancelable: true, composed: true });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", Prototype => {	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.add(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,clazz => this.classList.add(clazz));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.remove(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.remove(clazz));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.toggle(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.toggle(clazz));
		
		return this;
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", Prototype => {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
	};
	
	Prototype.map = function(){
		return Array.prototype.map.apply(Array.from(this), arguments);
	};
	
	Prototype.filter = function(){
		return Array.prototype.filter.apply(Array.from(this), arguments);
	};

	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");



const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach(content => {
				this.empty();
				if(typeof content === "string")
					this.append(content);
				else if(content instanceof Node || content instanceof NodeList || content instanceof HTMLCollection){
					this.append(content);
				}
			});		
			
		return this;
	};
	
	const append = function(){
		const append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(typeof arg.forEach === "function")
				arg.forEach(append);
		}
	};	
	Prototype.append = append;
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		if(this.childNodes.length == 0)
			append.apply(this, arguments);
		else {
			const first = this.childNodes.first();
			const insert = prepend.bind(this, first);
			for(let i = 0; i < arguments.length; i++){
				const arg = arguments[i];
				if(arg instanceof Node)
					insert(arg);
				else if(typeof arg === "string")
					arg.forEach(insert);
				else if(typeof arg.forEach === "function")
					arg.forEach(insert);
			}
		}
	};
	
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList || newNode instanceof HTMLCollection){
			newNode.forEach(aItem => parent.insertBefore(aItem, oldNode));
			oldNode.remove();
		}
		else
			parent.replaceChild(newNode,oldNode);
	};
	
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const next = this.nextSibling;
		if(next)
			Prototype.before.apply(next, arguments);
		else
			Prototype.append.apply(parent, arguments);
	};	
	
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const inserter = (node) => {parent.insertBefore(node, this);}
		for(let i = 0; i < arguments.length; i++){
			const arg = arguments[i];
			if(arg instanceof Node)
				inserter(arg);
			else if(typeof arg === "string")
				arg.forEach(inserter);
			else if(typeof arg.forEach === "function")
				arg.forEach(inserter);
		}
	};	
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function (aElement, aSelector) {
	let match = parentSelector.exec(aSelector);
	if (match) {
		let result = aElement;
		if (match.index > 0) {
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if (result.length == 0) return;
		}
		result = result.parent(match[2]);
		if (result) {
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if (nextSelector.length > 0) result = result.find(nextSelector);

			return result;
		}
	} else return aElement.querySelectorAll(aSelector);
};

const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", (Prototype) => {
	Prototype.find = function () {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while (arg) {
			if (typeof arg === "string") {
				let result = queryExecuter(this, arg);
				if (result) nodes.push(result);
			}

			arg = args.shift();
		}

		let result = NodeList.from.apply(null, nodes);
		return result;
	};

	Prototype.is = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return false;
		else if (arguments.length == 1) {
			if (typeof arguments[0] === "string") return this.matches(arguments[0]);
			else if (typeof arguments[0].length === "number") {
				let filter = arguments[0];
				for (let i = 0; i < filter.length; i++) if (this.matches(filter[i])) return true;
			}
		} else if (arguments.length > 1) return this.is(Array.from(arguments));

		return false;
	};

	Prototype.parent = function (selector, ignoreShadowRoot) {
		if (!this.parentNode) return null;
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;

		let parent = this.parentNode;
		if (parent instanceof ShadowRoot && ignoreShadowRoot) parent = parent.host;

		if (selector) {
			try {
				while (parent && !parent.is(selector)) parent = parent.parent(selector, ignoreShadowRoot);
			} catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return parent;
	};

	Prototype.parents = function () {
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while (parent) {
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}

		return NodeList.from(result);
	};

	Prototype.selector = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return undefined;
		else if (this.id) return "#" + this.id;
		else {
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if (parent) {
				let sameTagSiblings = parent.find(":scope>" + selector);
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0) selector += ":nth-child(" + (index + 1) + ")";
				}
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			}
			return selector;
		}
	};

	Prototype.closest = function (aQuery) {
		return this.closests(aQuery).first();
	};

	Prototype.closests = function (aQuery) {
		const result = this.find(aQuery);
		if (result.length != 0) return result;
		
		const parent = this.parentElement;
		if (parent) return parent.closests(aQuery);

		return NodeList.from([]);
	};

	Prototype.nested = function (aQuery) {
		if (this.is(aQuery)) return NodeList.from(this);

		let nested = this.find(aQuery);
		if (nested && nested.length > 0) return nested;
		else return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const HIDEVALUE = "none";

const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

const init = (element) => {	
	let display = !isHidden(element) ? element.style.display : "";
	
	element.show = (function(){
		this.style.display = display;
		return this;		
	}).bind(element);
	
	element.hide = (function(){
		this.style.display = HIDEVALUE;
		return this;		
	}).bind(element);
	
	return element;
};


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const InputTypes = [
	{
		selector : "select",
		get : function(){
			const result = [];
			this.find("option").forEach(option => {
				if(option.selected)
					result.push(option.value);
			});			
			return result;
		},
		set : function(){				
			let values = [];
			const args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(option => option.selected = values.indexOf(option.value) >= 0);			
			this.trigger("changed");
		}			
	},
	{
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
			this.trigger("changed");
		}
	}
];

const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}	
};

const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = (0,_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js");
/* harmony import */ var _dom_HtmlCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/HtmlCollection */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Global */ "./node_modules/@default-js/defaultjs-extdom/src/Global.js");














/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DelegaterBuilder = function() {
	const args = Array.from(arguments);
	const callback = args.shift();
	const source = args.shift();
	args.forEach( target =>{
		Object.getOwnPropertyNames(target)
		.forEach(name => {
			const prop = Object.getOwnPropertyDescriptor(target, name);
			if (typeof source[name] === "undefined" && typeof prop.value === "function")
				source[name] = function(){
					return callback.call(this, name, arguments);
				};										
		});
	});
	
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendPrototype);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Extender);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Utils = {
	global : (() => {
		if(typeof window !== "undefined") return window;
		if(typeof __webpack_require__.g !== "undefined") return __webpack_require__.g;
		if(typeof self !== "undefined") return self;
		return {};		
	})(),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _src_Component__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "componentBaseOf": () => (/* reexport safe */ _src_Component__WEBPACK_IMPORTED_MODULE_0__.componentBaseOf),
/* harmony export */   "define": () => (/* reexport safe */ _src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__.define)
/* harmony export */ });
/* harmony import */ var _src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Component.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Component.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentBaseOf": () => (/* binding */ componentBaseOf),
/* harmony export */   "createUID": () => (/* binding */ createUID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_UUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/UUID */ "./node_modules/@default-js/defaultjs-common-utils/src/UUID.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js");





const TIMEOUTS = new WeakMap();
const init = (component) => {
	let timeout = TIMEOUTS.get(component);
	if (timeout) clearTimeout(timeout);

	TIMEOUTS.get(component, setTimeout(async () => {
		TIMEOUTS.delete(component);
		try{
			await component.init();
			component.ready.resolve();
		}catch(e){
			console.error("Can't initialize component!", component, e);
			component.ready(resolve(e));
		}
		component.trigger((0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__.componentEventname)("initialzed", component));
	}, _Constants__WEBPACK_IMPORTED_MODULE_2__.initTimeout));	
};

const createUID = (prefix, suffix) => {
	let count = 0;
	let id = null;
    while(count < 100){
		id = `${prefix ? prefix : ""}${(0,_default_js_defaultjs_common_utils_src_UUID__WEBPACK_IMPORTED_MODULE_1__.uuid)()}${suffix ? suffix : ""}`;
		if(!document.getElementById(id))
			return id;

		count++;
	}
	console.error(new Error("To many retries to create an unique id - created id is not unique!"));
	return id;
};



const buildClass = (htmlBaseType) =>{
	return class Component extends htmlBaseType {

		#ready = (0,_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__.lazyPromise)();
		constructor({shadowRoot = false, content = null, createUID = false, uidPrefix = "id-", uidSuffix = ""} = {}) {
			super();
	
			if(createUID)
				this.attr("id", createUID(uidPrefix, uidSuffix));
	
			if(shadowRoot)
				this.attachShadow({mode:"open"});
			
			if(content)
				this.root.append(typeof content === "function" ? content(this) : content);
		}
	
		get root(){
			return this.shadowRoot || this;
		}
	
		get ready(){
			return this.#ready;
		}
	
		async init() {}
	
		async destroy() {
			if(this.ready.resolved)
			this.#ready =  (0,_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__.lazyPromise)();
		}
	
		connectedCallback() {
			if (this.ownerDocument == document && this.isConnected) init(this);
		}
	
		adoptedCallback() {
			this.connectedCallback();
		}
	
		attributeChangedCallback(name, oldValue, newValue) {
			if (oldValue != newValue && this.isConnected) {
				this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_2__.triggerTimeout, (0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__.attributeChangeEventname)(name, this));
				this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_2__.triggerTimeout, (0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_3__.componentEventname)("change", this));
			}
		}
	
		disconnectedCallback(){
			this.destroy();
		}
	};
} 

const CLAZZMAP = new Map();

const componentBaseOf = (htmlBaseType) => {
	let clazz = CLAZZMAP.get(htmlBaseType);
	if(clazz == null){
		clazz = buildClass(htmlBaseType);
		CLAZZMAP.set(htmlBaseType, clazz);
	}

	return clazz;
}

const Component = componentBaseOf(HTMLElement);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Constants.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributeChangeEventPrefix": () => (/* binding */ attributeChangeEventPrefix),
/* harmony export */   "componentPrefix": () => (/* binding */ componentPrefix),
/* harmony export */   "initTimeout": () => (/* binding */ initTimeout),
/* harmony export */   "triggerTimeout": () => (/* binding */ triggerTimeout)
/* harmony export */ });
const componentPrefix = "d-";
const attributeChangeEventPrefix = "attribute-";
const initTimeout = 10;
const triggerTimeout = 10;


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "define": () => (/* binding */ define),
/* harmony export */   "toNodeName": () => (/* binding */ toNodeName)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");


const toNodeName = (name, prefix) => {
	if(typeof prefix === "string")
		return prefix + name;
		
	return _Constants__WEBPACK_IMPORTED_MODULE_0__.componentPrefix + name;
};

const define = function(clazz, options) {
	const nodename = clazz.NODENAME;
	if (!customElements.get(nodename)) {
		customElements.define(nodename, clazz, options);
	}
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (define); 


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributeChangeEventname": () => (/* binding */ attributeChangeEventname),
/* harmony export */   "componentEventname": () => (/* binding */ componentEventname),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");


const componentEventname = (eventType, node ) => {	
	let nodename = "unsupported";
	if(typeof node === "string")
		nodename = node;
	else if(node instanceof HTMLElement)
		nodename = node.nodeName;
	else if(typeof node.NODENAME === "string")
		nodename = node.NODENAME;
	else throw new Error(`${typeof node} is not supported as parameter "node"!`);
	
   return `${nodename.toLowerCase()}:${eventType}`;//use @ as separtor and not :
};


const attributeChangeEventname = (attribute, node ) => {
    return componentEventname(`${_Constants__WEBPACK_IMPORTED_MODULE_0__.attributeChangeEventPrefix}-${attribute}`, node);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({componentEventname, attributeChangeEventname});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/NodeHelper.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "findClosestInDepth": () => (/* binding */ findClosestInDepth),
/* harmony export */   "findParent": () => (/* binding */ findParent)
/* harmony export */ });
const findParent = (node, check) => {
	while(node != null) {		
        if(check(node))
            return node;

        node = node.parent();			
    }
    
    return null;
};

const findClosest = (node, depth, check) => {
    if(check(node))
        return {node, depth}

    let result = null;
    for(let child of node.childNodes){
        const item = findClosest(child, depth + 1, check);

        if(item != null && (result == null || result.depth > item.depth))            
            result = item;
    }

    return result;
}

const findClosestInDepth = (node, check) => {
    const closest = findClosest(node, 0, check);
    return closest != null ? closest.node : null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({findParent, findClosestInDepth});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeakData)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");

class WeakData {
	constructor() {
		(0,_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__.defValue)(this, "weakmap", new WeakMap());
	}

	data(reference) {
		let data = this.weakmap.get(reference);
		if (!data) {
			data = {};
			this.weakmap.set(reference, data);
		}
		return data;
	}

	value(reference, key, value) {
		if (arguments.length == 2) return this.data(reference)[key];
		else if(typeof value === "undefined") delete this.data(reference)[key];
		else this.data(reference)[key] = value;
	}

	destroy(){
		this.weakmap.delete(reference);
	}
};



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseField": () => (/* reexport safe */ _src_BaseField__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "BaseSubmitAction": () => (/* reexport safe */ _src_submitActions_BaseSubmitAction__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Container": () => (/* reexport safe */ _src_Container__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Field": () => (/* reexport safe */ _src_Field__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Form": () => (/* reexport safe */ _src_Form__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "List": () => (/* reexport safe */ _src_List__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Page": () => (/* reexport safe */ _src_Page__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "SubmitActionResult": () => (/* reexport safe */ _src_submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _src_BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/BaseField */ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js");
/* harmony import */ var _src_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Field */ "./node_modules/@default-js/defaultjs-html-form/src/Field.js");
/* harmony import */ var _src_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Container */ "./node_modules/@default-js/defaultjs-html-form/src/Container.js");
/* harmony import */ var _src_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/List */ "./node_modules/@default-js/defaultjs-html-form/src/List.js");
/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Page */ "./node_modules/@default-js/defaultjs-html-form/src/Page.js");
/* harmony import */ var _src_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Form */ "./node_modules/@default-js/defaultjs-html-form/src/Form.js");
/* harmony import */ var _src_submitActions_BaseSubmitAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/submitActions/BaseSubmitAction */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/BaseSubmitAction.js");
/* harmony import */ var _src_submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/submitActions/SubmitActionResult */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/SubmitActionResult.js");











/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Base.js":
/*!******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Base.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _handels_ConditionHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handels/ConditionHandle */ "./node_modules/@default-js/defaultjs-html-form/src/handels/ConditionHandle.js");
/* harmony import */ var _handels_EditableHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handels/EditableHandle */ "./node_modules/@default-js/defaultjs-html-form/src/handels/EditableHandle.js");
/* harmony import */ var _handels_ValidationHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handels/ValidationHandle */ "./node_modules/@default-js/defaultjs-html-form/src/handels/ValidationHandle.js");
/* harmony import */ var _handels_MessageHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handels/MessageHandle */ "./node_modules/@default-js/defaultjs-html-form/src/handels/MessageHandle.js");
/* harmony import */ var _utils_DataHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/DataHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/DataHelper.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/StateHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/StateHelper.js");













const _form = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_7__.privatePropertyAccessor)("form");
const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_VALID, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_INVALID, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EDITABLE_CONDITION];

class Base extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}
	
	#conditionHandle;
	#editableHandle;
	#validationHandle;
	#messageHandle;

	constructor() {
		super();
		this.#messageHandle = new _handels_MessageHandle__WEBPACK_IMPORTED_MODULE_5__["default"](this);
		this.#conditionHandle = new _handels_ConditionHandle__WEBPACK_IMPORTED_MODULE_2__["default"](this);
		this.#editableHandle = new _handels_EditableHandle__WEBPACK_IMPORTED_MODULE_3__["default"](this);
		this.#validationHandle = new _handels_ValidationHandle__WEBPACK_IMPORTED_MODULE_4__["default"](this);
	}

	addValidation(validation) {
		this.#validationHandle.addCustomValidation(validation);
	}

	async validate(data) {		
		//console.log(`${this.nodeName}(${this.name}).validate:`, data)
		this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EVALUATE, "");
		const context = Object.assign({}, data, await (0,_utils_DataHelper__WEBPACK_IMPORTED_MODULE_6__.evaluationData)(this));
		await this.#conditionHandle.validate(context);
		await this.#editableHandle.validate(context);
		await this.#validationHandle.validate(context);
		this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EVALUATE, null);

		await this.#messageHandle.validate(context);

		return this.valid;
	}

	get form() {
		let form = _form(this);
		if (!form) {
			form = this.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_FORM);
			_form(this, form);
		}
		return form;
	}

	get active() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE);
	}

	set active(active) {
		const current = this.active;
		if (current != active) {
			(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__.updateActiveState)(this, active);
			this.activeUpdated();
		}
	}

	async activeUpdated() {}

	get readonly() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY);
	}

	set readonly(readonly) {
		if(!this.editable)
			(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__.updateReadonlyState)(this, true, !this.ready.resolved);
		else
			(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__.updateReadonlyState)(this, readonly, !this.ready.resolved);
		this.readonlyUpdated();
	}

	async readonlyUpdated() {}

	get editable() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EDITABLE);
	}

	set editable(editable) {
		(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__.updateEditableState)(this, editable, !this.ready.resolved);
		this.editableUpdated();		
		this.readonly = !editable;
	}

	async editableUpdated() {
	}

	set condition(condition){
		(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__.updateConditionState)(this, condition);
		this.conditionUpdated();
	}

	get condition() {
		return !this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_INVALID);
	}

	async conditionUpdated() {}

	set valid(valid){
		(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_8__.updateValidState)(this, valid);
		this.validUpdated();
	}

	get valid() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_VALID);
	}

	async validUpdated(){}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/BaseField.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_value": () => (/* binding */ _value),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "findParentField": () => (/* binding */ findParentField)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./node_modules/@default-js/defaultjs-html-form/src/Base.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _utils_ValueHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ValueHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/ValueHelper.js");





const _parent = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privatePropertyAccessor)("parent");
const _value = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__.privatePropertyAccessor)("value");

const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_REQUIRED, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NOVALUE];

const findParentField = (field) => {
	let parent = field.parentNode;
	while (parent) {
		if (parent instanceof BaseField) return parent;

		parent = parent.parentNode;
	}
	return null;
};

const updateHasValue = (hasValue, field) => {
	field.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NOVALUE, !hasValue ? "" : null);
};

class BaseField extends _Base__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(_Base__WEBPACK_IMPORTED_MODULE_1__["default"].observedAttributes);
	}

	constructor(options = {}) {
		super(options);
		const {value} = options;
		_value(this, value || null);		
	}

	async init(){
		this.ready.then(() => this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INITIALIZED));
		await super.init();
	}

	async destroy() {		
		this.publishValue(null);
		await super.destroy();
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_REMOVED);
	}

	get parentField() {
		let parent = _parent(this);
		if (!parent) {
			parent = findParentField(this);
			_parent(this, parent);
		}
		return parent;
	}

	async conditionUpdated() {
		this.active = this.condition;
		return this.publishValue();
	}

	get name() {
		return this.getAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME);
	}

	get required() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_REQUIRED);
	}

	get hasValue() {
		return !this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NOVALUE);
	}

	async value(value) {
		const {condition, valid, ready} = this;
		//console.log(`${this.nodeName}(${this.name}).value: `, arguments, {condition, valid});

		if (arguments.length == 0)
			return  !condition || !valid ? null : _value(this);		
		
		await ready;
		const currentValue = _value(this);

		if (await this.acceptValue(value)) {
			value = await this.normalizeValue(value) || value;
			if (currentValue != value) {				
				const result = await this.updatedValue(value);				
				if(typeof result !== "undefined")
					value = result;
				await this.publishValue(value);
			}
		}
	}

	async validate(data){
		const currentCondition = this.condition;
		const currentValid = this.valid;
		const valid = await super.validate(data);
		const condition = this.condition;
		this.validationStateChanged(currentCondition != condition,  currentValid != valid);

		return valid;
	}

	async validationStateChanged(conditionChange, validationChanged){
		const hasChange = conditionChange || validationChanged;
		if(hasChange)
			this.publishValue();
	}

	async updatedValue(value) { 
		return value;
	}

	async publishValue(value) {
		//console.log(`call ${this.nodeName}(${this.name}).publishValue:`, {arguments: arguments.length, value});
		await this.ready;
		if(arguments.length == 0)
			value = _value(this);

		//console.log("work with Value:", value)		
		const noValue = (0,_utils_ValueHelper__WEBPACK_IMPORTED_MODULE_3__.dataIsNoValue)(value);				
		const condition = this.condition;
		const required = this.required;
		value = required && noValue ? null : value;		
		
		if(!condition)
			value = null;
		else
			_value(this, value);

		//console.log(`${this.nodeName}(${this.name}).publishValue:`, {required, condition, noValue, value});

		updateHasValue(!noValue, this);

		if (this.parentField) await this.parentField.childValueChanged(this, value);
		else if(this.form) await this.form.childValueChanged(this, value);
	}

	async acceptValue(value) {
		return true;
	}

	async normalizeValue(value) {
		return value;
	}

	async childValueChanged(field, value) {}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseField);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Constants.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTE_ACTIVE": () => (/* binding */ ATTRIBUTE_ACTIVE),
/* harmony export */   "ATTRIBUTE_CONDITION": () => (/* binding */ ATTRIBUTE_CONDITION),
/* harmony export */   "ATTRIBUTE_CONDITION_INVALID": () => (/* binding */ ATTRIBUTE_CONDITION_INVALID),
/* harmony export */   "ATTRIBUTE_CONDITION_VALID": () => (/* binding */ ATTRIBUTE_CONDITION_VALID),
/* harmony export */   "ATTRIBUTE_DISABLED": () => (/* binding */ ATTRIBUTE_DISABLED),
/* harmony export */   "ATTRIBUTE_EDITABLE": () => (/* binding */ ATTRIBUTE_EDITABLE),
/* harmony export */   "ATTRIBUTE_EDITABLE_CONDITION": () => (/* binding */ ATTRIBUTE_EDITABLE_CONDITION),
/* harmony export */   "ATTRIBUTE_ENDPOINT": () => (/* binding */ ATTRIBUTE_ENDPOINT),
/* harmony export */   "ATTRIBUTE_EVALUATE": () => (/* binding */ ATTRIBUTE_EVALUATE),
/* harmony export */   "ATTRIBUTE_INPUT_MODE_AFTER_SUBMIT": () => (/* binding */ ATTRIBUTE_INPUT_MODE_AFTER_SUBMIT),
/* harmony export */   "ATTRIBUTE_INVALID": () => (/* binding */ ATTRIBUTE_INVALID),
/* harmony export */   "ATTRIBUTE_MAX": () => (/* binding */ ATTRIBUTE_MAX),
/* harmony export */   "ATTRIBUTE_METHOD": () => (/* binding */ ATTRIBUTE_METHOD),
/* harmony export */   "ATTRIBUTE_MIN": () => (/* binding */ ATTRIBUTE_MIN),
/* harmony export */   "ATTRIBUTE_NAME": () => (/* binding */ ATTRIBUTE_NAME),
/* harmony export */   "ATTRIBUTE_NOVALUE": () => (/* binding */ ATTRIBUTE_NOVALUE),
/* harmony export */   "ATTRIBUTE_PROGRESS": () => (/* binding */ ATTRIBUTE_PROGRESS),
/* harmony export */   "ATTRIBUTE_READONLY": () => (/* binding */ ATTRIBUTE_READONLY),
/* harmony export */   "ATTRIBUTE_REQUIRED": () => (/* binding */ ATTRIBUTE_REQUIRED),
/* harmony export */   "ATTRIBUTE_REQUIRED_ON_ACTIVE_ONLY": () => (/* binding */ ATTRIBUTE_REQUIRED_ON_ACTIVE_ONLY),
/* harmony export */   "ATTRIBUTE_STATE": () => (/* binding */ ATTRIBUTE_STATE),
/* harmony export */   "ATTRIBUTE_STEP": () => (/* binding */ ATTRIBUTE_STEP),
/* harmony export */   "ATTRIBUTE_USE_SUMMARY_PAGE": () => (/* binding */ ATTRIBUTE_USE_SUMMARY_PAGE),
/* harmony export */   "ATTRIBUTE_VALID": () => (/* binding */ ATTRIBUTE_VALID),
/* harmony export */   "EVENTHANDLE_INPUT_TIMEOUT": () => (/* binding */ EVENTHANDLE_INPUT_TIMEOUT),
/* harmony export */   "EVENTHANDLE_TIMEOUT": () => (/* binding */ EVENTHANDLE_TIMEOUT),
/* harmony export */   "EVENT_ACTIVE_STATE_CHANGED": () => (/* binding */ EVENT_ACTIVE_STATE_CHANGED),
/* harmony export */   "EVENT_ALL_PUBLISH_VALUE": () => (/* binding */ EVENT_ALL_PUBLISH_VALUE),
/* harmony export */   "EVENT_CONDITION_STATE_CHANGED": () => (/* binding */ EVENT_CONDITION_STATE_CHANGED),
/* harmony export */   "EVENT_EDITABLE_STATE_CHANGED": () => (/* binding */ EVENT_EDITABLE_STATE_CHANGED),
/* harmony export */   "EVENT_EXECUTE_VALIDATE": () => (/* binding */ EVENT_EXECUTE_VALIDATE),
/* harmony export */   "EVENT_FIELD_INITIALIZED": () => (/* binding */ EVENT_FIELD_INITIALIZED),
/* harmony export */   "EVENT_FIELD_INPUT": () => (/* binding */ EVENT_FIELD_INPUT),
/* harmony export */   "EVENT_FIELD_REMOVED": () => (/* binding */ EVENT_FIELD_REMOVED),
/* harmony export */   "EVENT_FORM_STATE_CHANGED": () => (/* binding */ EVENT_FORM_STATE_CHANGED),
/* harmony export */   "EVENT_INITIALIZE": () => (/* binding */ EVENT_INITIALIZE),
/* harmony export */   "EVENT_INITIALIZED": () => (/* binding */ EVENT_INITIALIZED),
/* harmony export */   "EVENT_INITIALIZE_SUBMIT_ACTION": () => (/* binding */ EVENT_INITIALIZE_SUBMIT_ACTION),
/* harmony export */   "EVENT_LIST_ROW_ADD": () => (/* binding */ EVENT_LIST_ROW_ADD),
/* harmony export */   "EVENT_LIST_ROW_DELETE": () => (/* binding */ EVENT_LIST_ROW_DELETE),
/* harmony export */   "EVENT_MESSAGE_INITIALIZED": () => (/* binding */ EVENT_MESSAGE_INITIALIZED),
/* harmony export */   "EVENT_MESSAGE_REMOVED": () => (/* binding */ EVENT_MESSAGE_REMOVED),
/* harmony export */   "EVENT_PAGE_INITIALIZED": () => (/* binding */ EVENT_PAGE_INITIALIZED),
/* harmony export */   "EVENT_PAGE_REMOVED": () => (/* binding */ EVENT_PAGE_REMOVED),
/* harmony export */   "EVENT_PREFIX": () => (/* binding */ EVENT_PREFIX),
/* harmony export */   "EVENT_PROGRESSBAR_CHANGED": () => (/* binding */ EVENT_PROGRESSBAR_CHANGED),
/* harmony export */   "EVENT_SITE_CHANGED": () => (/* binding */ EVENT_SITE_CHANGED),
/* harmony export */   "EVENT_SUBMIT": () => (/* binding */ EVENT_SUBMIT),
/* harmony export */   "EVENT_SUBMIT_RESULTS": () => (/* binding */ EVENT_SUBMIT_RESULTS),
/* harmony export */   "EVENT_VALIDATION_INITIALIZED": () => (/* binding */ EVENT_VALIDATION_INITIALIZED),
/* harmony export */   "EVENT_VALIDATION_REMOVED": () => (/* binding */ EVENT_VALIDATION_REMOVED),
/* harmony export */   "EVENT_VALID_STATE_CHANGED": () => (/* binding */ EVENT_VALID_STATE_CHANGED),
/* harmony export */   "EVENT_VALUE_CHANGED": () => (/* binding */ EVENT_VALUE_CHANGED),
/* harmony export */   "FORMSTATES": () => (/* binding */ FORMSTATES),
/* harmony export */   "FORMSTATE_FINISHED": () => (/* binding */ FORMSTATE_FINISHED),
/* harmony export */   "FORMSTATE_INIT": () => (/* binding */ FORMSTATE_INIT),
/* harmony export */   "FORMSTATE_INPUT": () => (/* binding */ FORMSTATE_INPUT),
/* harmony export */   "FORMSTATE_SUMMARY": () => (/* binding */ FORMSTATE_SUMMARY),
/* harmony export */   "FORMSTATE_VALIDATING": () => (/* binding */ FORMSTATE_VALIDATING),
/* harmony export */   "HTML_TAG_PREFIX": () => (/* binding */ HTML_TAG_PREFIX),
/* harmony export */   "NODENAME_CONTAINER": () => (/* binding */ NODENAME_CONTAINER),
/* harmony export */   "NODENAME_CONTROL": () => (/* binding */ NODENAME_CONTROL),
/* harmony export */   "NODENAME_CONTROL_BACK": () => (/* binding */ NODENAME_CONTROL_BACK),
/* harmony export */   "NODENAME_CONTROL_CANCEL": () => (/* binding */ NODENAME_CONTROL_CANCEL),
/* harmony export */   "NODENAME_CONTROL_NEXT": () => (/* binding */ NODENAME_CONTROL_NEXT),
/* harmony export */   "NODENAME_CONTROL_SUBMIT": () => (/* binding */ NODENAME_CONTROL_SUBMIT),
/* harmony export */   "NODENAME_CONTROL_SUMMARY": () => (/* binding */ NODENAME_CONTROL_SUMMARY),
/* harmony export */   "NODENAME_FIELD": () => (/* binding */ NODENAME_FIELD),
/* harmony export */   "NODENAME_FORM": () => (/* binding */ NODENAME_FORM),
/* harmony export */   "NODENAME_LIST": () => (/* binding */ NODENAME_LIST),
/* harmony export */   "NODENAME_LIST_ADD_ROW": () => (/* binding */ NODENAME_LIST_ADD_ROW),
/* harmony export */   "NODENAME_LIST_DELETE_ROW": () => (/* binding */ NODENAME_LIST_DELETE_ROW),
/* harmony export */   "NODENAME_LIST_ROW": () => (/* binding */ NODENAME_LIST_ROW),
/* harmony export */   "NODENAME_LIST_ROWS": () => (/* binding */ NODENAME_LIST_ROWS),
/* harmony export */   "NODENAME_MESSAGE": () => (/* binding */ NODENAME_MESSAGE),
/* harmony export */   "NODENAME_PAGE": () => (/* binding */ NODENAME_PAGE),
/* harmony export */   "NODENAME_PROGESSBAR": () => (/* binding */ NODENAME_PROGESSBAR),
/* harmony export */   "NODENAME_STEP": () => (/* binding */ NODENAME_STEP),
/* harmony export */   "NODENAME_SUBMIT_ACTION": () => (/* binding */ NODENAME_SUBMIT_ACTION),
/* harmony export */   "NODENAME_VALIDATION": () => (/* binding */ NODENAME_VALIDATION),
/* harmony export */   "REQUIREDSTATES": () => (/* binding */ REQUIREDSTATES),
/* harmony export */   "SPECIALVARS": () => (/* binding */ SPECIALVARS),
/* harmony export */   "TRIGGER_TIMEOUT": () => (/* binding */ TRIGGER_TIMEOUT)
/* harmony export */ });
const HTML_TAG_PREFIX = "d-";
const TRIGGER_TIMEOUT = 10;
const EVENTHANDLE_TIMEOUT = 10;
const EVENTHANDLE_INPUT_TIMEOUT = 50 * EVENTHANDLE_TIMEOUT;

const NODENAME_FORM = `${HTML_TAG_PREFIX}form`;
const NODENAME_SUBMIT_ACTION = `${HTML_TAG_PREFIX}submit-action`;
const NODENAME_PAGE = `${HTML_TAG_PREFIX}page`;
const NODENAME_FIELD = `${HTML_TAG_PREFIX}field`;
const NODENAME_CONTAINER = `${HTML_TAG_PREFIX}container`;

const NODENAME_LIST = `${HTML_TAG_PREFIX}list`;
const NODENAME_LIST_ROWS= `${HTML_TAG_PREFIX}rows`;
const NODENAME_LIST_ROW= `${HTML_TAG_PREFIX}row`;
const NODENAME_LIST_ADD_ROW= `${HTML_TAG_PREFIX}add-row`;
const NODENAME_LIST_DELETE_ROW= `${HTML_TAG_PREFIX}delete-row`;

const NODENAME_PROGESSBAR = `${HTML_TAG_PREFIX}progress-bar`;
const NODENAME_STEP = `${HTML_TAG_PREFIX}step`;

const NODENAME_VALIDATION = `${HTML_TAG_PREFIX}validation`;
const NODENAME_MESSAGE = `${HTML_TAG_PREFIX}message`;

const NODENAME_CONTROL = `${HTML_TAG_PREFIX}control`;
const NODENAME_CONTROL_BACK = `${HTML_TAG_PREFIX}control-back`;
const NODENAME_CONTROL_NEXT = `${HTML_TAG_PREFIX}control-next`;
const NODENAME_CONTROL_CANCEL = `${HTML_TAG_PREFIX}control-cancel`;
const NODENAME_CONTROL_SUMMARY = `${HTML_TAG_PREFIX}control-summary`;
const NODENAME_CONTROL_SUBMIT = `${HTML_TAG_PREFIX}control-submit`;


const FORMSTATE_INIT = "init";
const FORMSTATE_VALIDATING = "validating";
const FORMSTATE_INPUT = "input";
const FORMSTATE_SUMMARY = "summary";
const FORMSTATE_FINISHED = "finished";
const FORMSTATES = {
	init: FORMSTATE_INIT,
	validating: FORMSTATE_VALIDATING,
	input: FORMSTATE_INPUT,
	summary: FORMSTATE_SUMMARY,
	finished: FORMSTATE_FINISHED,
};

const REQUIREDSTATES = {
	always: "always",
	onActive: "on-active",
};

const EVENT_PREFIX = HTML_TAG_PREFIX + "form-";

const EVENT_INITIALIZE = `${EVENT_PREFIX}initialize`;
const EVENT_INITIALIZED = `${EVENT_PREFIX}initialized`;

const EVENT_INITIALIZE_SUBMIT_ACTION = `${EVENT_INITIALIZE}submit-action`;
const EVENT_SUBMIT = `${EVENT_PREFIX}submit`;
const EVENT_SUBMIT_RESULTS = `${EVENT_PREFIX}submit-results`;
const EVENT_EXECUTE_VALIDATE = `${EVENT_PREFIX}execute-validate`;
const EVENT_CONDITION_STATE_CHANGED = `${EVENT_PREFIX}condition-state-changed`;
const EVENT_ALL_PUBLISH_VALUE = `${EVENT_PREFIX}all-publish-value`;
const EVENT_VALUE_CHANGED = `${EVENT_PREFIX}field-value-changed`;
const EVENT_SITE_CHANGED = `${EVENT_PREFIX}site-changed`;
const EVENT_FORM_STATE_CHANGED = `${EVENT_PREFIX}state-changed`;
const EVENT_FIELD_INPUT = `${EVENT_PREFIX}field-input`;
const EVENT_LIST_ROW_ADD = `${EVENT_PREFIX}list-row-add`;
const EVENT_LIST_ROW_DELETE = `${EVENT_PREFIX}list-row-delete`;
const EVENT_PROGRESSBAR_CHANGED = `${EVENT_PREFIX}progress-bar-changed`;

const EVENT_FIELD_INITIALIZED = `${EVENT_PREFIX}field-initialized`;
const EVENT_FIELD_REMOVED = `${EVENT_PREFIX}field-removed`;

const EVENT_PAGE_INITIALIZED = `${EVENT_PREFIX}page-initialized`;
const EVENT_PAGE_REMOVED = `${EVENT_PREFIX}page-removed`;

const EVENT_VALIDATION_INITIALIZED = `${EVENT_PREFIX}validation-initialized`;
const EVENT_VALIDATION_REMOVED = `${EVENT_PREFIX}validation-removed`;

const EVENT_MESSAGE_INITIALIZED = `${EVENT_PREFIX}message-initialized`;
const EVENT_MESSAGE_REMOVED = `${EVENT_PREFIX}message-removed`;

const EVENT_ACTIVE_STATE_CHANGED = `${EVENT_PREFIX}active-state-changed`;
const EVENT_VALID_STATE_CHANGED = `${EVENT_PREFIX}valid-state-changed`;
const EVENT_EDITABLE_STATE_CHANGED = `${EVENT_PREFIX}editable-state-changed`;


const SPECIALVARS = {
	CURRENTVALUE: "$value",
	CURRENTLISTROW: "$item",
};

//ATTRIBUTES

const ATTRIBUTE_NAME = "name";
const ATTRIBUTE_ENDPOINT = "endpoint";
const ATTRIBUTE_METHOD = "method";
const ATTRIBUTE_STATE = "state";

const ATTRIBUTE_STEP = "step";
const ATTRIBUTE_USE_SUMMARY_PAGE = "use-summary-page";
const ATTRIBUTE_INPUT_MODE_AFTER_SUBMIT = "input-mode-after-submit";
const ATTRIBUTE_REQUIRED = "required";
const ATTRIBUTE_REQUIRED_ON_ACTIVE_ONLY = "required-on-active-only";
const ATTRIBUTE_CONDITION = "condition";
const ATTRIBUTE_ACTIVE = "active";
const ATTRIBUTE_DISABLED = "disabled";
const ATTRIBUTE_EDITABLE = "editable";
const ATTRIBUTE_EDITABLE_CONDITION = "editable-condition";
const ATTRIBUTE_READONLY = "readonly";
const ATTRIBUTE_NOVALUE = "no-value";
const ATTRIBUTE_VALID = "valid";
const ATTRIBUTE_INVALID = "invalid";
const ATTRIBUTE_EVALUATE = "evaluate";
const ATTRIBUTE_CONDITION_VALID = "condition-valid";
const ATTRIBUTE_CONDITION_INVALID = "condition-invalid";
const ATTRIBUTE_MIN = "min";
const ATTRIBUTE_MAX = "max";
const ATTRIBUTE_PROGRESS = "progress";


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Container.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Container.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");
/* harmony import */ var _utils_NodeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/NodeHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/NodeHelper.js");
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseField */ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _utils_DataHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/DataHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/DataHelper.js");
/* harmony import */ var _utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ValidationHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/ValidationHelper.js");








const ATTRIBUTES = [];
class Container extends _BaseField__WEBPACK_IMPORTED_MODULE_3__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(_BaseField__WEBPACK_IMPORTED_MODULE_3__["default"].observedAttributes);
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTAINER;
	}

	#fields = null;
	#value = new Map();

	constructor(options) {
		super(options);
		const root = this.root;
		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INITIALIZED, (event) => {
			const field = event.target;
			if (field != this) {
				if (field instanceof _BaseField__WEBPACK_IMPORTED_MODULE_3__["default"] && (!this.#fields || !this.#fields.has(field)))
					this.#fields = null;
				event.stopPropagation();
			}
		});

		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_REMOVED, (event) => {
			const field = event.target;
			if (field != this) {
				if (field instanceof _BaseField__WEBPACK_IMPORTED_MODULE_3__["default"] && this.#fields && this.#fields.has(field))
					this.#fields.delete(field);

				event.stopPropagation();
			}
		});

		this.addValidation(async ({ data }) => await (0,_utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_6__.validateFields)(data, this.fields));
	}

	get fields() {
		if(!this.#fields)
			this.#fields = new Set((0,_utils_NodeHelper__WEBPACK_IMPORTED_MODULE_2__.findFields)(this));

		return Array.from(this.#fields);
	}

	readonlyUpdated() {
		const { readonly, fields } = this;
		if (fields)
			for (let field of fields) {
				field.readonly = readonly;
			}
	}

	async updatedValue(value) {
		await this.ready;
		const map = this.#value;
		map.clear();
		const fields = this.fields;
		if (fields) {
			await Promise.all(fields.map(async (field) => {
				const name = field.name;
				const fieldValue = name ? (0,_utils_DataHelper__WEBPACK_IMPORTED_MODULE_5__.valueHelper)(value, field.name) : value;
				if(!(0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(fieldValue))
					map.set(field, fieldValue);
				await field.value(fieldValue);
			}));
		}

		let data = await (0,_utils_DataHelper__WEBPACK_IMPORTED_MODULE_5__.fieldValueMapToObject)(this.#value, fields);
		if (Object.getOwnPropertyNames(data).length == 0) data = null;

		return data;
	}

	async childValueChanged(field, value) {
		//console.log(`${this.nodeName}.childValueChanged(${field.name}):`, {field, value});
		value = await value;		
		const map = this.#value;		
		
		if (field) {
			const hasField = map.has(field);
			const currentValue = map.get(field) == null;
			//console.log({name: field.name, currentValue, value, hasField})

			if(hasField && currentValue == value)
				return;
			if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(value)) {
				//console.log(`delete ${field.name}`);
				map.delete(field);
			}
			else {
				//console.log(`set ${field.name} = ${value}`);
				map.set(field, value);
			}				
		}	

		let data = await (0,_utils_DataHelper__WEBPACK_IMPORTED_MODULE_5__.fieldValueMapToObject)(map, this.fields);
		//console.log("data: ",data);
		if (Object.getOwnPropertyNames(data).length == 0) data = null;

		await this.publishValue(data);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_4__.define)(Container);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Control.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Control.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./node_modules/@default-js/defaultjs-html-form/src/controls/index.js");




const BUTTONDUMMY = {
	active: true,
	disabled: true,
};

const ATTRIBUTES = [];
class Control extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL;
	}

	#form;
	#back;
	#next;
	#summary;
	#submit;
	#initialized = false;

	constructor() {
		super();
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.#form = this.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_FORM);
			this.#back = this.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_BACK).first() || BUTTONDUMMY;
			this.#next = this.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_NEXT).first() || BUTTONDUMMY;
			this.#summary = this.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_SUMMARY).first() || BUTTONDUMMY;
			this.#submit = this.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_SUBMIT).first() || BUTTONDUMMY;

			this.#form.on([_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_INITIALIZED, _Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FORM_STATE_CHANGED, _Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_SITE_CHANGED], () => {
				this.update();
			});

			this.#initialized = true;
		}
	}

	

	async update() {
		const form = this.#form;
		const state = form.state;
		const back = this.#back;
		const next = this.#next;
		const summary = this.#summary;
		const submit = this.#submit

		// basic control setup
		back.active = true;
		back.disabled = true;
		next.active = false;
		next.disabled = true;
		summary.active = false;
		summary.disabled = true;
		submit.active = false;
		submit.disabled = true;

		if(state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_VALIDATING)
			return;

		const { activePageIndex, activePage, nextPage, pages, useSummaryPage } = form;	
		const hasNextPage = (await nextPage) != null;

		if (state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_FINISHED) {
			back.disabled = true;
			submit.active = true;
		} else if (state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_SUMMARY) {
			back.disabled = false;
			submit.active = true;
			submit.disabled = !form.valid;
		} else if (state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
			back.disabled = activePageIndex <= 0;

			if (hasNextPage || (!activePage.valid && activePageIndex + 1 < pages.length)) {
				next.active = true;
				next.disabled = !activePage.valid;
			} else if (useSummaryPage && state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
				summary.active = true;
				summary.disabled = !activePage.valid;
			} else {
				submit.active = true;
				submit.disabled = !form.valid;
			}
		}
	}
}
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(Control);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Field.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Field.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseField */ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/index.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");






const ATTRIBUTES = ["file-format"];

class Field extends _BaseField__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(_BaseField__WEBPACK_IMPORTED_MODULE_1__["default"].observedAttributes);
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_FIELD;
	}

	#initialized = false;
	#wrapper;

	constructor(options) {
		super(options);
		this.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, (event) => {
			event.preventDefault();
			event.stopPropagation();
			this.publishValue(event.detail || null);
		});
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.#initialized = true;
			this.#wrapper = (0,_wrapper__WEBPACK_IMPORTED_MODULE_2__.findWrapper)(this);
			if (this.#wrapper){
				this.addValidation(async () => this.#wrapper.valid);
				this.publishValue(this.#wrapper.value);
			}
		}
	}

	readonlyUpdated() {
		if (this.#wrapper) this.#wrapper.readonly = this.readonly;
	}

	async acceptValue(value) {
		return this.#wrapper ? this.#wrapper.acceptValue(value) : false;
	}

	async normalizeValue(value) {
		if (this.#wrapper) return this.#wrapper.normalizeValue(value);

		return value;
	}

	async updatedValue(value) {
		await this.ready;
		value = await value;
		const wrapper = this.#wrapper;
		if (wrapper){
			const current = wrapper.value || null;
			if(current != value)
				await wrapper.updatedValue(value);
		}
		await super.updatedValue(value);
	}

	async validationStateChanged(conditionChange, validationChanged){		
		if(conditionChange && this.condition){			
			const wrapper = this.#wrapper;
			const value = wrapper.value || null;
			//console.log(`validationStateChanged(${this.name} (${conditionChange}, ${validationChanged}) -> ${value}`)
			(0,_BaseField__WEBPACK_IMPORTED_MODULE_1__._value)(this, value);
		}
		
		return super.validationStateChanged(conditionChange, validationChanged);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_3__.define)(Field);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Form.js":
/*!******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Form.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./node_modules/@default-js/defaultjs-html-form/src/Message.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Page */ "./node_modules/@default-js/defaultjs-html-form/src/Page.js");
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Control */ "./node_modules/@default-js/defaultjs-html-form/src/Control.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar */ "./node_modules/@default-js/defaultjs-html-form/src/ProgressBar.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _submitActions_BaseSubmitAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submitActions/BaseSubmitAction */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/BaseSubmitAction.js");
/* harmony import */ var _submitActions_DefaultFormSubmitAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submitActions/DefaultFormSubmitAction */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/DefaultFormSubmitAction.js");
/* harmony import */ var _submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submitActions/SubmitActionResult */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/SubmitActionResult.js");
/* harmony import */ var _utils_DataHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/DataHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/DataHelper.js");
/* harmony import */ var _utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/ValidationHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/ValidationHelper.js");















const _submitActions = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_7__.privatePropertyAccessor)("submitAction");

const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_USE_SUMMARY_PAGE, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ENDPOINT, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_METHOD, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_STATE, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_INPUT_MODE_AFTER_SUBMIT];

const readonly = (form, readonly) => {
	for (let page of form.pages) {
		page.readonly = readonly;
		page.active = readonly;
	}
};

const executeActions = async (actions, data) => {
	const results = [];
	for (let action of actions) {
		const accept = await action.accept(data);
		if (accept) {
			try {
				const result = (await action.execute(data)) || new _submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_10__["default"](action, _submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_10__.STATE_SUCCESS);
				results.push(result);
				if (result.state == _submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_10__.STATE_FAIL) return results;
			} catch (e) {
				results.push(new _submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_10__["default"](action, _submitActions_SubmitActionResult__WEBPACK_IMPORTED_MODULE_10__.STATE_FAIL, e));
				return results;
			}
		}
	}
	return results;
};

class Form extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_FORM;
	}

	#initialized = false;
	#state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INIT;
	#pages;
	#value = new Map();
	#data = {};
	#validation = null;
	#hasNextValidation = false;

	constructor() {
		super();
		const root = this.root;
		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_PAGE_INITIALIZED, (event) => {
			event.preventDefault();
			event.stopPropagation();
		});

		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_PAGE_REMOVED, (event) => {
			const page = event.target;
			this.#pages = null;
			this.childValueChanged(page, null);

			event.preventDefault();
			event.stopPropagation();
		});

		this.ready.then(() => this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_INITIALIZED));
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.#initialized = true;
			this.activePageIndex = -1;

			this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INIT;

			this.useSummaryPage = this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_USE_SUMMARY_PAGE);

			this.activePageIndex = -1;
			if (this.pages.length > 0) this.toNextPage();			
		}
	}

	get pages() {
		if (!this.#pages) this.#pages = Array.from(this.root.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_PAGE));

		return this.#pages;
	}

	get state() {
		return this.#state;
	}

	set state(state) {
		const actual = this.#state;
		if (state != _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_VALIDATING) {
			if (actual == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT && state != _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) readonly(this, true);
			else if (actual != _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT && state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
				readonly(this, false);
				if (this.activePage) this.activePage.active = true;
			}
		}
		this.#state = state;

		if (actual != state) this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FORM_STATE_CHANGED);
		this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_STATE, state);
	}

	get valid() {
		for (let page of this.pages) if (page.condition && !page.valid) return false;

		return true;
	}

	async value(data) {
		await this.ready;
		if (this.#validation) await this.#validation;
		if (arguments.length == 0) return this.#data;

		if (this.state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
			await Promise.all(this.pages.map(page => {				
				const name = page.name;
				return name ? page.value((0,_utils_DataHelper__WEBPACK_IMPORTED_MODULE_11__.valueHelper)(data, name)) : page.value(data);
			}));

			await this.#validate();
		}else{
			return new Promise((resolve) => {
				const handle = (event) => {
					event.stopPropagation();
					this.removeOn(handle, _Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FORM_STATE_CHANGED);
					resolve(this.value(data));
				}
				this.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FORM_STATE_CHANGED, handle)
			});
		}
	}

	get activePage() {
		if (0 <= this.activePageIndex && this.activePageIndex < this.pages.length) return this.pages[this.activePageIndex];

		return null;
	}

	set activePage(page) {
		const current = this.activePage;
		if (page != current || this.state != _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
			if (current) current.active = false;
			this.activePageIndex = this.pages.indexOf(page);
			page.active = true;
			if (this.state != _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT;

			this.scrollIntoView();
			this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_SITE_CHANGED);
		}
	}

	get prevPage() {
		return (async () => {			
			const pages = this.pages;
			const start = this.activePageIndex - 1;
			const data = await this.value();
			for (let i = start; i >= 0; i--) {
				const page = pages[i];
				await page.validate(data);
				if (page.condition) return page;
			}

			return null;
		})();
	}

	get nextPage() {
		return (async () => {
			const pages = this.pages;
			const start = this.activePageIndex + 1;
			const data = await this.value();
			if (pages) {
				for (let i = start; i < pages.length; i++) {
					const page = pages[i];
					await page.validate(data);
					if (page.condition) return page;
				}
			}
			return null;
		})();
	}

	async toPrevPage() {
		if (this.state != _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
			this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT;
		} else {
			const prev = await this.prevPage;
			if (prev) this.activePage = prev;
		}
	}

	async toNextPage() {
		const next = await this.nextPage;
		if (next) {
			this.activePage = next;
			this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT;
		} else if (this.useSummaryPage) {
			this.summary();
		} else {
			this.submit();
		}
	}

	async summary() {
		this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_SUMMARY;
	}

	get submitActions() {
		let actions = _submitActions(this);
		if (!actions) {
			actions = [];
			let endpoint = this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ENDPOINT);
			if (endpoint) {
				const method = this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_METHOD) || "post";
				this.append(new _submitActions_DefaultFormSubmitAction__WEBPACK_IMPORTED_MODULE_9__["default"](endpoint, method));
			}

			const childs = this.children;
			for (let child of childs) {
				if (child instanceof _submitActions_BaseSubmitAction__WEBPACK_IMPORTED_MODULE_8__["default"]) actions.push(child);
			}
			_submitActions(this, actions);
		}

		return actions;
	}

	async submit() {
		const data = await this.value();
		const valid = await (0,_utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_12__.validateFields)(data, this.pages);
		if (!valid) return;

		if (!this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_INPUT_MODE_AFTER_SUBMIT)) this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_FINISHED;

		const actions = this.submitActions;
		if (actions) {
			const results = await executeActions(actions, data);
			this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_SUBMIT_RESULTS, results);
		}

		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_SUBMIT, data);
	}

	#validate(page) {
		if (this.state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
			this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_VALIDATING;
			return (this.#validation = new Promise((resolved) => {
				setTimeout(async () => {
					const data = this.#data;//await fieldValueMapToObject(this.#value);
					
					const valid = page ? page.validate(data) : await (0,_utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_12__.validateFields)(data, this.pages);

					if (!this.#hasNextValidation) this.state = _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT;

					this.validation = null;
					resolved(valid);
				}, 10);
			}));
		} else if (this.state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_VALIDATING) {
			this.#validation.then(async () => {
				this.#hasNextValidation = false;
				await this.#validate(page);
			});
		}
	}

	async childValueChanged(field, value) {
		await this.ready;		
		value = await value;
		const map = this.#value;
		//console.log(`form.childValueChanged(${field.name})`, { field, value });
		if (field) {
			if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_6__.noValue)(value)) map.delete(field);
			else map.set(field, value);
		}

		this.#data = await (0,_utils_DataHelper__WEBPACK_IMPORTED_MODULE_11__.fieldValueMapToObject)(this.#value, this.pages);

		const activePage = this.activePage;
		if (activePage) await this.#validate(activePage);
		else await this.#validate();
	}
}
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(Form);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/FormButton.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");



const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_DISABLED];

class FormButton extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	#initialized = false;
	#form;

	constructor() {
		super();

		this.on("click", (event) => {
			event.preventDefault();
			event.stopPropagation();

			if (this.active && !this.disabled) this.execute();
		});
	}

	async init() {
		await super.init();
		if (this.#initialized) {
			this.active = false;
			this.disabled = false;
			this.#initialized = true;
		}
	}

	get form() {
		if (!this.#form)
			this.#form = this.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_FORM);

		return this.#form;
	}

	get active() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE);
	}

	set active(active) {
		this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, active ? "" : null);
	}

	get disabled() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_DISABLED);
	}

	set disabled(disabled) {
		this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_DISABLED, disabled ? "" : null);
	}

	execute() {
		console.log("execute");
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormButton);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/List.js":
/*!******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/List.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _utils_NodeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/NodeHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/NodeHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseField */ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js");
/* harmony import */ var _list_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/Row */ "./node_modules/@default-js/defaultjs-html-form/src/list/Row.js");
/* harmony import */ var _list_AddRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/AddRow */ "./node_modules/@default-js/defaultjs-html-form/src/list/AddRow.js");
/* harmony import */ var _list_DeleteRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/DeleteRow */ "./node_modules/@default-js/defaultjs-html-form/src/list/DeleteRow.js");
/* harmony import */ var _list_Rows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/Rows */ "./node_modules/@default-js/defaultjs-html-form/src/list/Rows.js");
/* harmony import */ var _utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/ValidationHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/ValidationHelper.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");











const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_MIN, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_MAX];

const buildData = async (rows, values) => {
	let data = [];
	for (let row of rows) data.push(values.get(row));

	if (data.length == 0) data = null;

	return data;
};

class List extends _BaseField__WEBPACK_IMPORTED_MODULE_3__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(_BaseField__WEBPACK_IMPORTED_MODULE_3__["default"].observedAttributes);
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST;
	}

	#template;
	#container;
	#values = new Map();
	#addRowButton;
	#initialized = false;

	constructor(options) {
		super(options);

		const root = this.root;
		root.on(_list_AddRow__WEBPACK_IMPORTED_MODULE_5__.EVENT__INITIALIZED__BUTTON__ADDROW, (event) => {
			this.#addRowButton = event.target;
			event.stopPropagation();
		});


		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INITIALIZED, (event) => {
			const target = event.target;
			if(target != this){
				event.preventDefault();
				event.stopPropagation();
			}
		});

		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_LIST_ROW_ADD, (event) => {
			event.preventDefault();
			event.stopPropagation();

			const { readonly } = this;
			if (!readonly) this.createRow();
		});

		root.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_LIST_ROW_DELETE, (event) => {
			event.preventDefault();
			event.stopPropagation();

			const { rows, readonly } = this;
			if (!readonly) {
				const row = event.target.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ROW);
				const index = rows.indexOf(row);
				if (index >= 0) {
					row.remove();
				}
			}
		});

		this.addValidation(async () => {
			const { rows, min, max, readonly } = this;
			const length = rows.length;
			if (this.#addRowButton && !readonly) {
				if (length == max) this.#addRowButton.disabled = true;
				else if (length < max) this.#addRowButton.disabled = false;
			}
			return min <= length && length <= max;
		});

		this.addValidation(async (data) => {
			return await (0,_utils_ValidationHelper__WEBPACK_IMPORTED_MODULE_8__.validateFields)(data, this.rows);
		});
	}

	async init() {
		await super.init();
		if (!this.#initialized) {			
			this.#initialized = true;
			const rowTemplate = this.find("template").first();
			if(rowTemplate)
				this.#template = rowTemplate.content;

			this.#container = this.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ROWS).first();
		}
	}

	readonlyUpdated() {
		const { readonly } = this;
		for (let row of this.rows) {
			row.readonly = readonly;
		}
	}

	get rows() {
		if(this.#container)
			return Array.from(this.#container.children);
		return [];
	}

	get min() {
		if (this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_MIN)) return Math.max(0, parseInt(this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_MIN)));
		return 0;
	}

	get max() {
		if (this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_MAX)) return parseInt(this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_MAX));
		return Number.MAX_SAFE_INTEGER;
	}

	acceptValue(value) {
		return !value || value instanceof Array;
	}

	normalizeValue(value) {
		return value ? value.filter((item) => !!item) : null;
	}

	async createRow(value) {
		const row = document.importNode(this.#template, true).children[0];
		await this.#container.append(row);

		if (value) await row.value(value);

		return row;
	}

	async updatedValue(values) {
		this.#values.clear();
		this.#container.empty();
		if (values) await Promise.all(values.map(value => this.createRow(value)));

		return await buildData(this.rows, this.#values);
	}

	async childValueChanged(row, value) {
		value = await value;
		const values = this.#values;

		if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_9__.noValue)(value)) this.#values.delete(row);
		else this.#values.set(row, value);

		await super.childValueChanged(row, value);
		const data = await buildData(this.rows, values);
		await this.publishValue(data);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(List);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Message.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Message.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTE_ACTIVE": () => (/* binding */ ATTRIBUTE_ACTIVE),
/* harmony export */   "ATTRIBUTE_CONDITION": () => (/* binding */ ATTRIBUTE_CONDITION),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");




const ATTRIBUTE_ACTIVE = "active";
const ATTRIBUTE_CONDITION = "condition";
const ATTRIBUTES = [ATTRIBUTE_ACTIVE, ATTRIBUTE_CONDITION];



class Message extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_2__.NODENAME_MESSAGE;
	}

	constructor() {
		super();
	}

	async init() {
		await super.init();
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_MESSAGE_INITIALIZED);
	}

	async destroy(){
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_MESSAGE_REMOVED);
		await super.destroy();
	}

	get active() {
		return this.hasAttribute(ATTRIBUTE_ACTIVE);
	}
	set active(active) {
		active ? this.attr(ATTRIBUTE_ACTIVE, "") : this.attr(ATTRIBUTE_ACTIVE, undefined);
	}

	get condition() {
		return this.attr(ATTRIBUTE_CONDITION);
	}

	async update(data) {
		await this.ready;
		this.active = await _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolver.resolve(this.condition, data, false);
	}
}
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(Message);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Page.js":
/*!******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Page.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./node_modules/@default-js/defaultjs-html-form/src/Container.js");




const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_STEP];

class Page extends _Container__WEBPACK_IMPORTED_MODULE_2__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(_Container__WEBPACK_IMPORTED_MODULE_2__["default"].observedAttributes);
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_PAGE;
	}
	
	constructor(options) {
		super(options);
		this.ready.then(() => this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_PAGE_INITIALIZED));
	}

	async destroy(){
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_PAGE_REMOVED);
		await super.destroy();
	}

	get step(){
		return this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_STEP);
	}
	
	conditionUpdated(){}
}
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(Page);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/ProgressBar.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/ProgressBar.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Step */ "./node_modules/@default-js/defaultjs-html-form/src/Step.js");




const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_PROGRESS];

const firstStepPageIndex = (pages, step, activePage) => {
	for (let page of pages) {
		if (page.step == step && page.condition) return page;
		else if (page == activePage) return;
	}

	return null;
};

class ProgressBar extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_PROGESSBAR;
	}

	#form;
	#steps;
	#initialized = false;
	constructor() {
		super();
		this.on("click", ({ target }) => {
			if (!this.#form) return;
			if (target == this) return;			
			const step = target.is(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_STEP) ? target : target.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_STEP);
			const form = this.#form;

			if (!step) return;

			const {state, pages, activePage} = form;
			const stepName = step.name;
			if (state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT || state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_SUMMARY) {
				const page = firstStepPageIndex(pages, stepName, activePage);
				if (page) form.activePage = page;
			}
		});
	}

	async init() {
		await super.init();
		this.progress = 0;
		if (!this.#initialized) {
			const form = this.#form = this.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_FORM);
			this.#steps = this.find(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_STEP);
			this.#form.on([_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_SITE_CHANGED,_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FORM_STATE_CHANGED], () => {
				const state = form.state;
				if(_Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_VALIDATING == state)
					return;

					
				const {activePageIndex, activePage, pages} = form;
				if (!activePage) 
					return;

				const count = pages.length;
				const pageStep = activePage ? activePage.step : _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INIT;
				const progress = Math.floor((activePageIndex * 100) / count);

				for (let step of this.steps) {
					const name = step.name;
					if (state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_INPUT) {
						step.active = name == pageStep;
						step.readonly = false;
					} else if (state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_SUMMARY) {
						step.active = name == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_SUMMARY;
						step.readonly = false;
					} else {
						step.active = name == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_FINISHED;
						step.readonly = true;
					}
				}

				this.progress = state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_SUMMARY || state == _Constants__WEBPACK_IMPORTED_MODULE_0__.FORMSTATE_FINISHED ? 100 : progress;

				this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_PROGRESSBAR_CHANGED);
			});

			this.#initialized = true;
		}
	}

	get steps(){
		return Array.from(this.#steps);
	}

	get progress() {
		return this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_PROGRESS);
	}

	set progress(progress) {
		if (this.style.setProperty) this.style.setProperty("--progress", progress + "%");
		this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_PROGRESS, Math.max(0, Math.min(progress, 100)));
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(ProgressBar);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Step.js":
/*!******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Step.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _utils_StateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/StateHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/StateHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY];

class Step extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_STEP;
	}

	constructor() {
		super();
	}

    get name(){
        return this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME);
    }
    
    get active() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE);
	}

	set active(active) {
		const current = this.active;
		if (current != active) {
			(0,_utils_StateHelper__WEBPACK_IMPORTED_MODULE_1__.updateActiveState)(this, active);
		}
	}

	get readonly() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY);
	}

	set readonly(readonly) {
		readonly ? this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY, "") : this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY, null);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(Step);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Step);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/Validation.js":
/*!************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/Validation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");



const ATTRIBUTES = [_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, _Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION];


class Validation extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_VALIDATION;
	}

	constructor() {
		super();
	}

	async init() {
		await super.init();
		this.active = false;
		this.ready.then(() => this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_VALIDATION_INITIALIZED));
	}

	async destroy() {
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_VALIDATION_REMOVED);
		await super.destroy();
	}

	get active() {
		return this.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE);
	}
	set active(active) {
		active ? this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, "") : this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, undefined);
	}

	get condition() {
		return this.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION);
	}
}
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(Validation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validation);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/controls/BackButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/controls/BackButton.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormButton */ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const ATTRIBUTES = [];
class BackButton extends _FormButton__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_BACK;
	}

	constructor() {
		super();
	}

	execute() {
		this.form.toPrevPage();
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(BackButton);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/controls/NextButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/controls/NextButton.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormButton */ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const ATTRIBUTES = [];
class NextButton extends _FormButton__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}
	
	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_NEXT;
	}

	constructor() {
		super();
	}

	execute() {
		this.form.toNextPage();
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextButton);
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(NextButton);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/controls/SubmitButton.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/controls/SubmitButton.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormButton */ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const ATTRIBUTES = [];
class SubmitButton extends _FormButton__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_SUBMIT;
	}

	constructor() {
		super();
	}
	execute() {
		this.form.submit();
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitButton);
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(SubmitButton);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/controls/SummaryButton.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/controls/SummaryButton.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormButton */ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const ATTRIBUTES = [];
class SummaryButton extends _FormButton__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_CONTROL_SUMMARY;
	}

	constructor() {
		super();
	}
	execute() {
		this.form.toNextPage();
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SummaryButton);
(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(SummaryButton);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/controls/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/controls/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButton": () => (/* reexport safe */ _BackButton__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "NextButton": () => (/* reexport safe */ _NextButton__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SubmitButton": () => (/* reexport safe */ _SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "SummaryButton": () => (/* reexport safe */ _SummaryButton__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton */ "./node_modules/@default-js/defaultjs-html-form/src/controls/BackButton.js");
/* harmony import */ var _NextButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextButton */ "./node_modules/@default-js/defaultjs-html-form/src/controls/NextButton.js");
/* harmony import */ var _SummaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryButton */ "./node_modules/@default-js/defaultjs-html-form/src/controls/SummaryButton.js");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitButton */ "./node_modules/@default-js/defaultjs-html-form/src/controls/SubmitButton.js");








/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/handels/ConditionHandle.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/handels/ConditionHandle.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");



class ConditionHandle {

    #base;
    #condition;

    constructor(base){  
        this.#base = base;
    }

    get condition(){
        if(!this.#condition)
            this.#condition = this.#base.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION) || false;

        return this.#condition;
    }

    async validate(data){
        const base = this.#base;        
        let condition = this.condition;
        const current = base.condition;
        
        //console.log(`condition(${base.name})`, condition, data);        
        
        condition = condition ? await _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_1__.ExpressionResolver.resolve(condition, data, false) : true;
        if(condition != current)
            base.condition = condition

        //console.log(`condition(${base.name}) result:`, condition);
        return condition;
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionHandle);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/handels/EditableHandle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/handels/EditableHandle.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");



class EditableHandle {
	#base;
	#condition = null;

	constructor(base) {
		this.#base = base;
	}

	get condition() {
		if (this.#condition == null)
			this.#condition = this.#base.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EDITABLE_CONDITION) || "";

		return this.#condition;
	}

	async validate(data) {
        let editable = true;
		const current = this.#base.editable;
        /*const {hasValue, required} = this.#base;
        
        if(!hasValue && required)
            editable = true;
        else*/ if(this.condition)
            editable = await _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_1__.ExpressionResolver.resolve(this.condition, data, false);

		if (editable != current) this.#base.editable = editable;

		return editable;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableHandle);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/handels/MessageHandle.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/handels/MessageHandle.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");



class MessageHandle {

    #messages = new Set();

    constructor(base){
        base.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_MESSAGE_INITIALIZED, (event) =>{
            event.preventDefault();
            event.stopPropagation();
            const target = event.target;
            this.#messages.add(target);
        });

        base.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_MESSAGE_REMOVED, (event) =>{            
            event.preventDefault();
            event.stopPropagation();
            const target = event.target;
            this.#messages.delete(target);
        }); 
    }

    async validate(data) {
        for(let message of this.#messages)
            message.update(data);
    }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageHandle);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/handels/ValidationHandle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/handels/ValidationHandle.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");



const validateCustomValidations = async (validations, data, base) => {
	let valid = true;
	for (let check of validations) {
		if (!(await check({ data, base }))) valid = false;
	}
	return valid;
};

class ValidationHandle {
	#base;
	#validations = new Set();
	#customs = new Set();

	constructor(base) {
		this.#base = base;
		base.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_VALIDATION_INITIALIZED, (event) => {
			event.stopPropagation();
			this.#validations.add(event.target);
		});

		base.on(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_VALIDATION_REMOVED, (event) => {
			event.stopPropagation();
			this.#validations.delete(event.target);
		});
	}

	addCustomValidation(validation) {
		this.#customs.add(validation);
	}

	async validate(data) {
		const base = this.#base;
		const customs = this.#customs;
		const validations = this.#validations;
		const currentValid = this.#base.valid;
		const { hasValue, required, condition, editable } = this.#base;

		//console.log(`${base.nodeName}(${base.name}) validate:`, { hasValue, required, condition, editable, currentValid }, data, base.nodeName);
		let valid = true;
		if (condition) {
			valid = required ? hasValue : true;

			if (!(await validateCustomValidations(customs, data, base))) valid = false;

			for (let validation of validations) {
				if (valid && hasValue) {
					const test = await _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_1__.ExpressionResolver.resolve(validation.condition, data, true);
					validation.active = !test;
					if (!test) valid = false;
				} else validation.active = false;
			}
		}

		base.valid = valid;

		//console.log(`${base.nodeName}(${base.name}) validate result:`, {valid});
		return valid;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationHandle);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/list/AddRow.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/list/AddRow.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT__INITIALIZED__BUTTON__ADDROW": () => (/* binding */ EVENT__INITIALIZED__BUTTON__ADDROW),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormButton */ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const EVENT__INITIALIZED__BUTTON__ADDROW = `${_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ADD_ROW}:initialized`;

const ATTRIBUTES = [];
class AddRow extends _FormButton__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(ATTRIBUTES);
	}

	static get NODENAME(){
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ADD_ROW;
	}

	constructor() {
		super();
		this.ready.then(() => this.trigger(EVENT__INITIALIZED__BUTTON__ADDROW))
	}

	async init() {
		await super.init();
		this.active = true;
	}

	execute() {
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_LIST_ROW_ADD);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(AddRow);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRow);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/list/DeleteRow.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/list/DeleteRow.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormButton */ "./node_modules/@default-js/defaultjs-html-form/src/FormButton.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");




const ATTRIBUTES = [];

class DeleteRow extends _FormButton__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(ATTRIBUTES);
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_DELETE_ROW;
	}

	constructor() {
		super();
	}

	async init(){
		await super.init();
		this.active	= true;
	}

	execute() {
		this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_LIST_ROW_DELETE);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_2__.define)(DeleteRow);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteRow);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/list/Row.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/list/Row.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container */ "./node_modules/@default-js/defaultjs-html-form/src/Container.js");
/* harmony import */ var _DeleteRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteRow */ "./node_modules/@default-js/defaultjs-html-form/src/list/DeleteRow.js");




const ATTRIBUTES = [];
class ListRow extends _Container__WEBPACK_IMPORTED_MODULE_1__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES.concat(_Container__WEBPACK_IMPORTED_MODULE_1__["default"].observedAttributes);
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ROW;
	}	
	
	constructor(options) {
		super(options);
	}

	get active() {
		return true;
	}
	set active(active) {}

	get condition() {
		return true;
	}

	get name() {
		return null;
	}
}

customElements.define(ListRow.NODENAME, ListRow);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListRow);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/list/Rows.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/list/Rows.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");



const ATTRIBUTES = [];
class ListRows extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return _Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ROWS;
	}

	constructor() {
		super();
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(ListRows);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListRows);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/BaseSubmitAction.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/submitActions/BaseSubmitAction.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-expression-language */ "./node_modules/@default-js/defaultjs-expression-language/index.js");
/* harmony import */ var _SubmitActionResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitActionResult */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/SubmitActionResult.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");






// private member
const _form = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_1__.privatePropertyAccessor)("form");

// logic
class BaseSubmitAction extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	async init() {
		await super.init();
		const form = this.parent(_Constants__WEBPACK_IMPORTED_MODULE_4__.NODENAME_FORM);
		_form(this, form);
		if (form) this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_4__.EVENT_INITIALIZE_SUBMIT_ACTION);
	}

	get form() {
		return _form(this);
	}

	async accept(data = {}) {
		const condition = this.attr(_Constants__WEBPACK_IMPORTED_MODULE_4__.ATTRIBUTE_CONDITION);
        if(condition)
            return await _default_js_defaultjs_expression_language__WEBPACK_IMPORTED_MODULE_2__.ExpressionResolver.resolve(condition, data, false);
            
        return true;
	}

	/**
	 * Override this function!
	 */
	async execute(data = {}) {
		return new _SubmitActionResult__WEBPACK_IMPORTED_MODULE_3__["default"](_SubmitActionResult__WEBPACK_IMPORTED_MODULE_3__.STATE_FAIL, "not implemented");
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSubmitAction);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/DefaultFormSubmitAction.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/submitActions/DefaultFormSubmitAction.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _BaseSubmitAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSubmitAction */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/BaseSubmitAction.js");
/* harmony import */ var _SubmitActionResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitActionResult */ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/SubmitActionResult.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");





const NODENAME = `${_Constants__WEBPACK_IMPORTED_MODULE_3__.NODENAME_SUBMIT_ACTION}-default`;

class DefaultFormSubmitAction extends _BaseSubmitAction__WEBPACK_IMPORTED_MODULE_1__["default"] {

    static get NODENAME() { return NODENAME;}


	constructor(endpoint, method) {
		super();
		this.endpoint = endpoint;
		this.method = method;
	}

	async execute(data) {		
		let endpoint = this.endpoint;
		endpoint = await ExpressionResolver.resolveText(endpoint, data, endpoint);
		const url = new URL(endpoint, location);

		const response = await fetch(url, {
			method: this.method,
			credentials: "include",
			mode: "cors",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		});		
			
		return new _SubmitActionResult__WEBPACK_IMPORTED_MODULE_2__["default"](this, response.ok ? _SubmitActionResult__WEBPACK_IMPORTED_MODULE_2__.STATE_SUCCESS : _SubmitActionResult__WEBPACK_IMPORTED_MODULE_2__.STATE_FAIL, response);		
	}
};

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__.define)(DefaultFormSubmitAction);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultFormSubmitAction);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/submitActions/SubmitActionResult.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/submitActions/SubmitActionResult.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE_FAIL": () => (/* binding */ STATE_FAIL),
/* harmony export */   "STATE_SUCCESS": () => (/* binding */ STATE_SUCCESS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STATE_SUCCESS = "success";
const STATE_FAIL = "fail";

class SubmitActionResult {

    static get STATE_SUCCESS(){return STATE_SUCCESS;}
    static get STATE_FAIL(){return STATE_FAIL;}

    constructor(action, state, message, data){
		this.action = action;
        this.state = state;
        this.message = message;
        this.data = data;
    };    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitActionResult);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/utils/DataHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/utils/DataHelper.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluationData": () => (/* binding */ evaluationData),
/* harmony export */   "fieldValueMapToObject": () => (/* binding */ fieldValueMapToObject),
/* harmony export */   "rebuildDataByFields": () => (/* binding */ rebuildDataByFields),
/* harmony export */   "updateData": () => (/* binding */ updateData),
/* harmony export */   "valueHelper": () => (/* binding */ valueHelper)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseField */ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js");




const updateData = async (data, name, value) => {
	if (!(0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(value)) {
		if (name) valueHelper(data, name, value);
		else Object.assign(data, value);
	}
	return data;
};

const fieldValueMapToObject = async (map, fieldOrder) => {	
	//console.log("fieldValueMapToObject: ", map, fieldOrder);
	let data = {};
	if (fieldOrder) {
		for (let field of fieldOrder) {
			const name = field.name;
			const value = map.get(field);
			data = await updateData(data, name, value);
		}
	} else {
		for (let [{ name }, value] of map) {
			data = await updateData(data, name, value);
		}
	}

	return data;
};

const rebuildDataByFields = async (fields) => {
	let data = {};
	for (let field of fields) {
		const value = await field.value();
		if (!(0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(value)) {
			const name = field.name;
			data = await updateData(data, name, value);
		}
	}
	return data;
};

const evaluationData = async (base) => {
	await base.ready;
	const data = {};
	data[_Constants__WEBPACK_IMPORTED_MODULE_0__.SPECIALVARS.CURRENTVALUE] = (0,_BaseField__WEBPACK_IMPORTED_MODULE_2__._value)(base);

	let row = base.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ROW);
	let temp = data;
	while (row) {
		temp[_Constants__WEBPACK_IMPORTED_MODULE_0__.SPECIALVARS.CURRENTLISTROW] = await (0,_BaseField__WEBPACK_IMPORTED_MODULE_2__._value)(row);
		temp = temp[_Constants__WEBPACK_IMPORTED_MODULE_0__.SPECIALVARS.CURRENTLISTROW];
		row = row.parent(_Constants__WEBPACK_IMPORTED_MODULE_0__.NODENAME_LIST_ROW);
	}

	return data;
};

const NAME_SPLITTER = /\./g;
const valueHelper = function (data, name, value) {
	const names = name.split(NAME_SPLITTER);
	if (arguments.length == 2) return getValue(data, names);

	const del = (0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(value);
	if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(data) && del) return data;

	return setValue(del, data, value, names);
};

const setValue = (remove, data, value, names) => {
	if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(data) && remove) return null;

	const name = names.shift();
	if (names.length == 0) {
		if (remove) delete data[name];
		else data[name] = value;
	} else {
		if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(data[name])) data[name] = {};
		setValue(remove, data[name], value, names);
	}

	return data;
};

const getValue = (data, names) => {
	if ((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(data)) return null;
	if (names.length == 0) return data;

	const name = names.shift();
	return getValue(data[name], names);
};


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeEventCopy": () => (/* binding */ makeEventCopy),
/* harmony export */   "toEvents": () => (/* binding */ toEvents),
/* harmony export */   "toTimeoutHandle": () => (/* binding */ toTimeoutHandle)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");


const toEvents = function() {
    return Array.from(arguments).join(" ");
};

const makeEventCopy = (event) => {
    return {
        type: event.type,
        target: event.target,
        detail: event.detail,
        currentTarget: event.currentTarget,
        explicitOriginalTarget: event.explicitOriginalTarget,
        originalTarget : event.originalTarget,
        srcElement: event.srcElement,
        timeStamp: event.timeStamp
    };
}

const toTimeoutHandle = (handle, preventDefault, stopPropagation, timeout) => {
    let id = null;

    const prevent = typeof preventDefault === "function" ? preventDefault : () => preventDefault;
    const stop = typeof stopPropagation === "function" ? stopPropagation : () => stopPropagation;

    return (event) => {
        if(prevent(event))
            event.preventDefault();
        if(stop(event))
            event.stopPropagation();

        const eventCopy = makeEventCopy(event);

        if(id)
            clearTimeout(id);
                    
        id = setTimeout(() => {
            id = null;
            handle(eventCopy);
        }, timeout || _Constants__WEBPACK_IMPORTED_MODULE_0__.EVENTHANDLE_TIMEOUT);

    }
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/utils/NodeHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/utils/NodeHelper.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findFields": () => (/* binding */ findFields),
/* harmony export */   "findValidations": () => (/* binding */ findValidations),
/* harmony export */   "treeFilter": () => (/* binding */ treeFilter)
/* harmony export */ });
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseField */ "./node_modules/@default-js/defaultjs-html-form/src/BaseField.js");
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validation */ "./node_modules/@default-js/defaultjs-html-form/src/Validation.js");



const treeFilter = ({ root, filter }) => {
	let elements = [];
	root.children.forEach((element) => {
		const { accept, stop = false } = filter(element);

		if (accept) elements.push(element);

		if (!stop) {
			const result = treeFilter({ root: element, filter });
			if (result instanceof Array) elements = elements.concat(result);
			else if (result) elements.push(result);
		}
	});

	return elements;
};

const findFields = (root) => {
	return treeFilter({
		root,
		filter: (element) => {
			if (element instanceof _BaseField__WEBPACK_IMPORTED_MODULE_0__["default"]) return { accept: true, stop: true };
			return { accept: false };
		},
	});
};

const findValidations = (root) => {
	return treeFilter({
		root,
		filter: (element) => {
			if (root != element) {
				if (element instanceof _BaseField__WEBPACK_IMPORTED_MODULE_0__["default"]) return { accept: false, stop: true };
				else if (element instanceof _Validation__WEBPACK_IMPORTED_MODULE_1__["default"]) return { accept: true, stop: true };
			}
			return { accept: false };
		},
	});
};


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/utils/StateHelper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/utils/StateHelper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateActiveState": () => (/* binding */ updateActiveState),
/* harmony export */   "updateConditionState": () => (/* binding */ updateConditionState),
/* harmony export */   "updateEditableState": () => (/* binding */ updateEditableState),
/* harmony export */   "updateReadonlyState": () => (/* binding */ updateReadonlyState),
/* harmony export */   "updateValidState": () => (/* binding */ updateValidState)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");


const updateValidState = (target, valid) => {
	if (typeof valid === "undefined" || valid == null) {
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_INVALID, null);
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_VALID, null);
	} else if (valid) {
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_INVALID, null);
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_VALID, "");
	} else {
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_INVALID, "");
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_VALID, null);
	}

	target.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_VALID_STATE_CHANGED);
};

const updateConditionState = (target, valid) => {
	if (typeof valid === "undefined" || valid == null) {
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_INVALID, null);
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_VALID, null);
	} else if (valid) {
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_INVALID, null);
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_VALID, "");
	} else {
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_VALID, null);
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_CONDITION_INVALID, "");
	}

	target.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_CONDITION_STATE_CHANGED);
};

const updateActiveState = (target, active, initial = false) => {
	const oldState = target.active;
	active ? target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, "") : target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_ACTIVE, null);
	if (oldState != active || initial) target.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_ACTIVE_STATE_CHANGED);
};

const updateReadonlyState = (target, readonly, initial = false) => {
	const oldState = target.readonly;
	if (readonly) 
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY, "");
	else
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_READONLY, null);
	
	if (oldState != readonly || initial) target.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_EDITABLE_STATE_CHANGED);
};

const updateEditableState = (target, editable, initial = false) => {
	const oldState = target.editable;
	if (editable) 
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EDITABLE, "");
	else
		target.attr(_Constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_EDITABLE, null);

	if (oldState != editable || initial) target.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_EDITABLE_STATE_CHANGED);
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/utils/ValidationHelper.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/utils/ValidationHelper.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateFields": () => (/* binding */ validateFields)
/* harmony export */ });
const validateFields = async (data, fields) => {
    return (await Promise.all(fields.map(field => field.validate(data))))
        .reduce((valid, fieldValid) => valid ? fieldValid: false, true);
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/utils/ValueHelper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/utils/ValueHelper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataIsNoValue": () => (/* binding */ dataIsNoValue)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");


const dataIsNoValue = (value) => {    
    if((0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_0__.noValue)(value) )
        return true;

    const type = typeof value;
    if(type === "string" && value.trim().length == 0)
        return true;
    if(value instanceof Date)
        return false;
    if(value instanceof Array &&  value.length == 0)
        return true;
    if(value instanceof Set &&  value.length == 0)
        return true;
    if(value instanceof Map &&  value.length == 0)
        return true;
    if(type == "object" && Object.getOwnPropertyNames(value).length == 0)
        return true;
    
    return false;
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Checkbox.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/Checkbox.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js");




const INPUTSELECTOR = 'input[type="checkbox"]';


class Checkbox extends _Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"] {
	static findInput(field) {
		const input = field.find(INPUTSELECTOR);
		if (input.length == 0)
			return null;
			
		return input.length == 1 ? input.first() : input;
	}

	constructor(field, input) {
		super(field, input);
	}

	init() {
		const { field, input } = this;
		this.multiple = input instanceof NodeList;
		input.on(
			"input",
			(0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__.toTimeoutHandle)(
				() => {
					field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.normalizeValue(this.value));
				},
				false,
				true,
				_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENTHANDLE_INPUT_TIMEOUT
			)
		);

		field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.normalizeValue(this.value));
	}

	set readonly(readonly) {
		this.input.attr("disabled", readonly ? "" : null);
	}

	get value() {
		const value = this.input.val();
		if (!(value instanceof Map)) return value;
		if (value.size == 0) return null;

		const values = [];
		value.forEach((value) => {
			values.push(value);
		});

		return values;
	}

	normalizeValue(value) {
		if (value) {
			if (this.multiple) {
				value = value.filter((item) => !!item);
				return value.length != 0 ? value : null;
			} else {
				return value;
			}
		}

		return null;
	}

	acceptValue(value) {
		if (value == null || typeof value === "undefined")
			return true;
		else if (this.multiple)
			return value instanceof Array;
		else{
			const type = typeof value;
			return type === "string" || type === "boolean";
		}
	}

	updatedValue(value) {
		this.input.val(value ? value : null);
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/File.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/File.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");





const _value = (0,_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_3__.privatePropertyAccessor)("value");

const INPUTSELECTOR = 'input[type="file"]';

const readFile = (file, readFnName) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener("loadend", () => {
			resolve({
				name: file.name,
				type: file.type,
				size: file.size,
				data: reader.result
			});
		}, false);
		reader[readFnName](file);
	});
};

//readAsDataURL

const FORMAT = {
	"form-input": async (file) => {
		file.format = "form-input";
		return file;
	},
	"data-url-base64": async (file) => {
		const result = await readFile(file, "readAsDataURL");
		result.format = "data-url-base64";
		return result;
	},
	"base64": async (file) => {
		const result = await readFile(file, "readAsDataURL");
		result.data = result.data.substr(result.data.indexOf(",") + 1);
		result.format = "base64";
		return result;
	}
};

const readFiles = async (files, format, multiple) => {
	let result = [];
	for (let file of files)
		result.push(await FORMAT[format](file));

	if (result.length == 0)
		return null;


	return multiple ? result : result[0];
};



class File extends _Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"] {
	static findInput(field) {
		return field.find(INPUTSELECTOR).first();
	}

	constructor(field, input) {
		super(field, input);
	}

	async init() {
		const { field, input } = this;
		this.multiple = input.multiple;
		this.format = field.attr("file-format") || "form-input";
		this.filenameTarget = field.attr("file-name-target");
		this.filenameTarget = this.filenameTarget ? field.find(this.filenameTarget).first() : null;
		const { format, multiple } = this;

		input.on(
			"input",
			(0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__.toTimeoutHandle)(
				async () => {
					this.updatedValue(await readFiles(input.files, format, multiple));
					field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.value);
				},
				false,
				true
			)
		);

		if (input.files && input.files.length != 0)
			this.updatedValue(await readFiles(input.files, format, multiple));

		field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.value);
	};

	set readonly(readonly) {
		this.input.attr("disabled", readonly ? "" : null);
	}

	acceptValue(value) {
		if (value == null || typeof value === "undefined")
			return true;
		else if (this.multiple)
			return value instanceof Array;
		else
			return typeof value  === "object";
	}

	normalizeValue(value) {
		if (value == null || typeof value === "undefined")
			return null;
		else if (this.multiple)
			return value.length != 0 ? value : null;
		else
			return value;
	}

	updatedValue(value) {
		const currentValue = _value(this);
		if (value != currentValue) {
			_value(this, value)
			if(!value)			
				this.input.value = null;

			const filename = this.filenameTarget;
			if (filename) {
				filename.empty();
				if(value){
					if (this.multiple) {
						for (let file of value) {
							filename.append(`<span>${file.name}</span>`);
						}
					}
					else
						filename.append(`<span>${value.name}</span>`);
				}
			}

		}
	}

	get value() {
		return _value(this);
	}

	get valid() {
		return this.input.checkValidity();
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Radio.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/Radio.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js");




const INPUTSELECTOR = 'input[type="radio"]';

const getRandomInt = () => {
	return Math.floor(Math.random() * Date.now());
};

class Radio extends _Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"] {
	static findInput(field) {
		const input = field.find(INPUTSELECTOR);
		if (input.length == 0)
			return null;

		return input;
	}

	constructor(field, input) {
		super(field, input);
	}

	init() {
		const { field, input } = this;
		const name = field.name + getRandomInt();
		for (let radio of input) radio.name = name;
		input.on(
			"input",
			(0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__.toTimeoutHandle)(
				() => {
					field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.normalizeValue(this.value));
				},
				false,
				true,
				_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENTHANDLE_INPUT_TIMEOUT
			)
		);

		field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.normalizeValue(this.value));
	}


	set readonly(readonly) {
		this.input.attr("disabled", readonly ? "" : null);
	}

	get value() {
		const value = this.input.val();
		if (!(value instanceof Map)) return value;
		if (value.size == 0) return null;
		return value.values().next().value;
	}

	normalizeValue(value) {
		if (value)
			return value;

		return null;
	}

	acceptValue(value) {
		if (value == null || typeof value === "undefined")
			return true;
		else{
			const type = typeof value;
			return type === "string" || type === "boolean";
		}
	}

	updatedValue(value) {
		this.input.val(value ? value : null);
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Select.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/Select.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js");




const INPUTSELECTOR = 'select';

class Text extends _Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"] {
	static findInput(field) {
		return field.find(INPUTSELECTOR).first();
	}

	constructor(field, input) {
		super(field, input);		
	}

	

	init() {
		const { field, input } = this;
		input.on(
			"input, changed",
			(0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_1__.toTimeoutHandle)(
				() => {
					field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.value);
				},
				false,
				true,
				_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENTHANDLE_INPUT_TIMEOUT
			)
		);

		//field.trigger(EVENT_FIELD_INPUT, this.value);
	}

	set readonly(readonly) {
		this.input.attr("disabled", readonly ? "" : null);
	}

	get value() {
		return this.normalizeValue(this.input.multiple ? this.input.val() : this.input.value);
	}
	
	normalizeValue(value) {
		if (value) {
			if(this.input.multiple){
				value = value.filter((item) => item && item.trim().length > 0);
				return value.length != 0 ? value : null;
			} else{
				value = value.trim();
				return value.length != 0 ? value : null;	
			}				
		}
		
		return null;
	}

	acceptValue(value) {
		if (value == null || typeof value === "undefined")
			return true;
		else if (this.input.multiple)
			return value instanceof Array;
		else
			return typeof value === "string";
	}

	updatedValue(value) {
		const currentValue =  this.input.val();
		if (this.field.value != this.value)
			this.input.val(value ? value : currentValue);
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Text.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/Text.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-form/src/Constants.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ValueHelper */ "./node_modules/@default-js/defaultjs-common-utils/src/ValueHelper.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-form/src/utils/EventHelper.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrapper */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js");





const INPUTSELECTOR = 'input:not([type="file"],[type="radio"],[type="checkbox"],[type="button"],[type="submit"],[type="reset"]),input:not([type]), textarea';

const DEFAULTTYPE = "text";

const text = (input) => {
	return {
		accept: (value) => {
			return typeof value === "string";
		},
		getValue: () => {
			return input.value;
		},
		setValue: (value) => {
			return (input.value = value);
		},
		normalize: (value) => {
			if (value) {
				value = value.trim();
				return value.length > 0 ? value : null;
			}

			return null;
		},
	};
};
const number = (input) => {
	return {
		accept: (value) => {
			return typeof value === "number";
		},
		getValue: () => {
			return input.valueAsNumber;
		},
		setValue: (value) => {
			input.valueAsNumber = value;
		},
		normalize: (value) => {
			if (!(0,_default_js_defaultjs_common_utils_src_ValueHelper__WEBPACK_IMPORTED_MODULE_1__.noValue)(value) && !Number.isNaN(value)) return value;

			return null;
		},
	};
};

const datetime = (input) => {
	return {
		accept: (value) => {
			return typeof value === "string";
		},
		getValue: () => {
			return input.value;
		},
		setValue: (value) => {
			input.value = value;
		},
		normalize: (value) => {
			if (value) return value;

			return null;
		},
	};
};

const date = (input) => {
	return {
		accept: (value) => {
			return value instanceof Date;
		},
		getValue: () => {
			return input.valueAsDate;
		},
		setValue: (value) => {
			input.valueAsDate = value;
		},
		normalize: (value) => {
			if (value) return value;

			return null;
		},
	};
};

const TIMEFORMAT = new Intl.DateTimeFormat("default",  {
  hour: "numeric",
  minute: "numeric"
});


const time = (input) => {
	return {
		accept: (value) => {
			return value instanceof Date;
		},
		getValue: () => {
			return input.value ? new Date(`1970-01-01T${input.value}`) : null;
		},
		setValue: (value) => {
			input.value = TIMEFORMAT.format(value);
		},
		normalize: (value) => {
			if (value) return value;

			return null;
		},
	};
};
const TYPES = { text, number, datetime,  "datetime-locale": datetime, date, time, range: number };

class Text extends _Wrapper__WEBPACK_IMPORTED_MODULE_3__["default"] {
	static findInput(field) {
		return field.find(INPUTSELECTOR).first();
	}

	constructor(field, input) {
		super(field, input);
	}

	init() {
		const { field, input } = this;
		const type = (field.attr("input-type") || input.attr("type") || DEFAULTTYPE).trim().toLowerCase();
		this.type = (TYPES[type] || TYPES[DEFAULTTYPE])(input);
		input.on(
			"input",
			(0,_utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__.toTimeoutHandle)(
				() => {
					field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.normalizeValue(this.value));
				},
				false,
				true,
				_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENTHANDLE_INPUT_TIMEOUT,
			),
		);

		field.trigger(_Constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_FIELD_INPUT, this.normalizeValue(this.value));
	}

	acceptValue(value) {
		if (value == null || typeof value === "undefined") return true;

		return this.type.accept(value);
	}

	normalizeValue(value) {
		if (value == null && typeof value === "undefined") return null;

		return this.type.normalize(value);
	}

	async updatedValue(value) {
		const currentValue = this.type.getValue();
		if (value != currentValue) this.type.setValue(value);
	}

	set readonly(readonly) {
		this.input.attr("disabled", readonly ? "" : null);
	}

	get value() {
		return this.type.getValue();
	}

	get valid() {
		return this.input.checkValidity();
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/Wrapper.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Field */ "./node_modules/@default-js/defaultjs-html-form/src/Field.js");


class Wrapper {
	
	static findInput(field){ return null;}
	
	#defaultValue;
	
	constructor(field, input) {
		this.field = field;
		this.input = input;
		this.init();
	}

	init() { }

	set readonly(disabled) { }

	async acceptValue(value) {
		return true;
	}

	async normalizeValue(value) {
		return value;
	}

	async updatedValue() {
	}
	
	get value(){
		return null;
	}
	
	get valid(){
		return true;
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-form/src/wrapper/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findWrapper": () => (/* binding */ findWrapper),
/* harmony export */   "wrappers": () => (/* binding */ wrappers)
/* harmony export */ });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Text.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Checkbox.js");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Radio */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Radio.js");
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./File */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/File.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Select */ "./node_modules/@default-js/defaultjs-html-form/src/wrapper/Select.js");






const wrappers = [_Text__WEBPACK_IMPORTED_MODULE_0__["default"], _Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], _Radio__WEBPACK_IMPORTED_MODULE_2__["default"], _File__WEBPACK_IMPORTED_MODULE_3__["default"], _Select__WEBPACK_IMPORTED_MODULE_4__["default"]];

const findWrapper = (field) => {
	for (let wrapper of wrappers) {
		const input = wrapper.findInput(field);
		if (input) return new wrapper(field, input);
	}

	return null;
};


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/Constants.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ORGFETCH": () => (/* binding */ ORGFETCH)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js");

const ORGFETCH = _Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.fetch;

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Fetch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/Fetch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Manager.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Constants.js");



	
_Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.fetch = async function(aUrl, aRequest){
	const url = new URL(aUrl, _Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.location);
	const data = await _Manager__WEBPACK_IMPORTED_MODULE_0__["default"].doIntercept({
			url : new URL(aUrl, location),
			request : aRequest || {},
			metadata : {
				method : typeof aRequest === "undefined" ? "GET" : (aRequest.method || "GET"),
				origin: url.origin,
				protocol : url.protocol,
				hostname: url.hostname,
				port: url.port,
				path : url.pathname,
				hash : url.hash,
				query: url.search,
				async : true
			}
		});
			
	return (0,_Constants__WEBPACK_IMPORTED_MODULE_2__.ORGFETCH)(data.url, data.request);
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Interceptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/Interceptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interceptor)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Constants.js");


class Interceptor{
    async doAccept(data){}
    async doHandle(data){}
    async unceckedFetch(url, request){
		return (0,_Constants__WEBPACK_IMPORTED_MODULE_0__.ORGFETCH)(url, request);
	}

};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Manager.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/Manager.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* binding */ Manager),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Constants.js");


const CURRENTORIGIN = _Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.location.origin;

class Manager {
	#cache = {};
	#ignoredUrls = {};
	#ignoredOrigins = {};
	#ignoreDocumentOrigin = false;
	#interceptors = [];
	#setup = [];
	#readyCheck;

	constructor() { }

	set ignoreDocumentOrigin(value) {
		this.#ignoreDocumentOrigin = value;
	}

	addOriginToIgnore(origins) {
		if (origins instanceof Array)
			for (let origin of origins)
				this.#ignoredOrigins[origin.toString()] = true;
		else
			this.#ignoredOrigins[origins.toString()] = true;
	}

	addUrlToIgnore(urls) {
		if (urls instanceof Array)
			for (let url of urls)
				this.#ignoredUrls[url.toString()] = true;
		else
			this.#ignoredUrls[urls.toString()] = true;
	}

	setup(setup) {
		if (typeof setup === "function" || setup instanceof Promise)
			this.#setup.push(setup);
	}

	addInterceptor(aInterceptor) {
		if(aInterceptor instanceof Array)
			return aInterceptor.forEach(interceptor => this.addInterceptor(interceptor));
		if (typeof aInterceptor !== "object")
			throw new Error("function required an interceptor");
		if (typeof aInterceptor.doAccept !== "function")
			throw new Error("The interceptor required a \"doAccept\" function!");
		if (typeof aInterceptor.doHandle !== "function")
			throw new Error("The interceptor required a \"doHandle\" function!");

		this.#interceptors.push(aInterceptor);
		this.reset();
	}

	get ready() {
		return (async () => {			
			if (this.#setup.length == 0)
				return true;

			if(this.#readyCheck)
				return this.#readyCheck;

			this.#readyCheck = (async () => {
				while(this.#setup.length != 0){
					const setup = this.#setup[0];
					if (setup){
						const interceptors = setup instanceof Promise ? await setup : await setup();
						if(interceptors)
							interceptors instanceof Array ? interceptors.forEach(interceptor => this.addInterceptor(interceptor)) : this.addInterceptor(interceptors);
					}
					
					this.#setup.shift();
				}
				this.#readyCheck = null;
				return this.ready;
			})();

			return this.#readyCheck;
		})();
	}

	async doIntercept(aData) {
		await this.ready;

		const origin = aData.metadata.origin;

		if (this.#isIgnored(origin, aData.url.toString()))
			return aData;

		const { url, metadata } = aData;
		const chain = await this.#getChain(origin, { url, metadata });
		if (!chain)
			return aData;

		for (let interceptor of chain)
			aData = await interceptor.doHandle(aData);

		return aData;
	}

	reset() {
		this.#cache = {};
	}

	async uncheckedFetch(url, request) {
		return (0,_Constants__WEBPACK_IMPORTED_MODULE_1__.ORGFETCH)(url, request);
	}

	#isIgnored(origin, url) {
		if (this.#ignoredUrls[url])
			return true
		if (this.#ignoreDocumentOrigin && origin == CURRENTORIGIN)
			return true;
		if (this.#ignoredOrigins[origin])
			return true;

		return false
	}

	async #getChain(origin, data) {
		let chain = this.#cache[origin];
		if (!chain) {
			chain = this.#interceptorForOrigin(origin, data);
			this.#cache[origin] = chain;
		}

		return chain;
	}

	async #interceptorForOrigin(origin, data) {
		const result = [];
		for (let interceptor of this.#interceptors) {
			if (await interceptor.doAccept(data))
				result.push(interceptor)
		}

		return result;
	}
};

const INSTANCE = new Manager();
setTimeout(() => INSTANCE.ready, 10);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INSTANCE);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL": () => (/* binding */ GLOBAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GLOBAL = (() => {
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof __webpack_require__.g !== 'undefined') { return __webpack_require__.g; }
	return {};
})();


const Utils = {
	GLOBAL : GLOBAL
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils); 

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/XMLHttpRequest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/XMLHttpRequest.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Manager.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js");



if(typeof _Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.XMLHttpRequest !== "undefined"){
	const ORGXHR = _Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.XMLHttpRequest;
	const executeRequest = function(aData){
		ORGXHR.prototype.open.call(this, aData.request.method, aData.url, aData.metadata.async, aData.metadata.username, aData.metadata.password);
		if(typeof aData.request.headers !== "undefined")
			Object.getOwnPropertyNames(aData.request.headers)
			.forEach(aHeader =>{
				ORGXHR.prototype.setRequestHeader.call(this, aHeader, aData.request.headers[aHeader]);
			});
		ORGXHR.prototype.send.call(this, aData.request.body);
	}
	const XHR = function (){
		const xhr = new ORGXHR(arguments);
		let data = undefined;
		
		xhr.setRequestHeader = function(aName, aValue){
			data.request.headers = data.request.headers || {};
			data.request.headers[aName] = aValue;
		};
		
		xhr.open = function(aMethod, aUrl, isAsync, aUsername, aPassword){
			const url = new URL(aUrl, _Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.location.origin);
			data = {
				url : new URL(aUrl, location),
				request : {
					method : aMethod
				},
				metadata : {
					method : aMethod,
					origin: url.origin,
					protocol : url.protocol,
					hostname: url.hostname,
					port: url.port,
					path : url.pathname,
					query: url.search,
					hash : url.hash,
					async : typeof isAsync === "boolean" ? isAsync : true,
					username : aUsername,
					password : aPassword
				}
			};
		};
		
		xhr.send = function(aBody){
			if(data.metadata.async){
				data.request.body = aBody; 
	    		_Manager__WEBPACK_IMPORTED_MODULE_0__["default"].doIntercept(data)
	    		.then(executeRequest.bind(xhr))
	    		["catch"](console.error);
		    }
			else
				executeRequest.call(xhr, data);
		};
		
		return xhr;
	};
	
	_Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.XMLHttpRequest = XHR;
	_Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.XMLHttpRequest.prototype = ORGXHR.prototype;
	_Utils__WEBPACK_IMPORTED_MODULE_1__.GLOBAL.XMLHttpRequest.prototype.constructor = XHR;
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Utils.js");
/* harmony import */ var _XMLHttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XMLHttpRequest */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/XMLHttpRequest.js");
/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fetch */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Fetch.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manager */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Manager.js");
/* harmony import */ var _Interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interceptor */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Interceptor.js");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/index.js");







_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs = _Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs || {};
_Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs.httpinterceptor = _Utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.defaultjs.httpinterceptor || {
	VERSION : "${version}",
	Manager: _Manager__WEBPACK_IMPORTED_MODULE_3__["default"],
	Interceptor: _Interceptor__WEBPACK_IMPORTED_MODULE_4__["default"],
	interceptors: _interceptors__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/OAuthInterceptor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/OAuthInterceptor.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TokenInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokenInterceptor */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/TokenInterceptor.js");


const OAuthInterceptor = function(aSetup){
	const setup = aSetup;
	setup.fetchToken = async () => {
		const response = await fetch(setup.login.url, {
			method: (setup.login.method || "get")
		});
		response = await response.json();
		return response[setup.login.response.valueSelector];
	};
	return (0,_TokenInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"])(aSetup);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthInterceptor);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/TokenInterceptor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/TokenInterceptor.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _Interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Interceptor */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Interceptor.js");
/**
 * aSetup  =>
 * {
 * 	condition : [string | string[] | function(aData}],
 * 	fetchToken : function(),
 *  appendToken : function(aToken, aData),
 *  (optional) refreshInterval,
 *  (optional) refreshToken : function()
 * }
 */

const defaultTokenAppender = async (token, data) => {
	data.request.headers = data.request.headers || {};
	data.request.headers["Authorization"] = `Bearer ${token}`;
	return data;
}

;
class TokenInterceptor extends _Interceptor__WEBPACK_IMPORTED_MODULE_0__["default"] {

	#token = null;
	#lastData = {};
	#condition;
	#fetchToken;
	#appendToken;
	#refreshInterval;
	#refreshToken;

	constructor({ condition, fetchToken, appendToken, refreshInterval = 60 * 1000, refreshToken }) {
		super();
		if(typeof condition !== "string" && !(condition instanceof Array) && typeof condition !== "function")
			throw new Error(`Parameter "condition" must be a "string", "array" or "function"!`);
		this.#condition = condition;
		
		if(typeof fetchToken !== "function")
			throw new Error(`Parameter "fetchToken" must be a "function"!`);
		this.#fetchToken = fetchToken;

		if(appendToken && typeof appendToken !== "function")
			throw new Error(`Parameter "appendToken" must be a "function"!`);
		this.#appendToken = appendToken || defaultTokenAppender;

		this.#refreshInterval = refreshInterval;
		this.#refreshToken = refreshToken;
	}

	async doAccept(data) {
		const type = typeof this.#condition;
		const condition = this.#condition;
		const origin = data.metadata.origin;
		if (type === "function") return await condition(data);
		else if (type === "string") return condition == origin;
		else if (condition instanceof Array)
			return condition.includes(origin);

		return false;
	}

	async doHandle(data) {
		if (!this.#token) {
			const { url, metadata } = data;
			this.#lastData = { url, metadata };
			this.#token = this.#fetchToken({ url, metadata });
			this.#startRefresh();
		}

		return this.#callAppendToken(data);
	}

	async #callAppendToken(data) {
		const appender = this.#appendToken;
		const token = await this.#token;
		const result = await appender(token, data);

		return result ? result : data;
	}

	#startRefresh() {
		if (this.#refreshInterval > 0) {
			const refreshToken = this.#refreshToken || (() => this.#fetchToken(this.#lastData));
			const timeout = async () => {
				if (this.#refreshToken)
					await this.#refreshToken(this.#lastData);
				else
					await this.#fetchToken(this.#lastData);

				setTimeout(timeout,this.#refreshInterval );
			};


			setTimeout(timeout , this.#refreshInterval);
		}
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OAuthInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OAuthInterceptor */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/OAuthInterceptor.js");
/* harmony import */ var _TokenInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenInterceptor */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/interceptors/TokenInterceptor.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	OAuthInterceptor: _OAuthInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"],
	TokenInterceptor: _TokenInterceptor__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* reexport safe */ _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Template": () => (/* reexport safe */ _src_Template_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _src_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Renderer.js */ "./node_modules/@default-js/defaultjs-template-language/src/Renderer.js");





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Context.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Context.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _Directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Directive */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Template */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");






const PRIVATE_WAIT = "wait";
const PRIVATE_CALLBACKS = "callbacks";
const PRIVATE_IGNOREDIRECTIVES = "ignoreDirectives";

const CONTEXTCLONE = new Set();
const CONTEXTS = new Map();
const WARNTIME = 1000;
const CRITICALTIME = 10000;

let observerTimeout = null;
const observe = (context) => {
	CONTEXTS.set(context, Date.now());
	runObserver();
};
const runObserver = () => {
	if (observerTimeout == null) {
		observerTimeout = setTimeout(() => {
			observerTimeout = null;
			const time = Date.now();
			CONTEXTS.forEach((createTime, context) => {
				const delta = time - createTime;
				if (context.closed) CONTEXTS.delete(context);
				else {
					if (delta > CRITICALTIME) {
						console.error("context lives longer then 10s", delta / 1000, context);
					} else if (delta > WARNTIME) {
						console.warn("context lives longer then 1s", delta / 1000, context);
					}
				}
			});
			console.log("open context:", CONTEXTS.size);
			if (CONTEXTS.size > 0) runObserver();
		}, 1000);
	}
};

const toTemplate = (template) => {
	if (template instanceof _Template__WEBPACK_IMPORTED_MODULE_4__["default"]) return template.importContent();
	else if (typeof template === String) return create(template);
	return template;
};

let id = 0;
class Context {
	#id;
	#depth;
	#parent;
	#renderer;
	#root;
	#template;
	#mode;
	#subcontexts;
	#wait;
	#ignoreDirectives;
	#callbacks;

	constructor({ content = null, resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, wait = null, callbacks = null, ignoreDirective }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		this.#id = parent ? `${parent.id}->${id++}` : `root::${id++}`;
		this.#depth = parent ? parent.depth + 1 : 0;
		this.#parent = parent;
		this.#renderer = renderer;
		this.#root = root;
		this.#template = toTemplate(template);
		this.#mode = mode;
		this.#subcontexts = new Set();
		this.#wait = wait ? wait : (0,_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__.lazyPromise)();
		this.#ignoreDirectives = ignoreDirective instanceof Set ? ignoreDirective : new Set();
		this.#callbacks = callbacks instanceof Array ? callbacks : [];

		this.content = content;
		this.container = container;
		this.target = target;
		this.resolver = resolver;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
		//console.log(`context={"depth":${this.depth} }, "id": ${this.id}`);
		//this.createtAt = new Error();

		if (parent) {
			parent.subcontexts.add(this);
		}
	}

	get id() {
		return this.#id;
	}
	get depth() {
		return this.#depth;
	}
	get parent() {
		return this.#parent;
	}
	get renderer() {
		return this.#renderer;
	}
	get root() {
		return this.#root;
	}
	get template() {
		return this.#template;
	}
	set template(template){
		this.#template = toTemplate(template);
	}

	get mode() {
		return this.#mode;
	}
	get subcontexts() {
		return this.#subcontexts;
	}

	get closed() {
		return this.#wait.resolved;
	}

	ignoreDirective(directive) {
		const ignoreDirectives = this.#ignoreDirectives;
		directive instanceof _Directive__WEBPACK_IMPORTED_MODULE_3__["default"] ? ignoreDirectives.add(directive.name) : ignoreDirectives.add(directive);
	}

	acceptDirective(directive) {
		const ignoreDirectives = this.#ignoreDirectives;
		if (directive instanceof _Directive__WEBPACK_IMPORTED_MODULE_3__["default"]) return !(ignoreDirectives.has(directive.name) || ignoreDirectives.has(directive));

		return !ignoreDirectives.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		const callbacks = this.#callbacks;
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.wait.then(callback));
			else if (callback instanceof Promise) callbacks.push(async () => await callback);
			else if (typeof callback === "function") callbacks.push(callback);
		} else {
			const wait = this.#wait;
			if (!wait.resolved) {
				if (!this.ignore) for (let callback of callbacks) await callback(this);

				for (let child of this.subcontexts) await child.ready();

				if (this.parent) this.parent.subcontexts.delete(this);

				wait.resolve(this);
			}

			return wait;
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}

	clone({ content = this.content, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = this.#ignoreDirectives } = {}) {
		return new Context({ content, 
			resolver: this.resolver, 
			renderer: this.renderer, 
			template, 
			container, 
			root, 
			mode, 
			target, 
			ignoreDirective,
			wait: this.#wait,
			callbacks: this.#callbacks
		 });
	}

	toRenderOption({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return { resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective };
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Directive.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Directive)
/* harmony export */ });
const DEFINED_DIRECTIVES = [];

const defineDirective = ({ directive }) => {
	if (!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");

	if (directive.rank < Directive.MIN_RANK)
		throw new Error("The rank of a directive can't be lower as " + Directive.MIN_RANK + "!");

	if (directive.rank > Directive.MAX_RANK)
		throw new Error("The rank of a directive can't be grater as " + Directive.MAX_RANK + "!");

	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a, b) => {
		const phase = a.phase - b.phase;
		if(phase == 0)
			return a.rank - b.rank;
			
		return phase;
	});
};

const PHASE = {
	init: 0,
	data: 1,
	template: 2,
	content: 3,
	finish: 4
};

class Directive {

	static get PHASE() { return PHASE };
	static get MIN_RANK() { return 0 };
	static get MAX_RANK() { return 100000 };

	constructor() { };

	get name() { }
	get rank() { }
	get phase() {return PHASE.finish}

	/**
	 * need to be implemented
	 * 
	 * return DirectiveResult
	 */
	async execute(context) {
		return context;
	}


	static define(option) {
		defineDirective(option);
	}

	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Element.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Element.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DirectiveElement)
/* harmony export */ });
class DirectiveElement extends HTMLElement{
	constructor(){
		super();
		this.hidden = true;
	}
	
	/**
	 * need to be implemented
	 * 
	 */
	async execute({template, context}){
		context.content = template.cloneNode(true);
		return context;
	};	
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Renderer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Renderer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCOPES": () => (/* binding */ SCOPES),
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-template-language/src/Context.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@default-js/defaultjs-template-language/src/Element.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives */ "./node_modules/@default-js/defaultjs-template-language/src/directives/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements */ "./node_modules/@default-js/defaultjs-template-language/src/elements/index.js");









const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
	directive: "directive",
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.application });

const MODEWORKER = {
	replace: async ({ container, target = null, content }) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	append: async ({ container, target = null, content }) => {
		if (target) target.after(content);
		else container.append(content);
	},
	prepend: async ({ container, target = null, content }) => {
		if (target) target.before(content);
		else container.prepend(content);
	},
};

const loadTemplateContent = async (template, renderer) => {
	if (template) {
		template = await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template);
		return template.importContent();
	} else if (renderer.template) {
		return await renderer.template.importContent();
	}

	throw new Error("No content template specified!");
};

const addContent = async (context) => {
	if (context.content) {
		const modeworker = MODEWORKER[context.mode];
		if (!modeworker) throw new Error('The "' + context.mode + '" is not supported!');
		await modeworker(context);
	}
};

const renderContainer = async (context) => {
	let { template, resolver } = context;
	if (!template || template.length == 0) return context;

	let content = [];
	for (let nodeTemplate of template) {
		nodeTemplate.normalize();
		const nodeResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.node, context: null, parent: resolver });
		const nodeContext = await renderNode(context.subContext({ template: nodeTemplate, resolver: nodeResolver }));
		await nodeContext.ready();
		const node = nodeContext.content;
		if (node) {
			if (node instanceof Array) content = content.concat(node);
			if (node instanceof NodeList || node instanceof HTMLCollection) content = content.concat(Array.from(node));
			else if (node instanceof Node) content.push(node);
		}
	}

	context.content = content.length != 0 ? content : null;
	return context;
};

const renderNode = async (context) => {
	try {
		let { template, renderer } = context;
		if (template instanceof _Element_js__WEBPACK_IMPORTED_MODULE_5__["default"]) await template.execute(context);
		else await executeDirectives(context);

		const { ignore, content } = context;

		if (!ignore && content) {
			let { resolver } = context;
			const subTemplate = context.template.childNodes;
			if (subTemplate && subTemplate.length > 0) {
				const containerResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.container, context: null, parent: resolver });
				const subContext = await renderer.render(context.subContext({ container: content, template: subTemplate, resolver: containerResolver }));
				await subContext.ready();
			}
		}

		if (context.content && context.content.tagName && context.content.tagName == "JSTL") context.content = context.content.childNodes; //special case to support the old "<jstl>" tag.
	} catch (e) {
		console.error("error at render node:", e, context);
	}
	return context;
};

const executeDirectives = async (context) => {
	const directives = _Directive_js__WEBPACK_IMPORTED_MODULE_4__["default"].directives;
	const length = directives.length;
	for (let i = 0; i < length && !context.stop; i++) {
		const directive = directives[i];
		try {
			if (context.acceptDirective(directive)) await directive.execute(context);
		} catch (e) {
			console.error("error at directive:", e, directive, context);
		}
	}
	return context;
};

class Renderer {
	constructor({ template, data } = {}) {
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"])) throw new Error("template must be an instance of Template!");

		this.template = template;
		this.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
	}

	/**
	 * @param
	 * 		container HTMLElement -> target to render in
	 * @param
	 * 		data Object|... -> data to used at rendering
	 * @param
	 * 		template Template|Node|NodeList|HTMLCollection|String -> template to render
	 * @param
	 * 		mode "append"|"insert"|"replace"
	 * @param
	 * 		target
	 */
	async render(context) {
		const calledWithContext = context instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"];
		if (!calledWithContext) {
			let { template = null, data = null, container, root, mode, target } = context;
			template = await loadTemplateContent(template, this);
			const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.render, context: data, parent: this.resolver });
			context = new _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ resolver, renderer: this, template: template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		} else if (context.closed) throw new Error("calling with closed context", context);

		const template = context.template;
		if (template instanceof Node) await renderNode(context);
		else await renderContainer(context);
		
		await addContent(context);

		if (!calledWithContext)
			await context.ready();

		return context;
	}

	static async build({ template, data } = {}) {
		if (template && template instanceof Promise) template = await template;

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template) : null;
		return new Renderer({ template, data });
	}

	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Template.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODE_ATTRIBUTE_TEMPLATE": () => (/* binding */ NODE_ATTRIBUTE_TEMPLATE),
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__);


const NODE_ATTRIBUTE_TEMPLATE = "template";
const CACHE = {};
const getKey = (template, cache, alias) => {
	if (!cache) return null;

	let key = null;
	if (alias) key = alias;
	else if (typeof template === "string") key = template;
	else if (template instanceof URL) key = template.toString();
	else if (template instanceof HTMLElement) key = template.selector();

	if (key) return key.hashcode();

	return null;
};

const fromURL = async (url, cache, key) => {
	const response = await fetch(url.toString());
	const source = await response.text();
	return fromSource(source, cache, key);
};

const fromSource = async (source, cache, key) => {
	return fromElement(create(source, true), cache, key);
};

const fromElement = async (element, cache, key) => {
	let template = null;
	if (element instanceof HTMLTemplateElement) template = new Template(element, key);
	else {
		template = document.createElement("template");
		if (element instanceof Node || element instanceof NodeList || element instanceof HTMLCollection || element instanceof Array) template.content.append(element.cloneNode(true));
		else throw new Error("Template type is not supported!");

		template = new Template(template, key);
	}

	if (!template) throw new Error("Template can't loaded!");

	if (cache && key) CACHE[key] = template;

	return template;
};

const getTemplate = (node) => {
	let template = node.find(":scope > template").first();
	if (!!template) return template;
	const value = node.attr(NODE_ATTRIBUTE_TEMPLATE);
	if (!value) return null;
	try {
		template = find(value).first();
		if (!!template) return template;
	} catch (e) {}
	return new URL(value, location);
};

class Template {

	/**
	 * Create an instance of template.
	 * 
	 * @param template type of HTMLTemplateElement. Not null.
	 * @param key identifier at cache, if template to be cached.
	 */
	constructor(/** @type {HTMLTemplateElement} */ template,/** @type {string} */ key) {
		this.template = template;
		this.key = key;
	}

	importContent(doc = document) {
		let imported = doc.importNode(this.template, true);
		return imported.content.childNodes;
	}

	remove() {
		if (this.key && CACHE[this.key]) delete CACHE[this.key];
	}

	static async fetch(url, cache = true, alias = null) {
		if (typeof url === "string") {
			return Template.load(new URL(url, loaction), cache, alias);
		} else if (url instanceof URL) return Template.load(url, cache, alias);

		new Error("The url isn't a allowed type! -> [String|URL] required!");
	}

	static async load(template, cache = true, alias = null) {
		if (template instanceof Template) return template;

		const key = getKey(template, cache, alias);
		if (key && CACHE[key]) return CACHE[key];
		else if (typeof template === "string") {
			return fromSource(template, cache, key);
		} else if (template instanceof URL) return await fromURL(template, cache, key);
		else if (template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection || template instanceof HTMLTemplateElement) return fromElement(template, cache, key);

		new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection|Template] required!");
	}

	static async loadNodeTemplate(node, defaultTemplate, cache, alias) {
		try {
			const template = getTemplate(node);
			if (template) return Template.load(template, cache, alias);
		} catch (e) {
			console.warn("Can't load template from node!", node, e);
		}

		return defaultTemplate;
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/AttachElement.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/AttachElement.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const ATTRIBUTE__ATTACHELEMENT = "jstl-attach-element";
const ATTRIBUTE__ATTACHELEMENT_MODE = "jstl-attach-element-mode";

const MODE_APPEND = "append";
const MODE_PREPEND = "prepend";
const MODE_REPLACE = "replace";

const PRECHECK = /^#.+$/;

const getElement = async (template, resolver) => {
	let element = (template.attr(ATTRIBUTE__ATTACHELEMENT) || "").trim();
	if (!PRECHECK.test(element)) {
		try {
			element = await resolver.resolve(element, element);
		} catch (e) {}
		if (element instanceof HTMLElement) return element;
	}

	try {
		element = find(element);
	} catch (e) {}

	if (element && element.length > 0) return element.length == 0 ? element.first() : element;

	return null;
};

class AttachElement extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "attach-element";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content;
	}

	async execute(context) {
		const { resolver, template, content } = context;
		if (!(template instanceof HTMLElement) || !template.attr(ATTRIBUTE__ATTACHELEMENT)) return context;
		try {
			let element = await getElement(template, resolver);
			if (element) {
				const mode = template.attr(ATTRIBUTE__ATTACHELEMENT_MODE) || MODE_REPLACE;
				if (mode == MODE_REPLACE) {
					content.empty().append(element);
					context.stop = true;
					context.ignore = true;
				} else {
					context.ready(({ content }) => {
						if (content) {
							if (mode == MODE_APPEND) content.append(element);
							else if (mode == MODE_PREPEND) content.prepend(element);
						}
					});
				}
			}
		} catch (e) {
			console.log(e, { context });
		}

		return context;
	}
}
_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new AttachElement() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const ATTRIBUTE_NAME = /(jstl)?(\?)?(@)?([^\?@]+)/i;

const DEFAULT_EVENT_FUNCTION = "default";
const OPTION_PREVENT_DEFAULT = "prevent-default"
const IGNORED_ATTRIBUTES = ["is"];

const EVENTFUNCTIONS = {
	delegate: async (event, handle, setting, type, resolver, content, options, context) => {
		const eventhandle = await resolver.resolveText(handle, handle);
		content.on(event, delegater(eventhandle, setting));
	},
	toggleclass: async (event, handle, setting, type, resolver, content, options, context) => {
		const clazz = options.shift();
		const preventDefault = options.includes(OPTION_PREVENT_DEFAULT);
		const selector = handle ? await resolver.resolveText(handle, handle) : null;		
		content.on(event, (event) => {
			if(preventDefault)
				event.preventDefault();
			if(selector)
				content.closests(selector).toggleClass(clazz);
			else
				content.toggleClass(clazz);
		});
	},
	toggleattribute: async (event, handle, setting, type, resolver, content, options, context) => {
		const attribute = options.shift();
		const preventDefault = options.includes(OPTION_PREVENT_DEFAULT);
		const selector = handle ? await resolver.resolveText(handle, handle) : null;		
		content.on(event, (event) => {
			if(preventDefault)
				event.preventDefault();
			if(selector)
				content.closests(selector).forEach(element => {
					element.toggleAttribute(attribute)				
				});
			else 
				content.toggleAttribute(attribute);
		});
	},
	[DEFAULT_EVENT_FUNCTION]: async (event, handle, setting, type, resolver, content, options, context) => {
		const eventhandle = handle ? await resolver.resolve(handle, handle) : null;

		if (!eventhandle) console.error(new Error("Can't resolve \"" + handle + '" to event handle!'));
		else if (typeof eventhandle === "function") content.on(event, eventhandle);
		else if (typeof eventhandle === "string") content.on(event, delegater(eventhandle, setting));
		else if (typeof eventhandle === "object") {
			const { capture = false, passive = false, once = false } = eventhandle;
			content.on(event, eventhandle.eventHandle, { capture, passive, once });
		}
	},
};

const bindAttribute = async ({ condition, name, value, context }) => {
	const { resolver, content, template } = context;

	let attribute = !condition ? value : template.attr(name);
	condition = condition ? value : template.attr("?" + name);
	const hasValue = isValue(attribute);

	if (condition && hasValue) {
		condition = await resolver.resolve(condition, false);
		if (condition === true) content.attr(name, await resolver.resolveText(attribute, attribute));
	} else if (condition) {
		condition = await resolver.resolve(condition, false);
		if (condition === true) content.attr(name, true);
	} else if (hasValue) {
		content.attr(name, await resolver.resolveText(attribute, attribute));
	}
};

const isValue = (value) => {
	return value != null && typeof value !== "undefined";
};

const bindEvent = async ({ condition, name, value, context }) => {
	const { resolver, template, content } = context;

	condition = condition ? value : template.attr("?@" + name);
	let handle = !condition ? value : template.attr("@" + name);
	let split = name.split(":");
	const event = split.shift();
	const type = (split.shift() || DEFAULT_EVENT_FUNCTION).toLowerCase();
	
	if(typeof handle === "undefined" || handle == null)
		console.error(`Definition of "${event}" - event handle at`, content, "is incorrect!");

	handle = handle.trim();
	const setting = {
		bubble: true,
	};

	if (condition ) {
		if ((await resolver.resolve(condition, false)) == true) await binding(event, handle, setting, type, resolver, content, split, context);
	} else await binding(event, handle, setting, type, resolver, content, split, context);
};

const binding = async (event, handle, setting, type, resolver, content, options, context) => {
	const binder = EVENTFUNCTIONS[type];
	if (binder) return binder(event, handle, setting, type, resolver, content, options, context);
};

const delegater = function (delegate, setting) {
	return function (event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.currentTarget) event.currentTarget.trigger(delegate, event);
		else event.target.trigger(delegate, event);
	};
};

class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "attribute";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content;
	}

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement)) return context;

		const processed = new Set(IGNORED_ATTRIBUTES);
		for (const attribute of template.attributes) {
			const [, jstl, condition, event, name] = ATTRIBUTE_NAME.exec(attribute.name);
			if (!jstl && !processed.has(name)) {
				const value = attribute.value;

				if (event) await bindEvent({ condition, event, name, value, context });
				else await bindAttribute({ condition, name, value, context });
			}
			processed.add(name);
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Attribute() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


class Choose extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "choose" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.hasAttribute("jstl-choose") || context.template.children.length == 0)
			return context;
		
		//clone template, before manipulate template
		context.template = context.template.cloneNode(true);
		const { template, resolver } = context;
		let resolved = false;
		const whens = template.find(":scope > [jstl-when]");
		const length = whens.length;
		for (let i = 0; i < length; i++) {
			const node = whens[i];
			if (!resolved && (await resolver.resolve(node.attr("jstl-when"), false)))
				resolved = true;
			else
				node.remove();
		}

		if (resolved)
			template.find(":scope > [jstl-otherwise]").remove();

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Choose() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const MODES = {
	"remote": async ({ data, context }) => {		
		const {resolver, template} = context;
		data = await resolver.resolveText(data);
		data = new URL(data, location.origin);
		let option = await resolver.resolveText(template.attr("jstl-data-option") || "{}");
		option = JSON.parse(option);

		data = await fetch(data.toString(), option);
		return data.json();
	},	
	"set": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolve(data);
		return data;
	},
	"direct": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolveText(data);
		return data;
	}
};

const updateContext = ({ varname, data, scope, context }) => {
	if (varname)
		context.resolver.updateData(varname, data, scope);
	else if (scope)
		context.resolver.mergeContext(data, scope);
	else{
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });
		//context = context.subContext({resolver});
		context.resolver = resolver;
	}
	
		
	return context;
};



class Data extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "data" }
	get rank() { return 1000 }
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.data}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-data"))
			return context;
			
		try {
			const { template } = context;			
			const mode = MODES[(template.attr("jstl-data-mode") || "remote")];
			if (!mode)
				throw new Error("The jstl-data-mode is unsupported!");

			let data = template.attr("jstl-data");
			data = await mode({ data, context });

			const varname = template.attr("jstl-data-var");
			const scope = template.attr("jstl-data-scope");
			context = updateContext({ varname, data, scope, context });
		} catch (e) {
			console.error(e, context.template);
		}

		return context;

	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Data() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const ATTRIBUTE = {
	DATA: "jstl-foreach",
	VAR: "jstl-foreach-var",
	STATUS: "jstl-foreach-status",
	COUNT: "jstl-foreach-count",
	START: "jstl-foreach-start",
	STEP: "jstl-foreach-step",
	CONDITION: "jstl-foreach-condition"
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;

	count = await resolver.resolve(count);
	const length = start + (count * step);
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count
		};
		stop = !(await iterate(iteration, option));
	}
};

const doForeach = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array))
		array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, container, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-foreach", parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition)
		return false;
	const itemContext = context.subContext({ resolver, container, template, mode: "append" });
	await renderer.render(itemContext);
	await itemContext.ready();
	return true;
};

class Foreach extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 2 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT)))
			return context;

		context.ignore = true;
		try {
			const { template, resolver, renderer, content } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template.childNodes,
				resolver,
				renderer,
				container: content,
				context
			};
			if ((!option.data || option.data == "") && option.count)
				await doCount(option);
			else
				await doForeach(option);

		} catch (error) {
			console.error("error at jstl-foreach:", error);
		}
		return context;

	}
};

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Foreach() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/If.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/If.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


class If extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "if" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1000 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init }

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement) || !template.attr("jstl-if"))
			return context;

		const expression = template.attr("jstl-if");
		const resolver = context.resolver;
		const result = await resolver.resolve(expression, false);
		if (!result) {
			context.content = null;
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new If() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");



class Include extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "include";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include")) return context;
		try {
			const { template, resolver, renderer } = context;
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location);
			include = await _Template_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(include);

			const mode = template.attr("jstl-include-mode") || "replace";

			const subContext = context.subContext({ template: include, container: context.content, mode});
			await renderer.render(subContext);
			await subContext.ready();
			context.ignore = true;
			context.stop = true;

			return context;
		} catch (e) {
			console.error(e, context.template);
			return context;
		}
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Include() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Replace.js */ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js");



class Initial extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "initial";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init;
	}

	async execute(context) {
		const { template, renderer, resolver } = context;
		if (!(template instanceof Element)) {
			context.content = document.importNode(template, true);
		} else if (template.attr("jstl-ignore")) {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		} else if (template.attr("jstl-async")) {
			context.content = new _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
			template.attr("jstl-async", null);
			const renderOption = context.toRenderOption({ mode: "replace", target: context.content });
			setTimeout(() => {
				renderer.render(renderOption);
			}, parseInt(template.attr("jstl-async") || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subContext = context.subContext({ template: template.content.childNodes, container: context.content.content });
			await renderer.render(subContext);
			context.stop = true;
			context.ignore = true;
		} else if (template.hasAttribute("jstl-tagname")) {
			let tagname = template.attr("jstl-tagname").trim();
			if (tagname.length > 0) context.content = document.createElement(await resolver.resolveText(template.attr("jstl-tagname")));
			else {
				context.content = document.importNode(template, true);
				context.stop = true;
				context.ignore = true;
			}
		} else if (template.tagName) {
			let is = template.attr("is");
			if(is){
				is = await resolver.resolveText(is);
				const element = document.createElement(template.tagName, { is });
				element.attr("is", is);
				context.content = element;
			}else
				context.content =  document.createElement(template.tagName);

		} else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Initial() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/OnFinished.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/OnFinished.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const NAME = "on-finished";
const ATTRIBUTE_ON_FINISHED = `jstl-${NAME}`;
const ATTRIBUTE_ON_FINISHED_ASYNC = `${ATTRIBUTE_ON_FINISHED}-async`;

class OnFinished extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return NAME }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.finish }



	async execute(context) {
		const { template, content, root } = context;
		if (!(template instanceof HTMLElement) || !template.hasAttribute(ATTRIBUTE_ON_FINISHED))
			return context;

		const expression = template.attr(ATTRIBUTE_ON_FINISHED);
		const asyncCall = template.hasAttribute(ATTRIBUTE_ON_FINISHED_ASYNC);

		const data = {
			$element: content,
			$root: root,
			$template: template
		};
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });


		context.finished(async () => {
			try {
				if(!asyncCall)
					return resolver.resolve(expression, null);
					
				resolver.resolve(expression, null);
			} catch (e) {
				console.error(e);
			}
		});

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new OnFinished() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Repeat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Repeat.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const DIRECTIVENAME = "jstl-repeat";
const IGNOREDIRECTIVE = new Set([DIRECTIVENAME]);

const ATTRIBUTE = {
	DATA: `${DIRECTIVENAME}`,
	VAR: `${DIRECTIVENAME}-var`,
	STATUS: `${DIRECTIVENAME}-status`,
	COUNT: `${DIRECTIVENAME}-count`,
	START: `${DIRECTIVENAME}-start`,
	STEP: `${DIRECTIVENAME}-step`,
	CONDITION: `${DIRECTIVENAME}-condition`,
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;
	count = await resolver.resolve(count);
	const length = start + count * step;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count,
		};
		stop = !(await iterate(iteration, option));
	}
};

const doRepeat = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array)) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data,
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: DIRECTIVENAME, parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition) return false;

	const itemContext =  context.subContext({ resolver, template, mode: "append", ignoreDirective: IGNOREDIRECTIVE })
	await renderer.render(itemContext);
	await itemContext.ready();

	return true;
};

class Repeat extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return DIRECTIVENAME;
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 3;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT))) return context;

		try {
			const { template, resolver, renderer, content, container } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template,
				tagname: content.tagName,
				resolver,
				renderer,
				container,
				context,
			};
			if ((!option.data || option.data == "") && option.count) await doCount(option);
			else await doRepeat(option);
		} catch (error) {
			console.error("error at jstl-repeat:", error);
		}

		context.content = null;
		context.stop = true;
		context.ignore = true;
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Repeat() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const DEFAULT_OPTION = {
	mode: "text",
	unsecure: false,
	preventFormat : false,
	maxLength: 0	
};

const SECURE_HTML_FILTER = "script, style, body, html, head, object, link";

const readOption = async (parent, context) => {
	const resolver = context.resolver;
	return {
		mode: await resolver.resolveText((parent.attr("jstl-text-content-type") || "text").trim().toLowerCase()),
		unsecure: parent.hasAttribute("jstl-text-unsecure"),
		preventFormat: !!parent.attr("jstl-text-prevent-format") || false,
		maxLength: parseInt(await resolver.resolveText(parent.attr("jstl-text-trim-length") || "0"))
	};
};

const trimTextLength = (text, length) => {
	return text.length > length ? text.substring(0, length - 3).trim() + "..." : text;
};

const MODES = {
	"text" : async (option, context) => {
		const {content, resolver, template} = context;
		
		let text = await resolver.resolveText(template.textContent);		
		text = create(text,true).content.textContent;
		if(option.maxLength > 0)
			text = trimTextLength(text, option.maxLength);		
		
		content.textContent = text;		
	},
	"html": async (option, context) => {
		const {resolver, template} = context;
		
		let content = await resolver.resolveText(template.textContent);		
		content = create(content,true);		
		content = document.importNode(content.content, true);
		
		if(option.unsecure)
			context.content = content;			
		else{
			content.find(SECURE_HTML_FILTER).remove();			
			context.content = content;
		}
	}
};


class TextContent extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "text" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content }



	async execute(context) {
		const { template } = context;
		if (!(template instanceof Text) || template.textContent.trim().length == 0 || (template.parentElement && template.parentElement.hasAttribute("jstl-text-ignore")))
			return context;

		const parent = template.parentElement;
		const option = parent ? await readOption(parent, context) : DEFAULT_OPTION;
		
		const  mode = MODES[option.mode];
		if(!mode)
			throw new Error("Text mode \""+ option.mode + "\" is unsupported!");
		
		await mode(option, context);
		
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new TextContent() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js");
/* harmony import */ var _If__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./If */ "./node_modules/@default-js/defaultjs-template-language/src/directives/If.js");
/* harmony import */ var _Choose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choose */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js");
/* harmony import */ var _Include__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Include */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js");
/* harmony import */ var _Foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Foreach */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js");
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repeat */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Repeat.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Text */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js");
/* harmony import */ var _Attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Attributes */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js");
/* harmony import */ var _AttachElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttachElement */ "./node_modules/@default-js/defaultjs-template-language/src/directives/AttachElement.js");
/* harmony import */ var _OnFinished__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OnFinished */ "./node_modules/@default-js/defaultjs-template-language/src/directives/OnFinished.js");












/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplaceElement)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./node_modules/@default-js/defaultjs-template-language/src/Element.js");


class ReplaceElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	async execute({template, context}){
		return context;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/elements/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/elements/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js");


/***/ }),

/***/ "./client/pages/index/css/form.css":
/*!*****************************************!*\
  !*** ./client/pages/index/css/form.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/pages/index/css/header.css":
/*!*******************************************!*\
  !*** ./client/pages/index/css/header.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/pages/index/css/style.css":
/*!******************************************!*\
  !*** ./client/pages/index/css/style.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/material-icons/iconfont/material-icons.css":
/*!*****************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/material-icons.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/js/Constants.js":
/*!********************************!*\
  !*** ./client/js/Constants.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APPGLOBAL": () => (/* binding */ APPGLOBAL),
/* harmony export */   "EVENT__GLOBAL_ACTION_RELOADPARENT": () => (/* binding */ EVENT__GLOBAL_ACTION_RELOADPARENT),
/* harmony export */   "PAGEURL": () => (/* binding */ PAGEURL),
/* harmony export */   "ROLEMAPPING": () => (/* binding */ ROLEMAPPING),
/* harmony export */   "TEMPLATE_BASEPATH": () => (/* binding */ TEMPLATE_BASEPATH),
/* harmony export */   "URL_ACCESS": () => (/* binding */ URL_ACCESS),
/* harmony export */   "URL_LOGIN": () => (/* binding */ URL_LOGIN)
/* harmony export */ });
const TEMPLATE_BASEPATH = "/templates";
const EVENT__GLOBAL_ACTION_RELOADPARENT = "global:action:reload-parent";
const URL_LOGIN = "/api/system/login";
const URL_ACCESS = "/api/system/access";
const PAGEURL = new URL(location);

const ROLEMAPPING = {
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

const APPGLOBAL = {
	ROLEMAPPING
};
window.APPGLOBALS = APPGLOBAL;

/***/ }),

/***/ "./client/js/HttpInterceptor.js":
/*!**************************************!*\
  !*** ./client/js/HttpInterceptor.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_httpinterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-httpinterceptor */ "./node_modules/@default-js/defaultjs-httpinterceptor/index.js");
/* harmony import */ var _default_js_defaultjs_httpinterceptor_src_Manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-httpinterceptor/src/Manager.js */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Manager.js");
/* harmony import */ var _default_js_defaultjs_httpinterceptor_src_Interceptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-httpinterceptor/src/Interceptor.js */ "./node_modules/@default-js/defaultjs-httpinterceptor/src/Interceptor.js");
/* harmony import */ var _services_LoginService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/LoginService.js */ "./client/js/services/LoginService.js");





class AuthInterceptor extends _default_js_defaultjs_httpinterceptor_src_Interceptor_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
	constructor() {
		super();
	}

	async doAccept(data) {
		return location.origin == data.metadata.origin;
	}

	async doHandle(data) {
		const token = (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_3__.accessToken)();
		if (token) {
			data.request.headers = data.request.headers || {};
			data.request.headers["Authorization"] = `Bearer ${token}`;
		}
		return data;
	}
}

_default_js_defaultjs_httpinterceptor_src_Manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].addInterceptor(new AuthInterceptor());


/***/ }),

/***/ "./client/js/RegistrateServiceWorker.js":
/*!**********************************************!*\
  !*** ./client/js/RegistrateServiceWorker.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
if ('serviceWorker' in navigator) {
    navigator
        .serviceWorker
        .register('./serviceworker.js', {scope: './'})
        .then((reg) => {
            if (reg.installing) {
                console.log('Service worker installing');
            } else if (reg.waiting) {
                console.log('Service worker installed');
            } else if (reg.active) {
                console.log('Service worker active');
            }
        })
        .catch((error) => {
        // Registration failed
            console.log('Registration failed with ' + error); 
        });

    // Communicate with the service worker using MessageChannel API.
    function sendMessage(message) {
        return new Promise((resolve, reject) => {
            const messageChannel = new MessageChannel();
            messageChannel.port1.onmessage = function (event) {
                resolve(`Direct message from SW: ${event.data}`);
            };
            navigator
                .serviceWorker
                .controller
                .postMessage(message, [messageChannel.port2])
        });
    }
}

/***/ }),

/***/ "./client/js/components/HTMLCampaignElement.js":
/*!*****************************************************!*\
  !*** ./client/js/components/HTMLCampaignElement.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODENAME": () => (/* binding */ NODENAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CampaignService.js */ "./client/js/services/CampaignService.js");
/* harmony import */ var _services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CampaignRegistrationService.js */ "./client/js/services/CampaignRegistrationService.js");
/* harmony import */ var _services_LoginService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/LoginService.js */ "./client/js/services/LoginService.js");
/* harmony import */ var _default_js_defaultjs_html_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @default-js/defaultjs-html-form */ "./node_modules/@default-js/defaultjs-html-form/index.js");








const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-campaign-element`;
const NODENAME = "x-campaign";
const ATTR__CAMPAIGNID = "campaign-id";

const TEMPLATE_ROOT = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));
const TEMPLATE_REGISTRATION = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/registration.tpl.html`, location));
const TEMPLATE_REGISTRATIONS = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/registrations.tpl.html`, location));

const getDatesBetweenTwoDates = (a, b) => {
	a = a instanceof Date ? a : new Date(a);
	b = b instanceof Date ? b : new Date(b);

	const days = Math.ceil(Math.abs(a - b) / (1000 * 60 * 60 * 24));
	const dates = [];
	for (let i = 0; i < days; i++) dates.push(a.addDays(i));

	return dates;
};

class HTMLCampaignElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
	#open = false;
	constructor() {
		super();
		const root = this.root;
		root.on(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.EVENT__GLOBAL_ACTION_RELOADPARENT, (event) => {
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
				await (0,_services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__.deleteCampaign)(this.campaignId);
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
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container: this.root, template, data: {accessRights: (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_5__.accessRights)(), open:this.#open, campaign: await (0,_services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__.getCampaign)(this.campaignId) } });
	}

	async openRegistrationDialog() {
		const template = await TEMPLATE_REGISTRATION;
		const campaign = await (0,_services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__.getCampaign)(this.campaignId);

		const data = {
			campaign,
			days: getDatesBetweenTwoDates(campaign.startdate, campaign.enddate),
		};

		const result = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({
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

				await (0,_services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_4__.storeRegistration)(this.campaignId, { fullyavailable, availability });
				dialog.hide();
				dialog.remove();
			})();
		});
		form.on("action:close-registration-dialog", (event) => {
			event.stopPropagation();
			dialog.hide();
			dialog.remove();
		});

		const registration = await (0,_services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_4__.getMyRegistration)(this.campaignId);
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
		const registrations = await (0,_services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_4__.getRegistrations)(this.campaignId);
		const result = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container: this, template, data: { registrations }, mode: "append" });
		const dialog = result.content[0];
		dialog.on("close", () => {
			dialog.remove();
		});

		dialog.showModal();
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLCampaignElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLCampaignElement);


/***/ }),

/***/ "./client/js/components/HTMLCampaignMemberElement.js":
/*!***********************************************************!*\
  !*** ./client/js/components/HTMLCampaignMemberElement.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODENAME": () => (/* binding */ NODENAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CampaignRegistrationService.js */ "./client/js/services/CampaignRegistrationService.js");
/* harmony import */ var _services_MemberService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/MemberService.js */ "./client/js/services/MemberService.js");






const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-campaign-member-element`;
const NODENAME = "x-campaign-member";
const ATTR__CAMPAIGNID = "campaign-id";
const ATTR__MEMBERID = "member-id";

const TEMPLATE_ROOT = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));

class HTMLCampaignMemberElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
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
			this.#initialized = true;
			this.render();
		}
	}

	async render() {
		const template = await TEMPLATE_ROOT;
		const registration = await this.getRegistration();
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container: this.root, template, data: { registration } });
	}

	get campaignid() {
		return this.attr(ATTR__CAMPAIGNID);
	}

	get memberid() {
		return this.attr(ATTR__MEMBERID);
	}

	async getRegistration() {
		const { campaignid, memberid } = this;
		return await (0,_services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_3__.getRegistrationByMember)(campaignid, memberid);
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLCampaignMemberElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLCampaignMemberElement);


/***/ }),

/***/ "./client/js/components/HTMLCampaignsElement.js":
/*!******************************************************!*\
  !*** ./client/js/components/HTMLCampaignsElement.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODENAME": () => (/* binding */ NODENAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CampaignService.js */ "./client/js/services/CampaignService.js");
/* harmony import */ var _services_LoginService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/LoginService.js */ "./client/js/services/LoginService.js");
/* harmony import */ var _default_js_defaultjs_html_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @default-js/defaultjs-html-form */ "./node_modules/@default-js/defaultjs-html-form/index.js");







const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-campaigns-element`
const NODENAME = "x-campaigns";

const TEMPLATE_URL__ROOT = new URL(`${TEMPLATES_PATH}/root.tpl.html`, location);
const TEMPLATE_URL__CREATEDIALOG = new URL(`${TEMPLATES_PATH}/campaign-dialog.tpl.html`, location);

class HTMLCampaignsElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
    #createDialog;

	constructor() {
		super();
        const root = this.root;
        root.on(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.EVENT__GLOBAL_ACTION_RELOADPARENT, (event) => {
            event.stopPropagation();
            this.render();            
        });
        root.on("action:create-campaign", (event) => {
            event.stopPropagation();
            this.openCreateDialog();
        });
        root.on("action:close-campaign-dialog", (event) => {
            event.stopPropagation();
            if(this.#createDialog)
            this.#createDialog.close();
        });
	}

	async init() {
        await super.init();
		if (!this.#initialized) {
			await this.render();
            this.#initialized = true;
		}
	}

    async render() {
        const template = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(TEMPLATE_URL__ROOT);
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container: this.root, template, data: {accessRights: (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_4__.accessRights)(), campaigns: await (0,_services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__.getCampaigns)()} });
    }

    async openCreateDialog() {
        const root = this.root;
        if(!this.#createDialog){
            const template = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(TEMPLATE_URL__CREATEDIALOG);
            const result = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({template, container: root, data: {accessRights: (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_4__.accessRights)()}, mode:"append"});           
            this.#createDialog = result.content[0];
            this.#createDialog.on("d-form-submit", (event) => {
                event.preventDefault();
                event.stopPropagation();
                const form = event.target;
                (async () => {
                    const campaign = await form.value();
                    await (0,_services_CampaignService_js__WEBPACK_IMPORTED_MODULE_3__.storeCampaign)(campaign);
                    
                    this.#createDialog.close();

                    await this.render();
                })();
            })
        }

        this.#createDialog.showModal();
    }
	
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLCampaignsElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLCampaignsElement);


/***/ }),

/***/ "./client/js/components/HTMLClanElement.js":
/*!*************************************************!*\
  !*** ./client/js/components/HTMLClanElement.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTR__CLAN_ID": () => (/* binding */ ATTR__CLAN_ID),
/* harmony export */   "ATTR__CLAN_NAME": () => (/* binding */ ATTR__CLAN_NAME),
/* harmony export */   "ATTR__CLAN_TAG": () => (/* binding */ ATTR__CLAN_TAG),
/* harmony export */   "NODENAME": () => (/* binding */ NODENAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");




const NODENAME = "x-clan";
const ATTR__CLAN_ID = "clan-id";
const ATTR__CLAN_NAME = "clan-name";
const ATTR__CLAN_TAG = "clan-tag";

const TEMPLATE_URL__ROOT = new URL(`${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-clan-element/root.tpl.html`, location);

class HTMLClanElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
	#clan = null;

	constructor() {
		super();
		this.on(`${NODENAME}:sort-member-by-name`, () => {});
		this.on(`${NODENAME}:sort-member-by-wtr`, () => {});
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			const template = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(TEMPLATE_URL__ROOT);
			await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container: this.root, template, data: await this.clanData() });
		}
	}

	async clanData() {
		if (!this.#clan) {
			this.#clan = {
				id: this.attr(ATTR__CLAN_ID),
				name: this.attr(ATTR__CLAN_NAME),
				tag: this.attr(ATTR__CLAN_TAG),
			};

			let response = await fetch(new URL(`/api/clans/${this.#clan.id}/members`, location));
			response = await response.json();
			this.#clan.members = response.data;
		}

		return this.#clan;
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLClanElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLClanElement);


/***/ }),

/***/ "./client/js/components/HTMLDialogExtentionElement.js":
/*!************************************************************!*\
  !*** ./client/js/components/HTMLDialogExtentionElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");


const NODENAME = "x-dialog";
const CLOSEMARKER = "[close-modal]";

class HTMLDialogExtentionElement extends (0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__.componentBaseOf)(HTMLDialogElement){

    static get NODENAME(){ return NODENAME; }

    constructor(){
        super();
        this.on("click", ({target}) => {
            if(target.is(CLOSEMARKER))
                this.close();
        });
    }

    async init(){
        await super.init();
    }

    hide(){
        this.close();
    }
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__.define)(HTMLDialogExtentionElement, { extends: "dialog"});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLDialogExtentionElement);

/***/ }),

/***/ "./client/js/components/HTMLLoginElement.js":
/*!**************************************************!*\
  !*** ./client/js/components/HTMLLoginElement.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODENAME": () => (/* binding */ NODENAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_LoginService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/LoginService.js */ "./client/js/services/LoginService.js");




const NODENAME = "x-login-component";
const ATTR_TEMPLATE = "template";

class WotLoginComponent extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__.Component {
	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();
	}

	async init() {
		await super.init();
		const user = await (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_2__.login)();
		if (user) {
			const attrTemplate = this.attr(ATTR_TEMPLATE);
			if (attrTemplate) {
				const template = await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_1__.Template.load(new URL(attrTemplate, location));
				await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_1__.Renderer.render({ container: this, data: { user }, template });
			}
		}
		else{
			this.textContent = "kein Zugriff erlaubt";
		}
		
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_0__.define)(WotLoginComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WotLoginComponent);


/***/ }),

/***/ "./client/js/components/HTMLMemberElement.js":
/*!***************************************************!*\
  !*** ./client/js/components/HTMLMemberElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODENAME": () => (/* binding */ NODENAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_MemberService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/MemberService.js */ "./client/js/services/MemberService.js");





const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-member-element`
const NODENAME = "x-member";
const ATTR__MEMBERID = "member-id";

const TEMPLATE_ROOT = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));

class HTMLMemberElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;

	constructor() {
		super();
		const root = this.root;
		
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			await this.render();
            this.#initialized = true;
		}
	}

	get memberId(){
		return parseInt(this.attr(ATTR__MEMBERID));
	}

    async render() {
        const template = await TEMPLATE_ROOT;
		const member = await (0,_services_MemberService_js__WEBPACK_IMPORTED_MODULE_3__.getMember)(this.memberId);
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container: this.root, template, data: {member} });
    }
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLMemberElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLMemberElement);


/***/ }),

/***/ "./client/js/components/HTMLTeamElement.js":
/*!*************************************************!*\
  !*** ./client/js/components/HTMLTeamElement.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/TeamService.js */ "./client/js/services/TeamService.js");
/* harmony import */ var _services_LoginService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/LoginService.js */ "./client/js/services/LoginService.js");
/* harmony import */ var _default_js_defaultjs_html_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @default-js/defaultjs-html-form */ "./node_modules/@default-js/defaultjs-html-form/index.js");







const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-team-element`;

const NODENAME = "x-team";
const ATTR__TEAMID = "team-id";
const ATTR__CAMPAIGNID = "campaign-id";

const TEMPLATE__ROOT = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));
const TEMPLATE__EDITOR = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/editor.tpl.html`, location));

class HTMLTeamElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
	#open = false;

	constructor() {
		super();
		const root = this.root;
		root.on("action:toogle-details", (event) => {
			event.stopPropagation();
			const {target} = event;
			if (target instanceof HTMLDetailsElement) 
				this.#open = target.open;
		});
		root.on("action:delete-team", (event) => {
			event.stopPropagation();
			(async () => {
				const teamId = this.teamId;
				await (0,_services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__.deleteTeam)(teamId);
				this.trigger("info:team-deleted", teamId);
				this.remove();
			})();
		});

		root.on("action:edit-team", (event) => {
			event.stopPropagation();
			this.editorDialog();
		});
	}

	async init() {
		await super.init();
		if (!this.#initialized) {
			this.render();
			this.#initialized = true;
		}
	}

	get teamId() {
		return parseInt(this.attr(ATTR__TEAMID));
	}

	get campaignId() {
		return parseInt(this.attr(ATTR__CAMPAIGNID));
	}

	async render() {
		const template = await TEMPLATE__ROOT;
		const team = await (0,_services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__.getTeam)(this.teamId)
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ template, container: this.root, data: {accessRights: (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_4__.accessRights)(), open: this.#open, team } });
	}

	async editorDialog() {
		const { root, teamId } = this;
		const team = await (0,_services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__.getTeam)(teamId);
		const template = await TEMPLATE__EDITOR;
		const container = document.createElement("div");
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ container, template, data: { team } });
		root.append(container.innerHTML);
		const dialog = root.find(":scope > dialog").last();
		dialog.on("d-form-submit", (event) => {
			event.stopPropagation();
			const form = event.target;
			(async () => {
				const team = await form.value();
				await (0,_services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__.storeTeam)(team);
				dialog.close();
				dialog.remove();
				this.render();
			})();
		});
		dialog.on("close", (event) => {
			event.stopPropagation();
			dialog.remove();
		});

		const form = dialog.find("d-form").first();
		await form.ready;
		await form.value(team);
		dialog.showModal();
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLTeamElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLTeamElement);


/***/ }),

/***/ "./client/js/components/HTMLTeamMemberSearchField.js":
/*!***********************************************************!*\
  !*** ./client/js/components/HTMLTeamMemberSearchField.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_html_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-form */ "./node_modules/@default-js/defaultjs-html-form/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_MemberService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/MemberService.js */ "./client/js/services/MemberService.js");
/* harmony import */ var _services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/CampaignRegistrationService.js */ "./client/js/services/CampaignRegistrationService.js");







const ATTR_CAMPAIGNID = "campaign-id";
const NODENAME = "x-team-member-search-field";
const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-team-member-search-field-element`;
const TEMPLATE_ROOT = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__.Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));
const TEMPLATE_DIALOG = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__.Template.load(new URL(`${TEMPLATES_PATH}/dialog.tpl.html`, location));

class HTMLTeamMemberSearchFieldElement extends _default_js_defaultjs_html_form__WEBPACK_IMPORTED_MODULE_2__.BaseField {
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
					return (await (0,_services_CampaignRegistrationService_js__WEBPACK_IMPORTED_MODULE_5__.getRegistrations)(campaignid)).map(registration => {return { id: registration.memberid};});
				
				return (0,_services_MemberService_js__WEBPACK_IMPORTED_MODULE_4__.getMembers)();
			})();
			
			await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__.Renderer.render({ template, container: root, data: { members, memberids, campaignid }, mode:"append"});	
			this.#selectionDialog = root.find(":scope > dialog").first();
			
		}
		this.#selectionDialog.showModal(); 
	}

	async render(value) {
		value = value || await this.value();
		const template = await TEMPLATE_ROOT;
		_default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_3__.Renderer.render({ template, container: this.root, data: { memberids: value || [], campaignid: this.campaignid } });
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

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLTeamMemberSearchFieldElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLTeamMemberSearchFieldElement);


/***/ }),

/***/ "./client/js/components/HTMLTeamsElement.js":
/*!**************************************************!*\
  !*** ./client/js/components/HTMLTeamsElement.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");
/* harmony import */ var _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components */ "./node_modules/@default-js/defaultjs-html-components/index.js");
/* harmony import */ var _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-template-language */ "./node_modules/@default-js/defaultjs-template-language/index.js");
/* harmony import */ var _services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/TeamService.js */ "./client/js/services/TeamService.js");
/* harmony import */ var _services_CampaignService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CampaignService.js */ "./client/js/services/CampaignService.js");
/* harmony import */ var _services_LoginService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/LoginService.js */ "./client/js/services/LoginService.js");
/* harmony import */ var _default_js_defaultjs_html_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @default-js/defaultjs-html-form */ "./node_modules/@default-js/defaultjs-html-form/index.js");








const TEMPLATES_PATH = `${_Constants_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_BASEPATH}/html-teams-element`;
const TEMPLATE__ROOT = _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Template.load(new URL(`${TEMPLATES_PATH}/root.tpl.html`, location));

const NODENAME = "x-teams";
const ATTR__CAMPAIGNID = "campaign-id"

class HTMLTeamsElement extends _default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.Component {
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
				await (0,_services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__.storeTeam)({ name: "neues Team", campaignid });

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
		const teams = await (0,_services_TeamService_js__WEBPACK_IMPORTED_MODULE_3__.getTeams)(this.campaignId);		
		await _default_js_defaultjs_template_language__WEBPACK_IMPORTED_MODULE_2__.Renderer.render({ template, container: this.root, data: {accessRights: (0,_services_LoginService_js__WEBPACK_IMPORTED_MODULE_5__.accessRights)(), teams }});
	}
}

(0,_default_js_defaultjs_html_components__WEBPACK_IMPORTED_MODULE_1__.define)(HTMLTeamsElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLTeamsElement);


/***/ }),

/***/ "./client/js/components/index.js":
/*!***************************************!*\
  !*** ./client/js/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTMLDialogExtentionElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLDialogExtentionElement.js */ "./client/js/components/HTMLDialogExtentionElement.js");
/* harmony import */ var _HTMLLoginElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLLoginElement.js */ "./client/js/components/HTMLLoginElement.js");
/* harmony import */ var _HTMLClanElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTMLClanElement.js */ "./client/js/components/HTMLClanElement.js");
/* harmony import */ var _HTMLMemberElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HTMLMemberElement.js */ "./client/js/components/HTMLMemberElement.js");
/* harmony import */ var _HTMLCampaignsElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HTMLCampaignsElement.js */ "./client/js/components/HTMLCampaignsElement.js");
/* harmony import */ var _HTMLCampaignElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HTMLCampaignElement.js */ "./client/js/components/HTMLCampaignElement.js");
/* harmony import */ var _HTMLCampaignMemberElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTMLCampaignMemberElement.js */ "./client/js/components/HTMLCampaignMemberElement.js");
/* harmony import */ var _HTMLTeamElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLTeamElement.js */ "./client/js/components/HTMLTeamElement.js");
/* harmony import */ var _HTMLTeamsElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTMLTeamsElement.js */ "./client/js/components/HTMLTeamsElement.js");
/* harmony import */ var _HTMLTeamMemberSearchField_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HTMLTeamMemberSearchField.js */ "./client/js/components/HTMLTeamMemberSearchField.js");












/***/ }),

/***/ "./client/js/javascript-extentions/Date.js":
/*!*************************************************!*\
  !*** ./client/js/javascript-extentions/Date.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
window.Date.prototype.addDays = function (days) {
    const date = new Date(this);
    date.setDate(date.getDate() + days);
    return date;
};

/***/ }),

/***/ "./client/js/javascript-extentions/index.js":
/*!**************************************************!*\
  !*** ./client/js/javascript-extentions/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date.js */ "./client/js/javascript-extentions/Date.js");


/***/ }),

/***/ "./client/js/services/CampaignRegistrationService.js":
/*!***********************************************************!*\
  !*** ./client/js/services/CampaignRegistrationService.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMyRegistration": () => (/* binding */ getMyRegistration),
/* harmony export */   "getRegistrationByMember": () => (/* binding */ getRegistrationByMember),
/* harmony export */   "getRegistrations": () => (/* binding */ getRegistrations),
/* harmony export */   "storeRegistration": () => (/* binding */ storeRegistration)
/* harmony export */ });
/* harmony import */ var _ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceUtils.js */ "./client/js/services/ServiceUtils.js");
/* harmony import */ var _LoginService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginService.js */ "./client/js/services/LoginService.js");



const ENDPOINT = (campaign) => `/api/campaigns/${campaign}/registrations`;
const ENDPOINTBYMEMBER = (campaign, member) => `${ENDPOINT(campaign)}/${member}`;

const CACHE = new Map();

const getCachedRegistrations = (campaign) => {
    return CACHE.get(campaign);
}
const getCachedRegistration = (campaign, member) => {    
    const registrations = getCachedRegistrations(campaign);
    if(registrations)
        return registrations.get(member);

    return null;
}

const cacheRegistration = (registration) =>{
    if(!registration) return;
    const { campaignid, memberid } = registration;
    const cache = (() => {
        if(!CACHE.has(campaignid))
            CACHE.set(campaignid, new Map());

        return CACHE.get(campaignid);
    })();
    cache.set(memberid, registration);
}

const getRegistrations = async (campaign) =>{
    if(CACHE.has(campaign))
        return Array.from(getCachedRegistrations(campaign).values());

    const registrations = (await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(ENDPOINT(campaign))).data;
    for(const registration of registrations)
        cacheRegistration(registration);

    return registrations;
}

const storeRegistration = async (campaign, registration) => {
    registration = await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.postJSON)(ENDPOINT(campaign), registration);
    cacheRegistration(registration);
    return registration;
}

const getMyRegistration = async (campaign) => {
    return getRegistrationByMember(campaign,  (0,_LoginService_js__WEBPACK_IMPORTED_MODULE_1__.member)().id);
} 

const getRegistrationByMember = async (campaign, member) => {
    let registration = getCachedRegistration(campaign, member);
    if(!registration){
        registration = await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(ENDPOINTBYMEMBER(campaign, member));
        cacheRegistration(registration);
    }
    return registration;
} 


/***/ }),

/***/ "./client/js/services/CampaignService.js":
/*!***********************************************!*\
  !*** ./client/js/services/CampaignService.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCampaign": () => (/* binding */ deleteCampaign),
/* harmony export */   "getCampaign": () => (/* binding */ getCampaign),
/* harmony export */   "getCampaigns": () => (/* binding */ getCampaigns),
/* harmony export */   "storeCampaign": () => (/* binding */ storeCampaign)
/* harmony export */ });
/* harmony import */ var _ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceUtils.js */ "./client/js/services/ServiceUtils.js");


const ENDPOINT = `/api/campaigns`;

const CACHE = new Map();

const getCampaigns = async () => {
    let campaigns = null
    if(CACHE.size == 0){
        campaigns = (await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(ENDPOINT)).data;
        for(const campaign of campaigns)
            CACHE.set(campaign.id, campaign);
    }
    else {
        campaigns = [];
        for(const [key, campaign] of CACHE)
            campaigns.push(campaign);
    }
    return campaigns;
};

const getCampaign = async (id) => {
    if(CACHE.has(id))
        return CACHE.get(id);

    const campaign = (await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(`${ENDPOINT}/${id}`));
    CACHE.set(campaign.id, campaign);
    
    return campaign;
};

const storeCampaign = async (campaign) => {
    campaign = (await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.postJSON)(`${ENDPOINT}`, campaign));
    CACHE.set(campaign.id, campaign);
    
    return campaign;
};

const deleteCampaign = async (id) => {
    await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.deleteJSON)(`${ENDPOINT}/${id}`);
    CACHE.delete(id);
};

/***/ }),

/***/ "./client/js/services/LoginService.js":
/*!********************************************!*\
  !*** ./client/js/services/LoginService.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accessRights": () => (/* binding */ accessRights),
/* harmony export */   "accessToken": () => (/* binding */ accessToken),
/* harmony export */   "fullAccessData": () => (/* binding */ fullAccessData),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "member": () => (/* binding */ member)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./client/js/Constants.js");


const SECOND = 1000;
const MINUTE = 60 * SECOND;

let isloggedIn = false;
let ACCESSRIGHTS = {};
let MEMBER;
let ACCESSTOKEN;
let EXPIREAT;

const access = async () => {
	let response = await fetch(new URL(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.URL_ACCESS, location));
	if (response.status == 401) return false;
	if (response.status == 403) return null;

	response = await response.json();
	const { member, accessToken, expireAt, accessRights } = response;
	MEMBER = member;
	ACCESSTOKEN = accessToken;
	EXPIREAT = expireAt;
	ACCESSRIGHTS = accessRights;

	APPGLOBALS.member = MEMBER
	APPGLOBALS.accessRights = ACCESSRIGHTS;

	scheduleNexAccessTokenRefresh();

	return true;
};

const scheduleNexAccessTokenRefresh = () => {
	const timeOffset = EXPIREAT - (Date.now() + MINUTE);

	setTimeout(async () => {
		await access();
	}, timeOffset);
};

const login = async () => {
	if (!isloggedIn) {
		if (!await access()) {
			location.href = new URL(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.URL_LOGIN, location).toString();
			return false;
		}

		isloggedIn = true;
	}

	return MEMBER;
};

const fullAccessData = () => {
	return {
		accessToken: ACCESSTOKEN,
		expireAt: EXPIREAT,
		member: MEMBER,
		accessRights: ACCESSRIGHTS
	}
}

const accessRights = () => {
	return ACCESSRIGHTS;
}

const member = () => {
	return MEMBER;
}

const accessToken = () => {
	return ACCESSTOKEN;
}




/***/ }),

/***/ "./client/js/services/MemberService.js":
/*!*********************************************!*\
  !*** ./client/js/services/MemberService.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentMember": () => (/* binding */ currentMember),
/* harmony export */   "getMember": () => (/* binding */ getMember),
/* harmony export */   "getMembers": () => (/* binding */ getMembers)
/* harmony export */ });
/* harmony import */ var _ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceUtils.js */ "./client/js/services/ServiceUtils.js");
/* harmony import */ var _LoginService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginService.js */ "./client/js/services/LoginService.js");



const ENDPOINT = `/api/members`;

let FULLLOADED = false;
const CACHE = new Map();

const currentMember = async () => {
	return (0,_LoginService_js__WEBPACK_IMPORTED_MODULE_1__.member)();
};

const getMembers = async () => {
	let members = null
	if (!FULLLOADED) {
		members = (await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(ENDPOINT)).data;
		for (const member of members)
			CACHE.set(member.id, member);

		FULLLOADED = true;
	}
	else
		members = Array.from(CACHE.values());

	return members;
};

const getMember = async (id) => {
	if (CACHE.has(id))
		return CACHE.get(id);

	const member = await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(`${ENDPOINT}/${id}`);
	if (member)
		CACHE.set(member.id, member);

	return member;
}

/***/ }),

/***/ "./client/js/services/ServiceUtils.js":
/*!********************************************!*\
  !*** ./client/js/services/ServiceUtils.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteJSON": () => (/* binding */ deleteJSON),
/* harmony export */   "getJSON": () => (/* binding */ getJSON),
/* harmony export */   "postJSON": () => (/* binding */ postJSON)
/* harmony export */ });
/* harmony import */ var _LoginService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginService.js */ "./client/js/services/LoginService.js");


const toURL = (url) => {
    if(!(url instanceof URL))
        return new URL(url, location);
    return url;
};

const internalFetch = async (url, request) => {	
	const response = await fetch(toURL(url), request);
	if(response.ok && response.status >= 400)
		return await (0,_LoginService_js__WEBPACK_IMPORTED_MODULE_0__.login)();
		
	return response;
}

const getJSON = async (url) => {
    const response = await internalFetch(url, {headers:{"content-type": "application/json"}});
    if(response.status < 204)
    	return response.json();
};

const postJSON = async (url, data) => {
    const response = await internalFetch(url, {method: "post" ,headers:{"content-type": "application/json"}, body: JSON.stringify(data)});
    if(response.status < 204)
        return response.json();
};

const deleteJSON = async (url) => {
    await internalFetch(url, {method: "delete", headers:{"content-type": "application/json"}});
};

/***/ }),

/***/ "./client/js/services/TeamService.js":
/*!*******************************************!*\
  !*** ./client/js/services/TeamService.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTeam": () => (/* binding */ deleteTeam),
/* harmony export */   "getTeam": () => (/* binding */ getTeam),
/* harmony export */   "getTeams": () => (/* binding */ getTeams),
/* harmony export */   "storeTeam": () => (/* binding */ storeTeam)
/* harmony export */ });
/* harmony import */ var _ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceUtils.js */ "./client/js/services/ServiceUtils.js");


const ENDPOINT = `/api/teams`;

const CACHE = new Map();
const CACHE_CAMPAIGNTEAMS = new Map();

const getCampignCache = (campaignid = null, create=false) => {	
	const cacheKey = `${campaignid ? campaignid : -1}`;
	if(CACHE_CAMPAIGNTEAMS.has(cacheKey))
		return CACHE_CAMPAIGNTEAMS.get(cacheKey);
	
	if(!create)
		return null;
	
	const campaignCache = new Map();
	CACHE_CAMPAIGNTEAMS.set(cacheKey, campaignCache);
	
	return campaignCache;
}

const getTeams = async (campaignid = null) => {		
	let campaignCache = getCampignCache(campaignid);
	if(campaignCache)
		return Array.from(campaignCache.values());
		
	campaignCache = getCampignCache(campaignid, true);    
    const teams = (await (async () => {
		if(campaignid)
			return (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(`${ENDPOINT}/campaign/${campaignid}`);
		return (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(ENDPOINT);
	})()).data;    
    
    for(let team of teams){
		campaignCache.set(team.id, team);
        CACHE.set(team.id, team);
    }

    return teams;
};

const getTeam = async (id) => {
    if(CACHE.has(id))
        return CACHE.get(id);

    const team = await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJSON)(`${ENDPOINT}/${id}`);
    CACHE.set(team.id, team);    
    const campaignCache = getCampignCache(team.campaignid, true);
	campaignCache.set(team.id, team);
	
    return team;
};

const storeTeam = async (team) => {
    team = await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.postJSON)(`${ENDPOINT}`, team );
    CACHE.set(team.id, team);
    const campaignCache = getCampignCache(team.campaignid, true);
	campaignCache.set(team.id, team);

    return team;
};

const deleteTeam = async (id) => {
    await (0,_ServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.deleteJSON)(`${ENDPOINT}/${id}`);    
    const team = CACHE.get(id);
    const campaignCache = getCampignCache(team.campaignid, false);
    if(campaignCache)
		campaignCache.delete(id);
		
	CACHE.delete(id);
};

/***/ }),

/***/ "./client/pages/index/js/DateFormat.js":
/*!*********************************************!*\
  !*** ./client/pages/index/js/DateFormat.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
((global) => {
    const DATEFORMAT = new Intl.DateTimeFormat('default', {weekday: 'long',month: 'long', day:'numeric'});
	const toDate = (date = new Date()) => {
		return DATEFORMAT.format(date)
	};

    global.DateFormats = global.DateFormats || {
		toDate
	};
})(window);

/***/ }),

/***/ "./client/pages/index/js/FormUtils.js":
/*!********************************************!*\
  !*** ./client/pages/index/js/FormUtils.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
((global) => {
	const toDate = (date = new Date()) => {		
		const year = date.getFullYear();		
		const month = date.getMonth();
		date = date.getDate();
		return {
			date, month, year,
			test: year * 10000 + month * 100 + date
		};
	};

	const dateGreaterEqual = (a, b) => {
		a = toDate(a instanceof Date ? a : Date.parse(a));
		b = toDate(b instanceof Date ? b : Date.parse(b));

		return a.test >= b.test;
	};

	const dateGreater = (a, b) => {
		a = toDate(a instanceof Date ? a : Date.parse(a));
		b = toDate(b instanceof Date ? b : Date.parse(b));

		return a.test > b.test;
	};

	global.formUtils = global.formUtils || {
		date: {
			greaterEqual: dateGreaterEqual,
			greaterEqualNow: (date) => dateGreaterEqual(date, new Date()),
            greater: dateGreater
		},
	};
})(window);


/***/ }),

/***/ "./client/pages/index/js/Management.js":
/*!*********************************************!*\
  !*** ./client/pages/index/js/Management.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BODY = document.body;


BODY.on("action:management:sync-all-data", async (event) => {
    console.log({event});
    await fetch("/api/management/sync-data", location);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./client/pages/index/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_HttpInterceptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/HttpInterceptor.js */ "./client/js/HttpInterceptor.js");
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_app_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-app-toolbox */ "./node_modules/@default-js/defaultjs-app-toolbox/index.js");
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./client/pages/index/css/style.css");
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/form.css */ "./client/pages/index/css/form.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/header.css */ "./client/pages/index/css/header.css");
/* harmony import */ var _js_javascript_extentions_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/javascript-extentions/index.js */ "./client/js/javascript-extentions/index.js");
/* harmony import */ var _js_RegistrateServiceWorker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/RegistrateServiceWorker.js */ "./client/js/RegistrateServiceWorker.js");
/* harmony import */ var _js_components_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../js/components/index.js */ "./client/js/components/index.js");
/* harmony import */ var _js_FormUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/FormUtils.js */ "./client/pages/index/js/FormUtils.js");
/* harmony import */ var _js_DateFormat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/DateFormat.js */ "./client/pages/index/js/DateFormat.js");
/* harmony import */ var _js_Management_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/Management.js */ "./client/pages/index/js/Management.js");
//Libs




//css







// custom code






// logic



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDcUM7QUFDQztBQUNLO0FBQzNDO0FBQ0E7QUFDb0Q7QUFDM0I7QUFDRDtBQUNFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ2lEO0FBQ0o7QUFDUDtBQUNYO0FBQ0M7QUFDNUI7QUFDQTtBQUMyQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWFwcC10b29sYm94L2luZGV4LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWFwcC10b29sYm94L3NyYy9BcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1hcHAtdG9vbGJveC9zcmMvUm91dGVMaW5rL0F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtYXBwLXRvb2xib3gvc3JjL1JvdXRlTGluay9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtYXBwLXRvb2xib3gvc3JjL1JvdXRlTGluay9Ob2RlbmFtZS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1hcHAtdG9vbGJveC9zcmMvUm91dGVMaW5rL2luZGV4LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWFwcC10b29sYm94L3NyYy9Sb3V0ZS9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWFwcC10b29sYm94L3NyYy9Sb3V0ZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtYXBwLXRvb2xib3gvc3JjL1JvdXRlL05vZGVuYW1lLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWFwcC10b29sYm94L3NyYy9Sb3V0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1hcHAtdG9vbGJveC9zcmMvVmlldy9Ob2RlbmFtZS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1hcHAtdG9vbGJveC9zcmMvVmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9VVUlELmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvVmFsdWVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL2luZGV4LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRGVmYXVsdFZhbHVlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnRGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFRleHRBcmVhRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IdG1sQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy91dGlscy9VdGlscy5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlci5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL05vZGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9XZWFrRGF0YS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9CYXNlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvQmFzZUZpZWxkLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL0ZpZWxkLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL0Zvcm1CdXR0b24uanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9MaXN0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL1N0ZXAuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvY29udHJvbHMvQmFja0J1dHRvbi5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL2NvbnRyb2xzL05leHRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9jb250cm9scy9TdWJtaXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9jb250cm9scy9TdW1tYXJ5QnV0dG9uLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9oYW5kZWxzL0NvbmRpdGlvbkhhbmRsZS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL2hhbmRlbHMvRWRpdGFibGVIYW5kbGUuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9oYW5kZWxzL01lc3NhZ2VIYW5kbGUuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9oYW5kZWxzL1ZhbGlkYXRpb25IYW5kbGUuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9saXN0L0FkZFJvdy5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL2xpc3QvRGVsZXRlUm93LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvbGlzdC9Sb3cuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9saXN0L1Jvd3MuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9zdWJtaXRBY3Rpb25zL0Jhc2VTdWJtaXRBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy9zdWJtaXRBY3Rpb25zL0RlZmF1bHRGb3JtU3VibWl0QWN0aW9uLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvc3VibWl0QWN0aW9ucy9TdWJtaXRBY3Rpb25SZXN1bHQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy91dGlscy9EYXRhSGVscGVyLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvdXRpbHMvRXZlbnRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy91dGlscy9Ob2RlSGVscGVyLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvdXRpbHMvU3RhdGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy91dGlscy9WYWxpZGF0aW9uSGVscGVyLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvdXRpbHMvVmFsdWVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtL3NyYy93cmFwcGVyL0NoZWNrYm94LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvd3JhcHBlci9GaWxlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvd3JhcHBlci9SYWRpby5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWZvcm0vc3JjL3dyYXBwZXIvU2VsZWN0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvd3JhcHBlci9UZXh0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvd3JhcHBlci9XcmFwcGVyLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybS9zcmMvd3JhcHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odHRwaW50ZXJjZXB0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHR0cGludGVyY2VwdG9yL3NyYy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHR0cGludGVyY2VwdG9yL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odHRwaW50ZXJjZXB0b3Ivc3JjL0ludGVyY2VwdG9yLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0dHBpbnRlcmNlcHRvci9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odHRwaW50ZXJjZXB0b3Ivc3JjL1V0aWxzLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0dHBpbnRlcmNlcHRvci9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHR0cGludGVyY2VwdG9yL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odHRwaW50ZXJjZXB0b3Ivc3JjL2ludGVyY2VwdG9ycy9PQXV0aEludGVyY2VwdG9yLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0dHBpbnRlcmNlcHRvci9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHR0cGludGVyY2VwdG9yL3NyYy9pbnRlcmNlcHRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL0RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL1RlbXBsYXRlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0F0dGFjaEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9DaG9vc2UuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvRGF0YS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9Gb3JlYWNoLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0lmLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSW5pdGlhbC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9PbkZpbmlzaGVkLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL1JlcGVhdC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9UZXh0LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9lbGVtZW50cy9SZXBsYWNlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9lbGVtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L3BhZ2VzL2luZGV4L2Nzcy9mb3JtLmNzcz9hMmU0Iiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvcGFnZXMvaW5kZXgvY3NzL2hlYWRlci5jc3M/YzdjOCIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L3BhZ2VzL2luZGV4L2Nzcy9zdHlsZS5jc3M/YTdjNSIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzcz8yMzJlIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvSHR0cEludGVyY2VwdG9yLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvUmVnaXN0cmF0ZVNlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL2NsaWVudC9qcy9jb21wb25lbnRzL0hUTUxDYW1wYWlnbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL2NsaWVudC9qcy9jb21wb25lbnRzL0hUTUxDYW1wYWlnbk1lbWJlckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL2NsaWVudC9qcy9jb21wb25lbnRzL0hUTUxDYW1wYWlnbnNFbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvY29tcG9uZW50cy9IVE1MQ2xhbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC8uL2NsaWVudC9qcy9jb21wb25lbnRzL0hUTUxEaWFsb2dFeHRlbnRpb25FbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvY29tcG9uZW50cy9IVE1MTG9naW5FbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvY29tcG9uZW50cy9IVE1MTWVtYmVyRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvSFRNTFRlYW1FbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvY29tcG9uZW50cy9IVE1MVGVhbU1lbWJlclNlYXJjaEZpZWxkLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvY29tcG9uZW50cy9IVE1MVGVhbXNFbGVtZW50LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L2pzL2phdmFzY3JpcHQtZXh0ZW50aW9ucy9EYXRlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvamF2YXNjcmlwdC1leHRlbnRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvc2VydmljZXMvQ2FtcGFpZ25SZWdpc3RyYXRpb25TZXJ2aWNlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvc2VydmljZXMvQ2FtcGFpZ25TZXJ2aWNlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvc2VydmljZXMvTG9naW5TZXJ2aWNlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvanMvc2VydmljZXMvTWVtYmVyU2VydmljZS5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L2pzL3NlcnZpY2VzL1NlcnZpY2VVdGlscy5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L2pzL3NlcnZpY2VzL1RlYW1TZXJ2aWNlLmpzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvcGFnZXMvaW5kZXgvanMvRGF0ZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L3BhZ2VzL2luZGV4L2pzL0Zvcm1VdGlscy5qcyIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L3BhZ2VzL2luZGV4L2pzL01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvcGFnZXMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gXCIuL3NyYy9BcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgUm91dGUgZnJvbSBcIi4vc3JjL1JvdXRlXCI7XHJcbmltcG9ydCBSb3V0ZUxpbmsgZnJvbSBcIi4vc3JjL1JvdXRlTGlua1wiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9zcmMvVmlld1wiO1xyXG5cclxuZXhwb3J0IHtBcHBsaWNhdGlvbiwgUm91dGUsIFZpZXcsIFJvdXRlTGluayB9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGVmaW5lLCB0b05vZGVOYW1lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuaW1wb3J0IHsgZmluZENsb3Nlc3RJbkRlcHRoIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL05vZGVIZWxwZXJcIjtcbmltcG9ydCB7IGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlclwiO1xuaW1wb3J0IHsgcHJpdmF0ZVByb3BlcnR5QWNjZXNzb3IgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJpdmF0ZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBFVkVOVF9DTElDSyBhcyBST1VURV9DTElDSyB9IGZyb20gXCIuL1JvdXRlL0V2ZW50c1wiO1xuaW1wb3J0IHsgRVZFTlRfVE9fUk9VVEUgfSBmcm9tIFwiLi9Sb3V0ZUxpbmsvRXZlbnRzXCI7XG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcbmltcG9ydCBSb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuaW1wb3J0IFJvdXRlTGluayBmcm9tIFwiLi9Sb3V0ZUxpbmtcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcblxuY29uc3QgX3ZpZXcgPSBwcml2YXRlUHJvcGVydHlBY2Nlc3NvcihcInZpZXdcIik7XG5jb25zdCBfc3RvcmUgPSBwcml2YXRlUHJvcGVydHlBY2Nlc3NvcihcInN0b3JlXCIpO1xuXG5jb25zdCBOT0RFTkFNRSA9IHRvTm9kZU5hbWUoXCJhcHBsaWNhdGlvblwiKTtcbmV4cG9ydCBjb25zdCBFVkVOVF9TVE9SRV9DSEFOR0VEID0gXCJhcHAtc3RvcmUtY2hhbmdlZFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJfUk9VVEUgPSBcInJvdXRlXCI7XG5leHBvcnQgY29uc3QgQVRUUl9WSUVXID0gXCJ2aWV3XCI7XG5cbmNvbnN0IGZpbmRSb3V0ZSA9IChhcHAsIG5hbWUpID0+IHtcblx0Y29uc3Qgc2VsZWN0b3IgPSBgJHtSb3V0ZS5OT0RFTkFNRX1bbmFtZT1cIiR7bmFtZX1cIl1gO1xuXHRyZXR1cm4gYXBwLmZpbmQoc2VsZWN0b3IpLmZpcnN0KCk7XG59O1xuXG5jb25zdCBjbG9zZXN0VmlldyA9IChhcHAsIG5hbWUpID0+IHtcblx0cmV0dXJuIGZpbmRDbG9zZXN0SW5EZXB0aChhcHAucm9vdCwgKG5vZGUpID0+IHtcblx0XHRyZXR1cm4gbm9kZSBpbnN0YW5jZW9mIFZpZXcgJiYgKG5hbWUgPT0gbnVsbCB8fCBub2RlLm5hbWUgPT0gbmFtZSk7XG5cdH0pO1xufTtcblxuY29uc3QgZmluZFZpZXcgPSAoYXBwLCBuYW1lKSA9PiB7XG5cdGxldCB2aWV3ID0gbnVsbDtcblx0aWYgKG5hbWUpIHtcblx0XHRjb25zdCByZXN1bHQgPSBhcHAucm9vdC5maW5kKGBkLXZpZXdbbmFtZT1cIiR7bmFtZX1cIl1gKS5maXJzdCgpO1xuXHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA9PSAxKSB2aWV3ID0gcmVzdWx0LmZpcnN0KCk7XG5cdH1cblxuXHRpZiAoIXZpZXcpIHZpZXcgPSBjbG9zZXN0VmlldyhhcHAsIG5hbWUpO1xuXG5cdGlmICh2aWV3KSB2aWV3LmFwcCA9IGFwcDtcblxuXHRyZXR1cm4gdmlldztcbn07XG5cbmNvbnN0IGJ1aWxkUm91dGVDb250ZXh0ID0gYXN5bmMgKGNvbnRleHQsIGFwcCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGNvbnRleHQsIGFwcC5zdG9yZSwgbnVsbCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSX1JPVVRFLCBBVFRSX1ZJRVddO1xuXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBBVFRSSUJVVEVTO1xuXHR9XG5cblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUU7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihzZXR0aW5nKSB7XG5cdFx0c3VwZXIoc2V0dGluZyB8fCB7fSk7XG5cblx0XHR0aGlzLnJvb3Qub24oW1JPVVRFX0NMSUNLLCBFVkVOVF9UT19ST1VURV0sIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5yb3V0ZSh7IHJvdXRlOiBldmVudC50YXJnZXQgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZShBVFRSX1JPVVRFLCB0aGlzKSwgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfUk9VVEUpKSB0aGlzLnJvdXRlKHsgcm91dGU6IHRoaXMuYXR0cihBVFRSX1JPVVRFKSB9KTtcblx0XHR9KTtcdFx0XG5cdH1cblxuXHRhc3luYyBpbml0KCkge1xuXHRcdGF3YWl0IHN1cGVyLmluaXQoKTtcblx0XHR0aGlzLnJlYWR5LnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfUk9VVEUpKSB0aGlzLnJvdXRlKHsgcm91dGU6IHRoaXMuYXR0cihBVFRSX1JPVVRFKSB9KTtcblx0XHR9KTtcblx0fVxuXG5cdGFzeW5jIHJvdXRlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290LmZpbmQoUm91dGUuTk9ERU5BTUUpO1xuXHR9XG5cblx0YXN5bmMgcm91dGUoeyByb3V0ZSwgcmVmcmVzaCA9IG51bGwsIGNvbnRleHQgPSBudWxsLCB2aWV3ID0gbnVsbCB9KSB7XG5cdFx0YXdhaXQgdGhpcy5yZWFkeTtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHJldHVybiB0aGlzLnZpZXcucm91dGU7XG5cblx0XHRpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSByb3V0ZSA9IGZpbmRSb3V0ZSh0aGlzLCByb3V0ZSk7XG5cdFx0ZWxzZSBpZiAocm91dGUgaW5zdGFuY2VvZiBSb3V0ZUxpbmspIHtcblx0XHRcdHJlZnJlc2ggPSByZWZyZXNoICE9IG51bGwgPyByZWZyZXNoIDogcm91dGUucmVmcmVzaDtcblx0XHRcdGlmIChjb250ZXh0ID09IG51bGwpIGNvbnRleHQgPSBhd2FpdCBidWlsZFJvdXRlQ29udGV4dChyb3V0ZS5jb250ZXh0LCB0aGlzKTtcblx0XHRcdGlmICh2aWV3ID09IG51bGwpIHZpZXcgPSByb3V0ZS52aWV3O1xuXHRcdFx0cm91dGUgPSBmaW5kUm91dGUodGhpcywgcm91dGUudGFyZ2V0KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIShyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlKSkgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgcm91dGUgdHlwZSFcIik7XG5cblx0XHRpZiAocmVmcmVzaCA9PSBudWxsKSByZWZyZXNoID0gZmFsc2U7XG5cdFx0aWYgKHZpZXcgPT0gbnVsbCkgdmlldyA9IHJvdXRlLnZpZXc7XG5cblx0XHR2aWV3ID0gdmlldyA/IGZpbmRWaWV3KHRoaXMsIHZpZXcpIDogdGhpcy52aWV3O1xuXG5cdFx0aWYgKCFyZWZyZXNoICYmIHZpZXcucm91dGUgPT0gcm91dGUpIHJldHVybjtcblxuXHRcdGlmIChjb250ZXh0ID09IG51bGwpIGNvbnRleHQgPSBhd2FpdCBidWlsZFJvdXRlQ29udGV4dChyb3V0ZS5jb250ZXh0LCB0aGlzKTtcblxuXHRcdGlmICh2aWV3LnJvdXRlKSB2aWV3LnJvdXRlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdGF3YWl0IHZpZXcuZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCByZWZyZXNoIH0pO1xuXHRcdHJvdXRlLmFjdGl2ZSA9IHRydWU7XG5cdH1cblxuXHRnZXQgdmlldygpIHtcblx0XHRsZXQgdmlldyA9IF92aWV3KHRoaXMpO1xuXHRcdGlmICghdmlldykge1xuXHRcdFx0dmlldyA9IGZpbmRWaWV3KHRoaXMsIHRoaXMuYXR0cihBVFRSX1ZJRVcpKTtcblx0XHRcdF92aWV3KHRoaXMsIHZpZXcpO1xuXHRcdFx0dmlldy5hcHAgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHJldHVybiB2aWV3O1xuXHR9XG5cblx0Z2V0IHN0b3JlKCkge1xuXHRcdGxldCBzdG9yZSA9IF9zdG9yZSh0aGlzKTtcblx0XHRpZiAoIXN0b3JlKSB7XG5cdFx0XHRzdG9yZSA9IHt9O1xuXHRcdFx0X3N0b3JlKHRoaXMsIHN0b3JlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0b3JlO1xuXHR9XG59XG5cbmRlZmluZShBcHBsaWNhdGlvbik7XG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjtcbiIsImV4cG9ydCBjb25zdCBBVFRSX1RBUkdFVCA9IFwidGFyZ2V0XCI7XG5leHBvcnQgY29uc3QgQVRUUl9DT05URVhUID0gXCJjb250ZXh0XCI7XG5leHBvcnQgY29uc3QgQVRUUl9SRUZSRVNIID0gXCJyZWZyZXNoXCI7XG5leHBvcnQgY29uc3QgQVRUUl9WSUVXID0gXCJ2aWV3XCI7IiwiaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XHJcbmV4cG9ydCBjb25zdCBFVkVOVF9UT19ST1VURSA9IE5PREVOQU1FICsgXCItdG8tcm91dGVcIjsiLCJpbXBvcnQgeyB0b05vZGVOYW1lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xyXG5leHBvcnQgZGVmYXVsdCB0b05vZGVOYW1lKFwicm91dGUtbGlua1wiKTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db21wb25lbnRcIjtcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcbmltcG9ydCBOT0RFTkFNRSBmcm9tIFwiLi9Ob2RlbmFtZVwiO1xuaW1wb3J0IHsgRVZFTlRfVE9fUk9VVEUgfSBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCB7IEFUVFJfVEFSR0VULCBBVFRSX0NPTlRFWFQsIEFUVFJfUkVGUkVTSCwgQVRUUl9WSUVXIH0gZnJvbSBcIi4vQXR0cmlidXRlc1wiO1xuaW1wb3J0IHt9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9Ob2RlSGVscGVyXCI7XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbQVRUUl9UQVJHRVQsIEFUVFJfQ09OVEVYVF07XG5cbmNvbnN0IEVWRU5UUyA9IFtFVkVOVF9UT19ST1VURV07XG5cbmNsYXNzIFJvdXRlTGluayBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBBVFRSSUJVVEVTO1xuXHR9XG5cblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUU7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IEVWRU5UUygpIHtcblx0XHRyZXR1cm4gRVZFTlRTO1xuXHR9XG5cblx0Y29uc3RydWN0b3Ioc2V0dGluZykge1xuXHRcdHN1cGVyKHNldHRpbmcgfHwge30pO1xuXHRcdHRoaXMub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfVE9fUk9VVEUpO1xuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHt9XG5cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cihBVFRSX1ZJRVcpO1xuXHR9XG5cblx0Z2V0IHRhcmdldCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfVEFSR0VUKTtcblx0fVxuXG5cdGdldCBjb250ZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9DT05URVhUKTtcblx0fVxuXG5cdGdldCByZWZyZXNoKCkge1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSX1JFRlJFU0gpO1xuXHR9XG59XG5cbmRlZmluZShSb3V0ZUxpbmspO1xuZXhwb3J0IGRlZmF1bHQgUm91dGVMaW5rO1xuIiwiZXhwb3J0IGNvbnN0IEFUVFJfTkFNRSA9IFwibmFtZVwiO1xyXG5leHBvcnQgY29uc3QgQVRUUl9BQ1RJVkUgPSBcImFjdGl2ZVwiO1xyXG5leHBvcnQgY29uc3QgQVRUUl9TVEFURUZVTCA9IFwic3RhdGVmdWxcIjtcclxuZXhwb3J0IGNvbnN0IEFUVFJfQ09NUE9ORU5UX1RBRyA9IFwiY29tcG9uZW50LXRhZ1wiO1xyXG5leHBvcnQgY29uc3QgQVRUUl9DT01QT05FTlRfVEFHX0FUVFJJQlVURVMgPSBcImNvbXBvbmVudC10YWctYXR0cmlidXRlc1wiO1xyXG5leHBvcnQgY29uc3QgQVRUUl9DT05URVhUID0gXCJjb250ZXh0XCI7XHJcbmV4cG9ydCBjb25zdCBBVFRSX1JFRlJFU0ggPSBcInJlZnJlc2hcIjtcclxuZXhwb3J0IGNvbnN0IEFUVFJfVklFVyA9IFwidmlld1wiOyIsImltcG9ydCBOT0RFTkFNRSBmcm9tIFwiLi9Ob2RlbmFtZVwiO1xyXG5leHBvcnQgY29uc3QgRVZFTlRfSU5JVCA9IGAke05PREVOQU1FfS1pbml0YDtcclxuZXhwb3J0IGNvbnN0IEVWRU5UX0NMSUNLID0gYCR7Tk9ERU5BTUV9LWNsaWNrYDtcclxuZXhwb3J0IGNvbnN0IEVWRU5UX0FDVElWQVRFID0gYCR7Tk9ERU5BTUV9LWFjdGl2YXRlYDtcclxuZXhwb3J0IGNvbnN0IEVWRU5UX0RFQUNUSVZBVEUgPSBgJHtOT0RFTkFNRX0tZGVhY3RpdmF0ZWA7IiwiaW1wb3J0IHsgdG9Ob2RlTmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgdG9Ob2RlTmFtZShcInJvdXRlXCIpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuaW1wb3J0IFRlbXBsYXRlLCB7Tk9ERV9BVFRSSUJVVEVfVEVNUExBVEV9ICBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9UZW1wbGF0ZVwiO1xuaW1wb3J0IFJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyXCI7XG5pbXBvcnQgeyBwcml2YXRlUHJvcGVydHlBY2Nlc3NvciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcbmltcG9ydCBOT0RFTkFNRSBmcm9tIFwiLi9Ob2RlbmFtZVwiO1xuaW1wb3J0IHsgRVZFTlRfSU5JVCwgRVZFTlRfQ0xJQ0ssIEVWRU5UX0FDVElWQVRFLCBFVkVOVF9ERUFDVElWQVRFIH0gZnJvbSBcIi4vRXZlbnRzXCI7XG5pbXBvcnQgeyBBVFRSX05BTUUsIEFUVFJfQUNUSVZFLCBBVFRSX0NPTVBPTkVOVF9UQUcsIEFUVFJfQ09NUE9ORU5UX1RBR19BVFRSSUJVVEVTLCBBVFRSX1NUQVRFRlVMLCBBVFRSX0NPTlRFWFQsIEFUVFJfVklFVyB9IGZyb20gXCIuL0F0dHJpYnV0ZXNcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSX05BTUUsIE5PREVfQVRUUklCVVRFX1RFTVBMQVRFLCBBVFRSX0NPTVBPTkVOVF9UQUcsIEFUVFJfQ09NUE9ORU5UX1RBR19BVFRSSUJVVEVTLCBBVFRSX1NUQVRFRlVMLCBBVFRSX1ZJRVddO1xuY29uc3QgRVZFTlRTID0gW0VWRU5UX0NMSUNLLCBFVkVOVF9BQ1RJVkFURSwgRVZFTlRfREVBQ1RJVkFURV07XG5jb25zdCBnZXRUYWdBdHRyaWJ1dGVzID0gYXN5bmMgKHJvdXRlKSA9PiB7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSByb3V0ZS5hdHRyKEFUVFJfQ09NUE9ORU5UX1RBR19BVFRSSUJVVEVTKSB8fCBcInt9XCI7XG5cdHJldHVybiBSZXNvbHZlci5yZXNvbHZlKGF0dHJpYnV0ZXMsIHt9LCB7fSk7XG59O1xuXG5jb25zdCBfdGVtcGxhdGUgPSBwcml2YXRlUHJvcGVydHlBY2Nlc3NvcihOT0RFX0FUVFJJQlVURV9URU1QTEFURSk7XG5cbmNvbnN0IGJ1aWxkQ29tcG9uZW50ID0gYXN5bmMgKHJvdXRlKSA9PiB7XG5cdGlmIChyb3V0ZS5oYXNBdHRyaWJ1dGUoTk9ERV9BVFRSSUJVVEVfVEVNUExBVEUpKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gX3RlbXBsYXRlKHJvdXRlKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0XHR0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWROb2RlVGVtcGxhdGUocm91dGUsIG51bGwsIGZhbHNlKTtcblx0XHRcdF90ZW1wbGF0ZShyb3V0ZSwgdGVtcGxhdGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGFnID0gcm91dGUuYXR0cihBVFRSX0NPTVBPTkVOVF9UQUcpO1xuXHRcdGNvbnN0IGNsYXp6ID0gY3VzdG9tRWxlbWVudHMuZ2V0KHRhZyk7XG5cdFx0Y29uc3QgYXR0cmlidXRlcyA9IGF3YWl0IGdldFRhZ0F0dHJpYnV0ZXMocm91dGUpO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IG5ldyBjbGF6eigpO1xuXHRcdGZvciAobGV0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQuYXR0cihhdHRyaWJ1dGUsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxufTtcblxuY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FO1xuXHR9XG5cblx0c3RhdGljIGdldCBFVkVOVFMoKSB7XG5cdFx0cmV0dXJuIEVWRU5UUztcblx0fVxuXG5cdCNpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHNldHRpbmcpIHtcblx0XHRzdXBlcihzZXR0aW5nIHx8IHt9KTtcblx0XHR0aGlzLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMuYWN0aXZlKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfQ0xJQ0spO1xuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHtcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XG5cdFx0aWYoIXRoaXMuI2luaXRpYWxpemVkKXtcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9JTklUKTtcblx0XHRcdGlmKHRoaXMuYWN0aXZlKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfQ0xJQ0spO1xuXHRcdH1cblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9OQU1FKTtcblx0fVxuXG5cdGdldCB2aWV3KCl7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cihBVFRSX1ZJRVcpO1xuXHR9XG5cblx0Z2V0IGFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUl9BQ1RJVkUpO1xuXHR9XG5cblx0c2V0IGFjdGl2ZShhY3RpdmUpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmU7XG5cdFx0aWYgKGFjdGl2ZSAhPSBjdXJyZW50KSB7XG5cdFx0XHR0aGlzLmF0dHIoQVRUUl9BQ1RJVkUsIGFjdGl2ZSA/IFwiXCIgOiBudWxsKTtcblx0XHRcdGlmIChhY3RpdmUpXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9BQ1RJVkFURSk7XG5cdFx0XHRlbHNlIFxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfREVBQ1RJVkFURSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRnZXQgc3RhdGVmdWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJfU1RBVEVGVUwpO1xuXHR9XG5cblx0Z2V0IGNvbnRleHQoKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfQ09OVEVYVCk7XG5cdH1cdFxuXHRcblx0Z2V0IHJlZnJlc2goKXtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUl9SRUZSRVNIKTtcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudCgpIHtcdFx0XG5cdFx0cmV0dXJuIGJ1aWxkQ29tcG9uZW50KHRoaXMpO1xuXHR9XG59XG5cbmRlZmluZShSb3V0ZSk7XG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcbiIsImltcG9ydCB7IHRvTm9kZU5hbWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHRvTm9kZU5hbWUoXCJ2aWV3XCIpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL3V0aWxzL0RlZmluZUNvbXBvbmVudEhlbHBlclwiO1xuaW1wb3J0IE5PREVOQU1FIGZyb20gXCIuL05vZGVuYW1lXCI7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XG5pbXBvcnQgeyBwcml2YXRlUHJvcGVydHlBY2Nlc3NvciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcbmltcG9ydCBXZWFrRGF0YSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvV2Vha0RhdGFcIjtcbmltcG9ydCB7IEFUVFJfVklFVyB9IGZyb20gXCIuLi9BcHBsaWNhdGlvblwiO1xuXG5jb25zdCBfYXBwID0gcHJpdmF0ZVByb3BlcnR5QWNjZXNzb3IoXCJhcHBcIik7XG5jb25zdCBfcm91dGUgPSBwcml2YXRlUHJvcGVydHlBY2Nlc3NvcihcInJvdXRlXCIpO1xuXG5jb25zdCBST1VURURBVEEgPSBuZXcgV2Vha0RhdGEoKTtcblxuY29uc3QgQVRUUl9OQU1FID0gXCJuYW1lXCI7XG5jb25zdCBBVFRSSUJVVEVTID0gW0FUVFJfTkFNRV07XG5jbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FO1xuXHR9XG5cblx0Y29uc3RydWN0b3Ioc2V0dGluZykge1xuXHRcdHN1cGVyKHNldHRpbmcgfHwge30pO1xuXHR9XG5cblx0Z2V0IG5hbWUoKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfTkFNRSk7XG5cdH1cblxuXHRnZXQgYXBwKCkge1xuXHRcdHJldHVybiBfYXBwKHRoaXMpO1xuXHR9XG5cblx0c2V0IGFwcChhcHApIHtcblx0XHRfYXBwKHRoaXMsIGFwcCk7XG5cdH1cblxuXHRnZXQgcm91dGUoKXtcblx0XHRyZXR1cm4gX3JvdXRlKHRoaXMpO1xuXHR9XG5cblx0YXN5bmMgZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCB2aWV3LCByZWZyZXNoID0gZmFsc2UgfSkge1xuXHRcdGlmICh2aWV3KSB0aHJvdyBuZXcgRXJyb3IoXCJ5b3UgbXVzdCBvdmVycmlkZSB0aGUgZGlzcGxheSBmdW5jdGlvbiFcIik7XG5cblx0XHRfcm91dGUodGhpcywgcm91dGUpO1xuXHRcdGNvbnN0IHsgcm9vdCwgYXBwIH0gPSB0aGlzO1xuXHRcdHJvb3QuZW1wdHkoKTtcblxuXHRcdGxldCBjb21wb25lbnQgPSByb3V0ZS5zdGF0ZWZ1bCA/IFJPVVRFREFUQS52YWx1ZShyb3V0ZSwgXCJjb21wb25lbnRcIikgOiBudWxsO1xuXHRcdGlmIChyZWZyZXNoIHx8ICFjb21wb25lbnQpIHtcblx0XHRcdGNvbXBvbmVudCA9IGF3YWl0IHJvdXRlLmNvbXBvbmVudCgpO1xuXHRcdFx0aWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIFRlbXBsYXRlKSB7XG5cdFx0XHRcdGF3YWl0IFJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRcdFx0Y29udGFpbmVyOiByb290LFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdCR2aWV3OiB0aGlzLFxuXHRcdFx0XHRcdFx0JGFwcDogYXBwLFxuXHRcdFx0XHRcdFx0JHN0b3JlOiBhcHAuc3RvcmUsXG5cdFx0XHRcdFx0XHQkcm91dGU6IHJvdXRlLFxuXHRcdFx0XHRcdFx0JGNvbnRleHQ6IGNvbnRleHQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0ZW1wbGF0ZTogY29tcG9uZW50LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29tcG9uZW50ID0gTm9kZUxpc3QuZnJvbShyb290LmNoaWxkTm9kZXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIFZpZXcpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuYXBwID0gYXBwO1xuXHRcdFx0XHRcdGNvbXBvbmVudC5yZWFkeS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdGNvbXBvbmVudC5kaXNwbGF5KHsgcm91dGUsIGNvbnRleHQsIHZpZXc6IHRoaXMgfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cm9vdC5hcHBlbmQoY29tcG9uZW50KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJvdXRlLnN0YXRlZnVsKSBST1VURURBVEEudmFsdWUocm91dGUsIFwiY29tcG9uZW50XCIsIGNvbXBvbmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBWaWV3KSB7XG5cdFx0XHRcdGNvbXBvbmVudC5hcHAgPSBhcHA7XG5cdFx0XHRcdGNvbXBvbmVudC5yZWFkeS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjb21wb25lbnQuZGlzcGxheSh7IHJvdXRlLCBjb250ZXh0LCB2aWV3OiB0aGlzIH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJvb3QuYXBwZW5kKGNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG59XG5kZWZpbmUoVmlldyk7XG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiY29uc3QgR0xPQkFMID0gKCgpID0+IHtcclxuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHRcclxuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0cmV0dXJuIHt9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0xPQkFMOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcclxuXHRjb25zdHJ1Y3RvcihrZXksIGNvbnRleHQpe1xyXG5cdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG5cdH1cclxuXHRcclxuXHRnZXQga2V5RGVmaW5lZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5IGluIHRoaXMuY29udGV4dDsgXHJcblx0fVxyXG5cdFxyXG5cdGdldCBoYXNWYWx1ZSgpe1xyXG5cdFx0cmV0dXJuICEhdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0Z2V0IHZhbHVlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0c2V0IHZhbHVlKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZXh0W3RoaXMua2V5XSA9IGRhdGE7XHJcblx0fVxyXG5cdFxyXG5cdHNldCBhcHBlbmQoZGF0YSkge1xyXG5cdFx0aWYoIXRoaXMuaGFzVmFsdWUpXHJcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHR2YWx1ZS5wdXNoKGRhdGEpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmVtb3ZlKCl7XHJcblx0XHRkZWxldGUgdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGxvYWQoZGF0YSwga2V5LCBjcmVhdGU9dHJ1ZSkge1xyXG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xyXG5cdFx0Y29uc3Qga2V5cyA9IGtleS5zcGxpdChcIlxcLlwiKTtcclxuXHRcdGxldCBuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcclxuXHRcdHdoaWxlKGtleXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGlmKCFjb250ZXh0W25hbWVdKXtcclxuXHRcdFx0XHRpZighY3JlYXRlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29udGV4dFtuYW1lXSA9IHt9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGNvbnRleHQgPSBjb250ZXh0W25hbWVdO1xyXG5cdFx0XHRuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcclxuXHR9XHJcbn07IiwiaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCIuL09iamVjdFByb3BlcnR5LmpzXCI7XHJcbi8qKlxyXG4gKiBhcHBlbmQgYSBwcm9wZXJ5IHZhbHVlIHRvIGFuIG9iamVjdC4gSWYgcHJvcGVyeSBleGlzdHMgaXRzIHdvdWxkIGJlIGNvbnZlcnRlZCB0byBhbiBhcnJheVxyXG4gKlxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICpcclxuICogIEByZXR1cm4gcmV0dXJucyB0aGUgY2hhbmdlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAoYUtleSwgYURhdGEsIGFPYmplY3QpIHtcclxuXHRpZiAodHlwZW9mIGFEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQoYU9iamVjdCwgYUtleSwgdHJ1ZSk7XHJcblx0XHRwcm9wZXJ0eS5hcHBlbmQgPSBhRGF0YTtcclxuXHR9XHJcblx0cmV0dXJuIGFPYmplY3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogY2hlY2tlZCBpZiBhbiBvYmplY3QgYSBzaW1wbGUgb2JqZWN0LiBObyBBcnJheSwgTWFwIG9yIHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqXHJcbiAqIEByZXR1cm4gYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzUG9qbyA9IGZ1bmN0aW9uIChhT2JqZWN0KSB7XHJcblx0cmV0dXJuIHR5cGVvZiBhT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIGFPYmplY3QgIT0gbnVsbCAmJiBhT2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCI7XHJcbn07XHJcblxyXG4vKipcclxuICogbWVyZ2luZyBvYmplY3QgaW50byBhIHRhcmdldCBvYmplY3QuIEl0cyBvbmx5IG1lcmdlIHNpbXBsZSBvYmplY3QgYW5kIHN1YiBvYmplY3RzLiBFdmVyeSBvdGhlclxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBzYW1wbGU6IG1lcmdlKHRhcmdldCwgc291cmNlLTEsIHNvdXJjZS0yLCAuLi5zb3VyY2UtbilcclxuICpcclxuICogQHBhcmFtIHRhcmdldDpvYmplY3QgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2luZyBpbnRvXHJcbiAqIEBwYXJhbSBzb3VyY2VzOm9iamVjdFxyXG4gKlxyXG4gKiBAcmV0dXJuIG9iamVjdCByZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XHJcblx0aWYoIXRhcmdldClcclxuXHRcdHRhcmdldCA9IHt9O1xyXG5cclxuXHRmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG5cdFx0aWYgKGlzUG9qbyhzb3VyY2UpKSB7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdFx0aWYgKGlzUG9qbyh0YXJnZXRba2V5XSkpIG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XHJcblx0XHRcdFx0ZWxzZSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb25zdCBidWlsZFByb3BlcnR5RmlsdGVyID0gZnVuY3Rpb24gKHsgbmFtZXMsIGFsbG93ZWQgfSkge1xyXG5cdHJldHVybiAobmFtZSwgdmFsdWUsIGNvbnRleHQpID0+IHtcclxuXHRcdHJldHVybiBuYW1lcy5pbmNsdWRlcyhuYW1lKSA9PT0gYWxsb3dlZDtcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBbZGF0YSwgcHJvcEZpbHRlciwgeyBkZWVwID0gZmFsc2UsIHJlY3Vyc2l2ZSA9IHRydWUsIHBhcmVudHMgPSBbXSB9ID0ge31dID0gYXJndW1lbnRzO1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cclxuXHRmb3IgKGxldCBuYW1lIGluIGRhdGEpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gZGF0YVtuYW1lXTtcclxuXHRcdGNvbnN0IGFjY2VwdCA9IHByb3BGaWx0ZXIobmFtZSwgdmFsdWUsIGRhdGEpO1xyXG5cdFx0aWYgKGFjY2VwdCAmJiAoIWRlZXAgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkpIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0ZWxzZSBpZiAoYWNjZXB0ICYmIGRlZXApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuXHRcdFx0aWYgKHR5cGUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcCB8fCB2YWx1ZSBpbnN0YW5jZW9mIFNldCB8fCB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCB8fCBwYXJlbnRzLmluY2x1ZGVzW3ZhbHVlXSB8fCB2YWx1ZSA9PSBkYXRhKSByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0ZWxzZSByZXN1bHRbbmFtZV0gPSBmaWx0ZXIodmFsdWUsIHByb3BGaWx0ZXIsIHsgZGVlcCwgcmVjdXJzaXZlLCBwYXJlbnRzOiBwYXJlbnRzLmNvbmNhdChkYXRhKSB9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmVmFsdWUgPSAobywgbmFtZSwgdmFsdWUpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0dmFsdWUsXHJcblx0XHR3cml0YWJsZTogZmFsc2UsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXHJcblx0fSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBkZWZHZXQgPSAobywgbmFtZSwgZ2V0KSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdGdldCxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZHZXRTZXQgPSAobywgbmFtZSwgZ2V0LCBzZXQpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2V0LFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzUG9qbyxcclxuXHRhcHBlbmQsXHJcblx0bWVyZ2UsXHJcblx0ZmlsdGVyLFxyXG5cdGJ1aWxkUHJvcGVydHlGaWx0ZXIsXHJcblx0ZGVmVmFsdWUsXHJcblx0ZGVmR2V0LFxyXG5cdGRlZkdldFNldCxcclxufTtcclxuIiwiY29uc3QgUFJJVkFURV9QUk9QRVJUSUVTID0gbmV3IFdlYWtNYXAoKTtcclxuZXhwb3J0IGNvbnN0IHByaXZhdGVTdG9yZSA9IChvYmopID0+IHtcclxuXHRpZihQUklWQVRFX1BST1BFUlRJRVMuaGFzKG9iaikpXHJcblx0XHRyZXR1cm4gUFJJVkFURV9QUk9QRVJUSUVTLmdldChvYmopO1xyXG5cdFxyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRQUklWQVRFX1BST1BFUlRJRVMuc2V0KG9iaiwgZGF0YSk7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpdmF0ZVByb3BlcnR5ID0gZnVuY3Rpb24ob2JqLCBuYW1lLCB2YWx1ZSkge1xyXG5cdGNvbnN0IGRhdGEgPSBwcml2YXRlU3RvcmUob2JqKTtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAyKVxyXG5cdFx0cmV0dXJuIGRhdGFbbmFtZV07XHJcblx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAzKVxyXG5cdFx0ZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cdGVsc2VcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBhbGxvd2VkIHNpemUgb2YgYXJndW1lbnRzIVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcml2YXRlUHJvcGVydHlBY2Nlc3NvciA9ICh2YXJuYW1lKSA9PiB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGYsIHZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMilcclxuXHRcdFx0cHJpdmF0ZVByb3BlcnR5KHNlbGYsIHZhcm5hbWUsIHZhbHVlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHByaXZhdGVQcm9wZXJ0eShzZWxmLCB2YXJuYW1lKTtcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge3ByaXZhdGVQcm9wZXJ0eSwgcHJpdmF0ZVByb3BlcnR5QWNjZXNzb3IsIHByaXZhdGVTdG9yZX07IiwiaW1wb3J0IHtkZWZWYWx1ZSwgZGVmR2V0fSBmcm9tIFwiLi9PYmplY3RVdGlsc1wiXHJcblxyXG5leHBvcnQgY29uc3QgdGltZW91dFByb21pc2UgPSAoZm4sIG1zKSA9PntcclxuXHRsZXQgY2FuY2VsZWQgPSBmYWxzZTtcclxuXHRsZXQgdGltZW91dCA9IG51bGw7XHJcblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+IHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGZuKHIsZSk7XHJcblx0XHR9LCBtcylcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdGhlbiA9IHByb21pc2UudGhlbjtcclxuXHRwcm9taXNlLnRoZW4gPSAoZm4pID0+IHtcclxuXHRcdHRoZW4uY2FsbChwcm9taXNlLCAocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmKCF0aGlzLmNhbmNlbGVkKVxyXG5cdFx0XHRcdHJldHVybiBmbihyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZWYWx1ZShwcm9taXNlLCBcImNhbmNlbFwiLCAoKSA9PiB7XHJcblx0XHRpZih0aW1lb3V0KXtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRjYW5jZWxlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0ZGVmR2V0KHByb21pc2UsIGNhbmNlbGQsICgpID0+IGNhbmNlbGVkKTtcclxuXHJcblx0cmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbGF6eVByb21pc2UgPSAoKSA9PiB7XHJcblx0XHRsZXQgcHJvbWlzZVJlc29sdmUgPSBudWxsO1xyXG5cdFx0bGV0IHByb21pc2VFcnJvciA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XHJcblx0XHRcdHByb21pc2VSZXNvbHZlID0gcjtcclxuXHRcdFx0cHJvbWlzZUVycm9yID0gZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IGVycm9yID0gZmFsc2U7XHJcblx0XHRsZXQgdmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZGVmVmFsdWUocHJvbWlzZSwgXCJyZXNvbHZlXCIsIChyZXN1bHQpID0+IHtcclxuXHRcdFx0dmFsdWUgPSByZXN1bHQ7XHJcblx0XHRcdHJlc29sdmVkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuXHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0cHJvbWlzZUVycm9yKHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRlZkdldChwcm9taXNlLCBcInZhbHVlXCIsICgpID0+IHZhbHVlKTtcclxuXHRcdGRlZkdldChwcm9taXNlLCBcImVycm9yXCIsICgpID0+IGVycm9yKTtcclxuXHRcdGRlZkdldChwcm9taXNlLCBcInJlc29sdmVkXCIsICgpID0+IHJlc29sdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGxhenlQcm9taXNlLFxyXG5cdHRpbWVvdXRQcm9taXNlXHJcbn1cclxuIiwiLy90aGUgc29sdXRpb24gaXMgZm91bmQgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWRcclxuZXhwb3J0IGNvbnN0IFVVSURfU0NIRU1BID0gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1dWlkID0gKCkgPT4ge1xyXG5cdGNvbnN0IGJ1ZiA9IG5ldyBVaW50MzJBcnJheSg0KTtcclxuXHR3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWYpO1xyXG5cdGxldCBpZHggPSAtMTtcclxuXHRyZXR1cm4gVVVJRF9TQ0hFTUEucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG5cdFx0aWR4Kys7XHJcblx0XHRjb25zdCByID0gKGJ1ZltpZHggPj4gM10gPj4gKChpZHggJSA4KSAqIDQpKSAmIDE1O1xyXG5cdFx0Y29uc3QgdiA9IGMgPT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG5cdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB1dWlkIH07XHJcbiIsImV4cG9ydCBjb25zdCBub1ZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdHJldHVybiB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBlbXRweU9yTm9WYWx1ZVN0cmluZyA9ICh2YWx1ZSkgPT4ge1x0XG5cdHJldHVybiBub1ZhbHVlKHZhbHVlKSB8fCB2YWx1ZS50cmltKCkubGVuZ3RoID09IDA7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bm9WYWx1ZSxcblx0ZW10cHlPck5vVmFsdWVTdHJpbmdcbn07IiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmhhc2hjb2RlKVxyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcclxuXHRcdGxldCBoYXNoID0gMDtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTsiLCJpbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL3NyYy9Db250ZXh0XCI7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb25SZXNvbHZlciwgQ29udGV4dCB9O1xuIiwiY29uc3Qgc2Vla0F0Q2hhaW4gPSAocmVzb2x2ZXIsIHByb3BlcnR5KSA9PiB7XG5cdHdoaWxlKHJlc29sdmVyKXtcblx0XHRjb25zdCBkZWYgPSByZXNvbHZlci5wcm94eS5oYW5kbGUuZ2V0UHJvcGVydHlEZWYocHJvcGVydHksIGZhbHNlKTtcblx0XHRpZihkZWYpXG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdFxuXHRcdHJlc29sdmVyID0gcmVzb2x2ZXIucGFyZW50O1xuXHR9XHRcblx0cmV0dXJuIHsgZGF0YTogbnVsbCwgcmVzb2x2ZXI6IG51bGwsIGRlZmluZWQ6IGZhbHNlIH07XG59XG5cbmNsYXNzIEhhbmRsZSB7XG5cdGNvbnN0cnVjdG9yKGRhdGEsIHJlc29sdmVyKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0fVxuXHRcblx0dXBkYXRlRGF0YShkYXRhKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdH1cblx0XG5cdHJlc2V0Q2FjaGUoKXtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0Z2V0UHJvcGVydHlEZWYocHJvcGVydHksIHNlZWsgPSB0cnVlKSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKHByb3BlcnR5KSlcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlLmdldChwcm9wZXJ0eSk7XG5cdFx0XG5cdFx0bGV0IGRlZiA9IG51bGxcblx0XHRpZiAodGhpcy5kYXRhICYmIHByb3BlcnR5IGluIHRoaXMuZGF0YSlcblx0XHRcdGRlZiA9IHsgZGF0YTogdGhpcy5kYXRhLCByZXNvbHZlcjogdGhpcy5yZXNvbHZlciwgZGVmaW5lZDogdHJ1ZSB9O1xuXHRcdGVsc2UgaWYoc2Vlaylcblx0XHRcdGRlZiA9IHNlZWtBdENoYWluKHRoaXMucmVzb2x2ZXIucGFyZW50LCBwcm9wZXJ0eSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0aWYoZGVmLmRlZmluZWQpXG5cdFx0XHR0aGlzLmNhY2hlLnNldChwcm9wZXJ0eSwgZGVmKTtcblx0XHRyZXR1cm4gZGVmO1xuXHR9XG5cblx0aGFzUHJvcGVydHkocHJvcGVydHkpIHtcblx0XHQvL0BUT0RPIHdyaXRlIHRlc3RzISEhXG5cdFx0Y29uc3QgeyBkZWZpbmVkIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRyZXR1cm4gZGVmaW5lZDtcblx0fVxuXHRnZXRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd3JpdGUgdGVzdHMhISFcdFxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSk7XG5cdFx0cmV0dXJuIGRhdGEgPyBkYXRhW3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcblx0fVxuXHRzZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHQvL0BUT0RPIHdvdWxkIHN1cHBvcnQgdGhpcyBhY3Rpb24gb24gYW4gcHJveGllZCByZXNvbHZlciBjb250ZXh0Pz8/IHdyaXRlIHRlc3RzISEhXG5cdFx0Y29uc3QgeyBkYXRhLCBkZWZpbmVkIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRpZiAoZGVmaW5lZClcblx0XHRcdGRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhKVxuXHRcdFx0XHR0aGlzLmRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5kYXRhID0ge31cblx0XHRcdFx0dGhpcy5kYXRhW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYWNoZS5zZXQocHJvcGVydHksIHsgZGF0YTogdGhpcy5kYXRhLCByZXNvbHZlcjogdGhpcy5yZXNvbHZlciwgZGVmaW5lZDogdHJ1ZSB9KTtcblx0XHR9XG5cdH1cblx0ZGVsZXRlUHJvcGVydHkocHJvcGVydHkpIHtcblx0XHQvL0BUT0RPIHdvdWxkIHN1cHBvcnQgdGhpcyBhY3Rpb24gb24gYW4gcHJveGllZCByZXNvbHZlciBjb250ZXh0Pz8/IHdyaXRlIHRlc3RzISEhXHRcdFxuXHRcdHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIGZ1bmN0aW9uIVwiKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCByZXNvbHZlcikge1xuXHRcdHRoaXMuaGFuZGxlID0gbmV3IEhhbmRsZShjb250ZXh0LCByZXNvbHZlcik7XHRcdFxuXHRcdHRoaXMuZGF0YSA9IG5ldyBQcm94eSh0aGlzLmhhbmRsZSwge1xuXHRcdFx0aGFzOiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5oYXNQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5nZXRQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcblx0XHRcdH0sXG5cdFx0XHRkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24oZGF0YSwgcHJvcGVydHkpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuZGVsZXRlUHJvcGVydHkocHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0Ly9AVE9ETyBuZWVkIHRvIHN1cHBvcnQgdGhlIG90aGVyIHByb3h5IGFjdGlvbnNcdFx0XG5cdFx0fSk7O1xuXHR9XG5cdFxuXHR1cGRhdGVEYXRhKGRhdGEpe1xuXHRcdHRoaXMuaGFuZGxlLnVwZGF0ZURhdGEoZGF0YSlcdFx0XG5cdH1cblx0XG5cdHJlc2V0Q2FjaGUoKXtcblx0XHR0aGlzLmhhbmRsZS5yZXNldENhY2hlKCk7XG5cdH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFZhbHVlIHtcblx0Y29uc3RydWN0b3IodmFsdWUpe1xuXHRcdHRoaXMuaGFzVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDE7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XHRcbn07IiwiaW1wb3J0IEdMT0JBTCBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvR2xvYmFsLmpzXCJcclxuaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RQcm9wZXJ0eS5qc1wiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzXCJcclxuaW1wb3J0IERlZmF1bHRWYWx1ZSBmcm9tIFwiLi9EZWZhdWx0VmFsdWUuanNcIjtcclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vQ29udGV4dC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IEVYRUNVVElPTl9XQVJOX1RJTUVPVVQgPSAxMDAwO1xyXG5jb25zdCBFWFBSRVNTSU9OID0gLyhcXFxcPykoXFwkXFx7KChbYS16QS1aMC05XFwtX1xcc10rKTo6KT8oW15cXHtcXH1dKylcXH0pLztcclxuY29uc3QgTUFUQ0hfRVNDQVBFRCA9IDE7XHJcbmNvbnN0IE1BVENIX0ZVTExfRVhQUkVTU0lPTiA9IDI7XHJcbmNvbnN0IE1BVENIX0VYUFJFU1NJT05fU0NPUEUgPSA0O1xyXG5jb25zdCBNQVRDSF9FWFBSRVNTSU9OX1NUQVRFTUVOVCA9IDU7XHJcblxyXG5jb25zdCBERUZBVUxUX05PVF9ERUZJTkVEID0gbmV3IERlZmF1bHRWYWx1ZSgpO1xyXG5jb25zdCB0b0RlZmF1bHRWYWx1ZSA9IHZhbHVlID0+IHtcclxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUpXHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblxyXG5cdHJldHVybiBuZXcgRGVmYXVsdFZhbHVlKHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWN1dGUgPSBhc3luYyBmdW5jdGlvbihhU3RhdGVtZW50LCBhQ29udGV4dCkge1xyXG5cdGlmICh0eXBlb2YgYVN0YXRlbWVudCAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBhU3RhdGVtZW50O1xyXG5cdFx0XHJcblx0Y29uc3QgZXhwcmVzc2lvbiA9IG5ldyBGdW5jdGlvbihcImNvbnRleHRcIiwgXHJcbmBcclxucmV0dXJuIChhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cdHRyeXsgXHJcblx0XHR3aXRoKGNvbnRleHQpe1xyXG5cdFx0XHQgcmV0dXJuICR7YVN0YXRlbWVudH1cclxuXHRcdH1cclxuXHR9Y2F0Y2goZSl7XHJcblx0XHR0aHJvdyBlO1xyXG5cdH1cclxufSkoY29udGV4dClgXHJcblx0KTtcclxuXHRcclxuXHRsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRjb25zb2xlLndhcm4oXCJsb25nIHJ1bm5pbmcgc3RhdGVtZW50OlwiLCBhU3RhdGVtZW50LCBuZXcgRXJyb3IoKSk7XHJcblx0fSwgRVhFQ1VUSU9OX1dBUk5fVElNRU9VVClcclxuXHRsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xyXG5cdHRyeXtcclxuXHRcdHJlc3VsdCA9IGF3YWl0IGV4cHJlc3Npb24oYUNvbnRleHQpO1xyXG5cdH1jYXRjaChlKXt9XHJcblx0XHJcblx0aWYodGltZW91dClcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCByZXNvbHZlID0gYXN5bmMgZnVuY3Rpb24oYVJlc29sdmVyLCBhRXhwcmVzc2lvbiwgYUZpbHRlciwgYURlZmF1bHQpIHtcclxuXHRpZiAoYUZpbHRlciAmJiBhUmVzb2x2ZXIubmFtZSAhPSBhRmlsdGVyKVxyXG5cdFx0cmV0dXJuIGFSZXNvbHZlci5wYXJlbnQgPyByZXNvbHZlKGFSZXNvbHZlci5wYXJlbnQsIGFFeHByZXNzaW9uLCBhRmlsdGVyLCBhRGVmYXVsdCkgOiBudWxsO1xyXG5cdFxyXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGUoYUV4cHJlc3Npb24sIGFSZXNvbHZlci5wcm94eS5kYXRhKTtcclxuXHRpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHRlbHNlIGlmIChhRGVmYXVsdCBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSAmJiBhRGVmYXVsdC5oYXNWYWx1ZSlcclxuXHRcdHJldHVybiBhRGVmYXVsdC52YWx1ZTtcclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmVNYXRjaCA9IGFzeW5jIChyZXNvbHZlciwgbWF0Y2gsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG5cdGlmKG1hdGNoW01BVENIX0VTQ0FQRURdKVxyXG5cdFx0cmV0dXJuIG1hdGNoW01BVENIX0ZVTExfRVhQUkVTU0lPTl07IFxyXG5cdFx0XHJcblx0cmV0dXJuIHJlc29sdmUocmVzb2x2ZXIsIG1hdGNoW01BVENIX0VYUFJFU1NJT05fU1RBVEVNRU5UXSwgbm9ybWFsaXplKG1hdGNoW01BVENIX0VYUFJFU1NJT05fU0NPUEVdKSwgZGVmYXVsdFZhbHVlKTtcclxufVxyXG5cclxuY29uc3Qgbm9ybWFsaXplID0gdmFsdWUgPT4ge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcblx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID09IDAgPyBudWxsIDogdmFsdWU7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvblJlc29sdmVyIHtcclxuXHRjb25zdHJ1Y3Rvcih7IGNvbnRleHQgPSBHTE9CQUwsIHBhcmVudCA9IG51bGwsIG5hbWUgPSBudWxsIH0pIHtcclxuXHRcdHRoaXMucGFyZW50ID0gKHBhcmVudCBpbnN0YW5jZW9mIEV4cHJlc3Npb25SZXNvbHZlcikgPyBwYXJlbnQgOiBudWxsO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcblx0XHR0aGlzLnByb3h5ID0gbmV3IENvbnRleHQodGhpcy5jb250ZXh0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdGdldCBjaGFpbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmNoYWluICsgXCIvXCIgKyB0aGlzLm5hbWUgOiBcIi9cIiArIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RpdmVDaGFpbigpIHtcclxuXHRcdGlmICghdGhpcy5jb250ZXh0KVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5lZmZlY3RpdmVDaGFpbiA6IFwiXCI7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5lZmZlY3RpdmVDaGFpbiArIFwiL1wiICsgdGhpcy5uYW1lIDogXCIvXCIgKyB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgY29udGV4dENoYWluKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRsZXQgcmVzb2x2ZXIgPSB0aGlzO1xyXG5cdFx0d2hpbGUgKHJlc29sdmVyKSB7XHJcblx0XHRcdGlmIChyZXNvbHZlci5jb250ZXh0KVxyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKHJlc29sdmVyLmNvbnRleHQpO1xyXG5cclxuXHRcdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoa2V5LCBmaWx0ZXIpIHtcclxuXHRcdGlmICgha2V5KVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnQuZ2V0RGF0YShrZXksIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQodGhpcy5jb250ZXh0LCBrZXksIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudmFsdWUgOiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlRGF0YShrZXksIHZhbHVlLCBmaWx0ZXIpIHtcclxuXHRcdGlmICgha2V5KVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnQudXBkYXRlRGF0YShrZXksIHZhbHVlLCBmaWx0ZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYodGhpcy5jb250ZXh0ID09IG51bGwgfHwgdHlwZW9mIHRoaXMuY29udGV4dCA9PT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0ge307XHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnByb3h5LnVwZGF0ZURhdGEodGhpcy5jb250ZXh0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQodGhpcy5jb250ZXh0LCBrZXkpO1xyXG5cdFx0XHRwcm9wZXJ0eS52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLnByb3h5LnJlc2V0Q2FjaGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lcmdlQ29udGV4dChjb250ZXh0LCBmaWx0ZXIpIHtcclxuXHRcdGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9IHRoaXMubmFtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJlbnQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnQubWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNvbnRleHQgPyBPYmplY3RVdGlscy5tZXJnZSh0aGlzLmNvbnRleHQsIGNvbnRleHQpIDogY29udGV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlc29sdmUoYUV4cHJlc3Npb24sIGFEZWZhdWx0KSB7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID09IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWMoYUV4cHJlc3Npb24pO1xyXG5cdFx0XHRpZiAobWF0Y2gpXHJcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlc29sdmVNYXRjaCh0aGlzLCBtYXRjaCwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBhd2FpdCByZXNvbHZlKHRoaXMsIG5vcm1hbGl6ZShhRXhwcmVzc2lvbiksIG51bGwsIGRlZmF1bHRWYWx1ZSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBleGVjdXRpbmcgc3RhdG1lbnRcXFwiXCIsIGFFeHByZXNzaW9uLCBcIlxcXCI6XCIsIGUpO1xyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlLmhhc1ZhbHVlID8gZGVmYXVsdFZhbHVlLnZhbHVlIDogYUV4cHJlc3Npb247XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYURlZmF1bHQpIHtcclxuXHRcdGxldCB0ZXh0ID0gYVRleHQ7XHJcblx0XHRsZXQgdGVtcCA9IGFUZXh0OyAvLyByZXF1aXJlZCB0byBwcmV2ZW50IGluZmluaXR5IGxvb3BcclxuXHRcdGxldCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyh0ZXh0KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORURcclxuXHRcdHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmVNYXRjaCh0aGlzLCBtYXRjaCwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdFx0dGVtcCA9IHRlbXAuc3BsaXQobWF0Y2hbMF0pLmpvaW4oKTsgLy8gcmVtb3ZlIGN1cnJlbnQgbWF0Y2ggZm9yIG5leHQgbG9vcFxyXG5cdFx0XHR0ZXh0ID0gdGV4dC5zcGxpdChtYXRjaFswXSkuam9pbih0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IChyZXN1bHQgPT0gbnVsbCA/IFwibnVsbFwiIDogcmVzdWx0KSk7XHJcblx0XHRcdG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKHRlbXApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgcmVzb2x2ZShhRXhwcmVzc2lvbiwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHRpZiAodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlKGFFeHByZXNzaW9uLCBkZWZhdWx0VmFsdWUpKTtcclxuXHRcdFx0XHR9LCBhVGltZW91dCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlKGFFeHByZXNzaW9uLCBkZWZhdWx0VmFsdWUpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgcmVzb2x2ZVRleHQoYVRleHQsIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGFDb250ZXh0IH0pO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyB0b0RlZmF1bHRWYWx1ZShhRGVmYXVsdCkgOiBERUZBVUxUX05PVF9ERUZJTkVEO1xyXG5cdFx0aWYgKHR5cGVvZiBhVGltZW91dCA9PT0gXCJudW1iZXJcIiAmJiBhVGltZW91dCA+IDApXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzb2x2ZXIucmVzb2x2ZVRleHQoYVRleHQsIGRlZmF1bHRWYWx1ZSkpO1xyXG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmVUZXh0KGFUZXh0LCBkZWZhdWx0VmFsdWUpO1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgYnVpbGRTZWN1cmUoe2NvbnRleHQsIHByb3BGaWx0ZXIsIG9wdGlvbj17ZGVlcDp0cnVlfSwgbmFtZSwgcGFyZW50fSl7XHJcblx0XHRjb250ZXh0ID0gT2JqZWN0VXRpbHMuZmlsdGVyKHtkYXRhOiBjb250ZXh0LCBwcm9wRmlsdGVyLCBvcHRpb259KTtcclxuXHRcdHJldHVybiBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHtjb250ZXh0LCBuYW1lLCBwYXJlbnR9KTtcclxuXHR9XHJcbn07IiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMgPSBVdGlscy5nbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5VdGlscy5nbG9iYWwuZGVmYXVsdGpzLmV4dGRvbSA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0dXRpbHMgOiB7XHJcblx0XHRVdGlsczogVXRpbHNcclxuXHR9XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLmNyZWF0ZSA9IGZ1bmN0aW9uKGFDb250ZW50LCBhc1RlbXBsYXRlKSB7XHJcblx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblx0XHJcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gYUNvbnRlbnQ7XHJcblx0aWYoYXNUZW1wbGF0ZSlcclxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcclxuXHRyZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKS5jaGlsZE5vZGVzO1xyXG59O1xyXG5cclxuVXRpbHMuZ2xvYmFsLnNjcmlwdCA9IGZ1bmN0aW9uKGFGaWxlLCBhVGFyZ2V0KSB7XHJcblx0aWYoYUZpbGUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChhRmlsZS5tYXAoZmlsZSA9PiBVdGlscy5nbG9iYWwuc2NyaXB0KGZpbGUsIGFUYXJnZXQpKSk7XHJcblx0XHJcblx0aWYodHlwZW9mIGFGaWxlID09PSBcInN0cmluZ1wiKVx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHIsZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKXtyKCl9O1xyXG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwibG9hZCBlcnJvciFcIil9O1xyXG5cdFx0XHQhYVRhcmdldCA/IGRvY3VtZW50LmJvZHkuYXBwZW5kKHNjcmlwdCkgOiBhVGFyZ2V0LmFwcGVuZChzY3JpcHQpO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gYUZpbGU7XHJcblx0XHR9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJGaXJzdCBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIVwiKTtcclxufTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgUmVhZHlFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50LCBRdWVyeVN1cHBvcnQsIFJlYWR5RXZlbnRTdXBwb3J0KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IGRvY3VtZW50LnRyaWdnZXIoXCJyZWFkeVwiKSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50RnJhZ21lbnQsIFF1ZXJ5U3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgQXR0cmlidXRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRWxlbWVudCxRdWVyeVN1cHBvcnQsIEF0dHJpYnV0ZVN1cHBvcnQsIE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xuXG5leHRlbmRQcm90b3R5cGUoRXZlbnRUYXJnZXQsIEV2ZW50U3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LCBIdG1sQ2xhc3NTdXBwb3J0LCBTaG93SGlkZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxUZXh0QXJlYUVsZW1lbnQsRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudmFsdWUgPSBhcmd1bWVudHNbMF1cclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pKTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MQ29sbGVjdGlvbiwgTGlzdFN1cHBvcnQpO1xyXG5cclxuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgY2FsbGluZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRjb25zdCBpc0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxpbmcgPT09IFwiZnVuY3Rpb25cIjtcclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXNbaV07XHJcblx0XHRsZXRcdHJlc3VsdDtcclxuXHRcdGlmKGlzRnVuY3Rpb24pXHJcblx0XHRcdHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkoW25vZGVdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBub2RlW2NhbGxpbmddID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJlc3VsdCA9IG5vZGVbY2FsbGluZ10uYXBwbHkobm9kZSwgYXJncyk7XHJcblx0XHRcclxuXHRcdGlmKHJlc3VsdClcclxuXHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XHJcblx0XHRcdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdFx0XHRpZih0eXBlb2Ygbm9kZS52YWwgPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUudmFsKCk7XHJcblx0XHRcdFx0XHRpZih2YWx1ZSlcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnNldCgobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpKSwgbm9kZS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlUby5hcHBseSh0aGlzLCBbXCJ2YWxcIl0uY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSkpO1xyXG59O1xyXG5cclxuSFRNTENvbGxlY3Rpb24uZnJvbSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBkYXRhID0ge307XHJcblx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cdFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRpZih0eXBlb2YgYXJnICE9PSBcInVuZGVmaW5lZFwiICYmIGFyZyAhPSBudWxsKXtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXHJcblx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmcsIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRlbHNlIGlmKGFyZyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGFyZyBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJnLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdGlmKGFyZ1tpXSAmJiBhcmdbaV0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGxldCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHJlc3VsdCl7IFxyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbilcclxuXHRcdHJldHVybiBIVE1MQ29sbGVjdGlvbi5mcm9tLmFwcGx5KG51bGwsIHJlc3VsdHMpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiByZXN1bHRzO1xyXG59LEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlLCBFdmVudFRhcmdldC5wcm90b3R5cGUpO1xyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERhdGFTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRGF0YVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZSxEYXRhU3VwcG9ydCxNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlTGlzdCwgTGlzdFN1cHBvcnQpO1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgY2FsbGluZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRjb25zdCBpc0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxpbmcgPT09IFwiZnVuY3Rpb25cIjtcclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXNbaV07XHJcblx0XHRsZXRcdHJlc3VsdDtcclxuXHRcdGlmKGlzRnVuY3Rpb24pXHJcblx0XHRcdHJlc3VsdCA9IGNhbGxpbmcuYXBwbHkoW25vZGVdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBub2RlW2NhbGxpbmddID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJlc3VsdCA9IG5vZGVbY2FsbGluZ10uYXBwbHkobm9kZSwgYXJncyk7XHJcblx0XHRcclxuXHRcdGlmKHJlc3VsdClcclxuXHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XHJcblx0XHRcdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdFx0XHRpZih0eXBlb2Ygbm9kZS52YWwgPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5vZGUudmFsKCk7XHJcblx0XHRcdFx0XHRpZih2YWx1ZSlcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnNldCgobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpKSwgbm9kZS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0XHROb2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUby5hcHBseSh0aGlzLCBbXCJ2YWxcIl0uY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSkpO1xyXG59O1xyXG5cclxuTm9kZUxpc3QuZnJvbSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBkYXRhID0ge307XHJcblx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cdFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRpZih0eXBlb2YgYXJnICE9PSBcInVuZGVmaW5lZFwiICYmIGFyZyAhPSBudWxsKXtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYXJnIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIE5vZGUpe1xyXG5cdFx0XHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZ1tpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEubGVuZ3RoID0ge3ZhbHVlOiBjb3VudGVyfTtcclxuXHRyZXR1cm4gIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLCBkYXRhKTtcclxufTtcclxuXHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cykge1xyXG5cdGxldCByZXN1bHRzID0gW107XHRcclxuXHR0aGlzLmZvckVhY2gobm9kZSA9PiB7XHJcblx0XHRpZihub2RlICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHJlc3VsdCl7IFxyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sTm9kZUxpc3QucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkF0dHJpYnV0ZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlcygpID8gKCgpID0+IHtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJpYnV0ZU5hbWVzKCkuZm9yRWFjaChuYW1lID0+IHtcclxuXHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pKCkgOiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkRhdGFTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5kYXRhc2V0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdGRhdGFbbmFtZV0gPSB0aGlzLmRhdGFzZXRbbmFtZV07XHJcblxyXG5cdFx0dGhpcy5kYXRhID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdFx0cmV0dXJuIGRhdGFbYXJndW1lbnRzWzBdXTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0XHRkZWxldGUgZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGF0YVthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9KS5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmRhdGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDA7XHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkV2ZW50U3VwcG9ydFwiLCAoUHJvdG90eXBlKSA9PiB7XHJcblx0Y29uc3QgRVZFTlRTUExJVEVSID0gLyhcXHMrKXwoXFxzKixcXHMqKS87XHJcblx0Y29uc3QgZ2V0V3JhcHBlckhhbmRsZU1hcCA9IChlbGVtZW50KSA9PiB7XHJcblx0XHRpZiAoIWVsZW1lbnQuX193cmFwcGVyaGFuZGxlbWFwX18pIGVsZW1lbnQuX193cmFwcGVyaGFuZGxlbWFwX18gPSBuZXcgTWFwKCk7XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQuX193cmFwcGVyaGFuZGxlbWFwX187XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0VHJpZ2dlclRpbWVvdXRzID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX19FVkVOVFRSSUdHRVJUSU1FT1VUU19fXykgZWxlbWVudC5fX19FVkVOVFRSSUdHRVJUSU1FT1VUU19fXyA9IHt9O1xyXG5cclxuXHRcdHJldHVybiBlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbW92ZVdyYXBwZXIgPSAoZWxlbWVudCwgZGF0YSwgZXZlbnRUeXBlcykgPT4ge1xyXG5cdFx0Y29uc3QgeyB3cmFwcGVyLCBvcHRpb24sIGV2ZW50cywgaGFuZGxlIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgY2FwdHVyZSA9IG9wdGlvbi5jYXB0dXJlO1xyXG5cdFx0aWYgKGV2ZW50VHlwZXMpIHtcclxuXHRcdFx0ZXZlbnRUeXBlcyA9IHR5cGVvZiBldmVudFR5cGVzID09PSBcInN0cmluZ1wiID8gZXZlbnRUeXBlcy5zcGxpdChFVkVOVFNQTElURVIpIDogZXZlbnRUeXBlcztcclxuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRUeXBlcykge1xyXG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gZXZlbnRzLmluZGV4T2YoZXZlbnQpO1xyXG5cdFx0XHRcdGlmIChpbmRleCA+PSAwKSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIGNhcHR1cmUpO1xyXG5cdFx0XHRcdFx0ZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChldmVudHMubGVuZ3RoID09IDApIGdldFdyYXBwZXJIYW5kbGVNYXAoZWxlbWVudCkuZGVsZXRlKGhhbmRsZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgY2FwdHVyZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Z2V0V3JhcHBlckhhbmRsZU1hcChlbGVtZW50KS5kZWxldGUoaGFuZGxlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBldmVudHMgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKS5zcGxpdChFVkVOVFNQTElURVIpIDogYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3QgZmlsdGVyID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0Y29uc3QgaGFuZGxlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwidW5kZWZpbmVkXCIgPyB7IGNhcHR1cmU6IGZhbHNlLCBvbmNlOiBmYWxzZSwgcGFzc2l2ZTogZmFsc2UgfSA6IHR5cGVvZiBhcmdzWzBdID09PSBcImJvb2xlYW5cIiA/IHsgY2FwdHVyZTogYXJncy5zaGlmdCgpLCBvbmNlOiBmYWxzZSwgcGFzc2l2ZTogZmFsc2UgfSA6IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGNvbnN0IHdyYXBwZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0aWYgKGZpbHRlcikge1xyXG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRhcmdldC5pcyA9PT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQuaXMoZmlsdGVyKSkgcmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGhhbmRsZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRpZiAob3B0aW9uLm9uY2UpIHJlbW92ZVdyYXBwZXIodGhpcywgd3JhcHBlcik7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuc2V0KGhhbmRsZSwgeyBoYW5kbGUsIHdyYXBwZXI6IHdyYXBwZXIsIGV2ZW50cywgb3B0aW9uIH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHdyYXBwZXIsIG9wdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24gKGhhbmRsZSwgZXZlbnQsIGNhcHR1cmUpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBnZXRXcmFwcGVySGFuZGxlTWFwKHRoaXMpLmdldChoYW5kbGUpO1xyXG5cdFx0aWYgKGRhdGEpIHJlbW92ZVdyYXBwZXIodGhpcywgZGF0YSwgZXZlbnQpO1xyXG5cdFx0ZWxzZSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlLCBldmVudCwgY2FwdHVyZSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0Y29uc3QgdGltZW91dCA9IHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiID8gYXJncy5zaGlmdCgpIDogLTE7XHJcblx0XHRpZiAodGltZW91dCA+PSAwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzWzBdO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0cyA9IGdldFRyaWdnZXJUaW1lb3V0cyh0aGlzKTtcclxuXHRcdFx0Y29uc3QgdGltZW91dGlkID0gdGltZW91dHNbdHlwZV07XHJcblx0XHRcdGlmICh0aW1lb3V0aWQpIGNsZWFyVGltZW91dCh0aW1lb3V0aWQpO1xyXG5cclxuXHRcdFx0dGltZW91dHNbdHlwZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRkZWxldGUgdGltZW91dHNbdHlwZV07XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0XHR9LCB0aW1lb3V0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdGNvbnN0IGRlbGVnYXRlID0gYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50ID8gYXJncy5zaGlmdCgpIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGFyZ3MubGVuZ3RoID49IDEgPyAoYXJncy5sZW5ndGggPT0gMSA/IGFyZ3Muc2hpZnQoKSA6IGFyZ3MpIDogZGVsZWdhdGU7XHJcblx0XHRcdGNvbnN0IGV2ZW50ID0gZGF0YSA/IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGNvbXBvc2VkOiB0cnVlLCBkZXRhaWw6IGRhdGEgfSkgOiBuZXcgRXZlbnQodHlwZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSB9KTtcclxuXHJcblx0XHRcdGlmIChkZWxlZ2F0ZSkgZXZlbnQuZGVsZWdhdGVkRXZlbnQgPSBkZWxlZ2F0ZTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJIdG1sQ2xhc3NTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaChjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBjbGF6eiA9PiB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTGlzdFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5hcHBseShBcnJheS5mcm9tKHRoaXMpLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJNYW5pcHVsYXRpb25TdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaChjb250ZW50ID0+IHtcclxuXHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBjb250ZW50IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pe1xyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBhcHBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3QgYXBwZW5kID0gUHJvdG90eXBlLmFwcGVuZENoaWxkLmJpbmQodGhpcyk7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKGFyZyk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRjcmVhdGUoYXJnKS5mb3JFYWNoKGFwcGVuZCk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdH1cclxuXHR9O1x0XHJcblx0UHJvdG90eXBlLmFwcGVuZCA9IGFwcGVuZDtcclxuXHRcclxuXHRjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24oYUZpcnN0RWxlbWVudCwgYUVsZW1lbnQpe1xyXG5cdFx0dGhpcy5pbnNlcnRCZWZvcmUoYUVsZW1lbnQsIGFGaXJzdEVsZW1lbnQpO1xyXG5cdH07XHJcblx0UHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRhcHBlbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb25zdCBmaXJzdCA9IHRoaXMuY2hpbGROb2Rlcy5maXJzdCgpO1xyXG5cdFx0XHRjb25zdCBpbnNlcnQgPSBwcmVwZW5kLmJpbmQodGhpcywgZmlyc3QpO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHRcdGluc2VydChhcmcpO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydCk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPCAxKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnN1ZmZpY2llbnQgYXJndW1lbnRzISBPbmUgb3IgdHdvIG5vZGVzIHJlcXVpcmVkIVwiKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gdGhpcy5wYXJlbnROb2RlIDogdGhpcztcclxuXHRcdGNvbnN0IG9sZE5vZGUgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzIDogYXJndW1lbnRzWzBdO1xyXG5cdFx0Y29uc3QgbmV3Tm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50c1sxXTtcclxuXHRcdFxyXG5cdFx0aWYobmV3Tm9kZSBpbnN0YW5jZW9mIEFycmF5IHx8IG5ld05vZGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBuZXdOb2RlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pe1xyXG5cdFx0XHRuZXdOb2RlLmZvckVhY2goYUl0ZW0gPT4gcGFyZW50Lmluc2VydEJlZm9yZShhSXRlbSwgb2xkTm9kZSkpO1xyXG5cdFx0XHRvbGROb2RlLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKG5ld05vZGUsb2xkTm9kZSk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBhZnRlciB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBuZXh0ID0gdGhpcy5uZXh0U2libGluZztcclxuXHRcdGlmKG5leHQpXHJcblx0XHRcdFByb3RvdHlwZS5iZWZvcmUuYXBwbHkobmV4dCwgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0UHJvdG90eXBlLmFwcGVuZC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5wYXJlbnROb2RlID09IG51bGwpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc2VydCBub2RlcyBhZnRlciB0aGlzIG5vZGUhIFBhcmVudCBub2RlIG5vdCBhdmFpbGFibGUhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBpbnNlcnRlciA9IChub2RlKSA9PiB7cGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0aGlzKTt9XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0Y29uc3QgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGluc2VydGVyKGFyZyk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnRlcik7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0ZXIpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgcGFyZW50U2VsZWN0b3IgPSAvOnBhcmVudChcXChcXFwiKFteXFwpXSopXFxcIlxcKSk/L2k7XHJcbmNvbnN0IHF1ZXJ5RXhlY3V0ZXIgPSBmdW5jdGlvbiAoYUVsZW1lbnQsIGFTZWxlY3Rvcikge1xyXG5cdGxldCBtYXRjaCA9IHBhcmVudFNlbGVjdG9yLmV4ZWMoYVNlbGVjdG9yKTtcclxuXHRpZiAobWF0Y2gpIHtcclxuXHRcdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRcdGlmIChtYXRjaC5pbmRleCA+IDApIHtcclxuXHRcdFx0cmVzdWx0ID0gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdGlmIChyZXN1bHQubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdH1cclxuXHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQobWF0Y2hbMl0pO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRsZXQgbmV4dFNlbGVjdG9yID0gYVNlbGVjdG9yLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xyXG5cdFx0XHRpZiAobmV4dFNlbGVjdG9yLmxlbmd0aCA+IDApIHJlc3VsdCA9IHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH0gZWxzZSByZXR1cm4gYUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG59O1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUXVlcnlTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCBub2RlcyA9IFtdO1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0d2hpbGUgKGFyZykge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIGFyZyk7XHJcblx0XHRcdFx0aWYgKHJlc3VsdCkgbm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlc3VsdCA9IE5vZGVMaXN0LmZyb20uYXBwbHkobnVsbCwgbm9kZXMpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKSBpZiAodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpIHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSByZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBpZ25vcmVTaGFkb3dSb290KSB7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIG51bGw7XHJcblx0XHRpZ25vcmVTaGFkb3dSb290ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImJvb2xlYW5cIiA/IHNlbGVjdG9yIDogaWdub3JlU2hhZG93Um9vdDtcclxuXHRcdHNlbGVjdG9yID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IgOiBudWxsO1xyXG5cclxuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCAmJiBpZ25vcmVTaGFkb3dSb290KSBwYXJlbnQgPSBwYXJlbnQuaG9zdDtcclxuXHJcblx0XHRpZiAoc2VsZWN0b3IpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuaXMoc2VsZWN0b3IpKSBwYXJlbnQgPSBwYXJlbnQucGFyZW50KHNlbGVjdG9yLCBpZ25vcmVTaGFkb3dSb290KTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ0aGlzOlwiLCB0aGlzLCBcInBhcmVudDpcIiwgcGFyZW50LCBcImVycm9yOlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhcmVudDtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZSAocGFyZW50KSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCB0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKHRoaXMuaWQpIHJldHVybiBcIiNcIiArIHRoaXMuaWQ7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZiAocGFyZW50KSB7XHJcblx0XHRcdFx0bGV0IHNhbWVUYWdTaWJsaW5ncyA9IHBhcmVudC5maW5kKFwiOnNjb3BlPlwiICsgc2VsZWN0b3IpO1xyXG5cdFx0XHRcdGlmIChzYW1lVGFnU2libGluZ3MgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gc2FtZVRhZ1NpYmxpbmdzLmluZGV4T2YodGhpcyk7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKSBzZWxlY3RvciArPSBcIjpudGgtY2hpbGQoXCIgKyAoaW5kZXggKyAxKSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcGFyZW50U2VsZWN0b3IgPSBwYXJlbnQuc2VsZWN0b3IoKTtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50U2VsZWN0b3IgPyBwYXJlbnRTZWxlY3RvciArIFwiPlwiICsgc2VsZWN0b3IgOiBzZWxlY3RvcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jbG9zZXN0cyhhUXVlcnkpLmZpcnN0KCk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3RzID0gZnVuY3Rpb24gKGFRdWVyeSkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZiAocmVzdWx0Lmxlbmd0aCAhPSAwKSByZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRpZiAocGFyZW50KSByZXR1cm4gcGFyZW50LmNsb3Nlc3RzKGFRdWVyeSk7XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20oW10pO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5uZXN0ZWQgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRpZiAodGhpcy5pcyhhUXVlcnkpKSByZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzKTtcclxuXHJcblx0XHRsZXQgbmVzdGVkID0gdGhpcy5maW5kKGFRdWVyeSk7XHJcblx0XHRpZiAobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKSByZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZSByZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiUmVhZHlFdmVudFN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1x0XHJcblx0XHR0aGlzLm9uKFwicmVhZHlcIiwgYUZ1bmN0aW9uLCBvbmNlKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJyZWFkeVwiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSElERVZBTFVFID0gXCJub25lXCI7XHJcblxyXG5jb25zdCBpc0hpZGRlbiA9IChlbGVtZW50KSA9PiB7XHJcblx0cmV0dXJuIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gSElERVZBTFVFXHJcbn07XHJcblxyXG5jb25zdCBpbml0ID0gKGVsZW1lbnQpID0+IHtcdFxyXG5cdGxldCBkaXNwbGF5ID0gIWlzSGlkZGVuKGVsZW1lbnQpID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5IDogXCJcIjtcclxuXHRcclxuXHRlbGVtZW50LnNob3cgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fSkuYmluZChlbGVtZW50KTtcclxuXHRcclxuXHRlbGVtZW50LmhpZGUgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IEhJREVWQUxVRTtcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlNob3dIaWRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5zaG93LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGluaXQodGhpcykuaGlkZS5hcHBseShudWxsLCBhcmd1bWVudHMpXHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpc0hpZGRlbih0aGlzKSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IElucHV0VHlwZXMgPSBbXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0aWYob3B0aW9uLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmcpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHZhbHVlcy5wdXNoKGFyZyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID49IDApO1x0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKHRoaXMudmFsdWUgPT0gXCJvblwiIHx8IHRoaXMudmFsdWUgPT0gXCJvZmZcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHRcclxufTtcclxuXHJcbmNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuL2RvbS9FdmVudFRhcmdldFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlXCI7XHJcbmltcG9ydCBcIi4vZG9tL0VsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRGcmFnbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9kb20vSHRtbENvbGxlY3Rpb25cIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuIiwiY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0Y29uc3Qgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCggdGFyZ2V0ID0+e1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxyXG5cdFx0LmZvckVhY2gobmFtZSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0c291cmNlW25hbWVdID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIG5hbWUsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0fTtcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IHR5cGUgPSBhcmdzLnNoaWZ0KCk7XHRcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0Y29uc3QgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcih0eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCBFWFRFTlNJT05TX01BUCA9IFV0aWxzLmdsb2JhbFZhcihcIl9fX0RPTV9BUElfRVhURU5TSU9OX01BUF9fX1wiLCB7fSk7XHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHRcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24oYVR5cGUucHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiZHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiXCIgKyBhTmFtZSArIFwiXFxcIiFcIik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiY29uc3QgVXRpbHMgPSB7XHJcblx0Z2xvYmFsIDogKCgpID0+IHtcclxuXHRcdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHJcblx0XHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdFx0aWYodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBzZWxmO1xyXG5cdFx0cmV0dXJuIHt9O1x0XHRcclxuXHR9KSgpLFxyXG5cdGdsb2JhbFZhciA6IGZ1bmN0aW9uKGFOYW1lLCBhSW5pdFZhbHVlKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIFV0aWxzLmdsb2JhbFthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFV0aWxzLmdsb2JhbFthTmFtZV0gPSBhSW5pdFZhbHVlO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gVXRpbHMuZ2xvYmFsW2FOYW1lXTtcdFx0XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwiaW1wb3J0IENvbXBvbmVudCAsIHtjb21wb25lbnRCYXNlT2Z9IGZyb20gXCIuL3NyYy9Db21wb25lbnRcIjtcbmltcG9ydCB7ZGVmaW5lfSBmcm9tIFwiLi9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyXCI7XG5cbmV4cG9ydCB7Q29tcG9uZW50LCBjb21wb25lbnRCYXNlT2YsIGRlZmluZX07XG4iLCJpbXBvcnQgeyBsYXp5UHJvbWlzZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHNcIjtcbmltcG9ydCB7IHV1aWQgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvVVVJRFwiO1xuaW1wb3J0IHsgaW5pdFRpbWVvdXQsIHRyaWdnZXJUaW1lb3V0IH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWUsIGNvbXBvbmVudEV2ZW50bmFtZSB9IGZyb20gXCIuL3V0aWxzL0V2ZW50SGVscGVyXCI7XG5cbmNvbnN0IFRJTUVPVVRTID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGluaXQgPSAoY29tcG9uZW50KSA9PiB7XG5cdGxldCB0aW1lb3V0ID0gVElNRU9VVFMuZ2V0KGNvbXBvbmVudCk7XG5cdGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cblx0VElNRU9VVFMuZ2V0KGNvbXBvbmVudCwgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0VElNRU9VVFMuZGVsZXRlKGNvbXBvbmVudCk7XG5cdFx0dHJ5e1xuXHRcdFx0YXdhaXQgY29tcG9uZW50LmluaXQoKTtcblx0XHRcdGNvbXBvbmVudC5yZWFkeS5yZXNvbHZlKCk7XG5cdFx0fWNhdGNoKGUpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkNhbid0IGluaXRpYWxpemUgY29tcG9uZW50IVwiLCBjb21wb25lbnQsIGUpO1xuXHRcdFx0Y29tcG9uZW50LnJlYWR5KHJlc29sdmUoZSkpO1xuXHRcdH1cblx0XHRjb21wb25lbnQudHJpZ2dlcihjb21wb25lbnRFdmVudG5hbWUoXCJpbml0aWFsemVkXCIsIGNvbXBvbmVudCkpO1xuXHR9LCBpbml0VGltZW91dCkpO1x0XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVUlEID0gKHByZWZpeCwgc3VmZml4KSA9PiB7XG5cdGxldCBjb3VudCA9IDA7XG5cdGxldCBpZCA9IG51bGw7XG4gICAgd2hpbGUoY291bnQgPCAxMDApe1xuXHRcdGlkID0gYCR7cHJlZml4ID8gcHJlZml4IDogXCJcIn0ke3V1aWQoKX0ke3N1ZmZpeCA/IHN1ZmZpeCA6IFwiXCJ9YDtcblx0XHRpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxuXHRcdFx0cmV0dXJuIGlkO1xuXG5cdFx0Y291bnQrKztcblx0fVxuXHRjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIlRvIG1hbnkgcmV0cmllcyB0byBjcmVhdGUgYW4gdW5pcXVlIGlkIC0gY3JlYXRlZCBpZCBpcyBub3QgdW5pcXVlIVwiKSk7XG5cdHJldHVybiBpZDtcbn07XG5cblxuXG5jb25zdCBidWlsZENsYXNzID0gKGh0bWxCYXNlVHlwZSkgPT57XG5cdHJldHVybiBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBodG1sQmFzZVR5cGUge1xuXG5cdFx0I3JlYWR5ID0gbGF6eVByb21pc2UoKTtcblx0XHRjb25zdHJ1Y3Rvcih7c2hhZG93Um9vdCA9IGZhbHNlLCBjb250ZW50ID0gbnVsbCwgY3JlYXRlVUlEID0gZmFsc2UsIHVpZFByZWZpeCA9IFwiaWQtXCIsIHVpZFN1ZmZpeCA9IFwiXCJ9ID0ge30pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFxuXHRcdFx0aWYoY3JlYXRlVUlEKVxuXHRcdFx0XHR0aGlzLmF0dHIoXCJpZFwiLCBjcmVhdGVVSUQodWlkUHJlZml4LCB1aWRTdWZmaXgpKTtcblx0XG5cdFx0XHRpZihzaGFkb3dSb290KVxuXHRcdFx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pO1xuXHRcdFx0XG5cdFx0XHRpZihjb250ZW50KVxuXHRcdFx0XHR0aGlzLnJvb3QuYXBwZW5kKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIgPyBjb250ZW50KHRoaXMpIDogY29udGVudCk7XG5cdFx0fVxuXHRcblx0XHRnZXQgcm9vdCgpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hhZG93Um9vdCB8fCB0aGlzO1xuXHRcdH1cblx0XG5cdFx0Z2V0IHJlYWR5KCl7XG5cdFx0XHRyZXR1cm4gdGhpcy4jcmVhZHk7XG5cdFx0fVxuXHRcblx0XHRhc3luYyBpbml0KCkge31cblx0XG5cdFx0YXN5bmMgZGVzdHJveSgpIHtcblx0XHRcdGlmKHRoaXMucmVhZHkucmVzb2x2ZWQpXG5cdFx0XHR0aGlzLiNyZWFkeSA9ICBsYXp5UHJvbWlzZSgpO1xuXHRcdH1cblx0XG5cdFx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHRpZiAodGhpcy5vd25lckRvY3VtZW50ID09IGRvY3VtZW50ICYmIHRoaXMuaXNDb25uZWN0ZWQpIGluaXQodGhpcyk7XG5cdFx0fVxuXHRcblx0XHRhZG9wdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cdFx0fVxuXHRcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAob2xkVmFsdWUgIT0gbmV3VmFsdWUgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIodHJpZ2dlclRpbWVvdXQsIGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZShuYW1lLCB0aGlzKSk7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcih0cmlnZ2VyVGltZW91dCwgY29tcG9uZW50RXZlbnRuYW1lKFwiY2hhbmdlXCIsIHRoaXMpKTtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdH07XG59IFxuXG5jb25zdCBDTEFaWk1BUCA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudEJhc2VPZiA9IChodG1sQmFzZVR5cGUpID0+IHtcblx0bGV0IGNsYXp6ID0gQ0xBWlpNQVAuZ2V0KGh0bWxCYXNlVHlwZSk7XG5cdGlmKGNsYXp6ID09IG51bGwpe1xuXHRcdGNsYXp6ID0gYnVpbGRDbGFzcyhodG1sQmFzZVR5cGUpO1xuXHRcdENMQVpaTUFQLnNldChodG1sQmFzZVR5cGUsIGNsYXp6KTtcblx0fVxuXG5cdHJldHVybiBjbGF6ejtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gY29tcG9uZW50QmFzZU9mKEhUTUxFbGVtZW50KTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImV4cG9ydCBjb25zdCBjb21wb25lbnRQcmVmaXggPSBcImQtXCI7XHJcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVDaGFuZ2VFdmVudFByZWZpeCA9IFwiYXR0cmlidXRlLVwiO1xyXG5leHBvcnQgY29uc3QgaW5pdFRpbWVvdXQgPSAxMDtcclxuZXhwb3J0IGNvbnN0IHRyaWdnZXJUaW1lb3V0ID0gMTA7XHJcbiIsImltcG9ydCB7IGNvbXBvbmVudFByZWZpeCB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IHRvTm9kZU5hbWUgPSAobmFtZSwgcHJlZml4KSA9PiB7XG5cdGlmKHR5cGVvZiBwcmVmaXggPT09IFwic3RyaW5nXCIpXG5cdFx0cmV0dXJuIHByZWZpeCArIG5hbWU7XG5cdFx0XG5cdHJldHVybiBjb21wb25lbnRQcmVmaXggKyBuYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlZmluZSA9IGZ1bmN0aW9uKGNsYXp6LCBvcHRpb25zKSB7XG5cdGNvbnN0IG5vZGVuYW1lID0gY2xhenouTk9ERU5BTUU7XG5cdGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KG5vZGVuYW1lKSkge1xuXHRcdGN1c3RvbUVsZW1lbnRzLmRlZmluZShub2RlbmFtZSwgY2xhenosIG9wdGlvbnMpO1xuXHR9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZTsgXG4iLCJpbXBvcnQge2F0dHJpYnV0ZUNoYW5nZUV2ZW50UHJlZml4fSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRFdmVudG5hbWUgPSAoZXZlbnRUeXBlLCBub2RlICkgPT4ge1x0XG5cdGxldCBub2RlbmFtZSA9IFwidW5zdXBwb3J0ZWRcIjtcblx0aWYodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpXG5cdFx0bm9kZW5hbWUgPSBub2RlO1xuXHRlbHNlIGlmKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcblx0XHRub2RlbmFtZSA9IG5vZGUubm9kZU5hbWU7XG5cdGVsc2UgaWYodHlwZW9mIG5vZGUuTk9ERU5BTUUgPT09IFwic3RyaW5nXCIpXG5cdFx0bm9kZW5hbWUgPSBub2RlLk5PREVOQU1FO1xuXHRlbHNlIHRocm93IG5ldyBFcnJvcihgJHt0eXBlb2Ygbm9kZX0gaXMgbm90IHN1cHBvcnRlZCBhcyBwYXJhbWV0ZXIgXCJub2RlXCIhYCk7XG5cdFxuICAgcmV0dXJuIGAke25vZGVuYW1lLnRvTG93ZXJDYXNlKCl9OiR7ZXZlbnRUeXBlfWA7Ly91c2UgQCBhcyBzZXBhcnRvciBhbmQgbm90IDpcbn07XG5cblxuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZSA9IChhdHRyaWJ1dGUsIG5vZGUgKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBvbmVudEV2ZW50bmFtZShgJHthdHRyaWJ1dGVDaGFuZ2VFdmVudFByZWZpeH0tJHthdHRyaWJ1dGV9YCwgbm9kZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7Y29tcG9uZW50RXZlbnRuYW1lLCBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWV9IiwiZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnQgPSAobm9kZSwgY2hlY2spID0+IHtcblx0d2hpbGUobm9kZSAhPSBudWxsKSB7XHRcdFxuICAgICAgICBpZihjaGVjayhub2RlKSlcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudCgpO1x0XHRcdFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGZpbmRDbG9zZXN0ID0gKG5vZGUsIGRlcHRoLCBjaGVjaykgPT4ge1xuICAgIGlmKGNoZWNrKG5vZGUpKVxuICAgICAgICByZXR1cm4ge25vZGUsIGRlcHRofVxuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkTm9kZXMpe1xuICAgICAgICBjb25zdCBpdGVtID0gZmluZENsb3Nlc3QoY2hpbGQsIGRlcHRoICsgMSwgY2hlY2spO1xuXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCAmJiAocmVzdWx0ID09IG51bGwgfHwgcmVzdWx0LmRlcHRoID4gaXRlbS5kZXB0aCkpICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQgPSBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2xvc2VzdEluRGVwdGggPSAobm9kZSwgY2hlY2spID0+IHtcbiAgICBjb25zdCBjbG9zZXN0ID0gZmluZENsb3Nlc3Qobm9kZSwgMCwgY2hlY2spO1xuICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGwgPyBjbG9zZXN0Lm5vZGUgOiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7ZmluZFBhcmVudCwgZmluZENsb3Nlc3RJbkRlcHRofTsiLCJpbXBvcnQgeyBkZWZWYWx1ZSB9IGZyb21cIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFrRGF0YSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGRlZlZhbHVlKHRoaXMsIFwid2Vha21hcFwiLCBuZXcgV2Vha01hcCgpKTtcblx0fVxuXG5cdGRhdGEocmVmZXJlbmNlKSB7XG5cdFx0bGV0IGRhdGEgPSB0aGlzLndlYWttYXAuZ2V0KHJlZmVyZW5jZSk7XG5cdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRkYXRhID0ge307XG5cdFx0XHR0aGlzLndlYWttYXAuc2V0KHJlZmVyZW5jZSwgZGF0YSk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0dmFsdWUocmVmZXJlbmNlLCBrZXksIHZhbHVlKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMikgcmV0dXJuIHRoaXMuZGF0YShyZWZlcmVuY2UpW2tleV07XG5cdFx0ZWxzZSBpZih0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIGRlbGV0ZSB0aGlzLmRhdGEocmVmZXJlbmNlKVtrZXldO1xuXHRcdGVsc2UgdGhpcy5kYXRhKHJlZmVyZW5jZSlba2V5XSA9IHZhbHVlO1xuXHR9XG5cblx0ZGVzdHJveSgpe1xuXHRcdHRoaXMud2Vha21hcC5kZWxldGUocmVmZXJlbmNlKTtcblx0fVxufTtcblxuIiwiaW1wb3J0IEJhc2VGaWVsZCBmcm9tIFwiLi9zcmMvQmFzZUZpZWxkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vc3JjL0ZpZWxkXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL3NyYy9Db250YWluZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL3NyYy9MaXN0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9zcmMvUGFnZVwiXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zcmMvRm9ybVwiO1xuaW1wb3J0IEJhc2VTdWJtaXRBY3Rpb24gZnJvbSBcIi4vc3JjL3N1Ym1pdEFjdGlvbnMvQmFzZVN1Ym1pdEFjdGlvblwiO1xuaW1wb3J0IFN1Ym1pdEFjdGlvblJlc3VsdCBmcm9tIFwiLi9zcmMvc3VibWl0QWN0aW9ucy9TdWJtaXRBY3Rpb25SZXN1bHRcIjtcblxuZXhwb3J0IHtGb3JtLCBQYWdlLCBCYXNlRmllbGQsIEZpZWxkLCBMaXN0LCBDb250YWluZXIsIEJhc2VTdWJtaXRBY3Rpb24sIFN1Ym1pdEFjdGlvblJlc3VsdH07IiwiaW1wb3J0IHsgTk9ERU5BTUVfRk9STSwgXHJcblx0QVRUUklCVVRFX0FDVElWRSwgXHJcblx0QVRUUklCVVRFX1JFQURPTkxZLCBcclxuXHRBVFRSSUJVVEVfRVZBTFVBVEUsXHJcblx0QVRUUklCVVRFX0NPTkRJVElPTiwgXHJcblx0QVRUUklCVVRFX0NPTkRJVElPTl9WQUxJRCwgXHJcblx0QVRUUklCVVRFX0NPTkRJVElPTl9JTlZBTElELCBcclxuXHRBVFRSSUJVVEVfVkFMSUQsIFxyXG5cdEFUVFJJQlVURV9FRElUQUJMRV9DT05ESVRJT04sIFxyXG5cdEFUVFJJQlVURV9FRElUQUJMRVxyXG59IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db21wb25lbnRcIjtcclxuaW1wb3J0IENvbmRpdGlvbkhhbmRsZSBmcm9tIFwiLi9oYW5kZWxzL0NvbmRpdGlvbkhhbmRsZVwiO1xyXG5pbXBvcnQgRWRpdGFibGVIYW5kbGUgZnJvbSBcIi4vaGFuZGVscy9FZGl0YWJsZUhhbmRsZVwiO1xyXG5pbXBvcnQgVmFsaWRhdGlvbkhhbmRsZSBmcm9tIFwiLi9oYW5kZWxzL1ZhbGlkYXRpb25IYW5kbGVcIjtcclxuaW1wb3J0IE1lc3NhZ2VIYW5kbGUgZnJvbSBcIi4vaGFuZGVscy9NZXNzYWdlSGFuZGxlXCI7XHJcbmltcG9ydCB7IGV2YWx1YXRpb25EYXRhIH0gZnJvbSBcIi4vdXRpbHMvRGF0YUhlbHBlclwiO1xyXG5pbXBvcnQgeyBwcml2YXRlUHJvcGVydHlBY2Nlc3NvciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgdXBkYXRlQWN0aXZlU3RhdGUsIHVwZGF0ZUNvbmRpdGlvblN0YXRlLCB1cGRhdGVFZGl0YWJsZVN0YXRlLCB1cGRhdGVSZWFkb25seVN0YXRlLCB1cGRhdGVWYWxpZFN0YXRlIH0gZnJvbSBcIi4vdXRpbHMvU3RhdGVIZWxwZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IF9mb3JtID0gcHJpdmF0ZVByb3BlcnR5QWNjZXNzb3IoXCJmb3JtXCIpO1xyXG5jb25zdCBBVFRSSUJVVEVTID0gW0FUVFJJQlVURV9BQ1RJVkUsIEFUVFJJQlVURV9SRUFET05MWSwgQVRUUklCVVRFX0NPTkRJVElPTiwgQVRUUklCVVRFX0NPTkRJVElPTl9WQUxJRCwgQVRUUklCVVRFX0NPTkRJVElPTl9JTlZBTElELCBBVFRSSUJVVEVfRURJVEFCTEVfQ09ORElUSU9OXTtcclxuXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XHJcblx0fVxyXG5cdFxyXG5cdCNjb25kaXRpb25IYW5kbGU7XHJcblx0I2VkaXRhYmxlSGFuZGxlO1xyXG5cdCN2YWxpZGF0aW9uSGFuZGxlO1xyXG5cdCNtZXNzYWdlSGFuZGxlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLiNtZXNzYWdlSGFuZGxlID0gbmV3IE1lc3NhZ2VIYW5kbGUodGhpcyk7XHJcblx0XHR0aGlzLiNjb25kaXRpb25IYW5kbGUgPSBuZXcgQ29uZGl0aW9uSGFuZGxlKHRoaXMpO1xyXG5cdFx0dGhpcy4jZWRpdGFibGVIYW5kbGUgPSBuZXcgRWRpdGFibGVIYW5kbGUodGhpcyk7XHJcblx0XHR0aGlzLiN2YWxpZGF0aW9uSGFuZGxlID0gbmV3IFZhbGlkYXRpb25IYW5kbGUodGhpcyk7XHJcblx0fVxyXG5cclxuXHRhZGRWYWxpZGF0aW9uKHZhbGlkYXRpb24pIHtcclxuXHRcdHRoaXMuI3ZhbGlkYXRpb25IYW5kbGUuYWRkQ3VzdG9tVmFsaWRhdGlvbih2YWxpZGF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkYXRlKGRhdGEpIHtcdFx0XHJcblx0XHQvL2NvbnNvbGUubG9nKGAke3RoaXMubm9kZU5hbWV9KCR7dGhpcy5uYW1lfSkudmFsaWRhdGU6YCwgZGF0YSlcclxuXHRcdHRoaXMuYXR0cihBVFRSSUJVVEVfRVZBTFVBVEUsIFwiXCIpO1xyXG5cdFx0Y29uc3QgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIGF3YWl0IGV2YWx1YXRpb25EYXRhKHRoaXMpKTtcclxuXHRcdGF3YWl0IHRoaXMuI2NvbmRpdGlvbkhhbmRsZS52YWxpZGF0ZShjb250ZXh0KTtcclxuXHRcdGF3YWl0IHRoaXMuI2VkaXRhYmxlSGFuZGxlLnZhbGlkYXRlKGNvbnRleHQpO1xyXG5cdFx0YXdhaXQgdGhpcy4jdmFsaWRhdGlvbkhhbmRsZS52YWxpZGF0ZShjb250ZXh0KTtcclxuXHRcdHRoaXMuYXR0cihBVFRSSUJVVEVfRVZBTFVBVEUsIG51bGwpO1xyXG5cclxuXHRcdGF3YWl0IHRoaXMuI21lc3NhZ2VIYW5kbGUudmFsaWRhdGUoY29udGV4dCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmFsaWQ7XHJcblx0fVxyXG5cclxuXHRnZXQgZm9ybSgpIHtcclxuXHRcdGxldCBmb3JtID0gX2Zvcm0odGhpcyk7XHJcblx0XHRpZiAoIWZvcm0pIHtcclxuXHRcdFx0Zm9ybSA9IHRoaXMucGFyZW50KE5PREVOQU1FX0ZPUk0pO1xyXG5cdFx0XHRfZm9ybSh0aGlzLCBmb3JtKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmb3JtO1xyXG5cdH1cclxuXHJcblx0Z2V0IGFjdGl2ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfQUNUSVZFKTtcclxuXHR9XHJcblxyXG5cdHNldCBhY3RpdmUoYWN0aXZlKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmU7XHJcblx0XHRpZiAoY3VycmVudCAhPSBhY3RpdmUpIHtcclxuXHRcdFx0dXBkYXRlQWN0aXZlU3RhdGUodGhpcywgYWN0aXZlKTtcclxuXHRcdFx0dGhpcy5hY3RpdmVVcGRhdGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBhY3RpdmVVcGRhdGVkKCkge31cclxuXHJcblx0Z2V0IHJlYWRvbmx5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9SRUFET05MWSk7XHJcblx0fVxyXG5cclxuXHRzZXQgcmVhZG9ubHkocmVhZG9ubHkpIHtcclxuXHRcdGlmKCF0aGlzLmVkaXRhYmxlKVxyXG5cdFx0XHR1cGRhdGVSZWFkb25seVN0YXRlKHRoaXMsIHRydWUsICF0aGlzLnJlYWR5LnJlc29sdmVkKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dXBkYXRlUmVhZG9ubHlTdGF0ZSh0aGlzLCByZWFkb25seSwgIXRoaXMucmVhZHkucmVzb2x2ZWQpO1xyXG5cdFx0dGhpcy5yZWFkb25seVVwZGF0ZWQoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlYWRvbmx5VXBkYXRlZCgpIHt9XHJcblxyXG5cdGdldCBlZGl0YWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfRURJVEFCTEUpO1xyXG5cdH1cclxuXHJcblx0c2V0IGVkaXRhYmxlKGVkaXRhYmxlKSB7XHJcblx0XHR1cGRhdGVFZGl0YWJsZVN0YXRlKHRoaXMsIGVkaXRhYmxlLCAhdGhpcy5yZWFkeS5yZXNvbHZlZCk7XHJcblx0XHR0aGlzLmVkaXRhYmxlVXBkYXRlZCgpO1x0XHRcclxuXHRcdHRoaXMucmVhZG9ubHkgPSAhZWRpdGFibGU7XHJcblx0fVxyXG5cclxuXHRhc3luYyBlZGl0YWJsZVVwZGF0ZWQoKSB7XHJcblx0fVxyXG5cclxuXHRzZXQgY29uZGl0aW9uKGNvbmRpdGlvbil7XHJcblx0XHR1cGRhdGVDb25kaXRpb25TdGF0ZSh0aGlzLCBjb25kaXRpb24pO1xyXG5cdFx0dGhpcy5jb25kaXRpb25VcGRhdGVkKCk7XHJcblx0fVxyXG5cclxuXHRnZXQgY29uZGl0aW9uKCkge1xyXG5cdFx0cmV0dXJuICF0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfQ09ORElUSU9OX0lOVkFMSUQpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY29uZGl0aW9uVXBkYXRlZCgpIHt9XHJcblxyXG5cdHNldCB2YWxpZCh2YWxpZCl7XHJcblx0XHR1cGRhdGVWYWxpZFN0YXRlKHRoaXMsIHZhbGlkKTtcclxuXHRcdHRoaXMudmFsaWRVcGRhdGVkKCk7XHJcblx0fVxyXG5cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUklCVVRFX1ZBTElEKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkVXBkYXRlZCgpe31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuIiwiaW1wb3J0IHsgRVZFTlRfRklFTERfSU5JVElBTElaRUQsIEVWRU5UX0ZJRUxEX1JFTU9WRUQsIEVWRU5UX0NPTkRJVElPTl9TVEFURV9DSEFOR0VELCBBVFRSSUJVVEVfTkFNRSwgQVRUUklCVVRFX1JFUVVJUkVELCBBVFRSSUJVVEVfTk9WQUxVRSB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IHsgcHJpdmF0ZVByb3BlcnR5QWNjZXNzb3IgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJpdmF0ZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBkYXRhSXNOb1ZhbHVlIH0gZnJvbSBcIi4vdXRpbHMvVmFsdWVIZWxwZXJcIjtcblxuY29uc3QgX3BhcmVudCA9IHByaXZhdGVQcm9wZXJ0eUFjY2Vzc29yKFwicGFyZW50XCIpO1xuZXhwb3J0IGNvbnN0IF92YWx1ZSA9IHByaXZhdGVQcm9wZXJ0eUFjY2Vzc29yKFwidmFsdWVcIik7XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbQVRUUklCVVRFX05BTUUsIEFUVFJJQlVURV9SRVFVSVJFRCwgQVRUUklCVVRFX05PVkFMVUVdO1xuXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZpZWxkID0gKGZpZWxkKSA9PiB7XG5cdGxldCBwYXJlbnQgPSBmaWVsZC5wYXJlbnROb2RlO1xuXHR3aGlsZSAocGFyZW50KSB7XG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIEJhc2VGaWVsZCkgcmV0dXJuIHBhcmVudDtcblxuXHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuY29uc3QgdXBkYXRlSGFzVmFsdWUgPSAoaGFzVmFsdWUsIGZpZWxkKSA9PiB7XG5cdGZpZWxkLmF0dHIoQVRUUklCVVRFX05PVkFMVUUsICFoYXNWYWx1ZSA/IFwiXCIgOiBudWxsKTtcbn07XG5cbmNsYXNzIEJhc2VGaWVsZCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUy5jb25jYXQoQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuXHR9XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0Y29uc3Qge3ZhbHVlfSA9IG9wdGlvbnM7XG5cdFx0X3ZhbHVlKHRoaXMsIHZhbHVlIHx8IG51bGwpO1x0XHRcblx0fVxuXG5cdGFzeW5jIGluaXQoKXtcblx0XHR0aGlzLnJlYWR5LnRoZW4oKCkgPT4gdGhpcy50cmlnZ2VyKEVWRU5UX0ZJRUxEX0lOSVRJQUxJWkVEKSk7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHR9XG5cblx0YXN5bmMgZGVzdHJveSgpIHtcdFx0XG5cdFx0dGhpcy5wdWJsaXNoVmFsdWUobnVsbCk7XG5cdFx0YXdhaXQgc3VwZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMudHJpZ2dlcihFVkVOVF9GSUVMRF9SRU1PVkVEKTtcblx0fVxuXG5cdGdldCBwYXJlbnRGaWVsZCgpIHtcblx0XHRsZXQgcGFyZW50ID0gX3BhcmVudCh0aGlzKTtcblx0XHRpZiAoIXBhcmVudCkge1xuXHRcdFx0cGFyZW50ID0gZmluZFBhcmVudEZpZWxkKHRoaXMpO1xuXHRcdFx0X3BhcmVudCh0aGlzLCBwYXJlbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFyZW50O1xuXHR9XG5cblx0YXN5bmMgY29uZGl0aW9uVXBkYXRlZCgpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IHRoaXMuY29uZGl0aW9uO1xuXHRcdHJldHVybiB0aGlzLnB1Ymxpc2hWYWx1ZSgpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKEFUVFJJQlVURV9OQU1FKTtcblx0fVxuXG5cdGdldCByZXF1aXJlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUklCVVRFX1JFUVVJUkVEKTtcblx0fVxuXG5cdGdldCBoYXNWYWx1ZSgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9OT1ZBTFVFKTtcblx0fVxuXG5cdGFzeW5jIHZhbHVlKHZhbHVlKSB7XG5cdFx0Y29uc3Qge2NvbmRpdGlvbiwgdmFsaWQsIHJlYWR5fSA9IHRoaXM7XG5cdFx0Ly9jb25zb2xlLmxvZyhgJHt0aGlzLm5vZGVOYW1lfSgke3RoaXMubmFtZX0pLnZhbHVlOiBgLCBhcmd1bWVudHMsIHtjb25kaXRpb24sIHZhbGlkfSk7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuICAhY29uZGl0aW9uIHx8ICF2YWxpZCA/IG51bGwgOiBfdmFsdWUodGhpcyk7XHRcdFxuXHRcdFxuXHRcdGF3YWl0IHJlYWR5O1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IF92YWx1ZSh0aGlzKTtcblxuXHRcdGlmIChhd2FpdCB0aGlzLmFjY2VwdFZhbHVlKHZhbHVlKSkge1xuXHRcdFx0dmFsdWUgPSBhd2FpdCB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB8fCB2YWx1ZTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT0gdmFsdWUpIHtcdFx0XHRcdFxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnVwZGF0ZWRWYWx1ZSh2YWx1ZSk7XHRcdFx0XHRcblx0XHRcdFx0aWYodHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcblx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0YXdhaXQgdGhpcy5wdWJsaXNoVmFsdWUodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHZhbGlkYXRlKGRhdGEpe1xuXHRcdGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VmFsaWQgPSB0aGlzLnZhbGlkO1xuXHRcdGNvbnN0IHZhbGlkID0gYXdhaXQgc3VwZXIudmFsaWRhdGUoZGF0YSk7XG5cdFx0Y29uc3QgY29uZGl0aW9uID0gdGhpcy5jb25kaXRpb247XG5cdFx0dGhpcy52YWxpZGF0aW9uU3RhdGVDaGFuZ2VkKGN1cnJlbnRDb25kaXRpb24gIT0gY29uZGl0aW9uLCAgY3VycmVudFZhbGlkICE9IHZhbGlkKTtcblxuXHRcdHJldHVybiB2YWxpZDtcblx0fVxuXG5cdGFzeW5jIHZhbGlkYXRpb25TdGF0ZUNoYW5nZWQoY29uZGl0aW9uQ2hhbmdlLCB2YWxpZGF0aW9uQ2hhbmdlZCl7XG5cdFx0Y29uc3QgaGFzQ2hhbmdlID0gY29uZGl0aW9uQ2hhbmdlIHx8IHZhbGlkYXRpb25DaGFuZ2VkO1xuXHRcdGlmKGhhc0NoYW5nZSlcblx0XHRcdHRoaXMucHVibGlzaFZhbHVlKCk7XG5cdH1cblxuXHRhc3luYyB1cGRhdGVkVmFsdWUodmFsdWUpIHsgXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0YXN5bmMgcHVibGlzaFZhbHVlKHZhbHVlKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhgY2FsbCAke3RoaXMubm9kZU5hbWV9KCR7dGhpcy5uYW1lfSkucHVibGlzaFZhbHVlOmAsIHthcmd1bWVudHM6IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlfSk7XG5cdFx0YXdhaXQgdGhpcy5yZWFkeTtcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXG5cdFx0XHR2YWx1ZSA9IF92YWx1ZSh0aGlzKTtcblxuXHRcdC8vY29uc29sZS5sb2coXCJ3b3JrIHdpdGggVmFsdWU6XCIsIHZhbHVlKVx0XHRcblx0XHRjb25zdCBub1ZhbHVlID0gZGF0YUlzTm9WYWx1ZSh2YWx1ZSk7XHRcdFx0XHRcblx0XHRjb25zdCBjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbjtcblx0XHRjb25zdCByZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG5cdFx0dmFsdWUgPSByZXF1aXJlZCAmJiBub1ZhbHVlID8gbnVsbCA6IHZhbHVlO1x0XHRcblx0XHRcblx0XHRpZighY29uZGl0aW9uKVxuXHRcdFx0dmFsdWUgPSBudWxsO1xuXHRcdGVsc2Vcblx0XHRcdF92YWx1ZSh0aGlzLCB2YWx1ZSk7XG5cblx0XHQvL2NvbnNvbGUubG9nKGAke3RoaXMubm9kZU5hbWV9KCR7dGhpcy5uYW1lfSkucHVibGlzaFZhbHVlOmAsIHtyZXF1aXJlZCwgY29uZGl0aW9uLCBub1ZhbHVlLCB2YWx1ZX0pO1xuXG5cdFx0dXBkYXRlSGFzVmFsdWUoIW5vVmFsdWUsIHRoaXMpO1xuXG5cdFx0aWYgKHRoaXMucGFyZW50RmllbGQpIGF3YWl0IHRoaXMucGFyZW50RmllbGQuY2hpbGRWYWx1ZUNoYW5nZWQodGhpcywgdmFsdWUpO1xuXHRcdGVsc2UgaWYodGhpcy5mb3JtKSBhd2FpdCB0aGlzLmZvcm0uY2hpbGRWYWx1ZUNoYW5nZWQodGhpcywgdmFsdWUpO1xuXHR9XG5cblx0YXN5bmMgYWNjZXB0VmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGFzeW5jIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0YXN5bmMgY2hpbGRWYWx1ZUNoYW5nZWQoZmllbGQsIHZhbHVlKSB7fVxufVxuZXhwb3J0IGRlZmF1bHQgQmFzZUZpZWxkO1xuIiwiZXhwb3J0IGNvbnN0IEhUTUxfVEFHX1BSRUZJWCA9IFwiZC1cIjtcbmV4cG9ydCBjb25zdCBUUklHR0VSX1RJTUVPVVQgPSAxMDtcbmV4cG9ydCBjb25zdCBFVkVOVEhBTkRMRV9USU1FT1VUID0gMTA7XG5leHBvcnQgY29uc3QgRVZFTlRIQU5ETEVfSU5QVVRfVElNRU9VVCA9IDUwICogRVZFTlRIQU5ETEVfVElNRU9VVDtcblxuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0ZPUk0gPSBgJHtIVE1MX1RBR19QUkVGSVh9Zm9ybWA7XG5leHBvcnQgY29uc3QgTk9ERU5BTUVfU1VCTUlUX0FDVElPTiA9IGAke0hUTUxfVEFHX1BSRUZJWH1zdWJtaXQtYWN0aW9uYDtcbmV4cG9ydCBjb25zdCBOT0RFTkFNRV9QQUdFID0gYCR7SFRNTF9UQUdfUFJFRklYfXBhZ2VgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0ZJRUxEID0gYCR7SFRNTF9UQUdfUFJFRklYfWZpZWxkYDtcbmV4cG9ydCBjb25zdCBOT0RFTkFNRV9DT05UQUlORVIgPSBgJHtIVE1MX1RBR19QUkVGSVh9Y29udGFpbmVyYDtcblxuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0xJU1QgPSBgJHtIVE1MX1RBR19QUkVGSVh9bGlzdGA7XG5leHBvcnQgY29uc3QgTk9ERU5BTUVfTElTVF9ST1dTPSBgJHtIVE1MX1RBR19QUkVGSVh9cm93c2A7XG5leHBvcnQgY29uc3QgTk9ERU5BTUVfTElTVF9ST1c9IGAke0hUTUxfVEFHX1BSRUZJWH1yb3dgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0xJU1RfQUREX1JPVz0gYCR7SFRNTF9UQUdfUFJFRklYfWFkZC1yb3dgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0xJU1RfREVMRVRFX1JPVz0gYCR7SFRNTF9UQUdfUFJFRklYfWRlbGV0ZS1yb3dgO1xuXG5leHBvcnQgY29uc3QgTk9ERU5BTUVfUFJPR0VTU0JBUiA9IGAke0hUTUxfVEFHX1BSRUZJWH1wcm9ncmVzcy1iYXJgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX1NURVAgPSBgJHtIVE1MX1RBR19QUkVGSVh9c3RlcGA7XG5cbmV4cG9ydCBjb25zdCBOT0RFTkFNRV9WQUxJREFUSU9OID0gYCR7SFRNTF9UQUdfUFJFRklYfXZhbGlkYXRpb25gO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX01FU1NBR0UgPSBgJHtIVE1MX1RBR19QUkVGSVh9bWVzc2FnZWA7XG5cbmV4cG9ydCBjb25zdCBOT0RFTkFNRV9DT05UUk9MID0gYCR7SFRNTF9UQUdfUFJFRklYfWNvbnRyb2xgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0NPTlRST0xfQkFDSyA9IGAke0hUTUxfVEFHX1BSRUZJWH1jb250cm9sLWJhY2tgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0NPTlRST0xfTkVYVCA9IGAke0hUTUxfVEFHX1BSRUZJWH1jb250cm9sLW5leHRgO1xuZXhwb3J0IGNvbnN0IE5PREVOQU1FX0NPTlRST0xfQ0FOQ0VMID0gYCR7SFRNTF9UQUdfUFJFRklYfWNvbnRyb2wtY2FuY2VsYDtcbmV4cG9ydCBjb25zdCBOT0RFTkFNRV9DT05UUk9MX1NVTU1BUlkgPSBgJHtIVE1MX1RBR19QUkVGSVh9Y29udHJvbC1zdW1tYXJ5YDtcbmV4cG9ydCBjb25zdCBOT0RFTkFNRV9DT05UUk9MX1NVQk1JVCA9IGAke0hUTUxfVEFHX1BSRUZJWH1jb250cm9sLXN1Ym1pdGA7XG5cblxuZXhwb3J0IGNvbnN0IEZPUk1TVEFURV9JTklUID0gXCJpbml0XCI7XG5leHBvcnQgY29uc3QgRk9STVNUQVRFX1ZBTElEQVRJTkcgPSBcInZhbGlkYXRpbmdcIjtcbmV4cG9ydCBjb25zdCBGT1JNU1RBVEVfSU5QVVQgPSBcImlucHV0XCI7XG5leHBvcnQgY29uc3QgRk9STVNUQVRFX1NVTU1BUlkgPSBcInN1bW1hcnlcIjtcbmV4cG9ydCBjb25zdCBGT1JNU1RBVEVfRklOSVNIRUQgPSBcImZpbmlzaGVkXCI7XG5leHBvcnQgY29uc3QgRk9STVNUQVRFUyA9IHtcblx0aW5pdDogRk9STVNUQVRFX0lOSVQsXG5cdHZhbGlkYXRpbmc6IEZPUk1TVEFURV9WQUxJREFUSU5HLFxuXHRpbnB1dDogRk9STVNUQVRFX0lOUFVULFxuXHRzdW1tYXJ5OiBGT1JNU1RBVEVfU1VNTUFSWSxcblx0ZmluaXNoZWQ6IEZPUk1TVEFURV9GSU5JU0hFRCxcbn07XG5cbmV4cG9ydCBjb25zdCBSRVFVSVJFRFNUQVRFUyA9IHtcblx0YWx3YXlzOiBcImFsd2F5c1wiLFxuXHRvbkFjdGl2ZTogXCJvbi1hY3RpdmVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9QUkVGSVggPSBIVE1MX1RBR19QUkVGSVggKyBcImZvcm0tXCI7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9JTklUSUFMSVpFID0gYCR7RVZFTlRfUFJFRklYfWluaXRpYWxpemVgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0lOSVRJQUxJWkVEID0gYCR7RVZFTlRfUFJFRklYfWluaXRpYWxpemVkYDtcblxuZXhwb3J0IGNvbnN0IEVWRU5UX0lOSVRJQUxJWkVfU1VCTUlUX0FDVElPTiA9IGAke0VWRU5UX0lOSVRJQUxJWkV9c3VibWl0LWFjdGlvbmA7XG5leHBvcnQgY29uc3QgRVZFTlRfU1VCTUlUID0gYCR7RVZFTlRfUFJFRklYfXN1Ym1pdGA7XG5leHBvcnQgY29uc3QgRVZFTlRfU1VCTUlUX1JFU1VMVFMgPSBgJHtFVkVOVF9QUkVGSVh9c3VibWl0LXJlc3VsdHNgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0VYRUNVVEVfVkFMSURBVEUgPSBgJHtFVkVOVF9QUkVGSVh9ZXhlY3V0ZS12YWxpZGF0ZWA7XG5leHBvcnQgY29uc3QgRVZFTlRfQ09ORElUSU9OX1NUQVRFX0NIQU5HRUQgPSBgJHtFVkVOVF9QUkVGSVh9Y29uZGl0aW9uLXN0YXRlLWNoYW5nZWRgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0FMTF9QVUJMSVNIX1ZBTFVFID0gYCR7RVZFTlRfUFJFRklYfWFsbC1wdWJsaXNoLXZhbHVlYDtcbmV4cG9ydCBjb25zdCBFVkVOVF9WQUxVRV9DSEFOR0VEID0gYCR7RVZFTlRfUFJFRklYfWZpZWxkLXZhbHVlLWNoYW5nZWRgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1NJVEVfQ0hBTkdFRCA9IGAke0VWRU5UX1BSRUZJWH1zaXRlLWNoYW5nZWRgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0ZPUk1fU1RBVEVfQ0hBTkdFRCA9IGAke0VWRU5UX1BSRUZJWH1zdGF0ZS1jaGFuZ2VkYDtcbmV4cG9ydCBjb25zdCBFVkVOVF9GSUVMRF9JTlBVVCA9IGAke0VWRU5UX1BSRUZJWH1maWVsZC1pbnB1dGA7XG5leHBvcnQgY29uc3QgRVZFTlRfTElTVF9ST1dfQUREID0gYCR7RVZFTlRfUFJFRklYfWxpc3Qtcm93LWFkZGA7XG5leHBvcnQgY29uc3QgRVZFTlRfTElTVF9ST1dfREVMRVRFID0gYCR7RVZFTlRfUFJFRklYfWxpc3Qtcm93LWRlbGV0ZWA7XG5leHBvcnQgY29uc3QgRVZFTlRfUFJPR1JFU1NCQVJfQ0hBTkdFRCA9IGAke0VWRU5UX1BSRUZJWH1wcm9ncmVzcy1iYXItY2hhbmdlZGA7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9GSUVMRF9JTklUSUFMSVpFRCA9IGAke0VWRU5UX1BSRUZJWH1maWVsZC1pbml0aWFsaXplZGA7XG5leHBvcnQgY29uc3QgRVZFTlRfRklFTERfUkVNT1ZFRCA9IGAke0VWRU5UX1BSRUZJWH1maWVsZC1yZW1vdmVkYDtcblxuZXhwb3J0IGNvbnN0IEVWRU5UX1BBR0VfSU5JVElBTElaRUQgPSBgJHtFVkVOVF9QUkVGSVh9cGFnZS1pbml0aWFsaXplZGA7XG5leHBvcnQgY29uc3QgRVZFTlRfUEFHRV9SRU1PVkVEID0gYCR7RVZFTlRfUFJFRklYfXBhZ2UtcmVtb3ZlZGA7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9WQUxJREFUSU9OX0lOSVRJQUxJWkVEID0gYCR7RVZFTlRfUFJFRklYfXZhbGlkYXRpb24taW5pdGlhbGl6ZWRgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1ZBTElEQVRJT05fUkVNT1ZFRCA9IGAke0VWRU5UX1BSRUZJWH12YWxpZGF0aW9uLXJlbW92ZWRgO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfTUVTU0FHRV9JTklUSUFMSVpFRCA9IGAke0VWRU5UX1BSRUZJWH1tZXNzYWdlLWluaXRpYWxpemVkYDtcbmV4cG9ydCBjb25zdCBFVkVOVF9NRVNTQUdFX1JFTU9WRUQgPSBgJHtFVkVOVF9QUkVGSVh9bWVzc2FnZS1yZW1vdmVkYDtcblxuZXhwb3J0IGNvbnN0IEVWRU5UX0FDVElWRV9TVEFURV9DSEFOR0VEID0gYCR7RVZFTlRfUFJFRklYfWFjdGl2ZS1zdGF0ZS1jaGFuZ2VkYDtcbmV4cG9ydCBjb25zdCBFVkVOVF9WQUxJRF9TVEFURV9DSEFOR0VEID0gYCR7RVZFTlRfUFJFRklYfXZhbGlkLXN0YXRlLWNoYW5nZWRgO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0VESVRBQkxFX1NUQVRFX0NIQU5HRUQgPSBgJHtFVkVOVF9QUkVGSVh9ZWRpdGFibGUtc3RhdGUtY2hhbmdlZGA7XG5cblxuZXhwb3J0IGNvbnN0IFNQRUNJQUxWQVJTID0ge1xuXHRDVVJSRU5UVkFMVUU6IFwiJHZhbHVlXCIsXG5cdENVUlJFTlRMSVNUUk9XOiBcIiRpdGVtXCIsXG59O1xuXG4vL0FUVFJJQlVURVNcblxuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9OQU1FID0gXCJuYW1lXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX0VORFBPSU5UID0gXCJlbmRwb2ludFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9NRVRIT0QgPSBcIm1ldGhvZFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9TVEFURSA9IFwic3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9TVEVQID0gXCJzdGVwXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX1VTRV9TVU1NQVJZX1BBR0UgPSBcInVzZS1zdW1tYXJ5LXBhZ2VcIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfSU5QVVRfTU9ERV9BRlRFUl9TVUJNSVQgPSBcImlucHV0LW1vZGUtYWZ0ZXItc3VibWl0XCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX1JFUVVJUkVEID0gXCJyZXF1aXJlZFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9SRVFVSVJFRF9PTl9BQ1RJVkVfT05MWSA9IFwicmVxdWlyZWQtb24tYWN0aXZlLW9ubHlcIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfQ09ORElUSU9OID0gXCJjb25kaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfQUNUSVZFID0gXCJhY3RpdmVcIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfRElTQUJMRUQgPSBcImRpc2FibGVkXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX0VESVRBQkxFID0gXCJlZGl0YWJsZVwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9FRElUQUJMRV9DT05ESVRJT04gPSBcImVkaXRhYmxlLWNvbmRpdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9SRUFET05MWSA9IFwicmVhZG9ubHlcIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfTk9WQUxVRSA9IFwibm8tdmFsdWVcIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfVkFMSUQgPSBcInZhbGlkXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX0lOVkFMSUQgPSBcImludmFsaWRcIjtcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEVfRVZBTFVBVEUgPSBcImV2YWx1YXRlXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX0NPTkRJVElPTl9WQUxJRCA9IFwiY29uZGl0aW9uLXZhbGlkXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX0NPTkRJVElPTl9JTlZBTElEID0gXCJjb25kaXRpb24taW52YWxpZFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9NSU4gPSBcIm1pblwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9NQVggPSBcIm1heFwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9QUk9HUkVTUyA9IFwicHJvZ3Jlc3NcIjtcbiIsImltcG9ydCB7IFxuXHROT0RFTkFNRV9DT05UQUlORVIsIFxuXHRFVkVOVF9GSUVMRF9JTklUSUFMSVpFRCwgXG5cdEVWRU5UX0ZJRUxEX1JFTU9WRUQgXG59IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZW10cHlPck5vVmFsdWVTdHJpbmcsIG5vVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvVmFsdWVIZWxwZXJcIjtcbmltcG9ydCB7IGZpbmRGaWVsZHMgfSBmcm9tIFwiLi91dGlscy9Ob2RlSGVscGVyXCI7XG5pbXBvcnQgQmFzZUZpZWxkLCB7IF92YWx1ZSB9IGZyb20gXCIuL0Jhc2VGaWVsZFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHZhbHVlSGVscGVyLCBmaWVsZFZhbHVlTWFwVG9PYmplY3QgfSBmcm9tIFwiLi91dGlscy9EYXRhSGVscGVyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkcyB9IGZyb20gXCIuL3V0aWxzL1ZhbGlkYXRpb25IZWxwZXJcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtdO1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUZpZWxkIHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVMuY29uY2F0KEJhc2VGaWVsZC5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuXHR9XG5cblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUVfQ09OVEFJTkVSO1xuXHR9XG5cblx0I2ZpZWxkcyA9IG51bGw7XG5cdCN2YWx1ZSA9IG5ldyBNYXAoKTtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucm9vdDtcblx0XHRyb290Lm9uKEVWRU5UX0ZJRUxEX0lOSVRJQUxJWkVELCAoZXZlbnQpID0+IHtcblx0XHRcdGNvbnN0IGZpZWxkID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0aWYgKGZpZWxkICE9IHRoaXMpIHtcblx0XHRcdFx0aWYgKGZpZWxkIGluc3RhbmNlb2YgQmFzZUZpZWxkICYmICghdGhpcy4jZmllbGRzIHx8ICF0aGlzLiNmaWVsZHMuaGFzKGZpZWxkKSkpXG5cdFx0XHRcdFx0dGhpcy4jZmllbGRzID0gbnVsbDtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyb290Lm9uKEVWRU5UX0ZJRUxEX1JFTU9WRUQsIChldmVudCkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRpZiAoZmllbGQgIT0gdGhpcykge1xuXHRcdFx0XHRpZiAoZmllbGQgaW5zdGFuY2VvZiBCYXNlRmllbGQgJiYgdGhpcy4jZmllbGRzICYmIHRoaXMuI2ZpZWxkcy5oYXMoZmllbGQpKVxuXHRcdFx0XHRcdHRoaXMuI2ZpZWxkcy5kZWxldGUoZmllbGQpO1xuXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRWYWxpZGF0aW9uKGFzeW5jICh7IGRhdGEgfSkgPT4gYXdhaXQgdmFsaWRhdGVGaWVsZHMoZGF0YSwgdGhpcy5maWVsZHMpKTtcblx0fVxuXG5cdGdldCBmaWVsZHMoKSB7XG5cdFx0aWYoIXRoaXMuI2ZpZWxkcylcblx0XHRcdHRoaXMuI2ZpZWxkcyA9IG5ldyBTZXQoZmluZEZpZWxkcyh0aGlzKSk7XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNmaWVsZHMpO1xuXHR9XG5cblx0cmVhZG9ubHlVcGRhdGVkKCkge1xuXHRcdGNvbnN0IHsgcmVhZG9ubHksIGZpZWxkcyB9ID0gdGhpcztcblx0XHRpZiAoZmllbGRzKVxuXHRcdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHRcdGZpZWxkLnJlYWRvbmx5ID0gcmVhZG9ubHk7XG5cdFx0XHR9XG5cdH1cblxuXHRhc3luYyB1cGRhdGVkVmFsdWUodmFsdWUpIHtcblx0XHRhd2FpdCB0aGlzLnJlYWR5O1xuXHRcdGNvbnN0IG1hcCA9IHRoaXMuI3ZhbHVlO1xuXHRcdG1hcC5jbGVhcigpO1xuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRzO1xuXHRcdGlmIChmaWVsZHMpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKGZpZWxkcy5tYXAoYXN5bmMgKGZpZWxkKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBmaWVsZC5uYW1lO1xuXHRcdFx0XHRjb25zdCBmaWVsZFZhbHVlID0gbmFtZSA/IHZhbHVlSGVscGVyKHZhbHVlLCBmaWVsZC5uYW1lKSA6IHZhbHVlO1xuXHRcdFx0XHRpZighbm9WYWx1ZShmaWVsZFZhbHVlKSlcblx0XHRcdFx0XHRtYXAuc2V0KGZpZWxkLCBmaWVsZFZhbHVlKTtcblx0XHRcdFx0YXdhaXQgZmllbGQudmFsdWUoZmllbGRWYWx1ZSk7XG5cdFx0XHR9KSk7XG5cdFx0fVxuXG5cdFx0bGV0IGRhdGEgPSBhd2FpdCBmaWVsZFZhbHVlTWFwVG9PYmplY3QodGhpcy4jdmFsdWUsIGZpZWxkcyk7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpLmxlbmd0aCA9PSAwKSBkYXRhID0gbnVsbDtcblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0YXN5bmMgY2hpbGRWYWx1ZUNoYW5nZWQoZmllbGQsIHZhbHVlKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhgJHt0aGlzLm5vZGVOYW1lfS5jaGlsZFZhbHVlQ2hhbmdlZCgke2ZpZWxkLm5hbWV9KTpgLCB7ZmllbGQsIHZhbHVlfSk7XG5cdFx0dmFsdWUgPSBhd2FpdCB2YWx1ZTtcdFx0XG5cdFx0Y29uc3QgbWFwID0gdGhpcy4jdmFsdWU7XHRcdFxuXHRcdFxuXHRcdGlmIChmaWVsZCkge1xuXHRcdFx0Y29uc3QgaGFzRmllbGQgPSBtYXAuaGFzKGZpZWxkKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG1hcC5nZXQoZmllbGQpID09IG51bGw7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHtuYW1lOiBmaWVsZC5uYW1lLCBjdXJyZW50VmFsdWUsIHZhbHVlLCBoYXNGaWVsZH0pXG5cblx0XHRcdGlmKGhhc0ZpZWxkICYmIGN1cnJlbnRWYWx1ZSA9PSB2YWx1ZSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0aWYgKG5vVmFsdWUodmFsdWUpKSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coYGRlbGV0ZSAke2ZpZWxkLm5hbWV9YCk7XG5cdFx0XHRcdG1hcC5kZWxldGUoZmllbGQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coYHNldCAke2ZpZWxkLm5hbWV9ID0gJHt2YWx1ZX1gKTtcblx0XHRcdFx0bWFwLnNldChmaWVsZCwgdmFsdWUpO1xuXHRcdFx0fVx0XHRcdFx0XG5cdFx0fVx0XG5cblx0XHRsZXQgZGF0YSA9IGF3YWl0IGZpZWxkVmFsdWVNYXBUb09iamVjdChtYXAsIHRoaXMuZmllbGRzKTtcblx0XHQvL2NvbnNvbGUubG9nKFwiZGF0YTogXCIsZGF0YSk7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpLmxlbmd0aCA9PSAwKSBkYXRhID0gbnVsbDtcblxuXHRcdGF3YWl0IHRoaXMucHVibGlzaFZhbHVlKGRhdGEpO1xuXHR9XG59XG5cbmRlZmluZShDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgXG5cdEZPUk1TVEFURV9JTklULFxuXHRGT1JNU1RBVEVfSU5QVVQsXG5cdEZPUk1TVEFURV9WQUxJREFUSU5HLFxuXHRGT1JNU1RBVEVfU1VNTUFSWSxcblx0Rk9STVNUQVRFX0ZJTklTSEVELCBcblx0Tk9ERU5BTUVfQ09OVFJPTCxcblx0Tk9ERU5BTUVfQ09OVFJPTF9CQUNLLFxuXHROT0RFTkFNRV9DT05UUk9MX05FWFQsXG5cdE5PREVOQU1FX0NPTlRST0xfQ0FOQ0VMLFxuXHROT0RFTkFNRV9DT05UUk9MX1NVQk1JVCwgXG5cdE5PREVOQU1FX0ZPUk0sXG5cdEVWRU5UX0lOSVRJQUxJWkVELFxuXHRFVkVOVF9GT1JNX1NUQVRFX0NIQU5HRUQsXG5cdEVWRU5UX1NJVEVfQ0hBTkdFRCxcblx0Tk9ERU5BTUVfQ09OVFJPTF9TVU1NQVJZXG59IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xuaW1wb3J0IFwiLi9jb250cm9sc1wiO1xuXG5jb25zdCBCVVRUT05EVU1NWSA9IHtcblx0YWN0aXZlOiB0cnVlLFxuXHRkaXNhYmxlZDogdHJ1ZSxcbn07XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXTtcbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX0NPTlRST0w7XG5cdH1cblxuXHQjZm9ybTtcblx0I2JhY2s7XG5cdCNuZXh0O1xuXHQjc3VtbWFyeTtcblx0I3N1Ym1pdDtcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMuI2Zvcm0gPSB0aGlzLnBhcmVudChOT0RFTkFNRV9GT1JNKTtcblx0XHRcdHRoaXMuI2JhY2sgPSB0aGlzLmZpbmQoTk9ERU5BTUVfQ09OVFJPTF9CQUNLKS5maXJzdCgpIHx8IEJVVFRPTkRVTU1ZO1xuXHRcdFx0dGhpcy4jbmV4dCA9IHRoaXMuZmluZChOT0RFTkFNRV9DT05UUk9MX05FWFQpLmZpcnN0KCkgfHwgQlVUVE9ORFVNTVk7XG5cdFx0XHR0aGlzLiNzdW1tYXJ5ID0gdGhpcy5maW5kKE5PREVOQU1FX0NPTlRST0xfU1VNTUFSWSkuZmlyc3QoKSB8fCBCVVRUT05EVU1NWTtcblx0XHRcdHRoaXMuI3N1Ym1pdCA9IHRoaXMuZmluZChOT0RFTkFNRV9DT05UUk9MX1NVQk1JVCkuZmlyc3QoKSB8fCBCVVRUT05EVU1NWTtcblxuXHRcdFx0dGhpcy4jZm9ybS5vbihbRVZFTlRfSU5JVElBTElaRUQsIEVWRU5UX0ZPUk1fU1RBVEVfQ0hBTkdFRCwgRVZFTlRfU0lURV9DSEFOR0VEXSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRcblxuXHRhc3luYyB1cGRhdGUoKSB7XG5cdFx0Y29uc3QgZm9ybSA9IHRoaXMuI2Zvcm07XG5cdFx0Y29uc3Qgc3RhdGUgPSBmb3JtLnN0YXRlO1xuXHRcdGNvbnN0IGJhY2sgPSB0aGlzLiNiYWNrO1xuXHRcdGNvbnN0IG5leHQgPSB0aGlzLiNuZXh0O1xuXHRcdGNvbnN0IHN1bW1hcnkgPSB0aGlzLiNzdW1tYXJ5O1xuXHRcdGNvbnN0IHN1Ym1pdCA9IHRoaXMuI3N1Ym1pdFxuXG5cdFx0Ly8gYmFzaWMgY29udHJvbCBzZXR1cFxuXHRcdGJhY2suYWN0aXZlID0gdHJ1ZTtcblx0XHRiYWNrLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRuZXh0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdG5leHQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdHN1bW1hcnkuYWN0aXZlID0gZmFsc2U7XG5cdFx0c3VtbWFyeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0c3VibWl0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRpZihzdGF0ZSA9PSBGT1JNU1RBVEVfVkFMSURBVElORylcblx0XHRcdHJldHVybjtcblxuXHRcdGNvbnN0IHsgYWN0aXZlUGFnZUluZGV4LCBhY3RpdmVQYWdlLCBuZXh0UGFnZSwgcGFnZXMsIHVzZVN1bW1hcnlQYWdlIH0gPSBmb3JtO1x0XG5cdFx0Y29uc3QgaGFzTmV4dFBhZ2UgPSAoYXdhaXQgbmV4dFBhZ2UpICE9IG51bGw7XG5cblx0XHRpZiAoc3RhdGUgPT0gRk9STVNUQVRFX0ZJTklTSEVEKSB7XG5cdFx0XHRiYWNrLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdHN1Ym1pdC5hY3RpdmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoc3RhdGUgPT0gRk9STVNUQVRFX1NVTU1BUlkpIHtcblx0XHRcdGJhY2suZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHN1Ym1pdC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0c3VibWl0LmRpc2FibGVkID0gIWZvcm0udmFsaWQ7XG5cdFx0fSBlbHNlIGlmIChzdGF0ZSA9PSBGT1JNU1RBVEVfSU5QVVQpIHtcblx0XHRcdGJhY2suZGlzYWJsZWQgPSBhY3RpdmVQYWdlSW5kZXggPD0gMDtcblxuXHRcdFx0aWYgKGhhc05leHRQYWdlIHx8ICghYWN0aXZlUGFnZS52YWxpZCAmJiBhY3RpdmVQYWdlSW5kZXggKyAxIDwgcGFnZXMubGVuZ3RoKSkge1xuXHRcdFx0XHRuZXh0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdG5leHQuZGlzYWJsZWQgPSAhYWN0aXZlUGFnZS52YWxpZDtcblx0XHRcdH0gZWxzZSBpZiAodXNlU3VtbWFyeVBhZ2UgJiYgc3RhdGUgPT0gRk9STVNUQVRFX0lOUFVUKSB7XG5cdFx0XHRcdHN1bW1hcnkuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0c3VtbWFyeS5kaXNhYmxlZCA9ICFhY3RpdmVQYWdlLnZhbGlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3VibWl0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ym1pdC5kaXNhYmxlZCA9ICFmb3JtLnZhbGlkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuZGVmaW5lKENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbDtcbiIsImltcG9ydCB7IFxuXHROT0RFTkFNRV9GSUVMRCwgXG5cdEVWRU5UX0ZJRUxEX0lOUFVUIFxufSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBCYXNlRmllbGQsIHtfdmFsdWV9IGZyb20gXCIuL0Jhc2VGaWVsZFwiO1xuaW1wb3J0IHsgZmluZFdyYXBwZXIgfSBmcm9tIFwiLi93cmFwcGVyXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgZW10cHlPck5vVmFsdWVTdHJpbmcsIG5vVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvVmFsdWVIZWxwZXJcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtcImZpbGUtZm9ybWF0XCJdO1xuXG5jbGFzcyBGaWVsZCBleHRlbmRzIEJhc2VGaWVsZCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBBVFRSSUJVVEVTLmNvbmNhdChCYXNlRmllbGQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX0ZJRUxEO1xuXHR9XG5cblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cdCN3cmFwcGVyO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRzdXBlcihvcHRpb25zKTtcblx0XHR0aGlzLm9uKEVWRU5UX0ZJRUxEX0lOUFVULCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHVibGlzaFZhbHVlKGV2ZW50LmRldGFpbCB8fCBudWxsKTtcblx0XHR9KTtcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuI3dyYXBwZXIgPSBmaW5kV3JhcHBlcih0aGlzKTtcblx0XHRcdGlmICh0aGlzLiN3cmFwcGVyKXtcblx0XHRcdFx0dGhpcy5hZGRWYWxpZGF0aW9uKGFzeW5jICgpID0+IHRoaXMuI3dyYXBwZXIudmFsaWQpO1xuXHRcdFx0XHR0aGlzLnB1Ymxpc2hWYWx1ZSh0aGlzLiN3cmFwcGVyLnZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZWFkb25seVVwZGF0ZWQoKSB7XG5cdFx0aWYgKHRoaXMuI3dyYXBwZXIpIHRoaXMuI3dyYXBwZXIucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5O1xuXHR9XG5cblx0YXN5bmMgYWNjZXB0VmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcy4jd3JhcHBlciA/IHRoaXMuI3dyYXBwZXIuYWNjZXB0VmFsdWUodmFsdWUpIDogZmFsc2U7XG5cdH1cblxuXHRhc3luYyBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLiN3cmFwcGVyKSByZXR1cm4gdGhpcy4jd3JhcHBlci5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRhc3luYyB1cGRhdGVkVmFsdWUodmFsdWUpIHtcblx0XHRhd2FpdCB0aGlzLnJlYWR5O1xuXHRcdHZhbHVlID0gYXdhaXQgdmFsdWU7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuI3dyYXBwZXI7XG5cdFx0aWYgKHdyYXBwZXIpe1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHdyYXBwZXIudmFsdWUgfHwgbnVsbDtcblx0XHRcdGlmKGN1cnJlbnQgIT0gdmFsdWUpXG5cdFx0XHRcdGF3YWl0IHdyYXBwZXIudXBkYXRlZFZhbHVlKHZhbHVlKTtcblx0XHR9XG5cdFx0YXdhaXQgc3VwZXIudXBkYXRlZFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdGFzeW5jIHZhbGlkYXRpb25TdGF0ZUNoYW5nZWQoY29uZGl0aW9uQ2hhbmdlLCB2YWxpZGF0aW9uQ2hhbmdlZCl7XHRcdFxuXHRcdGlmKGNvbmRpdGlvbkNoYW5nZSAmJiB0aGlzLmNvbmRpdGlvbil7XHRcdFx0XG5cdFx0XHRjb25zdCB3cmFwcGVyID0gdGhpcy4jd3JhcHBlcjtcblx0XHRcdGNvbnN0IHZhbHVlID0gd3JhcHBlci52YWx1ZSB8fCBudWxsO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhgdmFsaWRhdGlvblN0YXRlQ2hhbmdlZCgke3RoaXMubmFtZX0gKCR7Y29uZGl0aW9uQ2hhbmdlfSwgJHt2YWxpZGF0aW9uQ2hhbmdlZH0pIC0+ICR7dmFsdWV9YClcblx0XHRcdF92YWx1ZSh0aGlzLCB2YWx1ZSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBzdXBlci52YWxpZGF0aW9uU3RhdGVDaGFuZ2VkKGNvbmRpdGlvbkNoYW5nZSwgdmFsaWRhdGlvbkNoYW5nZWQpO1xuXHR9XG59XG5cbmRlZmluZShGaWVsZCk7XG5leHBvcnQgZGVmYXVsdCBGaWVsZDtcbiIsImltcG9ydCB7IE5PREVOQU1FX0ZPUk0sIE5PREVOQU1FX1BBR0UsIEVWRU5UX0lOSVRJQUxJWkVELCBFVkVOVF9QQUdFX0lOSVRJQUxJWkVELCBFVkVOVF9QQUdFX1JFTU9WRUQsIEVWRU5UX0ZPUk1fU1RBVEVfQ0hBTkdFRCwgRVZFTlRfU0lURV9DSEFOR0VELCBFVkVOVF9TVUJNSVQsIEVWRU5UX1NVQk1JVF9SRVNVTFRTLCBBVFRSSUJVVEVfTkFNRSwgQVRUUklCVVRFX1VTRV9TVU1NQVJZX1BBR0UsIEFUVFJJQlVURV9FTkRQT0lOVCwgQVRUUklCVVRFX01FVEhPRCwgQVRUUklCVVRFX1NUQVRFLCBBVFRSSUJVVEVfSU5QVVRfTU9ERV9BRlRFUl9TVUJNSVQsIEZPUk1TVEFURV9JTlBVVCwgRk9STVNUQVRFX1NVTU1BUlksIEZPUk1TVEFURV9WQUxJREFUSU5HLCBGT1JNU1RBVEVfSU5JVCwgRk9STVNUQVRFX0ZJTklTSEVEIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuL01lc3NhZ2VcIjtcbmltcG9ydCBcIi4vTWVzc2FnZVwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IFwiLi9Db250cm9sXCI7XG5pbXBvcnQgXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyBub1ZhbHVlIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1ZhbHVlSGVscGVyXCI7XG5pbXBvcnQgeyBwcml2YXRlUHJvcGVydHlBY2Nlc3NvciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcbmltcG9ydCBCYXNlU3VibWl0QWN0aW9uIGZyb20gXCIuL3N1Ym1pdEFjdGlvbnMvQmFzZVN1Ym1pdEFjdGlvblwiO1xuaW1wb3J0IERlZmF1bHRGb3JtU3VibWl0QWN0aW9uIGZyb20gXCIuL3N1Ym1pdEFjdGlvbnMvRGVmYXVsdEZvcm1TdWJtaXRBY3Rpb25cIjtcbmltcG9ydCBTdWJtaXRBY3Rpb25SZXN1bHQsIHsgU1RBVEVfRkFJTCBhcyBBQ1RJT05fU1VCTUlUX1NUQVRFX0ZBSUwsIFNUQVRFX1NVQ0NFU1MgYXMgQUNUSU9OX1NVQk1JVF9TVEFURV9TVUNDRVNTIH0gZnJvbSBcIi4vc3VibWl0QWN0aW9ucy9TdWJtaXRBY3Rpb25SZXN1bHRcIjtcbmltcG9ydCB7IHZhbHVlSGVscGVyLCBmaWVsZFZhbHVlTWFwVG9PYmplY3QgfSBmcm9tIFwiLi91dGlscy9EYXRhSGVscGVyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkcyB9IGZyb20gXCIuL3V0aWxzL1ZhbGlkYXRpb25IZWxwZXJcIjtcblxuY29uc3QgX3N1Ym1pdEFjdGlvbnMgPSBwcml2YXRlUHJvcGVydHlBY2Nlc3NvcihcInN1Ym1pdEFjdGlvblwiKTtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfTkFNRSwgQVRUUklCVVRFX1VTRV9TVU1NQVJZX1BBR0UsIEFUVFJJQlVURV9FTkRQT0lOVCwgQVRUUklCVVRFX01FVEhPRCwgQVRUUklCVVRFX1NUQVRFLCBBVFRSSUJVVEVfSU5QVVRfTU9ERV9BRlRFUl9TVUJNSVRdO1xuXG5jb25zdCByZWFkb25seSA9IChmb3JtLCByZWFkb25seSkgPT4ge1xuXHRmb3IgKGxldCBwYWdlIG9mIGZvcm0ucGFnZXMpIHtcblx0XHRwYWdlLnJlYWRvbmx5ID0gcmVhZG9ubHk7XG5cdFx0cGFnZS5hY3RpdmUgPSByZWFkb25seTtcblx0fVxufTtcblxuY29uc3QgZXhlY3V0ZUFjdGlvbnMgPSBhc3luYyAoYWN0aW9ucywgZGF0YSkgPT4ge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGZvciAobGV0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG5cdFx0Y29uc3QgYWNjZXB0ID0gYXdhaXQgYWN0aW9uLmFjY2VwdChkYXRhKTtcblx0XHRpZiAoYWNjZXB0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSAoYXdhaXQgYWN0aW9uLmV4ZWN1dGUoZGF0YSkpIHx8IG5ldyBTdWJtaXRBY3Rpb25SZXN1bHQoYWN0aW9uLCBBQ1RJT05fU1VCTUlUX1NUQVRFX1NVQ0NFU1MpO1xuXHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdGF0ZSA9PSBBQ1RJT05fU1VCTUlUX1NUQVRFX0ZBSUwpIHJldHVybiByZXN1bHRzO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXN1bHRzLnB1c2gobmV3IFN1Ym1pdEFjdGlvblJlc3VsdChhY3Rpb24sIEFDVElPTl9TVUJNSVRfU1RBVEVfRkFJTCwgZSkpO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRV9GT1JNO1xuXHR9XG5cblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cdCNzdGF0ZSA9IEZPUk1TVEFURV9JTklUO1xuXHQjcGFnZXM7XG5cdCN2YWx1ZSA9IG5ldyBNYXAoKTtcblx0I2RhdGEgPSB7fTtcblx0I3ZhbGlkYXRpb24gPSBudWxsO1xuXHQjaGFzTmV4dFZhbGlkYXRpb24gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnJvb3Q7XG5cdFx0cm9vdC5vbihFVkVOVF9QQUdFX0lOSVRJQUxJWkVELCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblxuXHRcdHJvb3Qub24oRVZFTlRfUEFHRV9SRU1PVkVELCAoZXZlbnQpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2UgPSBldmVudC50YXJnZXQ7XG5cdFx0XHR0aGlzLiNwYWdlcyA9IG51bGw7XG5cdFx0XHR0aGlzLmNoaWxkVmFsdWVDaGFuZ2VkKHBhZ2UsIG51bGwpO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnJlYWR5LnRoZW4oKCkgPT4gdGhpcy50cmlnZ2VyKEVWRU5UX0lOSVRJQUxJWkVEKSk7XG5cdH1cblxuXHRhc3luYyBpbml0KCkge1xuXHRcdGF3YWl0IHN1cGVyLmluaXQoKTtcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XG5cdFx0XHR0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2VJbmRleCA9IC0xO1xuXG5cdFx0XHR0aGlzLnN0YXRlID0gRk9STVNUQVRFX0lOSVQ7XG5cblx0XHRcdHRoaXMudXNlU3VtbWFyeVBhZ2UgPSB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfVVNFX1NVTU1BUllfUEFHRSk7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGFnZUluZGV4ID0gLTE7XG5cdFx0XHRpZiAodGhpcy5wYWdlcy5sZW5ndGggPiAwKSB0aGlzLnRvTmV4dFBhZ2UoKTtcdFx0XHRcblx0XHR9XG5cdH1cblxuXHRnZXQgcGFnZXMoKSB7XG5cdFx0aWYgKCF0aGlzLiNwYWdlcykgdGhpcy4jcGFnZXMgPSBBcnJheS5mcm9tKHRoaXMucm9vdC5maW5kKE5PREVOQU1FX1BBR0UpKTtcblxuXHRcdHJldHVybiB0aGlzLiNwYWdlcztcblx0fVxuXG5cdGdldCBzdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jc3RhdGU7XG5cdH1cblxuXHRzZXQgc3RhdGUoc3RhdGUpIHtcblx0XHRjb25zdCBhY3R1YWwgPSB0aGlzLiNzdGF0ZTtcblx0XHRpZiAoc3RhdGUgIT0gRk9STVNUQVRFX1ZBTElEQVRJTkcpIHtcblx0XHRcdGlmIChhY3R1YWwgPT0gRk9STVNUQVRFX0lOUFVUICYmIHN0YXRlICE9IEZPUk1TVEFURV9JTlBVVCkgcmVhZG9ubHkodGhpcywgdHJ1ZSk7XG5cdFx0XHRlbHNlIGlmIChhY3R1YWwgIT0gRk9STVNUQVRFX0lOUFVUICYmIHN0YXRlID09IEZPUk1TVEFURV9JTlBVVCkge1xuXHRcdFx0XHRyZWFkb25seSh0aGlzLCBmYWxzZSk7XG5cdFx0XHRcdGlmICh0aGlzLmFjdGl2ZVBhZ2UpIHRoaXMuYWN0aXZlUGFnZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLiNzdGF0ZSA9IHN0YXRlO1xuXG5cdFx0aWYgKGFjdHVhbCAhPSBzdGF0ZSkgdGhpcy50cmlnZ2VyKEVWRU5UX0ZPUk1fU1RBVEVfQ0hBTkdFRCk7XG5cdFx0dGhpcy5hdHRyKEFUVFJJQlVURV9TVEFURSwgc3RhdGUpO1xuXHR9XG5cblx0Z2V0IHZhbGlkKCkge1xuXHRcdGZvciAobGV0IHBhZ2Ugb2YgdGhpcy5wYWdlcykgaWYgKHBhZ2UuY29uZGl0aW9uICYmICFwYWdlLnZhbGlkKSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGFzeW5jIHZhbHVlKGRhdGEpIHtcblx0XHRhd2FpdCB0aGlzLnJlYWR5O1xuXHRcdGlmICh0aGlzLiN2YWxpZGF0aW9uKSBhd2FpdCB0aGlzLiN2YWxpZGF0aW9uO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHJldHVybiB0aGlzLiNkYXRhO1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUgPT0gRk9STVNUQVRFX0lOUFVUKSB7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnBhZ2VzLm1hcChwYWdlID0+IHtcdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBuYW1lID0gcGFnZS5uYW1lO1xuXHRcdFx0XHRyZXR1cm4gbmFtZSA/IHBhZ2UudmFsdWUodmFsdWVIZWxwZXIoZGF0YSwgbmFtZSkpIDogcGFnZS52YWx1ZShkYXRhKTtcblx0XHRcdH0pKTtcblxuXHRcdFx0YXdhaXQgdGhpcy4jdmFsaWRhdGUoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBoYW5kbGUgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZU9uKGhhbmRsZSwgRVZFTlRfRk9STV9TVEFURV9DSEFOR0VEKTtcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMudmFsdWUoZGF0YSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub24oRVZFTlRfRk9STV9TVEFURV9DSEFOR0VELCBoYW5kbGUpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgYWN0aXZlUGFnZSgpIHtcblx0XHRpZiAoMCA8PSB0aGlzLmFjdGl2ZVBhZ2VJbmRleCAmJiB0aGlzLmFjdGl2ZVBhZ2VJbmRleCA8IHRoaXMucGFnZXMubGVuZ3RoKSByZXR1cm4gdGhpcy5wYWdlc1t0aGlzLmFjdGl2ZVBhZ2VJbmRleF07XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHNldCBhY3RpdmVQYWdlKHBhZ2UpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmVQYWdlO1xuXHRcdGlmIChwYWdlICE9IGN1cnJlbnQgfHwgdGhpcy5zdGF0ZSAhPSBGT1JNU1RBVEVfSU5QVVQpIHtcblx0XHRcdGlmIChjdXJyZW50KSBjdXJyZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5hY3RpdmVQYWdlSW5kZXggPSB0aGlzLnBhZ2VzLmluZGV4T2YocGFnZSk7XG5cdFx0XHRwYWdlLmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSAhPSBGT1JNU1RBVEVfSU5QVVQpIHRoaXMuc3RhdGUgPSBGT1JNU1RBVEVfSU5QVVQ7XG5cblx0XHRcdHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcblx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9TSVRFX0NIQU5HRUQpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwcmV2UGFnZSgpIHtcblx0XHRyZXR1cm4gKGFzeW5jICgpID0+IHtcdFx0XHRcblx0XHRcdGNvbnN0IHBhZ2VzID0gdGhpcy5wYWdlcztcblx0XHRcdGNvbnN0IHN0YXJ0ID0gdGhpcy5hY3RpdmVQYWdlSW5kZXggLSAxO1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudmFsdWUoKTtcblx0XHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0Y29uc3QgcGFnZSA9IHBhZ2VzW2ldO1xuXHRcdFx0XHRhd2FpdCBwYWdlLnZhbGlkYXRlKGRhdGEpO1xuXHRcdFx0XHRpZiAocGFnZS5jb25kaXRpb24pIHJldHVybiBwYWdlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9KSgpO1xuXHR9XG5cblx0Z2V0IG5leHRQYWdlKCkge1xuXHRcdHJldHVybiAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZXMgPSB0aGlzLnBhZ2VzO1xuXHRcdFx0Y29uc3Qgc3RhcnQgPSB0aGlzLmFjdGl2ZVBhZ2VJbmRleCArIDE7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy52YWx1ZSgpO1xuXHRcdFx0aWYgKHBhZ2VzKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGFnZSA9IHBhZ2VzW2ldO1xuXHRcdFx0XHRcdGF3YWl0IHBhZ2UudmFsaWRhdGUoZGF0YSk7XG5cdFx0XHRcdFx0aWYgKHBhZ2UuY29uZGl0aW9uKSByZXR1cm4gcGFnZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSkoKTtcblx0fVxuXG5cdGFzeW5jIHRvUHJldlBhZ2UoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUgIT0gRk9STVNUQVRFX0lOUFVUKSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gRk9STVNUQVRFX0lOUFVUO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwcmV2ID0gYXdhaXQgdGhpcy5wcmV2UGFnZTtcblx0XHRcdGlmIChwcmV2KSB0aGlzLmFjdGl2ZVBhZ2UgPSBwcmV2O1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHRvTmV4dFBhZ2UoKSB7XG5cdFx0Y29uc3QgbmV4dCA9IGF3YWl0IHRoaXMubmV4dFBhZ2U7XG5cdFx0aWYgKG5leHQpIHtcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IG5leHQ7XG5cdFx0XHR0aGlzLnN0YXRlID0gRk9STVNUQVRFX0lOUFVUO1xuXHRcdH0gZWxzZSBpZiAodGhpcy51c2VTdW1tYXJ5UGFnZSkge1xuXHRcdFx0dGhpcy5zdW1tYXJ5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgc3VtbWFyeSgpIHtcblx0XHR0aGlzLnN0YXRlID0gRk9STVNUQVRFX1NVTU1BUlk7XG5cdH1cblxuXHRnZXQgc3VibWl0QWN0aW9ucygpIHtcblx0XHRsZXQgYWN0aW9ucyA9IF9zdWJtaXRBY3Rpb25zKHRoaXMpO1xuXHRcdGlmICghYWN0aW9ucykge1xuXHRcdFx0YWN0aW9ucyA9IFtdO1xuXHRcdFx0bGV0IGVuZHBvaW50ID0gdGhpcy5hdHRyKEFUVFJJQlVURV9FTkRQT0lOVCk7XG5cdFx0XHRpZiAoZW5kcG9pbnQpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gdGhpcy5hdHRyKEFUVFJJQlVURV9NRVRIT0QpIHx8IFwicG9zdFwiO1xuXHRcdFx0XHR0aGlzLmFwcGVuZChuZXcgRGVmYXVsdEZvcm1TdWJtaXRBY3Rpb24oZW5kcG9pbnQsIG1ldGhvZCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjaGlsZHMgPSB0aGlzLmNoaWxkcmVuO1xuXHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG5cdFx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIEJhc2VTdWJtaXRBY3Rpb24pIGFjdGlvbnMucHVzaChjaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRfc3VibWl0QWN0aW9ucyh0aGlzLCBhY3Rpb25zKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWN0aW9ucztcblx0fVxuXG5cdGFzeW5jIHN1Ym1pdCgpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy52YWx1ZSgpO1xuXHRcdGNvbnN0IHZhbGlkID0gYXdhaXQgdmFsaWRhdGVGaWVsZHMoZGF0YSwgdGhpcy5wYWdlcyk7XG5cdFx0aWYgKCF2YWxpZCkgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfSU5QVVRfTU9ERV9BRlRFUl9TVUJNSVQpKSB0aGlzLnN0YXRlID0gRk9STVNUQVRFX0ZJTklTSEVEO1xuXG5cdFx0Y29uc3QgYWN0aW9ucyA9IHRoaXMuc3VibWl0QWN0aW9ucztcblx0XHRpZiAoYWN0aW9ucykge1xuXHRcdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGV4ZWN1dGVBY3Rpb25zKGFjdGlvbnMsIGRhdGEpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKEVWRU5UX1NVQk1JVF9SRVNVTFRTLCByZXN1bHRzKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoRVZFTlRfU1VCTUlULCBkYXRhKTtcblx0fVxuXG5cdCN2YWxpZGF0ZShwYWdlKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUgPT0gRk9STVNUQVRFX0lOUFVUKSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gRk9STVNUQVRFX1ZBTElEQVRJTkc7XG5cdFx0XHRyZXR1cm4gKHRoaXMuI3ZhbGlkYXRpb24gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZWQpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IHRoaXMuI2RhdGE7Ly9hd2FpdCBmaWVsZFZhbHVlTWFwVG9PYmplY3QodGhpcy4jdmFsdWUpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNvbnN0IHZhbGlkID0gcGFnZSA/IHBhZ2UudmFsaWRhdGUoZGF0YSkgOiBhd2FpdCB2YWxpZGF0ZUZpZWxkcyhkYXRhLCB0aGlzLnBhZ2VzKTtcblxuXHRcdFx0XHRcdGlmICghdGhpcy4jaGFzTmV4dFZhbGlkYXRpb24pIHRoaXMuc3RhdGUgPSBGT1JNU1RBVEVfSU5QVVQ7XG5cblx0XHRcdFx0XHR0aGlzLnZhbGlkYXRpb24gPSBudWxsO1xuXHRcdFx0XHRcdHJlc29sdmVkKHZhbGlkKTtcblx0XHRcdFx0fSwgMTApO1xuXHRcdFx0fSkpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSBGT1JNU1RBVEVfVkFMSURBVElORykge1xuXHRcdFx0dGhpcy4jdmFsaWRhdGlvbi50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdFx0dGhpcy4jaGFzTmV4dFZhbGlkYXRpb24gPSBmYWxzZTtcblx0XHRcdFx0YXdhaXQgdGhpcy4jdmFsaWRhdGUocGFnZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBjaGlsZFZhbHVlQ2hhbmdlZChmaWVsZCwgdmFsdWUpIHtcblx0XHRhd2FpdCB0aGlzLnJlYWR5O1x0XHRcblx0XHR2YWx1ZSA9IGF3YWl0IHZhbHVlO1xuXHRcdGNvbnN0IG1hcCA9IHRoaXMuI3ZhbHVlO1xuXHRcdC8vY29uc29sZS5sb2coYGZvcm0uY2hpbGRWYWx1ZUNoYW5nZWQoJHtmaWVsZC5uYW1lfSlgLCB7IGZpZWxkLCB2YWx1ZSB9KTtcblx0XHRpZiAoZmllbGQpIHtcblx0XHRcdGlmIChub1ZhbHVlKHZhbHVlKSkgbWFwLmRlbGV0ZShmaWVsZCk7XG5cdFx0XHRlbHNlIG1hcC5zZXQoZmllbGQsIHZhbHVlKTtcblx0XHR9XG5cblx0XHR0aGlzLiNkYXRhID0gYXdhaXQgZmllbGRWYWx1ZU1hcFRvT2JqZWN0KHRoaXMuI3ZhbHVlLCB0aGlzLnBhZ2VzKTtcblxuXHRcdGNvbnN0IGFjdGl2ZVBhZ2UgPSB0aGlzLmFjdGl2ZVBhZ2U7XG5cdFx0aWYgKGFjdGl2ZVBhZ2UpIGF3YWl0IHRoaXMuI3ZhbGlkYXRlKGFjdGl2ZVBhZ2UpO1xuXHRcdGVsc2UgYXdhaXQgdGhpcy4jdmFsaWRhdGUoKTtcblx0fVxufVxuZGVmaW5lKEZvcm0pO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCB7IE5PREVOQU1FX0ZPUk0sIEFUVFJJQlVURV9BQ1RJVkUsIEFUVFJJQlVURV9ESVNBQkxFRCB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfQUNUSVZFLCBBVFRSSUJVVEVfRElTQUJMRURdO1xuXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHQjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0I2Zvcm07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0aWYgKHRoaXMuYWN0aXZlICYmICF0aGlzLmRpc2FibGVkKSB0aGlzLmV4ZWN1dGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHRcdGlmICh0aGlzLiNpbml0aWFsaXplZCkge1xuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRnZXQgZm9ybSgpIHtcblx0XHRpZiAoIXRoaXMuI2Zvcm0pXG5cdFx0XHR0aGlzLiNmb3JtID0gdGhpcy5wYXJlbnQoTk9ERU5BTUVfRk9STSk7XG5cblx0XHRyZXR1cm4gdGhpcy4jZm9ybTtcblx0fVxuXG5cdGdldCBhY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9BQ1RJVkUpO1xuXHR9XG5cblx0c2V0IGFjdGl2ZShhY3RpdmUpIHtcblx0XHR0aGlzLmF0dHIoQVRUUklCVVRFX0FDVElWRSwgYWN0aXZlID8gXCJcIiA6IG51bGwpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfRElTQUJMRUQpO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG5cdFx0dGhpcy5hdHRyKEFUVFJJQlVURV9ESVNBQkxFRCwgZGlzYWJsZWQgPyBcIlwiIDogbnVsbCk7XG5cdH1cblxuXHRleGVjdXRlKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiZXhlY3V0ZVwiKTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgRm9ybUJ1dHRvbjtcbiIsImltcG9ydCB7IE5PREVOQU1FX0xJU1QsIE5PREVOQU1FX0xJU1RfUk9XUywgTk9ERU5BTUVfTElTVF9ST1csIE5PREVOQU1FX0xJU1RfQUREX1JPVywgTk9ERU5BTUVfTElTVF9ERUxFVEVfUk9XLCBFVkVOVF9GSUVMRF9JTklUSUFMSVpFRCwgRVZFTlRfTElTVF9ST1dfQURELCBFVkVOVF9MSVNUX1JPV19ERUxFVEUsIEFUVFJJQlVURV9NSU4sIEFUVFJJQlVURV9NQVggfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IHRyZWVGaWx0ZXIgfSBmcm9tIFwiLi91dGlscy9Ob2RlSGVscGVyXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xuaW1wb3J0IEJhc2VGaWVsZCwgeyBfdmFsdWUgfSBmcm9tIFwiLi9CYXNlRmllbGRcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vbGlzdC9Sb3dcIjtcbmltcG9ydCBBZGRSb3csIHtFVkVOVF9fSU5JVElBTElaRURfX0JVVFRPTl9fQUREUk9XfSBmcm9tIFwiLi9saXN0L0FkZFJvd1wiO1xuaW1wb3J0IFwiLi9saXN0L0RlbGV0ZVJvd1wiO1xuaW1wb3J0IFwiLi9saXN0L1Jvd3NcIjtcbmltcG9ydCB7IHZhbGlkYXRlRmllbGRzIH0gZnJvbSBcIi4vdXRpbHMvVmFsaWRhdGlvbkhlbHBlclwiO1xuaW1wb3J0IHsgbm9WYWx1ZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9WYWx1ZUhlbHBlclwiO1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW0FUVFJJQlVURV9NSU4sIEFUVFJJQlVURV9NQVhdO1xuXG5jb25zdCBidWlsZERhdGEgPSBhc3luYyAocm93cywgdmFsdWVzKSA9PiB7XG5cdGxldCBkYXRhID0gW107XG5cdGZvciAobGV0IHJvdyBvZiByb3dzKSBkYXRhLnB1c2godmFsdWVzLmdldChyb3cpKTtcblxuXHRpZiAoZGF0YS5sZW5ndGggPT0gMCkgZGF0YSA9IG51bGw7XG5cblx0cmV0dXJuIGRhdGE7XG59O1xuXG5jbGFzcyBMaXN0IGV4dGVuZHMgQmFzZUZpZWxkIHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVMuY29uY2F0KEJhc2VGaWVsZC5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuXHR9XG5cblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcblx0XHRyZXR1cm4gTk9ERU5BTUVfTElTVDtcblx0fVxuXG5cdCN0ZW1wbGF0ZTtcblx0I2NvbnRhaW5lcjtcblx0I3ZhbHVlcyA9IG5ldyBNYXAoKTtcblx0I2FkZFJvd0J1dHRvbjtcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHN1cGVyKG9wdGlvbnMpO1xuXG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucm9vdDtcblx0XHRyb290Lm9uKEVWRU5UX19JTklUSUFMSVpFRF9fQlVUVE9OX19BRERST1csIChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy4jYWRkUm93QnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSk7XG5cblxuXHRcdHJvb3Qub24oRVZFTlRfRklFTERfSU5JVElBTElaRUQsIChldmVudCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0aWYodGFyZ2V0ICE9IHRoaXMpe1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJvb3Qub24oRVZFTlRfTElTVF9ST1dfQURELCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Y29uc3QgeyByZWFkb25seSB9ID0gdGhpcztcblx0XHRcdGlmICghcmVhZG9ubHkpIHRoaXMuY3JlYXRlUm93KCk7XG5cdFx0fSk7XG5cblx0XHRyb290Lm9uKEVWRU5UX0xJU1RfUk9XX0RFTEVURSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdGNvbnN0IHsgcm93cywgcmVhZG9ubHkgfSA9IHRoaXM7XG5cdFx0XHRpZiAoIXJlYWRvbmx5KSB7XG5cdFx0XHRcdGNvbnN0IHJvdyA9IGV2ZW50LnRhcmdldC5wYXJlbnQoTk9ERU5BTUVfTElTVF9ST1cpO1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IHJvd3MuaW5kZXhPZihyb3cpO1xuXHRcdFx0XHRpZiAoaW5kZXggPj0gMCkge1xuXHRcdFx0XHRcdHJvdy5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hZGRWYWxpZGF0aW9uKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHsgcm93cywgbWluLCBtYXgsIHJlYWRvbmx5IH0gPSB0aGlzO1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gcm93cy5sZW5ndGg7XG5cdFx0XHRpZiAodGhpcy4jYWRkUm93QnV0dG9uICYmICFyZWFkb25seSkge1xuXHRcdFx0XHRpZiAobGVuZ3RoID09IG1heCkgdGhpcy4jYWRkUm93QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0ZWxzZSBpZiAobGVuZ3RoIDwgbWF4KSB0aGlzLiNhZGRSb3dCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtaW4gPD0gbGVuZ3RoICYmIGxlbmd0aCA8PSBtYXg7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmFkZFZhbGlkYXRpb24oYXN5bmMgKGRhdGEpID0+IHtcblx0XHRcdHJldHVybiBhd2FpdCB2YWxpZGF0ZUZpZWxkcyhkYXRhLCB0aGlzLnJvd3MpO1xuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHtcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XG5cdFx0aWYgKCF0aGlzLiNpbml0aWFsaXplZCkge1x0XHRcdFxuXHRcdFx0dGhpcy4jaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0Y29uc3Qgcm93VGVtcGxhdGUgPSB0aGlzLmZpbmQoXCJ0ZW1wbGF0ZVwiKS5maXJzdCgpO1xuXHRcdFx0aWYocm93VGVtcGxhdGUpXG5cdFx0XHRcdHRoaXMuI3RlbXBsYXRlID0gcm93VGVtcGxhdGUuY29udGVudDtcblxuXHRcdFx0dGhpcy4jY29udGFpbmVyID0gdGhpcy5maW5kKE5PREVOQU1FX0xJU1RfUk9XUykuZmlyc3QoKTtcblx0XHR9XG5cdH1cblxuXHRyZWFkb25seVVwZGF0ZWQoKSB7XG5cdFx0Y29uc3QgeyByZWFkb25seSB9ID0gdGhpcztcblx0XHRmb3IgKGxldCByb3cgb2YgdGhpcy5yb3dzKSB7XG5cdFx0XHRyb3cucmVhZG9ubHkgPSByZWFkb25seTtcblx0XHR9XG5cdH1cblxuXHRnZXQgcm93cygpIHtcblx0XHRpZih0aGlzLiNjb250YWluZXIpXG5cdFx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNjb250YWluZXIuY2hpbGRyZW4pO1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldCBtaW4oKSB7XG5cdFx0aWYgKHRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9NSU4pKSByZXR1cm4gTWF0aC5tYXgoMCwgcGFyc2VJbnQodGhpcy5hdHRyKEFUVFJJQlVURV9NSU4pKSk7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRnZXQgbWF4KCkge1xuXHRcdGlmICh0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfTUFYKSkgcmV0dXJuIHBhcnNlSW50KHRoaXMuYXR0cihBVFRSSUJVVEVfTUFYKSk7XG5cdFx0cmV0dXJuIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXHR9XG5cblx0YWNjZXB0VmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG5cdH1cblxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSA/IHZhbHVlLmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKSA6IG51bGw7XG5cdH1cblxuXHRhc3luYyBjcmVhdGVSb3codmFsdWUpIHtcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMuI3RlbXBsYXRlLCB0cnVlKS5jaGlsZHJlblswXTtcblx0XHRhd2FpdCB0aGlzLiNjb250YWluZXIuYXBwZW5kKHJvdyk7XG5cblx0XHRpZiAodmFsdWUpIGF3YWl0IHJvdy52YWx1ZSh2YWx1ZSk7XG5cblx0XHRyZXR1cm4gcm93O1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlZFZhbHVlKHZhbHVlcykge1xuXHRcdHRoaXMuI3ZhbHVlcy5jbGVhcigpO1xuXHRcdHRoaXMuI2NvbnRhaW5lci5lbXB0eSgpO1xuXHRcdGlmICh2YWx1ZXMpIGF3YWl0IFByb21pc2UuYWxsKHZhbHVlcy5tYXAodmFsdWUgPT4gdGhpcy5jcmVhdGVSb3codmFsdWUpKSk7XG5cblx0XHRyZXR1cm4gYXdhaXQgYnVpbGREYXRhKHRoaXMucm93cywgdGhpcy4jdmFsdWVzKTtcblx0fVxuXG5cdGFzeW5jIGNoaWxkVmFsdWVDaGFuZ2VkKHJvdywgdmFsdWUpIHtcblx0XHR2YWx1ZSA9IGF3YWl0IHZhbHVlO1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuI3ZhbHVlcztcblxuXHRcdGlmIChub1ZhbHVlKHZhbHVlKSkgdGhpcy4jdmFsdWVzLmRlbGV0ZShyb3cpO1xuXHRcdGVsc2UgdGhpcy4jdmFsdWVzLnNldChyb3csIHZhbHVlKTtcblxuXHRcdGF3YWl0IHN1cGVyLmNoaWxkVmFsdWVDaGFuZ2VkKHJvdywgdmFsdWUpO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBidWlsZERhdGEodGhpcy5yb3dzLCB2YWx1ZXMpO1xuXHRcdGF3YWl0IHRoaXMucHVibGlzaFZhbHVlKGRhdGEpO1xuXHR9XG59XG5cbmRlZmluZShMaXN0KTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQge0V4cHJlc3Npb25SZXNvbHZlcn0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XG5pbXBvcnQge0NvbXBvbmVudCwgZGVmaW5lfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgXG5cdE5PREVOQU1FX01FU1NBR0UsXG5cdEVWRU5UX01FU1NBR0VfSU5JVElBTElaRUQsXG5cdEVWRU5UX01FU1NBR0VfUkVNT1ZFRFxufSBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9BQ1RJVkUgPSBcImFjdGl2ZVwiO1xuZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9DT05ESVRJT04gPSBcImNvbmRpdGlvblwiO1xuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfQUNUSVZFLCBBVFRSSUJVVEVfQ09ORElUSU9OXTtcblxuXG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX01FU1NBR0U7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHtcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XG5cdFx0dGhpcy50cmlnZ2VyKEVWRU5UX01FU1NBR0VfSU5JVElBTElaRUQpO1xuXHR9XG5cblx0YXN5bmMgZGVzdHJveSgpe1xuXHRcdHRoaXMudHJpZ2dlcihFVkVOVF9NRVNTQUdFX1JFTU9WRUQpO1xuXHRcdGF3YWl0IHN1cGVyLmRlc3Ryb3koKTtcblx0fVxuXG5cdGdldCBhY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9BQ1RJVkUpO1xuXHR9XG5cdHNldCBhY3RpdmUoYWN0aXZlKSB7XG5cdFx0YWN0aXZlID8gdGhpcy5hdHRyKEFUVFJJQlVURV9BQ1RJVkUsIFwiXCIpIDogdGhpcy5hdHRyKEFUVFJJQlVURV9BQ1RJVkUsIHVuZGVmaW5lZCk7XG5cdH1cblxuXHRnZXQgY29uZGl0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUklCVVRFX0NPTkRJVElPTik7XG5cdH1cblxuXHRhc3luYyB1cGRhdGUoZGF0YSkge1xuXHRcdGF3YWl0IHRoaXMucmVhZHk7XG5cdFx0dGhpcy5hY3RpdmUgPSBhd2FpdCBFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZSh0aGlzLmNvbmRpdGlvbiwgZGF0YSwgZmFsc2UpO1xuXHR9XG59XG5kZWZpbmUoTWVzc2FnZSk7XG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIiwiaW1wb3J0IHsgXG5cdE5PREVOQU1FX1BBR0UsICBcblx0QVRUUklCVVRFX1NURVAsIFxuXHRFVkVOVF9QQUdFX0lOSVRJQUxJWkVELFxuXHRFVkVOVF9QQUdFX1JFTU9WRURcbn0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfU1RFUF07XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb250YWluZXIge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUy5jb25jYXQoQ29udGFpbmVyLm9ic2VydmVkQXR0cmlidXRlcyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRV9QQUdFO1xuXHR9XG5cdFxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0dGhpcy5yZWFkeS50aGVuKCgpID0+IHRoaXMudHJpZ2dlcihFVkVOVF9QQUdFX0lOSVRJQUxJWkVEKSk7XG5cdH1cblxuXHRhc3luYyBkZXN0cm95KCl7XG5cdFx0dGhpcy50cmlnZ2VyKEVWRU5UX1BBR0VfUkVNT1ZFRCk7XG5cdFx0YXdhaXQgc3VwZXIuZGVzdHJveSgpO1xuXHR9XG5cblx0Z2V0IHN0ZXAoKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJJQlVURV9TVEVQKTtcblx0fVxuXHRcblx0Y29uZGl0aW9uVXBkYXRlZCgpe31cbn1cbmRlZmluZShQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQgeyBcblx0Tk9ERU5BTUVfRk9STSwgXG5cdE5PREVOQU1FX1BST0dFU1NCQVIsXG5cdE5PREVOQU1FX1NURVAsXG5cdEVWRU5UX1NJVEVfQ0hBTkdFRCxcblx0RVZFTlRfRk9STV9TVEFURV9DSEFOR0VELFxuXHRFVkVOVF9QUk9HUkVTU0JBUl9DSEFOR0VELFxuXHRGT1JNU1RBVEVfSU5JVCxcblx0Rk9STVNUQVRFX1ZBTElEQVRJTkcsXG5cdEZPUk1TVEFURV9JTlBVVCxcblx0Rk9STVNUQVRFX1NVTU1BUlksXG5cdEZPUk1TVEFURV9GSU5JU0hFRCwgXG5cdEFUVFJJQlVURV9QUk9HUkVTUyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHtDb21wb25lbnQgLGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuL1N0ZXBcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfUFJPR1JFU1NdO1xuXG5jb25zdCBmaXJzdFN0ZXBQYWdlSW5kZXggPSAocGFnZXMsIHN0ZXAsIGFjdGl2ZVBhZ2UpID0+IHtcblx0Zm9yIChsZXQgcGFnZSBvZiBwYWdlcykge1xuXHRcdGlmIChwYWdlLnN0ZXAgPT0gc3RlcCAmJiBwYWdlLmNvbmRpdGlvbikgcmV0dXJuIHBhZ2U7XG5cdFx0ZWxzZSBpZiAocGFnZSA9PSBhY3RpdmVQYWdlKSByZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRV9QUk9HRVNTQkFSO1xuXHR9XG5cblx0I2Zvcm07XG5cdCNzdGVwcztcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vbihcImNsaWNrXCIsICh7IHRhcmdldCB9KSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMuI2Zvcm0pIHJldHVybjtcblx0XHRcdGlmICh0YXJnZXQgPT0gdGhpcykgcmV0dXJuO1x0XHRcdFxuXHRcdFx0Y29uc3Qgc3RlcCA9IHRhcmdldC5pcyhOT0RFTkFNRV9TVEVQKSA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnQoTk9ERU5BTUVfU1RFUCk7XG5cdFx0XHRjb25zdCBmb3JtID0gdGhpcy4jZm9ybTtcblxuXHRcdFx0aWYgKCFzdGVwKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHtzdGF0ZSwgcGFnZXMsIGFjdGl2ZVBhZ2V9ID0gZm9ybTtcblx0XHRcdGNvbnN0IHN0ZXBOYW1lID0gc3RlcC5uYW1lO1xuXHRcdFx0aWYgKHN0YXRlID09IEZPUk1TVEFURV9JTlBVVCB8fCBzdGF0ZSA9PSBGT1JNU1RBVEVfU1VNTUFSWSkge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gZmlyc3RTdGVwUGFnZUluZGV4KHBhZ2VzLCBzdGVwTmFtZSwgYWN0aXZlUGFnZSk7XG5cdFx0XHRcdGlmIChwYWdlKSBmb3JtLmFjdGl2ZVBhZ2UgPSBwYWdlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHtcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XG5cdFx0dGhpcy5wcm9ncmVzcyA9IDA7XG5cdFx0aWYgKCF0aGlzLiNpbml0aWFsaXplZCkge1xuXHRcdFx0Y29uc3QgZm9ybSA9IHRoaXMuI2Zvcm0gPSB0aGlzLnBhcmVudChOT0RFTkFNRV9GT1JNKTtcblx0XHRcdHRoaXMuI3N0ZXBzID0gdGhpcy5maW5kKE5PREVOQU1FX1NURVApO1xuXHRcdFx0dGhpcy4jZm9ybS5vbihbRVZFTlRfU0lURV9DSEFOR0VELEVWRU5UX0ZPUk1fU1RBVEVfQ0hBTkdFRF0sICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhdGUgPSBmb3JtLnN0YXRlO1xuXHRcdFx0XHRpZihGT1JNU1RBVEVfVkFMSURBVElORyA9PSBzdGF0ZSlcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0Y29uc3Qge2FjdGl2ZVBhZ2VJbmRleCwgYWN0aXZlUGFnZSwgcGFnZXN9ID0gZm9ybTtcblx0XHRcdFx0aWYgKCFhY3RpdmVQYWdlKSBcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0Y29uc3QgY291bnQgPSBwYWdlcy5sZW5ndGg7XG5cdFx0XHRcdGNvbnN0IHBhZ2VTdGVwID0gYWN0aXZlUGFnZSA/IGFjdGl2ZVBhZ2Uuc3RlcCA6IEZPUk1TVEFURV9JTklUO1xuXHRcdFx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGguZmxvb3IoKGFjdGl2ZVBhZ2VJbmRleCAqIDEwMCkgLyBjb3VudCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHN0ZXAubmFtZTtcblx0XHRcdFx0XHRpZiAoc3RhdGUgPT0gRk9STVNUQVRFX0lOUFVUKSB7XG5cdFx0XHRcdFx0XHRzdGVwLmFjdGl2ZSA9IG5hbWUgPT0gcGFnZVN0ZXA7XG5cdFx0XHRcdFx0XHRzdGVwLnJlYWRvbmx5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PSBGT1JNU1RBVEVfU1VNTUFSWSkge1xuXHRcdFx0XHRcdFx0c3RlcC5hY3RpdmUgPSBuYW1lID09IEZPUk1TVEFURV9TVU1NQVJZO1xuXHRcdFx0XHRcdFx0c3RlcC5yZWFkb25seSA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGVwLmFjdGl2ZSA9IG5hbWUgPT0gRk9STVNUQVRFX0ZJTklTSEVEO1xuXHRcdFx0XHRcdFx0c3RlcC5yZWFkb25seSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5wcm9ncmVzcyA9IHN0YXRlID09IEZPUk1TVEFURV9TVU1NQVJZIHx8IHN0YXRlID09IEZPUk1TVEFURV9GSU5JU0hFRCA/IDEwMCA6IHByb2dyZXNzO1xuXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihFVkVOVF9QUk9HUkVTU0JBUl9DSEFOR0VEKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHN0ZXBzKCl7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy4jc3RlcHMpO1xuXHR9XG5cblx0Z2V0IHByb2dyZXNzKCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUklCVVRFX1BST0dSRVNTKTtcblx0fVxuXG5cdHNldCBwcm9ncmVzcyhwcm9ncmVzcykge1xuXHRcdGlmICh0aGlzLnN0eWxlLnNldFByb3BlcnR5KSB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcm9ncmVzc1wiLCBwcm9ncmVzcyArIFwiJVwiKTtcblx0XHR0aGlzLmF0dHIoQVRUUklCVVRFX1BST0dSRVNTLCBNYXRoLm1heCgwLCBNYXRoLm1pbihwcm9ncmVzcywgMTAwKSkpO1xuXHR9XG59XG5cbmRlZmluZShQcm9ncmVzc0Jhcik7XG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCB7IFxuXHROT0RFTkFNRV9TVEVQLCBcblx0QVRUUklCVVRFX05BTUUsIFxuXHRBVFRSSUJVVEVfQUNUSVZFLCBcblx0QVRUUklCVVRFX1JFQURPTkxZIFxufSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IHVwZGF0ZUFjdGl2ZVN0YXRlIH0gZnJvbSBcIi4vdXRpbHMvU3RhdGVIZWxwZXJcIjtcbmltcG9ydCB7Q29tcG9uZW50LCBkZWZpbmV9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbQVRUUklCVVRFX05BTUUsIEFUVFJJQlVURV9BQ1RJVkUsIEFUVFJJQlVURV9SRUFET05MWV07XG5cbmNsYXNzIFN0ZXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX1NURVA7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cbiAgICBnZXQgbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyKEFUVFJJQlVURV9OQU1FKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQVRUUklCVVRFX0FDVElWRSk7XG5cdH1cblxuXHRzZXQgYWN0aXZlKGFjdGl2ZSkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmFjdGl2ZTtcblx0XHRpZiAoY3VycmVudCAhPSBhY3RpdmUpIHtcblx0XHRcdHVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMsIGFjdGl2ZSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHJlYWRvbmx5KCkge1xuXHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfUkVBRE9OTFkpO1xuXHR9XG5cblx0c2V0IHJlYWRvbmx5KHJlYWRvbmx5KSB7XG5cdFx0cmVhZG9ubHkgPyB0aGlzLmF0dHIoQVRUUklCVVRFX1JFQURPTkxZLCBcIlwiKSA6IHRoaXMuYXR0cihBVFRSSUJVVEVfUkVBRE9OTFksIG51bGwpO1xuXHR9XG59XG5cbmRlZmluZShTdGVwKTtcbmV4cG9ydCBkZWZhdWx0IFN0ZXA7XG4iLCJpbXBvcnQgeyBcblx0Tk9ERU5BTUVfVkFMSURBVElPTixcblx0RVZFTlRfVkFMSURBVElPTl9JTklUSUFMSVpFRCxcblx0RVZFTlRfVkFMSURBVElPTl9SRU1PVkVELFxuXHRBVFRSSUJVVEVfQUNUSVZFLFxuXHRBVFRSSUJVVEVfQ09ORElUSU9OXG59IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHtDb21wb25lbnQsIGRlZmluZX0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfQUNUSVZFLCBBVFRSSUJVVEVfQ09ORElUSU9OXTtcblxuXG5jbGFzcyBWYWxpZGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRV9WQUxJREFUSU9OO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5yZWFkeS50aGVuKCgpID0+IHRoaXMudHJpZ2dlcihFVkVOVF9WQUxJREFUSU9OX0lOSVRJQUxJWkVEKSk7XG5cdH1cblxuXHRhc3luYyBkZXN0cm95KCkge1xuXHRcdHRoaXMudHJpZ2dlcihFVkVOVF9WQUxJREFUSU9OX1JFTU9WRUQpO1xuXHRcdGF3YWl0IHN1cGVyLmRlc3Ryb3koKTtcblx0fVxuXG5cdGdldCBhY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9BQ1RJVkUpO1xuXHR9XG5cdHNldCBhY3RpdmUoYWN0aXZlKSB7XG5cdFx0YWN0aXZlID8gdGhpcy5hdHRyKEFUVFJJQlVURV9BQ1RJVkUsIFwiXCIpIDogdGhpcy5hdHRyKEFUVFJJQlVURV9BQ1RJVkUsIHVuZGVmaW5lZCk7XG5cdH1cblxuXHRnZXQgY29uZGl0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUklCVVRFX0NPTkRJVElPTik7XG5cdH1cbn1cbmRlZmluZShWYWxpZGF0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb247XG4iLCJpbXBvcnQgeyBOT0RFTkFNRV9DT05UUk9MX0JBQ0sgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gXCIuLi9Gb3JtQnV0dG9uXCI7XHJcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBBVFRSSUJVVEVTID0gW107XHJcbmNsYXNzIEJhY2tCdXR0b24gZXh0ZW5kcyBGb3JtQnV0dG9uIHtcclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuXHRcdHJldHVybiBBVFRSSUJVVEVTO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcclxuXHRcdHJldHVybiBOT0RFTkFNRV9DT05UUk9MX0JBQ0s7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRleGVjdXRlKCkge1xyXG5cdFx0dGhpcy5mb3JtLnRvUHJldlBhZ2UoKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFja0J1dHRvbjtcclxuZGVmaW5lKEJhY2tCdXR0b24pO1xyXG4iLCJpbXBvcnQgeyBOT0RFTkFNRV9DT05UUk9MX05FWFQgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gXCIuLi9Gb3JtQnV0dG9uXCI7XHJcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBBVFRSSUJVVEVTID0gW107XHJcbmNsYXNzIE5leHRCdXR0b24gZXh0ZW5kcyBGb3JtQnV0dG9uIHtcclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuXHRcdHJldHVybiBBVFRSSUJVVEVTO1xyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xyXG5cdFx0cmV0dXJuIE5PREVOQU1FX0NPTlRST0xfTkVYVDtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGV4ZWN1dGUoKSB7XHJcblx0XHR0aGlzLmZvcm0udG9OZXh0UGFnZSgpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QnV0dG9uO1xyXG5kZWZpbmUoTmV4dEJ1dHRvbik7XHJcbiIsImltcG9ydCB7IE5PREVOQU1FX0NPTlRST0xfU1VCTUlUIH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tIFwiLi4vRm9ybUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQVRUUklCVVRFUyA9IFtdO1xyXG5jbGFzcyBTdWJtaXRCdXR0b24gZXh0ZW5kcyBGb3JtQnV0dG9uIHtcclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuXHRcdHJldHVybiBBVFRSSUJVVEVTO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcclxuXHRcdHJldHVybiBOT0RFTkFNRV9DT05UUk9MX1NVQk1JVDtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0ZXhlY3V0ZSgpIHtcclxuXHRcdHRoaXMuZm9ybS5zdWJtaXQoKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QnV0dG9uO1xyXG5kZWZpbmUoU3VibWl0QnV0dG9uKTtcclxuIiwiaW1wb3J0IHsgXG5cdE5PREVOQU1FX0NPTlRST0xfU1VNTUFSWVxufSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tIFwiLi4vRm9ybUJ1dHRvblwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtdO1xuY2xhc3MgU3VtbWFyeUJ1dHRvbiBleHRlbmRzIEZvcm1CdXR0b24ge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUztcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX0NPTlRST0xfU1VNTUFSWTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblx0ZXhlY3V0ZSgpIHtcblx0XHR0aGlzLmZvcm0udG9OZXh0UGFnZSgpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5QnV0dG9uO1xuZGVmaW5lKFN1bW1hcnlCdXR0b24pO1xuIiwiaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4vQmFja0J1dHRvblwiO1xuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4vTmV4dEJ1dHRvblwiO1xuaW1wb3J0IFN1bW1hcnlCdXR0b24gZnJvbSBcIi4vU3VtbWFyeUJ1dHRvblwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcblxuZXhwb3J0IHtcblx0QmFja0J1dHRvbixcblx0TmV4dEJ1dHRvbixcblx0U3VtbWFyeUJ1dHRvbixcblx0U3VibWl0QnV0dG9uLFxufTtcbiIsImltcG9ydCB7IEFUVFJJQlVURV9DT05ESVRJT04gfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEV4cHJlc3Npb25SZXNvbHZlciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xyXG5cclxuY2xhc3MgQ29uZGl0aW9uSGFuZGxlIHtcclxuXHJcbiAgICAjYmFzZTtcclxuICAgICNjb25kaXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFzZSl7ICBcclxuICAgICAgICB0aGlzLiNiYXNlID0gYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29uZGl0aW9uKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuI2NvbmRpdGlvbilcclxuICAgICAgICAgICAgdGhpcy4jY29uZGl0aW9uID0gdGhpcy4jYmFzZS5hdHRyKEFUVFJJQlVURV9DT05ESVRJT04pIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jY29uZGl0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHZhbGlkYXRlKGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLiNiYXNlOyAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBiYXNlLmNvbmRpdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGBjb25kaXRpb24oJHtiYXNlLm5hbWV9KWAsIGNvbmRpdGlvbiwgZGF0YSk7ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjb25kaXRpb24gPSBjb25kaXRpb24gPyBhd2FpdCBFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGRhdGEsIGZhbHNlKSA6IHRydWU7XHJcbiAgICAgICAgaWYoY29uZGl0aW9uICE9IGN1cnJlbnQpXHJcbiAgICAgICAgICAgIGJhc2UuY29uZGl0aW9uID0gY29uZGl0aW9uXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYGNvbmRpdGlvbigke2Jhc2UubmFtZX0pIHJlc3VsdDpgLCBjb25kaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBjb25kaXRpb247XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25IYW5kbGU7IiwiaW1wb3J0IHsgQVRUUklCVVRFX0VESVRBQkxFX0NPTkRJVElPTiB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgRXhwcmVzc2lvblJlc29sdmVyIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XHJcblxyXG5jbGFzcyBFZGl0YWJsZUhhbmRsZSB7XHJcblx0I2Jhc2U7XHJcblx0I2NvbmRpdGlvbiA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGJhc2UpIHtcclxuXHRcdHRoaXMuI2Jhc2UgPSBiYXNlO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbmRpdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLiNjb25kaXRpb24gPT0gbnVsbClcclxuXHRcdFx0dGhpcy4jY29uZGl0aW9uID0gdGhpcy4jYmFzZS5hdHRyKEFUVFJJQlVURV9FRElUQUJMRV9DT05ESVRJT04pIHx8IFwiXCI7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuI2NvbmRpdGlvbjtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkYXRlKGRhdGEpIHtcclxuICAgICAgICBsZXQgZWRpdGFibGUgPSB0cnVlO1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuI2Jhc2UuZWRpdGFibGU7XHJcbiAgICAgICAgLypjb25zdCB7aGFzVmFsdWUsIHJlcXVpcmVkfSA9IHRoaXMuI2Jhc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWhhc1ZhbHVlICYmIHJlcXVpcmVkKVxyXG4gICAgICAgICAgICBlZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgZWxzZSovIGlmKHRoaXMuY29uZGl0aW9uKVxyXG4gICAgICAgICAgICBlZGl0YWJsZSA9IGF3YWl0IEV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlKHRoaXMuY29uZGl0aW9uLCBkYXRhLCBmYWxzZSk7XHJcblxyXG5cdFx0aWYgKGVkaXRhYmxlICE9IGN1cnJlbnQpIHRoaXMuI2Jhc2UuZWRpdGFibGUgPSBlZGl0YWJsZTtcclxuXHJcblx0XHRyZXR1cm4gZWRpdGFibGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZUhhbmRsZTtcclxuIiwiaW1wb3J0IHtcclxuICAgIEVWRU5UX01FU1NBR0VfSU5JVElBTElaRUQsIFxyXG4gICAgRVZFTlRfTUVTU0FHRV9SRU1PVkVEXHJcbn0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmNsYXNzIE1lc3NhZ2VIYW5kbGUge1xyXG5cclxuICAgICNtZXNzYWdlcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihiYXNlKXtcclxuICAgICAgICBiYXNlLm9uKEVWRU5UX01FU1NBR0VfSU5JVElBTElaRUQsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuI21lc3NhZ2VzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiYXNlLm9uKEVWRU5UX01FU1NBR0VfUkVNT1ZFRCwgKGV2ZW50KSA9PnsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy4jbWVzc2FnZXMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHZhbGlkYXRlKGRhdGEpIHtcclxuICAgICAgICBmb3IobGV0IG1lc3NhZ2Ugb2YgdGhpcy4jbWVzc2FnZXMpXHJcbiAgICAgICAgICAgIG1lc3NhZ2UudXBkYXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUhhbmRsZTsiLCJpbXBvcnQgeyBFVkVOVF9WQUxJREFUSU9OX0lOSVRJQUxJWkVELCBFVkVOVF9WQUxJREFUSU9OX1JFTU9WRUQgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEV4cHJlc3Npb25SZXNvbHZlciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZVwiO1xyXG5cclxuY29uc3QgdmFsaWRhdGVDdXN0b21WYWxpZGF0aW9ucyA9IGFzeW5jICh2YWxpZGF0aW9ucywgZGF0YSwgYmFzZSkgPT4ge1xyXG5cdGxldCB2YWxpZCA9IHRydWU7XHJcblx0Zm9yIChsZXQgY2hlY2sgb2YgdmFsaWRhdGlvbnMpIHtcclxuXHRcdGlmICghKGF3YWl0IGNoZWNrKHsgZGF0YSwgYmFzZSB9KSkpIHZhbGlkID0gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiB2YWxpZDtcclxufTtcclxuXHJcbmNsYXNzIFZhbGlkYXRpb25IYW5kbGUge1xyXG5cdCNiYXNlO1xyXG5cdCN2YWxpZGF0aW9ucyA9IG5ldyBTZXQoKTtcclxuXHQjY3VzdG9tcyA9IG5ldyBTZXQoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoYmFzZSkge1xyXG5cdFx0dGhpcy4jYmFzZSA9IGJhc2U7XHJcblx0XHRiYXNlLm9uKEVWRU5UX1ZBTElEQVRJT05fSU5JVElBTElaRUQsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0dGhpcy4jdmFsaWRhdGlvbnMuYWRkKGV2ZW50LnRhcmdldCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRiYXNlLm9uKEVWRU5UX1ZBTElEQVRJT05fUkVNT1ZFRCwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0aGlzLiN2YWxpZGF0aW9ucy5kZWxldGUoZXZlbnQudGFyZ2V0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ3VzdG9tVmFsaWRhdGlvbih2YWxpZGF0aW9uKSB7XHJcblx0XHR0aGlzLiNjdXN0b21zLmFkZCh2YWxpZGF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkYXRlKGRhdGEpIHtcclxuXHRcdGNvbnN0IGJhc2UgPSB0aGlzLiNiYXNlO1xyXG5cdFx0Y29uc3QgY3VzdG9tcyA9IHRoaXMuI2N1c3RvbXM7XHJcblx0XHRjb25zdCB2YWxpZGF0aW9ucyA9IHRoaXMuI3ZhbGlkYXRpb25zO1xyXG5cdFx0Y29uc3QgY3VycmVudFZhbGlkID0gdGhpcy4jYmFzZS52YWxpZDtcclxuXHRcdGNvbnN0IHsgaGFzVmFsdWUsIHJlcXVpcmVkLCBjb25kaXRpb24sIGVkaXRhYmxlIH0gPSB0aGlzLiNiYXNlO1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coYCR7YmFzZS5ub2RlTmFtZX0oJHtiYXNlLm5hbWV9KSB2YWxpZGF0ZTpgLCB7IGhhc1ZhbHVlLCByZXF1aXJlZCwgY29uZGl0aW9uLCBlZGl0YWJsZSwgY3VycmVudFZhbGlkIH0sIGRhdGEsIGJhc2Uubm9kZU5hbWUpO1xyXG5cdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdGlmIChjb25kaXRpb24pIHtcclxuXHRcdFx0dmFsaWQgPSByZXF1aXJlZCA/IGhhc1ZhbHVlIDogdHJ1ZTtcclxuXHJcblx0XHRcdGlmICghKGF3YWl0IHZhbGlkYXRlQ3VzdG9tVmFsaWRhdGlvbnMoY3VzdG9tcywgZGF0YSwgYmFzZSkpKSB2YWxpZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgdmFsaWRhdGlvbiBvZiB2YWxpZGF0aW9ucykge1xyXG5cdFx0XHRcdGlmICh2YWxpZCAmJiBoYXNWYWx1ZSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGVzdCA9IGF3YWl0IEV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlKHZhbGlkYXRpb24uY29uZGl0aW9uLCBkYXRhLCB0cnVlKTtcclxuXHRcdFx0XHRcdHZhbGlkYXRpb24uYWN0aXZlID0gIXRlc3Q7XHJcblx0XHRcdFx0XHRpZiAoIXRlc3QpIHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHZhbGlkYXRpb24uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRiYXNlLnZhbGlkID0gdmFsaWQ7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyhgJHtiYXNlLm5vZGVOYW1lfSgke2Jhc2UubmFtZX0pIHZhbGlkYXRlIHJlc3VsdDpgLCB7dmFsaWR9KTtcclxuXHRcdHJldHVybiB2YWxpZDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb25IYW5kbGU7XHJcbiIsImltcG9ydCB7IFxuXHROT0RFTkFNRV9MSVNUX0FERF9ST1csIFxuXHRFVkVOVF9MSVNUX1JPV19BRERcbn0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSBcIi4uL0Zvcm1CdXR0b25cIjtcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9fSU5JVElBTElaRURfX0JVVFRPTl9fQUREUk9XID0gYCR7Tk9ERU5BTUVfTElTVF9BRERfUk9XfTppbml0aWFsaXplZGA7XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXTtcbmNsYXNzIEFkZFJvdyBleHRlbmRzIEZvcm1CdXR0b24ge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gQVRUUklCVVRFUy5jb25jYXQoQVRUUklCVVRFUyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCl7XG5cdFx0cmV0dXJuIE5PREVOQU1FX0xJU1RfQUREX1JPVztcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5yZWFkeS50aGVuKCgpID0+IHRoaXMudHJpZ2dlcihFVkVOVF9fSU5JVElBTElaRURfX0JVVFRPTl9fQUREUk9XKSlcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0fVxuXG5cdGV4ZWN1dGUoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKEVWRU5UX0xJU1RfUk9XX0FERCk7XG5cdH1cbn1cblxuZGVmaW5lKEFkZFJvdyk7XG5leHBvcnQgZGVmYXVsdCBBZGRSb3c7XG4iLCJpbXBvcnQgeyBcblx0Tk9ERU5BTUVfTElTVF9ERUxFVEVfUk9XLFxuXHRFVkVOVF9MSVNUX1JPV19ERUxFVEVcbn0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSBcIi4uL0Zvcm1CdXR0b25cIjtcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXTtcblxuY2xhc3MgRGVsZXRlUm93IGV4dGVuZHMgRm9ybUJ1dHRvbiB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBBVFRSSUJVVEVTLmNvbmNhdChBVFRSSUJVVEVTKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX0xJU1RfREVMRVRFX1JPVztcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhc3luYyBpbml0KCl7XG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xuXHRcdHRoaXMuYWN0aXZlXHQ9IHRydWU7XG5cdH1cblxuXHRleGVjdXRlKCkge1xuXHRcdHRoaXMudHJpZ2dlcihFVkVOVF9MSVNUX1JPV19ERUxFVEUpO1xuXHR9XG59XG5cbmRlZmluZShEZWxldGVSb3cpO1xuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUm93O1xuIiwiaW1wb3J0IHsgXG5cdE5PREVOQU1FX0xJU1RfUk9XXG59IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL0NvbnRhaW5lclwiO1xuaW1wb3J0IERlbGV0ZVJvdyBmcm9tIFwiLi9EZWxldGVSb3dcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtdO1xuY2xhc3MgTGlzdFJvdyBleHRlbmRzIENvbnRhaW5lciB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBBVFRSSUJVVEVTLmNvbmNhdChDb250YWluZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XG5cdFx0cmV0dXJuIE5PREVOQU1FX0xJU1RfUk9XO1xuXHR9XHRcblx0XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRzdXBlcihvcHRpb25zKTtcblx0fVxuXG5cdGdldCBhY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0c2V0IGFjdGl2ZShhY3RpdmUpIHt9XG5cblx0Z2V0IGNvbmRpdGlvbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShMaXN0Um93Lk5PREVOQU1FLCBMaXN0Um93KTtcbmV4cG9ydCBkZWZhdWx0IExpc3RSb3c7XG4iLCJpbXBvcnQgeyBOT0RFTkFNRV9MSVNUX1JPV1MgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXTtcbmNsYXNzIExpc3RSb3dzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRV9MSVNUX1JPV1M7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59XG5cbmRlZmluZShMaXN0Um93cyk7XG5leHBvcnQgZGVmYXVsdCBMaXN0Um93cztcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBwcml2YXRlUHJvcGVydHlBY2Nlc3NvciB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgRXhwcmVzc2lvblJlc29sdmVyIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlXCI7XHJcbmltcG9ydCBTdWJtaXRBY3Rpb25SZXN1bHQsIHsgU1RBVEVfRkFJTCB9IGZyb20gXCIuL1N1Ym1pdEFjdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBFVkVOVF9JTklUSUFMSVpFX1NVQk1JVF9BQ1RJT04sIE5PREVOQU1FX0ZPUk0sIEFUVFJJQlVURV9DT05ESVRJT04gfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XHJcblxyXG4vLyBwcml2YXRlIG1lbWJlclxyXG5jb25zdCBfZm9ybSA9IHByaXZhdGVQcm9wZXJ0eUFjY2Vzc29yKFwiZm9ybVwiKTtcclxuXHJcbi8vIGxvZ2ljXHJcbmNsYXNzIEJhc2VTdWJtaXRBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XHJcblx0XHRjb25zdCBmb3JtID0gdGhpcy5wYXJlbnQoTk9ERU5BTUVfRk9STSk7XHJcblx0XHRfZm9ybSh0aGlzLCBmb3JtKTtcclxuXHRcdGlmIChmb3JtKSB0aGlzLnRyaWdnZXIoRVZFTlRfSU5JVElBTElaRV9TVUJNSVRfQUNUSU9OKTtcclxuXHR9XHJcblxyXG5cdGdldCBmb3JtKCkge1xyXG5cdFx0cmV0dXJuIF9mb3JtKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgYWNjZXB0KGRhdGEgPSB7fSkge1xyXG5cdFx0Y29uc3QgY29uZGl0aW9uID0gdGhpcy5hdHRyKEFUVFJJQlVURV9DT05ESVRJT04pO1xyXG4gICAgICAgIGlmKGNvbmRpdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZGF0YSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE92ZXJyaWRlIHRoaXMgZnVuY3Rpb24hXHJcblx0ICovXHJcblx0YXN5bmMgZXhlY3V0ZShkYXRhID0ge30pIHtcclxuXHRcdHJldHVybiBuZXcgU3VibWl0QWN0aW9uUmVzdWx0KFNUQVRFX0ZBSUwsIFwibm90IGltcGxlbWVudGVkXCIpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU3VibWl0QWN0aW9uO1xyXG4iLCJpbXBvcnQge2RlZmluZX0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCYXNlU3VibWl0QWN0aW9uIGZyb20gXCIuL0Jhc2VTdWJtaXRBY3Rpb25cIjtcbmltcG9ydCBTdWJtaXRBY3Rpb25SZXN1bHQsIHsgU1RBVEVfU1VDQ0VTUywgU1RBVEVfRkFJTCB9IGZyb20gXCIuL1N1Ym1pdEFjdGlvblJlc3VsdFwiO1xuaW1wb3J0IHtOT0RFTkFNRV9TVUJNSVRfQUNUSU9OfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5cbmNvbnN0IE5PREVOQU1FID0gYCR7Tk9ERU5BTUVfU1VCTUlUX0FDVElPTn0tZGVmYXVsdGA7XG5cbmNsYXNzIERlZmF1bHRGb3JtU3VibWl0QWN0aW9uIGV4dGVuZHMgQmFzZVN1Ym1pdEFjdGlvbiB7XG5cbiAgICBzdGF0aWMgZ2V0IE5PREVOQU1FKCkgeyByZXR1cm4gTk9ERU5BTUU7fVxuXG5cblx0Y29uc3RydWN0b3IoZW5kcG9pbnQsIG1ldGhvZCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5lbmRwb2ludCA9IGVuZHBvaW50O1xuXHRcdHRoaXMubWV0aG9kID0gbWV0aG9kO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShkYXRhKSB7XHRcdFxuXHRcdGxldCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQ7XG5cdFx0ZW5kcG9pbnQgPSBhd2FpdCBFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZVRleHQoZW5kcG9pbnQsIGRhdGEsIGVuZHBvaW50KTtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGVuZHBvaW50LCBsb2NhdGlvbik7XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiB0aGlzLm1ldGhvZCxcblx0XHRcdGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcblx0XHRcdG1vZGU6IFwiY29yc1wiLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHR9KTtcdFx0XG5cdFx0XHRcblx0XHRyZXR1cm4gbmV3IFN1Ym1pdEFjdGlvblJlc3VsdCh0aGlzLCByZXNwb25zZS5vayA/IFNUQVRFX1NVQ0NFU1MgOiBTVEFURV9GQUlMLCByZXNwb25zZSk7XHRcdFxuXHR9XG59O1xuXG5kZWZpbmUoRGVmYXVsdEZvcm1TdWJtaXRBY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdEZvcm1TdWJtaXRBY3Rpb247XG4iLCJleHBvcnQgY29uc3QgU1RBVEVfU1VDQ0VTUyA9IFwic3VjY2Vzc1wiO1xuZXhwb3J0IGNvbnN0IFNUQVRFX0ZBSUwgPSBcImZhaWxcIjtcblxuY2xhc3MgU3VibWl0QWN0aW9uUmVzdWx0IHtcblxuICAgIHN0YXRpYyBnZXQgU1RBVEVfU1VDQ0VTUygpe3JldHVybiBTVEFURV9TVUNDRVNTO31cbiAgICBzdGF0aWMgZ2V0IFNUQVRFX0ZBSUwoKXtyZXR1cm4gU1RBVEVfRkFJTDt9XG5cbiAgICBjb25zdHJ1Y3RvcihhY3Rpb24sIHN0YXRlLCBtZXNzYWdlLCBkYXRhKXtcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH07ICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QWN0aW9uUmVzdWx0OyIsImltcG9ydCB7IFNQRUNJQUxWQVJTLCBOT0RFTkFNRV9MSVNUX1JPVyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IG5vVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvVmFsdWVIZWxwZXJcIjtcbmltcG9ydCB7IF92YWx1ZSB9IGZyb20gXCIuLi9CYXNlRmllbGRcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoZGF0YSwgbmFtZSwgdmFsdWUpID0+IHtcblx0aWYgKCFub1ZhbHVlKHZhbHVlKSkge1xuXHRcdGlmIChuYW1lKSB2YWx1ZUhlbHBlcihkYXRhLCBuYW1lLCB2YWx1ZSk7XG5cdFx0ZWxzZSBPYmplY3QuYXNzaWduKGRhdGEsIHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWVsZFZhbHVlTWFwVG9PYmplY3QgPSBhc3luYyAobWFwLCBmaWVsZE9yZGVyKSA9PiB7XHRcblx0Ly9jb25zb2xlLmxvZyhcImZpZWxkVmFsdWVNYXBUb09iamVjdDogXCIsIG1hcCwgZmllbGRPcmRlcik7XG5cdGxldCBkYXRhID0ge307XG5cdGlmIChmaWVsZE9yZGVyKSB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRPcmRlcikge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpZWxkLm5hbWU7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IG1hcC5nZXQoZmllbGQpO1xuXHRcdFx0ZGF0YSA9IGF3YWl0IHVwZGF0ZURhdGEoZGF0YSwgbmFtZSwgdmFsdWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKGxldCBbeyBuYW1lIH0sIHZhbHVlXSBvZiBtYXApIHtcblx0XHRcdGRhdGEgPSBhd2FpdCB1cGRhdGVEYXRhKGRhdGEsIG5hbWUsIHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWJ1aWxkRGF0YUJ5RmllbGRzID0gYXN5bmMgKGZpZWxkcykgPT4ge1xuXHRsZXQgZGF0YSA9IHt9O1xuXHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGF3YWl0IGZpZWxkLnZhbHVlKCk7XG5cdFx0aWYgKCFub1ZhbHVlKHZhbHVlKSkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpZWxkLm5hbWU7XG5cdFx0XHRkYXRhID0gYXdhaXQgdXBkYXRlRGF0YShkYXRhLCBuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25EYXRhID0gYXN5bmMgKGJhc2UpID0+IHtcblx0YXdhaXQgYmFzZS5yZWFkeTtcblx0Y29uc3QgZGF0YSA9IHt9O1xuXHRkYXRhW1NQRUNJQUxWQVJTLkNVUlJFTlRWQUxVRV0gPSBfdmFsdWUoYmFzZSk7XG5cblx0bGV0IHJvdyA9IGJhc2UucGFyZW50KE5PREVOQU1FX0xJU1RfUk9XKTtcblx0bGV0IHRlbXAgPSBkYXRhO1xuXHR3aGlsZSAocm93KSB7XG5cdFx0dGVtcFtTUEVDSUFMVkFSUy5DVVJSRU5UTElTVFJPV10gPSBhd2FpdCBfdmFsdWUocm93KTtcblx0XHR0ZW1wID0gdGVtcFtTUEVDSUFMVkFSUy5DVVJSRU5UTElTVFJPV107XG5cdFx0cm93ID0gcm93LnBhcmVudChOT0RFTkFNRV9MSVNUX1JPVyk7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IE5BTUVfU1BMSVRURVIgPSAvXFwuL2c7XG5leHBvcnQgY29uc3QgdmFsdWVIZWxwZXIgPSBmdW5jdGlvbiAoZGF0YSwgbmFtZSwgdmFsdWUpIHtcblx0Y29uc3QgbmFtZXMgPSBuYW1lLnNwbGl0KE5BTUVfU1BMSVRURVIpO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSByZXR1cm4gZ2V0VmFsdWUoZGF0YSwgbmFtZXMpO1xuXG5cdGNvbnN0IGRlbCA9IG5vVmFsdWUodmFsdWUpO1xuXHRpZiAobm9WYWx1ZShkYXRhKSAmJiBkZWwpIHJldHVybiBkYXRhO1xuXG5cdHJldHVybiBzZXRWYWx1ZShkZWwsIGRhdGEsIHZhbHVlLCBuYW1lcyk7XG59O1xuXG5jb25zdCBzZXRWYWx1ZSA9IChyZW1vdmUsIGRhdGEsIHZhbHVlLCBuYW1lcykgPT4ge1xuXHRpZiAobm9WYWx1ZShkYXRhKSAmJiByZW1vdmUpIHJldHVybiBudWxsO1xuXG5cdGNvbnN0IG5hbWUgPSBuYW1lcy5zaGlmdCgpO1xuXHRpZiAobmFtZXMubGVuZ3RoID09IDApIHtcblx0XHRpZiAocmVtb3ZlKSBkZWxldGUgZGF0YVtuYW1lXTtcblx0XHRlbHNlIGRhdGFbbmFtZV0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRpZiAobm9WYWx1ZShkYXRhW25hbWVdKSkgZGF0YVtuYW1lXSA9IHt9O1xuXHRcdHNldFZhbHVlKHJlbW92ZSwgZGF0YVtuYW1lXSwgdmFsdWUsIG5hbWVzKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZ2V0VmFsdWUgPSAoZGF0YSwgbmFtZXMpID0+IHtcblx0aWYgKG5vVmFsdWUoZGF0YSkpIHJldHVybiBudWxsO1xuXHRpZiAobmFtZXMubGVuZ3RoID09IDApIHJldHVybiBkYXRhO1xuXG5cdGNvbnN0IG5hbWUgPSBuYW1lcy5zaGlmdCgpO1xuXHRyZXR1cm4gZ2V0VmFsdWUoZGF0YVtuYW1lXSwgbmFtZXMpO1xufTtcbiIsImltcG9ydCB7RVZFTlRIQU5ETEVfVElNRU9VVH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiXG5cbmV4cG9ydCBjb25zdCB0b0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFyZ3VtZW50cykuam9pbihcIiBcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbWFrZUV2ZW50Q29weSA9IChldmVudCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXG4gICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgY3VycmVudFRhcmdldDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgZXhwbGljaXRPcmlnaW5hbFRhcmdldDogZXZlbnQuZXhwbGljaXRPcmlnaW5hbFRhcmdldCxcbiAgICAgICAgb3JpZ2luYWxUYXJnZXQgOiBldmVudC5vcmlnaW5hbFRhcmdldCxcbiAgICAgICAgc3JjRWxlbWVudDogZXZlbnQuc3JjRWxlbWVudCxcbiAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXBcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgdG9UaW1lb3V0SGFuZGxlID0gKGhhbmRsZSwgcHJldmVudERlZmF1bHQsIHN0b3BQcm9wYWdhdGlvbiwgdGltZW91dCkgPT4ge1xuICAgIGxldCBpZCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2ZW50ID0gdHlwZW9mIHByZXZlbnREZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgPyBwcmV2ZW50RGVmYXVsdCA6ICgpID0+IHByZXZlbnREZWZhdWx0O1xuICAgIGNvbnN0IHN0b3AgPSB0eXBlb2Ygc3RvcFByb3BhZ2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBzdG9wUHJvcGFnYXRpb24gOiAoKSA9PiBzdG9wUHJvcGFnYXRpb247XG5cbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHByZXZlbnQoZXZlbnQpKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoc3RvcChldmVudCkpXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBldmVudENvcHkgPSBtYWtlRXZlbnRDb3B5KGV2ZW50KTtcblxuICAgICAgICBpZihpZClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWQgPSBudWxsO1xuICAgICAgICAgICAgaGFuZGxlKGV2ZW50Q29weSk7XG4gICAgICAgIH0sIHRpbWVvdXQgfHwgRVZFTlRIQU5ETEVfVElNRU9VVCk7XG5cbiAgICB9XG59OyIsImltcG9ydCBCYXNlRmllbGQgZnJvbSBcIi4uL0Jhc2VGaWVsZFwiO1xuaW1wb3J0IFZhbGlkYXRpb24gZnJvbSBcIi4uL1ZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRyZWVGaWx0ZXIgPSAoeyByb290LCBmaWx0ZXIgfSkgPT4ge1xuXHRsZXQgZWxlbWVudHMgPSBbXTtcblx0cm9vdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgeyBhY2NlcHQsIHN0b3AgPSBmYWxzZSB9ID0gZmlsdGVyKGVsZW1lbnQpO1xuXG5cdFx0aWYgKGFjY2VwdCkgZWxlbWVudHMucHVzaChlbGVtZW50KTtcblxuXHRcdGlmICghc3RvcCkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdHJlZUZpbHRlcih7IHJvb3Q6IGVsZW1lbnQsIGZpbHRlciB9KTtcblx0XHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSkgZWxlbWVudHMgPSBlbGVtZW50cy5jb25jYXQocmVzdWx0KTtcblx0XHRcdGVsc2UgaWYgKHJlc3VsdCkgZWxlbWVudHMucHVzaChyZXN1bHQpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRGaWVsZHMgPSAocm9vdCkgPT4ge1xuXHRyZXR1cm4gdHJlZUZpbHRlcih7XG5cdFx0cm9vdCxcblx0XHRmaWx0ZXI6IChlbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJhc2VGaWVsZCkgcmV0dXJuIHsgYWNjZXB0OiB0cnVlLCBzdG9wOiB0cnVlIH07XG5cdFx0XHRyZXR1cm4geyBhY2NlcHQ6IGZhbHNlIH07XG5cdFx0fSxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFZhbGlkYXRpb25zID0gKHJvb3QpID0+IHtcblx0cmV0dXJuIHRyZWVGaWx0ZXIoe1xuXHRcdHJvb3QsXG5cdFx0ZmlsdGVyOiAoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKHJvb3QgIT0gZWxlbWVudCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJhc2VGaWVsZCkgcmV0dXJuIHsgYWNjZXB0OiBmYWxzZSwgc3RvcDogdHJ1ZSB9O1xuXHRcdFx0XHRlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgVmFsaWRhdGlvbikgcmV0dXJuIHsgYWNjZXB0OiB0cnVlLCBzdG9wOiB0cnVlIH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4geyBhY2NlcHQ6IGZhbHNlIH07XG5cdFx0fSxcblx0fSk7XG59O1xuIiwiaW1wb3J0IHsgXHJcblx0RVZFTlRfVkFMSURfU1RBVEVfQ0hBTkdFRCxcclxuXHRFVkVOVF9DT05ESVRJT05fU1RBVEVfQ0hBTkdFRCxcclxuXHRFVkVOVF9BQ1RJVkVfU1RBVEVfQ0hBTkdFRCxcclxuXHRFVkVOVF9FRElUQUJMRV9TVEFURV9DSEFOR0VELFxyXG5cdEFUVFJJQlVURV9BQ1RJVkUsIFxyXG5cdEFUVFJJQlVURV9WQUxJRCwgXHJcblx0QVRUUklCVVRFX0lOVkFMSUQsIFxyXG5cdEFUVFJJQlVURV9DT05ESVRJT05fVkFMSUQsIFxyXG5cdEFUVFJJQlVURV9DT05ESVRJT05fSU5WQUxJRCwgXHJcblx0QVRUUklCVVRFX0VESVRBQkxFLCBBVFRSSUJVVEVfUkVBRE9OTFkgXHJcbn0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVZhbGlkU3RhdGUgPSAodGFyZ2V0LCB2YWxpZCkgPT4ge1xyXG5cdGlmICh0eXBlb2YgdmFsaWQgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsaWQgPT0gbnVsbCkge1xyXG5cdFx0dGFyZ2V0LmF0dHIoQVRUUklCVVRFX0lOVkFMSUQsIG51bGwpO1xyXG5cdFx0dGFyZ2V0LmF0dHIoQVRUUklCVVRFX1ZBTElELCBudWxsKTtcclxuXHR9IGVsc2UgaWYgKHZhbGlkKSB7XHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfSU5WQUxJRCwgbnVsbCk7XHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfVkFMSUQsIFwiXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfSU5WQUxJRCwgXCJcIik7XHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfVkFMSUQsIG51bGwpO1xyXG5cdH1cclxuXHJcblx0dGFyZ2V0LnRyaWdnZXIoRVZFTlRfVkFMSURfU1RBVEVfQ0hBTkdFRCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZGl0aW9uU3RhdGUgPSAodGFyZ2V0LCB2YWxpZCkgPT4ge1xyXG5cdGlmICh0eXBlb2YgdmFsaWQgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsaWQgPT0gbnVsbCkge1xyXG5cdFx0dGFyZ2V0LmF0dHIoQVRUUklCVVRFX0NPTkRJVElPTl9JTlZBTElELCBudWxsKTtcclxuXHRcdHRhcmdldC5hdHRyKEFUVFJJQlVURV9DT05ESVRJT05fVkFMSUQsIG51bGwpO1xyXG5cdH0gZWxzZSBpZiAodmFsaWQpIHtcclxuXHRcdHRhcmdldC5hdHRyKEFUVFJJQlVURV9DT05ESVRJT05fSU5WQUxJRCwgbnVsbCk7XHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfQ09ORElUSU9OX1ZBTElELCBcIlwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGFyZ2V0LmF0dHIoQVRUUklCVVRFX0NPTkRJVElPTl9WQUxJRCwgbnVsbCk7XHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfQ09ORElUSU9OX0lOVkFMSUQsIFwiXCIpO1xyXG5cdH1cclxuXHJcblx0dGFyZ2V0LnRyaWdnZXIoRVZFTlRfQ09ORElUSU9OX1NUQVRFX0NIQU5HRUQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFjdGl2ZVN0YXRlID0gKHRhcmdldCwgYWN0aXZlLCBpbml0aWFsID0gZmFsc2UpID0+IHtcclxuXHRjb25zdCBvbGRTdGF0ZSA9IHRhcmdldC5hY3RpdmU7XHJcblx0YWN0aXZlID8gdGFyZ2V0LmF0dHIoQVRUUklCVVRFX0FDVElWRSwgXCJcIikgOiB0YXJnZXQuYXR0cihBVFRSSUJVVEVfQUNUSVZFLCBudWxsKTtcclxuXHRpZiAob2xkU3RhdGUgIT0gYWN0aXZlIHx8IGluaXRpYWwpIHRhcmdldC50cmlnZ2VyKEVWRU5UX0FDVElWRV9TVEFURV9DSEFOR0VEKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWFkb25seVN0YXRlID0gKHRhcmdldCwgcmVhZG9ubHksIGluaXRpYWwgPSBmYWxzZSkgPT4ge1xyXG5cdGNvbnN0IG9sZFN0YXRlID0gdGFyZ2V0LnJlYWRvbmx5O1xyXG5cdGlmIChyZWFkb25seSkgXHJcblx0XHR0YXJnZXQuYXR0cihBVFRSSUJVVEVfUkVBRE9OTFksIFwiXCIpO1xyXG5cdGVsc2VcclxuXHRcdHRhcmdldC5hdHRyKEFUVFJJQlVURV9SRUFET05MWSwgbnVsbCk7XHJcblx0XHJcblx0aWYgKG9sZFN0YXRlICE9IHJlYWRvbmx5IHx8IGluaXRpYWwpIHRhcmdldC50cmlnZ2VyKEVWRU5UX0VESVRBQkxFX1NUQVRFX0NIQU5HRUQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVkaXRhYmxlU3RhdGUgPSAodGFyZ2V0LCBlZGl0YWJsZSwgaW5pdGlhbCA9IGZhbHNlKSA9PiB7XHJcblx0Y29uc3Qgb2xkU3RhdGUgPSB0YXJnZXQuZWRpdGFibGU7XHJcblx0aWYgKGVkaXRhYmxlKSBcclxuXHRcdHRhcmdldC5hdHRyKEFUVFJJQlVURV9FRElUQUJMRSwgXCJcIik7XHJcblx0ZWxzZVxyXG5cdFx0dGFyZ2V0LmF0dHIoQVRUUklCVVRFX0VESVRBQkxFLCBudWxsKTtcclxuXHJcblx0aWYgKG9sZFN0YXRlICE9IGVkaXRhYmxlIHx8IGluaXRpYWwpIHRhcmdldC50cmlnZ2VyKEVWRU5UX0VESVRBQkxFX1NUQVRFX0NIQU5HRUQpO1xyXG59OyIsImV4cG9ydCBjb25zdCB2YWxpZGF0ZUZpZWxkcyA9IGFzeW5jIChkYXRhLCBmaWVsZHMpID0+IHtcclxuICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoZmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZC52YWxpZGF0ZShkYXRhKSkpKVxyXG4gICAgICAgIC5yZWR1Y2UoKHZhbGlkLCBmaWVsZFZhbGlkKSA9PiB2YWxpZCA/IGZpZWxkVmFsaWQ6IGZhbHNlLCB0cnVlKTtcclxufSIsImltcG9ydCB7IG5vVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvVmFsdWVIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhSXNOb1ZhbHVlID0gKHZhbHVlKSA9PiB7ICAgIFxyXG4gICAgaWYobm9WYWx1ZSh2YWx1ZSkgKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICBpZih0eXBlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ICYmICB2YWx1ZS5sZW5ndGggPT0gMClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgU2V0ICYmICB2YWx1ZS5sZW5ndGggPT0gMClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgTWFwICYmICB2YWx1ZS5sZW5ndGggPT0gMClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGlmKHR5cGUgPT0gXCJvYmplY3RcIiAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSkubGVuZ3RoID09IDApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCB7IFxuXHRFVkVOVF9GSUVMRF9JTlBVVCxcblx0RVZFTlRIQU5ETEVfSU5QVVRfVElNRU9VVCBcbn0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdG9UaW1lb3V0SGFuZGxlIH0gZnJvbSBcIi4uL3V0aWxzL0V2ZW50SGVscGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XG5cbmNvbnN0IElOUFVUU0VMRUNUT1IgPSAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFdyYXBwZXIge1xuXHRzdGF0aWMgZmluZElucHV0KGZpZWxkKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSBmaWVsZC5maW5kKElOUFVUU0VMRUNUT1IpO1xuXHRcdGlmIChpbnB1dC5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XG5cdFx0cmV0dXJuIGlucHV0Lmxlbmd0aCA9PSAxID8gaW5wdXQuZmlyc3QoKSA6IGlucHV0O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoZmllbGQsIGlucHV0KSB7XG5cdFx0c3VwZXIoZmllbGQsIGlucHV0KTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0Y29uc3QgeyBmaWVsZCwgaW5wdXQgfSA9IHRoaXM7XG5cdFx0dGhpcy5tdWx0aXBsZSA9IGlucHV0IGluc3RhbmNlb2YgTm9kZUxpc3Q7XG5cdFx0aW5wdXQub24oXG5cdFx0XHRcImlucHV0XCIsXG5cdFx0XHR0b1RpbWVvdXRIYW5kbGUoXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRmaWVsZC50cmlnZ2VyKEVWRU5UX0ZJRUxEX0lOUFVULCB0aGlzLm5vcm1hbGl6ZVZhbHVlKHRoaXMudmFsdWUpKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdHRydWUsXG5cdFx0XHRcdEVWRU5USEFORExFX0lOUFVUX1RJTUVPVVRcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0ZmllbGQudHJpZ2dlcihFVkVOVF9GSUVMRF9JTlBVVCwgdGhpcy5ub3JtYWxpemVWYWx1ZSh0aGlzLnZhbHVlKSk7XG5cdH1cblxuXHRzZXQgcmVhZG9ubHkocmVhZG9ubHkpIHtcblx0XHR0aGlzLmlucHV0LmF0dHIoXCJkaXNhYmxlZFwiLCByZWFkb25seSA/IFwiXCIgOiBudWxsKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsKCk7XG5cdFx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBNYXApKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYgKHZhbHVlLnNpemUgPT0gMCkgcmV0dXJuIG51bGw7XG5cblx0XHRjb25zdCB2YWx1ZXMgPSBbXTtcblx0XHR2YWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5tdWx0aXBsZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKTtcblx0XHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCAhPSAwID8gdmFsdWUgOiBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWNjZXB0VmFsdWUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRlbHNlIGlmICh0aGlzLm11bHRpcGxlKVxuXHRcdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cdFx0XHRyZXR1cm4gdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlID09PSBcImJvb2xlYW5cIjtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVkVmFsdWUodmFsdWUpIHtcblx0XHR0aGlzLmlucHV0LnZhbCh2YWx1ZSA/IHZhbHVlIDogbnVsbCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IFxuXHRFVkVOVF9GSUVMRF9JTlBVVFxufSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0b1RpbWVvdXRIYW5kbGUgfSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRIZWxwZXJcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL1dyYXBwZXJcIjtcbmltcG9ydCB7IHByaXZhdGVQcm9wZXJ0eUFjY2Vzc29yIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1ByaXZhdGVQcm9wZXJ0eVwiO1xuXG5jb25zdCBfdmFsdWUgPSBwcml2YXRlUHJvcGVydHlBY2Nlc3NvcihcInZhbHVlXCIpO1xuXG5jb25zdCBJTlBVVFNFTEVDVE9SID0gJ2lucHV0W3R5cGU9XCJmaWxlXCJdJztcblxuY29uc3QgcmVhZEZpbGUgPSAoZmlsZSwgcmVhZEZuTmFtZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsICgpID0+IHtcblx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRuYW1lOiBmaWxlLm5hbWUsXG5cdFx0XHRcdHR5cGU6IGZpbGUudHlwZSxcblx0XHRcdFx0c2l6ZTogZmlsZS5zaXplLFxuXHRcdFx0XHRkYXRhOiByZWFkZXIucmVzdWx0XG5cdFx0XHR9KTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0cmVhZGVyW3JlYWRGbk5hbWVdKGZpbGUpO1xuXHR9KTtcbn07XG5cbi8vcmVhZEFzRGF0YVVSTFxuXG5jb25zdCBGT1JNQVQgPSB7XG5cdFwiZm9ybS1pbnB1dFwiOiBhc3luYyAoZmlsZSkgPT4ge1xuXHRcdGZpbGUuZm9ybWF0ID0gXCJmb3JtLWlucHV0XCI7XG5cdFx0cmV0dXJuIGZpbGU7XG5cdH0sXG5cdFwiZGF0YS11cmwtYmFzZTY0XCI6IGFzeW5jIChmaWxlKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVhZEZpbGUoZmlsZSwgXCJyZWFkQXNEYXRhVVJMXCIpO1xuXHRcdHJlc3VsdC5mb3JtYXQgPSBcImRhdGEtdXJsLWJhc2U2NFwiO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cdFwiYmFzZTY0XCI6IGFzeW5jIChmaWxlKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVhZEZpbGUoZmlsZSwgXCJyZWFkQXNEYXRhVVJMXCIpO1xuXHRcdHJlc3VsdC5kYXRhID0gcmVzdWx0LmRhdGEuc3Vic3RyKHJlc3VsdC5kYXRhLmluZGV4T2YoXCIsXCIpICsgMSk7XG5cdFx0cmVzdWx0LmZvcm1hdCA9IFwiYmFzZTY0XCI7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufTtcblxuY29uc3QgcmVhZEZpbGVzID0gYXN5bmMgKGZpbGVzLCBmb3JtYXQsIG11bHRpcGxlKSA9PiB7XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Zm9yIChsZXQgZmlsZSBvZiBmaWxlcylcblx0XHRyZXN1bHQucHVzaChhd2FpdCBGT1JNQVRbZm9ybWF0XShmaWxlKSk7XG5cblx0aWYgKHJlc3VsdC5sZW5ndGggPT0gMClcblx0XHRyZXR1cm4gbnVsbDtcblxuXG5cdHJldHVybiBtdWx0aXBsZSA/IHJlc3VsdCA6IHJlc3VsdFswXTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIGV4dGVuZHMgV3JhcHBlciB7XG5cdHN0YXRpYyBmaW5kSW5wdXQoZmllbGQpIHtcblx0XHRyZXR1cm4gZmllbGQuZmluZChJTlBVVFNFTEVDVE9SKS5maXJzdCgpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoZmllbGQsIGlucHV0KSB7XG5cdFx0c3VwZXIoZmllbGQsIGlucHV0KTtcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7XG5cdFx0Y29uc3QgeyBmaWVsZCwgaW5wdXQgfSA9IHRoaXM7XG5cdFx0dGhpcy5tdWx0aXBsZSA9IGlucHV0Lm11bHRpcGxlO1xuXHRcdHRoaXMuZm9ybWF0ID0gZmllbGQuYXR0cihcImZpbGUtZm9ybWF0XCIpIHx8IFwiZm9ybS1pbnB1dFwiO1xuXHRcdHRoaXMuZmlsZW5hbWVUYXJnZXQgPSBmaWVsZC5hdHRyKFwiZmlsZS1uYW1lLXRhcmdldFwiKTtcblx0XHR0aGlzLmZpbGVuYW1lVGFyZ2V0ID0gdGhpcy5maWxlbmFtZVRhcmdldCA/IGZpZWxkLmZpbmQodGhpcy5maWxlbmFtZVRhcmdldCkuZmlyc3QoKSA6IG51bGw7XG5cdFx0Y29uc3QgeyBmb3JtYXQsIG11bHRpcGxlIH0gPSB0aGlzO1xuXG5cdFx0aW5wdXQub24oXG5cdFx0XHRcImlucHV0XCIsXG5cdFx0XHR0b1RpbWVvdXRIYW5kbGUoXG5cdFx0XHRcdGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZWRWYWx1ZShhd2FpdCByZWFkRmlsZXMoaW5wdXQuZmlsZXMsIGZvcm1hdCwgbXVsdGlwbGUpKTtcblx0XHRcdFx0XHRmaWVsZC50cmlnZ2VyKEVWRU5UX0ZJRUxEX0lOUFVULCB0aGlzLnZhbHVlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdHRydWVcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0aWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzLmxlbmd0aCAhPSAwKVxuXHRcdFx0dGhpcy51cGRhdGVkVmFsdWUoYXdhaXQgcmVhZEZpbGVzKGlucHV0LmZpbGVzLCBmb3JtYXQsIG11bHRpcGxlKSk7XG5cblx0XHRmaWVsZC50cmlnZ2VyKEVWRU5UX0ZJRUxEX0lOUFVULCB0aGlzLnZhbHVlKTtcblx0fTtcblxuXHRzZXQgcmVhZG9ubHkocmVhZG9ubHkpIHtcblx0XHR0aGlzLmlucHV0LmF0dHIoXCJkaXNhYmxlZFwiLCByZWFkb25seSA/IFwiXCIgOiBudWxsKTtcblx0fVxuXG5cdGFjY2VwdFZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZSBpZiAodGhpcy5tdWx0aXBsZSlcblx0XHRcdHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB0eXBlb2YgdmFsdWUgID09PSBcIm9iamVjdFwiO1xuXHR9XG5cblx0bm9ybWFsaXplVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRlbHNlIGlmICh0aGlzLm11bHRpcGxlKVxuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCAhPSAwID8gdmFsdWUgOiBudWxsO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHVwZGF0ZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IF92YWx1ZSh0aGlzKTtcblx0XHRpZiAodmFsdWUgIT0gY3VycmVudFZhbHVlKSB7XG5cdFx0XHRfdmFsdWUodGhpcywgdmFsdWUpXG5cdFx0XHRpZighdmFsdWUpXHRcdFx0XG5cdFx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSBudWxsO1xuXG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWVUYXJnZXQ7XG5cdFx0XHRpZiAoZmlsZW5hbWUpIHtcblx0XHRcdFx0ZmlsZW5hbWUuZW1wdHkoKTtcblx0XHRcdFx0aWYodmFsdWUpe1xuXHRcdFx0XHRcdGlmICh0aGlzLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBmaWxlIG9mIHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdGZpbGVuYW1lLmFwcGVuZChgPHNwYW4+JHtmaWxlLm5hbWV9PC9zcGFuPmApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRmaWxlbmFtZS5hcHBlbmQoYDxzcGFuPiR7dmFsdWUubmFtZX08L3NwYW4+YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gX3ZhbHVlKHRoaXMpO1xuXHR9XG5cblx0Z2V0IHZhbGlkKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0LmNoZWNrVmFsaWRpdHkoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgXG5cdEVWRU5UX0ZJRUxEX0lOUFVULFxuXHRFVkVOVEhBTkRMRV9JTlBVVF9USU1FT1VUIFxufSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0b1RpbWVvdXRIYW5kbGUgfSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRIZWxwZXJcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL1dyYXBwZXJcIjtcblxuY29uc3QgSU5QVVRTRUxFQ1RPUiA9ICdpbnB1dFt0eXBlPVwicmFkaW9cIl0nO1xuXG5jb25zdCBnZXRSYW5kb21JbnQgPSAoKSA9PiB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBEYXRlLm5vdygpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgV3JhcHBlciB7XG5cdHN0YXRpYyBmaW5kSW5wdXQoZmllbGQpIHtcblx0XHRjb25zdCBpbnB1dCA9IGZpZWxkLmZpbmQoSU5QVVRTRUxFQ1RPUik7XG5cdFx0aWYgKGlucHV0Lmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihmaWVsZCwgaW5wdXQpIHtcblx0XHRzdXBlcihmaWVsZCwgaW5wdXQpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRjb25zdCB7IGZpZWxkLCBpbnB1dCB9ID0gdGhpcztcblx0XHRjb25zdCBuYW1lID0gZmllbGQubmFtZSArIGdldFJhbmRvbUludCgpO1xuXHRcdGZvciAobGV0IHJhZGlvIG9mIGlucHV0KSByYWRpby5uYW1lID0gbmFtZTtcblx0XHRpbnB1dC5vbihcblx0XHRcdFwiaW5wdXRcIixcblx0XHRcdHRvVGltZW91dEhhbmRsZShcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGZpZWxkLnRyaWdnZXIoRVZFTlRfRklFTERfSU5QVVQsIHRoaXMubm9ybWFsaXplVmFsdWUodGhpcy52YWx1ZSkpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0RVZFTlRIQU5ETEVfSU5QVVRfVElNRU9VVFxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHRmaWVsZC50cmlnZ2VyKEVWRU5UX0ZJRUxEX0lOUFVULCB0aGlzLm5vcm1hbGl6ZVZhbHVlKHRoaXMudmFsdWUpKTtcblx0fVxuXG5cblx0c2V0IHJlYWRvbmx5KHJlYWRvbmx5KSB7XG5cdFx0dGhpcy5pbnB1dC5hdHRyKFwiZGlzYWJsZWRcIiwgcmVhZG9ubHkgPyBcIlwiIDogbnVsbCk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbCgpO1xuXHRcdGlmICghKHZhbHVlIGluc3RhbmNlb2YgTWFwKSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmICh2YWx1ZS5zaXplID09IDApIHJldHVybiBudWxsO1xuXHRcdHJldHVybiB2YWx1ZS52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cdH1cblxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSlcblx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWNjZXB0VmFsdWUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRlbHNle1xuXHRcdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblx0XHRcdHJldHVybiB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXQudmFsKHZhbHVlID8gdmFsdWUgOiBudWxsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgXG5cdEVWRU5UX0ZJRUxEX0lOUFVULFxuXHRFVkVOVEhBTkRMRV9JTlBVVF9USU1FT1VUIFxufSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0b1RpbWVvdXRIYW5kbGUgfSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRIZWxwZXJcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL1dyYXBwZXJcIjtcblxuY29uc3QgSU5QVVRTRUxFQ1RPUiA9ICdzZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgV3JhcHBlciB7XG5cdHN0YXRpYyBmaW5kSW5wdXQoZmllbGQpIHtcblx0XHRyZXR1cm4gZmllbGQuZmluZChJTlBVVFNFTEVDVE9SKS5maXJzdCgpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoZmllbGQsIGlucHV0KSB7XG5cdFx0c3VwZXIoZmllbGQsIGlucHV0KTtcdFx0XG5cdH1cblxuXHRcblxuXHRpbml0KCkge1xuXHRcdGNvbnN0IHsgZmllbGQsIGlucHV0IH0gPSB0aGlzO1xuXHRcdGlucHV0Lm9uKFxuXHRcdFx0XCJpbnB1dCwgY2hhbmdlZFwiLFxuXHRcdFx0dG9UaW1lb3V0SGFuZGxlKFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0ZmllbGQudHJpZ2dlcihFVkVOVF9GSUVMRF9JTlBVVCwgdGhpcy52YWx1ZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHR0cnVlLFxuXHRcdFx0XHRFVkVOVEhBTkRMRV9JTlBVVF9USU1FT1VUXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdC8vZmllbGQudHJpZ2dlcihFVkVOVF9GSUVMRF9JTlBVVCwgdGhpcy52YWx1ZSk7XG5cdH1cblxuXHRzZXQgcmVhZG9ubHkocmVhZG9ubHkpIHtcblx0XHR0aGlzLmlucHV0LmF0dHIoXCJkaXNhYmxlZFwiLCByZWFkb25seSA/IFwiXCIgOiBudWxsKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemVWYWx1ZSh0aGlzLmlucHV0Lm11bHRpcGxlID8gdGhpcy5pbnB1dC52YWwoKSA6IHRoaXMuaW5wdXQudmFsdWUpO1xuXHR9XG5cdFxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYodGhpcy5pbnB1dC5tdWx0aXBsZSl7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmIGl0ZW0udHJpbSgpLmxlbmd0aCA+IDApO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoICE9IDAgPyB2YWx1ZSA6IG51bGw7XG5cdFx0XHR9IGVsc2V7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudHJpbSgpO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoICE9IDAgPyB2YWx1ZSA6IG51bGw7XHRcblx0XHRcdH1cdFx0XHRcdFxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGFjY2VwdFZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZSBpZiAodGhpcy5pbnB1dC5tdWx0aXBsZSlcblx0XHRcdHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG5cdH1cblxuXHR1cGRhdGVkVmFsdWUodmFsdWUpIHtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSAgdGhpcy5pbnB1dC52YWwoKTtcblx0XHRpZiAodGhpcy5maWVsZC52YWx1ZSAhPSB0aGlzLnZhbHVlKVxuXHRcdFx0dGhpcy5pbnB1dC52YWwodmFsdWUgPyB2YWx1ZSA6IGN1cnJlbnRWYWx1ZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEVWRU5UX0ZJRUxEX0lOUFVULCBFVkVOVEhBTkRMRV9JTlBVVF9USU1FT1VUIH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9WYWx1ZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9WYWx1ZUhlbHBlclwiO1xuaW1wb3J0IHsgdG9UaW1lb3V0SGFuZGxlIH0gZnJvbSBcIi4uL3V0aWxzL0V2ZW50SGVscGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XG5cbmNvbnN0IElOUFVUU0VMRUNUT1IgPSAnaW5wdXQ6bm90KFt0eXBlPVwiZmlsZVwiXSxbdHlwZT1cInJhZGlvXCJdLFt0eXBlPVwiY2hlY2tib3hcIl0sW3R5cGU9XCJidXR0b25cIl0sW3R5cGU9XCJzdWJtaXRcIl0sW3R5cGU9XCJyZXNldFwiXSksaW5wdXQ6bm90KFt0eXBlXSksIHRleHRhcmVhJztcblxuY29uc3QgREVGQVVMVFRZUEUgPSBcInRleHRcIjtcblxuY29uc3QgdGV4dCA9IChpbnB1dCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGFjY2VwdDogKHZhbHVlKSA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xuXHRcdH0sXG5cdFx0Z2V0VmFsdWU6ICgpID0+IHtcblx0XHRcdHJldHVybiBpbnB1dC52YWx1ZTtcblx0XHR9LFxuXHRcdHNldFZhbHVlOiAodmFsdWUpID0+IHtcblx0XHRcdHJldHVybiAoaW5wdXQudmFsdWUgPSB2YWx1ZSk7XG5cdFx0fSxcblx0XHRub3JtYWxpemU6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudHJpbSgpO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID4gMCA/IHZhbHVlIDogbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fTtcbn07XG5jb25zdCBudW1iZXIgPSAoaW5wdXQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRhY2NlcHQ6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcblx0XHR9LFxuXHRcdGdldFZhbHVlOiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gaW5wdXQudmFsdWVBc051bWJlcjtcblx0XHR9LFxuXHRcdHNldFZhbHVlOiAodmFsdWUpID0+IHtcblx0XHRcdGlucHV0LnZhbHVlQXNOdW1iZXIgPSB2YWx1ZTtcblx0XHR9LFxuXHRcdG5vcm1hbGl6ZTogKHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAoIW5vVmFsdWUodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm4gdmFsdWU7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdH07XG59O1xuXG5jb25zdCBkYXRldGltZSA9IChpbnB1dCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGFjY2VwdDogKHZhbHVlKSA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xuXHRcdH0sXG5cdFx0Z2V0VmFsdWU6ICgpID0+IHtcblx0XHRcdHJldHVybiBpbnB1dC52YWx1ZTtcblx0XHR9LFxuXHRcdHNldFZhbHVlOiAodmFsdWUpID0+IHtcblx0XHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdFx0fSxcblx0XHRub3JtYWxpemU6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0aWYgKHZhbHVlKSByZXR1cm4gdmFsdWU7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdH07XG59O1xuXG5jb25zdCBkYXRlID0gKGlucHV0KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0YWNjZXB0OiAodmFsdWUpID0+IHtcblx0XHRcdHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGU7XG5cdFx0fSxcblx0XHRnZXRWYWx1ZTogKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGlucHV0LnZhbHVlQXNEYXRlO1xuXHRcdH0sXG5cdFx0c2V0VmFsdWU6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0aW5wdXQudmFsdWVBc0RhdGUgPSB2YWx1ZTtcblx0XHR9LFxuXHRcdG5vcm1hbGl6ZTogKHZhbHVlKSA9PiB7XG5cdFx0XHRpZiAodmFsdWUpIHJldHVybiB2YWx1ZTtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fTtcbn07XG5cbmNvbnN0IFRJTUVGT1JNQVQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImRlZmF1bHRcIiwgIHtcbiAgaG91cjogXCJudW1lcmljXCIsXG4gIG1pbnV0ZTogXCJudW1lcmljXCJcbn0pO1xuXG5cbmNvbnN0IHRpbWUgPSAoaW5wdXQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRhY2NlcHQ6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcblx0XHR9LFxuXHRcdGdldFZhbHVlOiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gaW5wdXQudmFsdWUgPyBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke2lucHV0LnZhbHVlfWApIDogbnVsbDtcblx0XHR9LFxuXHRcdHNldFZhbHVlOiAodmFsdWUpID0+IHtcblx0XHRcdGlucHV0LnZhbHVlID0gVElNRUZPUk1BVC5mb3JtYXQodmFsdWUpO1xuXHRcdH0sXG5cdFx0bm9ybWFsaXplOiAodmFsdWUpID0+IHtcblx0XHRcdGlmICh2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHR9O1xufTtcbmNvbnN0IFRZUEVTID0geyB0ZXh0LCBudW1iZXIsIGRhdGV0aW1lLCAgXCJkYXRldGltZS1sb2NhbGVcIjogZGF0ZXRpbWUsIGRhdGUsIHRpbWUsIHJhbmdlOiBudW1iZXIgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIFdyYXBwZXIge1xuXHRzdGF0aWMgZmluZElucHV0KGZpZWxkKSB7XG5cdFx0cmV0dXJuIGZpZWxkLmZpbmQoSU5QVVRTRUxFQ1RPUikuZmlyc3QoKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKGZpZWxkLCBpbnB1dCkge1xuXHRcdHN1cGVyKGZpZWxkLCBpbnB1dCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGNvbnN0IHsgZmllbGQsIGlucHV0IH0gPSB0aGlzO1xuXHRcdGNvbnN0IHR5cGUgPSAoZmllbGQuYXR0cihcImlucHV0LXR5cGVcIikgfHwgaW5wdXQuYXR0cihcInR5cGVcIikgfHwgREVGQVVMVFRZUEUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdHRoaXMudHlwZSA9IChUWVBFU1t0eXBlXSB8fCBUWVBFU1tERUZBVUxUVFlQRV0pKGlucHV0KTtcblx0XHRpbnB1dC5vbihcblx0XHRcdFwiaW5wdXRcIixcblx0XHRcdHRvVGltZW91dEhhbmRsZShcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGZpZWxkLnRyaWdnZXIoRVZFTlRfRklFTERfSU5QVVQsIHRoaXMubm9ybWFsaXplVmFsdWUodGhpcy52YWx1ZSkpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0RVZFTlRIQU5ETEVfSU5QVVRfVElNRU9VVCxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdGZpZWxkLnRyaWdnZXIoRVZFTlRfRklFTERfSU5QVVQsIHRoaXMubm9ybWFsaXplVmFsdWUodGhpcy52YWx1ZSkpO1xuXHR9XG5cblx0YWNjZXB0VmFsdWUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB0cnVlO1xuXG5cdFx0cmV0dXJuIHRoaXMudHlwZS5hY2NlcHQodmFsdWUpO1xuXHR9XG5cblx0bm9ybWFsaXplVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIHRoaXMudHlwZS5ub3JtYWxpemUodmFsdWUpO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlZFZhbHVlKHZhbHVlKSB7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy50eXBlLmdldFZhbHVlKCk7XG5cdFx0aWYgKHZhbHVlICE9IGN1cnJlbnRWYWx1ZSkgdGhpcy50eXBlLnNldFZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdHNldCByZWFkb25seShyZWFkb25seSkge1xuXHRcdHRoaXMuaW5wdXQuYXR0cihcImRpc2FibGVkXCIsIHJlYWRvbmx5ID8gXCJcIiA6IG51bGwpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnR5cGUuZ2V0VmFsdWUoKTtcblx0fVxuXG5cdGdldCB2YWxpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG5cdH1cbn1cbiIsImltcG9ydCBGaWVsZCBmcm9tIFwiLi4vRmllbGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JhcHBlciB7XG5cdFxuXHRzdGF0aWMgZmluZElucHV0KGZpZWxkKXsgcmV0dXJuIG51bGw7fVxuXHRcblx0I2RlZmF1bHRWYWx1ZTtcblx0XG5cdGNvbnN0cnVjdG9yKGZpZWxkLCBpbnB1dCkge1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkgeyB9XG5cblx0c2V0IHJlYWRvbmx5KGRpc2FibGVkKSB7IH1cblxuXHRhc3luYyBhY2NlcHRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0YXN5bmMgbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRhc3luYyB1cGRhdGVkVmFsdWUoKSB7XG5cdH1cblx0XG5cdGdldCB2YWx1ZSgpe1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdFxuXHRnZXQgdmFsaWQoKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuIiwiaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL0NoZWNrYm94XCI7XG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4vUmFkaW9cIjtcbmltcG9ydCBGaWxlIGZyb20gXCIuL0ZpbGVcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVycyA9IFtUZXh0LCBDaGVja2JveCwgUmFkaW8sIEZpbGUsIFNlbGVjdF07XG5cbmV4cG9ydCBjb25zdCBmaW5kV3JhcHBlciA9IChmaWVsZCkgPT4ge1xuXHRmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmRJbnB1dChmaWVsZCk7XG5cdFx0aWYgKGlucHV0KSByZXR1cm4gbmV3IHdyYXBwZXIoZmllbGQsIGlucHV0KTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiaW1wb3J0IHtHTE9CQUx9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmV4cG9ydCBjb25zdCBPUkdGRVRDSCA9IEdMT0JBTC5mZXRjaDsiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7R0xPQkFMfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge09SR0ZFVENIfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHRcclxuR0xPQkFMLmZldGNoID0gYXN5bmMgZnVuY3Rpb24oYVVybCwgYVJlcXVlc3Qpe1xyXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoYVVybCwgR0xPQkFMLmxvY2F0aW9uKTtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgTWFuYWdlci5kb0ludGVyY2VwdCh7XHJcblx0XHRcdHVybCA6IG5ldyBVUkwoYVVybCwgbG9jYXRpb24pLFxyXG5cdFx0XHRyZXF1ZXN0IDogYVJlcXVlc3QgfHwge30sXHJcblx0XHRcdG1ldGFkYXRhIDoge1xyXG5cdFx0XHRcdG1ldGhvZCA6IHR5cGVvZiBhUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiR0VUXCIgOiAoYVJlcXVlc3QubWV0aG9kIHx8IFwiR0VUXCIpLFxyXG5cdFx0XHRcdG9yaWdpbjogdXJsLm9yaWdpbixcclxuXHRcdFx0XHRwcm90b2NvbCA6IHVybC5wcm90b2NvbCxcclxuXHRcdFx0XHRob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxyXG5cdFx0XHRcdHBvcnQ6IHVybC5wb3J0LFxyXG5cdFx0XHRcdHBhdGggOiB1cmwucGF0aG5hbWUsXHJcblx0XHRcdFx0aGFzaCA6IHVybC5oYXNoLFxyXG5cdFx0XHRcdHF1ZXJ5OiB1cmwuc2VhcmNoLFxyXG5cdFx0XHRcdGFzeW5jIDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFx0XHJcblx0cmV0dXJuIE9SR0ZFVENIKGRhdGEudXJsLCBkYXRhLnJlcXVlc3QpO1xyXG59OyIsImltcG9ydCB7T1JHRkVUQ0h9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJjZXB0b3J7XHJcbiAgICBhc3luYyBkb0FjY2VwdChkYXRhKXt9XHJcbiAgICBhc3luYyBkb0hhbmRsZShkYXRhKXt9XHJcbiAgICBhc3luYyB1bmNlY2tlZEZldGNoKHVybCwgcmVxdWVzdCl7XHJcblx0XHRyZXR1cm4gT1JHRkVUQ0godXJsLCByZXF1ZXN0KTtcclxuXHR9XHJcblxyXG59OyIsImltcG9ydCB7IEdMT0JBTCB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IE9SR0ZFVENIIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmNvbnN0IENVUlJFTlRPUklHSU4gPSBHTE9CQUwubG9jYXRpb24ub3JpZ2luO1xyXG5cclxuY2xhc3MgTWFuYWdlciB7XHJcblx0I2NhY2hlID0ge307XHJcblx0I2lnbm9yZWRVcmxzID0ge307XHJcblx0I2lnbm9yZWRPcmlnaW5zID0ge307XHJcblx0I2lnbm9yZURvY3VtZW50T3JpZ2luID0gZmFsc2U7XHJcblx0I2ludGVyY2VwdG9ycyA9IFtdO1xyXG5cdCNzZXR1cCA9IFtdO1xyXG5cdCNyZWFkeUNoZWNrO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRzZXQgaWdub3JlRG9jdW1lbnRPcmlnaW4odmFsdWUpIHtcclxuXHRcdHRoaXMuI2lnbm9yZURvY3VtZW50T3JpZ2luID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRhZGRPcmlnaW5Ub0lnbm9yZShvcmlnaW5zKSB7XHJcblx0XHRpZiAob3JpZ2lucyBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0XHRmb3IgKGxldCBvcmlnaW4gb2Ygb3JpZ2lucylcclxuXHRcdFx0XHR0aGlzLiNpZ25vcmVkT3JpZ2luc1tvcmlnaW4udG9TdHJpbmcoKV0gPSB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLiNpZ25vcmVkT3JpZ2luc1tvcmlnaW5zLnRvU3RyaW5nKCldID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGFkZFVybFRvSWdub3JlKHVybHMpIHtcclxuXHRcdGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdGZvciAobGV0IHVybCBvZiB1cmxzKVxyXG5cdFx0XHRcdHRoaXMuI2lnbm9yZWRVcmxzW3VybC50b1N0cmluZygpXSA9IHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuI2lnbm9yZWRVcmxzW3VybHMudG9TdHJpbmcoKV0gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0c2V0dXAoc2V0dXApIHtcclxuXHRcdGlmICh0eXBlb2Ygc2V0dXAgPT09IFwiZnVuY3Rpb25cIiB8fCBzZXR1cCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdHRoaXMuI3NldHVwLnB1c2goc2V0dXApO1xyXG5cdH1cclxuXHJcblx0YWRkSW50ZXJjZXB0b3IoYUludGVyY2VwdG9yKSB7XHJcblx0XHRpZihhSW50ZXJjZXB0b3IgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0cmV0dXJuIGFJbnRlcmNlcHRvci5mb3JFYWNoKGludGVyY2VwdG9yID0+IHRoaXMuYWRkSW50ZXJjZXB0b3IoaW50ZXJjZXB0b3IpKTtcclxuXHRcdGlmICh0eXBlb2YgYUludGVyY2VwdG9yICE9PSBcIm9iamVjdFwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJmdW5jdGlvbiByZXF1aXJlZCBhbiBpbnRlcmNlcHRvclwiKTtcclxuXHRcdGlmICh0eXBlb2YgYUludGVyY2VwdG9yLmRvQWNjZXB0ICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0FjY2VwdFxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0aWYgKHR5cGVvZiBhSW50ZXJjZXB0b3IuZG9IYW5kbGUgIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGludGVyY2VwdG9yIHJlcXVpcmVkIGEgXFxcImRvSGFuZGxlXFxcIiBmdW5jdGlvbiFcIik7XHJcblxyXG5cdFx0dGhpcy4jaW50ZXJjZXB0b3JzLnB1c2goYUludGVyY2VwdG9yKTtcclxuXHRcdHRoaXMucmVzZXQoKTtcclxuXHR9XHJcblxyXG5cdGdldCByZWFkeSgpIHtcclxuXHRcdHJldHVybiAoYXN5bmMgKCkgPT4ge1x0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy4jc2V0dXAubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0XHRpZih0aGlzLiNyZWFkeUNoZWNrKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLiNyZWFkeUNoZWNrO1xyXG5cclxuXHRcdFx0dGhpcy4jcmVhZHlDaGVjayA9IChhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0d2hpbGUodGhpcy4jc2V0dXAubGVuZ3RoICE9IDApe1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2V0dXAgPSB0aGlzLiNzZXR1cFswXTtcclxuXHRcdFx0XHRcdGlmIChzZXR1cCl7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGludGVyY2VwdG9ycyA9IHNldHVwIGluc3RhbmNlb2YgUHJvbWlzZSA/IGF3YWl0IHNldHVwIDogYXdhaXQgc2V0dXAoKTtcclxuXHRcdFx0XHRcdFx0aWYoaW50ZXJjZXB0b3JzKVxyXG5cdFx0XHRcdFx0XHRcdGludGVyY2VwdG9ycyBpbnN0YW5jZW9mIEFycmF5ID8gaW50ZXJjZXB0b3JzLmZvckVhY2goaW50ZXJjZXB0b3IgPT4gdGhpcy5hZGRJbnRlcmNlcHRvcihpbnRlcmNlcHRvcikpIDogdGhpcy5hZGRJbnRlcmNlcHRvcihpbnRlcmNlcHRvcnMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLiNzZXR1cC5zaGlmdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiNyZWFkeUNoZWNrID0gbnVsbDtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZWFkeTtcclxuXHRcdFx0fSkoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLiNyZWFkeUNoZWNrO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRvSW50ZXJjZXB0KGFEYXRhKSB7XHJcblx0XHRhd2FpdCB0aGlzLnJlYWR5O1xyXG5cclxuXHRcdGNvbnN0IG9yaWdpbiA9IGFEYXRhLm1ldGFkYXRhLm9yaWdpbjtcclxuXHJcblx0XHRpZiAodGhpcy4jaXNJZ25vcmVkKG9yaWdpbiwgYURhdGEudXJsLnRvU3RyaW5nKCkpKVxyXG5cdFx0XHRyZXR1cm4gYURhdGE7XHJcblxyXG5cdFx0Y29uc3QgeyB1cmwsIG1ldGFkYXRhIH0gPSBhRGF0YTtcclxuXHRcdGNvbnN0IGNoYWluID0gYXdhaXQgdGhpcy4jZ2V0Q2hhaW4ob3JpZ2luLCB7IHVybCwgbWV0YWRhdGEgfSk7XHJcblx0XHRpZiAoIWNoYWluKVxyXG5cdFx0XHRyZXR1cm4gYURhdGE7XHJcblxyXG5cdFx0Zm9yIChsZXQgaW50ZXJjZXB0b3Igb2YgY2hhaW4pXHJcblx0XHRcdGFEYXRhID0gYXdhaXQgaW50ZXJjZXB0b3IuZG9IYW5kbGUoYURhdGEpO1xyXG5cclxuXHRcdHJldHVybiBhRGF0YTtcclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge1xyXG5cdFx0dGhpcy4jY2FjaGUgPSB7fTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVuY2hlY2tlZEZldGNoKHVybCwgcmVxdWVzdCkge1xyXG5cdFx0cmV0dXJuIE9SR0ZFVENIKHVybCwgcmVxdWVzdCk7XHJcblx0fVxyXG5cclxuXHQjaXNJZ25vcmVkKG9yaWdpbiwgdXJsKSB7XHJcblx0XHRpZiAodGhpcy4jaWdub3JlZFVybHNbdXJsXSlcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGlmICh0aGlzLiNpZ25vcmVEb2N1bWVudE9yaWdpbiAmJiBvcmlnaW4gPT0gQ1VSUkVOVE9SSUdJTilcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRpZiAodGhpcy4jaWdub3JlZE9yaWdpbnNbb3JpZ2luXSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG5cclxuXHRhc3luYyAjZ2V0Q2hhaW4ob3JpZ2luLCBkYXRhKSB7XHJcblx0XHRsZXQgY2hhaW4gPSB0aGlzLiNjYWNoZVtvcmlnaW5dO1xyXG5cdFx0aWYgKCFjaGFpbikge1xyXG5cdFx0XHRjaGFpbiA9IHRoaXMuI2ludGVyY2VwdG9yRm9yT3JpZ2luKG9yaWdpbiwgZGF0YSk7XHJcblx0XHRcdHRoaXMuI2NhY2hlW29yaWdpbl0gPSBjaGFpbjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2hhaW47XHJcblx0fVxyXG5cclxuXHRhc3luYyAjaW50ZXJjZXB0b3JGb3JPcmlnaW4ob3JpZ2luLCBkYXRhKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdGZvciAobGV0IGludGVyY2VwdG9yIG9mIHRoaXMuI2ludGVyY2VwdG9ycykge1xyXG5cdFx0XHRpZiAoYXdhaXQgaW50ZXJjZXB0b3IuZG9BY2NlcHQoZGF0YSkpXHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaW50ZXJjZXB0b3IpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBNYW5hZ2VyKCk7XHJcbnNldFRpbWVvdXQoKCkgPT4gSU5TVEFOQ0UucmVhZHksIDEwKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcclxuZXhwb3J0IHtNYW5hZ2VyfTsiLCJjb25zdCBHTE9CQUwgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHJldHVybiB7fTtcbn0pKCk7XG5cbmV4cG9ydCB7R0xPQkFMfTtcbmNvbnN0IFV0aWxzID0ge1xuXHRHTE9CQUwgOiBHTE9CQUxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyAiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7R0xPQkFMfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuaWYodHlwZW9mIEdMT0JBTC5YTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0Y29uc3QgT1JHWEhSID0gR0xPQkFMLlhNTEh0dHBSZXF1ZXN0O1xyXG5cdGNvbnN0IGV4ZWN1dGVSZXF1ZXN0ID0gZnVuY3Rpb24oYURhdGEpe1xyXG5cdFx0T1JHWEhSLnByb3RvdHlwZS5vcGVuLmNhbGwodGhpcywgYURhdGEucmVxdWVzdC5tZXRob2QsIGFEYXRhLnVybCwgYURhdGEubWV0YWRhdGEuYXN5bmMsIGFEYXRhLm1ldGFkYXRhLnVzZXJuYW1lLCBhRGF0YS5tZXRhZGF0YS5wYXNzd29yZCk7XHJcblx0XHRpZih0eXBlb2YgYURhdGEucmVxdWVzdC5oZWFkZXJzICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhRGF0YS5yZXF1ZXN0LmhlYWRlcnMpXHJcblx0XHRcdC5mb3JFYWNoKGFIZWFkZXIgPT57XHJcblx0XHRcdFx0T1JHWEhSLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyLmNhbGwodGhpcywgYUhlYWRlciwgYURhdGEucmVxdWVzdC5oZWFkZXJzW2FIZWFkZXJdKTtcclxuXHRcdFx0fSk7XHJcblx0XHRPUkdYSFIucHJvdG90eXBlLnNlbmQuY2FsbCh0aGlzLCBhRGF0YS5yZXF1ZXN0LmJvZHkpO1xyXG5cdH1cclxuXHRjb25zdCBYSFIgPSBmdW5jdGlvbiAoKXtcclxuXHRcdGNvbnN0IHhociA9IG5ldyBPUkdYSFIoYXJndW1lbnRzKTtcclxuXHRcdGxldCBkYXRhID0gdW5kZWZpbmVkO1xyXG5cdFx0XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhVmFsdWUpe1xyXG5cdFx0XHRkYXRhLnJlcXVlc3QuaGVhZGVycyA9IGRhdGEucmVxdWVzdC5oZWFkZXJzIHx8IHt9O1xyXG5cdFx0XHRkYXRhLnJlcXVlc3QuaGVhZGVyc1thTmFtZV0gPSBhVmFsdWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR4aHIub3BlbiA9IGZ1bmN0aW9uKGFNZXRob2QsIGFVcmwsIGlzQXN5bmMsIGFVc2VybmFtZSwgYVBhc3N3b3JkKXtcclxuXHRcdFx0Y29uc3QgdXJsID0gbmV3IFVSTChhVXJsLCBHTE9CQUwubG9jYXRpb24ub3JpZ2luKTtcclxuXHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHR1cmwgOiBuZXcgVVJMKGFVcmwsIGxvY2F0aW9uKSxcclxuXHRcdFx0XHRyZXF1ZXN0IDoge1xyXG5cdFx0XHRcdFx0bWV0aG9kIDogYU1ldGhvZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWV0YWRhdGEgOiB7XHJcblx0XHRcdFx0XHRtZXRob2QgOiBhTWV0aG9kLFxyXG5cdFx0XHRcdFx0b3JpZ2luOiB1cmwub3JpZ2luLFxyXG5cdFx0XHRcdFx0cHJvdG9jb2wgOiB1cmwucHJvdG9jb2wsXHJcblx0XHRcdFx0XHRob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxyXG5cdFx0XHRcdFx0cG9ydDogdXJsLnBvcnQsXHJcblx0XHRcdFx0XHRwYXRoIDogdXJsLnBhdGhuYW1lLFxyXG5cdFx0XHRcdFx0cXVlcnk6IHVybC5zZWFyY2gsXHJcblx0XHRcdFx0XHRoYXNoIDogdXJsLmhhc2gsXHJcblx0XHRcdFx0XHRhc3luYyA6IHR5cGVvZiBpc0FzeW5jID09PSBcImJvb2xlYW5cIiA/IGlzQXN5bmMgOiB0cnVlLFxyXG5cdFx0XHRcdFx0dXNlcm5hbWUgOiBhVXNlcm5hbWUsXHJcblx0XHRcdFx0XHRwYXNzd29yZCA6IGFQYXNzd29yZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHhoci5zZW5kID0gZnVuY3Rpb24oYUJvZHkpe1xyXG5cdFx0XHRpZihkYXRhLm1ldGFkYXRhLmFzeW5jKXtcclxuXHRcdFx0XHRkYXRhLnJlcXVlc3QuYm9keSA9IGFCb2R5OyBcclxuXHQgICAgXHRcdE1hbmFnZXIuZG9JbnRlcmNlcHQoZGF0YSlcclxuXHQgICAgXHRcdC50aGVuKGV4ZWN1dGVSZXF1ZXN0LmJpbmQoeGhyKSlcclxuXHQgICAgXHRcdFtcImNhdGNoXCJdKGNvbnNvbGUuZXJyb3IpO1xyXG5cdFx0ICAgIH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGV4ZWN1dGVSZXF1ZXN0LmNhbGwoeGhyLCBkYXRhKTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiB4aHI7XHJcblx0fTtcclxuXHRcclxuXHRHTE9CQUwuWE1MSHR0cFJlcXVlc3QgPSBYSFI7XHJcblx0R0xPQkFMLlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSA9IE9SR1hIUi5wcm90b3R5cGU7XHJcblx0R0xPQkFMLlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFhIUjtcclxufSIsImltcG9ydCB7R0xPQkFMfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgXCIuL1hNTEh0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCBcIi4vRmV0Y2hcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJjZXB0b3IgZnJvbSBcIi4vSW50ZXJjZXB0b3JcIjtcclxuaW1wb3J0IGludGVyY2VwdG9ycyBmcm9tIFwiLi9pbnRlcmNlcHRvcnNcIjtcclxuXHJcbkdMT0JBTC5kZWZhdWx0anMgPSBHTE9CQUwuZGVmYXVsdGpzIHx8IHt9O1xyXG5HTE9CQUwuZGVmYXVsdGpzLmh0dHBpbnRlcmNlcHRvciA9IEdMT0JBTC5kZWZhdWx0anMuaHR0cGludGVyY2VwdG9yIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0TWFuYWdlcixcclxuXHRJbnRlcmNlcHRvcixcclxuXHRpbnRlcmNlcHRvcnNcclxufTsiLCJpbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCJcclxuXHJcbmNvbnN0IE9BdXRoSW50ZXJjZXB0b3IgPSBmdW5jdGlvbihhU2V0dXApe1xyXG5cdGNvbnN0IHNldHVwID0gYVNldHVwO1xyXG5cdHNldHVwLmZldGNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNldHVwLmxvZ2luLnVybCwge1xyXG5cdFx0XHRtZXRob2Q6IChzZXR1cC5sb2dpbi5tZXRob2QgfHwgXCJnZXRcIilcclxuXHRcdH0pO1xyXG5cdFx0cmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2Vbc2V0dXAubG9naW4ucmVzcG9uc2UudmFsdWVTZWxlY3Rvcl07XHJcblx0fTtcclxuXHRyZXR1cm4gVG9rZW5JbnRlcmNlcHRvcihhU2V0dXApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT0F1dGhJbnRlcmNlcHRvcjtcclxuIiwiLyoqXHJcbiAqIGFTZXR1cCAgPT5cclxuICoge1xyXG4gKiBcdGNvbmRpdGlvbiA6IFtzdHJpbmcgfCBzdHJpbmdbXSB8IGZ1bmN0aW9uKGFEYXRhfV0sXHJcbiAqIFx0ZmV0Y2hUb2tlbiA6IGZ1bmN0aW9uKCksXHJcbiAqICBhcHBlbmRUb2tlbiA6IGZ1bmN0aW9uKGFUb2tlbiwgYURhdGEpLFxyXG4gKiAgKG9wdGlvbmFsKSByZWZyZXNoSW50ZXJ2YWwsXHJcbiAqICAob3B0aW9uYWwpIHJlZnJlc2hUb2tlbiA6IGZ1bmN0aW9uKClcclxuICogfVxyXG4gKi9cclxuXHJcbmNvbnN0IGRlZmF1bHRUb2tlbkFwcGVuZGVyID0gYXN5bmMgKHRva2VuLCBkYXRhKSA9PiB7XHJcblx0ZGF0YS5yZXF1ZXN0LmhlYWRlcnMgPSBkYXRhLnJlcXVlc3QuaGVhZGVycyB8fCB7fTtcclxuXHRkYXRhLnJlcXVlc3QuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHRyZXR1cm4gZGF0YTtcclxufVxyXG5cclxuaW1wb3J0IEludGVyY2VwdG9yIGZyb20gXCIuLi9JbnRlcmNlcHRvclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbkludGVyY2VwdG9yIGV4dGVuZHMgSW50ZXJjZXB0b3Ige1xyXG5cclxuXHQjdG9rZW4gPSBudWxsO1xyXG5cdCNsYXN0RGF0YSA9IHt9O1xyXG5cdCNjb25kaXRpb247XHJcblx0I2ZldGNoVG9rZW47XHJcblx0I2FwcGVuZFRva2VuO1xyXG5cdCNyZWZyZXNoSW50ZXJ2YWw7XHJcblx0I3JlZnJlc2hUb2tlbjtcclxuXHJcblx0Y29uc3RydWN0b3IoeyBjb25kaXRpb24sIGZldGNoVG9rZW4sIGFwcGVuZFRva2VuLCByZWZyZXNoSW50ZXJ2YWwgPSA2MCAqIDEwMDAsIHJlZnJlc2hUb2tlbiB9KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0aWYodHlwZW9mIGNvbmRpdGlvbiAhPT0gXCJzdHJpbmdcIiAmJiAhKGNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KSAmJiB0eXBlb2YgY29uZGl0aW9uICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwiY29uZGl0aW9uXCIgbXVzdCBiZSBhIFwic3RyaW5nXCIsIFwiYXJyYXlcIiBvciBcImZ1bmN0aW9uXCIhYCk7XHJcblx0XHR0aGlzLiNjb25kaXRpb24gPSBjb25kaXRpb247XHJcblx0XHRcclxuXHRcdGlmKHR5cGVvZiBmZXRjaFRva2VuICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwiZmV0Y2hUb2tlblwiIG11c3QgYmUgYSBcImZ1bmN0aW9uXCIhYCk7XHJcblx0XHR0aGlzLiNmZXRjaFRva2VuID0gZmV0Y2hUb2tlbjtcclxuXHJcblx0XHRpZihhcHBlbmRUb2tlbiAmJiB0eXBlb2YgYXBwZW5kVG9rZW4gIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCJhcHBlbmRUb2tlblwiIG11c3QgYmUgYSBcImZ1bmN0aW9uXCIhYCk7XHJcblx0XHR0aGlzLiNhcHBlbmRUb2tlbiA9IGFwcGVuZFRva2VuIHx8IGRlZmF1bHRUb2tlbkFwcGVuZGVyO1xyXG5cclxuXHRcdHRoaXMuI3JlZnJlc2hJbnRlcnZhbCA9IHJlZnJlc2hJbnRlcnZhbDtcclxuXHRcdHRoaXMuI3JlZnJlc2hUb2tlbiA9IHJlZnJlc2hUb2tlbjtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRvQWNjZXB0KGRhdGEpIHtcclxuXHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdGhpcy4jY29uZGl0aW9uO1xyXG5cdFx0Y29uc3QgY29uZGl0aW9uID0gdGhpcy4jY29uZGl0aW9uO1xyXG5cdFx0Y29uc3Qgb3JpZ2luID0gZGF0YS5tZXRhZGF0YS5vcmlnaW47XHJcblx0XHRpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXdhaXQgY29uZGl0aW9uKGRhdGEpO1xyXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGNvbmRpdGlvbiA9PSBvcmlnaW47XHJcblx0XHRlbHNlIGlmIChjb25kaXRpb24gaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0cmV0dXJuIGNvbmRpdGlvbi5pbmNsdWRlcyhvcmlnaW4pO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRvSGFuZGxlKGRhdGEpIHtcclxuXHRcdGlmICghdGhpcy4jdG9rZW4pIHtcclxuXHRcdFx0Y29uc3QgeyB1cmwsIG1ldGFkYXRhIH0gPSBkYXRhO1xyXG5cdFx0XHR0aGlzLiNsYXN0RGF0YSA9IHsgdXJsLCBtZXRhZGF0YSB9O1xyXG5cdFx0XHR0aGlzLiN0b2tlbiA9IHRoaXMuI2ZldGNoVG9rZW4oeyB1cmwsIG1ldGFkYXRhIH0pO1xyXG5cdFx0XHR0aGlzLiNzdGFydFJlZnJlc2goKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy4jY2FsbEFwcGVuZFRva2VuKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgI2NhbGxBcHBlbmRUb2tlbihkYXRhKSB7XHJcblx0XHRjb25zdCBhcHBlbmRlciA9IHRoaXMuI2FwcGVuZFRva2VuO1xyXG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLiN0b2tlbjtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcGVuZGVyKHRva2VuLCBkYXRhKTtcclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDogZGF0YTtcclxuXHR9XHJcblxyXG5cdCNzdGFydFJlZnJlc2goKSB7XHJcblx0XHRpZiAodGhpcy4jcmVmcmVzaEludGVydmFsID4gMCkge1xyXG5cdFx0XHRjb25zdCByZWZyZXNoVG9rZW4gPSB0aGlzLiNyZWZyZXNoVG9rZW4gfHwgKCgpID0+IHRoaXMuI2ZldGNoVG9rZW4odGhpcy4jbGFzdERhdGEpKTtcclxuXHRcdFx0Y29uc3QgdGltZW91dCA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy4jcmVmcmVzaFRva2VuKVxyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy4jcmVmcmVzaFRva2VuKHRoaXMuI2xhc3REYXRhKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLiNmZXRjaFRva2VuKHRoaXMuI2xhc3REYXRhKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCh0aW1lb3V0LHRoaXMuI3JlZnJlc2hJbnRlcnZhbCApO1xyXG5cdFx0XHR9O1xyXG5cclxuXHJcblx0XHRcdHNldFRpbWVvdXQodGltZW91dCAsIHRoaXMuI3JlZnJlc2hJbnRlcnZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG59OyIsImltcG9ydCBPQXV0aEludGVyY2VwdG9yIGZyb20gXCIuL09BdXRoSW50ZXJjZXB0b3JcIjtcclxuaW1wb3J0IFRva2VuSW50ZXJjZXB0b3IgZnJvbSBcIi4vVG9rZW5JbnRlcmNlcHRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICB7XHJcblx0T0F1dGhJbnRlcmNlcHRvcixcclxuXHRUb2tlbkludGVyY2VwdG9yXHJcbn07IiwiaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL3NyYy9UZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3NyYy9SZW5kZXJlci5qc1wiO1xuXG5leHBvcnQge1RlbXBsYXRlLCBSZW5kZXJlcn07IiwiaW1wb3J0IHsgbGF6eVByb21pc2UgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJvbWlzZVV0aWxzXCI7XHJcbmltcG9ydCB7IGRlZkdldCwgZGVmVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHNcIjtcclxuaW1wb3J0IHsgcHJpdmF0ZVByb3BlcnR5IH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1ByaXZhdGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuL0RpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGVcIjtcclxuXHJcbmNvbnN0IFBSSVZBVEVfV0FJVCA9IFwid2FpdFwiO1xyXG5jb25zdCBQUklWQVRFX0NBTExCQUNLUyA9IFwiY2FsbGJhY2tzXCI7XHJcbmNvbnN0IFBSSVZBVEVfSUdOT1JFRElSRUNUSVZFUyA9IFwiaWdub3JlRGlyZWN0aXZlc1wiO1xyXG5cclxuY29uc3QgQ09OVEVYVENMT05FID0gbmV3IFNldCgpO1xyXG5jb25zdCBDT05URVhUUyA9IG5ldyBNYXAoKTtcclxuY29uc3QgV0FSTlRJTUUgPSAxMDAwO1xyXG5jb25zdCBDUklUSUNBTFRJTUUgPSAxMDAwMDtcclxuXHJcbmxldCBvYnNlcnZlclRpbWVvdXQgPSBudWxsO1xyXG5jb25zdCBvYnNlcnZlID0gKGNvbnRleHQpID0+IHtcclxuXHRDT05URVhUUy5zZXQoY29udGV4dCwgRGF0ZS5ub3coKSk7XHJcblx0cnVuT2JzZXJ2ZXIoKTtcclxufTtcclxuY29uc3QgcnVuT2JzZXJ2ZXIgPSAoKSA9PiB7XHJcblx0aWYgKG9ic2VydmVyVGltZW91dCA9PSBudWxsKSB7XHJcblx0XHRvYnNlcnZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0b2JzZXJ2ZXJUaW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0Y29uc3QgdGltZSA9IERhdGUubm93KCk7XHJcblx0XHRcdENPTlRFWFRTLmZvckVhY2goKGNyZWF0ZVRpbWUsIGNvbnRleHQpID0+IHtcclxuXHRcdFx0XHRjb25zdCBkZWx0YSA9IHRpbWUgLSBjcmVhdGVUaW1lO1xyXG5cdFx0XHRcdGlmIChjb250ZXh0LmNsb3NlZCkgQ09OVEVYVFMuZGVsZXRlKGNvbnRleHQpO1xyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGRlbHRhID4gQ1JJVElDQUxUSU1FKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJjb250ZXh0IGxpdmVzIGxvbmdlciB0aGVuIDEwc1wiLCBkZWx0YSAvIDEwMDAsIGNvbnRleHQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkZWx0YSA+IFdBUk5USU1FKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcImNvbnRleHQgbGl2ZXMgbG9uZ2VyIHRoZW4gMXNcIiwgZGVsdGEgLyAxMDAwLCBjb250ZXh0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIm9wZW4gY29udGV4dDpcIiwgQ09OVEVYVFMuc2l6ZSk7XHJcblx0XHRcdGlmIChDT05URVhUUy5zaXplID4gMCkgcnVuT2JzZXJ2ZXIoKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHRvVGVtcGxhdGUgPSAodGVtcGxhdGUpID0+IHtcclxuXHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcclxuXHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFN0cmluZykgcmV0dXJuIGNyZWF0ZSh0ZW1wbGF0ZSk7XHJcblx0cmV0dXJuIHRlbXBsYXRlO1xyXG59O1xyXG5cclxubGV0IGlkID0gMDtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XHJcblx0I2lkO1xyXG5cdCNkZXB0aDtcclxuXHQjcGFyZW50O1xyXG5cdCNyZW5kZXJlcjtcclxuXHQjcm9vdDtcclxuXHQjdGVtcGxhdGU7XHJcblx0I21vZGU7XHJcblx0I3N1YmNvbnRleHRzO1xyXG5cdCN3YWl0O1xyXG5cdCNpZ25vcmVEaXJlY3RpdmVzO1xyXG5cdCNjYWxsYmFja3M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHsgY29udGVudCA9IG51bGwsIHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgcm9vdCwgbW9kZSA9IFwicmVwbGFjZVwiLCB0YXJnZXQgPSBudWxsLCBwYXJlbnQgPSBudWxsLCB3YWl0ID0gbnVsbCwgY2FsbGJhY2tzID0gbnVsbCwgaWdub3JlRGlyZWN0aXZlIH0pIHtcclxuXHRcdGlmICghcmVzb2x2ZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicmVzb2x2ZXJcIiBpcyByZXF1aXJlZCEnKTtcclxuXHRcdGlmICghcmVuZGVyZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicmVuZGVyZXJcIiBpcyByZXF1aXJlZCEnKTtcclxuXHRcdGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwidGVtcGxhdGVcIiBpcyByZXF1aXJlZCEnKTtcclxuXHRcdGlmICghY29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcImNvbnRhaW5lclwiIGlzIHJlcXVpcmVkIScpO1xyXG5cdFx0aWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInJvb3RcIiBpcyByZXF1aXJlZCEnKTtcclxuXHJcblx0XHR0aGlzLiNpZCA9IHBhcmVudCA/IGAke3BhcmVudC5pZH0tPiR7aWQrK31gIDogYHJvb3Q6OiR7aWQrK31gO1xyXG5cdFx0dGhpcy4jZGVwdGggPSBwYXJlbnQgPyBwYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMuI3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcblx0XHR0aGlzLiNyb290ID0gcm9vdDtcclxuXHRcdHRoaXMuI3RlbXBsYXRlID0gdG9UZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcblx0XHR0aGlzLiNtb2RlID0gbW9kZTtcclxuXHRcdHRoaXMuI3N1YmNvbnRleHRzID0gbmV3IFNldCgpO1xyXG5cdFx0dGhpcy4jd2FpdCA9IHdhaXQgPyB3YWl0IDogbGF6eVByb21pc2UoKTtcclxuXHRcdHRoaXMuI2lnbm9yZURpcmVjdGl2ZXMgPSBpZ25vcmVEaXJlY3RpdmUgaW5zdGFuY2VvZiBTZXQgPyBpZ25vcmVEaXJlY3RpdmUgOiBuZXcgU2V0KCk7XHJcblx0XHR0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3MgaW5zdGFuY2VvZiBBcnJheSA/IGNhbGxiYWNrcyA6IFtdO1xyXG5cclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xyXG5cclxuXHRcdC8qIGV4ZWN1dGlvbiBmbGFncyAqL1xyXG5cdFx0dGhpcy5zdG9wID0gZmFsc2U7XHJcblx0XHR0aGlzLmlnbm9yZSA9IGZhbHNlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhgY29udGV4dD17XCJkZXB0aFwiOiR7dGhpcy5kZXB0aH0gfSwgXCJpZFwiOiAke3RoaXMuaWR9YCk7XHJcblx0XHQvL3RoaXMuY3JlYXRldEF0ID0gbmV3IEVycm9yKCk7XHJcblxyXG5cdFx0aWYgKHBhcmVudCkge1xyXG5cdFx0XHRwYXJlbnQuc3ViY29udGV4dHMuYWRkKHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI2lkO1xyXG5cdH1cclxuXHRnZXQgZGVwdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jZGVwdGg7XHJcblx0fVxyXG5cdGdldCBwYXJlbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jcGFyZW50O1xyXG5cdH1cclxuXHRnZXQgcmVuZGVyZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jcmVuZGVyZXI7XHJcblx0fVxyXG5cdGdldCByb290KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI3Jvb3Q7XHJcblx0fVxyXG5cdGdldCB0ZW1wbGF0ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLiN0ZW1wbGF0ZTtcclxuXHR9XHJcblx0c2V0IHRlbXBsYXRlKHRlbXBsYXRlKXtcclxuXHRcdHRoaXMuI3RlbXBsYXRlID0gdG9UZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcblx0fVxyXG5cclxuXHRnZXQgbW9kZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLiNtb2RlO1xyXG5cdH1cclxuXHRnZXQgc3ViY29udGV4dHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jc3ViY29udGV4dHM7XHJcblx0fVxyXG5cclxuXHRnZXQgY2xvc2VkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuI3dhaXQucmVzb2x2ZWQ7XHJcblx0fVxyXG5cclxuXHRpZ25vcmVEaXJlY3RpdmUoZGlyZWN0aXZlKSB7XHJcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcztcclxuXHRcdGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERpcmVjdGl2ZSA/IGlnbm9yZURpcmVjdGl2ZXMuYWRkKGRpcmVjdGl2ZS5uYW1lKSA6IGlnbm9yZURpcmVjdGl2ZXMuYWRkKGRpcmVjdGl2ZSk7XHJcblx0fVxyXG5cclxuXHRhY2NlcHREaXJlY3RpdmUoZGlyZWN0aXZlKSB7XHJcblx0XHRjb25zdCBpZ25vcmVEaXJlY3RpdmVzID0gdGhpcy4jaWdub3JlRGlyZWN0aXZlcztcclxuXHRcdGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpIHJldHVybiAhKGlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZS5uYW1lKSB8fCBpZ25vcmVEaXJlY3RpdmVzLmhhcyhkaXJlY3RpdmUpKTtcclxuXHJcblx0XHRyZXR1cm4gIWlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZSk7XHJcblx0fVxyXG5cclxuXHRmaW5pc2hlZChjYWxsYmFjaykge1xyXG5cdFx0aWYgKHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5maW5pc2hlZChjYWxsYmFjayk7XHJcblx0XHRlbHNlIHRoaXMucmVhZHkoY2FsbGJhY2spO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVhZHkoY2FsbGJhY2spIHtcclxuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuI2NhbGxiYWNrcztcclxuXHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBBcnJheSkgY2FsbGJhY2suZm9yRWFjaCgoY2FsbGJhY2spID0+IHRoaXMud2FpdC50aGVuKGNhbGxiYWNrKSk7XHJcblx0XHRcdGVsc2UgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgUHJvbWlzZSkgY2FsbGJhY2tzLnB1c2goYXN5bmMgKCkgPT4gYXdhaXQgY2FsbGJhY2spO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgd2FpdCA9IHRoaXMuI3dhaXQ7XHJcblx0XHRcdGlmICghd2FpdC5yZXNvbHZlZCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5pZ25vcmUpIGZvciAobGV0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykgYXdhaXQgY2FsbGJhY2sodGhpcyk7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIHRoaXMuc3ViY29udGV4dHMpIGF3YWl0IGNoaWxkLnJlYWR5KCk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQuc3ViY29udGV4dHMuZGVsZXRlKHRoaXMpO1xyXG5cclxuXHRcdFx0XHR3YWl0LnJlc29sdmUodGhpcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB3YWl0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3ViQ29udGV4dCh7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gbnVsbCB9ID0ge30pIHtcclxuXHRcdHJldHVybiBuZXcgQ29udGV4dCh7IHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgbW9kZSwgcm9vdCwgdGFyZ2V0LCBwYXJlbnQ6IHRoaXMsIGlnbm9yZURpcmVjdGl2ZSB9KTtcclxuXHR9XHJcblxyXG5cdGNsb25lKHsgY29udGVudCA9IHRoaXMuY29udGVudCwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IHRoaXMuI2lnbm9yZURpcmVjdGl2ZXMgfSA9IHt9KSB7XHJcblx0XHRyZXR1cm4gbmV3IENvbnRleHQoeyBjb250ZW50LCBcclxuXHRcdFx0cmVzb2x2ZXI6IHRoaXMucmVzb2x2ZXIsIFxyXG5cdFx0XHRyZW5kZXJlcjogdGhpcy5yZW5kZXJlciwgXHJcblx0XHRcdHRlbXBsYXRlLCBcclxuXHRcdFx0Y29udGFpbmVyLCBcclxuXHRcdFx0cm9vdCwgXHJcblx0XHRcdG1vZGUsIFxyXG5cdFx0XHR0YXJnZXQsIFxyXG5cdFx0XHRpZ25vcmVEaXJlY3RpdmUsXHJcblx0XHRcdHdhaXQ6IHRoaXMuI3dhaXQsXHJcblx0XHRcdGNhbGxiYWNrczogdGhpcy4jY2FsbGJhY2tzXHJcblx0XHQgfSk7XHJcblx0fVxyXG5cclxuXHR0b1JlbmRlck9wdGlvbih7IHJlc29sdmVyID0gdGhpcy5yZXNvbHZlciwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUsIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCByb290ID0gdGhpcy5yb290LCBtb2RlID0gdGhpcy5tb2RlLCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaWdub3JlRGlyZWN0aXZlID0gbnVsbCB9ID0ge30pIHtcclxuXHRcdHJldHVybiB7IHJlc29sdmVyLCByZW5kZXJlciwgdGVtcGxhdGUsIGNvbnRhaW5lciwgbW9kZSwgcm9vdCwgdGFyZ2V0LCBwYXJlbnQ6IG51bGwsIGlnbm9yZURpcmVjdGl2ZSB9O1xyXG5cdH1cclxufVxyXG4iLCJjb25zdCBERUZJTkVEX0RJUkVDVElWRVMgPSBbXTtcblxuY29uc3QgZGVmaW5lRGlyZWN0aXZlID0gKHsgZGlyZWN0aXZlIH0pID0+IHtcblx0aWYgKCEoZGlyZWN0aXZlIGluc3RhbmNlb2YgRGlyZWN0aXZlKSlcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbXBsZW1lbnRhdGlvbiBkb3NuJ3QgZXh0ZW5kIERpcmVjdGl2ZSBjbGFzcyFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rIDwgRGlyZWN0aXZlLk1JTl9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGxvd2VyIGFzIFwiICsgRGlyZWN0aXZlLk1JTl9SQU5LICsgXCIhXCIpO1xuXG5cdGlmIChkaXJlY3RpdmUucmFuayA+IERpcmVjdGl2ZS5NQVhfUkFOSylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmFuayBvZiBhIGRpcmVjdGl2ZSBjYW4ndCBiZSBncmF0ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUFYX1JBTksgKyBcIiFcIik7XG5cblx0REVGSU5FRF9ESVJFQ1RJVkVTLnB1c2goZGlyZWN0aXZlKTtcblx0REVGSU5FRF9ESVJFQ1RJVkVTLnNvcnQoKGEsIGIpID0+IHtcblx0XHRjb25zdCBwaGFzZSA9IGEucGhhc2UgLSBiLnBoYXNlO1xuXHRcdGlmKHBoYXNlID09IDApXG5cdFx0XHRyZXR1cm4gYS5yYW5rIC0gYi5yYW5rO1xuXHRcdFx0XG5cdFx0cmV0dXJuIHBoYXNlO1xuXHR9KTtcbn07XG5cbmNvbnN0IFBIQVNFID0ge1xuXHRpbml0OiAwLFxuXHRkYXRhOiAxLFxuXHR0ZW1wbGF0ZTogMixcblx0Y29udGVudDogMyxcblx0ZmluaXNoOiA0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmUge1xuXG5cdHN0YXRpYyBnZXQgUEhBU0UoKSB7IHJldHVybiBQSEFTRSB9O1xuXHRzdGF0aWMgZ2V0IE1JTl9SQU5LKCkgeyByZXR1cm4gMCB9O1xuXHRzdGF0aWMgZ2V0IE1BWF9SQU5LKCkgeyByZXR1cm4gMTAwMDAwIH07XG5cblx0Y29uc3RydWN0b3IoKSB7IH07XG5cblx0Z2V0IG5hbWUoKSB7IH1cblx0Z2V0IHJhbmsoKSB7IH1cblx0Z2V0IHBoYXNlKCkge3JldHVybiBQSEFTRS5maW5pc2h9XG5cblx0LyoqXG5cdCAqIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWRcblx0ICogXG5cdCAqIHJldHVybiBEaXJlY3RpdmVSZXN1bHRcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblxuXHRzdGF0aWMgZGVmaW5lKG9wdGlvbikge1xuXHRcdGRlZmluZURpcmVjdGl2ZShvcHRpb24pO1xuXHR9XG5cblx0c3RhdGljIGdldCBkaXJlY3RpdmVzKCkge1xuXHRcdHJldHVybiBERUZJTkVEX0RJUkVDVElWRVM7XG5cdH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5oaWRkZW4gPSB0cnVlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogbmVlZCB0byBiZSBpbXBsZW1lbnRlZFxuXHQgKiBcblx0ICovXG5cdGFzeW5jIGV4ZWN1dGUoe3RlbXBsYXRlLCBjb250ZXh0fSl7XG5cdFx0Y29udGV4dC5jb250ZW50ID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9O1x0XG59IiwiaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbVwiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XG5pbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9kaXJlY3RpdmVzXCI7XG5pbXBvcnQgXCIuL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTQ09QRVMgPSB7XG5cdGFwcGxpY2F0aW9uOiBcImFwcGxpY2F0aW9uXCIsXG5cdGRhdGE6IFwiZGF0YVwiLFxuXHRyZW5kZXI6IFwicmVuZGVyXCIsXG5cdGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcblx0bm9kZTogXCJub2RlXCIsXG5cdGRpcmVjdGl2ZTogXCJkaXJlY3RpdmVcIixcbn07XG5cbmNvbnN0IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5hcHBsaWNhdGlvbiB9KTtcblxuY29uc3QgTU9ERVdPUktFUiA9IHtcblx0cmVwbGFjZTogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHR0YXJnZXQucmVwbGFjZShjb250ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGFpbmVyLmVtcHR5KCk7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHRcdH1cblx0fSxcblx0YXBwZW5kOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldC5hZnRlcihjb250ZW50KTtcblx0XHRlbHNlIGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG5cdH0sXG5cdHByZXBlbmQ6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkgdGFyZ2V0LmJlZm9yZShjb250ZW50KTtcblx0XHRlbHNlIGNvbnRhaW5lci5wcmVwZW5kKGNvbnRlbnQpO1xuXHR9LFxufTtcblxuY29uc3QgbG9hZFRlbXBsYXRlQ29udGVudCA9IGFzeW5jICh0ZW1wbGF0ZSwgcmVuZGVyZXIpID0+IHtcblx0aWYgKHRlbXBsYXRlKSB7XG5cdFx0dGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKTtcblx0XHRyZXR1cm4gdGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHR9IGVsc2UgaWYgKHJlbmRlcmVyLnRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuIGF3YWl0IHJlbmRlcmVyLnRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihcIk5vIGNvbnRlbnQgdGVtcGxhdGUgc3BlY2lmaWVkIVwiKTtcbn07XG5cbmNvbnN0IGFkZENvbnRlbnQgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHRpZiAoY29udGV4dC5jb250ZW50KSB7XG5cdFx0Y29uc3QgbW9kZXdvcmtlciA9IE1PREVXT1JLRVJbY29udGV4dC5tb2RlXTtcblx0XHRpZiAoIW1vZGV3b3JrZXIpIHRocm93IG5ldyBFcnJvcignVGhlIFwiJyArIGNvbnRleHQubW9kZSArICdcIiBpcyBub3Qgc3VwcG9ydGVkIScpO1xuXHRcdGF3YWl0IG1vZGV3b3JrZXIoY29udGV4dCk7XG5cdH1cbn07XG5cbmNvbnN0IHJlbmRlckNvbnRhaW5lciA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciB9ID0gY29udGV4dDtcblx0aWYgKCF0ZW1wbGF0ZSB8fCB0ZW1wbGF0ZS5sZW5ndGggPT0gMCkgcmV0dXJuIGNvbnRleHQ7XG5cblx0bGV0IGNvbnRlbnQgPSBbXTtcblx0Zm9yIChsZXQgbm9kZVRlbXBsYXRlIG9mIHRlbXBsYXRlKSB7XG5cdFx0bm9kZVRlbXBsYXRlLm5vcm1hbGl6ZSgpO1xuXHRcdGNvbnN0IG5vZGVSZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMubm9kZSwgY29udGV4dDogbnVsbCwgcGFyZW50OiByZXNvbHZlciB9KTtcblx0XHRjb25zdCBub2RlQ29udGV4dCA9IGF3YWl0IHJlbmRlck5vZGUoY29udGV4dC5zdWJDb250ZXh0KHsgdGVtcGxhdGU6IG5vZGVUZW1wbGF0ZSwgcmVzb2x2ZXI6IG5vZGVSZXNvbHZlciB9KSk7XG5cdFx0YXdhaXQgbm9kZUNvbnRleHQucmVhZHkoKTtcblx0XHRjb25zdCBub2RlID0gbm9kZUNvbnRleHQuY29udGVudDtcblx0XHRpZiAobm9kZSkge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSkgY29udGVudCA9IGNvbnRlbnQuY29uY2F0KG5vZGUpO1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIGNvbnRlbnQgPSBjb250ZW50LmNvbmNhdChBcnJheS5mcm9tKG5vZGUpKTtcblx0XHRcdGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSBjb250ZW50LnB1c2gobm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0Y29udGV4dC5jb250ZW50ID0gY29udGVudC5sZW5ndGggIT0gMCA/IGNvbnRlbnQgOiBudWxsO1xuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cbmNvbnN0IHJlbmRlck5vZGUgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXHR0cnkge1xuXHRcdGxldCB7IHRlbXBsYXRlLCByZW5kZXJlciB9ID0gY29udGV4dDtcblx0XHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KSBhd2FpdCB0ZW1wbGF0ZS5leGVjdXRlKGNvbnRleHQpO1xuXHRcdGVsc2UgYXdhaXQgZXhlY3V0ZURpcmVjdGl2ZXMoY29udGV4dCk7XG5cblx0XHRjb25zdCB7IGlnbm9yZSwgY29udGVudCB9ID0gY29udGV4dDtcblxuXHRcdGlmICghaWdub3JlICYmIGNvbnRlbnQpIHtcblx0XHRcdGxldCB7IHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgc3ViVGVtcGxhdGUgPSBjb250ZXh0LnRlbXBsYXRlLmNoaWxkTm9kZXM7XG5cdFx0XHRpZiAoc3ViVGVtcGxhdGUgJiYgc3ViVGVtcGxhdGUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBjb250YWluZXJSZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuY29udGFpbmVyLCBjb250ZXh0OiBudWxsLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXHRcdFx0XHRjb25zdCBzdWJDb250ZXh0ID0gYXdhaXQgcmVuZGVyZXIucmVuZGVyKGNvbnRleHQuc3ViQ29udGV4dCh7IGNvbnRhaW5lcjogY29udGVudCwgdGVtcGxhdGU6IHN1YlRlbXBsYXRlLCByZXNvbHZlcjogY29udGFpbmVyUmVzb2x2ZXIgfSkpO1xuXHRcdFx0XHRhd2FpdCBzdWJDb250ZXh0LnJlYWR5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRleHQuY29udGVudCAmJiBjb250ZXh0LmNvbnRlbnQudGFnTmFtZSAmJiBjb250ZXh0LmNvbnRlbnQudGFnTmFtZSA9PSBcIkpTVExcIikgY29udGV4dC5jb250ZW50ID0gY29udGV4dC5jb250ZW50LmNoaWxkTm9kZXM7IC8vc3BlY2lhbCBjYXNlIHRvIHN1cHBvcnQgdGhlIG9sZCBcIjxqc3RsPlwiIHRhZy5cblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCByZW5kZXIgbm9kZTpcIiwgZSwgY29udGV4dCk7XG5cdH1cblx0cmV0dXJuIGNvbnRleHQ7XG59O1xuXG5jb25zdCBleGVjdXRlRGlyZWN0aXZlcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBEaXJlY3RpdmUuZGlyZWN0aXZlcztcblx0Y29uc3QgbGVuZ3RoID0gZGlyZWN0aXZlcy5sZW5ndGg7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICYmICFjb250ZXh0LnN0b3A7IGkrKykge1xuXHRcdGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbaV07XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjb250ZXh0LmFjY2VwdERpcmVjdGl2ZShkaXJlY3RpdmUpKSBhd2FpdCBkaXJlY3RpdmUuZXhlY3V0ZShjb250ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgZGlyZWN0aXZlOlwiLCBlLCBkaXJlY3RpdmUsIGNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSwgZGF0YSB9ID0ge30pIHtcblx0XHRpZiAodGVtcGxhdGUgJiYgISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSkgdGhyb3cgbmV3IEVycm9yKFwidGVtcGxhdGUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBUZW1wbGF0ZSFcIik7XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5yZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBuYW1lOiBTQ09QRVMuZGF0YSwgY29udGV4dDogZGF0YSA/IGRhdGEgOiB7fSwgcGFyZW50OiBBUFBMSUNBVElPTl9TQ09QRV9SRVNPTFZFUiB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW1cblx0ICogXHRcdGNvbnRhaW5lciBIVE1MRWxlbWVudCAtPiB0YXJnZXQgdG8gcmVuZGVyIGluXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0ZGF0YSBPYmplY3R8Li4uIC0+IGRhdGEgdG8gdXNlZCBhdCByZW5kZXJpbmdcblx0ICogQHBhcmFtXG5cdCAqIFx0XHR0ZW1wbGF0ZSBUZW1wbGF0ZXxOb2RlfE5vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufFN0cmluZyAtPiB0ZW1wbGF0ZSB0byByZW5kZXJcblx0ICogQHBhcmFtXG5cdCAqIFx0XHRtb2RlIFwiYXBwZW5kXCJ8XCJpbnNlcnRcInxcInJlcGxhY2VcIlxuXHQgKiBAcGFyYW1cblx0ICogXHRcdHRhcmdldFxuXHQgKi9cblx0YXN5bmMgcmVuZGVyKGNvbnRleHQpIHtcblx0XHRjb25zdCBjYWxsZWRXaXRoQ29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBDb250ZXh0O1xuXHRcdGlmICghY2FsbGVkV2l0aENvbnRleHQpIHtcblx0XHRcdGxldCB7IHRlbXBsYXRlID0gbnVsbCwgZGF0YSA9IG51bGwsIGNvbnRhaW5lciwgcm9vdCwgbW9kZSwgdGFyZ2V0IH0gPSBjb250ZXh0O1xuXHRcdFx0dGVtcGxhdGUgPSBhd2FpdCBsb2FkVGVtcGxhdGVDb250ZW50KHRlbXBsYXRlLCB0aGlzKTtcblx0XHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5yZW5kZXIsIGNvbnRleHQ6IGRhdGEsIHBhcmVudDogdGhpcy5yZXNvbHZlciB9KTtcblx0XHRcdGNvbnRleHQgPSBuZXcgQ29udGV4dCh7IHJlc29sdmVyLCByZW5kZXJlcjogdGhpcywgdGVtcGxhdGU6IHRlbXBsYXRlLCBjb250YWluZXIsIHJvb3Q6IHJvb3QgPyByb290IDogY29udGFpbmVyLCBtb2RlOiBtb2RlID8gbW9kZSA6IFwicmVwbGFjZVwiLCB0YXJnZXQgfSk7XG5cdFx0fSBlbHNlIGlmIChjb250ZXh0LmNsb3NlZCkgdGhyb3cgbmV3IEVycm9yKFwiY2FsbGluZyB3aXRoIGNsb3NlZCBjb250ZXh0XCIsIGNvbnRleHQpO1xuXG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBjb250ZXh0LnRlbXBsYXRlO1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIE5vZGUpIGF3YWl0IHJlbmRlck5vZGUoY29udGV4dCk7XG5cdFx0ZWxzZSBhd2FpdCByZW5kZXJDb250YWluZXIoY29udGV4dCk7XG5cdFx0XG5cdFx0YXdhaXQgYWRkQ29udGVudChjb250ZXh0KTtcblxuXHRcdGlmICghY2FsbGVkV2l0aENvbnRleHQpXG5cdFx0XHRhd2FpdCBjb250ZXh0LnJlYWR5KCk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBidWlsZCh7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZSBpbnN0YW5jZW9mIFByb21pc2UpIHRlbXBsYXRlID0gYXdhaXQgdGVtcGxhdGU7XG5cblx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlID8gYXdhaXQgVGVtcGxhdGUubG9hZCh0ZW1wbGF0ZSkgOiBudWxsO1xuXHRcdHJldHVybiBuZXcgUmVuZGVyZXIoeyB0ZW1wbGF0ZSwgZGF0YSB9KTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyByZW5kZXIoeyBjb250YWluZXIsIGRhdGEsIHRlbXBsYXRlLCBtb2RlLCB0YXJnZXQgfSkge1xuXHRcdGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHsgdGVtcGxhdGUsIGRhdGEgfSk7XG5cdFx0cmV0dXJuIHJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lciwgbW9kZSwgdGFyZ2V0IH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qc1wiO1xuXG5leHBvcnQgY29uc3QgTk9ERV9BVFRSSUJVVEVfVEVNUExBVEUgPSBcInRlbXBsYXRlXCI7XG5jb25zdCBDQUNIRSA9IHt9O1xuY29uc3QgZ2V0S2V5ID0gKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpID0+IHtcblx0aWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cblx0bGV0IGtleSA9IG51bGw7XG5cdGlmIChhbGlhcykga2V5ID0gYWxpYXM7XG5cdGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gXCJzdHJpbmdcIikga2V5ID0gdGVtcGxhdGU7XG5cdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKSBrZXkgPSB0ZW1wbGF0ZS50b1N0cmluZygpO1xuXHRlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBrZXkgPSB0ZW1wbGF0ZS5zZWxlY3RvcigpO1xuXG5cdGlmIChrZXkpIHJldHVybiBrZXkuaGFzaGNvZGUoKTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGZyb21VUkwgPSBhc3luYyAodXJsLCBjYWNoZSwga2V5KSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCkpO1xuXHRjb25zdCBzb3VyY2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cdHJldHVybiBmcm9tU291cmNlKHNvdXJjZSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tU291cmNlID0gYXN5bmMgKHNvdXJjZSwgY2FjaGUsIGtleSkgPT4ge1xuXHRyZXR1cm4gZnJvbUVsZW1lbnQoY3JlYXRlKHNvdXJjZSwgdHJ1ZSksIGNhY2hlLCBrZXkpO1xufTtcblxuY29uc3QgZnJvbUVsZW1lbnQgPSBhc3luYyAoZWxlbWVudCwgY2FjaGUsIGtleSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBudWxsO1xuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKGVsZW1lbnQsIGtleSk7XG5cdGVsc2Uge1xuXHRcdHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSB8fCBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgdGVtcGxhdGUuY29udGVudC5hcHBlbmQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcblxuXHRcdHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHRlbXBsYXRlLCBrZXkpO1xuXHR9XG5cblx0aWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgY2FuJ3QgbG9hZGVkIVwiKTtcblxuXHRpZiAoY2FjaGUgJiYga2V5KSBDQUNIRVtrZXldID0gdGVtcGxhdGU7XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuY29uc3QgZ2V0VGVtcGxhdGUgPSAobm9kZSkgPT4ge1xuXHRsZXQgdGVtcGxhdGUgPSBub2RlLmZpbmQoXCI6c2NvcGUgPiB0ZW1wbGF0ZVwiKS5maXJzdCgpO1xuXHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHRjb25zdCB2YWx1ZSA9IG5vZGUuYXR0cihOT0RFX0FUVFJJQlVURV9URU1QTEFURSk7XG5cdGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuXHR0cnkge1xuXHRcdHRlbXBsYXRlID0gZmluZCh2YWx1ZSkuZmlyc3QoKTtcblx0XHRpZiAoISF0ZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlO1xuXHR9IGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gbmV3IFVSTCh2YWx1ZSwgbG9jYXRpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGUge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGVtcGxhdGUuXG5cdCAqIFxuXHQgKiBAcGFyYW0gdGVtcGxhdGUgdHlwZSBvZiBIVE1MVGVtcGxhdGVFbGVtZW50LiBOb3QgbnVsbC5cblx0ICogQHBhcmFtIGtleSBpZGVudGlmaWVyIGF0IGNhY2hlLCBpZiB0ZW1wbGF0ZSB0byBiZSBjYWNoZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovIHRlbXBsYXRlLC8qKiBAdHlwZSB7c3RyaW5nfSAqLyBrZXkpIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdH1cblxuXHRpbXBvcnRDb250ZW50KGRvYyA9IGRvY3VtZW50KSB7XG5cdFx0bGV0IGltcG9ydGVkID0gZG9jLmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIGltcG9ydGVkLmNvbnRlbnQuY2hpbGROb2Rlcztcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAodGhpcy5rZXkgJiYgQ0FDSEVbdGhpcy5rZXldKSBkZWxldGUgQ0FDSEVbdGhpcy5rZXldO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGZldGNoKHVybCwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpIHtcblx0XHRpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIFRlbXBsYXRlLmxvYWQobmV3IFVSTCh1cmwsIGxvYWN0aW9uKSwgY2FjaGUsIGFsaWFzKTtcblx0XHR9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkgcmV0dXJuIFRlbXBsYXRlLmxvYWQodXJsLCBjYWNoZSwgYWxpYXMpO1xuXG5cdFx0bmV3IEVycm9yKFwiVGhlIHVybCBpc24ndCBhIGFsbG93ZWQgdHlwZSEgLT4gW1N0cmluZ3xVUkxdIHJlcXVpcmVkIVwiKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBsb2FkKHRlbXBsYXRlLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCkge1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGU7XG5cblx0XHRjb25zdCBrZXkgPSBnZXRLZXkodGVtcGxhdGUsIGNhY2hlLCBhbGlhcyk7XG5cdFx0aWYgKGtleSAmJiBDQUNIRVtrZXldKSByZXR1cm4gQ0FDSEVba2V5XTtcblx0XHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBmcm9tU291cmNlKHRlbXBsYXRlLCBjYWNoZSwga2V5KTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKSByZXR1cm4gYXdhaXQgZnJvbVVSTCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHJldHVybiBmcm9tRWxlbWVudCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cblx0XHRuZXcgRXJyb3IoXCJUaGUgdGVtcGxhdGUgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMfE5vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258VGVtcGxhdGVdIHJlcXVpcmVkIVwiKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBsb2FkTm9kZVRlbXBsYXRlKG5vZGUsIGRlZmF1bHRUZW1wbGF0ZSwgY2FjaGUsIGFsaWFzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUobm9kZSk7XG5cdFx0XHRpZiAodGVtcGxhdGUpIHJldHVybiBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlLCBjYWNoZSwgYWxpYXMpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIkNhbid0IGxvYWQgdGVtcGxhdGUgZnJvbSBub2RlIVwiLCBub2RlLCBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdFRlbXBsYXRlO1xuXHR9XG59XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcclxuXHJcbmNvbnN0IEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVCA9IFwianN0bC1hdHRhY2gtZWxlbWVudFwiO1xyXG5jb25zdCBBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlRfTU9ERSA9IFwianN0bC1hdHRhY2gtZWxlbWVudC1tb2RlXCI7XHJcblxyXG5jb25zdCBNT0RFX0FQUEVORCA9IFwiYXBwZW5kXCI7XHJcbmNvbnN0IE1PREVfUFJFUEVORCA9IFwicHJlcGVuZFwiO1xyXG5jb25zdCBNT0RFX1JFUExBQ0UgPSBcInJlcGxhY2VcIjtcclxuXHJcbmNvbnN0IFBSRUNIRUNLID0gL14jLiskLztcclxuXHJcbmNvbnN0IGdldEVsZW1lbnQgPSBhc3luYyAodGVtcGxhdGUsIHJlc29sdmVyKSA9PiB7XHJcblx0bGV0IGVsZW1lbnQgPSAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfX0FUVEFDSEVMRU1FTlQpIHx8IFwiXCIpLnRyaW0oKTtcclxuXHRpZiAoIVBSRUNIRUNLLnRlc3QoZWxlbWVudCkpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGVsZW1lbnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGVsZW1lbnQsIGVsZW1lbnQpO1xyXG5cdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybiBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGVsZW1lbnQgPSBmaW5kKGVsZW1lbnQpO1xyXG5cdH0gY2F0Y2ggKGUpIHt9XHJcblxyXG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoID4gMCkgcmV0dXJuIGVsZW1lbnQubGVuZ3RoID09IDAgPyBlbGVtZW50LmZpcnN0KCkgOiBlbGVtZW50O1xyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNsYXNzIEF0dGFjaEVsZW1lbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldCBuYW1lKCkge1xyXG5cdFx0cmV0dXJuIFwiYXR0YWNoLWVsZW1lbnRcIjtcclxuXHR9XHJcblx0Z2V0IHJhbmsoKSB7XHJcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMTtcclxuXHR9XHJcblx0Z2V0IHBoYXNlKCkge1xyXG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XHJcblx0XHRjb25zdCB7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgY29udGVudCB9ID0gY29udGV4dDtcclxuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9fQVRUQUNIRUxFTUVOVCkpIHJldHVybiBjb250ZXh0O1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBhd2FpdCBnZXRFbGVtZW50KHRlbXBsYXRlLCByZXNvbHZlcik7XHJcblx0XHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc3QgbW9kZSA9IHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFX19BVFRBQ0hFTEVNRU5UX01PREUpIHx8IE1PREVfUkVQTEFDRTtcclxuXHRcdFx0XHRpZiAobW9kZSA9PSBNT0RFX1JFUExBQ0UpIHtcclxuXHRcdFx0XHRcdGNvbnRlbnQuZW1wdHkoKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHRcdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb250ZXh0LnJlYWR5KCh7IGNvbnRlbnQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoY29udGVudCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtb2RlID09IE1PREVfQVBQRU5EKSBjb250ZW50LmFwcGVuZChlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmIChtb2RlID09IE1PREVfUFJFUEVORCkgY29udGVudC5wcmVwZW5kKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSwgeyBjb250ZXh0IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb250ZXh0O1xyXG5cdH1cclxufVxyXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0YWNoRWxlbWVudCgpIH0pO1xyXG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgQVRUUklCVVRFX05BTUUgPSAvKGpzdGwpPyhcXD8pPyhAKT8oW15cXD9AXSspL2k7XG5cbmNvbnN0IERFRkFVTFRfRVZFTlRfRlVOQ1RJT04gPSBcImRlZmF1bHRcIjtcbmNvbnN0IE9QVElPTl9QUkVWRU5UX0RFRkFVTFQgPSBcInByZXZlbnQtZGVmYXVsdFwiXG5jb25zdCBJR05PUkVEX0FUVFJJQlVURVMgPSBbXCJpc1wiXTtcblxuY29uc3QgRVZFTlRGVU5DVElPTlMgPSB7XG5cdGRlbGVnYXRlOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBldmVudGhhbmRsZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGhhbmRsZSwgaGFuZGxlKTtcblx0XHRjb250ZW50Lm9uKGV2ZW50LCBkZWxlZ2F0ZXIoZXZlbnRoYW5kbGUsIHNldHRpbmcpKTtcblx0fSxcblx0dG9nZ2xlY2xhc3M6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGNsYXp6ID0gb3B0aW9ucy5zaGlmdCgpO1xuXHRcdGNvbnN0IHByZXZlbnREZWZhdWx0ID0gb3B0aW9ucy5pbmNsdWRlcyhPUFRJT05fUFJFVkVOVF9ERUZBVUxUKTtcblx0XHRjb25zdCBzZWxlY3RvciA9IGhhbmRsZSA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGhhbmRsZSwgaGFuZGxlKSA6IG51bGw7XHRcdFxuXHRcdGNvbnRlbnQub24oZXZlbnQsIChldmVudCkgPT4ge1xuXHRcdFx0aWYocHJldmVudERlZmF1bHQpXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZihzZWxlY3Rvcilcblx0XHRcdFx0Y29udGVudC5jbG9zZXN0cyhzZWxlY3RvcikudG9nZ2xlQ2xhc3MoY2xhenopO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjb250ZW50LnRvZ2dsZUNsYXNzKGNsYXp6KTtcblx0XHR9KTtcblx0fSxcblx0dG9nZ2xlYXR0cmlidXRlOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLnNoaWZ0KCk7XG5cdFx0Y29uc3QgcHJldmVudERlZmF1bHQgPSBvcHRpb25zLmluY2x1ZGVzKE9QVElPTl9QUkVWRU5UX0RFRkFVTFQpO1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gaGFuZGxlID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpIDogbnVsbDtcdFx0XG5cdFx0Y29udGVudC5vbihldmVudCwgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZihwcmV2ZW50RGVmYXVsdClcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKHNlbGVjdG9yKVxuXHRcdFx0XHRjb250ZW50LmNsb3Nlc3RzKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSlcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdGVsc2UgXG5cdFx0XHRcdGNvbnRlbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cdFx0fSk7XG5cdH0sXG5cdFtERUZBVUxUX0VWRU5UX0ZVTkNUSU9OXTogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgZXZlbnRoYW5kbGUgPSBoYW5kbGUgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGhhbmRsZSwgaGFuZGxlKSA6IG51bGw7XG5cblx0XHRpZiAoIWV2ZW50aGFuZGxlKSBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkNhbid0IHJlc29sdmUgXFxcIlwiICsgaGFuZGxlICsgJ1wiIHRvIGV2ZW50IGhhbmRsZSEnKSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcImZ1bmN0aW9uXCIpIGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwic3RyaW5nXCIpIGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSwgc2V0dGluZykpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0Y29uc3QgeyBjYXB0dXJlID0gZmFsc2UsIHBhc3NpdmUgPSBmYWxzZSwgb25jZSA9IGZhbHNlIH0gPSBldmVudGhhbmRsZTtcblx0XHRcdGNvbnRlbnQub24oZXZlbnQsIGV2ZW50aGFuZGxlLmV2ZW50SGFuZGxlLCB7IGNhcHR1cmUsIHBhc3NpdmUsIG9uY2UgfSk7XG5cdFx0fVxuXHR9LFxufTtcblxuY29uc3QgYmluZEF0dHJpYnV0ZSA9IGFzeW5jICh7IGNvbmRpdGlvbiwgbmFtZSwgdmFsdWUsIGNvbnRleHQgfSkgPT4ge1xuXHRjb25zdCB7IHJlc29sdmVyLCBjb250ZW50LCB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblxuXHRsZXQgYXR0cmlidXRlID0gIWNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihuYW1lKTtcblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiP1wiICsgbmFtZSk7XG5cdGNvbnN0IGhhc1ZhbHVlID0gaXNWYWx1ZShhdHRyaWJ1dGUpO1xuXG5cdGlmIChjb25kaXRpb24gJiYgaGFzVmFsdWUpIHtcblx0XHRjb25kaXRpb24gPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpO1xuXHRcdGlmIChjb25kaXRpb24gPT09IHRydWUpIGNvbnRlbnQuYXR0cihuYW1lLCBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChhdHRyaWJ1dGUsIGF0dHJpYnV0ZSkpO1xuXHR9IGVsc2UgaWYgKGNvbmRpdGlvbikge1xuXHRcdGNvbmRpdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkgY29udGVudC5hdHRyKG5hbWUsIHRydWUpO1xuXHR9IGVsc2UgaWYgKGhhc1ZhbHVlKSB7XG5cdFx0Y29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH1cbn07XG5cbmNvbnN0IGlzVmFsdWUgPSAodmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiO1xufTtcblxuY29uc3QgYmluZEV2ZW50ID0gYXN5bmMgKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIHRlbXBsYXRlLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIj9AXCIgKyBuYW1lKTtcblx0bGV0IGhhbmRsZSA9ICFjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCJAXCIgKyBuYW1lKTtcblx0bGV0IHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG5cdGNvbnN0IGV2ZW50ID0gc3BsaXQuc2hpZnQoKTtcblx0Y29uc3QgdHlwZSA9IChzcGxpdC5zaGlmdCgpIHx8IERFRkFVTFRfRVZFTlRfRlVOQ1RJT04pLnRvTG93ZXJDYXNlKCk7XG5cdFxuXHRpZih0eXBlb2YgaGFuZGxlID09PSBcInVuZGVmaW5lZFwiIHx8IGhhbmRsZSA9PSBudWxsKVxuXHRcdGNvbnNvbGUuZXJyb3IoYERlZmluaXRpb24gb2YgXCIke2V2ZW50fVwiIC0gZXZlbnQgaGFuZGxlIGF0YCwgY29udGVudCwgXCJpcyBpbmNvcnJlY3QhXCIpO1xuXG5cdGhhbmRsZSA9IGhhbmRsZS50cmltKCk7XG5cdGNvbnN0IHNldHRpbmcgPSB7XG5cdFx0YnViYmxlOiB0cnVlLFxuXHR9O1xuXG5cdGlmIChjb25kaXRpb24gKSB7XG5cdFx0aWYgKChhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpKSA9PSB0cnVlKSBhd2FpdCBiaW5kaW5nKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBzcGxpdCwgY29udGV4dCk7XG5cdH0gZWxzZSBhd2FpdCBiaW5kaW5nKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBzcGxpdCwgY29udGV4dCk7XG59O1xuXG5jb25zdCBiaW5kaW5nID0gYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdGNvbnN0IGJpbmRlciA9IEVWRU5URlVOQ1RJT05TW3R5cGVdO1xuXHRpZiAoYmluZGVyKSByZXR1cm4gYmluZGVyKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KTtcbn07XG5cbmNvbnN0IGRlbGVnYXRlciA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgc2V0dGluZykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoZXZlbnQuY3VycmVudFRhcmdldCkgZXZlbnQuY3VycmVudFRhcmdldC50cmlnZ2VyKGRlbGVnYXRlLCBldmVudCk7XG5cdFx0ZWxzZSBldmVudC50YXJnZXQudHJpZ2dlcihkZWxlZ2F0ZSwgZXZlbnQpO1xuXHR9O1xufTtcblxuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImF0dHJpYnV0ZVwiO1xuXHR9XG5cdGdldCByYW5rKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTks7XG5cdH1cblx0Z2V0IHBoYXNlKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuUEhBU0UuY29udGVudDtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29uc3QgcHJvY2Vzc2VkID0gbmV3IFNldChJR05PUkVEX0FUVFJJQlVURVMpO1xuXHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIHRlbXBsYXRlLmF0dHJpYnV0ZXMpIHtcblx0XHRcdGNvbnN0IFssIGpzdGwsIGNvbmRpdGlvbiwgZXZlbnQsIG5hbWVdID0gQVRUUklCVVRFX05BTUUuZXhlYyhhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRpZiAoIWpzdGwgJiYgIXByb2Nlc3NlZC5oYXMobmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XG5cblx0XHRcdFx0aWYgKGV2ZW50KSBhd2FpdCBiaW5kRXZlbnQoeyBjb25kaXRpb24sIGV2ZW50LCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KTtcblx0XHRcdFx0ZWxzZSBhd2FpdCBiaW5kQXR0cmlidXRlKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KTtcblx0XHRcdH1cblx0XHRcdHByb2Nlc3NlZC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEF0dHJpYnV0ZSgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNsYXNzIENob29zZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiY2hvb3NlXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UudGVtcGxhdGUgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuaGFzQXR0cmlidXRlKFwianN0bC1jaG9vc2VcIikgfHwgY29udGV4dC50ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdFxuXHRcdC8vY2xvbmUgdGVtcGxhdGUsIGJlZm9yZSBtYW5pcHVsYXRlIHRlbXBsYXRlXG5cdFx0Y29udGV4dC50ZW1wbGF0ZSA9IGNvbnRleHQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRcdGNvbnN0IHdoZW5zID0gdGVtcGxhdGUuZmluZChcIjpzY29wZSA+IFtqc3RsLXdoZW5dXCIpO1xuXHRcdGNvbnN0IGxlbmd0aCA9IHdoZW5zLmxlbmd0aDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gd2hlbnNbaV07XG5cdFx0XHRpZiAoIXJlc29sdmVkICYmIChhd2FpdCByZXNvbHZlci5yZXNvbHZlKG5vZGUuYXR0cihcImpzdGwtd2hlblwiKSwgZmFsc2UpKSlcblx0XHRcdFx0cmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGlmIChyZXNvbHZlZClcblx0XHRcdHRlbXBsYXRlLmZpbmQoXCI6c2NvcGUgPiBbanN0bC1vdGhlcndpc2VdXCIpLnJlbW92ZSgpO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IENob29zZSgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlclwiO1xuXG5jb25zdCBNT0RFUyA9IHtcblx0XCJyZW1vdGVcIjogYXN5bmMgKHsgZGF0YSwgY29udGV4dCB9KSA9PiB7XHRcdFxuXHRcdGNvbnN0IHtyZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoZGF0YSk7XG5cdFx0ZGF0YSA9IG5ldyBVUkwoZGF0YSwgbG9jYXRpb24ub3JpZ2luKTtcblx0XHRsZXQgb3B0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1vcHRpb25cIikgfHwgXCJ7fVwiKTtcblx0XHRvcHRpb24gPSBKU09OLnBhcnNlKG9wdGlvbik7XG5cblx0XHRkYXRhID0gYXdhaXQgZmV0Y2goZGF0YS50b1N0cmluZygpLCBvcHRpb24pO1xuXHRcdHJldHVybiBkYXRhLmpzb24oKTtcblx0fSxcdFxuXHRcInNldFwiOiBhc3luYyAoeyBkYXRhLCBjb250ZXh0IH0pID0+IHtcblx0XHRjb25zdCB7cmVzb2x2ZXJ9ID0gY29udGV4dDtcblx0XHRcblx0XHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblx0XCJkaXJlY3RcIjogYXN5bmMgKHsgZGF0YSwgY29udGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGRhdGEpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59O1xuXG5jb25zdCB1cGRhdGVDb250ZXh0ID0gKHsgdmFybmFtZSwgZGF0YSwgc2NvcGUsIGNvbnRleHQgfSkgPT4ge1xuXHRpZiAodmFybmFtZSlcblx0XHRjb250ZXh0LnJlc29sdmVyLnVwZGF0ZURhdGEodmFybmFtZSwgZGF0YSwgc2NvcGUpO1xuXHRlbHNlIGlmIChzY29wZSlcblx0XHRjb250ZXh0LnJlc29sdmVyLm1lcmdlQ29udGV4dChkYXRhLCBzY29wZSk7XG5cdGVsc2V7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogZGF0YSwgbmFtZTogXCJqc3RsLWRhdGFcIiwgcGFyZW50OiBjb250ZXh0LnJlc29sdmVyIH0pO1xuXHRcdC8vY29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7cmVzb2x2ZXJ9KTtcblx0XHRjb250ZXh0LnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdH1cblx0XG5cdFx0XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuXG5cbmNsYXNzIERhdGEgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImRhdGFcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gMTAwMCB9XG5cdGdldCBwaGFzZSgpe3JldHVybiBEaXJlY3RpdmUuUEhBU0UuZGF0YX1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGFcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHRcdFxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1x0XHRcdFxuXHRcdFx0Y29uc3QgbW9kZSA9IE1PREVTWyh0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLW1vZGVcIikgfHwgXCJyZW1vdGVcIildO1xuXHRcdFx0aWYgKCFtb2RlKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUganN0bC1kYXRhLW1vZGUgaXMgdW5zdXBwb3J0ZWQhXCIpO1xuXG5cdFx0XHRsZXQgZGF0YSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGFcIik7XG5cdFx0XHRkYXRhID0gYXdhaXQgbW9kZSh7IGRhdGEsIGNvbnRleHQgfSk7XG5cblx0XHRcdGNvbnN0IHZhcm5hbWUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhLXZhclwiKTtcblx0XHRcdGNvbnN0IHNjb3BlID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1zY29wZVwiKTtcblx0XHRcdGNvbnRleHQgPSB1cGRhdGVDb250ZXh0KHsgdmFybmFtZSwgZGF0YSwgc2NvcGUsIGNvbnRleHQgfSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlLCBjb250ZXh0LnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblxuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBEYXRhKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5cbmNvbnN0IEFUVFJJQlVURSA9IHtcblx0REFUQTogXCJqc3RsLWZvcmVhY2hcIixcblx0VkFSOiBcImpzdGwtZm9yZWFjaC12YXJcIixcblx0U1RBVFVTOiBcImpzdGwtZm9yZWFjaC1zdGF0dXNcIixcblx0Q09VTlQ6IFwianN0bC1mb3JlYWNoLWNvdW50XCIsXG5cdFNUQVJUOiBcImpzdGwtZm9yZWFjaC1zdGFydFwiLFxuXHRTVEVQOiBcImpzdGwtZm9yZWFjaC1zdGVwXCIsXG5cdENPTkRJVElPTjogXCJqc3RsLWZvcmVhY2gtY29uZGl0aW9uXCJcbn07XG5cbmNvbnN0IGRvQ291bnQgPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGNvdW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCk7XG5cdGNvbnN0IGxlbmd0aCA9IHN0YXJ0ICsgKGNvdW50ICogc3RlcCk7XG5cdGxldCBzdG9wID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxlbmd0aCAmJiAhc3RvcDsgaSA9IGkgKyBzdGVwKSB7XG5cdFx0Y29uc3QgaXRlcmF0aW9uID0ge31cblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBpO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0c3RlcCxcblx0XHRcdGNvdW50XG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGRvRm9yZWFjaCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgZGF0YSwgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cblx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdGxldCBhcnJheSA9IGRhdGE7XG5cdGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkpXG5cdFx0YXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fVxuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGRhdGFbaV07XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRjb3VudDogbGVuZ3RoLFxuXHRcdFx0ZGF0YVxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBpdGVyYXRlID0gYXN5bmMgKGRhdGEsIG9wdGlvbikgPT4ge1xuXHRsZXQgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250YWluZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZm9yZWFjaFwiLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbilcblx0XHRyZXR1cm4gZmFsc2U7XG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgcmVzb2x2ZXIsIGNvbnRhaW5lciwgdGVtcGxhdGUsIG1vZGU6IFwiYXBwZW5kXCIgfSk7XG5cdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihpdGVtQ29udGV4dCk7XG5cdGF3YWl0IGl0ZW1Db250ZXh0LnJlYWR5KCk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgRm9yZWFjaCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwiZm9yZWFjaFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAyIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlIH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRpZiAoIShjb250ZXh0LnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICghY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSAmJiAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IG9wdGlvbiA9IHtcblx0XHRcdFx0ZGF0YTogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpIHx8IFwiXCIpLnRyaW0oKSxcblx0XHRcdFx0Y291bnQ6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT1VOVCkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRzdGFydDogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZSh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFSVCkgfHwgXCIwXCIpLFxuXHRcdFx0XHRzdGVwOiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNURVApIHx8IFwiMVwiKSxcblx0XHRcdFx0dmFybmFtZTogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlZBUikgfHwgXCJpdGVtXCIpLnRyaW0oKSxcblx0XHRcdFx0c3RhdHVzOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RBVFVTKSB8fCBcInN0YXR1c1wiKS50cmltKCksXG5cdFx0XHRcdGNvbmRpdGlvbjogdGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09ORElUSU9OKSxcblx0XHRcdFx0dGVtcGxhdGU6IHRlbXBsYXRlLmNoaWxkTm9kZXMsXG5cdFx0XHRcdHJlc29sdmVyLFxuXHRcdFx0XHRyZW5kZXJlcixcblx0XHRcdFx0Y29udGFpbmVyOiBjb250ZW50LFxuXHRcdFx0XHRjb250ZXh0XG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KVxuXHRcdFx0XHRhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGF3YWl0IGRvRm9yZWFjaChvcHRpb24pO1xuXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLWZvcmVhY2g6XCIsIGVycm9yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufTtcblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEZvcmVhY2goKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgSWYgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImlmXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSyArIDEwMDAgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuaW5pdCB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIikpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pZlwiKTtcblx0XHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBmYWxzZSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJZigpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xuXG5jbGFzcyBJbmNsdWRlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluY2x1ZGVcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpKSByZXR1cm4gY29udGV4dDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0bGV0IGluY2x1ZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlXCIpO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGluY2x1ZGUpO1xuXHRcdFx0aW5jbHVkZSA9IG5ldyBVUkwoaW5jbHVkZSwgbG9jYXRpb24pO1xuXHRcdFx0aW5jbHVkZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoaW5jbHVkZSk7XG5cblx0XHRcdGNvbnN0IG1vZGUgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1pbmNsdWRlLW1vZGVcIikgfHwgXCJyZXBsYWNlXCI7XG5cblx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogaW5jbHVkZSwgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQsIG1vZGV9KTtcblx0XHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihzdWJDb250ZXh0KTtcblx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblx0XHR9XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IEluY2x1ZGUoKSB9KTtcbiIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IFJlcGxhY2UgZnJvbSBcIi4uL2VsZW1lbnRzL1JlcGxhY2UuanNcIjtcblxuY2xhc3MgSW5pdGlhbCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJpbml0aWFsXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5pbml0O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVuZGVyZXIsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUuYXR0cihcImpzdGwtaWdub3JlXCIpKSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiKSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gbmV3IFJlcGxhY2UoKTtcblx0XHRcdHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIsIG51bGwpO1xuXHRcdFx0Y29uc3QgcmVuZGVyT3B0aW9uID0gY29udGV4dC50b1JlbmRlck9wdGlvbih7IG1vZGU6IFwicmVwbGFjZVwiLCB0YXJnZXQ6IGNvbnRleHQuY29udGVudCB9KTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIocmVuZGVyT3B0aW9uKTtcblx0XHRcdH0sIHBhcnNlSW50KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIpIHx8IFwiMjUwXCIpIHx8IDI1MCk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXHRcdFx0Y29uc3Qgc3ViQ29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7IHRlbXBsYXRlOiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXMsIGNvbnRhaW5lcjogY29udGV4dC5jb250ZW50LmNvbnRlbnQgfSk7XG5cdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoc3ViQ29udGV4dCk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUuaGFzQXR0cmlidXRlKFwianN0bC10YWduYW1lXCIpKSB7XG5cdFx0XHRsZXQgdGFnbmFtZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLXRhZ25hbWVcIikudHJpbSgpO1xuXHRcdFx0aWYgKHRhZ25hbWUubGVuZ3RoID4gMCkgY29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS5hdHRyKFwianN0bC10YWduYW1lXCIpKSk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlLnRhZ05hbWUpIHtcblx0XHRcdGxldCBpcyA9IHRlbXBsYXRlLmF0dHIoXCJpc1wiKTtcblx0XHRcdGlmKGlzKXtcblx0XHRcdFx0aXMgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChpcyk7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUsIHsgaXMgfSk7XG5cdFx0XHRcdGVsZW1lbnQuYXR0cihcImlzXCIsIGlzKTtcblx0XHRcdFx0Y29udGV4dC5jb250ZW50ID0gZWxlbWVudDtcblx0XHRcdH1lbHNlXG5cdFx0XHRcdGNvbnRleHQuY29udGVudCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlbXBsYXRlLnRhZ05hbWUpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSW5pdGlhbCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyXCI7XG5cbmNvbnN0IE5BTUUgPSBcIm9uLWZpbmlzaGVkXCI7XG5jb25zdCBBVFRSSUJVVEVfT05fRklOSVNIRUQgPSBganN0bC0ke05BTUV9YDtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyA9IGAke0FUVFJJQlVURV9PTl9GSU5JU0hFRH0tYXN5bmNgO1xuXG5jbGFzcyBPbkZpbmlzaGVkIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gTkFNRSB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1BWF9SQU5LIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmZpbmlzaCB9XG5cblxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUsIGNvbnRlbnQsIHJvb3QgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRUQpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gdGVtcGxhdGUuYXR0cihBVFRSSUJVVEVfT05fRklOSVNIRUQpO1xuXHRcdGNvbnN0IGFzeW5jQ2FsbCA9IHRlbXBsYXRlLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfT05fRklOSVNIRURfQVNZTkMpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdCRlbGVtZW50OiBjb250ZW50LFxuXHRcdFx0JHJvb3Q6IHJvb3QsXG5cdFx0XHQkdGVtcGxhdGU6IHRlbXBsYXRlXG5cdFx0fTtcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBcImpzdGwtZGF0YVwiLCBwYXJlbnQ6IGNvbnRleHQucmVzb2x2ZXIgfSk7XG5cblxuXHRcdGNvbnRleHQuZmluaXNoZWQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYoIWFzeW5jQ2FsbClcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0cmVzb2x2ZXIucmVzb2x2ZShleHByZXNzaW9uLCBudWxsKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IE9uRmluaXNoZWQoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanNcIjtcblxuY29uc3QgRElSRUNUSVZFTkFNRSA9IFwianN0bC1yZXBlYXRcIjtcbmNvbnN0IElHTk9SRURJUkVDVElWRSA9IG5ldyBTZXQoW0RJUkVDVElWRU5BTUVdKTtcblxuY29uc3QgQVRUUklCVVRFID0ge1xuXHREQVRBOiBgJHtESVJFQ1RJVkVOQU1FfWAsXG5cdFZBUjogYCR7RElSRUNUSVZFTkFNRX0tdmFyYCxcblx0U1RBVFVTOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGF0dXNgLFxuXHRDT1VOVDogYCR7RElSRUNUSVZFTkFNRX0tY291bnRgLFxuXHRTVEFSVDogYCR7RElSRUNUSVZFTkFNRX0tc3RhcnRgLFxuXHRTVEVQOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGVwYCxcblx0Q09ORElUSU9OOiBgJHtESVJFQ1RJVkVOQU1FfS1jb25kaXRpb25gLFxufTtcblxuY29uc3QgZG9Db3VudCA9IGFzeW5jIChvcHRpb24pID0+IHtcblx0bGV0IHsgc3RhcnQsIHN0ZXAsIGNvdW50LCB2YXJuYW1lLCBzdGF0dXMsIHJlc29sdmVyIH0gPSBvcHRpb247XG5cdGNvdW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCk7XG5cdGNvbnN0IGxlbmd0aCA9IHN0YXJ0ICsgY291bnQgKiBzdGVwO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9O1xuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGk7XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRzdGVwLFxuXHRcdFx0Y291bnQsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGRvUmVwZWF0ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBkYXRhLCBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRkYXRhID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShkYXRhKTtcblx0bGV0IGFycmF5ID0gZGF0YTtcblx0aWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkgYXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcblxuXHRjb3VudCA9IGNvdW50ICE9IFwiXCIgPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50LCAwKSA6IG51bGw7XG5cdGNvbnN0IGxlbmd0aCA9IGNvdW50ID8gTWF0aC5taW4oc3RhcnQgKyBjb3VudCwgYXJyYXkubGVuZ3RoKSA6IGFycmF5Lmxlbmd0aDtcblx0bGV0IHN0b3AgPSBmYWxzZTtcblx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoICYmICFzdG9wOyBpID0gaSArIHN0ZXApIHtcblx0XHRjb25zdCBpdGVyYXRpb24gPSB7fTtcblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGRhdGEsXG5cdFx0fTtcblx0XHRzdG9wID0gIShhd2FpdCBpdGVyYXRlKGl0ZXJhdGlvbiwgb3B0aW9uKSk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGUgPSBhc3luYyAoZGF0YSwgb3B0aW9uKSA9PiB7XG5cdGxldCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbmRpdGlvbiwgY29udGV4dCB9ID0gb3B0aW9uO1xuXHRyZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBkYXRhLCBuYW1lOiBESVJFQ1RJVkVOQU1FLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXG5cdGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkgOiBmYWxzZTtcblx0aWYgKGNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG5cdGNvbnN0IGl0ZW1Db250ZXh0ID0gIGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCB0ZW1wbGF0ZSwgbW9kZTogXCJhcHBlbmRcIiwgaWdub3JlRGlyZWN0aXZlOiBJR05PUkVESVJFQ1RJVkUgfSlcblx0YXdhaXQgcmVuZGVyZXIucmVuZGVyKGl0ZW1Db250ZXh0KTtcblx0YXdhaXQgaXRlbUNvbnRleHQucmVhZHkoKTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIFJlcGVhdCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gRElSRUNUSVZFTkFNRTtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgKCFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkRBVEEpICYmICFjb250ZXh0LnRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSkpIHJldHVybiBjb250ZXh0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGVudCwgY29udGFpbmVyIH0gPSBjb250ZXh0O1xuXHRcdFx0Y29uc3Qgb3B0aW9uID0ge1xuXHRcdFx0XHRkYXRhOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgfHwgXCJcIikudHJpbSgpLFxuXHRcdFx0XHRjb3VudDogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPVU5UKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdHN0YXJ0OiBhd2FpdCByZXNvbHZlci5yZXNvbHZlKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVJUKSB8fCBcIjBcIiksXG5cdFx0XHRcdHN0ZXA6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RFUCkgfHwgXCIxXCIpLFxuXHRcdFx0XHR2YXJuYW1lOiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuVkFSKSB8fCBcIml0ZW1cIikudHJpbSgpLFxuXHRcdFx0XHRzdGF0dXM6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEFUVVMpIHx8IFwic3RhdHVzXCIpLnRyaW0oKSxcblx0XHRcdFx0Y29uZGl0aW9uOiB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5DT05ESVRJT04pLFxuXHRcdFx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXG5cdFx0XHRcdHRhZ25hbWU6IGNvbnRlbnQudGFnTmFtZSxcblx0XHRcdFx0cmVzb2x2ZXIsXG5cdFx0XHRcdHJlbmRlcmVyLFxuXHRcdFx0XHRjb250YWluZXIsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKCghb3B0aW9uLmRhdGEgfHwgb3B0aW9uLmRhdGEgPT0gXCJcIikgJiYgb3B0aW9uLmNvdW50KSBhd2FpdCBkb0NvdW50KG9wdGlvbik7XG5cdFx0XHRlbHNlIGF3YWl0IGRvUmVwZWF0KG9wdGlvbik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBqc3RsLXJlcGVhdDpcIiwgZXJyb3IpO1xuXHRcdH1cblxuXHRcdGNvbnRleHQuY29udGVudCA9IG51bGw7XG5cdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cbn1cblxuRGlyZWN0aXZlLmRlZmluZSh7IGRpcmVjdGl2ZTogbmV3IFJlcGVhdCgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OID0ge1xuXHRtb2RlOiBcInRleHRcIixcblx0dW5zZWN1cmU6IGZhbHNlLFxuXHRwcmV2ZW50Rm9ybWF0IDogZmFsc2UsXG5cdG1heExlbmd0aDogMFx0XG59O1xuXG5jb25zdCBTRUNVUkVfSFRNTF9GSUxURVIgPSBcInNjcmlwdCwgc3R5bGUsIGJvZHksIGh0bWwsIGhlYWQsIG9iamVjdCwgbGlua1wiO1xuXG5jb25zdCByZWFkT3B0aW9uID0gYXN5bmMgKHBhcmVudCwgY29udGV4dCkgPT4ge1xuXHRjb25zdCByZXNvbHZlciA9IGNvbnRleHQucmVzb2x2ZXI7XG5cdHJldHVybiB7XG5cdFx0bW9kZTogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoKHBhcmVudC5hdHRyKFwianN0bC10ZXh0LWNvbnRlbnQtdHlwZVwiKSB8fCBcInRleHRcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkpLFxuXHRcdHVuc2VjdXJlOiBwYXJlbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LXVuc2VjdXJlXCIpLFxuXHRcdHByZXZlbnRGb3JtYXQ6ICEhcGFyZW50LmF0dHIoXCJqc3RsLXRleHQtcHJldmVudC1mb3JtYXRcIikgfHwgZmFsc2UsXG5cdFx0bWF4TGVuZ3RoOiBwYXJzZUludChhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChwYXJlbnQuYXR0cihcImpzdGwtdGV4dC10cmltLWxlbmd0aFwiKSB8fCBcIjBcIikpXG5cdH07XG59O1xuXG5jb25zdCB0cmltVGV4dExlbmd0aCA9ICh0ZXh0LCBsZW5ndGgpID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoID4gbGVuZ3RoID8gdGV4dC5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykudHJpbSgpICsgXCIuLi5cIiA6IHRleHQ7XG59O1xuXG5jb25zdCBNT0RFUyA9IHtcblx0XCJ0ZXh0XCIgOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnQsIHJlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCB0ZXh0ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHR0ZXh0ID0gY3JlYXRlKHRleHQsdHJ1ZSkuY29udGVudC50ZXh0Q29udGVudDtcblx0XHRpZihvcHRpb24ubWF4TGVuZ3RoID4gMClcblx0XHRcdHRleHQgPSB0cmltVGV4dExlbmd0aCh0ZXh0LCBvcHRpb24ubWF4TGVuZ3RoKTtcdFx0XG5cdFx0XG5cdFx0Y29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XHRcdFxuXHR9LFxuXHRcImh0bWxcIjogYXN5bmMgKG9wdGlvbiwgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlciwgdGVtcGxhdGV9ID0gY29udGV4dDtcblx0XHRcblx0XHRsZXQgY29udGVudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLnRleHRDb250ZW50KTtcdFx0XG5cdFx0Y29udGVudCA9IGNyZWF0ZShjb250ZW50LHRydWUpO1x0XHRcblx0XHRjb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShjb250ZW50LmNvbnRlbnQsIHRydWUpO1xuXHRcdFxuXHRcdGlmKG9wdGlvbi51bnNlY3VyZSlcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGNvbnRlbnQ7XHRcdFx0XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnRlbnQuZmluZChTRUNVUkVfSFRNTF9GSUxURVIpLnJlbW92ZSgpO1x0XHRcdFxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcblx0XHR9XG5cdH1cbn07XG5cblxuY2xhc3MgVGV4dENvbnRlbnQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcInRleHRcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50IH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRleHQpIHx8IHRlbXBsYXRlLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggPT0gMCB8fCAodGVtcGxhdGUucGFyZW50RWxlbWVudCAmJiB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImpzdGwtdGV4dC1pZ25vcmVcIikpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwYXJlbnQgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IG9wdGlvbiA9IHBhcmVudCA/IGF3YWl0IHJlYWRPcHRpb24ocGFyZW50LCBjb250ZXh0KSA6IERFRkFVTFRfT1BUSU9OO1xuXHRcdFxuXHRcdGNvbnN0ICBtb2RlID0gTU9ERVNbb3B0aW9uLm1vZGVdO1xuXHRcdGlmKCFtb2RlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGV4dCBtb2RlIFxcXCJcIisgb3B0aW9uLm1vZGUgKyBcIlxcXCIgaXMgdW5zdXBwb3J0ZWQhXCIpO1xuXHRcdFxuXHRcdGF3YWl0IG1vZGUob3B0aW9uLCBjb250ZXh0KTtcblx0XHRcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgVGV4dENvbnRlbnQoKSB9KTsiLCJpbXBvcnQgXCIuL0luaXRpYWxcIjtcbmltcG9ydCBcIi4vRGF0YVwiO1xuaW1wb3J0IFwiLi9JZlwiO1xuaW1wb3J0IFwiLi9DaG9vc2VcIjtcbmltcG9ydCBcIi4vSW5jbHVkZVwiO1xuaW1wb3J0IFwiLi9Gb3JlYWNoXCI7XG5pbXBvcnQgXCIuL1JlcGVhdFwiO1xuaW1wb3J0IFwiLi9UZXh0XCI7XG5pbXBvcnQgXCIuL0F0dHJpYnV0ZXNcIjtcbmltcG9ydCBcIi4vQXR0YWNoRWxlbWVudFwiO1xuaW1wb3J0IFwiLi9PbkZpbmlzaGVkXCI7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnQuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlRWxlbWVudCBleHRlbmRzIEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHRcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG5cdH1cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFx0XG59XG50cnl7Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwianN0bC1yZXBsYWNlXCIsIFJlcGxhY2VFbGVtZW50KTt9Y2F0Y2goZSl7fS8vaWdub3JlIiwiaW1wb3J0IFwiLi9SZXBsYWNlLmpzXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgVEVNUExBVEVfQkFTRVBBVEggPSBcIi90ZW1wbGF0ZXNcIjtcclxuZXhwb3J0IGNvbnN0IEVWRU5UX19HTE9CQUxfQUNUSU9OX1JFTE9BRFBBUkVOVCA9IFwiZ2xvYmFsOmFjdGlvbjpyZWxvYWQtcGFyZW50XCI7XHJcbmV4cG9ydCBjb25zdCBVUkxfTE9HSU4gPSBcIi9hcGkvc3lzdGVtL2xvZ2luXCI7XHJcbmV4cG9ydCBjb25zdCBVUkxfQUNDRVNTID0gXCIvYXBpL3N5c3RlbS9hY2Nlc3NcIjtcclxuZXhwb3J0IGNvbnN0IFBBR0VVUkwgPSBuZXcgVVJMKGxvY2F0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBST0xFTUFQUElORyA9IHtcclxuXHRcImV4LW1lbWJlclwiIDogXCJFWCBNZW1iZXJcIixcclxuXHRcInJlc2VydmlzdFwiIDogXCJSZXNlcnZpc3RcIixcclxuXHRcInJlY3J1aXRcIiA6IFwiQW53w6RydGVyXCIsXHJcblx0XCJwcml2YXRlXCIgOiBcIk1lbWJlclwiLFxyXG5cdFwianVuaW9yX29mZmljZXJcIiA6IFwiTWVtYmVyXCIsXHJcblx0XCJjb21iYXRfb2ZmaWNlclwiIDogXCJGZWxka29tbWFuZGVudFwiLFxyXG5cdFwicGVyc29ubmVsX29mZmljZXJcIjogXCJQZXJzb25hbCBPZmZpemllclwiLFxyXG5cdFwicmVjcnVpdG1lbnRfb2ZmaWNlclwiIDogXCJBbndlcmJlclwiLFxyXG5cdFwiZXhlY3V0aXZlX29mZmljZXJcIjogXCJBdXNmw7xocmVuZGVyIE9mZml6aWVyXCIsXHJcblx0XCJjb21tYW5kZXJcIiA6IFwiQ2xhbiBMZWFkZXJcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVBQR0xPQkFMID0ge1xyXG5cdFJPTEVNQVBQSU5HXHJcbn07XHJcbndpbmRvdy5BUFBHTE9CQUxTID0gQVBQR0xPQkFMOyIsImltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odHRwaW50ZXJjZXB0b3JcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odHRwaW50ZXJjZXB0b3Ivc3JjL01hbmFnZXIuanNcIjtcclxuaW1wb3J0IEludGVyY2VwdG9yIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHR0cGludGVyY2VwdG9yL3NyYy9JbnRlcmNlcHRvci5qc1wiO1xyXG5pbXBvcnQgeyBhY2Nlc3NUb2tlbiB9IGZyb20gXCIuL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGV4dGVuZHMgSW50ZXJjZXB0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRvQWNjZXB0KGRhdGEpIHtcclxuXHRcdHJldHVybiBsb2NhdGlvbi5vcmlnaW4gPT0gZGF0YS5tZXRhZGF0YS5vcmlnaW47XHJcblx0fVxyXG5cclxuXHRhc3luYyBkb0hhbmRsZShkYXRhKSB7XHJcblx0XHRjb25zdCB0b2tlbiA9IGFjY2Vzc1Rva2VuKCk7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0ZGF0YS5yZXF1ZXN0LmhlYWRlcnMgPSBkYXRhLnJlcXVlc3QuaGVhZGVycyB8fCB7fTtcclxuXHRcdFx0ZGF0YS5yZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcbn1cclxuXHJcbk1hbmFnZXIuYWRkSW50ZXJjZXB0b3IobmV3IEF1dGhJbnRlcmNlcHRvcigpKTtcclxuIiwiaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgIG5hdmlnYXRvclxyXG4gICAgICAgIC5zZXJ2aWNlV29ya2VyXHJcbiAgICAgICAgLnJlZ2lzdGVyKCcuL3NlcnZpY2V3b3JrZXIuanMnLCB7c2NvcGU6ICcuLyd9KVxyXG4gICAgICAgIC50aGVuKChyZWcpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlZy5pbnN0YWxsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgaW5zdGFsbGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlZy53YWl0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgaW5zdGFsbGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIGFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVnaXN0cmF0aW9uIGZhaWxlZCB3aXRoICcgKyBlcnJvcik7IFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vIENvbW11bmljYXRlIHdpdGggdGhlIHNlcnZpY2Ugd29ya2VyIHVzaW5nIE1lc3NhZ2VDaGFubmVsIEFQSS5cclxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlQ2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xyXG4gICAgICAgICAgICBtZXNzYWdlQ2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYERpcmVjdCBtZXNzYWdlIGZyb20gU1c6ICR7ZXZlbnQuZGF0YX1gKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmF2aWdhdG9yXHJcbiAgICAgICAgICAgICAgICAuc2VydmljZVdvcmtlclxyXG4gICAgICAgICAgICAgICAgLmNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgIC5wb3N0TWVzc2FnZShtZXNzYWdlLCBbbWVzc2FnZUNoYW5uZWwucG9ydDJdKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVEVNUExBVEVfQkFTRVBBVEgsIEVWRU5UX19HTE9CQUxfQUNUSU9OX1JFTE9BRFBBUkVOVCB9IGZyb20gXCIuLi9Db25zdGFudHMuanNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XHJcbmltcG9ydCB7IGdldENhbXBhaWduLCBkZWxldGVDYW1wYWlnbiwgc3RvcmVDYW1wYWlnbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9DYW1wYWlnblNlcnZpY2UuanNcIjtcclxuaW1wb3J0IHsgZ2V0UmVnaXN0cmF0aW9ucywgZ2V0TXlSZWdpc3RyYXRpb24sIGdldFJlZ2lzdHJhdGlvbkJ5TWVtYmVyLCBzdG9yZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9DYW1wYWlnblJlZ2lzdHJhdGlvblNlcnZpY2UuanNcIjtcclxuaW1wb3J0IHsgYWNjZXNzUmlnaHRzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qc1wiO1xyXG5pbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtXCI7XHJcblxyXG5jb25zdCBURU1QTEFURVNfUEFUSCA9IGAke1RFTVBMQVRFX0JBU0VQQVRIfS9odG1sLWNhbXBhaWduLWVsZW1lbnRgO1xyXG5leHBvcnQgY29uc3QgTk9ERU5BTUUgPSBcIngtY2FtcGFpZ25cIjtcclxuY29uc3QgQVRUUl9fQ0FNUEFJR05JRCA9IFwiY2FtcGFpZ24taWRcIjtcclxuXHJcbmNvbnN0IFRFTVBMQVRFX1JPT1QgPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L3Jvb3QudHBsLmh0bWxgLCBsb2NhdGlvbikpO1xyXG5jb25zdCBURU1QTEFURV9SRUdJU1RSQVRJT04gPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L3JlZ2lzdHJhdGlvbi50cGwuaHRtbGAsIGxvY2F0aW9uKSk7XHJcbmNvbnN0IFRFTVBMQVRFX1JFR0lTVFJBVElPTlMgPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L3JlZ2lzdHJhdGlvbnMudHBsLmh0bWxgLCBsb2NhdGlvbikpO1xyXG5cclxuY29uc3QgZ2V0RGF0ZXNCZXR3ZWVuVHdvRGF0ZXMgPSAoYSwgYikgPT4ge1xyXG5cdGEgPSBhIGluc3RhbmNlb2YgRGF0ZSA/IGEgOiBuZXcgRGF0ZShhKTtcclxuXHRiID0gYiBpbnN0YW5jZW9mIERhdGUgPyBiIDogbmV3IERhdGUoYik7XHJcblxyXG5cdGNvbnN0IGRheXMgPSBNYXRoLmNlaWwoTWF0aC5hYnMoYSAtIGIpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuXHRjb25zdCBkYXRlcyA9IFtdO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZGF5czsgaSsrKSBkYXRlcy5wdXNoKGEuYWRkRGF5cyhpKSk7XHJcblxyXG5cdHJldHVybiBkYXRlcztcclxufTtcclxuXHJcbmNsYXNzIEhUTUxDYW1wYWlnbkVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHN0YXRpYyBnZXQgTk9ERU5BTUUoKSB7XHJcblx0XHRyZXR1cm4gTk9ERU5BTUU7XHJcblx0fVxyXG5cclxuXHQjaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHQjb3BlbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnJvb3Q7XHJcblx0XHRyb290Lm9uKEVWRU5UX19HTE9CQUxfQUNUSU9OX1JFTE9BRFBBUkVOVCwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0aGlzLnJlbmRlcigpO1xyXG5cdFx0fSk7XHJcblx0XHRyb290Lm9uKFwiYWN0aW9uOnRvb2dsZS1kZXRhaWxzXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldmVudDtcclxuXHRcdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxEZXRhaWxzRWxlbWVudCkgXHJcblx0XHRcdFx0dGhpcy4jb3BlbiA9IHRhcmdldC5vcGVuO1xyXG5cdFx0fSk7XHJcblx0XHRyb290Lm9uKFwiYWN0aW9uOnNob3ctcmVnaXN0cmF0aW9uc1wiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRoaXMuc2hvd1JlZ2lzdHJhdGlvbnMoKTtcclxuXHRcdH0pO1xyXG5cdFx0cm9vdC5vbihcImFjdGlvbjpkZWxldGUtY2FtcGFpZ25cIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGF3YWl0IGRlbGV0ZUNhbXBhaWduKHRoaXMuY2FtcGFpZ25JZCk7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdFx0fSkoKTtcclxuXHRcdH0pO1x0XHRcclxuXHRcdHJvb3Qub24oXCJhY3Rpb246bWVtYmVyLXJlZ2lzdHJhdGVcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0aGlzLm9wZW5SZWdpc3RyYXRpb25EaWFsb2coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuXHRcdGF3YWl0IHN1cGVyLmluaXQoKTtcclxuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcclxuXHRcdFx0YXdhaXQgdGhpcy5yZW5kZXIoKTtcclxuXHRcdFx0dGhpcy4jaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGNhbXBhaWduSWQoKSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQodGhpcy5hdHRyKEFUVFJfX0NBTVBBSUdOSUQpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVEVNUExBVEVfUk9PVDtcclxuXHRcdGF3YWl0IFJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lcjogdGhpcy5yb290LCB0ZW1wbGF0ZSwgZGF0YToge2FjY2Vzc1JpZ2h0czogYWNjZXNzUmlnaHRzKCksIG9wZW46dGhpcy4jb3BlbiwgY2FtcGFpZ246IGF3YWl0IGdldENhbXBhaWduKHRoaXMuY2FtcGFpZ25JZCkgfSB9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIG9wZW5SZWdpc3RyYXRpb25EaWFsb2coKSB7XHJcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRFTVBMQVRFX1JFR0lTVFJBVElPTjtcclxuXHRcdGNvbnN0IGNhbXBhaWduID0gYXdhaXQgZ2V0Q2FtcGFpZ24odGhpcy5jYW1wYWlnbklkKTtcclxuXHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRjYW1wYWlnbixcclxuXHRcdFx0ZGF5czogZ2V0RGF0ZXNCZXR3ZWVuVHdvRGF0ZXMoY2FtcGFpZ24uc3RhcnRkYXRlLCBjYW1wYWlnbi5lbmRkYXRlKSxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgUmVuZGVyZXIucmVuZGVyKHtcclxuXHRcdFx0dGVtcGxhdGUsXHJcblx0XHRcdGNvbnRhaW5lcjogdGhpcy5yb290LFxyXG5cdFx0XHRkYXRhLFxyXG5cdFx0XHRtb2RlOiBcImFwcGVuZFwiLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgZGlhbG9nID0gcmVzdWx0LmNvbnRlbnRbMF07XHJcblx0XHRjb25zdCBmb3JtID0gZGlhbG9nLmZpbmQoXCJkLWZvcm1cIikuZmlyc3QoKTtcclxuXHJcblx0XHRmb3JtLm9uKFwiZC1mb3JtLXN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCByZWdpc3RyYXRpb24gPSBhd2FpdCBmb3JtLnZhbHVlKCk7XHJcblx0XHRcdFx0Y29uc3QgYXZhaWxhYmlsaXR5ID0gW107XHJcblx0XHRcdFx0bGV0IGZ1bGx5YXZhaWxhYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRmb3IgKGNvbnN0IGRheSBpbiByZWdpc3RyYXRpb24pIHtcclxuXHRcdFx0XHRcdGlmIChmdWxseWF2YWlsYWJsZSAmJiByZWdpc3RyYXRpb25bZGF5XS5hdmFpbGFibGUgIT0gXCJmdWxsXCIpIGZ1bGx5YXZhaWxhYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRhdmFpbGFiaWxpdHkucHVzaChyZWdpc3RyYXRpb25bZGF5XSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhd2FpdCBzdG9yZVJlZ2lzdHJhdGlvbih0aGlzLmNhbXBhaWduSWQsIHsgZnVsbHlhdmFpbGFibGUsIGF2YWlsYWJpbGl0eSB9KTtcclxuXHRcdFx0XHRkaWFsb2cuaGlkZSgpO1xyXG5cdFx0XHRcdGRpYWxvZy5yZW1vdmUoKTtcclxuXHRcdFx0fSkoKTtcclxuXHRcdH0pO1xyXG5cdFx0Zm9ybS5vbihcImFjdGlvbjpjbG9zZS1yZWdpc3RyYXRpb24tZGlhbG9nXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0ZGlhbG9nLmhpZGUoKTtcclxuXHRcdFx0ZGlhbG9nLnJlbW92ZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYXdhaXQgZ2V0TXlSZWdpc3RyYXRpb24odGhpcy5jYW1wYWlnbklkKTtcclxuXHRcdGlmKHJlZ2lzdHJhdGlvbil7XHJcblx0XHRcdGNvbnN0IGRheXMgPSByZWdpc3RyYXRpb24uYXZhaWxhYmlsaXR5IHx8IFtdO1xyXG5cdFx0XHRjb25zdCBkYXRhID0ge307XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRkYXRhW2BkYXkke2krMX1gXSA9IGRheXNbaV07XHJcblxyXG5cdFx0XHRhd2FpdCBmb3JtLnZhbHVlKGRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzaG93UmVnaXN0cmF0aW9ucygpIHtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVEVNUExBVEVfUkVHSVNUUkFUSU9OUztcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbnMgPSBhd2FpdCBnZXRSZWdpc3RyYXRpb25zKHRoaXMuY2FtcGFpZ25JZCk7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBSZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXI6IHRoaXMsIHRlbXBsYXRlLCBkYXRhOiB7IHJlZ2lzdHJhdGlvbnMgfSwgbW9kZTogXCJhcHBlbmRcIiB9KTtcclxuXHRcdGNvbnN0IGRpYWxvZyA9IHJlc3VsdC5jb250ZW50WzBdO1xyXG5cdFx0ZGlhbG9nLm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xyXG5cdFx0XHRkaWFsb2cucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XHJcblx0fVxyXG59XHJcblxyXG5kZWZpbmUoSFRNTENhbXBhaWduRWxlbWVudCk7XHJcbmV4cG9ydCBkZWZhdWx0IEhUTUxDYW1wYWlnbkVsZW1lbnQ7XHJcbiIsImltcG9ydCB7IFRFTVBMQVRFX0JBU0VQQVRILCBFVkVOVF9fR0xPQkFMX0FDVElPTl9SRUxPQURQQVJFTlQgfSBmcm9tIFwiLi4vQ29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIsIFRlbXBsYXRlIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRSZWdpc3RyYXRpb25zLCBnZXRNeVJlZ2lzdHJhdGlvbiwgZ2V0UmVnaXN0cmF0aW9uQnlNZW1iZXIsIHN0b3JlUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0NhbXBhaWduUmVnaXN0cmF0aW9uU2VydmljZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRNZW1iZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvTWVtYmVyU2VydmljZS5qc1wiO1xyXG5cclxuY29uc3QgVEVNUExBVEVTX1BBVEggPSBgJHtURU1QTEFURV9CQVNFUEFUSH0vaHRtbC1jYW1wYWlnbi1tZW1iZXItZWxlbWVudGA7XHJcbmV4cG9ydCBjb25zdCBOT0RFTkFNRSA9IFwieC1jYW1wYWlnbi1tZW1iZXJcIjtcclxuY29uc3QgQVRUUl9fQ0FNUEFJR05JRCA9IFwiY2FtcGFpZ24taWRcIjtcclxuY29uc3QgQVRUUl9fTUVNQkVSSUQgPSBcIm1lbWJlci1pZFwiO1xyXG5cclxuY29uc3QgVEVNUExBVEVfUk9PVCA9IFRlbXBsYXRlLmxvYWQobmV3IFVSTChgJHtURU1QTEFURVNfUEFUSH0vcm9vdC50cGwuaHRtbGAsIGxvY2F0aW9uKSk7XHJcblxyXG5jbGFzcyBIVE1MQ2FtcGFpZ25NZW1iZXJFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xyXG5cdFx0cmV0dXJuIE5PREVOQU1FO1xyXG5cdH1cclxuXHJcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XHJcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XHJcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVEVNUExBVEVfUk9PVDtcclxuXHRcdGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGF3YWl0IHRoaXMuZ2V0UmVnaXN0cmF0aW9uKCk7XHJcblx0XHRhd2FpdCBSZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXI6IHRoaXMucm9vdCwgdGVtcGxhdGUsIGRhdGE6IHsgcmVnaXN0cmF0aW9uIH0gfSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY2FtcGFpZ25pZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9fQ0FNUEFJR05JRCk7XHJcblx0fVxyXG5cclxuXHRnZXQgbWVtYmVyaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hdHRyKEFUVFJfX01FTUJFUklEKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldFJlZ2lzdHJhdGlvbigpIHtcclxuXHRcdGNvbnN0IHsgY2FtcGFpZ25pZCwgbWVtYmVyaWQgfSA9IHRoaXM7XHJcblx0XHRyZXR1cm4gYXdhaXQgZ2V0UmVnaXN0cmF0aW9uQnlNZW1iZXIoY2FtcGFpZ25pZCwgbWVtYmVyaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZGVmaW5lKEhUTUxDYW1wYWlnbk1lbWJlckVsZW1lbnQpO1xyXG5leHBvcnQgZGVmYXVsdCBIVE1MQ2FtcGFpZ25NZW1iZXJFbGVtZW50O1xyXG4iLCJpbXBvcnQgeyBURU1QTEFURV9CQVNFUEFUSCwgRVZFTlRfX0dMT0JBTF9BQ1RJT05fUkVMT0FEUEFSRU5UIH0gZnJvbSBcIi4uL0NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyLCBUZW1wbGF0ZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0Q2FtcGFpZ25zLCBkZWxldGVDYW1wYWlnbiwgc3RvcmVDYW1wYWlnbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9DYW1wYWlnblNlcnZpY2UuanNcIjtcclxuaW1wb3J0IHsgYWNjZXNzUmlnaHRzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qc1wiO1xyXG5pbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtXCI7XHJcblxyXG5jb25zdCBURU1QTEFURVNfUEFUSCA9IGAke1RFTVBMQVRFX0JBU0VQQVRIfS9odG1sLWNhbXBhaWducy1lbGVtZW50YFxyXG5leHBvcnQgY29uc3QgTk9ERU5BTUUgPSBcIngtY2FtcGFpZ25zXCI7XHJcblxyXG5jb25zdCBURU1QTEFURV9VUkxfX1JPT1QgPSBuZXcgVVJMKGAke1RFTVBMQVRFU19QQVRIfS9yb290LnRwbC5odG1sYCwgbG9jYXRpb24pO1xyXG5jb25zdCBURU1QTEFURV9VUkxfX0NSRUFURURJQUxPRyA9IG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L2NhbXBhaWduLWRpYWxvZy50cGwuaHRtbGAsIGxvY2F0aW9uKTtcclxuXHJcbmNsYXNzIEhUTUxDYW1wYWlnbnNFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xyXG5cdFx0cmV0dXJuIE5PREVOQU1FO1xyXG5cdH1cclxuXHJcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAjY3JlYXRlRGlhbG9nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdDtcclxuICAgICAgICByb290Lm9uKEVWRU5UX19HTE9CQUxfQUNUSU9OX1JFTE9BRFBBUkVOVCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJvb3Qub24oXCJhY3Rpb246Y3JlYXRlLWNhbXBhaWduXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ3JlYXRlRGlhbG9nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcm9vdC5vbihcImFjdGlvbjpjbG9zZS1jYW1wYWlnbi1kaWFsb2dcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZih0aGlzLiNjcmVhdGVEaWFsb2cpXHJcbiAgICAgICAgICAgIHRoaXMuI2NyZWF0ZURpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBhd2FpdCBzdXBlci5pbml0KCk7XHJcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XHJcblx0XHRcdGF3YWl0IHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZChURU1QTEFURV9VUkxfX1JPT1QpO1xyXG5cdFx0YXdhaXQgUmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyOiB0aGlzLnJvb3QsIHRlbXBsYXRlLCBkYXRhOiB7YWNjZXNzUmlnaHRzOiBhY2Nlc3NSaWdodHMoKSwgY2FtcGFpZ25zOiBhd2FpdCBnZXRDYW1wYWlnbnMoKX0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb3BlbkNyZWF0ZURpYWxvZygpIHtcclxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5yb290O1xyXG4gICAgICAgIGlmKCF0aGlzLiNjcmVhdGVEaWFsb2cpe1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQoVEVNUExBVEVfVVJMX19DUkVBVEVESUFMT0cpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZW5kZXJlci5yZW5kZXIoe3RlbXBsYXRlLCBjb250YWluZXI6IHJvb3QsIGRhdGE6IHthY2Nlc3NSaWdodHM6IGFjY2Vzc1JpZ2h0cygpfSwgbW9kZTpcImFwcGVuZFwifSk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy4jY3JlYXRlRGlhbG9nID0gcmVzdWx0LmNvbnRlbnRbMF07XHJcbiAgICAgICAgICAgIHRoaXMuI2NyZWF0ZURpYWxvZy5vbihcImQtZm9ybS1zdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW1wYWlnbiA9IGF3YWl0IGZvcm0udmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzdG9yZUNhbXBhaWduKGNhbXBhaWduKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjcmVhdGVEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiNjcmVhdGVEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICB9XHJcblx0XHJcbn1cclxuXHJcbmRlZmluZShIVE1MQ2FtcGFpZ25zRWxlbWVudCk7XHJcbmV4cG9ydCBkZWZhdWx0IEhUTUxDYW1wYWlnbnNFbGVtZW50O1xyXG4iLCJpbXBvcnQgeyBURU1QTEFURV9CQVNFUEFUSCB9IGZyb20gXCIuLi9Db25zdGFudHMuanNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTk9ERU5BTUUgPSBcIngtY2xhblwiO1xyXG5leHBvcnQgY29uc3QgQVRUUl9fQ0xBTl9JRCA9IFwiY2xhbi1pZFwiO1xyXG5leHBvcnQgY29uc3QgQVRUUl9fQ0xBTl9OQU1FID0gXCJjbGFuLW5hbWVcIjtcclxuZXhwb3J0IGNvbnN0IEFUVFJfX0NMQU5fVEFHID0gXCJjbGFuLXRhZ1wiO1xyXG5cclxuY29uc3QgVEVNUExBVEVfVVJMX19ST09UID0gbmV3IFVSTChgJHtURU1QTEFURV9CQVNFUEFUSH0vaHRtbC1jbGFuLWVsZW1lbnQvcm9vdC50cGwuaHRtbGAsIGxvY2F0aW9uKTtcclxuXHJcbmNsYXNzIEhUTUxDbGFuRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcclxuXHRcdHJldHVybiBOT0RFTkFNRTtcclxuXHR9XHJcblxyXG5cdCNpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cdCNjbGFuID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5vbihgJHtOT0RFTkFNRX06c29ydC1tZW1iZXItYnktbmFtZWAsICgpID0+IHt9KTtcclxuXHRcdHRoaXMub24oYCR7Tk9ERU5BTUV9OnNvcnQtbWVtYmVyLWJ5LXd0cmAsICgpID0+IHt9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XHJcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZChURU1QTEFURV9VUkxfX1JPT1QpO1xyXG5cdFx0XHRhd2FpdCBSZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXI6IHRoaXMucm9vdCwgdGVtcGxhdGUsIGRhdGE6IGF3YWl0IHRoaXMuY2xhbkRhdGEoKSB9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGNsYW5EYXRhKCkge1xyXG5cdFx0aWYgKCF0aGlzLiNjbGFuKSB7XHJcblx0XHRcdHRoaXMuI2NsYW4gPSB7XHJcblx0XHRcdFx0aWQ6IHRoaXMuYXR0cihBVFRSX19DTEFOX0lEKSxcclxuXHRcdFx0XHRuYW1lOiB0aGlzLmF0dHIoQVRUUl9fQ0xBTl9OQU1FKSxcclxuXHRcdFx0XHR0YWc6IHRoaXMuYXR0cihBVFRSX19DTEFOX1RBRyksXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXcgVVJMKGAvYXBpL2NsYW5zLyR7dGhpcy4jY2xhbi5pZH0vbWVtYmVyc2AsIGxvY2F0aW9uKSk7XHJcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR0aGlzLiNjbGFuLm1lbWJlcnMgPSByZXNwb25zZS5kYXRhO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLiNjbGFuO1xyXG5cdH1cclxufVxyXG5cclxuZGVmaW5lKEhUTUxDbGFuRWxlbWVudCk7XHJcbmV4cG9ydCBkZWZhdWx0IEhUTUxDbGFuRWxlbWVudDtcclxuIiwiaW1wb3J0IHsgY29tcG9uZW50QmFzZU9mLCBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgTk9ERU5BTUUgPSBcIngtZGlhbG9nXCI7XHJcbmNvbnN0IENMT1NFTUFSS0VSID0gXCJbY2xvc2UtbW9kYWxdXCI7XHJcblxyXG5jbGFzcyBIVE1MRGlhbG9nRXh0ZW50aW9uRWxlbWVudCBleHRlbmRzIGNvbXBvbmVudEJhc2VPZihIVE1MRGlhbG9nRWxlbWVudCl7XHJcblxyXG4gICAgc3RhdGljIGdldCBOT0RFTkFNRSgpeyByZXR1cm4gTk9ERU5BTUU7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5vbihcImNsaWNrXCIsICh7dGFyZ2V0fSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0YXJnZXQuaXMoQ0xPU0VNQVJLRVIpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKXtcclxuICAgICAgICBhd2FpdCBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZGVmaW5lKEhUTUxEaWFsb2dFeHRlbnRpb25FbGVtZW50LCB7IGV4dGVuZHM6IFwiZGlhbG9nXCJ9KTtcclxuZXhwb3J0IGRlZmF1bHQgSFRNTERpYWxvZ0V4dGVudGlvbkVsZW1lbnQ7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XHJcbmltcG9ydCB7IGxvZ2luLCBhY2Nlc3NUb2tlbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOT0RFTkFNRSA9IFwieC1sb2dpbi1jb21wb25lbnRcIjtcclxuY29uc3QgQVRUUl9URU1QTEFURSA9IFwidGVtcGxhdGVcIjtcclxuXHJcbmNsYXNzIFdvdExvZ2luQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xyXG5cdFx0cmV0dXJuIE5PREVOQU1FO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuXHRcdGF3YWl0IHN1cGVyLmluaXQoKTtcclxuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbigpO1xyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0Y29uc3QgYXR0clRlbXBsYXRlID0gdGhpcy5hdHRyKEFUVFJfVEVNUExBVEUpO1xyXG5cdFx0XHRpZiAoYXR0clRlbXBsYXRlKSB7XHJcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYXR0clRlbXBsYXRlLCBsb2NhdGlvbikpO1xyXG5cdFx0XHRcdGF3YWl0IFJlbmRlcmVyLnJlbmRlcih7IGNvbnRhaW5lcjogdGhpcywgZGF0YTogeyB1c2VyIH0sIHRlbXBsYXRlIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0aGlzLnRleHRDb250ZW50ID0gXCJrZWluIFp1Z3JpZmYgZXJsYXVidFwiO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5kZWZpbmUoV290TG9naW5Db21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV290TG9naW5Db21wb25lbnQ7XHJcbiIsImltcG9ydCB7IFRFTVBMQVRFX0JBU0VQQVRILCBFVkVOVF9fR0xPQkFMX0FDVElPTl9SRUxPQURQQVJFTlQgfSBmcm9tIFwiLi4vQ29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIsIFRlbXBsYXRlIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRNZW1iZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvTWVtYmVyU2VydmljZS5qc1wiO1xyXG5cclxuY29uc3QgVEVNUExBVEVTX1BBVEggPSBgJHtURU1QTEFURV9CQVNFUEFUSH0vaHRtbC1tZW1iZXItZWxlbWVudGBcclxuZXhwb3J0IGNvbnN0IE5PREVOQU1FID0gXCJ4LW1lbWJlclwiO1xyXG5jb25zdCBBVFRSX19NRU1CRVJJRCA9IFwibWVtYmVyLWlkXCI7XHJcblxyXG5jb25zdCBURU1QTEFURV9ST09UID0gVGVtcGxhdGUubG9hZChuZXcgVVJMKGAke1RFTVBMQVRFU19QQVRIfS9yb290LnRwbC5odG1sYCwgbG9jYXRpb24pKTtcclxuXHJcbmNsYXNzIEhUTUxNZW1iZXJFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xyXG5cdFx0cmV0dXJuIE5PREVOQU1FO1xyXG5cdH1cclxuXHJcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnJvb3Q7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XHJcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XHJcblx0XHRcdGF3YWl0IHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBtZW1iZXJJZCgpe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHRoaXMuYXR0cihBVFRSX19NRU1CRVJJRCkpO1xyXG5cdH1cclxuXHJcbiAgICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBURU1QTEFURV9ST09UO1xyXG5cdFx0Y29uc3QgbWVtYmVyID0gYXdhaXQgZ2V0TWVtYmVyKHRoaXMubWVtYmVySWQpO1xyXG5cdFx0YXdhaXQgUmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyOiB0aGlzLnJvb3QsIHRlbXBsYXRlLCBkYXRhOiB7bWVtYmVyfSB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZGVmaW5lKEhUTUxNZW1iZXJFbGVtZW50KTtcclxuZXhwb3J0IGRlZmF1bHQgSFRNTE1lbWJlckVsZW1lbnQ7XHJcbiIsImltcG9ydCB7IFRFTVBMQVRFX0JBU0VQQVRILCBFVkVOVF9fR0xPQkFMX0FDVElPTl9SRUxPQURQQVJFTlQgfSBmcm9tIFwiLi4vQ29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgZGVmaW5lIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIsIFRlbXBsYXRlIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRUZWFtLCBkZWxldGVUZWFtLCBzdG9yZVRlYW0gfSBmcm9tIFwiLi4vc2VydmljZXMvVGVhbVNlcnZpY2UuanNcIjtcclxuaW1wb3J0IHsgYWNjZXNzUmlnaHRzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2luU2VydmljZS5qc1wiO1xyXG5pbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1mb3JtXCI7XHJcblxyXG5jb25zdCBURU1QTEFURVNfUEFUSCA9IGAke1RFTVBMQVRFX0JBU0VQQVRIfS9odG1sLXRlYW0tZWxlbWVudGA7XHJcblxyXG5jb25zdCBOT0RFTkFNRSA9IFwieC10ZWFtXCI7XHJcbmNvbnN0IEFUVFJfX1RFQU1JRCA9IFwidGVhbS1pZFwiO1xyXG5jb25zdCBBVFRSX19DQU1QQUlHTklEID0gXCJjYW1wYWlnbi1pZFwiO1xyXG5cclxuY29uc3QgVEVNUExBVEVfX1JPT1QgPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L3Jvb3QudHBsLmh0bWxgLCBsb2NhdGlvbikpO1xyXG5jb25zdCBURU1QTEFURV9fRURJVE9SID0gVGVtcGxhdGUubG9hZChuZXcgVVJMKGAke1RFTVBMQVRFU19QQVRIfS9lZGl0b3IudHBsLmh0bWxgLCBsb2NhdGlvbikpO1xyXG5cclxuY2xhc3MgSFRNTFRlYW1FbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xyXG5cdFx0cmV0dXJuIE5PREVOQU1FO1xyXG5cdH1cclxuXHJcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XHJcblx0I29wZW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucm9vdDtcclxuXHRcdHJvb3Qub24oXCJhY3Rpb246dG9vZ2xlLWRldGFpbHNcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xyXG5cdFx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTERldGFpbHNFbGVtZW50KSBcclxuXHRcdFx0XHR0aGlzLiNvcGVuID0gdGFyZ2V0Lm9wZW47XHJcblx0XHR9KTtcclxuXHRcdHJvb3Qub24oXCJhY3Rpb246ZGVsZXRlLXRlYW1cIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRlYW1JZCA9IHRoaXMudGVhbUlkO1xyXG5cdFx0XHRcdGF3YWl0IGRlbGV0ZVRlYW0odGVhbUlkKTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJpbmZvOnRlYW0tZGVsZXRlZFwiLCB0ZWFtSWQpO1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0XHRcdH0pKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyb290Lm9uKFwiYWN0aW9uOmVkaXQtdGVhbVwiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRoaXMuZWRpdG9yRGlhbG9nKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXQoKSB7XHJcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XHJcblx0XHRpZiAoIXRoaXMuI2luaXRpYWxpemVkKSB7XHJcblx0XHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHRcdHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCB0ZWFtSWQoKSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQodGhpcy5hdHRyKEFUVFJfX1RFQU1JRCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNhbXBhaWduSWQoKSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQodGhpcy5hdHRyKEFUVFJfX0NBTVBBSUdOSUQpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVEVNUExBVEVfX1JPT1Q7XHJcblx0XHRjb25zdCB0ZWFtID0gYXdhaXQgZ2V0VGVhbSh0aGlzLnRlYW1JZClcclxuXHRcdGF3YWl0IFJlbmRlcmVyLnJlbmRlcih7IHRlbXBsYXRlLCBjb250YWluZXI6IHRoaXMucm9vdCwgZGF0YToge2FjY2Vzc1JpZ2h0czogYWNjZXNzUmlnaHRzKCksIG9wZW46IHRoaXMuI29wZW4sIHRlYW0gfSB9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGVkaXRvckRpYWxvZygpIHtcclxuXHRcdGNvbnN0IHsgcm9vdCwgdGVhbUlkIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgdGVhbSA9IGF3YWl0IGdldFRlYW0odGVhbUlkKTtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgVEVNUExBVEVfX0VESVRPUjtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRhd2FpdCBSZW5kZXJlci5yZW5kZXIoeyBjb250YWluZXIsIHRlbXBsYXRlLCBkYXRhOiB7IHRlYW0gfSB9KTtcclxuXHRcdHJvb3QuYXBwZW5kKGNvbnRhaW5lci5pbm5lckhUTUwpO1xyXG5cdFx0Y29uc3QgZGlhbG9nID0gcm9vdC5maW5kKFwiOnNjb3BlID4gZGlhbG9nXCIpLmxhc3QoKTtcclxuXHRcdGRpYWxvZy5vbihcImQtZm9ybS1zdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRlYW0gPSBhd2FpdCBmb3JtLnZhbHVlKCk7XHJcblx0XHRcdFx0YXdhaXQgc3RvcmVUZWFtKHRlYW0pO1xyXG5cdFx0XHRcdGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdGRpYWxvZy5yZW1vdmUoKTtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcigpO1xyXG5cdFx0XHR9KSgpO1xyXG5cdFx0fSk7XHJcblx0XHRkaWFsb2cub24oXCJjbG9zZVwiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdGRpYWxvZy5yZW1vdmUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkaWFsb2cuZmluZChcImQtZm9ybVwiKS5maXJzdCgpO1xyXG5cdFx0YXdhaXQgZm9ybS5yZWFkeTtcclxuXHRcdGF3YWl0IGZvcm0udmFsdWUodGVhbSk7XHJcblx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XHJcblx0fVxyXG59XHJcblxyXG5kZWZpbmUoSFRNTFRlYW1FbGVtZW50KTtcclxuZXhwb3J0IGRlZmF1bHQgSFRNTFRlYW1FbGVtZW50O1xyXG4iLCJpbXBvcnQgeyBURU1QTEFURV9CQVNFUEFUSCwgRVZFTlRfX0dMT0JBTF9BQ1RJT05fUkVMT0FEUEFSRU5UIH0gZnJvbSBcIi4uL0NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCYXNlRmllbGQgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybVwiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XHJcbmltcG9ydCB7IGdldE1lbWJlcnMgfSBmcm9tIFwiLi4vc2VydmljZXMvTWVtYmVyU2VydmljZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRSZWdpc3RyYXRpb25zIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0NhbXBhaWduUmVnaXN0cmF0aW9uU2VydmljZS5qc1wiO1xyXG5cclxuY29uc3QgQVRUUl9DQU1QQUlHTklEID0gXCJjYW1wYWlnbi1pZFwiO1xyXG5jb25zdCBOT0RFTkFNRSA9IFwieC10ZWFtLW1lbWJlci1zZWFyY2gtZmllbGRcIjtcclxuY29uc3QgVEVNUExBVEVTX1BBVEggPSBgJHtURU1QTEFURV9CQVNFUEFUSH0vaHRtbC10ZWFtLW1lbWJlci1zZWFyY2gtZmllbGQtZWxlbWVudGA7XHJcbmNvbnN0IFRFTVBMQVRFX1JPT1QgPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L3Jvb3QudHBsLmh0bWxgLCBsb2NhdGlvbikpO1xyXG5jb25zdCBURU1QTEFURV9ESUFMT0cgPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L2RpYWxvZy50cGwuaHRtbGAsIGxvY2F0aW9uKSk7XHJcblxyXG5jbGFzcyBIVE1MVGVhbU1lbWJlclNlYXJjaEZpZWxkRWxlbWVudCBleHRlbmRzIEJhc2VGaWVsZCB7XHJcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcclxuXHRcdHJldHVybiBOT0RFTkFNRTtcclxuXHR9XHJcblxyXG5cdCNpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cdCNzZWxlY3Rpb25EaWFsb2cgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucm9vdDtcclxuXHRcdHJvb3Qub24oXCJhY3Rpb246c2hvdy1zZWxlY3Rpb24tZGlhbG9nXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0aWYoIXRoaXMucmVhZG9ubHkpXHRcdFxyXG5cdFx0XHRcdHRoaXMuc2hvd1NlbGVjdGlvbkRpYWxvZygpO1xyXG5cdFx0fSk7XHJcblx0XHRyb290Lm9uKFwiYWN0aW9uOnNhdmUtc2VsZWN0aW9uXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0aWYoIXRoaXMucmVhZG9ubHkpe1xyXG5cdFx0XHRcdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzZWxlY3Rpb25zID0gdGhpcy4jc2VsZWN0aW9uRGlhbG9nLmZpbmQoXCIuaXMtc2VsZWN0ZWRbbWVtYmVyLWlkXVwiKTtcclxuXHRcdFx0XHRcdGNvbnN0IG1lbWJlcmlkcyA9IGF3YWl0IFByb21pc2UuYWxsKHNlbGVjdGlvbnMubWFwKChzZWxlY3RlZCkgPT4gc2VsZWN0ZWQuYXR0cihcIm1lbWJlci1pZFwiKSkpO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wdWJsaXNoVmFsdWUobWVtYmVyaWRzKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnJlbmRlcigpO1xyXG5cdFx0XHRcdFx0dGhpcy4jc2VsZWN0aW9uRGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdFx0XHR0aGlzLiNzZWxlY3Rpb25EaWFsb2cucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR0aGlzLiNzZWxlY3Rpb25EaWFsb2cgPSBudWxsO1xyXG5cdFx0XHRcdH0pKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuXHRcdGF3YWl0IHN1cGVyLmluaXQoKTtcclxuXHRcdGlmICghdGhpcy4jaW5pdGlhbGl6ZWQpIHtcclxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHNob3dTZWxlY3Rpb25EaWFsb2coKSB7XHJcblx0XHRpZighdGhpcy4jc2VsZWN0aW9uRGlhbG9nKXtcclxuXHRcdFx0Y29uc3Qge3Jvb3R9ID0gdGhpcztcclxuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBURU1QTEFURV9ESUFMT0c7XHJcblx0XHRcdGNvbnN0IG1lbWJlcmlkcyA9IGF3YWl0IChhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xyXG5cdFx0XHRcdGNvbnN0IG1lbWJlcmlkcyA9IGF3YWl0IHRoaXMudmFsdWUoKTtcclxuXHRcdFx0XHRpZiAobWVtYmVyaWRzKSB7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG1lbWJlcmlkIG9mIG1lbWJlcmlkcylcclxuXHRcdFx0XHRcdFx0cmVzdWx0LmFkZChtZW1iZXJpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBjYW1wYWlnbmlkID0gdGhpcy5jYW1wYWlnbmlkO1xyXG5cdFx0XHRjb25zdCBtZW1iZXJzID0gYXdhaXQgKGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRpZihjYW1wYWlnbmlkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIChhd2FpdCBnZXRSZWdpc3RyYXRpb25zKGNhbXBhaWduaWQpKS5tYXAocmVnaXN0cmF0aW9uID0+IHtyZXR1cm4geyBpZDogcmVnaXN0cmF0aW9uLm1lbWJlcmlkfTt9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gZ2V0TWVtYmVycygpO1xyXG5cdFx0XHR9KSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXdhaXQgUmVuZGVyZXIucmVuZGVyKHsgdGVtcGxhdGUsIGNvbnRhaW5lcjogcm9vdCwgZGF0YTogeyBtZW1iZXJzLCBtZW1iZXJpZHMsIGNhbXBhaWduaWQgfSwgbW9kZTpcImFwcGVuZFwifSk7XHRcclxuXHRcdFx0dGhpcy4jc2VsZWN0aW9uRGlhbG9nID0gcm9vdC5maW5kKFwiOnNjb3BlID4gZGlhbG9nXCIpLmZpcnN0KCk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0dGhpcy4jc2VsZWN0aW9uRGlhbG9nLnNob3dNb2RhbCgpOyBcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlbmRlcih2YWx1ZSkge1xyXG5cdFx0dmFsdWUgPSB2YWx1ZSB8fCBhd2FpdCB0aGlzLnZhbHVlKCk7XHJcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRFTVBMQVRFX1JPT1Q7XHJcblx0XHRSZW5kZXJlci5yZW5kZXIoeyB0ZW1wbGF0ZSwgY29udGFpbmVyOiB0aGlzLnJvb3QsIGRhdGE6IHsgbWVtYmVyaWRzOiB2YWx1ZSB8fCBbXSwgY2FtcGFpZ25pZDogdGhpcy5jYW1wYWlnbmlkIH0gfSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY2FtcGFpZ25pZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9DQU1QQUlHTklEKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGFjY2VwdFZhbHVlKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB2YWx1ZSA9PSBudWxsO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVhZG9ubHlVcGRhdGVkKCkge31cclxuXHJcblx0YXN5bmMgdXBkYXRlZFZhbHVlKHZhbHVlKSB7XHJcblx0XHRpZih0aGlzLiNzZWxlY3Rpb25EaWFsb2cpXHJcblx0XHRcdHRoaXMuI3NlbGVjdGlvbkRpYWxvZy5yZW1vdmUoKVxyXG5cdFx0XHJcblx0XHRhd2FpdCB0aGlzLnJlbmRlcih2YWx1ZSk7XHJcblx0fVxyXG59XHJcblxyXG5kZWZpbmUoSFRNTFRlYW1NZW1iZXJTZWFyY2hGaWVsZEVsZW1lbnQpO1xyXG5leHBvcnQgZGVmYXVsdCBIVE1MVGVhbU1lbWJlclNlYXJjaEZpZWxkRWxlbWVudDtcclxuIiwiaW1wb3J0IHsgVEVNUExBVEVfQkFTRVBBVEgsIEVWRU5UX19HTE9CQUxfQUNUSU9OX1JFTE9BRFBBUkVOVCB9IGZyb20gXCIuLi9Db25zdGFudHMuanNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgVGVtcGxhdGUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlXCI7XHJcbmltcG9ydCB7IGdldFRlYW1zLCBzdG9yZVRlYW0gfSBmcm9tIFwiLi4vc2VydmljZXMvVGVhbVNlcnZpY2UuanNcIjtcclxuaW1wb3J0IHsgZ2V0Q2FtcGFpZ24sIHN0b3JlQ2FtcGFpZ24gfSBmcm9tIFwiLi4vc2VydmljZXMvQ2FtcGFpZ25TZXJ2aWNlLmpzXCI7XHJcbmltcG9ydCB7IGFjY2Vzc1JpZ2h0cyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UuanNcIjtcclxuaW1wb3J0IFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtZm9ybVwiO1xyXG5cclxuY29uc3QgVEVNUExBVEVTX1BBVEggPSBgJHtURU1QTEFURV9CQVNFUEFUSH0vaHRtbC10ZWFtcy1lbGVtZW50YDtcclxuY29uc3QgVEVNUExBVEVfX1JPT1QgPSBUZW1wbGF0ZS5sb2FkKG5ldyBVUkwoYCR7VEVNUExBVEVTX1BBVEh9L3Jvb3QudHBsLmh0bWxgLCBsb2NhdGlvbikpO1xyXG5cclxuY29uc3QgTk9ERU5BTUUgPSBcIngtdGVhbXNcIjtcclxuY29uc3QgQVRUUl9fQ0FNUEFJR05JRCA9IFwiY2FtcGFpZ24taWRcIlxyXG5cclxuY2xhc3MgSFRNTFRlYW1zRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGljIGdldCBOT0RFTkFNRSgpIHtcclxuXHRcdHJldHVybiBOT0RFTkFNRTtcclxuXHR9XHJcblxyXG5cdCNpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5yb290O1xyXG5cdFx0cm9vdC5vbihcImFjdGlvbjpjcmVhdGUtdGVhbVwiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY2FtcGFpZ25pZCA9IHRoaXMuY2FtcGFpZ25JZCA/IHBhcnNlSW50KHRoaXMuY2FtcGFpZ25JZCkgOiBudWxsO1xyXG5cdFx0XHRcdGF3YWl0IHN0b3JlVGVhbSh7IG5hbWU6IFwibmV1ZXMgVGVhbVwiLCBjYW1wYWlnbmlkIH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLnJlbmRlcigpO1xyXG5cdFx0XHR9KSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBpbml0KCkge1xyXG5cdFx0YXdhaXQgc3VwZXIuaW5pdCgpO1xyXG5cdFx0aWYgKCF0aGlzLiNpbml0aWFsaXplZCkge1xyXG5cdFx0XHRhd2FpdCB0aGlzLnJlbmRlcigpO1xyXG5cdFx0XHR0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgY2FtcGFpZ25JZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmF0dHIoQVRUUl9fQ0FNUEFJR05JRCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW5kZXIoKSB7XHJcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRFTVBMQVRFX19ST09UO1xyXG5cdFx0Y29uc3QgdGVhbXMgPSBhd2FpdCBnZXRUZWFtcyh0aGlzLmNhbXBhaWduSWQpO1x0XHRcclxuXHRcdGF3YWl0IFJlbmRlcmVyLnJlbmRlcih7IHRlbXBsYXRlLCBjb250YWluZXI6IHRoaXMucm9vdCwgZGF0YToge2FjY2Vzc1JpZ2h0czogYWNjZXNzUmlnaHRzKCksIHRlYW1zIH19KTtcclxuXHR9XHJcbn1cclxuXHJcbmRlZmluZShIVE1MVGVhbXNFbGVtZW50KTtcclxuZXhwb3J0IGRlZmF1bHQgSFRNTFRlYW1zRWxlbWVudDtcclxuIiwiaW1wb3J0IFwiLi9IVE1MRGlhbG9nRXh0ZW50aW9uRWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgXCIuL0hUTUxMb2dpbkVsZW1lbnQuanNcIjtcclxuaW1wb3J0IFwiLi9IVE1MQ2xhbkVsZW1lbnQuanNcIjtcclxuaW1wb3J0IFwiLi9IVE1MTWVtYmVyRWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgXCIuL0hUTUxDYW1wYWlnbnNFbGVtZW50LmpzXCI7XHJcbmltcG9ydCBcIi4vSFRNTENhbXBhaWduRWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgXCIuL0hUTUxDYW1wYWlnbk1lbWJlckVsZW1lbnQuanNcIjtcclxuaW1wb3J0IFwiLi9IVE1MVGVhbUVsZW1lbnQuanNcIjtcclxuaW1wb3J0IFwiLi9IVE1MVGVhbXNFbGVtZW50LmpzXCI7XHJcbmltcG9ydCBcIi4vSFRNTFRlYW1NZW1iZXJTZWFyY2hGaWVsZC5qc1wiO1xyXG4iLCJ3aW5kb3cuRGF0ZS5wcm90b3R5cGUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXlzKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcyk7XHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG59OyIsImltcG9ydCBcIi4vRGF0ZS5qc1wiOyIsImltcG9ydCB7Z2V0SlNPTiwgcG9zdEpTT04sIGRlbGV0ZUpTT059IGZyb20gXCIuL1NlcnZpY2VVdGlscy5qc1wiO1xyXG5pbXBvcnQgeyBtZW1iZXIgfSBmcm9tIFwiLi9Mb2dpblNlcnZpY2UuanNcIjtcclxuXHJcbmNvbnN0IEVORFBPSU5UID0gKGNhbXBhaWduKSA9PiBgL2FwaS9jYW1wYWlnbnMvJHtjYW1wYWlnbn0vcmVnaXN0cmF0aW9uc2A7XHJcbmNvbnN0IEVORFBPSU5UQllNRU1CRVIgPSAoY2FtcGFpZ24sIG1lbWJlcikgPT4gYCR7RU5EUE9JTlQoY2FtcGFpZ24pfS8ke21lbWJlcn1gO1xyXG5cclxuY29uc3QgQ0FDSEUgPSBuZXcgTWFwKCk7XHJcblxyXG5jb25zdCBnZXRDYWNoZWRSZWdpc3RyYXRpb25zID0gKGNhbXBhaWduKSA9PiB7XHJcbiAgICByZXR1cm4gQ0FDSEUuZ2V0KGNhbXBhaWduKTtcclxufVxyXG5jb25zdCBnZXRDYWNoZWRSZWdpc3RyYXRpb24gPSAoY2FtcGFpZ24sIG1lbWJlcikgPT4geyAgICBcclxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnMgPSBnZXRDYWNoZWRSZWdpc3RyYXRpb25zKGNhbXBhaWduKTtcclxuICAgIGlmKHJlZ2lzdHJhdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbnMuZ2V0KG1lbWJlcik7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGNhY2hlUmVnaXN0cmF0aW9uID0gKHJlZ2lzdHJhdGlvbikgPT57XHJcbiAgICBpZighcmVnaXN0cmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCB7IGNhbXBhaWduaWQsIG1lbWJlcmlkIH0gPSByZWdpc3RyYXRpb247XHJcbiAgICBjb25zdCBjYWNoZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgaWYoIUNBQ0hFLmhhcyhjYW1wYWlnbmlkKSlcclxuICAgICAgICAgICAgQ0FDSEUuc2V0KGNhbXBhaWduaWQsIG5ldyBNYXAoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBDQUNIRS5nZXQoY2FtcGFpZ25pZCk7XHJcbiAgICB9KSgpO1xyXG4gICAgY2FjaGUuc2V0KG1lbWJlcmlkLCByZWdpc3RyYXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVnaXN0cmF0aW9ucyA9IGFzeW5jIChjYW1wYWlnbikgPT57XHJcbiAgICBpZihDQUNIRS5oYXMoY2FtcGFpZ24pKVxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGdldENhY2hlZFJlZ2lzdHJhdGlvbnMoY2FtcGFpZ24pLnZhbHVlcygpKTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RyYXRpb25zID0gKGF3YWl0IGdldEpTT04oRU5EUE9JTlQoY2FtcGFpZ24pKSkuZGF0YTtcclxuICAgIGZvcihjb25zdCByZWdpc3RyYXRpb24gb2YgcmVnaXN0cmF0aW9ucylcclxuICAgICAgICBjYWNoZVJlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb24pO1xyXG5cclxuICAgIHJldHVybiByZWdpc3RyYXRpb25zO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmVSZWdpc3RyYXRpb24gPSBhc3luYyAoY2FtcGFpZ24sIHJlZ2lzdHJhdGlvbikgPT4ge1xyXG4gICAgcmVnaXN0cmF0aW9uID0gYXdhaXQgcG9zdEpTT04oRU5EUE9JTlQoY2FtcGFpZ24pLCByZWdpc3RyYXRpb24pO1xyXG4gICAgY2FjaGVSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uKTtcclxuICAgIHJldHVybiByZWdpc3RyYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNeVJlZ2lzdHJhdGlvbiA9IGFzeW5jIChjYW1wYWlnbikgPT4ge1xyXG4gICAgcmV0dXJuIGdldFJlZ2lzdHJhdGlvbkJ5TWVtYmVyKGNhbXBhaWduLCAgbWVtYmVyKCkuaWQpO1xyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlZ2lzdHJhdGlvbkJ5TWVtYmVyID0gYXN5bmMgKGNhbXBhaWduLCBtZW1iZXIpID0+IHtcclxuICAgIGxldCByZWdpc3RyYXRpb24gPSBnZXRDYWNoZWRSZWdpc3RyYXRpb24oY2FtcGFpZ24sIG1lbWJlcik7XHJcbiAgICBpZighcmVnaXN0cmF0aW9uKXtcclxuICAgICAgICByZWdpc3RyYXRpb24gPSBhd2FpdCBnZXRKU09OKEVORFBPSU5UQllNRU1CRVIoY2FtcGFpZ24sIG1lbWJlcikpO1xyXG4gICAgICAgIGNhY2hlUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVnaXN0cmF0aW9uO1xyXG59IFxyXG4iLCJpbXBvcnQge2dldEpTT04sIHBvc3RKU09OLCBkZWxldGVKU09OfSBmcm9tIFwiLi9TZXJ2aWNlVXRpbHMuanNcIjtcclxuXHJcbmNvbnN0IEVORFBPSU5UID0gYC9hcGkvY2FtcGFpZ25zYDtcclxuXHJcbmNvbnN0IENBQ0hFID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhbXBhaWducyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBjYW1wYWlnbnMgPSBudWxsXHJcbiAgICBpZihDQUNIRS5zaXplID09IDApe1xyXG4gICAgICAgIGNhbXBhaWducyA9IChhd2FpdCBnZXRKU09OKEVORFBPSU5UKSkuZGF0YTtcclxuICAgICAgICBmb3IoY29uc3QgY2FtcGFpZ24gb2YgY2FtcGFpZ25zKVxyXG4gICAgICAgICAgICBDQUNIRS5zZXQoY2FtcGFpZ24uaWQsIGNhbXBhaWduKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNhbXBhaWducyA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBba2V5LCBjYW1wYWlnbl0gb2YgQ0FDSEUpXHJcbiAgICAgICAgICAgIGNhbXBhaWducy5wdXNoKGNhbXBhaWduKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYW1wYWlnbnM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FtcGFpZ24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGlmKENBQ0hFLmhhcyhpZCkpXHJcbiAgICAgICAgcmV0dXJuIENBQ0hFLmdldChpZCk7XHJcblxyXG4gICAgY29uc3QgY2FtcGFpZ24gPSAoYXdhaXQgZ2V0SlNPTihgJHtFTkRQT0lOVH0vJHtpZH1gKSk7XHJcbiAgICBDQUNIRS5zZXQoY2FtcGFpZ24uaWQsIGNhbXBhaWduKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhbXBhaWduO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlQ2FtcGFpZ24gPSBhc3luYyAoY2FtcGFpZ24pID0+IHtcclxuICAgIGNhbXBhaWduID0gKGF3YWl0IHBvc3RKU09OKGAke0VORFBPSU5UfWAsIGNhbXBhaWduKSk7XHJcbiAgICBDQUNIRS5zZXQoY2FtcGFpZ24uaWQsIGNhbXBhaWduKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhbXBhaWduO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNhbXBhaWduID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVKU09OKGAke0VORFBPSU5UfS8ke2lkfWApO1xyXG4gICAgQ0FDSEUuZGVsZXRlKGlkKTtcclxufTsiLCJpbXBvcnQge0FQUEdMT0JBTCwgUEFHRVVSTCwgVVJMX0xPR0lOLCBVUkxfQUNDRVNTIH0gZnJvbSBcIi4uL0NvbnN0YW50cy5qc1wiO1xyXG5cclxuY29uc3QgU0VDT05EID0gMTAwMDtcclxuY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcblxyXG5sZXQgaXNsb2dnZWRJbiA9IGZhbHNlO1xyXG5sZXQgQUNDRVNTUklHSFRTID0ge307XHJcbmxldCBNRU1CRVI7XHJcbmxldCBBQ0NFU1NUT0tFTjtcclxubGV0IEVYUElSRUFUO1xyXG5cclxuY29uc3QgYWNjZXNzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ldyBVUkwoVVJMX0FDQ0VTUywgbG9jYXRpb24pKTtcclxuXHRpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkgcmV0dXJuIGZhbHNlO1xyXG5cdGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDAzKSByZXR1cm4gbnVsbDtcclxuXHJcblx0cmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0Y29uc3QgeyBtZW1iZXIsIGFjY2Vzc1Rva2VuLCBleHBpcmVBdCwgYWNjZXNzUmlnaHRzIH0gPSByZXNwb25zZTtcclxuXHRNRU1CRVIgPSBtZW1iZXI7XHJcblx0QUNDRVNTVE9LRU4gPSBhY2Nlc3NUb2tlbjtcclxuXHRFWFBJUkVBVCA9IGV4cGlyZUF0O1xyXG5cdEFDQ0VTU1JJR0hUUyA9IGFjY2Vzc1JpZ2h0cztcclxuXHJcblx0QVBQR0xPQkFMUy5tZW1iZXIgPSBNRU1CRVJcclxuXHRBUFBHTE9CQUxTLmFjY2Vzc1JpZ2h0cyA9IEFDQ0VTU1JJR0hUUztcclxuXHJcblx0c2NoZWR1bGVOZXhBY2Nlc3NUb2tlblJlZnJlc2goKTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBzY2hlZHVsZU5leEFjY2Vzc1Rva2VuUmVmcmVzaCA9ICgpID0+IHtcclxuXHRjb25zdCB0aW1lT2Zmc2V0ID0gRVhQSVJFQVQgLSAoRGF0ZS5ub3coKSArIE1JTlVURSk7XHJcblxyXG5cdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0YXdhaXQgYWNjZXNzKCk7XHJcblx0fSwgdGltZU9mZnNldCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcblx0aWYgKCFpc2xvZ2dlZEluKSB7XHJcblx0XHRpZiAoIWF3YWl0IGFjY2VzcygpKSB7XHJcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBuZXcgVVJMKFVSTF9MT0dJTiwgbG9jYXRpb24pLnRvU3RyaW5nKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpc2xvZ2dlZEluID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBNRU1CRVI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZnVsbEFjY2Vzc0RhdGEgPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGFjY2Vzc1Rva2VuOiBBQ0NFU1NUT0tFTixcclxuXHRcdGV4cGlyZUF0OiBFWFBJUkVBVCxcclxuXHRcdG1lbWJlcjogTUVNQkVSLFxyXG5cdFx0YWNjZXNzUmlnaHRzOiBBQ0NFU1NSSUdIVFNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2Nlc3NSaWdodHMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIEFDQ0VTU1JJR0hUUztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lbWJlciA9ICgpID0+IHtcclxuXHRyZXR1cm4gTUVNQkVSO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcblx0cmV0dXJuIEFDQ0VTU1RPS0VOO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0SlNPTiB9IGZyb20gXCIuL1NlcnZpY2VVdGlscy5qc1wiO1xyXG5pbXBvcnQgeyBtZW1iZXIgfSBmcm9tIFwiLi9Mb2dpblNlcnZpY2UuanNcIjtcclxuXHJcbmNvbnN0IEVORFBPSU5UID0gYC9hcGkvbWVtYmVyc2A7XHJcblxyXG5sZXQgRlVMTExPQURFRCA9IGZhbHNlO1xyXG5jb25zdCBDQUNIRSA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyZW50TWVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG5cdHJldHVybiBtZW1iZXIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGxldCBtZW1iZXJzID0gbnVsbFxyXG5cdGlmICghRlVMTExPQURFRCkge1xyXG5cdFx0bWVtYmVycyA9IChhd2FpdCBnZXRKU09OKEVORFBPSU5UKSkuZGF0YTtcclxuXHRcdGZvciAoY29uc3QgbWVtYmVyIG9mIG1lbWJlcnMpXHJcblx0XHRcdENBQ0hFLnNldChtZW1iZXIuaWQsIG1lbWJlcik7XHJcblxyXG5cdFx0RlVMTExPQURFRCA9IHRydWU7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdG1lbWJlcnMgPSBBcnJheS5mcm9tKENBQ0hFLnZhbHVlcygpKTtcclxuXHJcblx0cmV0dXJuIG1lbWJlcnM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyID0gYXN5bmMgKGlkKSA9PiB7XHJcblx0aWYgKENBQ0hFLmhhcyhpZCkpXHJcblx0XHRyZXR1cm4gQ0FDSEUuZ2V0KGlkKTtcclxuXHJcblx0Y29uc3QgbWVtYmVyID0gYXdhaXQgZ2V0SlNPTihgJHtFTkRQT0lOVH0vJHtpZH1gKTtcclxuXHRpZiAobWVtYmVyKVxyXG5cdFx0Q0FDSEUuc2V0KG1lbWJlci5pZCwgbWVtYmVyKTtcclxuXHJcblx0cmV0dXJuIG1lbWJlcjtcclxufSIsImltcG9ydCB7bG9naW59IGZyb20gXCIuL0xvZ2luU2VydmljZS5qc1wiO1xyXG5cclxuY29uc3QgdG9VUkwgPSAodXJsKSA9PiB7XHJcbiAgICBpZighKHVybCBpbnN0YW5jZW9mIFVSTCkpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBVUkwodXJsLCBsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gdXJsO1xyXG59O1xyXG5cclxuY29uc3QgaW50ZXJuYWxGZXRjaCA9IGFzeW5jICh1cmwsIHJlcXVlc3QpID0+IHtcdFxyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9VUkwodXJsKSwgcmVxdWVzdCk7XHJcblx0aWYocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzID49IDQwMClcclxuXHRcdHJldHVybiBhd2FpdCBsb2dpbigpO1xyXG5cdFx0XHJcblx0cmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SlNPTiA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW50ZXJuYWxGZXRjaCh1cmwsIHtoZWFkZXJzOntcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn19KTtcclxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA8IDIwNClcclxuICAgIFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0SlNPTiA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW50ZXJuYWxGZXRjaCh1cmwsIHttZXRob2Q6IFwicG9zdFwiICxoZWFkZXJzOntcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpfSk7XHJcbiAgICBpZihyZXNwb25zZS5zdGF0dXMgPCAyMDQpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVKU09OID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgYXdhaXQgaW50ZXJuYWxGZXRjaCh1cmwsIHttZXRob2Q6IFwiZGVsZXRlXCIsIGhlYWRlcnM6e1wiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifX0pO1xyXG59OyIsImltcG9ydCB7Z2V0SlNPTiwgcG9zdEpTT04sIGRlbGV0ZUpTT059IGZyb20gXCIuL1NlcnZpY2VVdGlscy5qc1wiO1xyXG5cclxuY29uc3QgRU5EUE9JTlQgPSBgL2FwaS90ZWFtc2A7XHJcblxyXG5jb25zdCBDQUNIRSA9IG5ldyBNYXAoKTtcclxuY29uc3QgQ0FDSEVfQ0FNUEFJR05URUFNUyA9IG5ldyBNYXAoKTtcclxuXHJcbmNvbnN0IGdldENhbXBpZ25DYWNoZSA9IChjYW1wYWlnbmlkID0gbnVsbCwgY3JlYXRlPWZhbHNlKSA9PiB7XHRcclxuXHRjb25zdCBjYWNoZUtleSA9IGAke2NhbXBhaWduaWQgPyBjYW1wYWlnbmlkIDogLTF9YDtcclxuXHRpZihDQUNIRV9DQU1QQUlHTlRFQU1TLmhhcyhjYWNoZUtleSkpXHJcblx0XHRyZXR1cm4gQ0FDSEVfQ0FNUEFJR05URUFNUy5nZXQoY2FjaGVLZXkpO1xyXG5cdFxyXG5cdGlmKCFjcmVhdGUpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRcclxuXHRjb25zdCBjYW1wYWlnbkNhY2hlID0gbmV3IE1hcCgpO1xyXG5cdENBQ0hFX0NBTVBBSUdOVEVBTVMuc2V0KGNhY2hlS2V5LCBjYW1wYWlnbkNhY2hlKTtcclxuXHRcclxuXHRyZXR1cm4gY2FtcGFpZ25DYWNoZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRlYW1zID0gYXN5bmMgKGNhbXBhaWduaWQgPSBudWxsKSA9PiB7XHRcdFxyXG5cdGxldCBjYW1wYWlnbkNhY2hlID0gZ2V0Q2FtcGlnbkNhY2hlKGNhbXBhaWduaWQpO1xyXG5cdGlmKGNhbXBhaWduQ2FjaGUpXHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShjYW1wYWlnbkNhY2hlLnZhbHVlcygpKTtcclxuXHRcdFxyXG5cdGNhbXBhaWduQ2FjaGUgPSBnZXRDYW1waWduQ2FjaGUoY2FtcGFpZ25pZCwgdHJ1ZSk7ICAgIFxyXG4gICAgY29uc3QgdGVhbXMgPSAoYXdhaXQgKGFzeW5jICgpID0+IHtcclxuXHRcdGlmKGNhbXBhaWduaWQpXHJcblx0XHRcdHJldHVybiBnZXRKU09OKGAke0VORFBPSU5UfS9jYW1wYWlnbi8ke2NhbXBhaWduaWR9YCk7XHJcblx0XHRyZXR1cm4gZ2V0SlNPTihFTkRQT0lOVCk7XHJcblx0fSkoKSkuZGF0YTsgICAgXHJcbiAgICBcclxuICAgIGZvcihsZXQgdGVhbSBvZiB0ZWFtcyl7XHJcblx0XHRjYW1wYWlnbkNhY2hlLnNldCh0ZWFtLmlkLCB0ZWFtKTtcclxuICAgICAgICBDQUNIRS5zZXQodGVhbS5pZCwgdGVhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRlYW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRlYW0gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGlmKENBQ0hFLmhhcyhpZCkpXHJcbiAgICAgICAgcmV0dXJuIENBQ0hFLmdldChpZCk7XHJcblxyXG4gICAgY29uc3QgdGVhbSA9IGF3YWl0IGdldEpTT04oYCR7RU5EUE9JTlR9LyR7aWR9YCk7XHJcbiAgICBDQUNIRS5zZXQodGVhbS5pZCwgdGVhbSk7ICAgIFxyXG4gICAgY29uc3QgY2FtcGFpZ25DYWNoZSA9IGdldENhbXBpZ25DYWNoZSh0ZWFtLmNhbXBhaWduaWQsIHRydWUpO1xyXG5cdGNhbXBhaWduQ2FjaGUuc2V0KHRlYW0uaWQsIHRlYW0pO1xyXG5cdFxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmVUZWFtID0gYXN5bmMgKHRlYW0pID0+IHtcclxuICAgIHRlYW0gPSBhd2FpdCBwb3N0SlNPTihgJHtFTkRQT0lOVH1gLCB0ZWFtICk7XHJcbiAgICBDQUNIRS5zZXQodGVhbS5pZCwgdGVhbSk7XHJcbiAgICBjb25zdCBjYW1wYWlnbkNhY2hlID0gZ2V0Q2FtcGlnbkNhY2hlKHRlYW0uY2FtcGFpZ25pZCwgdHJ1ZSk7XHJcblx0Y2FtcGFpZ25DYWNoZS5zZXQodGVhbS5pZCwgdGVhbSk7XHJcblxyXG4gICAgcmV0dXJuIHRlYW07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVGVhbSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgYXdhaXQgZGVsZXRlSlNPTihgJHtFTkRQT0lOVH0vJHtpZH1gKTsgICAgXHJcbiAgICBjb25zdCB0ZWFtID0gQ0FDSEUuZ2V0KGlkKTtcclxuICAgIGNvbnN0IGNhbXBhaWduQ2FjaGUgPSBnZXRDYW1waWduQ2FjaGUodGVhbS5jYW1wYWlnbmlkLCBmYWxzZSk7XHJcbiAgICBpZihjYW1wYWlnbkNhY2hlKVxyXG5cdFx0Y2FtcGFpZ25DYWNoZS5kZWxldGUoaWQpO1xyXG5cdFx0XHJcblx0Q0FDSEUuZGVsZXRlKGlkKTtcclxufTsiLCIoKGdsb2JhbCkgPT4ge1xyXG4gICAgY29uc3QgREFURUZPUk1BVCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdkZWZhdWx0Jywge3dlZWtkYXk6ICdsb25nJyxtb250aDogJ2xvbmcnLCBkYXk6J251bWVyaWMnfSk7XHJcblx0Y29uc3QgdG9EYXRlID0gKGRhdGUgPSBuZXcgRGF0ZSgpKSA9PiB7XHJcblx0XHRyZXR1cm4gREFURUZPUk1BVC5mb3JtYXQoZGF0ZSlcclxuXHR9O1xyXG5cclxuICAgIGdsb2JhbC5EYXRlRm9ybWF0cyA9IGdsb2JhbC5EYXRlRm9ybWF0cyB8fCB7XHJcblx0XHR0b0RhdGVcclxuXHR9O1xyXG59KSh3aW5kb3cpOyIsIigoZ2xvYmFsKSA9PiB7XHJcblx0Y29uc3QgdG9EYXRlID0gKGRhdGUgPSBuZXcgRGF0ZSgpKSA9PiB7XHRcdFxyXG5cdFx0Y29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcdFx0XHJcblx0XHRjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuXHRcdGRhdGUgPSBkYXRlLmdldERhdGUoKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGUsIG1vbnRoLCB5ZWFyLFxyXG5cdFx0XHR0ZXN0OiB5ZWFyICogMTAwMDAgKyBtb250aCAqIDEwMCArIGRhdGVcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGF0ZUdyZWF0ZXJFcXVhbCA9IChhLCBiKSA9PiB7XHJcblx0XHRhID0gdG9EYXRlKGEgaW5zdGFuY2VvZiBEYXRlID8gYSA6IERhdGUucGFyc2UoYSkpO1xyXG5cdFx0YiA9IHRvRGF0ZShiIGluc3RhbmNlb2YgRGF0ZSA/IGIgOiBEYXRlLnBhcnNlKGIpKTtcclxuXHJcblx0XHRyZXR1cm4gYS50ZXN0ID49IGIudGVzdDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRlR3JlYXRlciA9IChhLCBiKSA9PiB7XHJcblx0XHRhID0gdG9EYXRlKGEgaW5zdGFuY2VvZiBEYXRlID8gYSA6IERhdGUucGFyc2UoYSkpO1xyXG5cdFx0YiA9IHRvRGF0ZShiIGluc3RhbmNlb2YgRGF0ZSA/IGIgOiBEYXRlLnBhcnNlKGIpKTtcclxuXHJcblx0XHRyZXR1cm4gYS50ZXN0ID4gYi50ZXN0O1xyXG5cdH07XHJcblxyXG5cdGdsb2JhbC5mb3JtVXRpbHMgPSBnbG9iYWwuZm9ybVV0aWxzIHx8IHtcclxuXHRcdGRhdGU6IHtcclxuXHRcdFx0Z3JlYXRlckVxdWFsOiBkYXRlR3JlYXRlckVxdWFsLFxyXG5cdFx0XHRncmVhdGVyRXF1YWxOb3c6IChkYXRlKSA9PiBkYXRlR3JlYXRlckVxdWFsKGRhdGUsIG5ldyBEYXRlKCkpLFxyXG4gICAgICAgICAgICBncmVhdGVyOiBkYXRlR3JlYXRlclxyXG5cdFx0fSxcclxuXHR9O1xyXG59KSh3aW5kb3cpO1xyXG4iLCJjb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblxyXG5CT0RZLm9uKFwiYWN0aW9uOm1hbmFnZW1lbnQ6c3luYy1hbGwtZGF0YVwiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHtldmVudH0pO1xyXG4gICAgYXdhaXQgZmV0Y2goXCIvYXBpL21hbmFnZW1lbnQvc3luYy1kYXRhXCIsIGxvY2F0aW9uKTtcclxufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9MaWJzXHJcbmltcG9ydCBcIi4uLy4uL2pzL0h0dHBJbnRlcmNlcHRvci5qc1wiO1xyXG5pbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XHJcbmltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1hcHAtdG9vbGJveFwiO1xyXG5cclxuLy9jc3NcclxuaW1wb3J0ICdtYXRlcmlhbC1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3MnO1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvZm9ybS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvaGVhZGVyLmNzc1wiO1xyXG5cclxuXHJcblxyXG4vLyBjdXN0b20gY29kZVxyXG5pbXBvcnQgXCIuLi8uLi9qcy9qYXZhc2NyaXB0LWV4dGVudGlvbnMvaW5kZXguanNcIjtcclxuaW1wb3J0IFwiLi4vLi4vanMvUmVnaXN0cmF0ZVNlcnZpY2VXb3JrZXIuanNcIjtcclxuaW1wb3J0IFwiLi4vLi4vanMvY29tcG9uZW50cy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL0Zvcm1VdGlscy5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL0RhdGVGb3JtYXQuanNcIjtcclxuXHJcbi8vIGxvZ2ljXHJcbmltcG9ydCBcIi4vanMvTWFuYWdlbWVudC5qc1wiXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=