(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-agent-module"],{

/***/ "./src/app/agent/agent-components/agent-feed/agent-feed.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/agent/agent-components/agent-feed/agent-feed.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/agent/agent-components/agent-feed/agent-feed.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/agent/agent-components/agent-feed/agent-feed.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ this.url }}\n\n<formio src=\"https://digitaloffice.form.io/listingcontact\" [submission]=\"this.url3\"></formio>"

/***/ }),

/***/ "./src/app/agent/agent-components/agent-feed/agent-feed.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/agent/agent-components/agent-feed/agent-feed.component.ts ***!
  \***************************************************************************/
/*! exports provided: AgentFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedComponent", function() { return AgentFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/auth */ "./node_modules/angular-formio/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgentFeedComponent = /** @class */ (function () {
    function AgentFeedComponent(activatedRoute, auth) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        console.log(this.activatedRoute);
    }
    AgentFeedComponent.prototype.ngOnInit = function () {
        this.url = '{\'data\':{\'listingId\':' + this.activatedRoute.snapshot.parent.url + '}}';
        this.url2 = this.activatedRoute.snapshot.parent.url['0'].path;
        var submission = {
            data: {
                listingId: this.url2
            }
        };
        this.url3 = submission;
    };
    AgentFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-feed',
            template: __webpack_require__(/*! ./agent-feed.component.html */ "./src/app/agent/agent-components/agent-feed/agent-feed.component.html"),
            styles: [__webpack_require__(/*! ./agent-feed.component.css */ "./src/app/agent/agent-components/agent-feed/agent-feed.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], angular_formio_auth__WEBPACK_IMPORTED_MODULE_2__["FormioAuthService"]])
    ], AgentFeedComponent);
    return AgentFeedComponent;
}());



/***/ }),

/***/ "./src/app/agent/agent.module.ts":
/*!***************************************!*\
  !*** ./src/app/agent/agent.module.ts ***!
  \***************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/agent/resource/resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/agent/index/index.component.ts");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ "./src/app/agent/view/view.component.ts");
/* harmony import */ var _agent_components_agent_feed_agent_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./agent-components/agent-feed/agent-feed.component */ "./src/app/agent/agent-components/agent-feed/agent-feed.component.ts");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_7__["FormioGrid"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_10__["NgAisModule"],
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
                            },
                            {
                                path: 'agent-marketing',
                                loadChildren: './agent-marketing/agent-marketing.module#AgentMarketingModule'
                            }
                        ]
                    },
                ])
            ],
            declarations: [_resource_resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"], _agent_components_agent_feed_agent_feed_component__WEBPACK_IMPORTED_MODULE_9__["AgentFeedComponent"]],
            providers: [
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useValue: {
                        name: 'agent',
                        form: 'agent'
                    }
                }
            ]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "./src/app/agent/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/agent/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/agent/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/agent/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ais-instantsearch [config]=\"{\n        apiKey: 'efe2e1f090c52825b9413451ca24f3b0',\n        appId: '5BBJ80MJOQ',\n        indexName: 'maxprop_Agents',\n        routing: true\n      }\">\n        <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"card bg-light\">\n                                <div class=\"card-body\">\n                                        <ais-search-box\n                                                placeholder='Who Are You Looking For?'>\n                                        </ais-search-box>\n                                </div>\n                        </div>\n                </div>\n        </div>\n        <div class=\"row m-t-20\">\n                <div class=\"col-md-7\">\n                        <ais-hits>\n                                <ng-template let-hits=\"hits\">\n                                        <div *ngFor=\"let hit of hits\">\n                                                <div class=\"card\">\n                                                        <div class=\"card-body text-center\">\n                                                                <div class=\"profile-pic m-b-20 m-t-20\"><img\n                                                                                alt=\"{{hit.name}}\"\n                                                                                class=\"rounded-circle\"\n                                                                                src=\"{{hit.photo}}\" width=\"150\">\n                                                                        <h4 class=\"m-t-20 m-b-0\">{{ hit.name }}</h4><a\n                                                                                href=\"mailto:danielkristeen@gmail.com\">\n                                                                                <h5>{{ hit.email }}</h5>\n                                                                        </a>\n                                                                        <h5 class=\"m-b-0\">{{ hit.mobile }}</h5>\n                                                                </div>\n                                                                <div class=\"badge badge-pill badge-light font-16\">\n                                                                        {{ hit.designation }}\n                                                                </div>\n                                                                <h6 class=\"m-b-0\">{{ hit.office }}</h6>\n                                                        </div>\n                                                        <div class=\"p-25 border-top m-t-15\">\n                                                                <div class=\"row text-center\">\n                                                                        <div class=\"col-6 border-right\"><a\n                                                                                        class=\"link d-flex align-items-center justify-content-center font-medium\"\n                                                                                        href=\"#\"><i\n                                                                                                class=\"mdi mdi-message font-20 m-r-5\"></i>Message</a>\n                                                                        </div>\n                                                                        <div class=\"col-6\"><a\n                                                                                        class=\"link d-flex align-items-center justify-content-center font-medium\"\n                                                                                        href=\"#\"><i\n                                                                                                class=\"mdi mdi-developer-board font-20 m-r-5\"></i>Listings</a>\n                                                                        </div>\n                                                                </div>\n                                                        </div>\n                                                </div>\n                                        </div>\n                                </ng-template>\n                        </ais-hits>\n                        <ais-pagination showLast=\"true\" showFirst=\"true\"></ais-pagination>\n                </div>\n                <div class=\"col-md-5\">\n                        <div class=\"card bg-light-info\">\n                                <div class=\"card-body\">\n                                        <h5 class=\"m-b-15\">Office</h5>\n                                        <ais-refinement-list attribute=\"office\" operator=\"or\" [limit]=\"10\"\n                                                [showMoreLimit]=\"15\" showMoreLabel=\"More\" showLessLabel=\"Less\"\n                                                [searchable]=\"true\">\n                                        </ais-refinement-list>\n                                </div>\n                        </div>\n                        <div class=\"card bg-light-info\">\n                                <div class=\"card-body\">\n                                        <h5 class=\"m-b-15\">Agents</h5>\n                                        <ais-refinement-list attribute=\"name\" operator=\"or\" [limit]=\"10\"\n                                                [showMoreLimit]=\"15\" showMoreLabel=\"More\" showLessLabel=\"Less\"\n                                                [searchable]=\"true\">\n                                        </ais-refinement-list>\n                                </div>\n                        </div>\n                </div>\n        </div>\n</ais-instantsearch>"

/***/ }),

/***/ "./src/app/agent/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/agent/index/index.component.ts ***!
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
    IndexComponent.prototype.onSubmit = function (submission) {
        console.log(submission);
        window.location.href = './#/agent/' + submission.data.searchAgent + '/view';
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/agent/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/agent/index/index.component.css")]
        })
    ], IndexComponent);
    return IndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/agent/resource/resource.component.css":
/*!*******************************************************!*\
  !*** ./src/app/agent/resource/resource.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/agent/resource/resource.component.html":
/*!********************************************************!*\
  !*** ./src/app/agent/resource/resource.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fafafa;\" class=\"m-t-20\">\n  <ul class=\"nav nav-tabs\" style=\"margin-bottom: 25px; width:100%;\">\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left\"></i> </a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\"><i class=\"icon-Preview\"></i>\n        Agent Overview</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"agent-marketing\" routerLinkActive=\"active\"><i class=\"icon-Preview\"></i>\n          Agent Marketing</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\"><i class=\"icon-Pen-2\"></i>\n        Edit</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><i\n          class=\"sl-icon-trash\"></i></a></li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/agent/resource/resource.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agent/resource/resource.component.ts ***!
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
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/agent/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/agent/resource/resource.component.css")]
        })
    ], ResourceComponent);
    return ResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/agent/view/view.component.css":
/*!***********************************************!*\
  !*** ./src/app/agent/view/view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/agent/view/view.component.html":
/*!************************************************!*\
  !*** ./src/app/agent/view/view.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <img class=\"m-b-15\" style=\"width:100%;\" [src]=\"service.resource?.data.profilePhoto['0']['url']\" />\n        <h4 class=\"m-b-0\">{{ service.resource?.data.fullName }}</h4>\n        <small class=\"text-muted\">{{ service.resource?.data.agentJobTitle }}</small>\n        <hr />\n        <p>{{ service.resource?.data.profile }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h3>Contact Details & Links:</h3>\n        <hr />\n        <i class=\"icon-Phone-SMS icon-hero\"></i>\n        <small class=\"text-muted\">Mobile Number </small><br />\n        {{ service.resource?.data.mobileNumber }} \n        <hr class=\"bg-light-success\" />\n        <i class=\"icon-Email icon-hero\"></i>\n        <small class=\"text-muted\">Email Address </small><br />\n        <a href=\"{{ service.resource?.data.email }}\">{{ service.resource?.data.email }}</a>\n        <div *ngIf=\"service.resource?.data.email\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Property24 Profile </small><br />\n          <a href=\"{{ service.resource?.data.email }}\">{{ service.resource?.data.email }}</a></div>\n        <div *ngIf=\"service.resource?.data.email\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Private Property Profile </small><br />\n          <a href=\"{{ service.resource?.data.email }}\">{{ service.resource?.data.email }}</a></div>\n        <hr class=\"bg-light-success\" />\n        <i class=\"icon-Facebook icon-hero\"></i>\n        <small class=\"text-muted\">Website Link </small><br />\n        <a\n          href=\"https://www.maxprop.co.za/agent/{{ service.resource?._id }}\">Maxprop Site</a>\n       <div *ngIf=\"service.resource?.data.profileLandingPageLink\">\n          <hr class=\"bg-light-success\" />\n        <small class=\"text-muted\">Personal Landing Page </small><br />\n        <a\n          href=\"{{ service.resource?.data.profileLandingPageLink }}\">{{ service.resource?.data.fullName }} Website</a>\n        </div>\n          <div *ngIf=\"service.resource?.data.facebook\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Facebook </small><br />\n          <a href=\"{{ service.resource?.data.email }}\">{{ service.resource?.data.facebook }}</a></div>\n        <div *ngIf=\"service.resource?.data.twitter\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">Twitter </small><br />\n          <a href=\"{{ service.resource?.data.email }}\">{{ service.resource?.data.twitter }}</a></div>\n        <div *ngIf=\"service.resource?.data.facebook\">\n          <hr class=\"bg-light-success\" />\n          <small class=\"text-muted\">LinkedIn </small><br />\n          <a href=\"{{ service.resource?.data.email }}\">{{ service.resource?.data.facebook }}</a></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <a href=\"/#/agent/{{ service.resource?._id }}/agent-listings\" class=\"btn btn-block btn-rounded btn-warning\">View\n      {{ service.resource?.data.firstName }}'s Listings</a>\n      <div class=\"card bg-light-success no-card-border m-t-20\">\n          <div class=\"card-body\">\n            <div class=\"d-flex align-items-center text-center\">\n              <div *ngIf=\"service.resource?.data.hiddenDataTotalValue\" class=\"p-r-10 border-right border-light\"><small class=\"text-muted\">Total Value on Market</small>\n                <h4>R{{ service.resource?.data.hiddenDataTotalValue | number }}</h4>\n              </div>\n              <div *ngIf=\"service.resource?.data.hiddenDataAvgPrice\" class=\"p-l-10\"><small class=\"text-muted\">Avg Value on Market</small>\n                <h4>R{{ service.resource?.data.hiddenDataAvgPrice | number }}</h4>{{ service.resource?.data.hiddenDataTotalListings | number }}\n              </div>\n            \n            </div>\n          </div>\n        </div>\n    <div class=\"card bg-light m-t-20\">\n      <div class=\"card-body\">\n        <small class=\"text-muted\">Office</small>\n        <h6><a\n            href=\"/#/offices/{{ service.resource?.data.offices._id }}\">{{ service.resource?.data.offices.data.officeName }}</a>\n        </h6>\n        <small class=\"text-muted\">Office Number </small><br />\n        {{ service.resource?.data.offices.data.officeNumber }}<br />\n        <small class=\"text-muted\">Office Email </small><br />\n        <a target=\"_blank\"\n          href=\"mailto:{{service.resource?.data.offices.data.officeEmailAddress}}\">{{ service.resource?.data.offices.data.officeEmailAddress }}</a><br />\n        <small class=\"text-muted\">Office Address </small><br />\n        <a target=\"_blank\"\n          href=\"{{service.resource?.data.offices.data.address.url}}\">{{ service.resource?.data.offices.data.address.formatted_address }}</a><br />\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/agent/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/agent/view/view.component.ts ***!
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
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/agent/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/agent/view/view.component.css")]
        })
    ], ViewComponent);
    return ViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=agent-agent-module.js.map