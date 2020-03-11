(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/account/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/account/view/view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__["FormioGrid"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceIndexComponent"]
                    },
                    {
                        path: 'new',
                        component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceCreateComponent"]
                    },
                    {
                        path: ':id',
                        component: _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"],
                        children: [
                            {
                                path: '',
                                redirectTo: 'view',
                                pathMatch: 'full'
                            },
                            {
                                path: 'view',
                                component: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"]
                            },
                            {
                                path: 'edit',
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceEditComponent"]
                            },
                            {
                                path: 'delete',
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceDeleteComponent"]
                            }
                        ]
                    },
                ])
            ],
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'account',
                        form: 'account'
                    }
                }
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/resource/resource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/account/resource/resource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/resource/resource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/account/resource/resource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fafafa;\" class=\"m-t-20\">\n    <ul class=\"nav nav-tabs\" style=\"margin-bottom: 25px; width:100%;\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i> </a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\"> {{ service.resource?.data.companyName }} Account Overview</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\"><i class=\"icon-Pen-2\"></i>\n          Edit</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><i\n            class=\"sl-icon-trash\"></i></a></li>\n    </ul>\n    <div class=\"clearfix\"></div>\n  </div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/account/resource/resource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/resource/resource.component.ts ***!
  \********************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResourceComponent = /** @class */ (function (_super) {
    __extends(ResourceComponent, _super);
    function ResourceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/account/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/account/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/account/view/view.component.css":
/*!*************************************************!*\
  !*** ./src/app/account/view/view.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/view/view.component.html":
/*!**************************************************!*\
  !*** ./src/app/account/view/view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h2>{{ service.resource?.data.companyName }}</h2>\n          <small class=\"text-muted\">Contact Email </small><br />\n          <a target=\"_blank\"\n            href=\"#\">{{ service.resource?.data.contactEmail }}</a><br />\n            <small class=\"text-muted\">Website Address: </small><br />\n         <a target=\"_blank\"\n           href=\"#\">{{ service.resource?.data.websiteAddress }}</a><br />\n          <small class=\"text-muted\">Office Address </small><br />\n          <a target=\"_blank\"\n            href=\"#\">{{ service.resource?.data.headOfficeAddress.formatted_address }}</a><br />\n            <small class=\"text-muted\">Postal Address </small><br />\n         {{ service.resource?.data.headOfficePostalAddress }}\n         \n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n            <img class=\"m-b-15\" style=\"width:100%;\" src=\"{{ service.resource?.data.companyLogo['0']['url'] }}\" />\n       \n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/account/view/view.component.ts":
/*!************************************************!*\
  !*** ./src/app/account/view/view.component.ts ***!
  \************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ViewComponent = /** @class */ (function (_super) {
    __extends(ViewComponent, _super);
    function ViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/account/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/account/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map