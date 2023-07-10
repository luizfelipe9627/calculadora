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

/***/ "./src/scripts/modules/calculation.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/calculation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// Função responsável por fazer o cáculo da operação matemática.\nvar Calculation = /*#__PURE__*/function () {\n  // O construtor é responsável por selecionar os elementos necessários para o módulo.\n  function Calculation() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Calculation);\n    this.displayOperation = document.querySelector(\".display-result-text\"); // Está atribuindo ao this.displayOperation o elemento com a classe .display-result-text.\n    this.displayResult = document.querySelector(\".display-operation-text\"); // Está atribuindo ao this.displayResult o elemento com a classe .display-operation-text.\n\n    // Está atribuindo ao this.numbers um array com os números de 0 a 9.\n    this.numbers = [document.querySelector(\"#number-one\"), document.querySelector(\"#number-two\"), document.querySelector(\"#number-three\"), document.querySelector(\"#number-four\"), document.querySelector(\"#number-five\"), document.querySelector(\"#number-six\"), document.querySelector(\"#number-seven\"), document.querySelector(\"#number-eight\"), document.querySelector(\"#number-nine\"), document.querySelector(\"#number-zero\"), document.querySelector(\"#dot\")];\n\n    // Está atribuindo ao this.arithmeticOperators um array com os operadores matemáticos.\n    this.arithmeticOperators = [document.querySelector(\"#addition\"), document.querySelector(\"#subtraction\"), document.querySelector(\"#multiplication\"), document.querySelector(\"#division\")];\n    this.acButton = document.querySelector(\"#ac\"); // Está atribuindo ao this.acButton o elemento com o id #ac.\n    this.arrowButton = document.querySelector(\"#arrow\"); // Está atribuindo ao this.arrowButton o elemento com o id #arrow.\n    this.equalButton = document.querySelector(\"#equal\"); // Está atribuindo ao this.equalButton o elemento com o id #equal.\n  }\n\n  // O método addNumber é responsável por adicionar os números no display da calculadora.\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Calculation, [{\n    key: \"addNumber\",\n    value: function addNumber() {\n      var _this = this;\n      // Está percorrendo o array this.numbers e adicionando um evento de click em cada elemento do array.\n      this.numbers.forEach(function (number) {\n        // Está adicionando um evento de click em cada elemento do array.\n        number.addEventListener(\"click\", function () {\n          // Está verificando se o texto do displayOperation está com o valor 0, se estiver executa o código dentro do if.\n          if (_this.displayOperation.textContent === \"0\") {\n            _this.displayOperation.textContent = \"\"; // Está atribuindo ao texto do this.displayOperation o valor vazio.\n          }\n\n          _this.displayOperation.textContent += number.value; // Está atribuindo ao texto do this.displayOperation o valor do número clicado.\n        });\n      });\n    }\n\n    // O método operationMath é responsável por adicionar os operadores matemáticos no display da calculadora.\n  }, {\n    key: \"operationMath\",\n    value: function operationMath() {\n      var _this2 = this;\n      // Está percorrendo o array this.arithmeticOperators e adicionando um evento de click em cada elemento do array.\n      this.arithmeticOperators.forEach(function (operator) {\n        // Está adicionando um evento de click em cada elemento do array.\n        operator.addEventListener(\"click\", function () {\n          _this2.displayOperation.textContent += \" \".concat(operator.value, \" \"); // Está atribuindo ao texto do this.displayOperation o valor do operador matemático clicado.\n        });\n      });\n    }\n\n    // O método calculateResult é responsável por calcular o resultado da operação matemática.\n  }, {\n    key: \"calculateResult\",\n    value: function calculateResult() {\n      var _this3 = this;\n      // O try catch é responsável por tentar executar o código dentro do try, se der erro executa o código dentro do catch.\n      try {\n        var expression = this.displayOperation.textContent; // Está atribuindo a const expression o valor do texto do this.displayOperation.\n        var result = eval(expression); // O eval é responsável por calcular a expressão matemática do texto do this.displayOperation e atribuir o resultado a const result.\n\n        var formattedResult = result.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, '.'); // Está atribuindo a const formattedResult ao resultado, utilizando o método toString para transformar o resultado em string e o método replace para substituir os pontos por vírgulas utilizando uma expressão regular.\n\n        this.displayResult.textContent = formattedResult; // Está atribuindo ao texto do this.displayResult o valor da const result.\n      } catch (error) {\n        this.displayResult.textContent = \"Operação inválida\"; // Está atribuindo ao texto do this.displayResult o valor \"Operação inválida\".\n        this.displayResult.style.fontSize = \"28px\"; // Está atribuindo ao estilo do this.displayResult o valor 28px.\n        this.displayResult.style.color = \"red\"; // Está atribuindo ao estilo do this.displayResult a cor vermelha.\n\n        // O setTimeout é responsável por executar o código dentro dele depois de 1s.\n        setTimeout(function () {\n          _this3.displayResult.textContent = \"0\"; // Está atribuindo ao texto do this.displayResult o valor 0.\n          _this3.displayResult.style.fontSize = \"48px\"; // Está atribuindo ao estilo do this.displayResult o valor 48px.\n          _this3.displayResult.style.color = \"\"; // Está atribuindo ao estilo do this.displayResult a cor padrão definida no CSS.\n        }, 1500);\n      }\n    }\n\n    // O método resultMath é responsável por chamar o método calculateResult quando o botão de igual for clicado.\n  }, {\n    key: \"resultMath\",\n    value: function resultMath() {\n      var _this4 = this;\n      // Está adicionando um evento de click no botão de igual.\n      this.equalButton.addEventListener(\"click\", function () {\n        _this4.calculateResult(); // Está chamando o método calculateResult.\n      });\n    }\n\n    // O método cleanDisplay é responsável por limpar o display da calculadora.\n  }, {\n    key: \"cleanDisplay\",\n    value: function cleanDisplay() {\n      var _this5 = this;\n      // Está adicionando um evento de click no botão de AC.\n      this.acButton.addEventListener(\"click\", function () {\n        // Está atribuindo ao texto do this.displayOperation e this.displayResult o valor 0.\n        _this5.displayOperation.textContent = \"0\";\n        _this5.displayResult.textContent = \"0\";\n      });\n\n      // Está adicionando um evento de click no botão de seta.\n      this.arrowButton.addEventListener(\"click\", function () {\n        _this5.displayOperation.textContent = _this5.displayOperation.textContent.slice(0, -1).trim(); // Está atribuindo ao texto do displayOperation o valor do texto do displayOperation sem o último caractere(com o slice) e removendo os espaços em branco(com o trim).\n\n        // Está verificando se o texto do displayOperation está vazio, se estiver executa o código dentro do if.\n        if (_this5.displayOperation.textContent === \"\") {\n          _this5.displayOperation.textContent = \"0\"; // Está atribuindo ao texto do this.displayOperation o valor 0.\n        }\n      });\n    }\n\n    // O método init é responsável por chamar os métodos que serão usados na classe.\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.displayOperation && this.displayResult) {\n        // Está chamando os métodos.\n        this.addNumber();\n        this.operationMath();\n        this.resultMath();\n        this.cleanDisplay();\n      }\n    }\n  }]);\n  return Calculation;\n}();\n\n\n//# sourceURL=webpack://calculadora/./src/scripts/modules/calculation.js?");

/***/ }),

/***/ "./src/scripts/modules/mode-theme.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/mode-theme.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModeTheme)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// Função responsável por alterar o tema da calculadora.\nvar ModeTheme = /*#__PURE__*/function () {\n  // O construtor é responsável por selecionar os elementos necessários para o módulo.\n  function ModeTheme() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ModeTheme);\n    this.calculator = document.querySelector(\".calculator-container\"); // Está atribuindo ao this.calculator o elemento com a classe .calculator-container.\n    this.span = document.querySelector(\".mode div span\"); // Está atribuindo ao this.span o elemento com a classe .mode div span.\n  }\n\n  // O método pageReload é responsável por verificar se o tema está salvo no localStorage e remover a animação do botão quando a página for recarregada.\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ModeTheme, [{\n    key: \"pageReload\",\n    value: function pageReload() {\n      var _this = this;\n      // Está verificando se o evento DOMContentLoaded foi disparado, se sim executa o callback.\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        _this.span.style.animation = \"none\"; // Está atribuindo ao this.span o valor none sendo assim removendo a animação.\n        _this.updateButtonPosition(); // Está chamando o método updateButtonPosition.\n      });\n    }\n\n    // O método addEvent é responsável por adicionar um evento de click no this.span.\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this2 = this;\n      // Está adicionando um evento de click no this.span, se o evento for disparado executa o callback.\n      this.span.addEventListener(\"click\", function () {\n        _this2.toggleTheme(); // Está chamando o método toggleTheme que é responsável por alternar o tema.\n      });\n    }\n\n    // O método themeDark é responsável por mudar o tema para dark.\n  }, {\n    key: \"themeDark\",\n    value: function themeDark() {\n      this.calculator.classList.remove(\"light\"); // Está removendo a classe light do this.calculator.\n      this.calculator.classList.add(\"dark\"); // Está adicionando a classe dark no this.calculator.\n      this.span.style.animation = \"buttonMoveDark 0.5s ease-in-out forwards\"; // Está atribuindo ao this.span o valor buttonMoveDark sendo assim adicionando a animação.\n    }\n\n    // O método themeLight é responsável por mudar o tema para light.\n  }, {\n    key: \"themeLight\",\n    value: function themeLight() {\n      this.calculator.classList.remove(\"dark\"); // Está removendo a classe dark do this.calculator.\n      this.calculator.classList.add(\"light\"); // Está adicionando a classe light no this.calculator.\n      this.span.style.animation = \"buttonMoveLight 0.5s ease-in-out forwards\"; // Está atribuindo ao this.span o valor buttonMoveLight sendo assim adicionando a animação.\n    }\n\n    // O método changeTheme é responsável por verificar se o tema está salvo no localStorage e mudar o tema.\n  }, {\n    key: \"changeTheme\",\n    value: function changeTheme() {\n      // Está verificando se o tema está salvo no localStorage, se sim executa o if, se não executa o else.\n      if (localStorage.getItem(\"theme\") === \"light\") {\n        this.themeLight(); // Está chamando o método themeLight responsável por mudar o tema para light.\n      } else {\n        this.themeDark(); // Está chamando o método themeDark responsável por mudar o tema para dark.\n      }\n    }\n\n    // O método toggleTheme é responsável por alternar o tema.\n  }, {\n    key: \"toggleTheme\",\n    value: function toggleTheme() {\n      var theme = localStorage.getItem(\"theme\") === \"light\" ? \"dark\" : \"light\"; // Está atribuindo a constante theme o valor do tema salvo no localStorage, se o tema for light, o valor da constante theme será dark, se não o valor da constante theme será light.\n      localStorage.setItem(\"theme\", theme); // Está salvando o tema no localStorage.\n      this.changeTheme(); // Está chamando o método changeTheme responsável por mudar o tema.\n    }\n\n    // O método updateButtonPosition é responsável por atualizar a posição do botão.\n  }, {\n    key: \"updateButtonPosition\",\n    value: function updateButtonPosition() {\n      var theme = localStorage.getItem(\"theme\"); // Está atribuindo a constante theme o valor do tema salvo no localStorage.\n      this.span.style.transform = theme === \"light\" ? \"translateX(0)\" : \"translateX(100%)\"; // Se o tema for light, o botão ficará na posição inicial(translateX(0)), se não o botão ficará na posição final(translateX(100%)).\n    }\n\n    // O método init é responsável por iniciar o módulo.\n  }, {\n    key: \"init\",\n    value: function init() {\n      // Está verificando se o this.span existe, se sim executa o if.\n      if (this.span) {\n        this.pageReload();\n        this.changeTheme();\n        this.addEvent();\n      }\n      return this; // Está retornando o this para que seja possível acessar os métodos do módulo através do init.\n    }\n  }]);\n  return ModeTheme;\n}();\n\n\n//# sourceURL=webpack://calculadora/./src/scripts/modules/mode-theme.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mode_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mode-theme.js */ \"./src/scripts/modules/mode-theme.js\");\n/* harmony import */ var _modules_calculation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculation.js */ \"./src/scripts/modules/calculation.js\");\n// Está importando os módulos.\n\n\n\n// Está instanciando os módulos.\nvar modeTheme = new _modules_mode_theme_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nmodeTheme.init();\nvar calculation = new _modules_calculation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ncalculation.init();\n\n//# sourceURL=webpack://calculadora/./src/scripts/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://calculadora/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://calculadora/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://calculadora/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://calculadora/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://calculadora/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/script.js");
/******/ 	
/******/ })()
;