(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "./src/app/starter/starter.component.html":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ais-instantsearch [config]=\"{\n    apiKey: 'efe2e1f090c52825b9413451ca24f3b0',\n    appId: '5BBJ80MJOQ',\n    indexName: 'commercial_All',\n    routing: true\n  }\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"card\"><img alt=\"Card image cap\" class=\"card-img-top img-responsive p-20\"\n                                    src=\"/assets/images/home-leads.png\" style=\"max-height:350px;\">\n                                <div class=\"card-body\">\n                                    <a [routerLink]=\"[ '/contacts']\"><h4 class=\"card-title text-center\">Manage Your Contact</h4></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"card\"><img alt=\"Card image cap\" class=\"card-img-top img-responsive p-20\"\n                                    src=\"/assets/images/home-mandates.png\" style=\"max-height:350px;\">\n                                <div class=\"card-body\">\n                                    <a [routerLink]=\"[ '/mandate']\"><h4 class=\"card-title text-center\">Manage Your Mandates</h4></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"card\"><img alt=\"Card image cap\" class=\"card-img-top img-responsive p-20\"\n                                    src=\"/assets/images/find-stock.png\" style=\"max-height:350px;\">\n                                <div class=\"card-body\">\n                                    <a [routerLink]=\"[ '/mandate']\"><h4 class=\"card-title text-center\">Search Properties</h4></a>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n \n</ais-instantsearch>"

/***/ }),

/***/ "./src/app/starter/starter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterComponent = /** @class */ (function () {
    function StarterComponent() {
        this.subtitle = 'This is some text within a card block.';
    }
    StarterComponent.prototype.ngAfterViewInit = function () { };
    StarterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./starter.component.html */ "./src/app/starter/starter.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter.module.ts":
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        data: {},
        component: _starter_component__WEBPACK_IMPORTED_MODULE_4__["StarterComponent"]
    }
];
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["NgAisModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_4__["StarterComponent"]]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ })

}]);
//# sourceMappingURL=starter-starter-module.js.map