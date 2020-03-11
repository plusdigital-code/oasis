(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commercial-web-commercial-web-module"],{

/***/ "./src/app/commercial/commercial-marketing/commercial-web/commercial-web.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/commercial-web.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CommercialWebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercialWebModule", function() { return CommercialWebModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/commercial/commercial-marketing/commercial-web/view/view.component.ts");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CommercialWebModule = /** @class */ (function () {
    function CommercialWebModule() {
    }
    CommercialWebModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_3__["FormioModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__["FormioGrid"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceIndexComponent"]
                    },
                    {
                        path: 'new',
                        component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceCreateComponent"]
                    },
                    {
                        path: ':id',
                        component: _resource_resource_component__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"],
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
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceEditComponent"]
                            },
                            {
                                path: 'delete',
                                component: angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceDeleteComponent"]
                            }
                        ]
                    },
                ])
            ],
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceConfig"],
                    useValue: {
                        name: 'commercialWeb',
                        form: 'commercialweb',
                        parents: [
                            'commercialListingProfile'
                        ]
                    }
                }
            ]
        })
    ], CommercialWebModule);
    return CommercialWebModule;
}());



/***/ }),

/***/ "./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fafafa;\" class=\"m-t-25\">\n  <ul class=\"nav nav-tabs\" style=\"margin-bottom: 25px; width:100%;\">\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i></a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">Web Profile</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\">Edit</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><i\n          class=\"sl-icon-trash\"></i></a></li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.ts ***!
  \***********************************************************************************************/
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
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/commercial/commercial-marketing/commercial-web/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/commercial/commercial-marketing/commercial-web/view/view.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/view/view.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commercial/commercial-marketing/commercial-web/view/view.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/view/view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-t-15\">\n  <div class=\"col-md-8 col-sm-12\">\n    <div class=\"card\">\n      <table class=\"table v-top no-border m-b-0 agent-header-index agent-header-index2\">\n        <tbody>\n          <tr>\n            <td>\n              <h3>{{ service.resource?.data.commercialListingProfile.data.headline }}</h3>\n            </td>\n            <td>\n              <label class=\"label label-price font-bold m-t-5\">R{{ service.resource?.data.commercialListingProfile.data.price | number }}</label>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <hr class=\"m-t-0\" />\n      <table class=\"table v-middle no-border agent-header-index p-0\">\n        <tbody>\n          <tr>\n            <td class=\"p-0\">\n              Zoning: <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.zoning }}</span>\n            </td>\n            <td class=\"p-0\">\n              Property Type: <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.propertyType }}</span>\n            </td>\n            <td class=\"p-0\">Floor Space: {{ service.resource?.data.commercialListingProfile.data.floorSpace | number }}m²</td>\n        </tbody>\n      </table>\n      <ngb-carousel>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['0']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['1']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['2']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['3']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['4']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['5']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['6']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['7']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['8']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['9']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{service.resource?.data.commercialListingProfile.data.images['10']['url']}}\" alt=\"Random first slide\">\n        </ng-template>\n      </ngb-carousel>\n      <div class=\"card-body\">\n        <p class=\"m-t-15\"><span [innerHTML]=\"service.resource?.data.commercialListingProfile.data.description\"></span></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n              <div class=\"card-body bg-light-info\">\n                <h4>Summary</h4>\n                <hr />\n                <table class=\"table no-border room-detail m-b-0\">\n                  <tbody>\n                    <tr>\n                      <td>Price:</td>\n                      <td>\n                        <span class=\"text-capitalize\">R{{ service.resource?.data.commercialListingProfile.data.price | number }}</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.availableFromSelect\">\n                        <td>Available From:</td>\n                        <td>\n                          <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.availableFromSelect }}</span>\n                        </td>\n                      </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.availableFrom\">\n                        <td>Available Date:</td>\n                        <td>\n                          <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.availableFrom }}</span>\n                        </td>\n                      </tr>\n              \n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.propertyType\">\n                      <td>Property Title:</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.propertyType }}</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.zoning\">\n                      <td>Zoning:</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.zoning }}</span>\n                      </td>\n                    </tr>\n    \n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.security\">\n                      <td>Security:</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.security }}</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.airConditioning\">\n                      <td>Air Conditioning:</td>\n                      <td>{{ service.resource?.data.commercialListingProfile.data.airConditioning | titlecase }}</td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.power3Phase\">\n                      <td>Power 3 Phase:</td>\n                      <td>{{ service.resource?.data.commercialListingProfile.data.power3Phase | titlecase }}</td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.amps\">\n                      <td>Amps:</td>\n                      <td>{{ service.resource?.data.commercialListingProfile.data.amps }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n       \n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                <h4>Features</h4>\n                <hr />\n                <table class=\"table no-border room-detail m-b-0\">\n                  <tbody>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.erfSize\">\n                      <td>ERF Size</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.erfSize | number }}</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Floor Space</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.floorSpace | number }}m²</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.officeSize\">\n                      <td>Office Size</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.officeSize | number }}m²</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.factoryWarehouseSize\">\n                      <td>Factory / Warehouse Size</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.factoryWarehouseSize | number }}m²</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.retailSize\">\n                      <td>Retail Size</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.retailSize | number }}m²</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.yardPrice\">\n                      <td>Yard Space</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.yardSpace | number }}m²</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.openParkingBays\">\n                      <td>Open Parking Bays</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.openParkingBays }}</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.coveredParkingBays\">\n                      <td>Covered Parking Bays</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.coveredParkingBays }}</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"service.resource?.data.commercialListingProfile.data.basementParking\">\n                      <td>Basement Parking</td>\n                      <td>\n                        <span class=\"text-capitalize\">{{ service.resource?.data.commercialListingProfile.data.basementParking }}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-12\">\n    <div class=\"card bg-light no-card-border\">\n      <div class=\"card-body text-center\">\n             <h6 class=\"m-0 p-0\"><span class=\"text-muted\">Listing Unique Code:</span> {{ service.resource?.data.commercialListingProfile.data.uniqueCodeRef }}</h6>\n      </div>\n    </div>\n    <div class=\"card bg-light-info\">\n        <div class=\"card-body text-center\">\n        <div class=\"profile-pic m-b-0 m-t-10\"><img alt=\"{{ service.resource?.data.broker.data.fullName }}\"\n            class=\"border\" style=\"object-fit: cover;\"\n            src=\"{{ service.resource?.data.broker.data.profilePhoto['0']['url'] }}\" width=\"95%\">\n          <h4 class=\"m-t-20 m-b-0\"><a href=\"/#/broker/{{service.resource?.data.broker._id}}\">\n              {{ service.resource?.data.broker.data.fullName }}</a></h4>\n          <p>{{ service.resource?.data.broker.data.mobileNumber }}<br />\n            <a href=\"mailto:#\">{{ service.resource?.data.broker.data.email }}</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/commercial/commercial-marketing/commercial-web/view/view.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/commercial/commercial-marketing/commercial-web/view/view.component.ts ***!
  \***************************************************************************************/
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
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/commercial/commercial-marketing/commercial-web/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/commercial/commercial-marketing/commercial-web/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=commercial-web-commercial-web-module.js.map