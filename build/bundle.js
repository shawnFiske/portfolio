/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/ComponentManager.js":
/*!*************************************!*\
  !*** ./src/app/ComponentManager.js ***!
  \*************************************/
/*! exports provided: default, __useDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentManager; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__useDefault\", function() { return __useDefault; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ComponentManager =\n/*#__PURE__*/\nfunction () {\n  function ComponentManager() {\n    _classCallCheck(this, ComponentManager);\n\n    this.components = [];\n  } //Register a compnent to the manager\n  // usage: \n  // import View from \"./app/ComponentManager.js\";\n  // let app = new View();\n  //\n  // app.registerComponent(\"myFlexGrid\", \"view\", FlexGridComp, data)\n  // app.updateComponentByName(\"myFlexGrid\");\n  // or\n  // app.updateAllComponents();\n\n\n  _createClass(ComponentManager, [{\n    key: \"registerComponent\",\n    value: function registerComponent(name, tag, Component) {\n      var pages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      var object = arguments.length > 4 ? arguments[4] : undefined;\n      var component = null;\n\n      if (object == null || object == undefined) {\n        component = new Component(tag);\n        component.name = name;\n        component.pageInc = pages;\n      } else {\n        component = new Component(tag, object);\n        component.name = name;\n        component.pageInc = pages;\n      }\n\n      this.components.push(component);\n    } // Update all registers components\n\n  }, {\n    key: \"updateAllComponents\",\n    value: function updateAllComponents() {\n      for (var i = 0; i < this.components.length; i++) {\n        this.components[i].update();\n      }\n    } // update component by name\n\n  }, {\n    key: \"updateComponentByName\",\n    value: function updateComponentByName(name) {\n      for (var i = 0; i < this.components.length; i++) {\n        if (this.components[i].name == name) {\n          this.components[i].update();\n        }\n      }\n    }\n  }, {\n    key: \"updateComponentPageView\",\n    value: function updateComponentPageView(name, itemCount) {\n      for (var i = 0; i < this.components.length; i++) {\n        if (this.components[i].name == name) {\n          this.components[i].pagInc = itemCount;\n        }\n      }\n    }\n  }]);\n\n  return ComponentManager;\n}();\n\n\nvar __useDefault = true;\n\n//# sourceURL=webpack:///./src/app/ComponentManager.js?");

/***/ }),

/***/ "./src/app/components/Component.js":
/*!*****************************************!*\
  !*** ./src/app/components/Component.js ***!
  \*****************************************/
/*! exports provided: default, __useDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__useDefault\", function() { return __useDefault; });\n/* harmony import */ var _utils_HtmlElementUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/HtmlElementUtils.js */ \"./src/app/utils/HtmlElementUtils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Component =\n/*#__PURE__*/\nfunction (_HtmlUtils) {\n  _inherits(Component, _HtmlUtils);\n\n  function Component(cls, data) {\n    var _this;\n\n    _classCallCheck(this, Component);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this));\n    _this.data = data;\n    _this.cls = cls;\n    _this.name;\n    _this.currentPage = 0;\n    _this.pageInc;\n    return _this;\n  } // Error is component does not contain a update method.\n\n\n  _createClass(Component, [{\n    key: \"update\",\n    value: function update() {\n      console.log(\"Error: Component does not contain a update method\");\n    }\n  }]);\n\n  return Component;\n}(_utils_HtmlElementUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\nvar __useDefault = true;\n\n//# sourceURL=webpack:///./src/app/components/Component.js?");

/***/ }),

/***/ "./src/app/components/FlexGrid/FlexGrid.js":
/*!*************************************************!*\
  !*** ./src/app/components/FlexGrid/FlexGrid.js ***!
  \*************************************************/
/*! exports provided: default, __useDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlexGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__useDefault\", function() { return __useDefault; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component.js */ \"./src/app/components/Component.js\");\n/* harmony import */ var _app_utils_HtmlElementUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/utils/HtmlElementUtils.js */ \"./src/app/utils/HtmlElementUtils.js\");\n/* harmony import */ var _app_utils_EventConstants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/utils/EventConstants.js */ \"./src/app/utils/EventConstants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar FlexGrid =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(FlexGrid, _Component);\n\n  function FlexGrid(cls, data) {\n    _classCallCheck(this, FlexGrid);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(FlexGrid).call(this, cls, data));\n  } //called when component needs to be rebuilt\n\n\n  _createClass(FlexGrid, [{\n    key: \"update\",\n    value: function update() {\n      var cel = new _app_utils_HtmlElementUtils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      var count = -1;\n      var newData = [];\n      console.log(\"page count\", this.pageInc); //create component view page dataS\n\n      for (var index = this.currentPage; index < this.currentPage + this.pageInc; index++) {\n        if (this.data[index] != undefined) {\n          newData.push(this.data[index]);\n        }\n      }\n\n      ; //create html and populate data\n\n      var markup = \"\\n    \".concat(newData.map(function (info) {\n        return \"<artical class=\\\"FlexGrid\\\" id=\".concat(count += 1, \">\\n        <div>\\n          <a href=\\\"\").concat(info.projectUrl, \"\\\" target=\\\"_blank\\\">\\n            <img alt=\\\"\").concat(info.projectName, \"\\\" src=\\\"\").concat(info.imageUrl, \"\\\">\\n          </a>\\n        </div>\\n        <span class=\\\"projectTitle\\\">\\n              \").concat(info.projectName, \"\\n        </span>\\n        </artical>\");\n      }).join(''), \"\\n    \");\n      this.addContentByClass(this.cls, markup); //cel.addEventByClass('FlexGrid', \"mouseover\", this.showDescription);\n\n      cel.addEventByClass('FlexGridPageDown', _app_utils_EventConstants_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CLICK_EVENT, this.pageDown.bind(this, this.currentPage, this.pageInc, this.data.length));\n      cel.addEventByClass('FlexGridPageUp', _app_utils_EventConstants_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CLICK_EVENT, this.pageUp.bind(this, this.currentPage, this.pageInc, this.data.length));\n    }\n  }, {\n    key: \"showDescription\",\n    value: function showDescription(data) {\n      event.preventDefault();\n      console.log(\"element mouse over: \", event.currentTarget, data);\n    } //Increament the pages\n\n  }, {\n    key: \"pageUp\",\n    value: function pageUp(currentPage, pageInc, size) {\n      this.currentPage = this.currentPage + this.pageInc;\n\n      if (this.currentPage + this.pageInc > size) {\n        this.currentPage = size - this.pageInc;\n      }\n\n      this.update();\n    } //Decreament the pages\n\n  }, {\n    key: \"pageDown\",\n    value: function pageDown(currentPage, pageInc, size) {\n      this.currentPage = this.currentPage - this.pageInc;\n\n      if (this.currentPage < 0) {\n        this.currentPage = 0;\n      }\n\n      this.update();\n    }\n  }]);\n\n  return FlexGrid;\n}(_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\nvar __useDefault = true;\n\n//# sourceURL=webpack:///./src/app/components/FlexGrid/FlexGrid.js?");

/***/ }),

/***/ "./src/app/utils/EventConstants.js":
/*!*****************************************!*\
  !*** ./src/app/utils/EventConstants.js ***!
  \*****************************************/
/*! exports provided: default, __useDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Constants; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__useDefault\", function() { return __useDefault; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Constants =\n/*#__PURE__*/\nfunction () {\n  function Constants() {\n    _classCallCheck(this, Constants);\n  }\n\n  _createClass(Constants, null, [{\n    key: \"CLICK_EVENT\",\n    get: function get() {\n      return 'click';\n    }\n  }]);\n\n  return Constants;\n}();\n\n\nvar __useDefault = true;\n\n//# sourceURL=webpack:///./src/app/utils/EventConstants.js?");

/***/ }),

/***/ "./src/app/utils/HtmlElementUtils.js":
/*!*******************************************!*\
  !*** ./src/app/utils/HtmlElementUtils.js ***!
  \*******************************************/
/*! exports provided: default, __useDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HtmlAddEllementUtils; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__useDefault\", function() { return __useDefault; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HtmlAddEllementUtils =\n/*#__PURE__*/\nfunction () {\n  function HtmlAddEllementUtils() {\n    _classCallCheck(this, HtmlAddEllementUtils);\n  } //Content Methods\n\n\n  _createClass(HtmlAddEllementUtils, [{\n    key: \"addContentByClass\",\n    value: function addContentByClass(cl, content) {\n      var targets = document.querySelectorAll(\".\" + cl);\n\n      for (var i = targets.length - 1; i >= 0; --i) {\n        targets[i].innerHTML = content;\n      }\n    }\n  }, {\n    key: \"addContentToElement\",\n    value: function addContentToElement(element, content) {\n      element.innerHTML = content;\n    }\n  }, {\n    key: \"addContentById\",\n    value: function addContentById(id, content) {\n      var el = document.appendChild(content);\n      var target = this.getById(id);\n      target.appendChild(el);\n    }\n  }, {\n    key: \"addHtmlById\",\n    value: function addHtmlById(id, html) {\n      var target = this.getById(id);\n      target.innerHTML = html;\n    } //Event Methods\n\n  }, {\n    key: \"addEventByClass\",\n    value: function addEventByClass(cl, eventType, cb) {\n      var targets = document.querySelectorAll(\".\" + cl); //var clickEvent = new CustomEvent(\"clickIt\", {detail: {data: \"test\",\ttime: new Date()},bubbles: true,cancelable: true});\n      //let clickEvent = this.createEvent(\"CustomEvent\");\n      //clickEvent.initCustomEvent(\"clickIt\", true, true, {'data': data});\n      //this.dispatchEvent(clickEvent);\n\n      for (var i = targets.length - 1; i >= 0; --i) {\n        targets[i].addEventListener(eventType, cb);\n      }\n    }\n  }, {\n    key: \"addEventToElement\",\n    value: function addEventToElement(element, eventType, cb) {\n      element.addEventListener(eventType, cb);\n    }\n  }, {\n    key: \"getById\",\n    value: function getById(id) {\n      return document.getElementById(id);\n    }\n  }, {\n    key: \"getByClass\",\n    value: function getByClass(cl) {\n      return document.getElementsByClassName(cl);\n    }\n  }]);\n\n  return HtmlAddEllementUtils;\n}();\n\n\nvar __useDefault = true;\n\n//# sourceURL=webpack:///./src/app/utils/HtmlElementUtils.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_ComponentManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ComponentManager.js */ \"./src/app/ComponentManager.js\");\n/* harmony import */ var _app_components_FlexGrid_FlexGrid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/FlexGrid/FlexGrid.js */ \"./src/app/components/FlexGrid/FlexGrid.js\");\n/* harmony import */ var _app_utils_HtmlElementUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/utils/HtmlElementUtils.js */ \"./src/app/utils/HtmlElementUtils.js\");\n/* harmony import */ var _app_utils_EventConstants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/utils/EventConstants.js */ \"./src/app/utils/EventConstants.js\");\n//Entry Point\n\n\n\n\nvar app = new _app_ComponentManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar cel = new _app_utils_HtmlElementUtils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\ndocument.body.onload = init;\n\nfunction init(e) {\n  var data = [{\n    \"projectName\": \"Supply Connect 1\",\n    \"projectUrl\": \"https://surplusconnection.herokuapp.com/#/home\",\n    \"imageUrl\": \"./images/surplus_connection.png\",\n    \"description\": \"Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Kitchen Sink 1\",\n    \"projectUrl\": \"http://kitchensinkapp.herokuapp.com/\",\n    \"imageUrl\": \"./images/kitchen_sink.png\",\n    \"description\": \"Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Booster Draft Simulator 1\",\n    \"projectUrl\": \"http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html\",\n    \"imageUrl\": \"./images/booster_draft.png\",\n    \"description\": \"Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Supply Connect 2\",\n    \"projectUrl\": \"https://surplusconnection.herokuapp.com/#/home\",\n    \"imageUrl\": \"./images/surplus_connection.png\",\n    \"description\": \"Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Kitchen Sink 2\",\n    \"projectUrl\": \"http://kitchensinkapp.herokuapp.com/\",\n    \"imageUrl\": \"./images/kitchen_sink.png\",\n    \"description\": \"Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Booster Draft Simulator 2\",\n    \"projectUrl\": \"http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html\",\n    \"imageUrl\": \"./images/booster_draft.png\",\n    \"description\": \"Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Supply Connect 3\",\n    \"projectUrl\": \"https://surplusconnection.herokuapp.com/#/home\",\n    \"imageUrl\": \"./images/surplus_connection.png\",\n    \"description\": \"Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Kitchen Sink 3\",\n    \"projectUrl\": \"http://kitchensinkapp.herokuapp.com/\",\n    \"imageUrl\": \"./images/kitchen_sink.png\",\n    \"description\": \"Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }, {\n    \"projectName\": \"Booster Draft Simulator 3\",\n    \"projectUrl\": \"http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html\",\n    \"imageUrl\": \"./images/booster_draft.png\",\n    \"description\": \"Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus.\"\n  }]; // add html to tag by class name - will effect all elements with the same class name\n\n  cel.addContentByClass('box', '<a href=\"\" class=\"test\">What is happening</a>');\n  cel.addEventByClass('test', _app_utils_EventConstants_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CLICK_EVENT, eventCb); //Register FlexGrid component to manager \n\n  app.registerComponent(\"myFlexGrid\", \"view\", _app_components_FlexGrid_FlexGrid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 6, data); //call update on components\n\n  app.updateAllComponents(); //app.updateComponentByName(\"myFlexGrid\");\n}\n\nfunction eventCb(event) {\n  event.preventDefault();\n  console.log(\"element clicked\", event.currentTarget);\n  cel.addContentToElement(event.currentTarget, '<a href=\"\" class=\"test\">This is happening</a');\n  cel.addEventToElement(event.currentTarget, _app_utils_EventConstants_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CLICK_EVENT, init);\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });