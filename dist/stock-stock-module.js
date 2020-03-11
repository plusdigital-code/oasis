(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./src/app/stock/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/stock/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/stock/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ais-instantsearch [config]=\"{\n  apiKey: 'efe2e1f090c52825b9413451ca24f3b0',\n  appId: '5BBJ80MJOQ',\n  indexName: 'maxprop_Residential_All_Listings',\n  routing: true\n}\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card bg-light\">\n        <div class=\"card-body\">\n          <ais-search-box placeholder='Search by Anything You Looking For - Eg. Apartment in Umhlanga With a View'>\n          </ais-search-box>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row m-t-20\">\n    <div class=\"col-md-3\">\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <ais-clear-refinements [clearsQuery]=\"true\"></ais-clear-refinements>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Type</h5>\n          <ais-refinement-list attribute=\"type\" operator=\"or\" [limit]=\"5\">\n          </ais-refinement-list>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Price</h5>\n          <ais-numeric-menu attribute=\"price\" operator=\"or\" [items]=\"[\n          { name: 'All' },\n          { end: 499999, name: 'Less than R500k' },\n          { start: 500000, end: 999999, name: 'R500k - R1M' },\n          { start: 1000000, end: 1499999, name: 'R1m - R1,5m' },\n          { start: 1500000, end: 1999999, name: 'R1.5m - R2m' },\n          { start: 2000000, end: 2499999, name: 'R2m - R2.5m' },\n          { start: 2500000, end: 2999999, name: 'R2.5m - R3m' },\n          { start: 3000000, end: 3499999, name: 'R3m - R3.5m' },\n          { start: 3500000, name: 'Above R3m' }\n        ]\">\n          </ais-numeric-menu>\n        </div>\n      </div>\n\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5 class=\"m-b-15\">Suburbs</h5>\n          <ais-refinement-list attribute=\"suburb\" operator=\"or\" [limit]=\"10\" [showMoreLimit]=\"15\" showMoreLabel=\"More\"\n            showLessLabel=\"Less\" [searchable]=\"true\">\n          </ais-refinement-list>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5 class=\"m-b-15\">Agents</h5>\n          <ais-refinement-list attribute=\"agent\" operator=\"or\" [limit]=\"10\" [showMoreLimit]=\"15\" showMoreLabel=\"More\"\n            showLessLabel=\"Less\" [searchable]=\"true\">\n          </ais-refinement-list>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Office</h5>\n          <ais-refinement-list attribute=\"office\" operator=\"or\" [limit]=\"20\" [showMoreLimit]=\"21\" showMoreLabel=\"More\"\n            showLessLabel=\"Less\">\n          </ais-refinement-list>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Property Types</h5>\n          <ais-refinement-list attribute=\"propertyType\" operator=\"or\" [limit]=\"4\" [showMoreLimit]=\"10\"\n            showMoreLabel=\"More\" showLessLabel=\"Less\">\n          </ais-refinement-list>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <ais-hits>\n        <ng-template let-hits=\"hits\">\n          <div *ngFor=\"let hit of hits\">\n            <div class=\"card\">\n              <img class=\"card-img-top img-responsive\" style=\"max-height: 350px;\" src=\"{{hit.cover}}\" />\n              <div class=\"card-body\">\n                <span class=\"float-right\">{{ hit.suburb }}</span>\n                <h3>\n                  {{hit.headline}}\n                </h3>\n\n\n                <div class=\"d-flex no-block align-items-center m-b-15\">\n                  <ais-highlight attribute=\"bedrooms\" [hit]=\"hit\">\n                  </ais-highlight>\n                  <span class=\"p-l-5\">Bedrooms</span>\n\n                  <div class=\"ml-auto\">\n                    <span class=\"font-weight-bold\">R{{hit.price | number}}</span>\n                  </div>\n                </div>\n                <p class=\"m-b-0 m-t-10\">\n                  <ais-highlight attribute=\"descriptionAbridged\" [hit]=\"hit\">\n                  </ais-highlight>...\n                </p>\n                <hr />\n                <div class=\"comment-widgets\">\n                  <!-- Comment Row -->\n                  <div class=\"d-flex flex-row comment-row m-t-0\">\n                    <div>\n                      <img src=\"{{hit.photo}}\" alt=\"user\" height=\"60\" class=\"rounded-circle\">\n                    </div>\n                    <div class=\"comment-text w-100\">\n                      <h6 class=\"font-medium\">\n                        {{ hit.agent }}\n                      </h6>\n                      <span class=\"d-block\">{{hit.office }}</span>\n                    </div>\n                    <div class=\"comment-text w-100 text-right\">\n                      <h6 class=\"text-muted\">\n                        <ais-highlight attribute=\"code\" [hit]=\"hit\">\n                        </ais-highlight>\n                      </h6>\n                      <span class=\"d-block text-muted\">{{hit.listingDate | date:'longDate'}}</span>\n                    </div>\n                  </div>\n                </div>\n                <a href=\"/#/homes-for-sale/{{hit.mandate}}/view\"\n                  class=\"btn btn-warning btn-block btn-rounded waves-effect waves-light m-t-20\">\n                  Property Details</a>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </ais-hits>\n      <ais-pagination showLast=\"true\" showFirst=\"true\"></ais-pagination>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\" style=\"margin-bottom: 25px;\">\n\n          <h5 style=\"margin-bottom: 45px;\">Bedrooms</h5>\n          <ais-range-slider attribute=\"bedrooms\" [precision]=\"0\" [pips]=\"false\">\n          </ais-range-slider>\n          <hr />\n          <h5 style=\"margin-bottom: 45px;\">Bathrooms</h5>\n          <ais-range-slider attribute=\"bathrooms\" [precision]=\"0\" [pips]=\"false\">\n          </ais-range-slider>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Floor Space (m²)</h5>\n          <ais-range-input attribute=\"floor\" [precision]=\"0\" separator=\"→\" currency=\"\">\n          </ais-range-input>\n          <hr />\n          <h5>Land Size (m²)</h5>\n          <ais-range-input attribute=\"land\" [precision]=\"0\" separator=\"→\" currency=\"\">\n          </ais-range-input>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Security</h5>\n          <ais-toggle attribute=\"security\" label=\"Security\"></ais-toggle>\n        </div>\n      </div>\n      <div class=\"card bg-light-info\">\n        <div class=\"card-body\">\n          <h5>Pool</h5>\n          <ais-toggle attribute=\"pool\" label=\"Pool\"></ais-toggle>\n        </div>\n      </div>\n    </div>\n  </div>\n</ais-instantsearch>"

/***/ }),

/***/ "./src/app/stock/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/stock/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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


var IndexComponent = /** @class */ (function (_super) {
    __extends(IndexComponent, _super);
    function IndexComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/stock/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/stock/index/index.component.css")]
        })
    ], IndexComponent);
    return IndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/stock/resource/resource.component.css":
/*!*******************************************************!*\
  !*** ./src/app/stock/resource/resource.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock/resource/resource.component.html":
/*!********************************************************!*\
  !*** ./src/app/stock/resource/resource.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fafafa;\" class=\"m-t-30\">\n  <ul class=\"nav nav-tabs\" style=\"margin-bottom: 25px; width:100%;\">\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"../\"><i class=\"fa fa-chevron-left\"></i> Back to Office Stock</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\"> Listing Information</a></li>\n    </ul>\n  <div class=\"clearfix\"></div>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/stock/resource/resource.component.ts":
/*!******************************************************!*\
  !*** ./src/app/stock/resource/resource.component.ts ***!
  \******************************************************/
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
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/stock/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/stock/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/stock/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/stock/index/index.component.ts");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ "./src/app/stock/view/view.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var StockModule = /** @class */ (function () {
    function StockModule() {
    }
    StockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_10__["NgAisModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__["FormioGrid"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"]
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
                                component: _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"]
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
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'stock',
                        form: 'stock'
                    }
                }
            ]
        })
    ], StockModule);
    return StockModule;
}());



/***/ }),

/***/ "./src/app/stock/view/view.component.css":
/*!***********************************************!*\
  !*** ./src/app/stock/view/view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock/view/view.component.html":
/*!************************************************!*\
  !*** ./src/app/stock/view/view.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-t-15\">\n  <div class=\"col-md-8 col-sm-12\">\n    <div class=\"card\">\n      <table class=\"table v-top no-border m-b-0 agent-header-index agent-header-index2\">\n        <tbody>\n          <tr>\n            <td>\n              <h3 class=\"font-normal m-b-0\">{{ service.resource?.data.listingProfile.data.headline }}</h3>\n            </td>\n            <td>\n              <!--\n                <small *ngIf=\"service.resource?.data.listingProfile.data.dateListed\" class=\"m-b-0 p-b-0 float-right text-muted\">Listed: {{ service.resource?.data.listingProfile.data.dateListed | date }}</small>\n                <span class=\"clearfix\"></span> -->\n                <small *ngIf=\"service.resource?.data.listingProfile.data.uniqueCodeRef\" class=\"m-b-0 p-t-0 p-b-0 m-t-0 float-right\">Ref No: {{ service.resource?.data.listingProfile.data.uniqueCodeRef }}</small>\n                <span class=\"clearfix\"></span>\n                 <label class=\"label label-price font-bold m-t-3\">R{{ service.resource?.data.listingProfile.data.price | number }}</label>\n              </td>\n          </tr>\n        </tbody>\n      </table>\n      <hr class=\"m-t-0\" />\n      <table class=\"table v-middle no-border agent-header-index p-0\" style=\"text-align: center\">\n        <tbody>\n          <tr>\n            <td class=\"p-0\"><img src=\"assets/images/bedroom-icon.png\">\n              {{ service.resource?.data.listingProfile.data.bedrooms }}\n              Bedrooms</td>\n            <td class=\"p-0\"><img src=\"assets/images/bathroom-icon.png\">\n              {{ service.resource?.data.listingProfile.data.bathrooms }}\n              Bathrooms</td>\n            <td class=\"p-0\"><img src=\"assets/images/kitchen-icon.png\">\n              {{ service.resource?.data.listingProfile.data.kitchens }}\n              Kitchen</td>\n            <td class=\"p-0\"><img src=\"assets/images/garage-icon.png\">\n              {{ service.resource?.data.listingProfile.data.garages }}\n              Garages</td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-carousel>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['0']['url'] }}\" alt=\"Random first slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['1']['url'] }}\" alt=\"Random second slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['2']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['3']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['4']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['5']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['6']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['7']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"{{ service.resource?.data.listingProfile.data.images['8']['url'] }}\" alt=\"Random third slide\">\n        </ng-template>\n      </ngb-carousel>\n      <div class=\"card-body\">\n        <p class=\"m-t-15\"><span [innerHTML]=\"service.resource?.data.listingProfile.data.description\"></span></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4>Rooms</h4>\n            <hr />\n            <table class=\"table no-border room-detail m-b-0\">\n              <tbody>\n                <tr>\n                  <td>Bedrooms:</td>\n                  <td>\n                    {{ service.resource?.data.listingProfile.data.bedrooms }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Bathrooms:</td>\n                  <td>\n                    {{ service.resource?.data.listingProfile.data.bathrooms }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Kitchens:</td>\n                  <td>\n                    {{ service.resource?.data.listingProfile.data.kitchens }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.diningRooms\">\n                  <td>Dining Rooms:</td>\n                  <td>{{ service.resource?.data.listingProfile.data.diningRooms }}</td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.lounges\">\n                  <td>Lounges:</td>\n                  <td>\n                    {{ service.resource?.data.listingProfile.data.lounges }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.storeRooms\">\n                  <td>Store Rooms:</td>\n                  <td>\n              {{ service.resource?.data.listingProfile.data.storeRooms }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.domesticRooms\">\n                  <td>Domestic Rooms:</td>\n                  <td>\n                    {{ service.resource?.data.listingProfile.data.domesticRooms }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.staffRooms\">\n                  <td>Staff Rooms:</td>\n                  <td>\n                    {{ service.resource?.data.listingProfile.data.staffRooms }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.studyRooms\">\n                  <td>Study Rooms:</td>\n                  <td>{{ service.resource?.data.listingProfile.data.studyRooms }}</td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.flatlet\">\n                  <td>Flatlet Rooms:</td>\n                  <td>{{ service.resource?.data.listingProfile.data.flatlet }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.laundry\">\n                  <td>Laundry:</td>\n                  <td>{{ service.resource?.data.listingProfile.data.laundryRooms }}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-sm-6\">\n        <div class=\"card\">\n          <div class=\"card-body bg-light-info\">\n            <h4>Pricing</h4>\n            <hr />\n            <table class=\"table no-border room-detail m-b-0\">\n              <tbody>\n                <tr>\n                  <td>Price:</td>\n                  <td>\n                    <span class=\"text-capitalize\">R{{ service.resource?.data.listingProfile.data.price | number }}</span>\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.rates\">\n                  <td>Rates:</td>\n                  <td>\n                    <span class=\"text-capitalize\">R{{ service.resource?.data.listingProfile.data.rates | number }}</span>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-body bg-light-success\">\n            <h4>Features</h4>\n            <hr />\n      \n            <table class=\"table no-border room-detail m-b-0\">\n              <tbody>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.pool\">\n                  <td>Pool:</td>\n                  <td>\n                    <span class=\"text-capitalize\">{{ service.resource?.data.listingProfile.data.pool }}</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Security:</td>\n                  <td>\n                    <span class=\"text-capitalize\">{{ service.resource?.data.listingProfile.data.security }}</span>\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.view\">\n                  <td>View:</td>\n                  <td>\n                    <span class=\"text-capitalize\">{{ service.resource?.data.listingProfile.data.view }}</span>\n                  </td>\n                </tr>\n                <tr *ngIf=\"service.resource?.data.listingProfile.data.patio\">\n                  <td>Patio:</td>\n                  <td>{{ service.resource?.data.listingProfile.data.patio }}</td>\n                </tr>\n              </tbody>\n            </table>\n    \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-12\">\n\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <div class=\"profile-pic m-b-0 m-t-10\"><img alt=\"user\" class=\"img-fluid rounded\"\n            src=\"{{ service.resource?.data.listingProfile.data.agentRef.data.profilePhoto['0']['imageSrc'] }}\" width=\"95%\"\n            style=\"max-height: 250px; object-fit:cover;\">\n          <h4 class=\"m-t-20 m-b-0\"><a href=\"/#/agent/{{service.resource?.data.listingProfile.data.agentRef._id}}\">\n              {{ service.resource?.data.listingProfile.data.agentRef.data.fullName }}</a></h4>\n          <p>{{ service.resource?.data.listingProfile.data.agentRef.data.mobileNumber }}<br />\n            <a href=\"mailto:#\">{{ service.resource?.data.listingProfile.data.agentRef.data.email }}</a>\n          </p>\n          <p class=\"m-b-0\"><a href=\"/#/offices/{{service.resource?.data.listingProfile.data.officeRef._id}}\">\n              {{ service.resource?.data.listingProfile.data.officeRef.data.officeName }}</a><br />\n            {{ service.resource?.data.listingProfile.data.officeRef.data.officeNumber }}<br />\n            <a qhref=\"#\">{{ service.resource?.data.listingProfile.data.officeRef.data.officeEmailAddress }}</a>\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stock/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stock/view/view.component.ts ***!
  \**********************************************/
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
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/stock/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/stock/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=stock-stock-module.js.map