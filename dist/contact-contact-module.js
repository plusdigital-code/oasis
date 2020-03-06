(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/contact/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
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
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceViewComponent"]
                            },
                            {
                                path: 'edit',
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceEditComponent"]
                            },
                            {
                                path: 'delete',
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceDeleteComponent"]
                            },
                            {
                                path: 'listing',
                                loadChildren: './listing/listing.module#ListingModule'
                            }
                        ]
                    },
                ])
            ],
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'contact',
                        form: 'contact'
                    }
                }
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/contact/resource/resource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact/resource/resource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/resource/resource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact/resource/resource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fafafa;\" class=\"m-t-20\">\n  <ul class=\"nav nav-tabs\" style=\"margin-bottom: 25px; width:100%;\">\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i> </a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">Contact Information</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"listing\" routerLinkActive=\"active\"><i class=\"sl-icon-list\"></i> Matched Listings</a></li>\n\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\"><i class=\"sl-icon-pencil\"></i> Edit</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><i class=\"sl-icon-trash\"></i></a></li>\n  </ul>\n  <div class=\"clearfix\"></div>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/contact/resource/resource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact/resource/resource.component.ts ***!
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
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/contact/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/contact/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map