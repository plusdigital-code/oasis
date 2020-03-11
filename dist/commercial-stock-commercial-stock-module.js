(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commercial-stock-commercial-stock-module"],{

/***/ "./src/app/commercial-stock/commercial-stock.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/commercial-stock/commercial-stock.module.ts ***!
  \*************************************************************/
/*! exports provided: CommercialStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercialStockModule", function() { return CommercialStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/commercial-stock/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/commercial-stock/index/index.component.ts");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CommercialStockModule = /** @class */ (function () {
    function CommercialStockModule() {
    }
    CommercialStockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__["FormioGrid"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_8__["NgAisModule"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"]
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
                            }
                        ]
                    },
                ])
            ],
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'commercial',
                        form: 'commercial'
                    }
                }
            ]
        })
    ], CommercialStockModule);
    return CommercialStockModule;
}());



/***/ }),

/***/ "./src/app/commercial-stock/index/index.component.css":
/*!************************************************************!*\
  !*** ./src/app/commercial-stock/index/index.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commercial-stock/index/index.component.html":
/*!*************************************************************!*\
  !*** ./src/app/commercial-stock/index/index.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ais-instantsearch [config]=\"{\n  apiKey: 'efe2e1f090c52825b9413451ca24f3b0',\n  appId: '5BBJ80MJOQ',\n  indexName: 'commercial_All',\n  routing: true\n}\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"card bg-light-info m-t-15\">\n              <div class=\"card-body p-20\">\n                  <h2 class=\"m-b-15 text-center\">Search For Anything on the Digital Office</h2>\n                  <hr />\n                  <ais-search-box placeholder='Start By Typing Here...'>\n                  </ais-search-box>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"card-columns\">\n              <ais-hits>\n                  <ng-template let-hits=\"hits\">\n                      <div *ngFor=\"let hit of hits\">\n                          <div class=\"card\">\n                              <table class=\"table v-top no-border m-b-0 agent-header-index agent-header-index2\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <h3 class=\"font-normal m-b-0 index-headline\">\n                                                  {{ hit.data.commercialListingProfile.data.headline }}\n                                              </h3>\n                                          </td>\n                                          <td>\n                                              <h4 class=\"m-b-0\"><label\n                                                      class=\"label label-price font-bold\">R{{ hit.data.commercialListingProfile.data.price | number }}</label>\n                                              </h4>\n                                          </td>\n\n                                      </tr>\n                                  </tbody>\n                              </table>\n                              <hr class=\"m-t-0 d-none d-md-block d-xl-none\" />\n                              <div class=\"d-none d-md-block d-xl-none\">\n                                  <table class=\"table v-middle no-border agent-header-index p-0\">\n                                      <tbody>\n\n                                          <tr>\n                                              <td class=\"p-0\">\n                                                  Zoning: <span\n                                                      class=\"text-capitalize\">{{ hit.data.commercialWeb.data.commercialListingProfile.data.zoning }}</span>\n                                              </td>\n                                              <td class=\"p-0\">\n                                                  Property Type: <span\n                                                      class=\"text-capitalize\">{{ hit.data.commercialWeb.data.commercialListingProfile.data.propertyType }}</span>\n                                              </td>\n                                              <td class=\"p-0\">Floor Space:\n                                                  {{ hit.data.commercialWeb.data.commercialListingProfile.data.floorSpace | number }}\n                                              </td>\n                                      </tbody>\n                                  </table>\n                              </div>\n                              <img alt=\"Card image cap\" class=\"card-img-top img-responsive img-commercial-stock\"\n                                  src=\"{{ hit.data.commercialWeb.data.commercialListingProfile.data.images.url }}\"\n                                  style=\"max-height: 350px;\" />\n\n                              <div class=\"card-body\">\n                                  <p class=\"text-muted\">\n                                      {{hit.data.listingData | date:'longDate'}}</p>\n                                  <p class=\"m-b-0 m-t-10 index-description\">\n                                      {{ hit.data.commercialListingProfile.data.descriptionAbridged }}\n                                  </p>\n\n                                  <hr class=\"d-none d-md-block d-xl-none\" />\n                                  <table\n                                      class=\"table v-middle no-border m-b-0 agent-header-index d-none d-md-block d-xl-none\">\n                                      <tbody>\n                                          <tr>\n                                              <td><img alt=\"no-border\" class=\"rounded-circle\"\n                                                      style=\"object-fit: cover;\" height=\"75\"\n                                                      src=\"{{ hit.data.commercialWeb.data.commercialListingProfile.data.brokerRef.data.profilePhoto.url }}\" />\n                                              </td>\n                                              <td class=\"text-right\">\n                                                  {{ hit.data.commercialWeb.data.commercialListingProfile.data.brokerRef.data.fullName }}<br />\n                                              </td>\n                                              <!--\n                                                                                          <td class=\"text-right\">\n                                                                                                 \n                                                                                          <h6 class=\"text-muted\">\n                                                                                                  {{hit.data.uniqueCode}} \n                                                                                          </h6>\n                                                                                        \n                                                                                       <span class=\"d-block text-muted\">{{hit.data.listingData | date:'longDate'}}</span>\n                                                                                          </td>\n                                                                                            -->\n                                          </tr>\n                                      </tbody>\n                                  </table>\n                                  <a href=\"https://www.maxprop.co.za/#/commercial/{{hit.objectID}}/view\"\n                                      class=\"btn btn-warning btn-block btn-rounded waves-effect waves-light m-t-20\">\n                                      Property Details</a>\n                              </div>\n                          </div>\n\n                      </div>\n                  </ng-template>\n              </ais-hits>\n          </div>\n          <ais-pagination showLast=\"true\" showFirst=\"true\"></ais-pagination>\n      </div>\n\n  </div>\n</ais-instantsearch>"

/***/ }),

/***/ "./src/app/commercial-stock/index/index.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/commercial-stock/index/index.component.ts ***!
  \***********************************************************/
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
    IndexComponent.prototype.onSubmit = function (submission) {
        console.log(submission);
        window.location.href = './#/commercial/' + submission.data.searchMandates + '/view';
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/commercial-stock/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/commercial-stock/index/index.component.css")]
        })
    ], IndexComponent);
    return IndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/commercial-stock/resource/resource.component.css":
/*!******************************************************************!*\
  !*** ./src/app/commercial-stock/resource/resource.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commercial-stock/resource/resource.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/commercial-stock/resource/resource.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resource works!\n</p>\n"

/***/ }),

/***/ "./src/app/commercial-stock/resource/resource.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/commercial-stock/resource/resource.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
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

var ResourceComponent = /** @class */ (function () {
    function ResourceComponent() {
    }
    ResourceComponent.prototype.ngOnInit = function () {
    };
    ResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/commercial-stock/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/commercial-stock/resource/resource.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourceComponent);
    return ResourceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=commercial-stock-commercial-stock-module.js.map