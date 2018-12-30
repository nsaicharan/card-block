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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar Button = wp.components.Button;\n\n\n\n\nregisterBlockType(\"card-block/main\", {\n\ttitle: \"Card Block\",\n\ticon: \"grid-view\", // https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\",\n\n\tattributes: {\n\t\timgURL: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"attribute\",\n\t\t\tattribute: \"src\",\n\t\t\tselector: \"img\"\n\t\t},\n\t\timgID: {\n\t\t\ttype: \"number\"\n\t\t},\n\t\timgAlt: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"attribute\",\n\t\t\tattribute: \"alt\",\n\t\t\tselector: \"img\"\n\t\t},\n\t\ttitle: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"text\",\n\t\t\tselector: \".g-card__title\"\n\t\t},\n\t\tbody: {\n\t\t\ttype: \"array\",\n\t\t\tsource: \"children\",\n\t\t\tselector: \".g-card__body\"\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    isSelected = _ref.isSelected;\n\n\t\tvar handleSelect = function handleSelect(img) {\n\t\t\tsetAttributes({\n\t\t\t\timgURL: img.url,\n\t\t\t\timgAlt: img.alt,\n\t\t\t\timgID: img.id\n\t\t\t});\n\t\t};\n\n\t\tvar removeImage = function removeImage() {\n\t\t\tsetAttributes({ imgURL: null });\n\t\t};\n\n\t\tvar getImage = function getImage(open) {\n\t\t\tif (attributes.imgURL) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\tReact.Fragment,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\"img\", {\n\t\t\t\t\t\tclassName: \"g-card__img\",\n\t\t\t\t\t\tsrc: attributes.imgURL,\n\t\t\t\t\t\talt: attributes.imgAlt\n\t\t\t\t\t}),\n\t\t\t\t\tisSelected ? wp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"text-center mb-small\" },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tclassName: \"button button-primary button-small mr-small\",\n\t\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"Change Image\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t{ className: \"button button-small\", onClick: removeImage },\n\t\t\t\t\t\t\t\"Remove Image\"\n\t\t\t\t\t\t)\n\t\t\t\t\t) : \"\"\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"g-card__button-wrapper\" },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{ className: \"button\", onClick: open },\n\t\t\t\t\t\t\"Select Image\"\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"g-card\" },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: handleSelect,\n\t\t\t\tvalue: attributes.imgID,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn getImage(open);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"g-card__content-wrapper\" },\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tclassName: \"g-card__title\",\n\t\t\t\t\tplaceholder: \"Enter title...\",\n\t\t\t\t\tvalue: attributes.title,\n\t\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tclassName: \"g-card__body\",\n\t\t\t\t\tplaceholder: \"Body text here...\",\n\t\t\t\t\tvalue: attributes.body,\n\t\t\t\t\tmultiline: \"p\",\n\t\t\t\t\tonChange: function onChange(body) {\n\t\t\t\t\t\treturn setAttributes({ body: body });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"g-card\" },\n\t\t\twp.element.createElement(\"img\", {\n\t\t\t\tsrc: attributes.imgURL,\n\t\t\t\talt: attributes.imgAlt,\n\t\t\t\tclassName: \"g-card__img\"\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"g-card__content-wrapper\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"h2\",\n\t\t\t\t\t{ className: \"g-card__title\" },\n\t\t\t\t\tattributes.title\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"g-card__body\" },\n\t\t\t\t\tattributes.body\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgUGxhaW5UZXh0ID0gX3dwJGVkaXRvci5QbGFpblRleHQ7XG52YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcImNhcmQtYmxvY2svbWFpblwiLCB7XG5cdHRpdGxlOiBcIkNhcmQgQmxvY2tcIixcblx0aWNvbjogXCJncmlkLXZpZXdcIiwgLy8gaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogXCJjb21tb25cIixcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1nVVJMOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0c291cmNlOiBcImF0dHJpYnV0ZVwiLFxuXHRcdFx0YXR0cmlidXRlOiBcInNyY1wiLFxuXHRcdFx0c2VsZWN0b3I6IFwiaW1nXCJcblx0XHR9LFxuXHRcdGltZ0lEOiB7XG5cdFx0XHR0eXBlOiBcIm51bWJlclwiXG5cdFx0fSxcblx0XHRpbWdBbHQ6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRzb3VyY2U6IFwiYXR0cmlidXRlXCIsXG5cdFx0XHRhdHRyaWJ1dGU6IFwiYWx0XCIsXG5cdFx0XHRzZWxlY3RvcjogXCJpbWdcIlxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRzb3VyY2U6IFwidGV4dFwiLFxuXHRcdFx0c2VsZWN0b3I6IFwiLmctY2FyZF9fdGl0bGVcIlxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogXCJhcnJheVwiLFxuXHRcdFx0c291cmNlOiBcImNoaWxkcmVuXCIsXG5cdFx0XHRzZWxlY3RvcjogXCIuZy1jYXJkX19ib2R5XCJcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQ7XG5cblx0XHR2YXIgaGFuZGxlU2VsZWN0ID0gZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGltZykge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltZ1VSTDogaW1nLnVybCxcblx0XHRcdFx0aW1nQWx0OiBpbWcuYWx0LFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHJlbW92ZUltYWdlID0gZnVuY3Rpb24gcmVtb3ZlSW1hZ2UoKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaW1nVVJMOiBudWxsIH0pO1xuXHRcdH07XG5cblx0XHR2YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZShvcGVuKSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlcy5pbWdVUkwpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRSZWFjdC5GcmFnbWVudCxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiZy1jYXJkX19pbWdcIixcblx0XHRcdFx0XHRcdHNyYzogYXR0cmlidXRlcy5pbWdVUkwsXG5cdFx0XHRcdFx0XHRhbHQ6IGF0dHJpYnV0ZXMuaW1nQWx0XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0aXNTZWxlY3RlZCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJ0ZXh0LWNlbnRlciBtYi1zbWFsbFwiIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLXNtYWxsIG1yLXNtYWxsXCIsXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljazogb3BlblxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcIkNoYW5nZSBJbWFnZVwiXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tc21hbGxcIiwgb25DbGljazogcmVtb3ZlSW1hZ2UgfSxcblx0XHRcdFx0XHRcdFx0XCJSZW1vdmUgSW1hZ2VcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCkgOiBcIlwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiZy1jYXJkX19idXR0b24td3JhcHBlclwiIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IG9wZW4gfSxcblx0XHRcdFx0XHRcdFwiU2VsZWN0IEltYWdlXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IFwiZy1jYXJkXCIgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRvblNlbGVjdDogaGFuZGxlU2VsZWN0LFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5pbWdJRCxcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0cmV0dXJuIGdldEltYWdlKG9wZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiZy1jYXJkX19jb250ZW50LXdyYXBwZXJcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImctY2FyZF9fdGl0bGVcIixcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciB0aXRsZS4uLlwiLFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0aXRsZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogdGl0bGUgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImctY2FyZF9fYm9keVwiLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIkJvZHkgdGV4dCBoZXJlLi4uXCIsXG5cdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYm9keSxcblx0XHRcdFx0XHRtdWx0aWxpbmU6IFwicFwiLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShib2R5KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGJvZHkgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IFwiZy1jYXJkXCIgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG5cdFx0XHRcdHNyYzogYXR0cmlidXRlcy5pbWdVUkwsXG5cdFx0XHRcdGFsdDogYXR0cmlidXRlcy5pbWdBbHQsXG5cdFx0XHRcdGNsYXNzTmFtZTogXCJnLWNhcmRfX2ltZ1wiXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiZy1jYXJkX19jb250ZW50LXdyYXBwZXJcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoMlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImctY2FyZF9fdGl0bGVcIiB9LFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMudGl0bGVcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiZy1jYXJkX19ib2R5XCIgfSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmJvZHlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);