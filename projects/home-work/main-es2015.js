(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\"></app-header>\n<app-sidenav>\n  <ng-template #content>\n    <h1 [ngStyle]=\"{'color': 'violet'}\">{{title.task}}</h1>\n\n\n\n<mat-grid-list cols=\"2\" rowHeight=\"2:2\" [ngStyle]=\"{'max-width': '1200px', 'margin': '0 auto'}\" >\n  <mat-grid-tile *ngFor=\"let item of places\" [ngStyle]=\"{'max-width': '500px'}\">\n        <mat-card class=\"example-card\" >\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>{{item.address}}</mat-card-title>\n            <mat-card-subtitle>{{item.phone}}</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image [src]=\"item.img\" [alt]=\"item.img\">\n          <mat-card-content>\n            <p>\n              {{item.address}}\n            </p>\n          </mat-card-content>\n        </mat-card>\n  </mat-grid-tile>\n\n</mat-grid-list>\n  </ng-template>\n</app-sidenav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n\n  <h1>{{title.text}}</h1>\n  <span [ngStyle]=\"{'display': 'block', 'font-size': '12px'}\">{{title.subtitle}}</span>\n</mat-toolbar>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav mode=\"side\"  #drawer>\n    <mat-list >\n      <mat-list-item *ngFor=\"let item of menu\">\n        <a [href]=\"item.url\">{{item.name}}</a>\n      </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <button type=\"button\" mat-icon-button (click)=\"toggleMenu()\" color=\"accent\">\n      <mat-icon matListIcon>view_headline</mat-icon>\n    </button>\n    <ng-container #container></ng-container>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock */ "./src/app/mock/index.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = {
            text: 'Home Work',
            subtitle: 'some text for subtitle',
            task: 'Places mock'
        };
        this.places = _mock__WEBPACK_IMPORTED_MODULE_2__["places"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.title = 'title';
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.drawer.toggle();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "drawer", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/mock/index.ts":
/*!*******************************!*\
  !*** ./src/app/mock/index.ts ***!
  \*******************************/
/*! exports provided: places */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "places", function() { return places; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const places = [
    {
        img: 'assets/images/2/n1.jpeg',
        address: '939 Box Street, Saddlebrooke, California, 1068',
        phone: 841888255190,
        weather: {
            title: 'rain',
            icon: 'assets/images/rain.svg',
            water: 23,
            temperature: 31
        },
        social_info: {
            title: 'Ovolo Assitia',
            img: 'assets/images/1/a1.jpeg',
            followers: 999,
            following: 155
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n2.jpeg',
        address: '166 Jay Street, Gardiner, California, 4635',
        phone: 984628463963,
        weather: {
            title: 'rain',
            icon: 'assets/images/rain.svg',
            water: 21,
            temperature: 27
        },
        social_info: {
            title: 'Eschoir Kneedles',
            img: 'assets/images/1/a2.jpeg',
            followers: 748,
            following: 103
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n3.jpeg',
        address: '393 Barwell Terrace, Windsor, Arizona, 9829',
        phone: 774064903360,
        weather: {
            title: 'rain',
            icon: 'assets/images/rain.svg',
            water: 22,
            temperature: 32
        },
        social_info: {
            title: 'Pivitol Caxt',
            img: 'assets/images/1/a3.jpeg',
            followers: 949,
            following: 116
        },
        type: 'Arizona'
    },
    {
        img: 'assets/images/2/n4.jpeg',
        address: '574 Montague Terrace, Bancroft, California, 5697',
        phone: 853431203778,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 21,
            temperature: 29
        },
        social_info: {
            title: 'Immunics Fortean',
            img: 'assets/images/1/a4.jpeg',
            followers: 710,
            following: 172
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n5.jpeg',
        address: '645 Irvington Place, Waterloo, California, 6126',
        phone: 313673008682,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 23,
            temperature: 28
        },
        social_info: {
            title: 'Eyeris Grok',
            img: 'assets/images/1/a5.jpeg',
            followers: 745,
            following: 72
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n6.jpeg',
        address: '166 Terrace Place, Salix, Tennessee, 5084',
        phone: 768189437926,
        weather: {
            title: 'rain',
            icon: 'assets/images/rain.svg',
            water: 24,
            temperature: 27
        },
        social_info: {
            title: 'Zilch Scenty',
            img: 'assets/images/1/a6.jpeg',
            followers: 853,
            following: 123
        },
        type: 'Tennessee'
    },
    {
        img: 'assets/images/2/n7.jpeg',
        address: '303 Sullivan Place, Mooresburg, Connecticut, 6071',
        phone: 816371972760,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 22,
            temperature: 29
        },
        social_info: {
            title: 'Farmex Sybixtex',
            img: 'assets/images/1/a7.jpeg',
            followers: 612,
            following: 127
        },
        type: 'Connecticut'
    },
    {
        img: 'assets/images/2/n8.jpeg',
        address: '211 Lyme Avenue, Freeburn, Arizona, 6760',
        phone: 944619170242,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 21,
            temperature: 31
        },
        social_info: {
            title: 'Eventex Xth',
            img: 'assets/images/1/a8.jpeg',
            followers: 631,
            following: 90
        },
        type: 'Arizona'
    },
    {
        img: 'assets/images/2/n9.jpeg',
        address: '970 Thomas Street, Fairforest, Connecticut, 9098',
        phone: 728683474491,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 24,
            temperature: 28
        },
        social_info: {
            title: 'Snips Idego',
            img: 'assets/images/1/a9.jpeg',
            followers: 634,
            following: 127
        },
        type: 'Connecticut'
    },
    {
        img: 'assets/images/2/n10.jpeg',
        address: '468 Commerce Street, Jugtown, California, 9143',
        phone: 564184690840,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 24,
            temperature: 27
        },
        social_info: {
            title: 'Uberlux Overplex',
            img: 'assets/images/1/a10.jpeg',
            followers: 906,
            following: 124
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n11.jpeg',
        address: '593 Garden Street, Rosine, Arizona, 2047',
        phone: 299492631493,
        weather: {
            title: 'rain',
            icon: 'assets/images/rain.svg',
            water: 22,
            temperature: 31
        },
        social_info: {
            title: 'Netropic Tsunamia',
            img: 'assets/images/1/a11.jpeg',
            followers: 501,
            following: 128
        },
        type: 'Arizona'
    },
    {
        img: 'assets/images/2/n12.jpeg',
        address: '745 Bowne Street, Crenshaw, California, 9082',
        phone: 810757140950,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 24,
            temperature: 30
        },
        social_info: {
            title: 'Norsul Daycore',
            img: 'assets/images/1/a12.jpeg',
            followers: 905,
            following: 157
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n13.jpeg',
        address: '198 Cook Street, Kingstowne, Connecticut, 134',
        phone: 566524265219,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 19,
            temperature: 31
        },
        social_info: {
            title: 'Biotica Geeky',
            img: 'assets/images/1/a13.jpeg',
            followers: 618,
            following: 53
        },
        type: 'Connecticut'
    },
    {
        img: 'assets/images/2/n14.jpeg',
        address: '680 Hastings Street, Davenport, Tennessee, 6254',
        phone: 567429920662,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 19,
            temperature: 32
        },
        social_info: {
            title: 'Cuizine Artworlds',
            img: 'assets/images/1/a14.jpeg',
            followers: 670,
            following: 176
        },
        type: 'Tennessee'
    },
    {
        img: 'assets/images/2/n15.jpeg',
        address: '241 McKibben Street, Lupton, Tennessee, 8801',
        phone: 747806576148,
        weather: {
            title: 'clouds',
            icon: 'assets/images/clouds.svg',
            water: 25,
            temperature: 27
        },
        social_info: {
            title: 'Applica Earthplex',
            img: 'assets/images/1/a15.jpeg',
            followers: 821,
            following: 177
        },
        type: 'Tennessee'
    },
    {
        img: 'assets/images/2/n16.jpeg',
        address: '253 Bath Avenue, Lewis, Arizona, 2271',
        phone: 191886384143,
        weather: {
            title: 'rain',
            icon: 'assets/images/rain.svg',
            water: 25,
            temperature: 30
        },
        social_info: {
            title: 'Quiltigen Imant',
            img: 'assets/images/1/a16.jpeg',
            followers: 778,
            following: 162
        },
        type: 'Arizona'
    },
    {
        img: 'assets/images/2/n17.jpeg',
        address: '845 Moore Place, Groveville, Arizona, 7607',
        phone: 710863369771,
        weather: {
            title: 'clouds',
            icon: 'assets/images/clouds.svg',
            water: 25,
            temperature: 28
        },
        social_info: {
            title: 'Flyboyz Gynk',
            img: 'assets/images/1/a17.jpeg',
            followers: 727,
            following: 167
        },
        type: 'Arizona'
    },
    {
        img: 'assets/images/2/n18.jpeg',
        address: '688 Henderson Walk, Comptche, California, 6386',
        phone: 349534850023,
        weather: {
            title: 'clouds',
            icon: 'assets/images/clouds.svg',
            water: 22,
            temperature: 32
        },
        social_info: {
            title: 'Aquasseur Rockyard',
            img: 'assets/images/1/a18.jpeg',
            followers: 788,
            following: 118
        },
        type: 'California'
    },
    {
        img: 'assets/images/2/n19.jpeg',
        address: '317 Garfield Place, Barclay, Arizona, 5541',
        phone: 306601947959,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 23,
            temperature: 31
        },
        social_info: {
            title: 'Elpro Kaggle',
            img: 'assets/images/1/a19.jpeg',
            followers: 929,
            following: 171
        },
        type: 'Arizona'
    },
    {
        img: 'assets/images/2/n20.jpeg',
        address: '236 Flatlands Avenue, Eden, Missouri, 7837',
        phone: 484372221403,
        weather: {
            title: 'sun',
            icon: 'assets/images/sun.svg',
            water: 20,
            temperature: 31
        },
        social_info: {
            title: 'Imageflow Translink',
            img: 'assets/images/1/a20.jpeg',
            followers: 804,
            following: 186
        },
        type: 'Missouri'
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavComponent = class SidenavComponent {
    constructor() {
        this.setSideNavControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menu = [
            {
                name: 'About',
                url: 'about'
            },
            {
                name: 'Home',
                url: 'home'
            },
            {
                name: 'Contacts',
                url: 'contacts'
            }
        ];
    }
    ngOnInit() {
        this.container.createEmbeddedView(this.content);
        console.log('*content:', this.content); // элемент шаблона должен находиться в рутовом компоненте app.component.html
        console.log('*container:', this.container);
        // this.container.createEmbeddedView(this.content);
    }
    toggleMenu() {
        this.drawer.toggle();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavComponent.prototype, "setSideNavControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', { static: true })
], SidenavComponent.prototype, "drawer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('content', { static: true })
], SidenavComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] })
], SidenavComponent.prototype, "container", void 0);
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")).default]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexander/Документы/projects/ng170919/home-work/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map