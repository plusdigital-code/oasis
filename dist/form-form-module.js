(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var angular_formio_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio/manager */ "./node_modules/angular-formio/manager/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_3__["FormioGrid"],
                angular_formio_manager__WEBPACK_IMPORTED_MODULE_4__["FormManagerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(angular_formio_manager__WEBPACK_IMPORTED_MODULE_4__["FormManagerRoutes"])())
            ],
            declarations: [],
            providers: [
                angular_formio_manager__WEBPACK_IMPORTED_MODULE_4__["FormManagerService"],
                { provide: angular_formio_manager__WEBPACK_IMPORTED_MODULE_4__["FormManagerConfig"], useValue: {
                        tag: 'common'
                    } }
            ]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map