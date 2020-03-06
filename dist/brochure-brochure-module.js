(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brochure-brochure-module"],{

/***/ "./src/app/brochure/brochure.module.ts":
/*!*********************************************!*\
  !*** ./src/app/brochure/brochure.module.ts ***!
  \*********************************************/
/*! exports provided: BrochureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrochureModule", function() { return BrochureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/brochure/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/brochure/view/view.component.ts");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BrochureModule = /** @class */ (function () {
    function BrochureModule() {
    }
    BrochureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__["FormioGrid"],
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
                                component: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"]
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
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'listing',
                        form: 'listing'
                    }
                }
            ]
        })
    ], BrochureModule);
    return BrochureModule;
}());



/***/ }),

/***/ "./src/app/brochure/resource/resource.component.css":
/*!**********************************************************!*\
  !*** ./src/app/brochure/resource/resource.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brochure/resource/resource.component.html":
/*!***********************************************************!*\
  !*** ./src/app/brochure/resource/resource.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/brochure/resource/resource.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/brochure/resource/resource.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/brochure/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/brochure/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/brochure/view/view.component.css":
/*!**************************************************!*\
  !*** ./src/app/brochure/view/view.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brochure/view/view.component.html":
/*!***************************************************!*\
  !*** ./src/app/brochure/view/view.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card card-body printableArea\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div style=\"float:left\">\n                       <img src=\"https://www.ooba.co.za/app/uploads/2018/05/ooba-Logo-Green-Copy.png\" style=\"max-width: 150px;\">\n                    </div>\n                    <div style=\"float: right\">\n                        <h4 class=\"font-muted p-t-15\">Phone us on 0860 00 66 22</h4>\n                        <!--<p class=\"text-muted\">E 104, Dharti-2,\n                              <br/> Nr' Viswakarma Temple,\n                              <br/> Talaja Road,\n                              <br/> Bhavnagar - 364002</p>-->\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div style=\"float:left\">\n                        <h3>{{ service.resource?.data.headline }}</h3>\n                        <p class=\"text-dark\">R{{ service.resource?.data.price | number }}</p>\n                    </div>\n                    <div style=\"float: right\">\n                        <h4 class=\"font-bold\">{{ service.resource?.data.address.formatted_address }}</h4>\n                        <!--<p class=\"text-muted\">E 104, Dharti-2,\n                              <br/> Nr' Viswakarma Temple,\n                              <br/> Talaja Road,\n                              <br/> Bhavnagar - 364002</p>-->\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-7\"><img src=\"{{ service.resource?.data.images[0].url }}\" class=\"img-fluid\" style=\"object-fit: cover;\" />\n                </div>\n                <div class=\"col-md-5\"><img src=\"{{ service.resource?.data.images[1].url }}\" class=\"img-fluid\" style=\"object-fit: cover;\" />\n                </div>\n                <div class=\"col-md-9\" style=\"padding-top: 30px;\">\n                    <div [innerHTML]=\"service.resource?.data.description\"></div>\n\n                </div>\n                <div class=\"col-md-3\" style=\"padding-top: 30px;\">\n                    <div class=\"card-body\">\n                        <ul class=\"list-style-none float-left m-r-30\">\n                            <li class=\"m-t-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/bedroom.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.bedrooms }}</h5><span\n                                            class=\"text-muted\">Bedrooms</span>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"m-t-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/bathroom.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.bathrooms }}</h5><span\n                                            class=\"text-muted\">Bathrooms</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10 m-b-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/kitchen.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.kitchens }}</h5><span\n                                            class=\"text-muted\">Kitchens</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/garage.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.garages }}</h5><span\n                                            class=\"text-muted\">Garages</span>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"m-t-10 m-b-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/parking.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.carPorts }}</h5><span\n                                            class=\"text-muted\">Car Ports</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                        </ul>\n                        <ul class=\"list-style-none m-l-30\">\n\n                            <li class=\"m-t-10\" *ngIf=\"service.resource?.data.studies\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/studies.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.studies }}</h5><span\n                                            class=\"text-muted\">Study Rooms</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10 m-b-10\" *ngIf=\"service.resource?.data.flatlet\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/bathrooms.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.flatlet }}</h5><span\n                                            class=\"text-muted\">Flatlet</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10 m-b-10\" *ngIf=\"service.resource?.data.domesticAccomodation\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/bathrooms.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.domesticAccomodation }}</h5><span\n                                            class=\"text-muted\">Domestic Rooms</span>\n                                    </div>\n                                </div>\n\n                            </li>\n\n                            <li class=\"m-t-10 m-b-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/view.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.views }}</h5><span\n                                            class=\"text-muted\">Views</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10 m-b-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/pool.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.pool }}</h5><span\n                                            class=\"text-muted\">Pool</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10 m-b-10\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/security.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.security }}</h5><span\n                                            class=\"text-muted\">Security</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <!--                                        <li class=\"m-t-10 m-b-10\">\n                                            <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/bathrooms.png\" class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                                <div class=\"m-l-10\">\n                                                    <h5 class=\"m-b-0\">{{ service.resource?.data.petsAllowed }}</h5><span class=\"text-muted\">Pets Allowed</span>\n                                                </div>\n                                            </div>\n                                         \n                                        </li>\n                                        <li class=\"m-t-10 m-b-10\">\n                                            <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/bathrooms.png\" class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                                <div class=\"m-l-10\">\n                                                    <h5 class=\"m-b-0\">{{ service.resource?.data.receptionRooms }}</h5><span class=\"text-muted\">Reception Rooms</span>\n                                                </div>\n                                            </div>\n                                         \n                                        </li>\n                                    -->\n                            <li class=\"m-t-10 m-b-10\" *ngIf=\"service.resource?.data.floor\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/floor.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.floor | number }}m²</h5><span\n                                            class=\"text-muted\">Floor Size</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                            <li class=\"m-t-10 m-b-10\" *ngIf=\"service.resource?.data.land\">\n                                <div class=\"d-flex align-items-center\"><img src=\"../../assets/images/land.png\"\n                                        class=\"img-fluid\" style=\"width:35px; object-fit: cover;\" />\n                                    <div class=\"m-l-10\">\n                                        <h5 class=\"m-b-0\">{{ service.resource?.data.land | number }}m²</h5><span\n                                            class=\"text-muted\">Land Size</span>\n                                    </div>\n                                </div>\n\n                            </li>\n                        </ul>\n                        <div class=\"clear\"></div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"pull-right m-t-30 text-right\">\n                        <h3>\n                            <b>Price:</b> R{{ service.resource?.data.price | number }}</h3>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/brochure/view/view.component.ts":
/*!*************************************************!*\
  !*** ./src/app/brochure/view/view.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/brochure/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/brochure/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=brochure-brochure-module.js.map