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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/app/ComponentManager.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentManager =
/*#__PURE__*/
function () {
  function ComponentManager() {
    _classCallCheck(this, ComponentManager);

    this.components = [];
  } //Register a compnent to the manager
  // usage: 
  // import View from "./app/ComponentManager.js";
  // let app = new View();
  //
  // app.registerComponent("myFlexGrid", "view", FlexGridComp, data)
  // app.updateComponentByName("myFlexGrid");
  // or
  // app.updateAllComponents();


  _createClass(ComponentManager, [{
    key: "registerComponent",
    value: function registerComponent(name, tag, Component, object) {
      var component = null;

      if (object == null || object == undefined) {
        component = new Component(tag);
        component.name = name;
      } else {
        component = new Component(tag, object);
        component.name = name;
      }

      this.components.push(component);
    } // Update all registers components

  }, {
    key: "updateAllComponents",
    value: function updateAllComponents() {
      for (var i = 0; i < this.components.length; i++) {
        this.components[i].update();
      }
    } // update component by name

  }, {
    key: "updateComponentByName",
    value: function updateComponentByName(name) {
      for (var i = 0; i < this.components.length; i++) {
        if (this.components[i].name == name) {
          this.components[i].update();
        }
      }
    }
  }]);

  return ComponentManager;
}();


var __useDefault = true;
// CONCATENATED MODULE: ./src/app/utils/HtmlElementUtils.js
function HtmlElementUtils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HtmlElementUtils_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HtmlElementUtils_createClass(Constructor, protoProps, staticProps) { if (protoProps) HtmlElementUtils_defineProperties(Constructor.prototype, protoProps); if (staticProps) HtmlElementUtils_defineProperties(Constructor, staticProps); return Constructor; }

var HtmlAddEllementUtils =
/*#__PURE__*/
function () {
  function HtmlAddEllementUtils() {
    HtmlElementUtils_classCallCheck(this, HtmlAddEllementUtils);
  } //Content Methods


  HtmlElementUtils_createClass(HtmlAddEllementUtils, [{
    key: "addContentByClass",
    value: function addContentByClass(cl, content) {
      var targets = document.querySelectorAll("." + cl);

      for (var i = targets.length - 1; i >= 0; --i) {
        targets[i].innerHTML = content;
      }
    }
  }, {
    key: "addContentToElement",
    value: function addContentToElement(element, content) {
      element.innerHTML = content;
    }
  }, {
    key: "addContentById",
    value: function addContentById(id, content) {
      var el = document.appendChild(content);
      var target = this.getById(id);
      target.appendChild(el);
    }
  }, {
    key: "addHtmlById",
    value: function addHtmlById(id, html) {
      var target = this.getById(id);
      target.innerHTML = html;
    } //Event Methods

  }, {
    key: "addEventByClass",
    value: function addEventByClass(cl, eventType, cb) {
      var targets = document.querySelectorAll("." + cl); //var clickEvent = new CustomEvent("clickIt", {detail: {data: "test",	time: new Date()},bubbles: true,cancelable: true});
      //let clickEvent = this.createEvent("CustomEvent");
      //clickEvent.initCustomEvent("clickIt", true, true, {'data': data});
      //this.dispatchEvent(clickEvent);

      for (var i = targets.length - 1; i >= 0; --i) {
        targets[i].addEventListener(eventType, cb);
      }
    }
  }, {
    key: "addEventToElement",
    value: function addEventToElement(element, eventType, cb) {
      element.addEventListener(eventType, cb);
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return document.getElementById(id);
    }
  }, {
    key: "getByClass",
    value: function getByClass(cl) {
      return document.getElementsByClassName(cl);
    }
  }]);

  return HtmlAddEllementUtils;
}();


var HtmlElementUtils_useDefault = true;
// CONCATENATED MODULE: ./src/app/components/Component.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Component_createClass(Constructor, protoProps, staticProps) { if (protoProps) Component_defineProperties(Constructor.prototype, protoProps); if (staticProps) Component_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Component =
/*#__PURE__*/
function (_HtmlUtils) {
  _inherits(Component, _HtmlUtils);

  function Component(cls, data) {
    var _this;

    Component_classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this));
    _this.data = data;
    _this.cls = cls;
    _this.name;
    return _this;
  } // Error is component does not contain a update method.


  Component_createClass(Component, [{
    key: "update",
    value: function update() {
      console.log("Error: Component does not contain a update method");
    }
  }]);

  return Component;
}(HtmlAddEllementUtils);


var Component_useDefault = true;
// CONCATENATED MODULE: ./src/app/components/FlexGrid/FlexGrid.js
function FlexGrid_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FlexGrid_typeof = function _typeof(obj) { return typeof obj; }; } else { FlexGrid_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FlexGrid_typeof(obj); }

function FlexGrid_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FlexGrid_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FlexGrid_createClass(Constructor, protoProps, staticProps) { if (protoProps) FlexGrid_defineProperties(Constructor.prototype, protoProps); if (staticProps) FlexGrid_defineProperties(Constructor, staticProps); return Constructor; }

function FlexGrid_possibleConstructorReturn(self, call) { if (call && (FlexGrid_typeof(call) === "object" || typeof call === "function")) { return call; } return FlexGrid_assertThisInitialized(self); }

function FlexGrid_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FlexGrid_getPrototypeOf(o) { FlexGrid_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FlexGrid_getPrototypeOf(o); }

function FlexGrid_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FlexGrid_setPrototypeOf(subClass, superClass); }

function FlexGrid_setPrototypeOf(o, p) { FlexGrid_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FlexGrid_setPrototypeOf(o, p); }




var FlexGrid_FlexGrid =
/*#__PURE__*/
function (_Component) {
  FlexGrid_inherits(FlexGrid, _Component);

  function FlexGrid(cls, data) {
    var _this;

    FlexGrid_classCallCheck(this, FlexGrid);

    _this = FlexGrid_possibleConstructorReturn(this, FlexGrid_getPrototypeOf(FlexGrid).call(this, cls, data));
    _this.startpage = 0;
    _this.numPages = 9;
    return _this;
  } //called when component needs to be rebuilt


  FlexGrid_createClass(FlexGrid, [{
    key: "update",
    value: function update() {
      var cel = new HtmlAddEllementUtils();
      var count = -1;
      var newData = [];
      console.log('Data Count...', this.data.lenght);

      for (var index = this.startpage; index < this.numPages; index++) {
        newData.push(this.data[index]);
      }

      console.log("Page: " + newData);
      var markup = "\n    ".concat(newData.map(function (info) {
        return "<artical class=\"FlexGrid\" id=".concat(count += 1, ">\n        <div>\n          <a href=\"").concat(info.projectUrl, "\" target=\"_blank\">\n            <img alt=\"").concat(info.projectName, "\" src=\"").concat(info.imageUrl, "\">\n          </a>\n        </div>\n        <span class=\"projectTitle\">\n              ").concat(info.projectName, "\n        </span>\n        </artical>");
      }).join(''), "\n    ");
      this.addContentByClass(this.cls, markup);
      cel.addEventByClass('FlexGrid', "mouseover", this.showDescription);
    }
  }, {
    key: "showDescription",
    value: function showDescription(event) {
      event.preventDefault();
      console.log("element mouse over: ", event.currentTarget.getElementById("id").value, this.data[event.currentTarget.getElementById("id").value]);
    }
  }]);

  return FlexGrid;
}(Component);


var FlexGrid_useDefault = true;
// CONCATENATED MODULE: ./src/app/utils/EventConstants.js
function EventConstants_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventConstants_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventConstants_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventConstants_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventConstants_defineProperties(Constructor, staticProps); return Constructor; }

var Constants =
/*#__PURE__*/
function () {
  function Constants() {
    EventConstants_classCallCheck(this, Constants);
  }

  EventConstants_createClass(Constants, null, [{
    key: "CLICK_EVENT",
    get: function get() {
      return 'click';
    }
  }]);

  return Constants;
}();


var EventConstants_useDefault = true;
// CONCATENATED MODULE: ./src/main.js
//Entry Point




var app = new ComponentManager();
var main_cel = new HtmlAddEllementUtils();
document.body.onload = init;

function init(e) {
  var data = [{
    "projectName": "Supply Connect 1",
    "projectUrl": "https://surplusconnection.herokuapp.com/#/home",
    "imageUrl": "./images/surplus_connection.png",
    "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Kitchen Sink 1",
    "projectUrl": "http://kitchensinkapp.herokuapp.com/",
    "imageUrl": "./images/kitchen_sink.png",
    "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Booster Draft Simulator 1",
    "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html",
    "imageUrl": "./images/booster_draft.png",
    "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Supply Connect 2",
    "projectUrl": "https://surplusconnection.herokuapp.com/#/home",
    "imageUrl": "./images/surplus_connection.png",
    "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Kitchen Sink 2",
    "projectUrl": "http://kitchensinkapp.herokuapp.com/",
    "imageUrl": "./images/kitchen_sink.png",
    "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Booster Draft Simulator 2",
    "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html",
    "imageUrl": "./images/booster_draft.png",
    "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Supply Connect 3",
    "projectUrl": "https://surplusconnection.herokuapp.com/#/home",
    "imageUrl": "./images/surplus_connection.png",
    "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Kitchen Sink 3",
    "projectUrl": "http://kitchensinkapp.herokuapp.com/",
    "imageUrl": "./images/kitchen_sink.png",
    "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }, {
    "projectName": "Booster Draft Simulator 3",
    "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html",
    "imageUrl": "./images/booster_draft.png",
    "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."
  }]; // add html to tag by class name - will effect all elements with the same class name

  main_cel.addContentByClass('box', '<a href="" class="test">What is happening</a>');
  main_cel.addEventByClass('test', Constants.CLICK_EVENT, eventCb); //Register FlexGrid component to manager 

  app.registerComponent("myFlexGrid", "view", FlexGrid_FlexGrid, data); //call update on components

  app.updateAllComponents(); //app.updateComponentByName("myFlexGrid");
}

function eventCb(event) {
  event.preventDefault();
  console.log("element clicked", event.currentTarget);
  main_cel.addContentToElement(event.currentTarget, '<a href="" class="test">This is happening</a');
  main_cel.addEventToElement(event.currentTarget, Constants.CLICK_EVENT, init);
}

/***/ })
/******/ ]);