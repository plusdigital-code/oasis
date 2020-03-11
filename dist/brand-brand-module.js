(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-module"],{

/***/ "./src/app/brand/brand-routing.routing.ts":
/*!************************************************!*\
  !*** ./src/app/brand/brand-routing.routing.ts ***!
  \************************************************/
/*! exports provided: BrandRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandRoutes", function() { return BrandRoutes; });
/* harmony import */ var _social_media_policy_social_media_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-policy/social-media-policy.component */ "./src/app/brand/social-media-policy/social-media-policy.component.ts");
/* harmony import */ var _identity_identity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity/identity.component */ "./src/app/brand/identity/identity.component.ts");


var BrandRoutes = [
    {
        path: '',
        children: [
            {
                path: 'social-media-policy',
                component: _social_media_policy_social_media_policy_component__WEBPACK_IMPORTED_MODULE_0__["SocialMediaPolicyComponent"],
            },
            {
                path: 'identity',
                component: _identity_identity_component__WEBPACK_IMPORTED_MODULE_1__["IdentityComponent"],
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/brand/brand.module.ts":
/*!***************************************!*\
  !*** ./src/app/brand/brand.module.ts ***!
  \***************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_media_policy_social_media_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-media-policy/social-media-policy.component */ "./src/app/brand/social-media-policy/social-media-policy.component.ts");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var _brand_routing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-routing.routing */ "./src/app/brand/brand-routing.routing.ts");
/* harmony import */ var _identity_identity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identity/identity.component */ "./src/app/brand/identity/identity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    BrandModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_brand_routing_routing__WEBPACK_IMPORTED_MODULE_5__["BrandRoutes"]),
            ],
            declarations: [_social_media_policy_social_media_policy_component__WEBPACK_IMPORTED_MODULE_3__["SocialMediaPolicyComponent"], _identity_identity_component__WEBPACK_IMPORTED_MODULE_6__["IdentityComponent"]]
        })
    ], BrandModule);
    return BrandModule;
}());



/***/ }),

/***/ "./src/app/brand/identity/identity.component.css":
/*!*******************************************************!*\
  !*** ./src/app/brand/identity/identity.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brand/identity/identity.component.html":
/*!********************************************************!*\
  !*** ./src/app/brand/identity/identity.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 m-t-30\">\n          <h2 class=\"m-b-0\">The Maxprop Identity</h2>\n          <h4>Logo, Icons and Colours</h4>\n          <hr />\n      </div>\n</div>\n<!-- Row -->\n<div class=\"row\">\n<div class=\"col-12 m-t-30\">\n  <h4 class=\"m-b-0\">The Maxprop Logo</h4>\n  <p class=\"lead m-t-20 m-b-15\">The revised logo...\n  </p>\n</div>\n<div class=\"col-md-7\">\n  <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/Logo/Logo-New.png\" alt=\"Card image cap\">\n\n          <div class=\"card-body\">\n                  <h4 class=\"card-title\">Primary Logo Application</h4>\n                  <hr />\n                  <button class=\"btn btn-lg btn-primary btn-block m-t-20\" type=\"button\" href=\"assets/images/Logo/Logo-High-Res.jpg\"><i class=\"mdi mdi-cloud-download m-r-10\"></i> Download High-Resolution File</button>\n              </div>\n  </div>\n</div>\n<div class=\"col-md-4 offset-1\">\n  <div class=\"card\">\n      <img class=\"card-img-top img-responsive\" src=\"assets/images/Logo/Logo-Spacing.png\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n              <h4 class=\"card-title\">Logo spacing</h4>\n              <hr />\n<p>Always ensure that the logo application contains the correct spacing to the edges.</p>\n          </div>\n  </div>\n</div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n<div class=\"col-12 m-t-30\">\n  <h4 class=\"m-b-0\">Alternative Logo Variations</h4>\n  <p class=\"lead m-t-20 m-b-15\">The logo can be used in a varierty if different colours to best fit the context.</p>\n  <div class=\"card-group\">\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive border-bottom\" src=\"assets/images/Logo/black-white-small.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Black on White</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-10\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/Logo/Reversed-Small.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Yellow on Black</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-10\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/Logo/On-Black-Small.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">White on Black</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-10\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n<div class=\"col-12 m-t-30\">\n  <h4 class=\"m-b-0\">Icons</h4>\n  <p class=\"lead m-t-20 m-b-15\">In certain contexts, it's more appropriate to use an icon instead of the full logo. This would normally be the case when the presentation area is small and using the full logo would be make it illegible.</p>\n  <div class=\"card-group\">\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/icons/1-Logo-Icon.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Logo Icon</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-5\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/icons/2-Square-Social-Icon.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Square Social Icon</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-5\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/icons/3-Rounded-Square-Social-Icon.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Rounded Square</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-5\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n      <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"assets/images/icons/4-Circular-Social-Icon.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n              <h4 class=\"card-title\">Circular Social Icon</h4>\n              <hr />\n              <button class=\"btn btn-primary btn-block m-t-20\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-5\"></i> Download High-Resolution File</button>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n  <div class=\"col-12 m-t-30\">\n      <h4 class=\"m-b-0\">The Primary Maxprop Colour Palette</h4>\n      <p class=\"lead m-t-20 m-b-15\">The key colour codes when working with the Maxprop Brand.</p>\n      <div class=\"card-group\">\n          <div class=\"card\">\n              <img class=\"card-img-top img-responsive border-bottom\" src=\"assets/images/colours/Yellow.jpg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                  <h4 class=\"card-title\">Yellow</h4>\n              <p class=\"muted\">#FFFF00</p>    \n              </div>\n          </div>\n          <div class=\"card\">\n                  <img class=\"card-img-top img-responsive border-bottom\" src=\"assets/images/colours/White.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">White</h4>\n                      <p class=\"muted\">#FFFFFF</p>    \n                  </div>\n              </div>\n          <div class=\"card\">\n              <img class=\"card-img-top img-responsive border-bottom\" src=\"assets/images/colours/Black.jpg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                  <h4 class=\"card-title\">Black</h4>\n                  <p class=\"muted\">#000000</p>    \n              </div>\n          </div>\n         \n      </div>\n      <div class=\"card m-t-30\" style=\"background-color:#fcfcfc\">\n              <div class=\"card-body text-center\">\n              <p class=\"lead\" style=\"margin-bottom:0;\"><strong>Tip!</strong> When working with a printer, ask for the yellow to be 100% yellow.\n              </p>\n          </div>\n          </div>\n  </div>\n</div>\n<!-- End Row -->\n<!-- Row -->\n<div class=\"row\">\n  <div class=\"col-12 m-t-30\">\n      <h4 class=\"m-b-0\">Typography</h4>\n      <p class=\"lead m-t-20 m-b-15\"><strong>Proxima Nova</strong> - the typography used at Maxprop - is elegant, profesional and easy to use. <strong>Proxima Nova</strong> bridges the gap between typefaces like Futura and Akzidenz Grotesk. The result is a hybrid that combines modern proportions with a geometric appearance.</p>\n      <button class=\"btn btn-primary btn-rounded btn-large m-t-10 m-b-30\" type=\"button\"><i class=\"mdi mdi-cloud-download m-r-10\"></i> Download Proxima Nova Font Files</button>\n      <div class=\"card-group text-center\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                  <h1 class=\"card-title\" style=\"font-size: 6em;\">A a</h1> \n               </div>\n          </div>\n          <div class=\"card\">\n              <div class=\"card-body\">\n                      <h1 class=\"card-title\" style=\"font-size: 6em;\">B b</h1> \n               </div>\n          </div>\n          <div class=\"card\">\n              <div class=\"card-body\">\n                  <h1 class=\"card-title\" style=\"font-size: 6em;\">C c</h1>\n                </div>\n          </div>\n          <div class=\"card\">\n              <div class=\"card-body\">\n                  <h1 class=\"card-title\" style=\"font-size: 6em;\">D d</h1>\n               </div>\n          </div>\n          <div class=\"card\">\n                  <div class=\"card-body\">\n                      <h1 class=\"card-title\" style=\"font-size: 6em;\">E e</h1>\n                   </div>\n              </div>\n      </div>\n  </div>\n  <div class=\"col-12 m-t-30\">\n          <div class=\"card-group text-center\">\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                      <h1 class=\"card-title\" style=\"font-size: 6em;\">F f</h1> \n                   </div>\n              </div>\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                          <h1 class=\"card-title\" style=\"font-size: 6em;\">G g</h1> \n                   </div>\n              </div>\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                      <h1 class=\"card-title\" style=\"font-size: 6em;\">H h</h1>\n                    </div>\n              </div>\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                      <h1 class=\"card-title\" style=\"font-size: 6em;\">I i</h1>\n                   </div>\n              </div>\n              <div class=\"card\">\n                      <div class=\"card-body\">\n                          <h1 class=\"card-title\" style=\"font-size: 6em;\">J j</h1>\n                       </div>\n                  </div>\n          </div>\n      </div>\n      <div class=\"col-12 m-t-30\">\n              <div class=\"card-group text-center\">\n                  <div class=\"card\">\n                      <div class=\"card-body\">\n                          <h1 class=\"card-title\" style=\"font-size: 6em;\">k k</h1> \n                       </div>\n                  </div>\n                  <div class=\"card\">\n                      <div class=\"card-body\">\n                              <h1 class=\"card-title\" style=\"font-size: 6em;\">L l</h1> \n                       </div>\n                  </div>\n                  <div class=\"card\">\n                      <div class=\"card-body\">\n                          <h1 class=\"card-title\" style=\"font-size: 6em;\">M m</h1>\n                        </div>\n                  </div>\n                  <div class=\"card\">\n                      <div class=\"card-body\">\n                          <h1 class=\"card-title\" style=\"font-size: 6em;\">N n</h1>\n                       </div>\n                  </div>\n                  <div class=\"card\">\n                          <div class=\"card-body\">\n                              <h1 class=\"card-title\" style=\"font-size: 6em;\">O o</h1>\n                           </div>\n                      </div>\n              </div>\n          </div>\n          <div class=\"col-12 m-t-30\">\n                  <div class=\"card-group text-center\">\n                      <div class=\"card\">\n                          <div class=\"card-body\">\n                              <h1 class=\"card-title\" style=\"font-size: 6em;\">P p</h1> \n                           </div>\n                      </div>\n                      <div class=\"card\">\n                          <div class=\"card-body\">\n                                  <h1 class=\"card-title\" style=\"font-size: 6em;\">Q q</h1> \n                           </div>\n                      </div>\n                      <div class=\"card\">\n                          <div class=\"card-body\">\n                              <h1 class=\"card-title\" style=\"font-size: 6em;\">R r</h1>\n                            </div>\n                      </div>\n                      <div class=\"card\">\n                          <div class=\"card-body\">\n                              <h1 class=\"card-title\" style=\"font-size: 6em;\">S s</h1>\n                           </div>\n                      </div>\n                      <div class=\"card\">\n                              <div class=\"card-body\">\n                                  <h1 class=\"card-title\" style=\"font-size: 6em;\">T t</h1>\n                               </div>\n                          </div>\n                  </div>\n              </div>\n              <div class=\"col-12 m-t-30\">\n                      <div class=\"card-group text-center\">\n                          <div class=\"card\">\n                              <div class=\"card-body\">\n                                  <h1 class=\"card-title\" style=\"font-size: 6em;\">U u</h1> \n                               </div>\n                          </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\">\n                                      <h1 class=\"card-title\" style=\"font-size: 6em;\">V v</h1> \n                               </div>\n                          </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\">\n                                  <h1 class=\"card-title\" style=\"font-size: 6em;\">W w</h1>\n                                </div>\n                          </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\">\n                                  <h1 class=\"card-title\" style=\"font-size: 6em;\">X x</h1>\n                               </div>\n                          </div>\n                          <div class=\"card\">\n                                  <div class=\"card-body\">\n                                      <h1 class=\"card-title\" style=\"font-size: 6em;\">Y y</h1>\n                                   </div>\n                              </div>\n                      </div>\n                  </div>\n</div>\n<!-- End Row -->"

/***/ }),

/***/ "./src/app/brand/identity/identity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/brand/identity/identity.component.ts ***!
  \******************************************************/
/*! exports provided: IdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityComponent", function() { return IdentityComponent; });
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

var IdentityComponent = /** @class */ (function () {
    function IdentityComponent() {
    }
    IdentityComponent.prototype.ngOnInit = function () {
    };
    IdentityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-identity',
            template: __webpack_require__(/*! ./identity.component.html */ "./src/app/brand/identity/identity.component.html"),
            styles: [__webpack_require__(/*! ./identity.component.css */ "./src/app/brand/identity/identity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IdentityComponent);
    return IdentityComponent;
}());



/***/ }),

/***/ "./src/app/brand/social-media-policy/social-media-policy.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/brand/social-media-policy/social-media-policy.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brand/social-media-policy/social-media-policy.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/brand/social-media-policy/social-media-policy.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 m-t-30\">\n<h2>Maxprop Social Media Employee Guidelines</h2>\n<hr>\n\n<p class=\"lead\">As our personal and professional lives become blurred online, it is important to have a thorough understanding of how to participate on digital platforms in order to protect both yourself and Maxprop. </p>\n\n<p>The following document outlines guidelines that provide helpful and practical advice for conducting yourself online. It applies to all personnel. </p>\n\n<p>The Maxprop Group has the following official accounts, which we encourage you to ‘like’, ‘follow’ and ‘subscribe’ to:</p>\n\n<ul>\n<li><a href=\"https://www.fb.com/maxpropsa\" taget=\"_blank\">https://www.fb.com/maxpropsa</a></li>\n<li><a href=\"http://www.linkedin.com/company/Maxprop\" taget=\"_blank\">http://www.linkedin.com/company/Maxprop</a></li>\n<li><a href=\"http://www.twitter.com/Maxpropsa\" taget=\"_blank\">http://www.twitter.com/Maxpropsa</a></li>\n</ul>\n\n<p>In order to support and grow both your personal brand and the Maxprop brand online, we believe that all our employees should have the opportunity to actively engage and participate on social networks, while upholding the values that define Maxprop. </p>\n<hr class=\"m-t-25 m-b-25\">\n<h3 class=\"m-b-20\">The Do’s &amp; Don’ts of Social Media</h3>\n\n<p class=\"lead\">In the online space, there are several things that you need to do in order to look after your personal brand, as well as the reputation of Maxprop. </p>\n\n<ul>\n<li>Be consistent, relevant, interesting and yourself. Social media is a great channel for sharing stories that give your audience an insight into how you conduct business.</li>\n<li>Remember that others will associate you with Maxprop. It’s important to ensure the content you post and the words you use are consistent with how you want to present yourself to the Maxprop group and customers.</li>\n<li>Check your facts before sharing something.</li>\n<li>Provide value for your audience.</li>\n<li>Listen, monitor and participate in relevant conversations.</li>\n<li>Ask questions and learn about your network and the people around you on social media in order to build relationships.</li>\n<li>Be conversational.</li>\n<li>Understand that sharing your opinion about Maxprop on social media could damage the brand’s reputation as an unbiased source of news</li>\n</ul>\n\n<p>While the goal is to consistently strengthen one’s personal brand over time and build connections, the reverse is also possible. Do not do the following:</p>\n\n<ul>\n<li>Posting content that is threatening, abusive, defamatory, obscene, indecent, objectionable or offensive as well as fraudulent, deceptive or misleading</li>\n<li>Posting content that violates the intellectual property rights of another</li>\n<li>Posting content in anger</li>\n<li>Posting things that violate any law or regulation</li>\n<li>Posting comments containing sexually explicit or sexist content</li>\n<li>Attacking specific groups or posting comments meant to harass, threaten or abuse any individuals</li>\n<li>Sharing your opinion on contentious public issues relating to Maxprop, unless you are an official Maxprop spokesperson</li>\n</ul>\n<hr class=\"m-t-25 m-b-25\">\n<h3 class=\"m-b-20\">The Maxprop Rules of Engagement</h3>\n\n<p>It’s important to follow the Maxprop Rules of engagement. This is relevant to:</p>\n\n<ul>\n<li>Maxprop employees</li>\n<li>Those communicating as Maxprop</li>\n<li>Official representatives or spokespeople.</li>\n</ul>\n\n<p>This will ensure that our social media content is consistent and that problems are avoided.</p>\n\n<p class=\"font-weight-bold\">Integrity</p>\n\n<p>Make sure that you use reasonable etiquette, the same as you would in an offline environment. Your honesty (and dishonesty) will be noticed in the social media environment. Please represent both yourself and Maxprop ethically and with integrity. </p>\n\n<p class=\"font-weight-bold\">Identify Yourself</p>\n\n<p>We need to ensure that content associated with Maxprop is consistent with the Maxprop brand and company policies. If you are engaging with audiences about Maxprop, be transparent and identify that you work for the company, and be clear about your role.</p>\n\n<p class=\"font-weight-bold\">Be Honest</p>\n\n<p>Always be honest and make sure that what you’re saying is factually correct and not misleading in any way. Ensure it doesn’t violate any legal guidelines that prohibit revealing sensitive, confidential or other information that could harm Maxprop’s reputation. Maxprop has zero tolerance staff who leak information which poses a risk to Maxprop in anyway. </p>\n\n<p>Don't talk negatively about Maxprop or any of our competitors. Refrain from speculating on anything Maxprop has not officially announced, even if a customer or the media push you for a personal opinion. </p>\n\n<p class=\"font-weight-bold\">Watch Your Words</p>\n\n<p>What you say online is a permanent record. If you wouldn’t want your post displayed as a headline in tomorrow's paper, chances are you shouldn’t be saying it online. </p>\n\n<p class=\"font-weight-bold\">Show Restraint</p>\n\n<p>Before you post anything, pause and reread. If you wouldn’t want that particular thought or contribution forever associated with your name, don’t post it. It’s important to think about the consequences with regards to content that you publish on social media platforms. </p>\n<hr class=\"m-t-25 m-b-25\">\n<h3 class=\"m-b-20\">Frequently Asked Questions</h3>\n\n<p class=\"font-weight-bold\">Who needs to follow the above guidelines?</p>\n\n<p>All employees and contractors of Maxprop. If you are unsure of how they apply to you in your day-to-day job, please contact Maxprop Digital. </p>\n\n<p class=\"font-weight-bold\">What happens if people are misrepresenting facts about Maxprop on social media? May I correct the facts?</p>\n\n<p>If you see negative or false comments about the company online, please contact Maxprop Digital through Nicole at franchises@maxprop.co.za who will then advise you on the next steps. </p>\n\n<p>Please do not engage with journalists or members of the public in situations such as this. </p>\n\n<p class=\"font-weight-bold\">When I create accounts on social media, do I have to identify myself as a Maxprop employee?</p>\n\n<ul>\n<li>You must disclose that you work at (or with) Maxprop if you plan to use the social media profile for any of the following:</li>\n<li>As a sales/customer acquisition channel for Maxprop related business</li>\n<li>Intend to talk about Maxprop related matters</li>\n<li>If you use your @maxprop.co.za/@maxprop.solutions email address in the registration process (we recommend that you use your personal email address for social media account creation)</li>\n</ul>\n\n<p>Remember, even if you don’t identify yourself as a Maxprop employee, you can still be linked to the company via other means and therefore will always need to conduct yourself according the guidelines outlined above. </p>\n\n<p class=\"font-weight-bold\">Should I register social media accounts on behalf of my business unit?</p>\n\n<p>Maxprop employees should not register accounts on behalf of Maxprop business units unless they have been given permission to do so by Maxprop Digital. </p>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/brand/social-media-policy/social-media-policy.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/brand/social-media-policy/social-media-policy.component.ts ***!
  \****************************************************************************/
/*! exports provided: SocialMediaPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaPolicyComponent", function() { return SocialMediaPolicyComponent; });
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

var SocialMediaPolicyComponent = /** @class */ (function () {
    function SocialMediaPolicyComponent() {
    }
    SocialMediaPolicyComponent.prototype.ngOnInit = function () {
    };
    SocialMediaPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-media-policy',
            template: __webpack_require__(/*! ./social-media-policy.component.html */ "./src/app/brand/social-media-policy/social-media-policy.component.html"),
            styles: [__webpack_require__(/*! ./social-media-policy.component.css */ "./src/app/brand/social-media-policy/social-media-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialMediaPolicyComponent);
    return SocialMediaPolicyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=brand-brand-module.js.map