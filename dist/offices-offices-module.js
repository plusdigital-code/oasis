(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offices-offices-module"],{

/***/ "./src/app/offices/index/index.component.css":
/*!***************************************************!*\
  !*** ./src/app/offices/index/index.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offices/index/index.component.html":
/*!****************************************************!*\
  !*** ./src/app/offices/index/index.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ais-instantsearch [config]=\"{\n        apiKey: 'efe2e1f090c52825b9413451ca24f3b0',\n        appId: '5BBJ80MJOQ',\n        indexName: 'maxprop_Offices',\n        routing: true\n      }\">\n        <div class=\"row m-t-20\">\n\n                <div class=\"col-md-8\">\n                        <ais-hits>\n                                <ng-template let-hits=\"hits\">\n                                        <div *ngFor=\"let hit of hits\">\n                                                <div class=\"card\">\n                                                        <div class=\"card-body\">\n                                                                {{ hit.office }}<br />\n                                                                {{ hit.address }}<br />\n                                                                {{ hit.email }}<br />\n                                                                {{ hit.number }}\n                                                        </div>\n                                                </div>\n                                        </div>\n                                </ng-template>\n                        </ais-hits>\n                        <ais-pagination showLast=\"true\" showFirst=\"true\"></ais-pagination>\n                </div>\n                <div class=\"col-md-4\">\n                                <div class=\"card bg-light\">\n                                                <div class=\"card-body\">\n                                                        <ais-search-box placeholder='Start Typing the Name of the Office'>\n                                                        </ais-search-box>\n                                                </div>\n                                        </div>\n                </div>\n        </div>\n</ais-instantsearch>"

/***/ }),

/***/ "./src/app/offices/index/index.component.ts":
/*!**************************************************!*\
  !*** ./src/app/offices/index/index.component.ts ***!
  \**************************************************/
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
        window.location.href = './#/offices/' + submission.data.searchOffices + '/view';
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/offices/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/offices/index/index.component.css")]
        })
    ], IndexComponent);
    return IndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/offices/office-components/office-search/office-search.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/offices/office-components/office-search/office-search.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offices/office-components/office-search/office-search.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/offices/office-components/office-search/office-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  office-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/offices/office-components/office-search/office-search.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/offices/office-components/office-search/office-search.component.ts ***!
  \************************************************************************************/
/*! exports provided: OfficeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeSearchComponent", function() { return OfficeSearchComponent; });
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

var OfficeSearchComponent = /** @class */ (function () {
    function OfficeSearchComponent() {
    }
    OfficeSearchComponent.prototype.ngOnInit = function () {
    };
    OfficeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-search',
            template: __webpack_require__(/*! ./office-search.component.html */ "./src/app/offices/office-components/office-search/office-search.component.html"),
            styles: [__webpack_require__(/*! ./office-search.component.css */ "./src/app/offices/office-components/office-search/office-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OfficeSearchComponent);
    return OfficeSearchComponent;
}());



/***/ }),

/***/ "./src/app/offices/offices.module.ts":
/*!*******************************************!*\
  !*** ./src/app/offices/offices.module.ts ***!
  \*******************************************/
/*! exports provided: OfficesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesModule", function() { return OfficesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/offices/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/offices/view/view.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/offices/index/index.component.ts");
/* harmony import */ var _office_components_office_search_office_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./office-components/office-search/office-search.component */ "./src/app/offices/office-components/office-search/office-search.component.ts");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var OfficesModule = /** @class */ (function () {
    function OfficesModule() {
    }
    OfficesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__["FormioGrid"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_10__["NgAisModule"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                        data: {
                            title: 'Offices',
                            urls: [
                                { title: 'Home', url: '/home/maxprop' },
                                { title: 'Offices' }
                            ]
                        }
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
                                component: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"],
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
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _office_components_office_search_office_search_component__WEBPACK_IMPORTED_MODULE_9__["OfficeSearchComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'offices',
                        form: 'offices'
                    }
                }
            ]
        })
    ], OfficesModule);
    return OfficesModule;
}());



/***/ }),

/***/ "./src/app/offices/resource/resource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/offices/resource/resource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offices/resource/resource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/offices/resource/resource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fafafa;\" class=\"m-t-20\">\n  <ul class=\"nav nav-tabs\" style=\"margin-bottom: 25px; width:100%;\">\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i> </a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"view\"\n        routerLinkActive=\"active\">{{ service.resource?.data.officeName }}</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"office-agents\" routerLinkActive=\"active\"><i\n          class=\"fas fa-id-card-alt\"></i> Office Agents</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\"><i class=\"fas fa-edit\"></i>\n        Edit Office</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><i\n          class=\"fas fa-trash-alt\"></i></a></li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/offices/resource/resource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/offices/resource/resource.component.ts ***!
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
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/offices/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/offices/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/offices/view/view.component.css":
/*!*************************************************!*\
  !*** ./src/app/offices/view/view.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offices/view/view.component.html":
/*!**************************************************!*\
  !*** ./src/app/offices/view/view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"m-b-0\">{{ service.resource?.data.officeName }}</h4>\n        <hr />\n        <p *ngIf=\"service.resource?.data.aboutUs\">{{ service.resource?.data.aboutUs }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h3>Contact Details & Links:</h3>\n\n        <hr />\n        <small class=\"text-muted\">Office Number </small><br />\n        {{ service.resource?.data.officeNumber }}\n        <hr class=\"bg-light-success\" />\n        <small class=\"text-muted\">Office Email </small><br />\n        <a target=\"_blank\"\n          href=\"mailto:{{service.resource?.data.officeEmailAddressAddress}}\">{{ service.resource?.data.officeEmailAddressAddress }}</a>\n        <hr class=\"bg-light-success\" />\n        <small class=\"text-muted\">Office Address </small><br />\n        <a target=\"_blank\"\n          href=\"{{service.resource?.data.address.url}}\">{{ service.resource?.data.address.formatted_address }}</a>\n        <div *ngIf=\"service.resource?.data.officeEmailAddress\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Property24 Profile </small><br />\n          <a href=\"{{ service.resource?.data.officeEmailAddress }}\">{{ service.resource?.data.officeEmailAddress }}</a></div>\n        <div *ngIf=\"service.resource?.data.officeEmailAddress\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Private Property Profile </small><br />\n          <a href=\"{{ service.resource?.data.officeEmailAddress }}\">{{ service.resource?.data.officeEmailAddress }}</a></div>\n        <hr class=\"bg-light-success\" />\n        <i class=\"icon-Facebook icon-hero\"></i>\n        <small class=\"text-muted\">Website Link </small><br />\n        <a \n          href=\"https://www.maxprop.co.za/#/offices/{{ service.resource?._id }}\">Maxprop Website</a>\n        <div *ngIf=\"service.resource?.data.officeWebSite\">\n          <hr class=\"bg-light-success\" />\n        <small class=\"text-muted\">Office Landing Page </small><br />\n        <a\n          href=\"{{ service.resource?.data.officeWebSite }}\">{{ service.resource?.data.officeName }}</a>\n        </div>\n          <div *ngIf=\"service.resource?.data.facebookPage\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Facebook Page </small><br />\n          <a href=\"{{ service.resource?.data.officeEmailAddress }}\">{{ service.resource?.data.facebookPage }}</a></div>\n        <div *ngIf=\"service.resource?.data.twitter\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Twitter </small><br />\n          <a href=\"{{ service.resource?.data.twitterProfile }}\">{{ service.resource?.data.twitterProfile }}</a></div>\n        <div *ngIf=\"service.resource?.data.facebookPage\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">LinkedIn </small><br />\n          <a href=\"{{ service.resource?.data.officeEmailAddress }}\">{{ service.resource?.data.facebookPage }}</a></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <a href=\"/#/offices/{{ service.resource?._id }}/office-listings\" class=\"btn btn-block btn-rounded btn-warning\">View\n      {{ service.resource?.data.officeName }}'s Listings</a>\n    <div class=\"card bg-light-success no-card-border m-t-20\">\n      <div class=\"card-body\">\n        <div class=\"d-flex align-items-center text-center\">\n          <div *ngIf=\"service.resource?.data.hiddenDataTotalValue\" class=\"p-r-10 border-right border-light\"><small\n              class=\"text-muted\">Total Value on Market</small>\n            <h4>R{{ service.resource?.data.hiddenDataTotalValue | number }}</h4>\n          </div>\n          <div *ngIf=\"service.resource?.data.hiddenDataAvgPrice\" class=\"p-l-10\"><small class=\"text-muted\">Avg Value on\n              Market</small>\n            <h4>R{{ service.resource?.data.hiddenDataAvgPrice | number }}</h4>\n            {{ service.resource?.data.hiddenDataTotalListings | number }}\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/offices/view/view.component.ts":
/*!************************************************!*\
  !*** ./src/app/offices/view/view.component.ts ***!
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
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/offices/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/offices/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=offices-offices-module.js.map