/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/svgxuse/svgxuse.js":
/*!*****************************************!*\
  !*** ./node_modules/svgxuse/svgxuse.js ***!
  \*****************************************/
/***/ (() => {

eval("/*!\n * @copyright Copyright (c) 2017 IcoMoon.io\n * @license   Licensed under MIT license\n *            See https://github.com/Keyamoon/svgxuse\n * @version   1.2.6\n */\n/*jslint browser: true */\n/*global XDomainRequest, MutationObserver, window */\n(function () {\n    \"use strict\";\n    if (typeof window !== \"undefined\" && window.addEventListener) {\n        var cache = Object.create(null); // holds xhr objects to prevent multiple requests\n        var checkUseElems;\n        var tid; // timeout id\n        var debouncedCheck = function () {\n            clearTimeout(tid);\n            tid = setTimeout(checkUseElems, 100);\n        };\n        var unobserveChanges = function () {\n            return;\n        };\n        var observeChanges = function () {\n            var observer;\n            window.addEventListener(\"resize\", debouncedCheck, false);\n            window.addEventListener(\"orientationchange\", debouncedCheck, false);\n            if (window.MutationObserver) {\n                observer = new MutationObserver(debouncedCheck);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true\n                });\n                unobserveChanges = function () {\n                    try {\n                        observer.disconnect();\n                        window.removeEventListener(\"resize\", debouncedCheck, false);\n                        window.removeEventListener(\"orientationchange\", debouncedCheck, false);\n                    } catch (ignore) {}\n                };\n            } else {\n                document.documentElement.addEventListener(\"DOMSubtreeModified\", debouncedCheck, false);\n                unobserveChanges = function () {\n                    document.documentElement.removeEventListener(\"DOMSubtreeModified\", debouncedCheck, false);\n                    window.removeEventListener(\"resize\", debouncedCheck, false);\n                    window.removeEventListener(\"orientationchange\", debouncedCheck, false);\n                };\n            }\n        };\n        var createRequest = function (url) {\n            // In IE 9, cross origin requests can only be sent using XDomainRequest.\n            // XDomainRequest would fail if CORS headers are not set.\n            // Therefore, XDomainRequest should only be used with cross origin requests.\n            function getOrigin(loc) {\n                var a;\n                if (loc.protocol !== undefined) {\n                    a = loc;\n                } else {\n                    a = document.createElement(\"a\");\n                    a.href = loc;\n                }\n                return a.protocol.replace(/:/g, \"\") + a.host;\n            }\n            var Request;\n            var origin;\n            var origin2;\n            if (window.XMLHttpRequest) {\n                Request = new XMLHttpRequest();\n                origin = getOrigin(location);\n                origin2 = getOrigin(url);\n                if (Request.withCredentials === undefined && origin2 !== \"\" && origin2 !== origin) {\n                    Request = XDomainRequest || undefined;\n                } else {\n                    Request = XMLHttpRequest;\n                }\n            }\n            return Request;\n        };\n        var xlinkNS = \"http://www.w3.org/1999/xlink\";\n        checkUseElems = function () {\n            var base;\n            var bcr;\n            var fallback = \"\"; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.\n            var hash;\n            var href;\n            var i;\n            var inProgressCount = 0;\n            var isHidden;\n            var Request;\n            var url;\n            var uses;\n            var xhr;\n            function observeIfDone() {\n                // If done with making changes, start watching for chagnes in DOM again\n                inProgressCount -= 1;\n                if (inProgressCount === 0) { // if all xhrs were resolved\n                    unobserveChanges(); // make sure to remove old handlers\n                    observeChanges(); // watch for changes to DOM\n                }\n            }\n            function attrUpdateFunc(spec) {\n                return function () {\n                    if (cache[spec.base] !== true) {\n                        spec.useEl.setAttributeNS(xlinkNS, \"xlink:href\", \"#\" + spec.hash);\n                        if (spec.useEl.hasAttribute(\"href\")) {\n                            spec.useEl.setAttribute(\"href\", \"#\" + spec.hash);\n                        }\n                    }\n                };\n            }\n            function onloadFunc(xhr) {\n                return function () {\n                    var body = document.body;\n                    var x = document.createElement(\"x\");\n                    var svg;\n                    xhr.onload = null;\n                    x.innerHTML = xhr.responseText;\n                    svg = x.getElementsByTagName(\"svg\")[0];\n                    if (svg) {\n                        svg.setAttribute(\"aria-hidden\", \"true\");\n                        svg.style.position = \"absolute\";\n                        svg.style.width = 0;\n                        svg.style.height = 0;\n                        svg.style.overflow = \"hidden\";\n                        body.insertBefore(svg, body.firstChild);\n                    }\n                    observeIfDone();\n                };\n            }\n            function onErrorTimeout(xhr) {\n                return function () {\n                    xhr.onerror = null;\n                    xhr.ontimeout = null;\n                    observeIfDone();\n                };\n            }\n            unobserveChanges(); // stop watching for changes to DOM\n            // find all use elements\n            uses = document.getElementsByTagName(\"use\");\n            for (i = 0; i < uses.length; i += 1) {\n                try {\n                    bcr = uses[i].getBoundingClientRect();\n                } catch (ignore) {\n                    // failed to get bounding rectangle of the use element\n                    bcr = false;\n                }\n                href = uses[i].getAttribute(\"href\")\n                        || uses[i].getAttributeNS(xlinkNS, \"href\")\n                        || uses[i].getAttribute(\"xlink:href\");\n                if (href && href.split) {\n                    url = href.split(\"#\");\n                } else {\n                    url = [\"\", \"\"];\n                }\n                base = url[0];\n                hash = url[1];\n                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;\n                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {\n                    // the use element is empty\n                    // if there is a reference to an external SVG, try to fetch it\n                    // use the optional fallback URL if there is no reference to an external SVG\n                    if (fallback && !base.length && hash && !document.getElementById(hash)) {\n                        base = fallback;\n                    }\n                    if (uses[i].hasAttribute(\"href\")) {\n                        uses[i].setAttributeNS(xlinkNS, \"xlink:href\", href);\n                    }\n                    if (base.length) {\n                        // schedule updating xlink:href\n                        xhr = cache[base];\n                        if (xhr !== true) {\n                            // true signifies that prepending the SVG was not required\n                            setTimeout(attrUpdateFunc({\n                                useEl: uses[i],\n                                base: base,\n                                hash: hash\n                            }), 0);\n                        }\n                        if (xhr === undefined) {\n                            Request = createRequest(base);\n                            if (Request !== undefined) {\n                                xhr = new Request();\n                                cache[base] = xhr;\n                                xhr.onload = onloadFunc(xhr);\n                                xhr.onerror = onErrorTimeout(xhr);\n                                xhr.ontimeout = onErrorTimeout(xhr);\n                                xhr.open(\"GET\", base);\n                                xhr.send();\n                                inProgressCount += 1;\n                            }\n                        }\n                    }\n                } else {\n                    if (!isHidden) {\n                        if (cache[base] === undefined) {\n                            // remember this URL if the use element was not empty and no request was sent\n                            cache[base] = true;\n                        } else if (cache[base].onload) {\n                            // if it turns out that prepending the SVG is not necessary,\n                            // abort the in-progress xhr.\n                            cache[base].abort();\n                            delete cache[base].onload;\n                            cache[base] = true;\n                        }\n                    } else if (base.length && cache[base]) {\n                        setTimeout(attrUpdateFunc({\n                            useEl: uses[i],\n                            base: base,\n                            hash: hash\n                        }), 0);\n                    }\n                }\n            }\n            uses = \"\";\n            inProgressCount += 1;\n            observeIfDone();\n        };\n        var winLoad;\n        winLoad = function () {\n            window.removeEventListener(\"load\", winLoad, false); // to prevent memory leaks\n            tid = setTimeout(checkUseElems, 0);\n        };\n        if (document.readyState !== \"complete\") {\n            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.\n            window.addEventListener(\"load\", winLoad, false);\n        } else {\n            // No need to add a listener if the document is already loaded, initialize immediately.\n            winLoad();\n        }\n    }\n}());\n\n\n//# sourceURL=webpack://patricia-hide-counselling/./node_modules/svgxuse/svgxuse.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var svgxuse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svgxuse */ \"./node_modules/svgxuse/svgxuse.js\");\n/* harmony import */ var svgxuse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svgxuse__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav */ \"./src/scripts/modules/nav.js\");\n/* harmony import */ var _modules_faqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/faqs */ \"./src/scripts/modules/faqs.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n // polyfill to load svgs from external URI (unsupported by IE)\r\n\r\n\r\n\r\n\r\nconst navigation = new _modules_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst faqs = new _modules_faqs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\n\n//# sourceURL=webpack://patricia-hide-counselling/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/faqs.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/faqs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Faqs)\n/* harmony export */ });\nclass Faqs {\r\n    constructor() {\r\n      const questions = document.querySelectorAll('.js-faq-question');\r\n\r\n      if (!questions.length){\r\n        // no FAQs on this page\r\n        return;\r\n      }\r\n\r\n      // Expand the initial active faq\r\n      const activeFaq = document.querySelector('.faqs__faq--active');\r\n      this.expandFaq(activeFaq);\r\n\r\n      this.setUpFaqListeners(questions);\r\n    }\r\n\r\n    setUpFaqListeners(questions) {\r\n      questions.forEach((question) => {\r\n        question.addEventListener('click', () => {\r\n            this.hideActiveFaqs();\r\n            const faq = question.parentElement;\r\n            this.expandFaq(faq);\r\n        });\r\n      });\r\n    }\r\n\r\n    expandFaq(faq) {\r\n      const associatedAnswer = faq.querySelector('.js-faq-answer');\r\n      faq.classList.add('faqs__faq--active');\r\n      associatedAnswer.style.maxHeight = `${associatedAnswer.scrollHeight}px`;\r\n      associatedAnswer.setAttribute('aria-hidden', 'false');\r\n    }\r\n\r\n    hideActiveFaqs() {\r\n      const activeFaqs = document.querySelectorAll('.faqs__faq--active');\r\n      activeFaqs.forEach(function(faq) {\r\n        faq.classList.remove('faqs__faq--active');\r\n      });\r\n\r\n      const answers = document.querySelectorAll('.js-faq-answer');\r\n\r\n      answers.forEach(function(answer) {\r\n        answer.style.maxHeight = 0;\r\n        answer.setAttribute('aria-hidden', 'true');\r\n      });\r\n    }\r\n  }\r\n  \n\n//# sourceURL=webpack://patricia-hide-counselling/./src/scripts/modules/faqs.js?");

/***/ }),

/***/ "./src/scripts/modules/nav.js":
/*!************************************!*\
  !*** ./src/scripts/modules/nav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\nclass Navigation {\r\n  constructor() {\r\n    this.toggleBtn = document.querySelector('.nav__toggle-button');\r\n    this.burger = document.querySelector('.nav__burger');\r\n    this.navList = document.querySelector('.nav ul');\r\n    this.navLinks = [\r\n      ...document.querySelectorAll('.nav a'),\r\n    ]; // spread nodeList to array\r\n    this.tabPort = window.matchMedia('(max-width: 56.25em)');\r\n    this.navExpanded = false;\r\n    this.events();\r\n  }\r\n  events() {\r\n    this.toggleBtn.addEventListener('click', this.toggleNav.bind(this));\r\n    this.tabPort.addListener(this.respondToMediaQuery(this.tabPort));\r\n    window.addEventListener('resize', () => this.respondToMediaQuery(this.tabPort));\r\n  }\r\n  respondToMediaQuery(query) {\r\n    if (query.matches) {\r\n      if (!this.navExpanded) {\r\n        this.closeNav();\r\n      } else {\r\n        this.openNav();\r\n      }\r\n    } else {\r\n      this.openNav();\r\n    }\r\n  }\r\n  toggleNav() {\r\n    if (this.navList.style.maxHeight) {\r\n      this.navExpanded = false;\r\n      this.closeNav();\r\n    } else {\r\n      this.navExpanded = true;\r\n      this.openNav();\r\n    }\r\n  }\r\n  openNav() {\r\n    this.navList.setAttribute('aria-hidden', 'false');\r\n    this.burger.classList.add('nav__burger--active');\r\n    this.toggleBtn.classList.add('nav__toggle-button--active');\r\n    this.navList.style.maxHeight = `${this.navList.scrollHeight}px`;\r\n    this.navLinks.forEach(item => item.setAttribute('tabindex', '0'));\r\n  }\r\n  closeNav() {\r\n    this.navList.setAttribute('aria-hidden', 'true');\r\n    this.burger.classList.remove('nav__burger--active');\r\n    this.toggleBtn.classList.remove('nav__toggle-button--active');\r\n    this.navList.style.maxHeight = null;\r\n    this.navLinks.forEach(item => item.setAttribute('tabindex', '-1'));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://patricia-hide-counselling/./src/scripts/modules/nav.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://patricia-hide-counselling/./src/styles/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;