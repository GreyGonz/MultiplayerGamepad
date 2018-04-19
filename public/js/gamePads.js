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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

var ball;

console.log('Loaded');

window.Echo.join('new-player').here(function (users) {
  console.table(users);
}).joining(function (user) {
  console.log('New user logged in ' + user.name);
});

window.addEventListener("gamepadconnected", function (e) {

  ball = document.getElementById("ball");
  ball.style.backgroundColor = "green";
  ball2 = document.getElementById("ball2");
  ball2.style.backgroundColor = "blue";
  document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;
  updateLoop();
});

function updateLoop() {

  var gp = navigator.getGamepads()[0];
  var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
  var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

  var left2 = (gp.axes[2] + 1) / 2 * (window.innerWidth - ball2.offsetWidth);
  var right2 = (gp.axes[3] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

  ball.style.left = left + "px";
  ball.style.top = right + "px";

  ball2.style.left = left2 + "px";
  ball2.style.top = right2 + "px";

  if (gp.buttons[5].pressed) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }

  requestAnimationFrame(updateLoop);
}

/***/ })

/******/ });