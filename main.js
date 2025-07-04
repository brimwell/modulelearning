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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: antiquewhite;\n}\n\nnav {\n    margin: 35px;\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n}\n\nnav button {\n    padding: 1em 2em;\n    border-radius: 8px;\n    border: 1px solid black;\n}\n\nnav button:hover {\n    background-color: gray;\n    color: white;\n}\n\n.activebtn {\n    background-color: gray;\n    color: white;\n}\n\n#content {\n    text-align: center;\n    width: 60%;\n    margin: 0 auto;\n\n\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://modulelearning/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://modulelearning/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://modulelearning/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://modulelearning/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://modulelearning/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://modulelearning/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://modulelearning/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://modulelearning/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://modulelearning/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openAbout: () => (/* binding */ openAbout)\n/* harmony export */ });\nfunction openAbout() {\n    const contentBox = document.querySelector('#content');\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = 'The Hungry Elephant';\n\n    const aboutBlurb = document.createElement('p');\n    aboutBlurb.classList.add('aboutblurb');\n    aboutBlurb.textContent = 'Founded in 2023, The Hungry Elephant has served the Salt Lake Area the finest handcrafted sandwiches. Our sandwiches are always made with local ingredients and locally made bread. Call us for catering!';\n\n    contentBox.appendChild(restaurantTitle);\n    contentBox.appendChild(aboutBlurb);\n}\n\n\n\n//# sourceURL=webpack://modulelearning/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _special_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./special.js */ \"./src/special.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\n\nconst contentBox = document.querySelector('#content');\n\nconst homeBtn = document.querySelector('#homebtn');\nhomeBtn.classList.add('activebtn');\nconst menuBtn = document.querySelector('#menubtn');\nconst specialBtn = document.querySelector('#specialbtn');\nconst aboutBtn = document.querySelector('#aboutbtn');\n\nhomeBtn.addEventListener('click', function() {\n    contentBox.textContent = '';\n    openHome();\n    makeBtnActive();\n})\n\nmenuBtn.addEventListener('click', function() {\n    contentBox.textContent = '';\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.openMenu)();\n    makeBtnActive();\n});\n\nspecialBtn.addEventListener('click', function() {\n    contentBox.textContent = '';\n    (0,_special_js__WEBPACK_IMPORTED_MODULE_3__.openSpecial)();\n    makeBtnActive();\n});\n\naboutBtn.addEventListener('click', function() {\n    contentBox.textContent = '';\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__.openAbout)();\n    makeBtnActive();\n})\n\n\nfunction makeBtnActive() {\n    const allBtns = document.querySelectorAll('button');\n    \n    for (let item of allBtns) {\n        item.classList.value = '';\n    }\n\n    event.target.classList.value = 'activebtn';\n}\n\n\nfunction openHome() {\n\n    const restaurantImg = document.createElement('img');\n    restaurantImg.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    restaurantImg.alt = 'A picture of a dining room';\n    restaurantImg.height = '200';\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = 'The Hungry Elephant';\n\n    const restaurantBlurbOne = document.createElement('p');\n    restaurantBlurbOne.textContent = `We're excited to have you come visit The Hungry Elephant! Since 2018, we have been serving SLC's best traditional and non-traditional sandwiches and have no intention of slowing down now!`;\n\n    const restaurantBlurbTwo = document.createElement('p');\n    restaurantBlurbTwo.textContent = `Be sure to check out our monthly special - a locally inspired sandwich sure to become one of your new favorites!`;\n\n            \n    contentBox.appendChild(restaurantImg);\n    contentBox.appendChild(restaurantTitle);\n    contentBox.appendChild(restaurantBlurbOne);\n    contentBox.appendChild(restaurantBlurbTwo);\n}\n\nopenHome();\n\n//# sourceURL=webpack://modulelearning/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openMenu: () => (/* binding */ openMenu)\n/* harmony export */ });\nfunction openMenu() {\n    const contentBox = document.querySelector('#content');\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = 'The Hungry Elephant';\n\n    const subMenu1 = document.createElement('h2');\n    subMenu1.textContent = 'Cold Sandwiches';\n\n    const jerkChicken = document.createElement('div');\n    jerkChicken.classList.add('menuitem');\n    const jCName = document.createElement('p');\n    jCName.classList.add('itemname');\n    jCName.textContent = 'Jerk Chicken';\n    const jCPrice = document.createElement('p');\n    jCPrice.classList.add('price');\n    jCPrice.textContent = '$16.50';\n    jerkChicken.appendChild(jCName);\n    jerkChicken.appendChild(jCPrice);\n    const jCDescrip = document.createElement('p');\n    jCDescrip.classList.add('descrip');\n    jCDescrip.textContent = 'Roasted and Grilled Chicken, Jerk Sauce, Pepperjack Cheese, Cilantro, Onion, and Jalapeno';\n\n    const OG = document.createElement('div');\n    OG.classList.add('menuitem');\n    const OGName = document.createElement('p');\n    OGName.classList.add('itemname');\n    OGName.textContent = 'The O.G.';\n    const OGPrice = document.createElement('p');\n    OGPrice.classList.add('price');\n    OGPrice.textContent = '$17';\n    OG.appendChild(OGName);\n    OG.appendChild(OGPrice);\n    const OGDescrip = document.createElement('p');\n    OGDescrip.classList.add('descrip');\n    OGDescrip.textContent = 'Pastrami Sandwich made in the \"style\" of a Banh Mi With OUr Housemade Chili Oil Featuring Oregon Hazelnuts';\n    \n    const hannah = document.createElement('div');\n    hannah.classList.add('menuitem');\n    const hannahName = document.createElement('p');\n    hannahName.classList.add('itemname');\n    hannahName.textContent = 'The Hannah';\n    const hannahPrice = document.createElement('p');\n    hannahPrice.classList.add('price');\n    hannahPrice.textContent = '$16.50';\n    hannah.appendChild(hannahName);\n    hannah.appendChild(hannahPrice);\n    const hannahDescrip = document.createElement('p');\n    hannahDescrip.classList.add('descrip');\n    hannahDescrip.textContent = 'Smoked Ham, Olive tapenade with chiki flake, Provolone, Onions';\n\n    const chicken = document.createElement('div');\n    chicken.classList.add('menuitem');\n    const chickenName = document.createElement('p');\n    chickenName.classList.add('itemname');\n    chickenName.textContent = 'Chicken';\n    const chickenPrice = document.createElement('p');\n    chickenPrice.classList.add('price');\n    chickenPrice.textContent = '$16.50';\n    chicken.appendChild(chickenName);\n    chicken.appendChild(chickenPrice);\n    const chickenDescrip = document.createElement('p');\n    chickenDescrip.classList.add('descrip');\n    chickenDescrip.textContent = 'A Roasted Chicken Sandwich made in the \"style\" of a Banh Mi With Our Housemade Chili Oil Featuring Oregon Hazelnuts';\n\n    const classic = document.createElement('div');\n    classic.classList.add('menuitem');\n    const classicName = document.createElement('p');\n    classicName.classList.add('itemname');\n    classicName.textContent = 'The Classic';\n    const classicPrice = document.createElement('p');\n    classicPrice.classList.add('price');\n    classicPrice.textContent = '$16.50';\n    classic.appendChild(classicName);\n    classic.appendChild(classicPrice);\n    const classicDescrip = document.createElement('p');\n    classicDescrip.classList.add('descrip');\n    classicDescrip.textContent = 'Housemade Mortadella, Salami, Pickled Peppers, Onions, Provolone, Aioli';\n\n    const beef = document.createElement('div');\n    beef.classList.add('menuitem');\n    const beefName = document.createElement('p');\n    beefName.classList.add('itemname');\n    beefName.textContent = 'Pepper Beef';\n    const beefPrice = document.createElement('p');\n    beefPrice.classList.add('price');\n    beefPrice.textContent = '$17';\n    beef.appendChild(beefName);\n    beef.appendChild(beefPrice);\n    const beefDescrip = document.createElement('p');\n    beefDescrip.classList.add('descrip');\n    beefDescrip.textContent = 'Roast Beef, Pepperjack Cheese, Marinated Peppers, Pickled Tomato, Aioli, Onions';\n\n    const nich = document.createElement('div');\n    nich.classList.add('menuitem');\n    const nichName = document.createElement('p');\n    nichName.classList.add('itemname');\n    nichName.textContent = 'Nicholle';\n    const nichPrice = document.createElement('p');\n    nichPrice.classList.add('price');\n    nichPrice.textContent = '$16.50';\n    nich.appendChild(nichName);\n    nich.appendChild(nichPrice);\n    const nichDescrip = document.createElement('p');\n    nichDescrip.classList.add('descrip');\n    nichDescrip.textContent = `Smoked Ham, Swiss, Mustard. 'Nuf said.`;\n\n    const subMenu2 = document.createElement('h2');\n    subMenu2.textContent = 'Snacks, Sides, and Grocery';\n\n    const chips = document.createElement('div');\n    chips.classList.add('menuitem');\n    const chipsName = document.createElement('p');\n    chipsName.classList.add('itemname');\n    chipsName.textContent = 'Chips';\n    const chipsPrice = document.createElement('p');\n    chipsPrice.classList.add('price');\n    chipsPrice.textContent = '$2.50';\n    chips.appendChild(chipsName);\n    chips.appendChild(chipsPrice);\n\n    const soup = document.createElement('div');\n    soup.classList.add('menuitem');\n    const soupName = document.createElement('p');\n    soupName.classList.add('itemname');\n    soupName.textContent = 'Seasonal Soup';\n    const soupPrice = document.createElement('p');\n    soupPrice.classList.add('price');\n    soupPrice.textContent = '$10';\n    soup.appendChild(soupName);\n    soup.appendChild(soupPrice);\n    const soupDescrip = document.createElement('p');\n    soupDescrip.classList.add('descrip');\n    soupDescrip.textContent = 'Cuban Chicken Broth with root vegetables and a sofrito';\n\n    const salad = document.createElement('div');\n    salad.classList.add('menuitem');\n    const saladName = document.createElement('p');\n    saladName.classList.add('itemname');\n    saladName.textContent = 'Seasonal Salad';\n    const saladPrice = document.createElement('p');\n    saladPrice.classList.add('price');\n    saladPrice.textContent = '$9';\n    salad.appendChild(saladName);\n    salad.appendChild(saladPrice);\n    const saladDescrip = document.createElement('p');\n    saladDescrip.classList.add('descrip');\n    saladDescrip.textContent = 'Kale, Pickled Carrots, Onions, Red Wine Vinaigrette';\n\n    const hCookie = document.createElement('div');\n    hCookie.classList.add('menuitem');\n    const hCookieName = document.createElement('p');\n    hCookieName.classList.add('itemname');\n    hCookieName.textContent = 'Hazelnut Cookie';\n    const hCookiePrice = document.createElement('p');\n    hCookiePrice.classList.add('price');\n    hCookiePrice.textContent = '$5';\n    hCookie.appendChild(hCookieName);\n    hCookie.appendChild(hCookiePrice);\n    const hCookieDescrip = document.createElement('p');\n    hCookieDescrip.classList.add('descrip');\n    hCookieDescrip.textContent = 'Chocolate Chips, Lard, Barley Flour, Hazelnuts';\n\n    const pickle = document.createElement('div');\n    pickle.classList.add('menuitem');\n    const pickleName = document.createElement('p');\n    pickleName.classList.add('itemname');\n    pickleName.textContent = 'Pickle Plate';\n    const picklePrice = document.createElement('p');;\n    picklePrice.classList.add('price');\n    picklePrice.textContent = '$5';\n    pickle.appendChild(pickleName);\n    pickle.appendChild(picklePrice);\n    const pickleDescrip = document.createElement('p');\n    pickleDescrip.classList.add('descrip');\n    pickleDescrip.textContent = 'Assorted Vegetables Pickled From Summer';\n\n\n    contentBox.appendChild(restaurantTitle);\n    \n    contentBox.appendChild(subMenu1);\n    contentBox.appendChild(jerkChicken);\n    contentBox.appendChild(jCDescrip);\n    contentBox.appendChild(OG);\n    contentBox.appendChild(OGDescrip);\n    contentBox.appendChild(hannah);\n    contentBox.appendChild(hannahDescrip);\n    contentBox.appendChild(chicken);\n    contentBox.appendChild(chickenDescrip);\n    contentBox.appendChild(classic);\n    contentBox.appendChild(classicDescrip);\n    contentBox.appendChild(beef);\n    contentBox.appendChild(beefDescrip);\n    contentBox.appendChild(nich);\n    contentBox.appendChild(nichDescrip);\n\n    contentBox.appendChild(subMenu2);\n    contentBox.appendChild(chips);\n    contentBox.appendChild(soup);\n    contentBox.appendChild(soupDescrip);\n    contentBox.appendChild(salad);\n    contentBox.appendChild(saladDescrip);\n    contentBox.appendChild(hCookie);\n    contentBox.appendChild(hCookieDescrip);\n    contentBox.appendChild(pickle);\n    contentBox.appendChild(pickleDescrip);\n}\n\n\n\n\n\n//# sourceURL=webpack://modulelearning/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63dc82e7d076a950a60f.jpg\";\n\n//# sourceURL=webpack://modulelearning/./src/restaurant.jpg?");

/***/ }),

/***/ "./src/special.js":
/*!************************!*\
  !*** ./src/special.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openSpecial: () => (/* binding */ openSpecial)\n/* harmony export */ });\n/* harmony import */ var _the_matter_of_food_loeyDIdEW_w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./the-matter-of-food-loeyDIdEW_w-unsplash.jpg */ \"./src/the-matter-of-food-loeyDIdEW_w-unsplash.jpg\");\n\n\nfunction openSpecial() {\n    const contentBox = document.querySelector('#content');\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = 'The Hungry Elephant';\n\n    const titleTwo = document.createElement('h2');\n    titleTwo.textContent = `This Month's Special -- The Vegan Big Mac`;\n\n    const sandwichImg = document.createElement('img');\n    sandwichImg.src = _the_matter_of_food_loeyDIdEW_w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    sandwichImg.alt = 'A picture of our monthly sandwich special';\n    sandwichImg.height = '400';\n\n    const sandwichDescrip = document.createElement('p');\n    sandwichDescrip.textContent = 'This month we have the Vegan Big Mac -- a vegan patty in between 2 slices of our homemade bread with tons of veggies like avocado, pickled red peppers, micro-spinach, cucumbers. All with our housemade vegan mayo. Not just for vegans!';\n\n    contentBox.appendChild(restaurantTitle);\n    contentBox.appendChild(titleTwo);\n    contentBox.appendChild(sandwichImg);\n    contentBox.appendChild(sandwichDescrip);\n}\n\n\n\n//# sourceURL=webpack://modulelearning/./src/special.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://modulelearning/./src/style.css?");

/***/ }),

/***/ "./src/the-matter-of-food-loeyDIdEW_w-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/the-matter-of-food-loeyDIdEW_w-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43d5b642b21497fdd941.jpg\";\n\n//# sourceURL=webpack://modulelearning/./src/the-matter-of-food-loeyDIdEW_w-unsplash.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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