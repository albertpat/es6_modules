/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n    constructor (id,make,model,year) {\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconst submitForm = document.querySelector(\"#submitForm\");\r\nlet makeInput = document.querySelector(\"#makeInput\");\r\nlet modelInput = document.querySelector(\"#modelInput\");\r\nlet yearInput = document.querySelector(\"#yearInput\");\r\nconst paraMake = document.querySelector(\"#car-make\");\r\nconst paraModel = document.querySelector(\"#car-model\");\r\nconst paraYear = document.querySelector(\"#car-year\");\r\nconst removeButton = document.querySelector(\"#removeBtn\");\r\nconst wishListElement = document.querySelector(\"#wishListContainer > ul\");\r\nconst wishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nsubmitForm.addEventListener(\"submit\", addCar);\r\n\r\nremoveButton.addEventListener(\"click\", removeCar);\r\n\r\nfunction showCarDetails(car) {\r\n  paraMake.textContent = car.make;\r\n  paraModel.textContent = car.model;\r\n  paraYear.textContent = car.year;\r\n\r\n  removeButton.disabled = false;\r\n  removeButton.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDomList() {\r\n \r\n  wishListElement.innerHTML = \"\";\r\n\r\n  wishList.list.forEach((car) => {\r\n    const carli = document.createElement(\"li\");\r\n    carli.textContent = `Make:${car.make} Mode:${car.model}`;\r\n\r\n    carli.addEventListener(\"click\", () => showCarDetails(car));\r\n    wishListElement.appendChild(carli);\r\n  });\r\n}\r\n\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n\r\n  let make = makeInput.value;\r\n  let model = modelInput.value;\r\n  let year = yearInput.value;\r\n  wishList.add(make, model, year);\r\n  updateDomList(wishList);\r\n}\r\n\r\nfunction removeCar() {\r\n  let carId = Number(removeButton.getAttribute(\"data-carId\"));\r\n  wishList.remove(carId);\r\n\r\n  updateDomList();\r\n\r\n  paraMake.textContent = \"\";\r\n  paraModel.textContent = \"\";\r\n  paraYear.textContent = \"\";\r\n  removeButton.disabled = true;\r\n  console.log(carId);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n    constructor(list,nextId) {\r\n        this.list = [];\r\n        this.nextId = 0;\r\n    }\r\n    add(make, model, year) {\r\n        const car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n        this.list.push(car);\r\n        console.log(car);\r\n    }\r\n    remove(carId) {\r\n        this.list = this.list.filter((car) => car.id !== carId);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;