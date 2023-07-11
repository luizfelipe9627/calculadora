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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// Função Calculation responsável por fazer o cáculo da operação matemática.\nvar Calculation = /*#__PURE__*/function () {\n  // O construtor é responsável por selecionar os elementos necessários para o módulo.\n  function Calculation() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Calculation);\n    this.displayOperation = document.querySelector(\".display-result-text\"); // Está atribuindo ao this.displayOperation o elemento com a classe .display-result-text.\n    this.displayResult = document.querySelector(\".display-operation-text\"); // Está atribuindo ao this.displayResult o elemento com a classe .display-operation-text.\n\n    this.numbers = Array.from(document.querySelectorAll(\".number, .dot\")); // Está atribuindo ao this.numbers um array com os números e o ponto.\n    this.operators = Array.from(document.querySelectorAll(\".operator\")); // Está atribuindo ao this.operators um array com os operadores matemáticos.\n\n    this.acButton = document.querySelector(\".ac\"); // Está atribuindo ao this.acButton o elemento com o id #ac.\n    this.arrowButton = document.querySelector(\".arrow\"); // Está atribuindo ao this.arrowButton o elemento com o id #arrow.\n    this.equalButton = document.querySelector(\".equal\"); // Está atribuindo ao this.equalButton o elemento com o id #equal.\n  }\n\n  // O método addEvents é responsável por adicionar os eventos de click nos elementos necessários.\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Calculation, [{\n    key: \"addEvents\",\n    value: function addEvents() {\n      var _this = this;\n      // O forEach é responsável por percorrer o array this.numbers e executar o código dentro dele para cada elemento do array.\n      this.numbers.forEach(function (number) {\n        // Está adicionando um evento de click em cada elemento do array this.numbers.\n        number.addEventListener(\"click\", function () {\n          return _this.handleNumberClick(number.value);\n        } // Está chamando o método handleNumberClick responsável por adicionar os números no display da calculadora e passando como parâmetro o valor do número clicado.\n        );\n      });\n\n      // O forEach é responsável por percorrer o array this.operators e executar o código dentro dele para cada elemento do array.\n      this.operators.forEach(function (operator) {\n        // Está adicionando um evento de click em cada elemento do array this.operators.\n        operator.addEventListener(\"click\", function () {\n          return _this.handleOperatorClick(operator);\n        } // Está chamando o método handleOperatorClick responsável por adicionar os operadores matemáticos no display da calculadora e passando como parâmetro o valor do operador matemático clicado.\n        );\n      });\n\n      // Está adicionando um evento de click no botão de igual e chamando o método calculateResult responsável por calcular o resultado da operação matemática.\n      this.equalButton.addEventListener(\"click\", function () {\n        return _this.calculateResult();\n      });\n\n      // Está adicionando um evento de click no botão de AC e chamando o método clearDisplay responsável por limpar o display da calculadora.\n      this.acButton.addEventListener(\"click\", function () {\n        return _this.clearDisplay();\n      });\n\n      // Está adicionando um evento de click no botão de seta e chamando o método removeLastCharacter responsável por remover o último caractere do display da calculadora.\n      this.arrowButton.addEventListener(\"click\", function () {\n        return _this.removeLastCharacter();\n      } // Está chamando o método removeLastCharacter responsável por remover o último caractere do display da calculadora.\n      );\n    }\n\n    // O método handleNumberClick é responsável por adicionar os números no display da calculadora.\n  }, {\n    key: \"handleNumberClick\",\n    value: function handleNumberClick(number) {\n      // Está verificando se o texto do displayOperation está com o valor 0, se estiver executa o código dentro do if.\n      if (this.displayOperation.textContent === \"0\") {\n        this.displayOperation.textContent = \"\"; // Está atribuindo ao texto do this.displayOperation o valor vazio.\n      }\n\n      this.displayOperation.textContent += number; // Está atribuindo ao texto do this.displayOperation o valor do número clicado.\n    }\n\n    // O método handleOperatorClick é responsável por adicionar os operadores matemáticos no display da calculadora.\n  }, {\n    key: \"handleOperatorClick\",\n    value: function handleOperatorClick(operator) {\n      this.displayOperation.textContent += \" \".concat(operator.value, \" \"); // Está atribuindo ao texto do this.displayOperation o valor do operador matemático clicado.\n    }\n\n    // O método calculateResult é responsável por calcular o resultado da operação matemática.\n  }, {\n    key: \"calculateResult\",\n    value: function calculateResult() {\n      var _this2 = this;\n      // O try catch é responsável por tentar executar o código dentro do try, se der erro executa o código dentro do catch.\n      try {\n        var expression = this.displayOperation.textContent; // Está atribuindo a const expression o valor do texto do this.displayOperation.\n\n        var result = eval(expression); // Está atribuindo a const result o resultado da expressão matemática utilizando o método eval que faz o cálculo da expressão.\n\n        var formattedResult = this.formatResult(result, expression); // Está atribuindo a const formattedResult o resultado do método formatResult que formata o resultado da expressão matemática e passando como parâmetro o resultado da expressão e o operador matemático utilizado.\n\n        this.displayResult.textContent = formattedResult; // Está atribuindo ao texto do this.displayResult o valor da const result.\n      } catch (error) {\n        this.displayResult.textContent = \"Erro\"; // Está atribuindo ao texto do this.displayResult o valor \"Error\".\n        this.displayResult.classList.add(\"error\"); // Está adicionando a classe .error ao this.displayResult.\n\n        // O setTimeout é responsável por executar o código dentro dele depois de 1s.\n        setTimeout(function () {\n          _this2.displayResult.textContent = \"0\"; // Está atribuindo ao texto do this.displayResult o valor 0.\n          _this2.displayResult.classList.remove(\"error\"); // Está remove a classe .error do this.displayResult.\n        }, 4000);\n      }\n    }\n  }, {\n    key: \"formatResult\",\n    value: function formatResult(result, operation) {\n      var formattedResult; // Está criando a variável formattedResult.\n\n      // Está verificando qual operador matemático foi utilizado e formatando o resultado de acordo com o operador.\n      switch (operation) {\n        case \"+\":\n          formattedResult = result.toLocaleString(); // Formata o resultado com as configurações regionais padrão.\n          break;\n        case \"-\":\n          formattedResult = result.toFixed(2); // Formata o resultado com 2 casas decimais.\n          break;\n        case \"*\":\n          formattedResult = result.toExponential(2); // Formata o resultado em notação exponencial com 2 casas decimais.\n          break;\n        case \"/\":\n          formattedResult = result.toPrecision(4); // Formata o resultado com até 4 dígitos significativos.\n          break;\n        default:\n          formattedResult = result.toString(); // Formata o resultado como uma string padrão.\n          break;\n      }\n      return formattedResult; // Está retornando o valor da variável formattedResult.\n    }\n\n    // O método resultMath é responsável por chamar o método calculateResult quando o botão de igual for clicado.\n  }, {\n    key: \"resultMath\",\n    value: function resultMath() {\n      var _this3 = this;\n      // Está adicionando um evento de click no botão de igual.\n      this.equalButton.addEventListener(\"click\", function () {\n        _this3.calculateResult(); // Está chamando o método calculateResult responsável por calcular o resultado da operação matemática.\n      });\n    }\n\n    // O método cleanDisplay é responsável por limpar o display da calculadora.\n  }, {\n    key: \"clearDisplay\",\n    value: function clearDisplay() {\n      // Está atribuindo ao texto do this.displayOperation e this.displayResult o valor 0.\n      this.displayOperation.textContent = \"0\";\n      this.displayResult.textContent = \"0\";\n    }\n\n    // O método removeLastCharacter é responsável por remover o último caractere do display da calculadora.\n  }, {\n    key: \"removeLastCharacter\",\n    value: function removeLastCharacter() {\n      // Está adicionando um evento de click no botão de seta.\n      this.displayOperation.textContent = this.displayOperation.textContent.slice(0, -1); // Está atribuindo ao texto do displayOperation o valor do texto do displayOperation sem o último caractere(com o slice) e removendo os espaços em branco(com o trim).\n\n      // Está verificando se o texto do displayOperation está vazio, se estiver executa o código dentro do if.\n      if (this.displayOperation.textContent === \"\") {\n        this.displayOperation.textContent = \"0\"; // Está atribuindo ao texto do this.displayOperation o valor 0.\n      }\n    }\n\n    // O método init é responsável por chamar os métodos que serão usados na classe.\n  }, {\n    key: \"init\",\n    value: function init() {\n      // Está verificando se o this.displayOperation e this.displayResult existem, se sim executa o if.\n      if (this.displayOperation && this.displayResult) {\n        // Está chamando o método addEvents.\n        this.addEvents();\n      }\n      return this; // Está retornando o this para que seja possível acessar os métodos do módulo através do init.\n    }\n  }]);\n  return Calculation;\n}();\n\n\n//# sourceURL=webpack://calculadora/./src/scripts/modules/calculation.js?");

/***/ }),

/***/ "./src/scripts/modules/theme.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/theme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Theme)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// Função responsável por alterar o tema da calculadora.\nvar Theme = /*#__PURE__*/function () {\n  // O construtor é responsável por selecionar os elementos necessários para o módulo.\n  function Theme() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Theme);\n    this.calculator = document.querySelector(\".calculator-container\"); // Está atribuindo ao this.calculator o elemento com a classe .calculator-container.\n    this.span = document.querySelector(\".mode div span\"); // Está atribuindo ao this.span o elemento com a classe .mode div span.\n  }\n\n  // O método pageReload é responsável por verificar se o tema está salvo no localStorage e remover a animação do botão quando a página for recarregada.\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Theme, [{\n    key: \"pageReload\",\n    value: function pageReload() {\n      var _this = this;\n      // Está verificando se o evento DOMContentLoaded foi disparado, se sim executa o callback.\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        _this.span.style.animation = \"none\"; // Está atribuindo ao this.span o valor none sendo assim removendo a animação.\n        _this.updateButtonPosition(); // Está chamando o método updateButtonPosition.\n      });\n    }\n\n    // O método addEvent é responsável por adicionar um evento de click no this.span.\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this2 = this;\n      // Está adicionando um evento de click no this.span, se o evento for disparado executa o callback.\n      this.span.addEventListener(\"click\", function () {\n        _this2.toggleTheme(); // Está chamando o método toggleTheme que é responsável por alternar o tema.\n      });\n    }\n\n    // O método themeDark é responsável por mudar o tema para dark.\n  }, {\n    key: \"themeDark\",\n    value: function themeDark() {\n      this.calculator.classList.remove(\"light\"); // Está removendo a classe light do this.calculator.\n      this.calculator.classList.add(\"dark\"); // Está adicionando a classe dark no this.calculator.\n      this.span.style.animation = \"buttonMoveDark 0.5s ease-in-out forwards\"; // Está atribuindo ao this.span o valor buttonMoveDark sendo assim adicionando a animação.\n    }\n\n    // O método themeLight é responsável por mudar o tema para light.\n  }, {\n    key: \"themeLight\",\n    value: function themeLight() {\n      this.calculator.classList.remove(\"dark\"); // Está removendo a classe dark do this.calculator.\n      this.calculator.classList.add(\"light\"); // Está adicionando a classe light no this.calculator.\n      this.span.style.animation = \"buttonMoveLight 0.5s ease-in-out forwards\"; // Está atribuindo ao this.span o valor buttonMoveLight sendo assim adicionando a animação.\n    }\n\n    // O método changeTheme é responsável por verificar se o tema está salvo no localStorage e mudar o tema.\n  }, {\n    key: \"changeTheme\",\n    value: function changeTheme() {\n      // Está verificando se o tema está salvo no localStorage, se sim executa o if, se não executa o else.\n      if (localStorage.getItem(\"theme\") === \"light\") {\n        this.themeLight(); // Está chamando o método themeLight responsável por mudar o tema para light.\n      } else {\n        this.themeDark(); // Está chamando o método themeDark responsável por mudar o tema para dark.\n      }\n    }\n\n    // O método toggleTheme é responsável por alternar o tema.\n  }, {\n    key: \"toggleTheme\",\n    value: function toggleTheme() {\n      var theme = localStorage.getItem(\"theme\") === \"light\" ? \"dark\" : \"light\"; // Está atribuindo a constante theme o valor do tema salvo no localStorage, se o tema for light, o valor da constante theme será dark, se não o valor da constante theme será light.\n      localStorage.setItem(\"theme\", theme); // Está salvando o tema no localStorage.\n      this.changeTheme(); // Está chamando o método changeTheme responsável por mudar o tema.\n    }\n\n    // O método updateButtonPosition é responsável por atualizar a posição do botão.\n  }, {\n    key: \"updateButtonPosition\",\n    value: function updateButtonPosition() {\n      var theme = localStorage.getItem(\"theme\"); // Está atribuindo a constante theme o valor do tema salvo no localStorage.\n      this.span.style.transform = theme === \"light\" ? \"translateX(0)\" : \"translateX(100%)\"; // Se o tema for light, o botão ficará na posição inicial(translateX(0)), se não o botão ficará na posição final(translateX(100%)).\n    }\n\n    // O método init é responsável por iniciar o módulo.\n  }, {\n    key: \"init\",\n    value: function init() {\n      // Está verificando se o this.span existe, se sim executa o if.\n      if (this.span) {\n        this.pageReload();\n        this.changeTheme();\n        this.addEvent();\n      }\n      return this; // Está retornando o this para que seja possível acessar os métodos do módulo através do init.\n    }\n  }]);\n  return Theme;\n}();\n\n\n//# sourceURL=webpack://calculadora/./src/scripts/modules/theme.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theme.js */ \"./src/scripts/modules/theme.js\");\n/* harmony import */ var _modules_calculation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculation.js */ \"./src/scripts/modules/calculation.js\");\n// Está importando os módulos.\n\n\n\n// Está instanciando os módulos.\nvar theme = new _modules_theme_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntheme.init();\nvar calculation = new _modules_calculation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ncalculation.init();\n\n//# sourceURL=webpack://calculadora/./src/scripts/script.js?");

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