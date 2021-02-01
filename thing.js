"use strict";
var __decorate = this && this.__decorate || function(e, t, i, o) {
    var n, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, i, o);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, i, a) : n(t, i)) || a);
    return r > 3 && a && Object.defineProperty(t, i, a),
    a
}
, __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(e, t) {
        e.__proto__ = t
    }
    || function(e, t) {
        for (var i in t)
            t.hasOwnProperty(i) && (e[i] = t[i])
    }
    ;
    return function(t, i) {
        function o() {
            this.constructor = t
        }
        e(t, i),
        t.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype,
        new o)
    }
}(), QdbdApp;
!function(e) {
    function t(e, t, i, o, n, r, a, s) {
        function c() {
            return (!_.includes(window.location.host, "localhost") ? "https" : "http") + "://" + a.webApi.host + "/api/v1"
        }
        a.buildVersion && console.log && console.log(a.buildVersion),
        e.interceptors.push("httpRequestInterceptorFactory"),
        i.hashPrefix(""),
        s.setPrefix("QdbdApp"),
        t.state("root", {
            abstract: !0,
            views: {
                header: {
                    template: "<dt-header></dt-header>"
                },
                layout: {}
            }
        }).state("root.standard", {
            abstract: !0,
            views: {
                "layout@": {
                    templateUrl: "cache/common/layouts/standard.html"
                }
            }
        }).state("root.standardPadded", {
            abstract: !0,
            views: {
                "layout@": {
                    templateUrl: "cache/common/layouts/standard-padded.html"
                }
            }
        }).state("root.standardShrinkable", {
            abstract: !0,
            views: {
                "layout@": {
                    templateUrl: "cache/common/layouts/standard-shrinkable.html"
                }
            }
        }).state("root.centered", {
            abstract: !0,
            views: {
                "layout@": {
                    templateUrl: "cache/common/layouts/centered.html"
                }
            }
        }),
        o.deferIntercept(),
        o.otherwise("/"),
        r.baseUrl = c() + "/account/",
        r.loginUrl = "/login",
        r.tokenName = "access_token",
        r.google({
            clientId: a.socialAuth.google.clientId,
            url: "/google"
        }),
        r.live({
            clientId: a.socialAuth.live.clientId,
            url: "/live"
        }),
        r.twitter({
            clientId: a.socialAuth.twitter.clientId,
            url: "/twitter"
        }),
        r.github({
            clientId: a.socialAuth.github.clientId,
            url: "/github"
        }),
        n.definePalette("qdbdPalette", {
            50: "#b6c1cb",
            100: "#8a9aab",
            200: "#697e93",
            300: "#4b5b6a",
            400: "#3f4b58",
            500: "#323c46",
            600: "#252d34",
            700: "#181d22",
            800: "#0c0e10",
            900: "#000000",
            A100: "#b6c1cb",
            A200: "#8a9aab",
            A400: "#3f4b58",
            A700: "#181d22",
            contrastDefaultColor: "light",
            contrastDarkColors: ["50", "100", "200", "300", "400", "A100"],
            contrastLightColors: void 0
        }),
        n.theme("default").primaryPalette("qdbdPalette"),
        n.theme("warning"),
        n.theme("error")
    }
    function i(e, t, i, o) {
        function n() {
            e.sync(),
            e.listen()
        }
        i.resolveCurrentUser().then(n, n),
        t.addEventListener("load", function() {
            t.cookieconsent && t.cookieconsent.initialise({
                palette: {
                    popup: {
                        background: "#282d32",
                        text: "#c9cccf"
                    },
                    button: {
                        background: "#1e5ba2"
                    }
                },
                position: "bottom-left",
                content: {
                    href: "https://www.quickdatabasediagrams.com/privacy-and-security.html"
                },
                cookie: {
                    domain: o.webApp.cookieConsentDomain
                }
            })
        })
    }
    t.$inject = ["$httpProvider", "$stateProvider", "$locationProvider", "$urlRouterProvider", "$mdThemingProvider", "$authProvider", "AppConfig", "localStorageServiceProvider"],
    i.$inject = ["$urlRouter", "$window", "AccountService", "AppConfig"],
    angular.module("QdbdApp", ["ngCookies", "ngSanitize", "ngMessages", "ngFileSaver", "LocalStorageModule", "ui.router", "ngMaterial", "ui.ace", "satellizer", "html5DragDrop", "angular-loading-bar", "QdbdApp.Common", "QdbdApp.MessageScreen", "QdbdApp.Home", "QdbdApp.Schema", "QdbdApp.Login", "QdbdApp.Register", "QdbdApp.User", "QdbdApp.Subscription", "QdbdApp.Admin", "QdbdApp.Voucher", "QdbdApp.Collaborators"]).config(t).run(i)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    e.Component = function(e, t, i) {
        return function(o) {
            ("string" == typeof e ? angular.module(e) : e).component(t, angular.extend(i, {
                controller: o
            }))
        }
    }
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    e.Controller = function(e, t) {
        return function(i) {
            ("string" == typeof e ? angular.module(e) : e).controller(t, i)
        }
    }
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    e.Service = function(e, t) {
        return function(i) {
            ("string" == typeof e ? angular.module(e) : e).service(t, i)
        }
    }
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Common", []);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Admin", []).config(["$stateProvider", function(e) {
    e.state("root.standard.admin", {
        url: "/admin",
        views: {
            "main-content": {
                templateUrl: "cache/modules/admin/admin.html"
            },
            "context-menu@root": {
                template: "Administration"
            }
        }
    }).state("root.standard.admin.userList", {
        url: "/users?page&pageSize&sortBy&search&sortOperator",
        views: {
            "admin-content": {
                template: "<dt-user-list filter='AdminVM.usersFilter'></dt-user-list>"
            }
        },
        data: {
            title: "Administration - Users"
        },
        params: {
            page: {
                dynamic: !0
            },
            pageSize: {
                dynamic: !0
            },
            sortBy: {
                dynamic: !0
            },
            search: {
                dynamic: !0
            },
            sortOperator: {
                dynamic: !0
            }
        }
    }).state("root.standard.admin.diagramList", {
        url: "/schemas?page&pageSize&sortBy&search&sortOperator",
        views: {
            "admin-content": {
                template: "<dt-schema-list filter='AdminVM.schemasFilter'></dt-schema-list>"
            }
        },
        data: {
            title: "Administration - Schemas"
        },
        params: {
            page: {
                dynamic: !0
            },
            pageSize: {
                dynamic: !0
            },
            sortBy: {
                dynamic: !0
            },
            search: {
                dynamic: !0
            },
            sortOperator: {
                dynamic: !0
            }
        }
    }).state("root.standard.admin.vouchersList", {
        url: "/vouchers?page&pageSize&sortBy&search&sortOperator",
        views: {
            "admin-content": {
                template: "<dt-voucher-list filter='AdminVM.voucherFilter'></dt-voucher-list>"
            }
        },
        data: {
            title: "Administration - Voucher"
        },
        params: {
            page: {
                dynamic: !0
            },
            pageSize: {
                dynamic: !0
            },
            sortBy: {
                dynamic: !0
            },
            search: {
                dynamic: !0
            },
            sortOperator: {
                dynamic: !0
            }
        }
    }).state("root.standard.admin.voucher", {
        url: "/voucher",
        views: {
            "admin-content": {
                templateUrl: "cache/modules/voucher/voucher.html"
            }
        },
        data: {
            title: "Administration - Voucher"
        },
        params: {
            voucher: null
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Collaborators", []);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.DiagramRenderer", []);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Home", ["QdbdApp.SourceEditor", "QdbdApp.SchemaDir", "QdbdApp.DiagramRenderer"]).config(["$stateProvider", function(e) {
    e.state("root.standardShrinkable.home", {
        url: "/",
        views: {
            "main-content": {
                templateUrl: "cache/modules/home/home.html"
            },
            "context-menu@root": {
                template: "<dt-source-editor-menu></dt-source-editor-menu>"
            }
        },
        data: {
            usesCustomPageTitleHandler: !0
        }
    }).state("root.standardShrinkable.diagram", {
        url: "/d/:shortcode?",
        views: {
            "main-content": {
                templateUrl: "cache/modules/home/home.html"
            },
            "context-menu@root": {
                template: "<dt-source-editor-menu></dt-source-editor-menu>"
            }
        },
        data: {
            usesCustomPageTitleHandler: !0
        }
    }).state("root.standardShrinkable.schema", {
        url: "/schema/:shortcode?",
        views: {
            "main-content": {
                templateUrl: "cache/modules/home/home.html"
            },
            "context-menu@root": {
                template: "<dt-source-editor-menu></dt-source-editor-menu>"
            }
        },
        data: {
            usesCustomPageTitleHandler: !0
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Login", []).config(["$stateProvider", function(e) {
    e.state("root.centered.login", {
        url: "/sign-in",
        views: {
            "main-content": {
                templateUrl: "cache/modules/login/login.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !0,
            title: "Login"
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.MessageScreen", []).config(["$stateProvider", function(e) {
    e.state("root.centered.successMessage", {
        url: "/success",
        views: {
            "main-content": {
                templateUrl: "cache/modules/message-screen/message-screen.html"
            }
        }
    }).state("root.centered.errorMessage", {
        url: "/error",
        views: {
            "main-content": {
                templateUrl: "cache/modules/message-screen/message-screen.html"
            }
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Register", []).config(["$stateProvider", function(e) {
    e.state("root.centered.register", {
        url: "/sign-up",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/register.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !0,
            title: "Register"
        }
    }).state("root.centered.setEmail", {
        url: "/set-email",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/set-email.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !0,
            title: "Set Email"
        }
    }).state("root.centered.confirmEmail", {
        url: "/confirm-email/:userId/{token:any}",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/confirm-email.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !0,
            title: "Confirm Email"
        }
    }).state("root.centered.forgotPassword", {
        url: "/forgot-password",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/forgot-password.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !0,
            title: "Forgot Password?"
        }
    }).state("root.centered.changePassword", {
        url: "/change-password",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/change-password.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !1,
            title: "Change Password"
        }
    }).state("root.centered.resetPassword", {
        url: "/reset-password/:userId/{token:any}",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/reset-password.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !1,
            title: "Reset Password"
        }
    }).state("root.centered.changeEmail", {
        url: "/change-email",
        views: {
            "main-content": {
                templateUrl: "cache/modules/register/change-email.html"
            }
        },
        data: {
            isAnonymousOnlyRoute: !1,
            title: "Change E-mail"
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.SchemaDir", []);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Schema", []);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.SourceEditor", []);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Subscription", []).config(["$stateProvider", function(e) {
    e.state("root.centered.subscribe", {
        url: "/subscribe",
        views: {
            "main-content": {
                templateUrl: "cache/modules/subscription/subscribe.html"
            }
        },
        data: {
            title: "Subscribe"
        }
    }).state("root.centered.billingDetails", {
        url: "/billing-details",
        views: {
            "main-content": {
                templateUrl: "cache/modules/subscription/billing-details.html"
            }
        },
        data: {
            title: "Billing Details"
        }
    }).state("root.centered.checkout", {
        url: "/checkout",
        views: {
            "main-content": {
                templateUrl: "cache/modules/subscription/checkout.html"
            }
        },
        data: {
            title: "Checkout"
        }
    }).state("root.centered.voucher", {
        url: "/voucher/:voucherCode",
        views: {
            "main-content": {
                templateUrl: "cache/modules/subscription/subscribe.html"
            }
        },
        data: {
            title: "Voucher"
        }
    }).state("root.centered.discount", {
        url: "/discount/:discountCode",
        views: {
            "main-content": {
                templateUrl: "cache/modules/subscription/subscribe.html"
            }
        },
        data: {
            title: "Discount"
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.User", []).config(["$stateProvider", function(e) {
    e.state("root.standard.user", {
        url: "/user",
        views: {
            "main-content": {
                templateUrl: "cache/modules/user/user.html"
            },
            "context-menu@root": {
                template: "User"
            }
        }
    }).state("root.standard.user.profile", {
        url: "/:userId/profile",
        views: {
            "user-content": {
                templateUrl: "cache/modules/user/profile.html"
            }
        },
        data: {
            title: "Profile"
        }
    }).state("root.standard.user.diagrams", {
        url: "/:userId/diagrams?page&pageSize&ownerId&sortBy&search&sortOperator",
        views: {
            "user-content": {
                template: "<dt-user-diagrams filter='UserVM.filter'></dt-user-diagrams>"
            }
        },
        data: {
            title: "Diagrams"
        },
        params: {
            page: {
                dynamic: !0
            },
            pageSize: {
                dynamic: !0
            },
            ownerId: {
                dynamic: !0
            },
            sortBy: {
                dynamic: !0
            },
            search: {
                dynamic: !0
            },
            sortOperator: {
                dynamic: !0
            }
        }
    }).state("root.standard.user.payments", {
        url: "/:userId/payments",
        views: {
            "user-content": {
                template: "<dt-user-payments user-id='UserVM.userId'></dt-user-payments>"
            }
        },
        data: {
            title: "Payments"
        }
    })
}
]);
var QdbdApp;
QdbdApp || (QdbdApp = {}),
angular.module("QdbdApp.Voucher", []);
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$mdDialog = e,
            this.SidenavService = t,
            this.TrackingService = i
        }
        t.$inject = ["$mdDialog", "SidenavService", "TrackingService"],
        t.prototype.closeSidebar = function() {
            this.SidenavService.toggleRightSidenav()
        }
        ,
        t.prototype.loadDocsSection = function(e) {
            this.trackDocumentation(e),
            this.docsSection = e
        }
        ,
        t.prototype.trackDocumentation = function(e) {
            this.TrackingService.trackDocumetation(e.toUpperCase())
        }
        ,
        t.prototype.closeDocsSection = function() {
            this.docsSection = void 0
        }
        ,
        t.prototype.flipSupportChat = function() {
            this.TrackingService.flipSupportChat(),
            this.closeSidebar()
        }
        ,
        t = __decorate([e.Component("QdbdApp.Common", "dtDocs", {
            templateUrl: "cache/common/components/dt-docs/dt-docs.html",
            controllerAs: "DtDocsVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$rootScope = e,
            this.AccountService = t,
            this.TrackingService = i
        }
        t.$inject = ["$rootScope", "AccountService", "TrackingService"],
        t.prototype.logout = function() {
            this.AccountService.logout()
        }
        ,
        t.prototype.shareSchema = function() {
            this.$rootScope.$broadcast("schema-share")
        }
        ,
        t.prototype.trackAccount = function() {
            this.TrackingService.trackAccount("Main")
        }
        ,
        t = __decorate([e.Component("QdbdApp.Common", "dtHeader", {
            templateUrl: "cache/common/components/dt-header/dt-header.html",
            controllerAs: "DtHeaderVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e) {
            this.$mdDialog = e
        }
        t.$inject = ["$mdDialog"],
        t.prototype.closeDialog = function() {
            this.$mdDialog.cancel()
        }
        ,
        t = __decorate([e.Component("QdbdApp.Common", "dtLoginRequired", {
            templateUrl: "cache/common/components/dt-login-required/dt-login-required.html",
            controllerAs: "DtLoginRequiredVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t() {}
        t = __decorate([e.Component("QdbdApp.Common", "dtNoItems", {
            bindings: {
                collection: "="
            },
            template: '\n      <div class="no-content">\n        <span ng-if="!DtNoItemsVM.collection.items">Loading, please wait...</span>\n        <span ng-if="DtNoItemsVM.collection.items.length === 0">No items to display.</span>\n      </div>\n    ',
            controllerAs: "DtNoItemsVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t() {}
        t = __decorate([e.Component("QdbdApp.Common", "dtPager", {
            bindings: {
                filter: "=",
                collection: "=",
                pager: "="
            },
            templateUrl: "cache/common/components/dt-pager/dt-pager.html",
            controllerAs: "DtPagerVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r) {
            var a = this;
            this.$rootScope = e,
            this.$transitions = t,
            this.RoutingService = i,
            this.SchemaDirService = o,
            this.TrackingService = n,
            this.SharingService = r,
            this.dirTreeState = this.SchemaDirService.dirTreeState,
            this.resolveButtonVisibility(),
            this.$transitions.onSuccess({}, function() {
                a.resolveButtonVisibility()
            })
        }
        t.$inject = ["$rootScope", "$transitions", "RoutingService", "SchemaDirService", "TrackingService", "SharingService"],
        t.prototype.showFile = function() {
            this.SchemaDirService.closeDirTree()
        }
        ,
        t.prototype.openDirTree = function() {
            this.SchemaDirService.openDirTree()
        }
        ,
        t.prototype.resolveButtonVisibility = function() {
            this.toolbarVisibility = this.toolbarVisibility || {};
            var e = ["root.standardShrinkable.home", "root.standardShrinkable.diagram"];
            this.toolbarVisibility.isDiagramRoute = this.RoutingService.stateIncludes(e)
        }
        ,
        t.prototype.flipSupportChat = function() {
            this.TrackingService.flipSupportChat()
        }
        ,
        t.prototype.shareLink = function() {
            this.$rootScope.$broadcast("schema-share")
        }
        ,
        t.prototype.socialShare = function(e) {
            this.SharingService.share(e)
        }
        ,
        t = __decorate([e.Component("QdbdApp.Common", "dtSideToolbar", {
            templateUrl: "cache/common/components/dt-side-toolbar/dt-side-toolbar.html",
            controllerAs: "DtSideToolbarVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t() {}
        t = __decorate([e.Component("QdbdApp.Common", "dtSortableHeading", {
            bindings: {
                filter: "=",
                pager: "=",
                name: "@",
                sortBy: "@"
            },
            templateUrl: "cache/common/components/dt-sortable-heading/dt-sortable-heading.html",
            controllerAs: "DtSortableHeadingVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t) {
            this.$mdDialog = e,
            this.$state = t
        }
        t.$inject = ["$mdDialog", "$state"],
        t.prototype.subscribe = function() {
            this.$state.go("root.centered.subscribe"),
            this.closeDialog()
        }
        ,
        t.prototype.closeDialog = function() {
            this.$mdDialog.cancel()
        }
        ,
        t = __decorate([e.Component("QdbdApp.Common", "dtSubscriptionRequired", {
            bindings: {
                customMessage: "@"
            },
            templateUrl: "cache/common/components/dt-subscription-required/dt-subscription-required.html",
            controllerAs: "DtSubscriptionRequiredVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e) {
            this.$scope = e,
            this.registerWatcher()
        }
        t.$inject = ["$scope"],
        t.prototype.registerWatcher = function() {
            this.$scope.$watch("DtValidationSummaryVM.model.modelState", this.initializeValidationSummary.bind(this))
        }
        ,
        t.prototype.initializeValidationSummary = function() {
            var e = this;
            this.summaryMessages = [],
            _.each(this.model.modelState, function(t, i) {
                "" === i && (e.summaryMessages = _.union(e.summaryMessages, t))
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.Common", "dtValidationSummary", {
            bindings: {
                model: "="
            },
            templateUrl: "cache/common/components/dt-validation-summary/dt-validation-summary.html",
            controllerAs: "DtValidationSummaryVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "Default", {
            get: function() {
                return {
                    sharing: {
                        defaultImage: "https://www.quickdatabasediagrams.com/assets/images/logo.svg",
                        providers: {
                            twitter: "https://twitter.com/intent/tweet?text=",
                            google: "https://plus.google.com/share?url=",
                            linkedin: "http://www.linkedin.com/shareArticle?mini=true&url="
                        }
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    e.AppConfigShared = t,
    angular.module("QdbdApp.Common").constant("AppConfigShared", t.Default)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "Default", {
            get: function() {
                return {
                    webApp: {
                        host: "app.quickdatabasediagrams.com",
                        cookieConsentDomain: ".quickdatabasediagrams.com"
                    },
                    webApi: {
                        host: "api.quickdatabasediagrams.com"
                    },
                    buildVersion: "v1.2.7.77",
                    intercom: {
                        appId: "m0fu80bu"
                    },
                    socialAuth: {
                        google: {
                            clientId: "979186999325-dldbn1cko23gfl33m08bfh9l0h7t3a0j.apps.googleusercontent.com"
                        },
                        twitter: {
                            clientId: "hIUo9TtKufGpNwfMPXjPIGjej"
                        },
                        github: {
                            clientId: "0855e2d885d04ff78c22"
                        },
                        live: {
                            clientId: "c568f0b6-87ca-4e1c-a646-ee4f75e930f9"
                        }
                    },
                    firebase: {
                        apiKey: "AIzaSyDAv61hXgFhV69MURFEfXFTzC-EAeOnToE",
                        databaseURL: "https://quickdbd.firebaseio.com"
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    e.AppConfigRelease = t,
    angular.module("QdbdApp.Common").constant("AppConfig", t.Default)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "Default", {
            get: function() {
                return {
                    schemaSections: ["tables", "settings", "layout"],
                    aliasSchemaSections: {
                        rels: "relationships"
                    },
                    allowedRelTypes: [{
                        caption: "One-TO-one",
                        symbol: "-"
                    }, {
                        caption: "One-TO-many",
                        symbol: "-<"
                    }, {
                        caption: "Many-TO-one",
                        symbol: ">-"
                    }, {
                        caption: "Many-TO-many",
                        symbol: ">-<"
                    }, {
                        caption: "One-TO-zero-or-one",
                        symbol: "-0"
                    }, {
                        caption: "Zero-or-one-TO-one",
                        symbol: "0-"
                    }, {
                        caption: "Zero-or-one-TO-zero-or-one",
                        symbol: "0-0"
                    }, {
                        caption: "One-TO-zero-or-many",
                        symbol: "-0<"
                    }, {
                        caption: "Zero-or-many-TO-one",
                        symbol: ">0-"
                    }],
                    tableSeparator: "-"
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    e.QdbdParserConfig = t,
    angular.module("QdbdApp.Common").constant("QdbdParserConfig", t.Default)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        return function() {}
    }();
    e.Map = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    function t(e, t) {
        return _.extend(e, {
            restrict: "E",
            scope: {
                model: "=",
                rootModel: "=",
                disable: "=",
                showExtraValidation: "=",
                collectionName: "@",
                propertyName: "@",
                inputType: "@",
                label: "@",
                icon: "@",
                focusOn: "@",
                minDate: "="
            },
            controller: t || i
        })
    }
    var i = function() {
        function e(e, t, i) {
            this.$scope = e,
            this.AccountService = t,
            this.ModelStateService = i,
            this.modelStatePropertyName = this.ModelStateService.getModelStatePropertyName(e);
            var o = "model." + this.$scope.propertyName;
            this.$scope.validationMessage = "",
            this.$scope.onFieldClicked = this.onFieldClicked.bind(this),
            this.$scope.$watch(o, this.onWatchedItemChanged.bind(this)),
            this.$scope.$watch("model.modelState", this.onModelStateChanged.bind(this)),
            this.$scope.$watch("rootModel.modelState", this.onModelStateChanged.bind(this))
        }
        return e.$inject = ["$scope", "AccountService", "ModelStateService"],
        e.prototype.onWatchedItemChanged = function(e, t, i) {
            e !== t && (e || t) && (this.ModelStateService.resetPropertyModelState(this.modelStatePropertyName, this.getModelState()),
            this.$scope.validationMessage = "")
        }
        ,
        e.prototype.onFieldClicked = function() {}
        ,
        e.prototype.onModelStateChanged = function() {
            this.$scope.validationMessage = this.ModelStateService.findModelStateMessage(this.modelStatePropertyName, this.getModelState())
        }
        ,
        e.prototype.getModelState = function() {
            return this.$scope.rootModel ? this.$scope.rootModel.modelState : this.$scope.model.modelState
        }
        ,
        e
    }();
    e.DtInputCtrl = i;
    var o = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.onFieldClicked = function() {
            var e = this.$scope.model[this.$scope.propertyName];
            this.$scope.passwordValidation = this.AccountService.validatePassword(e || "")
        }
        ,
        t.prototype.onWatchedItemChanged = function(t, i) {
            t !== i && (t || i) && (e.prototype.onWatchedItemChanged.call(this, t, i, void 0),
            this.$scope.passwordValidation = this.AccountService.validatePassword(t))
        }
        ,
        t
    }(i);
    e.DtInputPasswordCtrl = o,
    angular.module("QdbdApp.Common").directive("dtInputText", function() {
        return t({
            templateUrl: "cache/common/directives/dt-form-elements/dt-input-text.html"
        })
    }).directive("dtInputTextI", function() {
        return t({
            templateUrl: "cache/common/directives/dt-form-elements/dt-input-text-i.html"
        })
    }).directive("dtInputTextarea", function() {
        return t({
            templateUrl: "cache/common/directives/dt-form-elements/dt-input-textarea.html"
        })
    }).directive("dtInputPassword", function() {
        return t({
            templateUrl: "cache/common/directives/dt-form-elements/dt-input-password.html"
        }, o)
    }).directive("noFloat", function() {
        return {
            restrict: "A",
            link: function(e, t, i, o) {
                t.on("keydown", function(e) {
                    return !([110, 190].indexOf(e.which) > -1 && (e.preventDefault(),
                    1))
                })
            }
        }
    })
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t() {}
        return t.prototype.getModelStatePropertyName = function(e) {
            var t = ["model"];
            if (e.collectionName) {
                var i = this.capitalizeFirstLetter(e.collectionName) + "[" + e.model.id + "]";
                t.push(i)
            }
            var o = this.capitalizeFirstLetter(e.propertyName);
            return t.push(o),
            t.join(".")
        }
        ,
        t.prototype.findModelStateMessage = function(e, t) {
            var i = this.findModelStateKey(e, t);
            return i && t[i] ? t[i][0] : ""
        }
        ,
        t.prototype.resetPropertyModelState = function(e, t) {
            var i = this.findModelStateKey(e, t);
            i && (t[i] = void 0)
        }
        ,
        t.prototype.capitalizeFirstLetter = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        ,
        t.prototype.findModelStateKey = function(e, t) {
            for (var i in t)
                if (i && i.indexOf(e) > -1)
                    return i;
            return ""
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "ModelStateService")], t)
    }();
    e.ModelStateService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    function t(e) {
        return function(t) {
            if (t) {
                var i = t.split("-")
                  , o = /Mac OS X/.test(e.navigator.userAgent)
                  , n = !o || i.length > 2 ? "+" : ""
                  , r = {
                    M: o ? "?" : "Ctrl",
                    A: o ? "Option" : "Alt",
                    S: "Shift"
                };
                return i.map(function(e, t) {
                    return t === i.length - 1 ? e : r[e]
                }).join(n)
            }
        }
    }
    t.$inject = ["$window"],
    angular.module("QdbdApp.Common").filter("keyboardShortcut", t)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s, c, d, l, u) {
            this.$rootScope = e,
            this.$http = t,
            this.$cookies = i,
            this.$state = o,
            this.$q = n,
            this.$mdDialog = r,
            this.$auth = a,
            this.localStorageService = s,
            this.BaseHttpService = c,
            this.AppStateService = d,
            this.ToastService = l,
            this.TrackingService = u,
            this.SHORTCODE_KEY = "shortcode",
            this.EXPANDED_DIR_IDS_KEY = "expandedDirIds"
        }
        return t.$inject = ["$rootScope", "$http", "$cookies", "$state", "$q", "$mdDialog", "$auth", "localStorageService", "BaseHttpService", "AppStateService", "ToastService", "TrackingService"],
        t.prototype.login = function(e) {
            var t = this;
            this.clearLocalStorageData(),
            e.modelState = {},
            this.$auth.login(e).then(function() {
                t.resolveCurrentUser(),
                t.ToastService.showInfo("You are now logged in."),
                t.$state.go("root.standardShrinkable.home")
            }, function(t) {
                e.modelState = t.data.modelState,
                t.data && t.data.error_description && (e.modelState = {},
                e.modelState[""] = [t.data.error_description])
            })
        }
        ,
        t.prototype.reAuthenticate = function() {
            var e = this;
            return this.$http.get("api/v1/account/refreshToken").then(function(t) {
                return e.$auth.setToken(t.data.access_token),
                e.resolveCurrentUser()
            })
        }
        ,
        t.prototype.reAuthenticateIfNecessary = function() {
            this.$rootScope.currentUser.shouldUpdateToken && this.reAuthenticate()
        }
        ,
        t.prototype.reAuthenticateIfCurrentUser = function(e) {
            e === this.$rootScope.currentUser.userId && this.reAuthenticate()
        }
        ,
        t.prototype.socialAuth = function(e) {
            var t = this;
            this.clearLocalStorageData(),
            this.$auth.authenticate(e).then(function() {
                t.resolveCurrentUser().then(function(e) {
                    t.ToastService.showInfo("You are now logged in."),
                    t.$state.go("root.standardShrinkable.home")
                }, function(e) {
                    "Email setup required" === e.data && t.$state.go("root.centered.setEmail")
                })
            })
        }
        ,
        t.prototype.logout = function() {
            this.clearLocalStorageData(),
            this.$auth.logout(),
            this.$rootScope.currentUser = void 0,
            this.ToastService.showInfo("You are now logged out. See you soon!"),
            this.$rootScope.$broadcast("current-user-changed"),
            this.TrackingService.restartIntercom(),
            this.$state.go("root.standardShrinkable.home"),
            firebase.auth().signOut()
        }
        ,
        t.prototype.registerAccount = function(e) {
            var t = this;
            this.clearLocalStorageData(),
            this.validatePassword(e.password).isValid && (e.confirmPassword = e.password,
            this.BaseHttpService.post("api/v1/account/register", e, function(e) {
                t.$auth.setToken(e.data.access_token),
                t.resolveCurrentUser(),
                t.ToastService.showInfo("Thanks for registering! Please check your email.")
            }))
        }
        ,
        t.prototype.resolveCurrentUser = function() {
            var e = this
              , t = this.$q.defer();
            return !this.$auth.isAuthenticated() && this.$rootScope.currentUser ? (this.$rootScope.currentUser = void 0,
            this.$rootScope.$broadcast("current-user-changed"),
            t.resolve(),
            t.promise) : (this.$http.get("api/v1/account/userInfo").then(function(i) {
                e.$rootScope.currentUser = i.data,
                e.$rootScope.$broadcast("current-user-changed"),
                e.TrackingService.updateUser(e.$rootScope.currentUser),
                e.reAuthenticateIfNecessary(),
                t.resolve(i)
            }, function(i) {
                e.$rootScope.currentUser = void 0,
                e.$rootScope.$broadcast("current-user-changed"),
                t.reject(i)
            }),
            t.promise)
        }
        ,
        t.prototype.clearLocalStorageData = function() {
            this.localStorageService.remove(this.SHORTCODE_KEY),
            this.localStorageService.remove(this.EXPANDED_DIR_IDS_KEY)
        }
        ,
        t.prototype.onUnauthorizedRequest = function(e, t) {
            this.ToastService.showInfo("Login or higher permissions required")
        }
        ,
        t.prototype.setEmail = function(e) {
            return this.BaseHttpService.post("api/v1/account/setEmail", e)
        }
        ,
        t.prototype.confirmEmail = function(e, t) {
            return this.BaseHttpService.post("api/v1/account/confirmEmail", {
                userId: e,
                token: t
            })
        }
        ,
        t.prototype.forgotPassword = function(e) {
            return this.BaseHttpService.post("api/v1/account/forgotPassword", e)
        }
        ,
        t.prototype.changePassword = function(e) {
            return this.BaseHttpService.post("api/v1/account/changePassword", e)
        }
        ,
        t.prototype.changeEmail = function(e) {
            return this.BaseHttpService.post("api/v1/account/changeEmail", e)
        }
        ,
        t.prototype.resetPassword = function(e) {
            var t = this;
            return this.BaseHttpService.post("api/v1/account/resetPassword", e, function(e) {
                t.$auth.setToken(e.data.access_token),
                t.resolveCurrentUser()
            })
        }
        ,
        t.prototype.requestEmailConfirmation = function() {
            return this.$http.get("api/v1/account/requestEmailConfirmation")
        }
        ,
        t.prototype.isUserLoggedIn = function() {
            return this.$auth.isAuthenticated() && !_.isEmpty(this.$rootScope.currentUser)
        }
        ,
        t.prototype.validatePassword = function(e) {
            var t = {
                minCharacters: e && e.length >= 8,
                lowercase: !!/^(?=.*[a-z])/.exec(e),
                uppercase: !!/^(?=.*[A-Z])/.exec(e),
                digits: !!/^(?=.*\d)/.exec(e)
            };
            return t.isValid = !_.includes(_.values(t), !1),
            t
        }
        ,
        t.prototype.requireLogin = function() {
            return !this.isUserLoggedIn() && (this.$mdDialog.show({
                template: "\n          <md-dialog aria-label='Login Required' class='modal-dialog action-required'>\n            <dt-login-required></dt-login-required>\n          </md-dialog>\n        ",
                parent: angular.element(document.body),
                clickOutsideToClose: !0
            }),
            !0)
        }
        ,
        t.prototype.requireSubscription = function(e) {
            return !!this.requireLogin() || !this.$rootScope.currentUser.hasProAccess && (e || (e = ""),
            this.$mdDialog.show({
                template: "\n          <md-dialog aria-label='Pro Access Required' class='modal-dialog action-required'>\n            <dt-subscription-required custom-message='" + e + "'></dt-subscription-required>\n          </md-dialog>\n        ",
                parent: angular.element(document.body),
                clickOutsideToClose: !0
            }),
            !0)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "AccountService")], t)
    }();
    e.AccountService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$state = e
        }
        return t.$inject = ["$state"],
        t.prototype.diagramFactory = function() {
            var e = this.$state.params.shortcode;
            return this.currentDiagram && this.currentDiagram.shortcode === e || (this.currentDiagram = {
                shortcode: e
            }),
            this.currentDiagram
        }
        ,
        t.prototype.getCurrentDiagram = function() {
            return this.currentDiagram
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "AppStateService")], t)
    }();
    e.AppStateService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o) {
            this.$rootScope = e,
            this.$timeout = t,
            this.$window = i,
            this.localStorageService = o,
            this.TOUR_SEEN_KEY = "tourSeen"
        }
        return t.$inject = ["$rootScope", "$timeout", "$window", "localStorageService"],
        t.prototype.initializeTour = function() {
            var e = this;
            this.isTourSeen() || this.$timeout(function() {
                var t = new e.$window.Shepherd.Tour({
                    defaults: {
                        classes: "shepherd-theme-arrows"
                    }
                });
                $(window).width() < 600 ? e.createSmallScreenTour(t) : e.createDefaultTour(t),
                t.on("complete", function() {
                    angular.element(".tour-overlay-container").removeClass("visible"),
                    angular.element(".tour-overlay").removeClass("active visible"),
                    e.markTourAsSeen()
                }),
                t.start()
            })
        }
        ,
        t.prototype.createSmallScreenTour = function(e) {
            e.addStep("Welcome", {
                title: "Welcome to QuickDBD!",
                text: "We're glad you're interested in our app but you're seeing only a very limited functionality because you are viewing it on a small screen.For full experience please view it on a bigger screen.",
                advanceOn: ".docs-link click",
                when: {
                    show: function() {
                        angular.element(".tour-overlay-container").addClass("visible"),
                        angular.element(".tour-overlay").addClass("active visible")
                    }
                },
                buttons: {
                    text: "Ok",
                    action: e.complete,
                    classes: "exit-tour"
                }
            })
        }
        ,
        t.prototype.createDefaultTour = function(e) {
            var t = [{
                text: "Exit",
                action: e.complete,
                classes: "exit-tour"
            }, {
                text: "Next",
                action: e.next
            }];
            e.addStep("Welcome", {
                title: "Welcome to QuickDBD!",
                text: "Please click next for a quick tour of QuickDBD (1/4).",
                advanceOn: ".docs-link click",
                when: {
                    show: function() {
                        angular.element(".tour-overlay-container").addClass("visible"),
                        angular.element(".tour-overlay").addClass("active visible")
                    }
                },
                buttons: t
            }),
            e.addStep("Editor", {
                text: "Define your schema here (2/4).",
                attachTo: ".dragger-top right",
                advanceOn: ".docs-link click",
                when: {
                    show: function() {
                        angular.element(".editor-overlay").removeClass("visible")
                    }
                },
                buttons: t
            }),
            e.addStep("Renderer", {
                text: "To get a diagram here (3/4).",
                attachTo: ".dragger-top left",
                advanceOn: ".docs-link click",
                when: {
                    show: function() {
                        angular.element(".editor-overlay").addClass("visible"),
                        angular.element(".renderer-overlay").removeClass("visible")
                    }
                },
                buttons: t
            }),
            e.addStep("Docs", {
                text: "Learn more about the QuickDBD<br />syntax here (4/4).",
                attachTo: ".docs-button bottom",
                advanceOn: ".docs-link click",
                when: {
                    show: function() {
                        angular.element(".renderer-overlay").addClass("visible"),
                        angular.element(".header-overlay").removeClass("visible")
                    }
                },
                buttons: {
                    text: "Exit",
                    action: e.complete,
                    classes: "exit-tour"
                }
            })
        }
        ,
        t.prototype.isTourSeen = function() {
            return this.localStorageService.get(this.TOUR_SEEN_KEY)
        }
        ,
        t.prototype.markTourAsSeen = function() {
            this.localStorageService.set(this.TOUR_SEEN_KEY, !0)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "AppTourService")], t)
    }();
    e.AppTourService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$http = e
        }
        return t.$inject = ["$http"],
        t.prototype.post = function(e, t, i) {
            return this.request(e, "post", t, i)
        }
        ,
        t.prototype.put = function(e, t, i) {
            return this.request(e, "put", t, i)
        }
        ,
        t.prototype.request = function(e, t, i, o) {
            i.modelState = {};
            var n = this.$http[t](e, i);
            return n.then(o, function(e) {
                i.modelState = e.data.modelState
            }),
            n
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "BaseHttpService")], t)
    }();
    e.BaseHttpService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.DialogService = e,
            this.initialize()
        }
        return t.$inject = ["DialogService"],
        t.prototype.initialize = function() {
            var e = window.navigator.userAgent;
            this.isUnsupported = _.includes(e, "Trident"),
            this.isSpecial = !bowser.check({
                chrome: "69",
                opera: "55"
            }, !0, e)
        }
        ,
        t.prototype.isUnsupportedBrowser = function() {
            return this.isUnsupported
        }
        ,
        t.prototype.isSpecialSnowflakeBrowser = function() {
            return this.isSpecial
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "BrowserSupportService")], t)
    }();
    e.BrowserSupportService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t() {}
        return t.prototype.getUniqHash = function(e) {
            var t, i, o, n, r, a, s, c;
            for (t = 3 & e.length,
            i = e.length - t,
            o = 7,
            r = 3432918353,
            a = 461845907,
            c = 0; c < i; )
                s = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24,
                ++c,
                o = 27492 + (65535 & (n = 5 * (65535 & (o = (o ^= s = (65535 & (s = (s = (65535 & s) * r + (((s >>> 16) * r & 65535) << 16) & 4294967295) << 15 | s >>> 17)) * a + (((s >>> 16) * a & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (n >>> 16) & 65535) << 16);
            switch (s = 0,
            t) {
            case 3:
                s ^= (255 & e.charCodeAt(c + 2)) << 16;
            case 2:
                s ^= (255 & e.charCodeAt(c + 1)) << 8;
            case 1:
                o ^= s = (65535 & (s = (s = (65535 & (s ^= 255 & e.charCodeAt(c))) * r + (((s >>> 16) * r & 65535) << 16) & 4294967295) << 15 | s >>> 17)) * a + (((s >>> 16) * a & 65535) << 16) & 4294967295
            }
            return o ^= e.length,
            o ^= o >>> 16,
            o = 2246822507 * (65535 & o) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295,
            o ^= o >>> 13,
            o = 3266489909 * (65535 & o) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295,
            "h" + ((o ^= o >>> 16) >>> 0)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "CryptoService")], t)
    }();
    e.CryptoService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i) {
            this.$mdDialog = e,
            this.$window = t,
            this.$document = i,
            this.trackTabFocus()
        }
        return t.$inject = ["$mdDialog", "$window", "$document"],
        t.prototype.trackTabFocus = function() {
            this.$document.on("visibilitychange", this.onFocusChange.bind(this))
        }
        ,
        t.prototype.onFocusChange = function() {
            var e;
            !document.hidden && this.onVisibilityChange && ((e = this.onVisibilityChange).fn.apply(e, this.onVisibilityChange.params),
            this.onVisibilityChange = null)
        }
        ,
        t.prototype.showDialogNotification = function(e, t) {
            document.hidden ? this.onVisibilityChange = {
                fn: this.showDialogNotification.bind(this),
                params: [e, t]
            } : this.$mdDialog.show({
                template: "\n          <md-dialog aria-label='Notification' class='modal-dialog pushed'>\n            <md-dialog-content>\n              <md-content class='md-padding'>\n                <p>" + e + "</p>\n              </md-content>\n            </md-dialog-content>\n          </md-dialog>\n        ",
                parent: angular.element(document.body),
                clickOutsideToClose: t || !1
            })
        }
        ,
        t.prototype.closDialogNotification = function() {
            document.hidden ? this.onVisibilityChange = {
                fn: this.closDialogNotification.bind(this)
            } : this.$mdDialog.cancel()
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "DialogService")], t)
    }();
    e.DialogService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t) {
            this.$http = e,
            this.$log = t
        }
        return t.$inject = ["$http", "$log"],
        t.prototype.logError = function(e) {
            var t;
            try {
                t = JSON.stringify(e)
            } catch (e) {
                t = e.message
            }
            return this.$http.post("api/v1/error/log", {
                error: t
            })
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "ErrorService")], t)
    }();
    e.ErrorService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function e(e, t, i, o) {
            var n = this;
            this.$rootScope = e,
            this.$q = t,
            this.$log = i,
            this.AppConfig = o,
            this.request = function(e) {
                return e.headers = e.headers || {},
                _.startsWith(e.url, "api") ? e.url = "//" + n.AppConfig.webApi.host + "/" + e.url : e.headers.Authorization = void 0,
                e || n.$q.when(e)
            }
            ,
            this.responseError = function(e) {
                return 0 === e.status && n.$rootScope.$broadcast("error-message", {
                    header: "Unable to use the Internet connection",
                    message: "The webpage can't load any data because your computer isn?t connected to the Internet."
                }),
                401 !== e.status || n.isUserInfoUrl(e) ? 404 === e.status ? n.$rootScope.$broadcast("error-message", {
                    message: "Resource does not exist",
                    status: 404
                }) : 409 === e.status ? e.data instanceof ArrayBuffer || n.$rootScope.$broadcast("toast-error", e.data || "An unknown error occured") : 403 === e.status || 422 === e.status || e.data && !n.isUserInfoUrl(e) && (e.data.exceptionMessage ? n.$rootScope.$broadcast("toast-error", e.data.exceptionMessage) : e.data.message && n.$rootScope.$broadcast("toast-error", e.data.message)) : n.$rootScope.$broadcast("unauthorized-request", e),
                n.$q.reject(e)
            }
        }
        return e.Factory = function(t, i, o, n) {
            return new e(t,i,o,n)
        }
        ,
        e.Factory.$inject = ["$rootScope", "$q", "$log", "AppConfig"],
        e.prototype.isUserInfoUrl = function(e) {
            return _.endsWith(e.config.url, "/api/v1/account/userInfo")
        }
        ,
        e
    }();
    e.HttpRequestInterceptor = t,
    angular.module("QdbdApp.Common").factory("httpRequestInterceptorFactory", t.Factory)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$state = e
        }
        return t.$inject = ["$state"],
        t.prototype.pagerFactory = function(e, t, i, o) {
            var n = this;
            return {
                onFilterChanged: function(t, r) {
                    n.onFilterChanged(t, r, e, i.bind(n), o)
                },
                sort: function(t) {
                    n.sort(t, e)
                },
                isFirstPage: function() {
                    return n.isFirstPage(e)
                },
                isLastPage: function() {
                    return n.isLastPage(e, t)
                },
                prev: function() {
                    return n.prev(e)
                },
                next: function() {
                    return n.next(e, t)
                },
                first: function() {
                    return n.first(e)
                },
                last: function() {
                    return n.last(e, t)
                }
            }
        }
        ,
        t.prototype.onFilterChanged = function(e, t, i, o, n) {
            e.search !== t.search && 1 !== i.page ? i.page = 1 : o(),
            n && this.$state.go(n, _.extend(this.$state.params, i))
        }
        ,
        t.prototype.sort = function(e, t) {
            t.sortBy && t.sortBy === e ? t.sortOperator = "descending" === t.sortOperator ? "ascending" : "descending" : (t.sortBy = e,
            t.sortOperator = "ascending")
        }
        ,
        t.prototype.isFirstPage = function(e) {
            return 1 === Number(e.page)
        }
        ,
        t.prototype.isLastPage = function(e, t) {
            return Number(e.page) === t.pageCount
        }
        ,
        t.prototype.prev = function(e) {
            e.page || (e.page = 1),
            e.page--,
            e.page < 1 && (e.page = 1)
        }
        ,
        t.prototype.next = function(e, t) {
            e.page || (e.page = 1),
            e.page++,
            e.page > t.pageCount && (e.page = t.pageCount)
        }
        ,
        t.prototype.first = function(e) {
            e.page = 1
        }
        ,
        t.prototype.last = function(e, t) {
            e.page = t.pageCount
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "PagingService")], t)
    }();
    e.PagingService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i) {
            this.$timeout = e,
            this.$state = t,
            this.AccountService = i
        }
        return t.$inject = ["$timeout", "$state", "AccountService"],
        t.prototype.handleAuthRedirects = function() {
            var e = this;
            this.$timeout(function() {
                var t = e.$state.$current.data;
                t && !0 === t.isAnonymousOnlyRoute && e.AccountService.isUserLoggedIn() && e.$state.go("root.standardShrinkable.home")
            })
        }
        ,
        t.prototype.stateIncludes = function(e) {
            var t = this;
            if (_.isString(e))
                return this.$state.includes(e);
            if (_.isArray(e)) {
                var i = _.find(e, function(e) {
                    return t.$state.includes(e)
                });
                return !!i && i.length > 0
            }
            return !1
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "RoutingService")], t)
    }();
    e.RoutingService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n) {
            this.$state = e,
            this.$window = t,
            this.$location = i,
            this.AppConfigShared = o,
            this.TrackingService = n,
            this.diagramTitleText = "Check my QuickDBD diagram! ",
            this.diagramTitleTextTwitter = "Check my @quick_dbd diagram! ",
            this.landingTitleText = "Check out QuickDBD database diagramming tool! ",
            this.landingTitleTextTwitter = "Check out @quick_dbd database diagramming tool! ",
            this.descriptionText = "Quick Database Diagrams"
        }
        return t.$inject = ["$state", "$window", "$location", "AppConfigShared", "TrackingService"],
        t.prototype.share = function(e) {
            this.TrackingService.trackShare("get_link" === e ? "LINK" : e.toUpperCase()),
            this.isDiagramState() ? this.shareUrl(this.$location.absUrl(), e) : this.shareUrl("https://www.quickdatabasediagrams.com/", e)
        }
        ,
        t.prototype.shareUrl = function(e, t) {
            var i = this.isDiagramState();
            switch (t) {
            case "twitter":
                var o = i ? this.diagramTitleTextTwitter : this.landingTitleTextTwitter
                  , n = this.getTwitterShareLink(e, o);
                this.shareLink(n);
                break;
            case "facebook":
                r = i ? this.diagramTitleText : this.landingTitleText;
                this.facebookShare(e, r, this.descriptionText);
                break;
            case "google":
                n = this.getGoogleShareLink(e);
                this.shareLink(n);
                break;
            case "linkedin":
                var r = i ? this.diagramTitleText : this.landingTitleText
                  , n = this.getLinkedinShareLink(e, r, this.descriptionText);
                this.shareLink(n);
                break;
            default:
                return
            }
        }
        ,
        t.prototype.getTwitterShareLink = function(e, t) {
            return this.AppConfigShared.sharing.providers.twitter + encodeURIComponent(t + e)
        }
        ,
        t.prototype.getGoogleShareLink = function(e) {
            return this.AppConfigShared.sharing.providers.google + encodeURIComponent(e)
        }
        ,
        t.prototype.getLinkedinShareLink = function(e, t, i) {
            return this.AppConfigShared.sharing.providers.linkedin + encodeURIComponent(e) + "&title=" + encodeURIComponent(t) + "&summary=" + encodeURIComponent(i) + "&source=app.quickdatabasediagrams.com"
        }
        ,
        t.prototype.shareLink = function(e) {
            var t = this.$window.screenLeft
              , i = this.$window.screenTop
              , o = "width=600,height=600,resizable=yes,menubar=no,toolbar=no,scrollbars=yes,left=" + ((this.$window.innerWidth ? this.$window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width) / 2 - 300 + t) + ",top=" + ((this.$window.innerHeight ? this.$window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - 300 + i);
            this.$window.open(e, "a", o).focus()
        }
        ,
        t.prototype.facebookShare = function(e, t, i) {
            this.$window.FB.ui({
                method: "feed",
                name: t,
                link: encodeURI(e),
                picture: this.AppConfigShared.sharing.defaultImage,
                description: i,
                message: ""
            })
        }
        ,
        t.prototype.isHomeState = function() {
            return this.$state.is("root.standardShrinkable.home")
        }
        ,
        t.prototype.isDiagramState = function() {
            return this.$state.is("root.standardShrinkable.diagram")
        }
        ,
        t.prototype.tweet = function(e) {
            var t = this.getTwitterShareLink(window.location.origin, e);
            t = t.replace("TWITTER_LOVE_EMOJI", "%F0%9F%98%8D"),
            this.shareLink(t)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "SharingService")], t)
    }();
    e.SharingService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$rootScope = e,
            this.rightSidenav = {
                isOpen: !1
            }
        }
        return t.$inject = ["$rootScope"],
        t.prototype.toggleRightSidenav = function() {
            this.rightSidenav.isOpen = !this.rightSidenav.isOpen
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "SidenavService")], t)
    }();
    e.SidenavService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o) {
            this.$http = e,
            this.$log = t,
            this.FileSaver = i,
            this.ToastService = o
        }
        return t.$inject = ["$http", "$log", "FileSaver", "ToastService"],
        t.prototype.downloadGet = function(e, t) {
            return this.$http.get(e, this.buildRequestConfig(t)).then(this.onSuccess.bind(this), this.onError.bind(this))
        }
        ,
        t.prototype.downloadPost = function(e, t, i) {
            return this.$http.post(e, t, this.buildRequestConfig(i)).then(this.onSuccess.bind(this), this.onError.bind(this))
        }
        ,
        t.prototype.downloadFromString = function(e, t) {
            var i = this;
            return this.$http.get(t, this.buildRequestConfig()).then(function(t) {
                i.saveFile(e, t.data, "application/octet-stream")
            }, this.onError.bind(this))
        }
        ,
        t.prototype.downloadFromBlob = function(e, t) {
            var i = this
              , o = URL.createObjectURL(t);
            return this.$http.get(o, this.buildRequestConfig()).then(function(t) {
                i.saveFile(e, t.data, "application/octet-stream"),
                URL.revokeObjectURL(o)
            }, this.onError.bind(this))
        }
        ,
        t.prototype.buildRequestConfig = function(e) {
            return {
                cache: !1,
                responseType: "arraybuffer",
                params: e
            }
        }
        ,
        t.prototype.onSuccess = function(e) {
            var t = e.headers()
              , i = t["x-filename"] ? decodeURIComponent(escape(t["x-filename"])) : "download"
              , o = t["content-type"] || "application/octet-stream";
            this.saveFile(i, e.data, o)
        }
        ,
        t.prototype.saveFile = function(e, t, i) {
            try {
                var o = new Blob([t],{
                    type: i
                });
                this.FileSaver.saveAs(o, e)
            } catch (e) {
                this.handleException(e)
            }
        }
        ,
        t.prototype.onError = function(e) {
            try {
                var t = String.fromCharCode.apply(null, new Uint8Array(e.data));
                this.ToastService.showError(t)
            } catch (e) {
                this.handleException(e)
            }
        }
        ,
        t.prototype.handleException = function(e) {
            this.ToastService.showWarning("Blob download not supported by your browser, please try in Chrome"),
            this.$log.error(e)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "StreamDownloadService")], t)
    }();
    e.StreamDownloadService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$mdToast = e
        }
        return t.$inject = ["$mdToast"],
        t.prototype.showInfo = function(e, t) {
            this.showToast(e, void 0, t)
        }
        ,
        t.prototype.showInfoWithAction = function(e, t, i) {
            this.showToastWithAction(e, t, i, void 0)
        }
        ,
        t.prototype.showWarning = function(e) {
            this.showToast(e, "warning")
        }
        ,
        t.prototype.showError = function(e) {
            this.showToast(e, "error")
        }
        ,
        t.prototype.showToast = function(e, t, i) {
            this.$mdToast.show(this.$mdToast.simple().textContent(e).position("top center").hideDelay(i || 3e3).theme(this.getToastTheme(t)))
        }
        ,
        t.prototype.showToastWithAction = function(e, t, i, o) {
            this.$mdToast.show(this.$mdToast.simple().textContent(e).action(t).highlightAction(!0).highlightClass("md-accent").position("bottom right").hideDelay(4e3).theme(this.getToastTheme(o))).then(function(e) {
                "ok" === e && i()
            })
        }
        ,
        t.prototype.getToastTheme = function(e) {
            return e ? "" + e : void 0
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "ToastService")], t)
    }();
    e.ToastService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a) {
            this.$rootScope = e,
            this.$window = t,
            this.$filter = i,
            this.$location = o,
            this.$state = n,
            this.AppConfig = r,
            this.AppTourService = a,
            this.isChatEnabled = !1
        }
        return t.$inject = ["$rootScope", "$window", "$filter", "$location", "$state", "AppConfig", "AppTourService"],
        t.prototype.initializeIntercom = function() {
            this.$window.Intercom && this.$window.Intercom("boot", {
                app_id: this.AppConfig.intercom.appId,
                hide_default_launcher: !this.isChatEnabled
            })
        }
        ,
        t.prototype.flipSupportChat = function() {
            this.isChatEnabled = !this.isChatEnabled,
            this.restartIntercom()
        }
        ,
        t.prototype.enableIntercomChat = function() {
            this.$window.Intercom && this.$window.Intercom("update", {
                hide_default_launcher: !1
            })
        }
        ,
        t.prototype.restartIntercom = function() {
            this.$window.Intercom && (this.$window.Intercom("shutdown"),
            this.initializeIntercom())
        }
        ,
        t.prototype.updateUser = function(e) {
            if (this.$window.Intercom) {
                if (!e)
                    return void this.$window.Intercom("update", {
                        email: void 0
                    });
                this.$window.Intercom("update", {
                    user_id: e.userId,
                    email: e.email,
                    diagrams: e.schemaStats.diagramCount,
                    max_tables: e.schemaStats.maxTableCount,
                    avg_tables: e.schemaStats.avgTableCount,
                    deleted_diagrams: e.schemaStats.deletedDiagramCount,
                    created_at: this.toTimpestamp(e.dateCreated),
                    ip_address: e.ipAddress,
                    ip_find: "https://ipfind.co?ip=" + e.ipAddress,
                    mx_toolbox: "https://mxtoolbox.com/SuperTool.aspx?action=ptr%3a" + e.ipAddress + "&run=toolpage",
                    profile_url: this.$state.href("root.standard.user.profile", {
                        userId: e.userId
                    }, {
                        absolute: !0
                    }),
                    has_pro_access: e.hasProAccess,
                    subscription_expires_at: this.toTimpestamp(e.subscriptionExpiresOn)
                })
            }
        }
        ,
        t.prototype.onRouteChange = function() {
            this.$window.gtag && this.$window.gtag("config", this.$window.GA_TRACKING_ID, {
                page_path: this.$location.url()
            }),
            this.$window.Intercom && this.$window.Intercom("update")
        }
        ,
        t.prototype.trackNewFile = function() {
            this.trackEvent("New File", "Menu", "File", "", 0, {
                created_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackNewFolder = function() {
            this.trackEvent("New Folder", "Menu", "File", "", 0, {
                created_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackSave = function() {
            this.trackEvent("Save Diagram", "Menu", "File", "", 0, {
                url: this.$window.location.href,
                saved_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackShare = function(e) {
            this.trackEvent("Share Diagram", "Menu", "Social", e, 0, {
                type: e,
                url: this.$window.location.href,
                shared_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackColorPalette = function(e) {
            this.trackEvent("Color Palette", "Menu", "File", e, 0, {
                changed_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackExportToDoc = function(e) {
            this.trackExport("Export to Doc", e)
        }
        ,
        t.prototype.trackExportToImg = function(e) {
            this.trackExport("Export to Img", e)
        }
        ,
        t.prototype.trackExportToSql = function(e) {
            this.trackExport("Export to SQL", e)
        }
        ,
        t.prototype.trackExport = function(e, t) {
            var i = "";
            switch (t.toUpperCase()) {
            case "ANSISQL":
                i = "ANSI";
                break;
            case "TSQL":
                i = "T-SQL";
                break;
            default:
                i = t.toUpperCase()
            }
            this.trackEvent(e, "Menu", "Export", i, 0, {
                type: t,
                url: this.$window.location.href,
                exported_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackImportFromSql = function(e) {
            var t = "";
            switch (e.toUpperCase()) {
            case "ANSISQL":
                t = "ANSI";
                break;
            case "TSQL":
                t = "T-SQL";
                break;
            default:
                t = e.toUpperCase()
            }
            this.trackEvent("Import from SQL", "Menu", "Import", t, 0, {
                type: e,
                url: this.$window.location.href,
                exported_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackDocumetation = function(e) {
            this.trackEvent("Documentation", "Menu", "Docs", e, 0)
        }
        ,
        t.prototype.trackAccount = function(e) {
            this.trackEvent("Account", "Menu", "Account", e, 0)
        }
        ,
        t.prototype.trackZoom = function(e, t) {
            this.trackEvent("Zoom", "Diagram", "Zoom", t, e)
        }
        ,
        t.prototype.trackEditor = function(e, t, i) {
            this.trackEvent(i, "Editor", t, "", e)
        }
        ,
        t.prototype.trackPurchase = function(e, t) {
            this.trackEvent("Subscribed", "Commerce", "Purchase", t, e, {
                type: t,
                purchased_at: this.getFormattedTimeNow()
            })
        }
        ,
        t.prototype.trackEvent = function(e, t, i, o, n, r) {
            this.$window.gtag && this.$window.gtag("event", e, {
                event_category: t,
                event_action: i || "click",
                event_label: o,
                value: n || 0
            }),
            r && this.$window.Intercom && this.$window.Intercom("trackEvent", _.snakeCase(e), r)
        }
        ,
        t.prototype.toTimpestamp = function(e) {
            return e ? Math.round(new Date(e).getTime() / 1e3) : "-"
        }
        ,
        t.prototype.getFormattedTimeNow = function() {
            return this.$filter("date")(new Date, "yyyy-MM-dd HH:mm:ss")
        }
        ,
        t.prototype.profitWellTrack = function() {
            var e = {
                event: "start_pw"
            };
            this.$rootScope.currentUser && this.$rootScope.currentUser.email && (e.pw_user_email = this.$rootScope.currentUser.email),
            dataLayer && dataLayer.push && dataLayer.push(e)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Common", "TrackingService")], t)
    }();
    e.TrackingService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t) {
            this.$state = e,
            this.$timeout = t,
            this.initializeFilters(),
            this.setupRoutes(),
            this.handleRouting()
        }
        t.$inject = ["$state", "$timeout"],
        t.prototype.setupRoutes = function() {
            var e = this;
            this.routes = [{
                caption: "Users",
                name: "root.standard.admin.userList"
            }, {
                caption: "Diagrams",
                name: "root.standard.admin.diagramList"
            }, {
                caption: "Vouchers",
                name: "root.standard.admin.vouchersList"
            }],
            this.$timeout(function() {
                e.selectedTab = _.findIndex(e.routes, {
                    name: e.$state.current.name
                })
            })
        }
        ,
        t.prototype.handleRouting = function() {
            this.$state.is("root.standard.admin") && this.$state.go("root.standard.admin.userList")
        }
        ,
        t.prototype.initializeFilters = function() {
            var e = {
                page: this.$state.params.page || 1,
                pageSize: this.$state.params.pageSize || 20,
                search: this.$state.params.search,
                sortBy: this.$state.params.sortBy,
                sortOperator: this.$state.params.sortOperator
            };
            this.usersFilter = {
                page: e.page,
                pageSize: e.pageSize,
                search: e.search,
                sortBy: e.sortBy || "email",
                sortOperator: e.sortOperator
            },
            this.schemasFilter = {
                page: e.page,
                pageSize: e.pageSize,
                search: e.search,
                sortBy: e.sortBy || "schemaSourceId",
                sortOperator: e.sortOperator
            },
            this.voucherFilter = {
                page: e.page,
                pageSize: e.pageSize,
                search: e.search,
                sortBy: e.sortBy || "voucherId",
                sortOperator: e.sortOperator
            }
        }
        ,
        t.prototype.loadRoute = function(e) {
            var t = "root.standard.admin.userList" === e ? this.usersFilter : "root.standard.admin.vouchersList" === e ? this.voucherFilter : this.schemasFilter;
            this.$state.go(e, t)
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Admin", "AdminCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i) {
            this.$http = e,
            this.$mdDialog = t,
            this.BaseHttpService = i
        }
        return t.$inject = ["$http", "$mdDialog", "BaseHttpService"],
        t.prototype.getCollaborators = function(e, t) {
            return "file" === t ? this.getDiagramCollaborators(e) : this.getDirectoryCollaborators(e)
        }
        ,
        t.prototype.getDiagramCollaborators = function(e) {
            return this.$http.get("api/v1/collab/forDiagram/" + e)
        }
        ,
        t.prototype.getDirectoryCollaborators = function(e) {
            return this.$http.get("api/v1/collab/forDirectory/" + e)
        }
        ,
        t.prototype.createCollaborator = function(e, t) {
            return "file" === t ? this.createDiagramCollaborator(e) : this.createDirectoryCollaborator(e)
        }
        ,
        t.prototype.createDiagramCollaborator = function(e) {
            return this.BaseHttpService.post("api/v1/collab/forDiagram", e)
        }
        ,
        t.prototype.createDirectoryCollaborator = function(e) {
            return this.BaseHttpService.post("api/v1/collab/forDirectory", e)
        }
        ,
        t.prototype.removeCollaborator = function(e) {
            return e.shortcode ? this.removeDiagramCollaborator(e) : this.removeDirectoryCollaborator(e)
        }
        ,
        t.prototype.removeDiagramCollaborator = function(e) {
            return this.$http.put("api/v1/collab/removeForDiagram", e)
        }
        ,
        t.prototype.removeDirectoryCollaborator = function(e) {
            return this.$http.put("api/v1/collab/removeForDirectory", e)
        }
        ,
        t.prototype.leaveCollab = function(e) {
            return this.$http.delete("api/v1/collab/leave/" + e)
        }
        ,
        t.prototype.collaborate = function(e, t, i) {
            this.$mdDialog.show({
                template: "\n          <md-dialog aria-label='Shortcode' class='modal-dialog'>\n            <dt-collaborators identifier=\"" + e + '"\n                              collab-type="' + t + '"\n                              is-owned-by-current-user="' + i + '">\n            </dt-collaborators>\n          </md-dialog>\n        ',
                parent: angular.element(document.body),
                clickOutsideToClose: !0
            })
        }
        ,
        t = __decorate([e.Service("QdbdApp.Collaborators", "CollaboratorsService")], t)
    }();
    e.CollaboratorsService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o) {
            this.$scope = e,
            this.$mdDialog = t,
            this.CollaboratorsService = i,
            this.ToastService = o,
            this.model = {},
            this.collaborators = []
        }
        t.$inject = ["$scope", "$mdDialog", "CollaboratorsService", "ToastService"],
        t.prototype.$onInit = function() {
            this.collaborators = [],
            this.loadCollabs()
        }
        ,
        t.prototype.loadCollabs = function() {
            var e = this;
            this.CollaboratorsService.getCollaborators(this.identifier, this.collabType).then(function(t) {
                e.collaborators = t.data
            })
        }
        ,
        t.prototype.addCollaborator = function() {
            var e = this;
            "dir" === this.collabType ? (this.model.dirId = this.identifier,
            this.model.shortcode = 0) : (this.model.dirId = 0,
            this.model.shortcode = this.identifier),
            this.CollaboratorsService.createCollaborator(this.model, this.collabType).then(function() {
                e.loadCollabs(),
                e.model.email = "";
                var t = "dir" === e.collabType ? "folder" : "file";
                e.ToastService.showInfo("Invited user to collaborate on this  " + t + ".")
            })
        }
        ,
        t.prototype.removeCollaborator = function(e) {
            var t = this
              , i = "<p>Are you sure you want to remove the collaborator <b>" + e.email + "</b> from this item?</p>"
              , o = this.$mdDialog.confirm().title("Remove collaborator").htmlContent(i).ok("Yes").cancel("No").multiple(!0).clickOutsideToClose(!0);
            this.$mdDialog.show(o).then(function() {
                t.CollaboratorsService.removeCollaborator(e).then(function() {
                    t.loadCollabs(),
                    t.ToastService.showInfo("Collaborator successfully removed")
                })
            })
        }
        ,
        t.prototype.closeDialog = function() {
            this.$mdDialog.cancel()
        }
        ,
        t = __decorate([e.Component("QdbdApp.Collaborators", "dtCollaborators", {
            bindings: {
                identifier: "@",
                collabType: "@",
                isOwnedByCurrentUser: "="
            },
            templateUrl: "cache/modules/collaborators/dt-collaborators.html",
            controllerAs: "DtCollaboratorsVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r) {
            this.$rootScope = e,
            this.$log = t,
            this.TrackingService = i,
            this.StreamDownloadService = o,
            this.BrowserSupportService = n,
            this.ToastService = r,
            this.defaults = {
                topLeft: {
                    x: 20,
                    y: 12
                },
                padding: {
                    x: 22,
                    y: 30
                }
            }
        }
        return t.$inject = ["$rootScope", "$log", "TrackingService", "StreamDownloadService", "BrowserSupportService", "ToastService"],
        t.prototype.exportToSVG = function(e, t) {
            try {
                this.TrackingService.trackExportToImg("svg");
                var i = this.generateSVG(e, t)
                  , o = this.createExportImageName(e);
                this.StreamDownloadService.downloadFromString(o + ".svg", "data:application/svg+xml;charset=utf-8," + encodeURIComponent(i))
            } catch (e) {
                this.ToastService.showWarning("SVG export failed, please try in Chrome"),
                this.$log.error(e)
            }
        }
        ,
        t.prototype.exportToPNG = function(e, t) {
            var i = this;
            if (this.BrowserSupportService.isSpecialSnowflakeBrowser())
                this.ToastService.showWarning("PNG export is unsupported by your browser. Please try Chrome, Brave or Opera.");
            else
                try {
                    this.TrackingService.trackExportToImg("png");
                    var o = this.generateSVG(e, t)
                      , n = this.createExportImageName(e)
                      , r = this.getBoundingBoxDimensions(e)
                      , a = document.createElement("canvas")
                      , s = a.getContext("2d")
                      , c = new Image;
                    c.src = "data:image/svg+xml;utf8," + encodeURIComponent(o),
                    c.onload = function() {
                        a.width = r.width,
                        a.height = r.height,
                        s.drawImage(c, 0, 0),
                        s.canvas.toBlob(function(e) {
                            i.StreamDownloadService.downloadFromBlob(n + ".png", e)
                        })
                    }
                } catch (e) {
                    this.ToastService.showWarning("PNG export failed, please try in Chrome"),
                    this.$log.error(e)
                }
        }
        ,
        t.prototype.generateSVG = function(e, t) {
            var i = angular.copy(angular.element(".canvas"))
              , o = i.find(".drawing-wrapper")[0]
              , n = this.getTopLeftPoint(e, t);
            o.setAttribute("transform", "translate(" + -n.x + ", " + -n.y + ") scale(1,1)");
            var r = i[0].innerHTML
              , a = $(r).wrapAll("<div>");
            return a.find(".connector").remove(),
            this.$rootScope.currentUser && this.$rootScope.currentUser.hasProAccess || a.closest("svg").append("<text class='qdbd-link' x='10' y='20'>www.quickdatabasediagrams.com</text>"),
            a.closest("div").html()
        }
        ,
        t.prototype.getTopLeftPoint = function(e, t) {
            var i = {};
            _.each(e.layout, function(e) {
                i.x = _.min([e.x, i.x]),
                i.y = _.min([e.y, i.y])
            });
            var o = _.size(t.sections.tables) === _.size(e.layout);
            return _.isEmpty(i) ? (i.x = this.defaults.topLeft.x,
            i.y = this.defaults.topLeft.y) : o || (i.x = _.min([this.defaults.topLeft.x, i.x]),
            i.y = _.min([this.defaults.topLeft.y, i.y])),
            i.x -= this.defaults.padding.x,
            i.y -= this.defaults.padding.y,
            i
        }
        ,
        t.prototype.getBoundingBoxDimensions = function(e) {
            var t = angular.element(".canvas")[0].querySelector("svg").getBBox()
              , i = e.viewport ? e.viewport.zoom : 100;
            return {
                height: 100 * t.height / i + 3 * this.defaults.padding.x,
                width: 100 * t.width / i + 2 * this.defaults.padding.y
            }
        }
        ,
        t.prototype.createExportImageName = function(e) {
            var t = e.sharedMetadata ? e.sharedMetadata.name : null;
            return t ? "QuickDBD-" + t : "QuickDBD-export"
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "DiagramExportService")], t)
    }();
    e.DiagramExportService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a, s, c) {
            this.$rootScope = e,
            this.$scope = t,
            this.$timeout = i,
            this.QRendService = o,
            this.QRendConfig = n,
            this.SourceEditorService = r,
            this.SchemaFirebaseService = a,
            this.BrowserSupportService = s,
            this.TrackingService = c,
            this.isUnsupportedBrowser = this.BrowserSupportService.isUnsupportedBrowser(),
            this.$scope.$on("render-diagram", this.onRenderDiagram.bind(this)),
            this.registerOnSidebarResizeHandler()
        }
        t.$inject = ["$rootScope", "$scope", "$timeout", "QRendService", "QRendConfig", "SourceEditorService", "SchemaFirebaseService", "BrowserSupportService", "TrackingService"],
        t.prototype.onRenderDiagram = function(e, t, i) {
            var o = this;
            this.diagram = t,
            this.qdbdSchema = i,
            this.$timeout(function() {
                o.QRendService.initializeRendering(i, t, o.getDiagramStyle())
            })
        }
        ,
        t.prototype.getDiagramStyle = function() {
            var e = angular.copy(this.QRendConfig.style);
            return this.SourceEditorService.isBasicPaletteActive() && _.merge(e, this.QRendConfig.basicStyle),
            e
        }
        ,
        t.prototype.registerOnSidebarResizeHandler = function() {
            var e = this;
            angular.element("#dragger").mousedown(function(t) {
                t.preventDefault();
                var i = angular.element("#main-content").width()
                  , o = angular.element(".side-toolbar").width();
                angular.element(document).mousemove(function(t) {
                    var n = 100 * (t.pageX - o) / i;
                    n < 0 && (n = 0),
                    e.$timeout(function() {
                        e.SourceEditorService.editorSize.x = n
                    })
                })
            }),
            angular.element(document).mouseup(function() {
                angular.element(document).unbind("mousemove"),
                e.SourceEditorService.saveLocalEditorSize()
            })
        }
        ,
        t.prototype.centerDiagram = function() {
            this.$rootScope.$broadcast("center-diagram", !0)
        }
        ,
        t.prototype.zoomIn = function() {
            var e = this.diagram.viewport.zoom;
            e = this.SourceEditorService.resolveZoomDiffValue(e, 10),
            this.$rootScope.$broadcast("diagram-zoom-set", e, !0),
            this.TrackingService.trackZoom(e, "IN")
        }
        ,
        t.prototype.setZoom = function(e) {
            this.$rootScope.$broadcast("diagram-zoom-set", e, !0),
            this.TrackingService.trackZoom(e, "SET")
        }
        ,
        t.prototype.zoomOut = function() {
            var e = this.diagram.viewport.zoom;
            e = this.SourceEditorService.resolveZoomDiffValue(e, -10),
            this.$rootScope.$broadcast("diagram-zoom-set", e, !0),
            this.TrackingService.trackZoom(e, "OUT")
        }
        ,
        t = __decorate([e.Component("QdbdApp.DiagramRenderer", "dtDiagramRenderer", {
            templateUrl: "cache/modules/diagram-renderer/dt-diagram-renderer.html",
            controllerAs: "DtDiagramRendererVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n) {
            this.$state = e,
            this.$mdDialog = t,
            this.$window = i,
            this.SharingService = o,
            this.ToastService = n
        }
        t.$inject = ["$state", "$mdDialog", "$window", "SharingService", "ToastService"],
        t.prototype.$onInit = function() {
            this.resolveShortcodeLink()
        }
        ,
        t.prototype.copyToClipboard = function() {
            $("#shotcode-link").select(),
            document.execCommand("copy"),
            this.ToastService.showInfo("Copied to clipboard."),
            this.$mdDialog.cancel()
        }
        ,
        t.prototype.resolveShortcodeLink = function() {
            this.shortcodeLink = this.shortcode ? this.$state.href("root.standardShrinkable.diagram", {
                shortcode: this.shortcode
            }, {
                absolute: !0
            }) : this.$state.href("root.standardShrinkable.home", null, {
                absolute: !0
            })
        }
        ,
        t.prototype.socialShare = function(e) {
            this.SharingService.share(e)
        }
        ,
        t.prototype.closeDialog = function() {
            this.$mdDialog.cancel()
        }
        ,
        t = __decorate([e.Component("QdbdApp.DiagramRenderer", "dtShortcode", {
            bindings: {
                shortcode: "@"
            },
            templateUrl: "cache/modules/diagram-renderer/dt-shortcode.html",
            controllerAs: "DtShortcodeVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "Default", {
            get: function() {
                return {
                    style: {
                        canvas: {
                            background: "#f5f6f6"
                        },
                        table: {
                            minWidth: 64,
                            minMidSpacing: 20,
                            header: {
                                background: "#005aa0",
                                color: "#fff",
                                border: {},
                                height: 40,
                                padding: {
                                    x: 13,
                                    y: 25
                                },
                                highlighting: {
                                    color: "#1b9bff"
                                }
                            },
                            contentPadding: {
                                height: 5
                            },
                            field: {
                                background: "#fff",
                                backgroundHover: "#f7f7f7",
                                color: "#323c46",
                                pkColor: "#005aa0",
                                typeColor: "#adb1b5",
                                border: {},
                                height: 25,
                                padding: {
                                    x: 13,
                                    y: 16
                                },
                                icon: {
                                    color: "#c2c7ce",
                                    rightOffset: 5,
                                    pk: {
                                        scale: .65,
                                        width: 15,
                                        offset: {
                                            y: 3
                                        }
                                    },
                                    uniq: {
                                        scale: .5,
                                        width: 11,
                                        offset: {
                                            y: 5.5
                                        }
                                    },
                                    index: {
                                        fill: "#afb3b6",
                                        stroke: "#000",
                                        scale: .014,
                                        width: 10,
                                        offset: {
                                            y: 5
                                        }
                                    }
                                },
                                highlighting: {
                                    color: "#e7f4ff"
                                }
                            }
                        },
                        relationship: {
                            verticalOverlapOffset: 60,
                            stroke: {
                                color: "#c3c3c3",
                                width: 1
                            },
                            hover: {
                                stroke: {
                                    color: "#323c46",
                                    opacity: .035,
                                    width: 13
                                }
                            },
                            delete: {
                                circle: {
                                    radius: 6,
                                    color: "#fa5a3c"
                                },
                                x: {
                                    width: 1,
                                    radius: 3,
                                    color: "white"
                                }
                            },
                            highlighting: {
                                color: "#1b9bff"
                            }
                        },
                        layout: {
                            nonExisting: {
                                padding: 30,
                                width: 175
                            }
                        },
                        port: {
                            maxBasePull: 50,
                            pullCoefficient: 1.6,
                            defaultRadius: 1,
                            offset: {
                                x: 12,
                                y: 17
                            },
                            one: {
                                height: 6,
                                offset: {
                                    x: 6
                                }
                            },
                            many: {
                                length: 7,
                                height: 6
                            },
                            zeroOne: {
                                radius: 3,
                                offset: {
                                    x: 5
                                }
                            },
                            zeroMany: {
                                radius: 2.5
                            },
                            connector: {
                                radius: 4,
                                sameSideThreshold: 40,
                                color: "#d2d2dc",
                                padding: {
                                    y: 12
                                }
                            }
                        }
                    },
                    basicStyle: {
                        canvas: {
                            background: "white"
                        },
                        table: {
                            header: {
                                background: "white",
                                color: "#323c46",
                                fontWeight: "bold",
                                border: {
                                    color: "#323c46",
                                    width: 2
                                },
                                highlighting: {
                                    color: "#323c46",
                                    textColor: "white"
                                }
                            },
                            field: {
                                color: "#323c46",
                                pkColor: "#323c46",
                                typeColor: "#323c46",
                                background: "white",
                                backgroundHover: "#f3f3f3",
                                border: {
                                    color: "#323c46",
                                    width: 2
                                },
                                icon: {
                                    color: "#a0a0a0",
                                    index: {
                                        fill: "#a0a0a0",
                                        stroke: "#000"
                                    }
                                },
                                highlighting: {
                                    color: "#efefef"
                                }
                            }
                        },
                        relationship: {
                            stroke: {
                                color: "#4e4e4e"
                            },
                            highlighting: {
                                color: "black"
                            }
                        },
                        port: {
                            connector: {
                                color: "#424242"
                            }
                        }
                    },
                    shapes: {
                        keyShape: "M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7, 6A6, 6 0 0, 0 1, 12A6, 6 0 0, 0 7, 18C9.61, 18 11.83, 16.33 12.65, 14H17V18H21V14H23V10H12.65Z",
                        uniqShape: "M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91, 9.19 13.74, 9.74L22, 18M7, 5A2, 2 0 0, 0 5, 7A2, 2 0 0, 0 7, 9A2, 2 0 0, 0 9, 7A2, 2 0 0, 0 7, 5Z",
                        indexShape: "M814.545 581.818v-23.273H535.273v-93.09h-46.546v93.09H209.455v139.637H256V605.09h232.727v93.09h46.546v-93.09H768v93.09h46.545V581.819zM674.91 465.455H349.091V139.636h325.818v325.819zM325.82 884.364H139.635V698.182h186.182v186.182z m279.272 0H418.909V698.182h186.182v186.182z m279.273 0H698.182V698.182h186.182v186.182zM395.636 418.909h232.728V186.182H395.636v232.727zM186.182 837.82h93.09v-93.092h-93.09v93.091z m279.273 0h93.09v-93.092h-93.09v93.091z m279.272 0h93.091v-93.092h-93.09v93.091z"
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    e.QRendConfig = t,
    angular.module("QdbdApp.DiagramRenderer").constant("QRendConfig", t.Default)
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t) {
            this.QRendTableService = e,
            this.QRendUtilsService = t,
            this.initializeCache()
        }
        return t.$inject = ["QRendTableService", "QRendUtilsService"],
        t.prototype.initializeCache = function() {
            this.cache = {
                tableToHl: "",
                tableHashesToLeave: [],
                tableHashesToDim: [],
                relHashesToDim: [],
                relHashesToHl: [],
                style: null
            }
        }
        ,
        t.prototype.highlightCached = function() {
            var e = this.QRendUtilsService.createTableHtmlId(this.cache.tableToHl);
            0 !== angular.element(".canvas").find("#" + e).length ? this.highlight(this.cache) : this.resetHighlighting()
        }
        ,
        t.prototype.highlight = function(e) {
            this.dimElements(e.tableHashesToDim),
            this.dimElements(e.relHashesToDim),
            this.hlElements(e.relHashesToHl),
            this.QRendUtilsService.moveTablesToFront(e.tableHashesToLeave),
            this.highlightTable(e.tableToHl),
            this.highlightFields(e.fieldsToHl, e.style)
        }
        ,
        t.prototype.resetHighlighting = function() {
            this.clearDimming(),
            this.clearHighlighting(),
            this.initializeCache()
        }
        ,
        t.prototype.clickHighlight = function(e, t, i, o) {
            this.resetHighlighting();
            var n = this.getRelsToLeave(e.sections.relationships, t)
              , r = _.map(n, function(e) {
                return e.hash
            })
              , a = this.getRelsToDim(e.sections.relationships, r)
              , s = _.map(a, function(e) {
                return e.hash
            })
              , c = this.getTablesIdentifiersToLeave(n, t)
              , d = this.QRendUtilsService.createTableHtmlIds(c)
              , l = this.getTableIdentifiersToDim(e.sections.tables, c, t)
              , u = this.QRendUtilsService.createTableHtmlIds(l)
              , p = this.getRelHashesToHl(n, i)
              , h = this.getFieldsToHl(e.sections.tables, n, t, i);
            this.cache = {
                tableToHl: t,
                fieldsToHl: h,
                tableHashesToLeave: d,
                tableHashesToDim: u,
                relHashesToHl: p,
                relHashesToDim: s,
                style: o
            },
            this.highlight(this.cache)
        }
        ,
        t.prototype.getRelsToLeave = function(e, t) {
            return _.filter(e, function(e) {
                return e.table1.tableIdentifier === t || e.table2.tableIdentifier === t
            })
        }
        ,
        t.prototype.getRelsToDim = function(e, t) {
            return _.filter(e, function(e) {
                return !_.include(t, e.hash)
            })
        }
        ,
        t.prototype.getTablesIdentifiersToLeave = function(e, t) {
            var i = [];
            return _.each(e, function(e) {
                var o;
                e.table1.tableIdentifier === t ? o = e.table2.tableIdentifier : e.table2.tableIdentifier === t && (o = e.table1.tableIdentifier),
                o && !_.find(i, function(e) {
                    return e === o
                }) && i.push(o)
            }),
            i
        }
        ,
        t.prototype.getTableIdentifiersToDim = function(e, t, i) {
            return _.filter(_.keys(e), function(e) {
                return e !== i && !_.includes(t, e)
            })
        }
        ,
        t.prototype.getRelHashesToHl = function(e, t) {
            if (!t)
                return [];
            var i = this.getRelsToHl(e, t);
            return _.map(i, function(e) {
                return e.hash
            })
        }
        ,
        t.prototype.getRelsToHl = function(e, t) {
            return _.filter(e, function(e) {
                return e.table1.fieldIdentifier === t || e.table2.fieldIdentifier === t
            })
        }
        ,
        t.prototype.getFieldsToHl = function(e, t, i, o) {
            return o ? [{
                tableIdentifier: i,
                fieldIdentifier: o,
                fieldIndex: e[i].fields[o].order,
                tableWidth: null,
                cssClass: "fhl",
                drawConnectors: !1
            }] : []
        }
        ,
        t.prototype.getSecondaryRelMember = function(e, t, i) {
            var o;
            return e.table1.tableIdentifier === t && e.table1.fieldIdentifier === i && (o = e.table2),
            e.table2.tableIdentifier === t && e.table2.fieldIdentifier === i && (o = e.table1),
            o
        }
        ,
        t.prototype.hlElements = function(e) {
            this.addClassToCanvasElements(e, "hl")
        }
        ,
        t.prototype.dimElements = function(e) {
            this.addClassToCanvasElements(e, "dim")
        }
        ,
        t.prototype.addClassToCanvasElements = function(e, t) {
            var i = angular.element(".canvas");
            _.each(e, function(e) {
                var o = i.find("#" + e);
                o && o.addClass(t)
            })
        }
        ,
        t.prototype.highlightTable = function(e) {
            var t = this.QRendUtilsService.createTableHtmlId(e);
            angular.element(".canvas").find("#" + t).addClass("hl"),
            this.QRendUtilsService.moveTableToFront(t)
        }
        ,
        t.prototype.highlightFields = function(e, t) {
            var i = this
              , o = angular.element(".canvas").find(".ts")[0];
            _.each(e, function(e) {
                var n = i.QRendUtilsService.createTableHtmlId(e.tableIdentifier)
                  , r = o.querySelector("#" + n)
                  , a = r.querySelector(".fa") || r.querySelector(".tf");
                e.tableWidth = parseInt(r.getAttribute("width"));
                var s = i.QRendTableService.createFieldBackground(e, t);
                r.insertBefore(s, a)
            })
        }
        ,
        t.prototype.clearDimming = function() {
            angular.element(".canvas").find(".dim").removeClass("dim")
        }
        ,
        t.prototype.clearHighlighting = function() {
            var e = angular.element(".canvas");
            e.find(".hl").removeClass("hl"),
            e.find(".fhl").remove()
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendEventHighlightService")], t)
    }();
    e.QRendEventHighlightService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s) {
            this.$rootScope = e,
            this.QRendTableService = t,
            this.QRendRelService = i,
            this.QRendSvgService = o,
            this.QRendUtilsService = n,
            this.QRendEventHighlightService = r,
            this.SourceEditorService = a,
            this.TrackingService = s
        }
        return t.$inject = ["$rootScope", "QRendTableService", "QRendRelService", "QRendSvgService", "QRendUtilsService", "QRendEventHighlightService", "SourceEditorService", "TrackingService"],
        t.prototype.addEventHandlers = function(e, t, i, o) {
            function n(o, n) {
                function a(e) {
                    var i = t.viewport.zoom / 100;
                    b = !0,
                    s(e, i),
                    c()
                }
                function s(e, t) {
                    var i = -(e.x - g.x) / t
                      , r = -(e.y - g.y) / t;
                    o.x += i,
                    o.y += r,
                    l.setAttribute("x", o.x),
                    l.setAttribute("y", o.y),
                    w.$rootScope.$broadcast("diagram-table-moved", o, n)
                }
                function c() {
                    if (!u) {
                        var o = _.filter(e.sections.relationships, function(e) {
                            return e.table1.tableIdentifier === n || e.table2.tableIdentifier === n
                        });
                        u = _.map(o, function(e) {
                            return {
                                object: e,
                                element: p.querySelector("#" + w.QRendUtilsService.createRelationshipHtmlId(e))
                            }
                        })
                    }
                    _.each(u, function(o) {
                        w.QRendRelService.updateRelationship(o.element, e, t, o.object, i)
                    })
                }
                var d = w.QRendUtilsService.createTableHtmlId(n)
                  , l = p.querySelector("#" + d)
                  , u = null;
                l.addEventListener("mousedown", function(e) {
                    f = a,
                    u = null,
                    b = !1,
                    w.QRendUtilsService.moveTableElementToFront(l),
                    e.stopPropagation()
                }),
                l.addEventListener("mouseup", function(t) {
                    f = null,
                    b ? y = null : (y || D ? y = null : w.QRendEventHighlightService.clickHighlight(e, n),
                    y && y.line && w.$rootScope.$broadcast("diagram-table-row-clicked", y.line))
                }),
                l.addEventListener("mouseenter", function(t) {
                    t && (r(e.sections.tables[n], o, n, l),
                    D || l.classList.add("hover"))
                }),
                l.addEventListener("mouseleave", function(e) {
                    e && (l.classList.remove("hover"),
                    angular.element(".fa").remove())
                })
            }
            function r(e, t, o, n) {
                if (!n.querySelector(".fa")) {
                    var r = parseInt(n.getAttribute("width"))
                      , s = n.querySelector(".tf");
                    _.each(e.fields, function(c) {
                        var d = w.QRendTableService.createFieldBackground({
                            fieldIdentifier: c.identifier,
                            fieldIndex: c.order,
                            tableIdentifier: o,
                            tableWidth: r,
                            cssClass: "fa",
                            drawConnectors: "qdbdvirtualfield" !== c.identifier
                        }, i);
                        n.insertBefore(d, s),
                        a(c, e, t, d, n)
                    })
                }
            }
            function a(o, n, r, a, c) {
                function d(e) {
                    e.element.addEventListener("mousedown", function(t) {
                        return l(t, e)
                    })
                }
                function l(e, i) {
                    e.stopPropagation();
                    var n = t.viewport.zoom / 100
                      , r = u.offset();
                    f = h,
                    D = o,
                    x = c.width.baseVal.value * n;
                    var a = m(e, n);
                    E = {
                        x: a - r.left,
                        y: e.y - r.top,
                        orientation: i.orientation,
                        type: "none"
                    }
                }
                function h() {
                    T(),
                    M(w.QRendRelService.createConnectorPath(E, g, i))
                }
                function m(e, t) {
                    return document.elementFromPoint(e.clientX, e.clientY).getBoundingClientRect().left + i.port.connector.radius * t
                }
                function C() {
                    D && w.$rootScope.$broadcast("diagram-ports-connected", {
                        fromLine: D.line,
                        toTable: n.caption,
                        toField: o.caption,
                        toLine: o.line
                    }),
                    A()
                }
                function T() {
                    "left" === E.orientation ? g.x > E.x + x + i.port.connector.sameSideThreshold && (E.orientation = "right",
                    E.x += x) : g.x < E.x - x - i.port.connector.sameSideThreshold && (E.orientation = "left",
                    E.x -= x)
                }
                function M(e) {
                    (S = p.querySelector("#" + $)) ? S.setAttribute("d", e) : p.appendChild(w.QRendSvgService.svgRelationshipPathFactory($, e))
                }
                function A() {
                    s(),
                    E = null,
                    S = null,
                    x = null,
                    D = null,
                    y = null
                }
                var k = w.QRendUtilsService.createConnectorHtmlClass(n.identifier, o.identifier)
                  , $ = "temp-connection"
                  , x = null
                  , E = null
                  , V = null;
                a.addEventListener("mousedown", function(e) {
                    y = o
                }),
                a.addEventListener("mouseup", function(t) {
                    b || y !== o || w.QRendEventHighlightService.clickHighlight(e, n.identifier, o.identifier, i)
                }),
                "qdbdvirtualfield" !== o.identifier && (a.addEventListener("mouseenter", function(e) {
                    D && (v = C,
                    a.querySelector(".bg").classList.add("hover"))
                }),
                a.addEventListener("mouseleave", function(e) {
                    D && (v = A,
                    a.querySelector(".bg").classList.remove("hover"))
                }),
                function() {
                    var e = c.getElementsByClassName(k);
                    V = {
                        left: {
                            element: e[0],
                            orientation: "left"
                        },
                        right: {
                            element: e[1],
                            orientation: "right"
                        }
                    }
                }(),
                d(V.left),
                d(V.right))
            }
            function s() {
                var e = angular.element("#temp-connection");
                e && e.remove()
            }
            function c(e) {
                var t = document.elementFromPoint(e.clientX, e.clientY);
                return t && t.classList.contains("diagram-root")
            }
            function d(e) {
                var t = document.elementFromPoint(e.clientX, e.clientY);
                return t && t.classList.contains("hr")
            }
            function l(e) {
                var t = document.elementFromPoint(e.clientX, e.clientY);
                return t && t.classList.contains("dc")
            }
            var u = angular.element(".canvas")
              , p = angular.element(".diagram-root")[0]
              , h = angular.element(".drawing-wrapper")[0]
              , m = angular.element(".hrs")
              , g = null
              , f = null
              , v = null
              , b = !1
              , S = null
              , y = null
              , D = null
              , w = this;
            !function() {
                function e(e) {
                    l = !1,
                    f = n,
                    u.addClass("dragged")
                }
                function i(e) {
                    var t = g
                      , i = u.offset();
                    g = {
                        x: e.clientX - i.left,
                        y: e.clientY - i.top
                    },
                    f && f(t, g)
                }
                function n(e, i) {
                    if (e) {
                        var n = -(e.x - g.x)
                          , r = -(e.y - g.y);
                        t.viewport.position.x += n,
                        t.viewport.position.y += r,
                        o(h, t.viewport),
                        w.$rootScope.$broadcast("diagram-dragged", t.viewport.position),
                        l = !0
                    }
                }
                function r(e) {
                    f = null,
                    v && (v(),
                    v = null),
                    u.removeClass("dragged"),
                    d(e),
                    s()
                }
                function a(e) {
                    if (w.SourceEditorService.isCanvasMouseZoomEnabled()) {
                        var i = Math.sign(-1 * e.deltaY)
                          , n = 10 * i
                          , r = !1
                          , a = t.viewport.zoom / 100;
                        t.viewport.zoom += n,
                        t.viewport.zoom > 200 ? (t.viewport.zoom = 200,
                        r = !0) : t.viewport.zoom < 10 && (t.viewport.zoom = 10,
                        r = !0);
                        var s = t.viewport.zoom / 100;
                        if (!r && g) {
                            var c = {
                                x: t.viewport.position.x / a,
                                y: t.viewport.position.y / a
                            }
                              , d = {
                                x: g.x / a,
                                y: g.y / a
                            }
                              , l = {
                                x: d.x - c.x,
                                y: d.y - c.y
                            }
                              , u = {
                                x: g.x / s,
                                y: g.y / s
                            }
                              , p = {
                                x: u.x - l.x,
                                y: u.y - l.y
                            }
                              , m = {
                                x: p.x * s,
                                y: p.y * s
                            };
                            t.viewport.position.x = m.x,
                            t.viewport.position.y = m.y
                        }
                        o(h, t.viewport),
                        w.$rootScope.$broadcast("diagram-viewport-set", t.viewport),
                        w.TrackingService.trackZoom(t.viewport.zoom, i > 0 ? "IN" : "OUT")
                    }
                }
                function d(e) {
                    !l && c(e) && w.QRendEventHighlightService.resetHighlighting()
                }
                var l;
                p.addEventListener("mousedown", function(t) {
                    return e()
                }),
                p.addEventListener("mousemove", function(e) {
                    return i(e)
                }),
                p.addEventListener("mouseup", function(e) {
                    return r(e)
                }),
                p.addEventListener("mouseleave", function(e) {
                    return r(e)
                }),
                p.addEventListener("wheel", function(e) {
                    return a(e)
                })
            }(),
            _.each(t.layout, function(e, t) {
                return n(e, t)
            }),
            function() {
                function o(e) {
                    l(e) || m.empty()
                }
                function n(e) {
                    m.empty()
                }
                function r(e, t) {
                    w.$rootScope.$broadcast("diagram-link-removed", t.line),
                    m.empty()
                }
                var a = angular.element(".r");
                a.on("mouseenter", function(a) {
                    if (m.empty(),
                    !D) {
                        var s = a.target
                          , c = s.attributes.d.value
                          , d = _.find(e.sections.relationships, {
                            hash: s.id
                        })
                          , l = w.QRendRelService.getRelationshipMidpoint(e, t, d, i)
                          , u = w.QRendSvgService.svgPathFactory(c, {
                            class: "hr"
                        })
                          , p = w.QRendSvgService.svgCircleFactory(l.x, l.y, i.relationship.delete.circle.radius, {
                            class: "dc"
                        })
                          , h = w.QRendSvgService.svgDeletePathX(l, i.relationship.delete.x.radius);
                        m.append(u),
                        m.append(p),
                        m.append(h),
                        u.addEventListener("mouseleave", o),
                        p.addEventListener("mouseleave", n),
                        p.addEventListener("click", function(e) {
                            return r(0, d)
                        })
                    }
                }),
                a.on("mouseleave", function(e) {
                    d(e) || l(e) || m.empty()
                })
            }()
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendEventService")], t)
    }();
    e.QRendEventService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t) {
            this.QRendSvgService = e,
            this.QRendUtilsService = t
        }
        return t.$inject = ["QRendSvgService", "QRendUtilsService"],
        t.prototype.createRelationships = function(e, t, i) {
            var o = this
              , n = this.QRendSvgService.svgGroupFactory({
                class: "rs"
            });
            return _.each(e.sections.relationships, function(r) {
                var a = o.createRelationship(e, t, r, i);
                n.appendChild(a)
            }),
            n
        }
        ,
        t.prototype.createRelationship = function(e, t, i, o) {
            var n = this.createRelationshipPath(e, t, i, o);
            return i.hash = this.QRendUtilsService.createRelationshipHtmlId(i),
            this.QRendSvgService.svgRelationshipPathFactory(i.hash, n)
        }
        ,
        t.prototype.updateRelationship = function(e, t, i, o, n) {
            var r = this.createRelationshipPath(t, i, o, n);
            e.setAttribute("d", r)
        }
        ,
        t.prototype.createRelationshipPath = function(e, t, i, o) {
            var n = this.createRelationshipPort(e, t, i.table1, o)
              , r = this.createRelationshipPort(e, t, i.table2, o);
            return this.isSelfReferencingRelationship(i) ? this.createSameSideRelationshipPath(n, r, o) : this.isVerticallyOverlappingRelationship(n, r, o) ? (this.adjustSameSidePortOrientation(n, r),
            this.createSameSideRelationshipPath(n, r, o)) : (this.adjustDifferentSidePortOrientation(n, r),
            this.createDifferentSideRelationshipPath(n, r, o))
        }
        ,
        t.prototype.getRelationshipMidpoint = function(e, t, i, o) {
            var n = this.createRelationshipPort(e, t, i.table1, o)
              , r = this.createRelationshipPort(e, t, i.table2, o);
            if (this.isSelfReferencingRelationship(i)) {
                a = this.getCShapedBezier(n, r, o);
                return this.getCShapeBezierMidpoint(a)
            }
            if (this.isVerticallyOverlappingRelationship(n, r, o)) {
                this.adjustSameSidePortOrientation(n, r);
                var a = this.getCShapedBezier(n, r, o);
                return this.getCShapeBezierMidpoint(a)
            }
            return this.adjustDifferentSidePortOrientation(n, r),
            this.getSShapedBezier(n, r, o).portMidpoint
        }
        ,
        t.prototype.isSelfReferencingRelationship = function(e) {
            return e.table1.tableIdentifier === e.table2.tableIdentifier
        }
        ,
        t.prototype.isVerticallyOverlappingRelationship = function(e, t, i) {
            var o = i.relationship.verticalOverlapOffset;
            return e.x >= t.x - o && e.x <= t.adjustedRightX + o || e.adjustedRightX >= t.x - o && e.adjustedRightX <= t.adjustedRightX + o
        }
        ,
        t.prototype.adjustSameSidePortOrientation = function(e, t) {
            var i = Math.abs(e.x - t.x);
            Math.abs(e.adjustedRightX - t.adjustedRightX) < i && (e.x = e.adjustedRightX,
            e.orientation = "right",
            t.x = t.adjustedRightX,
            t.orientation = "right")
        }
        ,
        t.prototype.createSameSideRelationshipPath = function(e, t, i) {
            var o = this.getCShapedBezier(e, t, i)
              , n = "M" + this.QRendSvgService.formatPathPoint(o.port1) + " C " + this.QRendSvgService.formatPathPoint(o.controlPoint1) + ", " + this.QRendSvgService.formatPathPoint(o.controlPoint2) + ", " + this.QRendSvgService.formatPathPoint(o.port2);
            return this.createRelationshipPathCommand(n, e, t, i)
        }
        ,
        t.prototype.getCShapedBezier = function(e, t, i) {
            var o = this.calculatePointDistance(e, t) / 3
              , n = "left" === e.orientation
              , r = n ? -1 : 1
              , a = e.x - t.x
              , s = _.min([o, i.port.maxBasePull]) * r
              , c = a * i.port.pullCoefficient
              , d = 0
              , l = 0;
            return n ? a < 0 ? l = c : d = -c : a < 0 ? d = -c : l = c,
            {
                port1: e,
                controlPoint1: {
                    x: e.x + s + d,
                    y: e.y
                },
                controlPoint2: {
                    x: t.x + s + l,
                    y: t.y
                },
                port2: t
            }
        }
        ,
        t.prototype.createDifferentSideRelationshipPath = function(e, t, i) {
            var o = this.getSShapedBezier(e, t, i)
              , n = "M" + this.QRendSvgService.formatPathPoint(o.port1) + " Q " + this.QRendSvgService.formatPathPoint(o.controlPoint) + ", " + this.QRendSvgService.formatPathPoint(o.portMidpoint) + " T " + this.QRendSvgService.formatPathPoint(t);
            return this.createRelationshipPathCommand(n, e, t, i)
        }
        ,
        t.prototype.createRelationshipPathCommand = function(e, t, i, o) {
            return this.createCrowsFootPath(t, o) + " " + e + " " + this.createCrowsFootPath(i, o)
        }
        ,
        t.prototype.getSShapedBezier = function(e, t, i) {
            var o = this.calculateMidpoint(e, t);
            return {
                port1: e,
                controlPoint: {
                    x: this.calculateMidpoint(e, o).x,
                    y: e.y
                },
                portMidpoint: o,
                port2: t
            }
        }
        ,
        t.prototype.adjustDifferentSidePortOrientation = function(e, t) {
            e.adjustedRightX < t.x ? (e.x = e.adjustedRightX,
            e.orientation = "right") : e.x > t.adjustedRightX && (t.x = t.adjustedRightX,
            t.orientation = "right")
        }
        ,
        t.prototype.createRelationshipPort = function(e, t, i, o) {
            var n = i.tableIdentifier
              , r = i.fieldIdentifier
              , a = this.QRendUtilsService.getSchemaField(e, n, r)
              , s = t.layout[n];
            return this.createPort(s, a, i.type, o)
        }
        ,
        t.prototype.createPort = function(e, t, i, o) {
            var n = e.x
              , r = _.round(n + e.width, 2)
              , a = n - o.port.offset.x
              , s = r + o.port.offset.x
              , c = o.table.header.height - o.table.field.height + (t.order + 1) * o.table.field.height;
            return {
                x: a,
                y: e.y + c + o.port.offset.y,
                baseLeftX: n,
                baseRightX: r,
                adjustedLeftX: a,
                adjustedRightX: s,
                orientation: "left",
                type: i
            }
        }
        ,
        t.prototype.createCrowsFootPath = function(e, t) {
            switch (e.type) {
            case "one":
                return this.createOneCrowsFootPath(e, t);
            case "many":
                return this.createManyCrowsFootPath(e, t);
            case "zeroOne":
                return this.createZeroOneCrowsFootPath(e, t);
            case "zeroMany":
                return this.createZeroManyCrowsFootPath(e, t);
            case "none":
                return "";
            case "default":
            default:
                return this.createDefaultCrowsFootPath(e, t)
            }
        }
        ,
        t.prototype.createDefaultCrowsFootPath = function(e, t) {
            var i = "left" === e.orientation
              , o = i ? -1 : 1
              , n = i ? e.baseLeftX : e.baseRightX;
            return this.createDotPath(n, e.y, t.port.defaultRadius) + " " + this.createLinePath(n, e.y, n + o * t.port.offset.x, e.y)
        }
        ,
        t.prototype.createOneCrowsFootPath = function(e, t) {
            var i = "left" === e.orientation
              , o = i ? -1 : 1
              , n = i ? e.baseLeftX : e.baseRightX;
            return this.createDotPath(n, e.y, t.port.defaultRadius) + " " + this.createLinePath(n, e.y, n + o * t.port.offset.x, e.y) + " " + this.createLinePath(n + o * t.port.one.offset.x, e.y + t.port.one.height, n + o * t.port.one.offset.x, e.y - t.port.one.height)
        }
        ,
        t.prototype.createManyCrowsFootPath = function(e, t) {
            var i = "left" === e.orientation
              , o = i ? -1 : 1
              , n = i ? e.baseLeftX : e.baseRightX;
            return this.createDotPath(n, e.y, t.port.defaultRadius) + " " + this.createLinePath(n, e.y, n + o * t.port.offset.x, e.y) + " " + this.createFootPath(n, e.y, o, t)
        }
        ,
        t.prototype.createZeroOneCrowsFootPath = function(e, t) {
            var i = "left" === e.orientation
              , o = i ? -1 : 1
              , n = i ? e.baseLeftX : e.baseRightX
              , r = t.port.offset.x / 2;
            return this.createDotPath(n, e.y, t.port.defaultRadius) + " " + this.createLinePath(n, e.y, n + o * (r - t.port.zeroOne.radius), e.y) + " " + this.createCirclePath(n + o * r, e.y, t.port.zeroOne.radius) + " " + this.createLinePath(n + o * (r + t.port.zeroOne.radius), e.y, n + o * t.port.offset.x, e.y)
        }
        ,
        t.prototype.createZeroManyCrowsFootPath = function(e, t) {
            var i = "left" === e.orientation
              , o = i ? -1 : 1
              , n = i ? e.baseLeftX : e.baseRightX;
            return this.createDotPath(n, e.y, t.port.defaultRadius) + " " + this.createLinePath(n, e.y, n + o * t.port.many.length, e.y) + " " + this.createFootPath(n, e.y, o, t) + " " + this.createCirclePath(n + o * (t.port.offset.x - t.port.zeroMany.radius), e.y, t.port.zeroMany.radius)
        }
        ,
        t.prototype.createLinePath = function(e, t, i, o) {
            var n = this.QRendSvgService.formatPathCoordinates(e, t);
            return "M" + n + " L" + n + " " + this.QRendSvgService.formatPathCoordinates(i, o)
        }
        ,
        t.prototype.createFootPath = function(e, t, i, o) {
            var n = this.createDotPath(e, t + o.port.many.height, o.port.defaultRadius)
              , r = this.QRendSvgService.formatPathCoordinates(e, t + o.port.many.height);
            return n + " M" + r + " L" + r + " " + this.QRendSvgService.formatPathCoordinates(e + i * o.port.many.length, t) + " " + this.QRendSvgService.formatPathCoordinates(e, t - o.port.many.height) + " " + this.createDotPath(e, t - o.port.many.height, o.port.defaultRadius)
        }
        ,
        t.prototype.createDotPath = function(e, t, i) {
            return i <= 0 ? "" : this.createCirclePath(e, t, i) + " " + this.createDotPath(e, t, i - .5)
        }
        ,
        t.prototype.createCirclePath = function(e, t, i) {
            return ["M " + e + " " + t, "m -" + i + ", 0", "a " + i + "," + i + " 0 1,0 " + 2 * i + ",0", "a " + i + "," + i + " 0 1,0 -" + 2 * i + ",0"].join(" ")
        }
        ,
        t.prototype.calculateMidpoint = function(e, t) {
            return {
                x: _.round((e.x + t.x) / 2, 2),
                y: _.round((e.y + t.y) / 2, 2)
            }
        }
        ,
        t.prototype.calculatePointDistance = function(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }
        ,
        t.prototype.createHoverRelationshipsContainer = function() {
            return this.QRendSvgService.svgGroupFactory({
                class: "hrs"
            })
        }
        ,
        t.prototype.getCShapeBezierMidpoint = function(e) {
            for (var t = [e.port1, e.controlPoint1, e.controlPoint2, e.port2], i = [], o = 1; o < 4; o++) {
                var n = this.calculateMidpoint(t[o - 1], t[o]);
                i.push(n)
            }
            return i.push(this.calculateMidpoint(i[0], i[1])),
            i.push(this.calculateMidpoint(i[1], i[2])),
            i.push(this.calculateMidpoint(i[3], i[4])),
            i[5]
        }
        ,
        t.prototype.createConnectorPath = function(e, t, i) {
            return t.type = "none",
            this.isSameSameSideConnection(e, t, i) ? this.createSameSideRelationshipPath(e, t, i) : this.createDifferentSideRelationshipPath(e, t, i)
        }
        ,
        t.prototype.isSameSameSideConnection = function(e, t, i) {
            return "left" === e.orientation ? e.x - i.port.connector.sameSideThreshold < t.x : e.x + i.port.connector.sameSideThreshold > t.x
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendRelService")], t)
    }();
    e.QRendRelService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t) {
            this.QRendSvgService = e,
            this.QRendUtilsService = t
        }
        return t.$inject = ["QRendSvgService", "QRendUtilsService"],
        t.prototype.createStyleSheet = function(e) {
            var t = this.QRendSvgService.svgStyleFactory()
              , i = this.getStyleRules(e);
            return t.textContent = this.buildStyle(i),
            t
        }
        ,
        t.prototype.getStyleRules = function(e) {
            return {
                ".diagram-root": {
                    "font-family": '"Helvetica Neue", sans-serif',
                    "font-size": "12px"
                },
                ".t": {
                    overflow: "visible"
                },
                ".t-bg": {
                    y: e.table.header.height,
                    fill: e.table.field.background,
                    stroke: e.table.field.border.color,
                    "stroke-width": e.table.field.border.width
                },
                ".th": {
                    fill: e.table.header.background,
                    stroke: e.table.header.border.color,
                    "stroke-width": e.table.header.border.width
                },
                ".tht": {
                    fill: e.table.header.color,
                    "font-size": "14px",
                    "font-weight": e.table.header.fontWeight
                },
                ".tf": {
                    fill: e.table.field.color,
                    overflow: "visible"
                },
                ".tf.pk": {
                    fill: e.table.field.pkColor,
                    "font-weight": "bold"
                },
                ".tf.fk": {
                    "font-weight": "bold"
                },
                ".ty": {
                    fill: e.table.field.typeColor,
                    "font-weight": "normal",
                    "text-anchor": "end"
                },
                ".r": {
                    fill: "transparent",
                    stroke: e.relationship.stroke.color,
                    "stroke-width": e.relationship.stroke.width
                },
                ".l": {
                    stroke: e.relationship.stroke.width
                },
                ".i": {
                    fill: e.table.field.icon.color,
                    stroke: e.table.field.icon.color
                },
                ".i.ix": {
                    fill: e.table.field.icon.index.fill,
                    stroke: e.table.field.icon.index.stroke
                },
                ".fa": {
                    fill: "transparent",
                    overflow: "visible"
                },
                ".fa .bg.hover": {
                    fill: e.table.field.backgroundHover
                },
                ".c": {
                    cy: e.port.connector.padding.y,
                    r: e.port.connector.radius,
                    stroke: e.port.connector.color,
                    fill: e.port.connector.color
                },
                ".hr": {
                    fill: "transparent",
                    stroke: e.relationship.hover.stroke.color,
                    "stroke-opacity": e.relationship.hover.stroke.opacity,
                    "stroke-width": e.relationship.hover.stroke.width
                },
                ".dc": {
                    stroke: e.relationship.delete.circle.color,
                    fill: e.relationship.delete.circle.color
                },
                ".x": {
                    stroke: e.relationship.delete.x.color,
                    "stroke-width": e.relationship.delete.x.width
                },
                ".hl .th": {
                    fill: e.table.header.highlighting.color
                },
                ".hl .tht": {
                    fill: e.table.header.highlighting.textColor
                },
                ".fhl .bg": {
                    fill: e.table.field.highlighting.color
                },
                ".fhls .bg": {
                    fill: e.table.field.highlighting.softColor
                },
                ".r.hl": {
                    stroke: e.relationship.highlighting.color
                },
                ".dim": {
                    opacity: .25
                }
            }
        }
        ,
        t.prototype.buildStyle = function(e) {
            var t = this;
            return _.map(e, function(e, i) {
                return t.buildSelectorStyle(i, e)
            }).join(" ")
        }
        ,
        t.prototype.buildSelectorStyle = function(e, t) {
            return e + " { " + this.serializeRules(t) + " }"
        }
        ,
        t.prototype.serializeRules = function(e) {
            return _.map(e, function(e, t) {
                return e ? t + ": " + e + ";" : ""
            }).join(" ")
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendStyleService")], t)
    }();
    e.QRendStyleService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.QRendConfig = e,
            this.shapes = this.QRendConfig.shapes
        }
        return t.$inject = ["QRendConfig"],
        t.prototype.svgRootFactory = function(e) {
            return this.svgElementFactory("svg", e)
        }
        ,
        t.prototype.svgStyleFactory = function() {
            return this.svgElementFactory("style")
        }
        ,
        t.prototype.svgGroupFactory = function(e) {
            return this.svgElementFactory("g", e)
        }
        ,
        t.prototype.svgRectFactory = function(e) {
            return this.svgElementFactory("rect", e)
        }
        ,
        t.prototype.svgTextFactory = function(e) {
            return this.svgElementFactory("text", e)
        }
        ,
        t.prototype.svgPlainTextFactory = function(e, t) {
            var i = this.svgElementFactory("text", t);
            return i.innerHTML = e,
            i
        }
        ,
        t.prototype.svgTSpanFactory = function(e, t) {
            var i = this.svgElementFactory("tspan", t);
            return i.innerHTML = e,
            i
        }
        ,
        t.prototype.svgLineFactory = function(e, t) {
            return this.svgElementFactory("line", {
                x1: e.x,
                y1: e.y,
                x2: t.x,
                y2: t.y,
                class: "l"
            })
        }
        ,
        t.prototype.svgRelationshipPathFactory = function(e, t) {
            return this.svgPathFactory(t, {
                id: e,
                class: "r"
            })
        }
        ,
        t.prototype.svgPkIconFactory = function(e, t, i) {
            var o = {
                class: "i pk",
                transform: "translate(" + e + ", " + (t + i.table.field.icon.pk.offset.y) + ")" + " " + ("scale(" + i.table.field.icon.pk.scale + ")")
            };
            return this.svgPathFactory(this.shapes.keyShape, o)
        }
        ,
        t.prototype.svgUniqIconFactory = function(e, t, i) {
            var o = {
                class: "i uq",
                transform: "translate(" + e + ", " + (t + i.table.field.icon.uniq.offset.y) + ")" + " " + ("scale(" + i.table.field.icon.uniq.scale + ")")
            };
            return this.svgPathFactory(this.shapes.uniqShape, o)
        }
        ,
        t.prototype.svgIndexIconFactory = function(e, t, i) {
            var o = {
                class: "i ix",
                transform: "translate(" + e + ", " + (t + i.table.field.icon.index.offset.y) + ")" + " " + ("scale(" + i.table.field.icon.index.scale + ")")
            };
            return this.svgPathFactory(this.shapes.indexShape, o)
        }
        ,
        t.prototype.svgPathFactory = function(e, t) {
            return this.svgElementFactory("path", _.extend({
                d: e
            }, t))
        }
        ,
        t.prototype.svgConnectorFactory = function(e, t, i) {
            return this.svgElementFactory("circle", _.extend({
                cx: e,
                class: t
            }, i))
        }
        ,
        t.prototype.svgCircleFactory = function(e, t, i, o) {
            var n = _.extend({
                cx: e,
                cy: t,
                r: i || 5
            }, o);
            return n.color && (n.stroke = n.color,
            n.fill = n.color,
            delete n.color),
            this.svgElementFactory("circle", n)
        }
        ,
        t.prototype.svgDeletePathX = function(e, t) {
            var i = {
                x: e.x - t,
                y: e.y - t
            }
              , o = {
                x: e.x + t,
                y: e.y + t
            }
              , n = {
                x: e.x - t,
                y: e.y + t
            }
              , r = {
                x: e.x + t,
                y: e.y - t
            }
              , a = "M" + this.formatPathPoint(i) + " " + this.formatPathPoint(o) + " M" + this.formatPathPoint(n) + " " + this.formatPathPoint(r);
            return this.svgPathFactory(a, {
                class: "x"
            })
        }
        ,
        t.prototype.svgElementFactory = function(e, t) {
            var i = document.createElementNS("http://www.w3.org/2000/svg", e);
            return t && _.each(t, function(e, t) {
                i.setAttribute(t, e)
            }),
            i
        }
        ,
        t.prototype.formatPathPoint = function(e) {
            return this.formatPathCoordinates(e.x, e.y)
        }
        ,
        t.prototype.formatPathCoordinates = function(e, t) {
            return e + " " + t
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendSvgService")], t)
    }();
    e.QRendSvgService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t) {
            this.QRendSvgService = e,
            this.QRendUtilsService = t
        }
        return t.$inject = ["QRendSvgService", "QRendUtilsService"],
        t.prototype.createTables = function(e, t, i) {
            var o = this
              , n = this.QRendSvgService.svgGroupFactory({
                class: "ts"
            });
            return _.each(e.sections.tables, function(e, r) {
                var a = o.createTable(e, r, t, i);
                n.appendChild(a)
            }),
            n
        }
        ,
        t.prototype.createTable = function(e, t, i, o) {
            var n = this
              , r = i.layout[t]
              , a = this.calculateTableWidth(e, i.sharedMetadata, o);
            r.width = a;
            var s = this.QRendSvgService.svgRootFactory({
                width: a,
                height: o.table.header.height + 2 * o.table.contentPadding.height + o.table.field.height * _.size(e.fields),
                x: r.x,
                y: r.y,
                id: this.QRendUtilsService.createTableHtmlId(t),
                class: "t"
            })
              , c = this.QRendUtilsService.getTableNameCaption(e)
              , d = this.createTableHeader(c, a, o);
            _.each(d, function(e) {
                s.appendChild(e)
            });
            var l = this.createTableBackground(a, _.size(e.fields), o);
            s.appendChild(l);
            var u = 0;
            if (_.each(e.fields, function(e) {
                var t = n.createTableField(e, u, i.sharedMetadata, a, o);
                _.each(t, function(e) {
                    return s.appendChild(e)
                }),
                u++
            }),
            _.isEmpty(e.fields)) {
                var p = this.createEmptyTableField(u, i.sharedMetadata, a, o);
                _.each(p, function(e) {
                    return s.appendChild(e)
                }),
                u++
            }
            return s
        }
        ,
        t.prototype.createTableHeader = function(e, t, i) {
            return [this.QRendSvgService.svgRectFactory({
                height: i.table.header.height,
                width: t,
                class: "th"
            }), this.QRendSvgService.svgPlainTextFactory(e, {
                x: i.table.header.padding.x,
                y: i.table.header.padding.y,
                class: "tht"
            })]
        }
        ,
        t.prototype.createTableBackground = function(e, t, i) {
            var o = 2 * i.table.contentPadding.height;
            t = t || 1;
            var n = {
                height: i.table.field.height * t + o,
                width: e,
                class: "t-bg"
            };
            return i.isSupportedBrowser || (n.y = i.table.header.height),
            this.QRendSvgService.svgRectFactory(n)
        }
        ,
        t.prototype.createTableField = function(e, t, i, o, n) {
            var r = n.table.header.height + n.table.contentPadding.height + n.table.field.height * t
              , a = this.createTableFieldText(e, i, o, r, n)
              , s = this.createTableFieldIcons(e, i, o, r, n);
            return [a].concat(s)
        }
        ,
        t.prototype.createEmptyTableField = function(e, t, i, o) {
            var n = {
                caption: "..."
            };
            return this.createTableField(n, e, t, i, o)
        }
        ,
        t.prototype.createTableFieldText = function(e, t, i, o, n) {
            var r = this.QRendUtilsService.getTableFieldNameCaption(e)
              , a = this.QRendSvgService.svgPlainTextFactory(r, {
                x: n.table.field.padding.x,
                y: o + n.table.field.padding.y,
                class: this.getTableFieldCssClass(e)
            });
            if (e.type) {
                var s = this.QRendUtilsService.getTableFieldTypeCaption(e, t);
                a.appendChild(this.QRendSvgService.svgTSpanFactory(s, {
                    x: i - n.table.field.padding.x,
                    class: "ty"
                }))
            }
            return a
        }
        ,
        t.prototype.getTableFieldCssClass = function(e) {
            var t = "tf";
            return e.isPk ? t += " pk" : e.isFk && (t += " fk"),
            t
        }
        ,
        t.prototype.createTableFieldIcons = function(e, t, i, o, n) {
            var r = []
              , a = this.QRendUtilsService.getTableFieldTypeCaption(e, t)
              , s = a ? this.QRendUtilsService.calculateTableFieldTextWidth(a) : 0
              , c = i - n.table.field.padding.x - s;
            return e.isPk && (c -= n.table.field.icon.pk.width,
            a && (c -= n.table.field.icon.rightOffset),
            r.push(this.QRendSvgService.svgPkIconFactory(c, o, n))),
            e.isUniq && (c -= n.table.field.icon.uniq.width,
            a && (c -= n.table.field.icon.rightOffset),
            r.push(this.QRendSvgService.svgUniqIconFactory(c, o, n))),
            e.isIdx && (c -= n.table.field.icon.index.width,
            a && (c -= n.table.field.icon.rightOffset),
            r.push(this.QRendSvgService.svgIndexIconFactory(c, o, n))),
            r
        }
        ,
        t.prototype.calculateTableWidth = function(e, t, i) {
            var o = this.QRendUtilsService.getTableNameCaption(e)
              , n = this.QRendUtilsService.calculateTableHeaderTextWidth(o)
              , r = this.calculateMaxFieldLength(e.fields, t, i)
              , a = 2 * i.table.field.padding.x
              , s = _.max([i.table.minWidth, n, r]);
            return _.round(s + a, 2)
        }
        ,
        t.prototype.calculateMaxFieldLength = function(e, t, i) {
            var o = this;
            return _.max(_.map(e, function(e) {
                var n = o.QRendUtilsService.getTableFieldNameCaption(e)
                  , r = o.QRendUtilsService.getTableFieldTypeCaption(e, t)
                  , a = e.isNullable ? "?" : ""
                  , s = o.QRendUtilsService.calculateTableFieldTextWidth(n + r + a);
                return e.isPk && (s += i.table.field.icon.pk.width,
                r && (s += i.table.field.icon.rightOffset)),
                e.isUniq && (s += i.table.field.icon.uniq.width,
                r && (s += i.table.field.icon.rightOffset)),
                e.isIdx && (s += i.table.field.icon.index.width,
                r && (s += i.table.field.icon.rightOffset)),
                s
            })) + i.table.minMidSpacing
        }
        ,
        t.prototype.createFieldBackground = function(e, t) {
            var i = t.table.header.height + t.table.contentPadding.height + t.table.field.height * e.fieldIndex
              , o = this.QRendSvgService.svgRootFactory({
                width: e.tableWidth,
                height: t.table.field.height,
                y: i,
                class: e.cssClass
            });
            if (o.appendChild(this.QRendSvgService.svgRectFactory({
                width: e.tableWidth,
                height: t.table.field.height,
                class: "bg"
            })),
            e.drawConnectors) {
                var n = this.createFieldConnectors(e.tableIdentifier, e.fieldIdentifier, e.tableWidth, t);
                _.each(n, function(e) {
                    o.appendChild(e)
                })
            }
            return o
        }
        ,
        t.prototype.createFieldConnectors = function(e, t, i, o) {
            var n = "c " + this.QRendUtilsService.createConnectorHtmlClass(e, t)
              , r = {
                cy: o.port.connector.padding.y,
                r: o.port.connector.radius
            };
            return [this.QRendSvgService.svgConnectorFactory(0, n + " l", r), this.QRendSvgService.svgConnectorFactory(i, n + " r", r)]
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendTableService")], t)
    }();
    e.QRendTableService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t) {
            this.$rootScope = e,
            this.CryptoService = t
        }
        return t.$inject = ["$rootScope", "CryptoService"],
        t.prototype.getSchemaTable = function(e, t) {
            return e.sections.tables[t]
        }
        ,
        t.prototype.getSchemaField = function(e, t, i) {
            var o = this.getSchemaTable(e, t);
            return e.sections.settings.isCaseSensitive ? o.fields[i] : _.find(o.fields, function(e, t) {
                return t.toLowerCase() === i.toLowerCase()
            })
        }
        ,
        t.prototype.createTableHtmlIds = function(e) {
            var t = this;
            return _.map(e, function(e) {
                return t.createTableHtmlId(e)
            })
        }
        ,
        t.prototype.createTableHtmlId = function(e) {
            return this.CryptoService.getUniqHash("t" + e)
        }
        ,
        t.prototype.createActiveFieldHtmlId = function(e, t) {
            return this.CryptoService.getUniqHash("f" + e + t)
        }
        ,
        t.prototype.createRelationshipHtmlId = function(e) {
            return this.CryptoService.getUniqHash("r" + e.table1.tableIdentifier + e.table1.fieldIdentifier + e.table2.tableIdentifier + e.table2.fieldIdentifier)
        }
        ,
        t.prototype.createConnectorHtmlClass = function(e, t) {
            return this.CryptoService.getUniqHash("p" + e + t)
        }
        ,
        t.prototype.calculateTableHeaderTextWidth = function(e) {
            return this.calculateTextWidth(e, "sans-serif", 14)
        }
        ,
        t.prototype.calculateTableFieldTextWidth = function(e) {
            return this.calculateTextWidth(e, "sans-serif", 12)
        }
        ,
        t.prototype.calculateTextWidth = function(e, t, i) {
            var o = this.get2dCtx();
            return o.font = i + "px " + t,
            o.measureText(e).width
        }
        ,
        t.prototype.get2dCtx = function() {
            if (!this.ctx) {
                var e = document.createElement("canvas");
                this.ctx = e.getContext("2d")
            }
            return this.ctx
        }
        ,
        t.prototype.getTableNameCaption = function(e) {
            return _.escape(e.caption)
        }
        ,
        t.prototype.getTableFieldNameCaption = function(e) {
            return "qdbdvirtualfield" === e.identifier ? "..." : _.escape(e.caption)
        }
        ,
        t.prototype.getTableFieldTypeCaption = function(e, t) {
            if (this.isObfuscatedField(e))
                return "";
            var i = e.type;
            if (!i || !_.trim(i)) {
                if (!t || !t.defaultType)
                    return "";
                i = t.defaultType
            }
            return e.isNullable ? i + "?" : i
        }
        ,
        t.prototype.isObfuscatedField = function(e) {
            return "..." === e.caption && "..." !== e.identifier
        }
        ,
        t.prototype.moveTablesToFront = function(e) {
            var t = angular.element(".ts")[0];
            _.each(e, function(e) {
                var i = t.querySelector("#" + e);
                t.appendChild(i)
            })
        }
        ,
        t.prototype.moveTableToFront = function(e) {
            var t = angular.element(".ts")[0].querySelector("#" + e);
            this.moveTableElementToFront(t)
        }
        ,
        t.prototype.moveTableElementToFront = function(e) {
            angular.element(".ts")[0].appendChild(e)
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendUtilsService")], t)
    }();
    e.QRendUtilsService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s) {
            this.SourceEditorService = e,
            this.BrowserSupportService = t,
            this.QRendStyleService = i,
            this.QRendTableService = o,
            this.QRendRelService = n,
            this.QRendSvgService = r,
            this.QRendEventService = a,
            this.QRendEventHighlightService = s
        }
        return t.$inject = ["SourceEditorService", "BrowserSupportService", "QRendStyleService", "QRendTableService", "QRendRelService", "QRendSvgService", "QRendEventService", "QRendEventHighlightService"],
        t.prototype.initializeRendering = function(e, t, i) {
            this.clear(),
            e ? e && e.sections && e.sections.tables && t && (console.time && console.time(),
            e = angular.copy(e),
            t = angular.copy(t),
            i = angular.copy(i),
            this.ensureAllTableDataSet(e, t, i),
            this.optimizeCoordinateValues(t),
            this.resolveBrowserSupport(i),
            this.render(e, t, i),
            console.timeEnd && console.timeEnd()) : this.clear()
        }
        ,
        t.prototype.ensureAllTableDataSet = function(e, t, i) {
            var o = 0;
            this.SourceEditorService.ensureViewportExists(t),
            this.SourceEditorService.ensureSharedMetadataExists(t),
            this.SourceEditorService.ensureLayoutExists(t),
            _.each(e.sections.tables, function(e) {
                t.sharedMetadata.defaultType && _.each(e.fields, function(e) {
                    e.type || "qdbdvirtualfield" === e.identifier || (e.type = t.sharedMetadata.defaultType)
                }),
                t.layout[e.identifier] || (t.layout[e.identifier] = {
                    x: i.layout.nonExisting.padding + o * i.layout.nonExisting.width,
                    y: i.layout.nonExisting.padding
                },
                o++)
            })
        }
        ,
        t.prototype.optimizeCoordinateValues = function(e) {
            _.each(e.layout, function(e) {
                e.x = _.round(e.x, 2),
                e.y = _.round(e.y, 2)
            })
        }
        ,
        t.prototype.resolveBrowserSupport = function(e) {
            e.isSupportedBrowser = !this.BrowserSupportService.isSpecialSnowflakeBrowser()
        }
        ,
        t.prototype.render = function(e, t, i) {
            var o = this
              , n = this.getCanvas()
              , r = this.createDiagramRoot(i)
              , a = this.QRendStyleService.createStyleSheet(i)
              , s = this.createMainGroup(t)
              , c = this.QRendTableService.createTables(e, t, i)
              , d = this.QRendRelService.createRelationships(e, t, i)
              , l = this.QRendRelService.createHoverRelationshipsContainer();
            n.appendChild(r),
            r.appendChild(a),
            r.appendChild(s),
            s.appendChild(d),
            s.appendChild(l),
            s.appendChild(c),
            this.QRendEventHighlightService.highlightCached(),
            this.QRendEventService.addEventHandlers(e, t, i, function(e, t) {
                return o.setDrawingTransformation(e, t)
            })
        }
        ,
        t.prototype.clear = function() {
            for (var e = this.getCanvas(); e.lastChild; )
                e.removeChild(e.lastChild)
        }
        ,
        t.prototype.getCanvas = function() {
            return angular.element(".canvas")[0]
        }
        ,
        t.prototype.createDiagramRoot = function(e) {
            return this.QRendSvgService.svgRootFactory({
                class: "diagram-root",
                style: "background: " + e.canvas.background,
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
            })
        }
        ,
        t.prototype.createMainGroup = function(e) {
            var t = this.QRendSvgService.svgGroupFactory({
                class: "drawing-wrapper"
            });
            return this.setDrawingTransformation(t, e.viewport),
            t
        }
        ,
        t.prototype.setDrawingTransformation = function(e, t) {
            var i = "translate(" + t.position.x + ", " + t.position.y + ")"
              , o = t.zoom ? "scale(" + t.zoom / 100 + ")" : "";
            e.setAttribute("transform", i + " " + o)
        }
        ,
        t = __decorate([e.Service("QdbdApp.DiagramRenderer", "QRendService")], t)
    }();
    e.QRendService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o) {
            this.$scope = e,
            this.SidenavService = t,
            this.SourceEditorService = i,
            this.SchemaDirService = o,
            this.dirTreeState = {},
            this.rightSidenav = this.SidenavService.rightSidenav,
            this.editorSize = this.SourceEditorService.editorSize,
            this.dirTreeState = this.SchemaDirService.dirTreeState
        }
        t.$inject = ["$scope", "SidenavService", "SourceEditorService", "SchemaDirService"],
        t = __decorate([e.Controller("QdbdApp.Home", "HomeCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t) {
            this.$scope = e,
            this.AccountService = t,
            this.credentials = {}
        }
        t.$inject = ["$scope", "AccountService"],
        t.prototype.login = function() {
            this.AccountService.login(this.credentials)
        }
        ,
        t.prototype.authenticate = function(e) {
            this.AccountService.socialAuth(e)
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Login", "LoginCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e) {
            this.MessageScreenService = e,
            this.init()
        }
        t.$inject = ["MessageScreenService"],
        t.prototype.init = function() {
            this.message = this.MessageScreenService.message
        }
        ,
        t = __decorate([e.Controller("QdbdApp.MessageScreen", "MessageScreenCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$state = e,
            this.message = {}
        }
        return t.$inject = ["$state"],
        t.prototype.showSuccess = function(e) {
            this.showMessage(e, "root.centered.successMessage")
        }
        ,
        t.prototype.showError = function(e) {
            this.showMessage(e, "root.centered.errorMessage")
        }
        ,
        t.prototype.showMessage = function(e, t) {
            this.resetErrorState(),
            this.message.status = e.status,
            this.message.header = e.header,
            this.message.message = e.message,
            this.message.buttonText = e.buttonText ? e.buttonText : "Continue",
            this.message.redirectRoute = e.redirectRoute ? e.redirectRoute : "root.standardShrinkable.home",
            this.$state.go(t)
        }
        ,
        t.prototype.resetErrorState = function() {
            this.message.status = "",
            this.message.header = ""
        }
        ,
        t = __decorate([e.Service("QdbdApp.MessageScreen", "MessageScreenService")], t)
    }();
    e.MessageScreenService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t) {
            this.AccountService = e,
            this.MessageScreenService = t,
            this.changeEmailModel = {}
        }
        t.$inject = ["AccountService", "MessageScreenService"],
        t.prototype.changeEmail = function() {
            var e = this;
            this.AccountService.changeEmail(this.changeEmailModel).then(function() {
                var t = {
                    header: "Please confirm your new e-mail",
                    message: "A confirmation e-mail was sent to your new email, after you confirm it your e-mail will be updated."
                };
                e.MessageScreenService.showSuccess(t)
            })
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "ChangeEmailCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t) {
            this.AccountService = e,
            this.MessageScreenService = t,
            this.changePasswordModel = {}
        }
        t.$inject = ["AccountService", "MessageScreenService"],
        t.prototype.changePassword = function() {
            var e = this;
            this.AccountService.changePassword(this.changePasswordModel).then(function() {
                var t = {
                    header: "Password changed",
                    message: "Your password has been successfully changed"
                };
                e.MessageScreenService.showSuccess(t)
            })
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "ChangePasswordCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$state = e,
            this.ToastService = t,
            this.AccountService = i,
            this.confirmEmail()
        }
        t.$inject = ["$state", "ToastService", "AccountService"],
        t.prototype.confirmEmail = function() {
            var e = this;
            this.AccountService.confirmEmail(this.$state.params.userId, this.$state.params.token).then(function() {
                e.ToastService.showInfo("Email confirmed."),
                e.$state.go("root.standardShrinkable.home")
            })
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "ConfirmEmailCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t) {
            this.AccountService = e,
            this.MessageScreenService = t,
            this.forgotPasswordModel = {}
        }
        t.$inject = ["AccountService", "MessageScreenService"],
        t.prototype.forgotPassword = function() {
            var e = this;
            this.AccountService.forgotPassword(this.forgotPasswordModel).then(function() {
                var t = {
                    header: "Email sent",
                    message: "An email with password reset details has been sent to your email address"
                };
                e.MessageScreenService.showSuccess(t)
            })
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "ForgotPasswordCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$scope = e,
            this.ToastService = t,
            this.AccountService = i,
            this.credentials = {}
        }
        t.$inject = ["$scope", "ToastService", "AccountService"],
        t.prototype.register = function() {
            this.AccountService.registerAccount(this.credentials)
        }
        ,
        t.prototype.authenticate = function(e) {
            this.AccountService.socialAuth(e)
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "RegisterCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$state = e,
            this.ToastService = t,
            this.AccountService = i,
            this.resetPasswordModel = {}
        }
        t.$inject = ["$state", "ToastService", "AccountService"],
        t.prototype.resetPassword = function() {
            var e = this;
            this.AccountService.validatePassword(this.resetPasswordModel.password).isValid && (this.resetPasswordModel.userId = this.$state.params.userId,
            this.resetPasswordModel.token = this.$state.params.token,
            this.AccountService.resetPassword(this.resetPasswordModel).then(function() {
                e.ToastService.showInfo("You are now logged in."),
                e.$state.go("root.standardShrinkable.home")
            }))
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "ResetPasswordCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$state = e,
            this.ToastService = t,
            this.AccountService = i,
            this.credentials = {}
        }
        t.$inject = ["$state", "ToastService", "AccountService"],
        t.prototype.setEmail = function() {
            var e = this;
            this.AccountService.setEmail(this.credentials).then(function() {
                e.AccountService.resolveCurrentUser(),
                e.ToastService.showInfo("Thanks for registering! You are now logged in."),
                e.$state.go("root.standardShrinkable.home")
            })
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Register", "SetEmailCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a, s, c, d, l) {
            this.$rootScope = e,
            this.$scope = t,
            this.$state = i,
            this.$timeout = o,
            this.$transitions = n,
            this.AccountService = r,
            this.RoutingService = a,
            this.SourceEditorService = s,
            this.SchemaDirService = c,
            this.ToastService = d,
            this.TrackingService = l,
            this.registerEventListeners(),
            this.loadInitialPageTitle(),
            this.TrackingService.initializeIntercom(),
            this.$rootScope.stateIncludes = this.RoutingService.stateIncludes.bind(this)
        }
        t.$inject = ["$rootScope", "$scope", "$state", "$timeout", "$transitions", "AccountService", "RoutingService", "SourceEditorService", "SchemaDirService", "ToastService", "TrackingService"],
        t.prototype.loadInitialPageTitle = function() {
            var e = this;
            this.$timeout(function() {
                e.setPageTitle(e.$state.current)
            })
        }
        ,
        t.prototype.registerEventListeners = function() {
            var e = this;
            this.$scope.$on("error-message", function(t, i) {
                e.ToastService.showError(JSON.stringify(i))
            }),
            this.$rootScope.$on("toast-error", function(t, i) {
                e.ToastService.showError(i)
            }),
            this.$scope.$on("unauthorized-request", function(t, i) {
                e.AccountService.onUnauthorizedRequest(t, i)
            }),
            this.$rootScope.$on("current-user-changed", function() {
                e.RoutingService.handleAuthRedirects(),
                e.TrackingService.profitWellTrack(),
                e.SchemaDirService.dirTreeState.showSharedDiagrams = !1
            }),
            this.$transitions.onSuccess({}, function(t) {
                t.from();
                var i = t.to();
                e.setPageTitle(i),
                e.RoutingService.handleAuthRedirects(),
                e.TrackingService.onRouteChange()
            })
        }
        ,
        t.prototype.setPageTitle = function(e) {
            e.data && e.data.title ? e.data.usesCustomPageTitleHandler || (this.$rootScope.pageTitle = e.data.title + " - QuickDBD") : this.$rootScope.pageTitle = "QuickDBD"
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Common", "RootCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a, s, c, d, l) {
            this.$scope = e,
            this.$rootScope = t,
            this.$state = i,
            this.$mdDialog = o,
            this.$timeout = n,
            this.SchemaService = r,
            this.SchemaDirService = a,
            this.SourceEditorService = s,
            this.CollaboratorsService = c,
            this.ToastService = d,
            this.TrackingService = l,
            this.tabIndex = 0,
            this.dirTreeState = this.SchemaDirService.dirTreeState,
            this.registerMenuActionListener(),
            this.initializeTree()
        }
        t.$inject = ["$scope", "$rootScope", "$state", "$mdDialog", "$timeout", "SchemaService", "SchemaDirService", "SourceEditorService", "CollaboratorsService", "ToastService", "TrackingService"],
        t.prototype.registerMenuActionListener = function() {
            var e = this;
            this.$scope.$on("editor-menu-action", function(t, i) {
                e[i] && e[i]()
            })
        }
        ,
        t.prototype.initializeTree = function() {
            return this.dirTreeState.showSharedDiagrams ? this.getSharedFlatTree() : this.getFlatTree()
        }
        ,
        t.prototype.getFlatTree = function() {
            var e = this;
            return this.dirTreeState.showSharedDiagrams = !1,
            this.dirTree = null,
            this.resolveIndex(),
            this.SchemaDirService.getDirTree().then(function(t) {
                return e.dirTree = t,
                e.autoExpandTreeItems(),
                t
            })
        }
        ,
        t.prototype.getSharedFlatTree = function() {
            var e = this;
            return this.dirTreeState.showSharedDiagrams = !0,
            this.dirTree = null,
            this.resolveIndex(),
            this.SchemaDirService.getFlatDirTree().then(function(t) {
                return e.dirTree = t,
                e.autoExpandTreeItems(),
                t
            })
        }
        ,
        t.prototype.autoExpandTreeItems = function() {
            var e = this;
            if (_.each(this.dirTree, function(t) {
                if (e.shouldExpandDirTreeItem(t)) {
                    var i = "dir" === t.itemType ? t.id : t.parentId;
                    e.expandTreeItems(i, !0)
                }
            }),
            !_.find(this.dirTree, {
                isExpanded: !0
            })) {
                var t = this.getFirstDirId();
                this.SchemaDirService.cache.expandDir(t),
                this.expandTreeItems(t, !0)
            }
        }
        ,
        t.prototype.shouldExpandDirTreeItem = function(e) {
            return "dir" === e.itemType && this.SchemaDirService.cache.isDirExpanded(e.id)
        }
        ,
        t.prototype.expandTreeItems = function(e, t) {
            _.each(this.dirTree, function(i) {
                ("dir" === i.itemType && i.id === e || "dir" !== i.itemType && i.parentId === e) && (i.isExpanded = t)
            })
        }
        ,
        t.prototype.onTreeItemClick = function(e) {
            "empty-dir-holder" !== e.itemType && ("dir" === e.itemType ? (e.isExpanded ? this.SchemaDirService.cache.collapseDir(e.id) : this.SchemaDirService.cache.expandDir(e.id),
            this.expandTreeItems(e.id, !e.isExpanded)) : "file" === e.itemType ? this.goToDiagram(e.shortCode) : this.addSchema(e))
        }
        ,
        t.prototype.isSelected = function(e) {
            return e === this.$state.params.shortcode
        }
        ,
        t.prototype.addSchema = function(e) {
            var t = this;
            this.TrackingService.trackNewFile();
            var i = e.id || e.parentId;
            this.SchemaService.createDiagramInDirWithNamePrompt(i).then(function() {
                t.SchemaDirService.cache.expandDir(i),
                t.initializeTree()
            })
        }
        ,
        t.prototype.addDir = function() {
            this.$rootScope.$broadcast("editor-menu-action", "addRootDirectory")
        }
        ,
        t.prototype.goToDiagram = function(e) {
            var t = this;
            this.SchemaService.transitionToDiagram(e).then(function() {
                t.$rootScope.$broadcast("diagram-url-changed")
            })
        }
        ,
        t.prototype.renameItem = function(e) {
            var t = this
              , i = this.$mdDialog.prompt().title("Rename " + ("dir" === e.itemType ? "folder" : "file")).placeholder("New name").ariaLabel("New name").initialValue(e.name).ok("Save").cancel("Cancel").clickOutsideToClose(!0);
            this.$mdDialog.show(i).then(function(i) {
                if (i) {
                    ("dir" === e.itemType ? t.SchemaDirService.renameDir({
                        id: e.id,
                        name: i
                    }) : t.SchemaService.renameDiagram({
                        name: i,
                        shortcode: e.shortCode
                    })).then(function() {
                        t.initializeTree(),
                        t.ToastService.showInfo(("dir" === e.itemType ? "Folder" : "File") + " successfully renamed")
                    })
                } else
                    t.ToastService.showWarning("Empty names not allowed")
            })
        }
        ,
        t.prototype.collaborate = function(e) {
            this.CollaboratorsService.collaborate(e.shortCode || e.id, e.itemType, e.isOwnedByCurrentUser)
        }
        ,
        t.prototype.deleteItem = function(e) {
            var t = this
              , i = this.shouldUnloadSchemaAfterDelete(e)
              , o = "Confirm " + ("dir" === e.itemType ? "folder" : "file") + " deletion"
              , n = "<p>Are you sure you want to delete " + (e.name ? "<em>" + e.name + "</em>" : "this item") + "?</p>";
            "dir" === e.itemType && (n += "<p>Deleting this folder will also delete all files within it.</p>");
            var r = this.$mdDialog.confirm().title(o).htmlContent(n).ok("Yes").cancel("No").clickOutsideToClose(!0);
            this.$mdDialog.show(r).then(function() {
                i && (t.SourceEditorService.clearLocalShortcode(),
                t.$rootScope.$broadcast("unload-editor-diagram")),
                ("dir" === e.itemType ? t.SchemaDirService.deleteDir(e.id) : t.SchemaService.deleteDiagram(e.shortCode)).then(function() {
                    t.ToastService.showInfo(("dir" === e.itemType ? "Folder" : "File") + " successfully deleted"),
                    t.initializeTree().then(function(e) {
                        i && t.SchemaDirService.goToFirstDiagram(e)
                    })
                })
            })
        }
        ,
        t.prototype.leaveCollab = function(e) {
            var t = this
              , i = "<p>Are you sure you want to leave this " + ("dir" === e.itemType ? "folder" : "file") + "?</p>"
              , o = this.$mdDialog.confirm().title("Confirm share leaving").htmlContent(i).ok("Yes").cancel("No").clickOutsideToClose(!0);
            this.$mdDialog.show(o).then(function() {
                t.CollaboratorsService.leaveCollab(e.collabPermissionId).then(t.initializeTree.bind(t))
            })
        }
        ,
        t.prototype.shouldUnloadSchemaAfterDelete = function(e) {
            var t = this.$state.params.shortcode;
            if (!t)
                return !1;
            if ("dir" === e.itemType) {
                var i = e.id;
                return !!_.find(this.dirTree, function(e) {
                    return e.parentId === i && e.shortCode === t
                })
            }
            return e.shortCode === t
        }
        ,
        t.prototype.onDragEnter = function() {
            var e = this;
            return function(t, i) {
                e.dirTreeState.showSharedDiagrams || (angular.element(".drag-over").removeClass("drag-over"),
                i.addClass("drag-over"))
            }
        }
        ,
        t.prototype.onDrop = function() {
            var e = this;
            return function(t, i, o, n) {
                if (!e.dirTreeState.showSharedDiagrams) {
                    var r = parseInt(i.attr("item-id"));
                    i.removeClass("drag-over"),
                    "true" === i.attr("is-droppable-dir") ? (e.SchemaDirService.cache.expandDir(r),
                    e.SchemaService.moveDiagramToDir({
                        parentId: r,
                        shortcode: n.shortCode
                    }).then(e.initializeTree.bind(e))) : -1 === r && e.ToastService.showWarning("Items can't be moved to 'Unsaved Files'")
                }
            }
        }
        ,
        t.prototype.addRootDirectory = function() {
            this.TrackingService.trackNewFolder(),
            this.SchemaDirService.createDir().then(this.initializeTree.bind(this))
        }
        ,
        t.prototype.addRootSchema = function() {
            var e = this;
            this.TrackingService.trackNewFile(),
            this.SchemaService.createDiagramInDirWithNamePrompt(0).then(function() {
                e.SchemaDirService.cache.expandDir(0),
                e.initializeTree()
            })
        }
        ,
        t.prototype.getDirIconClass = function(e) {
            return -1 === e.id && "Unsaved Files" === e.name ? "mdi-file-hidden" : e.isExpanded ? "mdi-folder-open" : "mdi-folder"
        }
        ,
        t.prototype.getDirName = function(e) {
            return _.find(this.dirTree, {
                id: e,
                itemType: "dir"
            }).name
        }
        ,
        t.prototype.isLocked = function(e) {
            return "file" === e.itemType && !e.isEditable
        }
        ,
        t.prototype.isDefaultDir = function(e) {
            return "dir" === e.itemType && 0 === e.id
        }
        ,
        t.prototype.resolveIndex = function() {
            this.tabIndex = this.SchemaDirService.dirTreeState.showSharedDiagrams ? 1 : 0
        }
        ,
        t.prototype.getFirstDirId = function() {
            var e = _.find(this.dirTree, {
                itemType: "dir"
            });
            return e ? e.id : 0
        }
        ,
        t = __decorate([e.Component("QdbdApp.SchemaDir", "dtSchemaDir", {
            templateUrl: "cache/modules/schema-dir/dt-schema-dir.html",
            controllerAs: "DtSchemaDirVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s, c) {
            this.$rootScope = e,
            this.$http = t,
            this.$state = i,
            this.$q = o,
            this.$mdDialog = n,
            this.localStorageService = r,
            this.BaseHttpService = a,
            this.ToastService = s,
            this.SchemaService = c,
            this.dirTreeState = {
                isOpen: !1,
                showSharedDiagrams: !1
            },
            this.EXPANDED_DIR_IDS = "expandedDirIds",
            this.expandedDirIds = this.getExpandedDirIds(),
            this.cache = this.cacheFactory()
        }
        return t.$inject = ["$rootScope", "$http", "$state", "$q", "$mdDialog", "localStorageService", "BaseHttpService", "ToastService", "SchemaService"],
        t.prototype.getExpandedDirIds = function() {
            return this.localStorageService.get(this.EXPANDED_DIR_IDS) || []
        }
        ,
        t.prototype.getDirTree = function() {
            return this.getFlatTree().then(function(e) {
                return e.data
            })
        }
        ,
        t.prototype.getFlatDirTree = function() {
            return this.getSharedFlatTree().then(function(e) {
                return e.data
            })
        }
        ,
        t.prototype.getFirstDirDiagram = function() {
            return this.getDirTree().then(function(e) {
                return _.find(e, {
                    itemType: "file"
                })
            })
        }
        ,
        t.prototype.getFlatTree = function() {
            return this.$http.get("api/v1/diagramDir/flatTree")
        }
        ,
        t.prototype.getSharedFlatTree = function() {
            return this.$http.get("api/v1/diagramDir/sharedFlatTree")
        }
        ,
        t.prototype.extractDirIds = function(e) {
            if (!e)
                return [];
            var t = _.filter(e, {
                itemType: "dir"
            });
            return _.map(t, "id")
        }
        ,
        t.prototype.removeExpandedDirId = function(e) {
            var t = this.expandedDirIds.indexOf(e, 0);
            t > -1 && this.expandedDirIds.splice(t, 1)
        }
        ,
        t.prototype.saveExpandedDirIds = function() {
            this.localStorageService.set(this.EXPANDED_DIR_IDS, this.expandedDirIds)
        }
        ,
        t.prototype.createUnsavedDirRoot = function() {
            return {
                id: -1,
                itemType: "dir",
                name: "Unsaved Files",
                parentId: 0,
                shortCode: null
            }
        }
        ,
        t.prototype.createDir = function() {
            var e = this
              , t = this.$q.defer()
              , i = this.$mdDialog.prompt().title("Enter new folder name").placeholder("New Name").ariaLabel("New Folder Name").initialValue("New Folder").ok("Save").cancel("Cancel").clickOutsideToClose(!0);
            return this.$mdDialog.show(i).then(function(i) {
                var o = e.$http.post("api/v1/diagramDir", {
                    name: i || "New Folder"
                });
                o.then(function() {
                    e.ToastService.showInfo("Folder successfully created")
                }, function() {
                    e.ToastService.showInfo("An error occured, please try again")
                }),
                t.resolve(o)
            }),
            t.promise
        }
        ,
        t.prototype.renameDir = function(e) {
            return this.BaseHttpService.put("api/v1/diagramDir/rename", e)
        }
        ,
        t.prototype.deleteDir = function(e) {
            return this.$http.delete("api/v1/diagramDir/" + e)
        }
        ,
        t.prototype.openDirTree = function() {
            this.dirTreeState.isOpen = !0
        }
        ,
        t.prototype.closeDirTree = function() {
            this.dirTreeState.isOpen = !1
        }
        ,
        t.prototype.toggleDirTree = function() {
            this.dirTreeState.isOpen = !this.dirTreeState.isOpen
        }
        ,
        t.prototype.goToFirstDiagram = function(e) {
            var t = _.find(e, {
                itemType: "file"
            });
            t && this.$state.go("root.standardShrinkable.diagram", {
                shortcode: t.shortCode
            })
        }
        ,
        t.prototype.cacheFactory = function() {
            var e = this;
            return {
                expandDir: function(t) {
                    _.contains(e.expandedDirIds, t) || (e.expandedDirIds.push(t),
                    e.saveExpandedDirIds())
                },
                collapseDir: function(t) {
                    e.removeExpandedDirId(t),
                    e.saveExpandedDirIds()
                },
                isDirExpanded: function(t) {
                    return _.contains(e.expandedDirIds, t)
                }
            }
        }
        ,
        t = __decorate([e.Service("QdbdApp.SchemaDir", "SchemaDirService")], t)
    }();
    e.SchemaDirService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$scope = e,
            this.SchemaService = t,
            this.PagingService = i,
            this.diagrams = {}
        }
        t.$inject = ["$scope", "SchemaService", "PagingService"],
        t.prototype.$onInit = function() {
            this.pager = this.PagingService.pagerFactory(this.filter, this.diagrams, this.loadDiagrams.bind(this), "root.standard.admin.diagramList"),
            this.$scope.$watch("DtSchemaListVM.filter", this.pager.onFilterChanged.bind(this), !0)
        }
        ,
        t.prototype.loadDiagrams = function() {
            var e = this;
            this.SchemaService.filterDiagrams(this.filter).then(function(t) {
                _.extend(e.diagrams, t.data)
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.Schema", "dtSchemaList", {
            bindings: {
                filter: "="
            },
            templateUrl: "cache/modules/schema/dt-schema-list/dt-schema-list.html",
            controllerAs: "DtSchemaListVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n) {
            this.$http = e,
            this.FileSaver = t,
            this.ToastService = i,
            this.StreamDownloadService = o,
            this.TrackingService = n
        }
        return t.$inject = ["$http", "FileSaver", "ToastService", "StreamDownloadService", "TrackingService"],
        t.prototype.exportToSQL = function(e, t, i, o, n) {
            var r = this;
            if (this.TrackingService.trackExportToSql(i),
            0 === Object.keys(t.errors).length) {
                var a = this.createExportFileName(n);
                this.$http.post("api/v1/schemaExport/toSql", {
                    shortcode: e,
                    quickDbdSchema: this.convertSchemaToExportModel(t),
                    exportType: i,
                    schemaUrl: o,
                    schemaName: n,
                    fileName: a
                }).then(function(e) {
                    var t = new Blob([e.data],{
                        type: "text/plain;charset=utf-8"
                    });
                    r.FileSaver.saveAs(t, a + ".sql")
                })
            } else
                this.ToastService.showError("Schema continas errors and cannot be exported.")
        }
        ,
        t.prototype.exportToDoc = function(e, t, i, o, n) {
            if (this.TrackingService.trackExportToDoc(i),
            0 === Object.keys(t.errors).length) {
                var r = this.createExportFileName(n);
                this.StreamDownloadService.downloadPost("api/v1/schemaExport/toDoc", {
                    shortcode: e,
                    quickDbdSchema: this.convertSchemaToExportModel(t),
                    exportType: i,
                    schemaUrl: o,
                    schemaName: n,
                    fileName: r
                })
            } else
                this.ToastService.showError("Schema continas errors and cannot be exported.")
        }
        ,
        t.prototype.createExportFileName = function(e) {
            return e ? "QuickDBD-" + e : "QuickDBD-export"
        }
        ,
        t.prototype.convertSchemaToExportModel = function(e) {
            var t = this
              , i = {
                comments: e.sections.comments,
                tables: _.values(angular.copy(e.sections.tables)),
                relationships: _.values(angular.copy(e.sections.relationships))
            };
            return _.each(i.tables, this.convertTableAndFieldNames.bind(this)),
            _.each(i.relationships, function(i) {
                t.convertRelTableFieldNames(e, i)
            }),
            i
        }
        ,
        t.prototype.convertTableAndFieldNames = function(e) {
            e.identifier = e.caption,
            delete e.caption,
            e.fields = _.values(_.filter(e.fields, function(e) {
                return "qdbdvirtualfield" !== e.identifier
            })),
            _.each(e.fields, function(e) {
                e.identifier = e.caption,
                delete e.caption
            })
        }
        ,
        t.prototype.convertRelTableFieldNames = function(e, t) {
            this.convertRelTableFieldName(e, t.table1),
            this.convertRelTableFieldName(e, t.table2)
        }
        ,
        t.prototype.convertRelTableFieldName = function(e, t) {
            var i = _.find(e.sections.tables, function(e) {
                return e.identifier.toLowerCase() === t.tableIdentifier.toLowerCase()
            })
              , o = _.find(i.fields, function(e) {
                return e.identifier.toLowerCase() === t.fieldIdentifier.toLowerCase()
            });
            t.fieldIdentifier = o.caption
        }
        ,
        t = __decorate([e.Service("QdbdApp.Schema", "SchemaExportService")], t)
    }();
    e.SchemaExportService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s) {
            this.$q = e,
            this.$rootScope = t,
            this.$http = i,
            this.$timeout = o,
            this.AccountService = n,
            this.ToastService = r,
            this.DialogService = a,
            this.AppConfig = s,
            this.isDisconnectHandlerInitialized = !1,
            this.initializeFirebase()
        }
        return t.$inject = ["$q", "$rootScope", "$http", "$timeout", "AccountService", "ToastService", "DialogService", "AppConfig"],
        t.prototype.initializeFirebase = function() {
            firebase.initializeApp(this.AppConfig.firebase)
        }
        ,
        t.prototype.signIn = function() {
            return this.AccountService.isUserLoggedIn() ? this.signInWithCredentials() : this.$q.resolve()
        }
        ,
        t.prototype.signInAnonymously = function() {
            var e = this
              , t = firebase.auth().signInAnonymously();
            return t.catch(function(t) {
                return e.onFirebaseSignInError(t)
            }),
            t
        }
        ,
        t.prototype.signInWithCredentials = function() {
            var e = this;
            return this.getFirebaseSignOn().then(function(t) {
                var i = t.data.user
                  , o = t.data.token
                  , n = firebase.auth().signInWithEmailAndPassword(i, o);
                return n.catch(function(t) {
                    return e.onFirebaseSignInError(t)
                }),
                n
            })
        }
        ,
        t.prototype.onFirebaseSignInError = function(e) {
            if (e && e.message) {
                var t = e.message;
                try {
                    _.isString(t) && (t = JSON.parse(t)),
                    t.error && "Requests from referer https://www.googleapis.com/ are blocked." === t.error.message && this.DialogService.showDialogNotification("Access to Google Firebase is blocked - either by a firewall or an ad-blocker. It's required for the app to work. Please ensure Firebase is not blocked and then refresh the browser.")
                } catch (e) {
                    console.log(e),
                    _.isString(t) && this.DialogService.showDialogNotification(t)
                }
            }
        }
        ,
        t.prototype.getCurrentUser = function() {
            return firebase.auth().currentUser
        }
        ,
        t.prototype.getCurrentUserUid = function() {
            var e = this.getCurrentUser();
            return e ? e.uid : null
        }
        ,
        t.prototype.currentUserExists = function() {
            return !!this.getCurrentUser()
        }
        ,
        t.prototype.getFirebaseSignOn = function() {
            return this.$http.get("api/v1/account/firebaseSignOn")
        }
        ,
        t.prototype.disposeRefs = function(e) {
            e && (this.disposeFirepad(e.firepad),
            e.sharedMetadata && e.sharedMetadata.off("value"),
            e.layout && e.layout.off("value"),
            e.viewport && e.viewport.off("value"))
        }
        ,
        t.prototype.disposeFirepad = function(e) {
            e && !e.zombie_ && e.dispose()
        }
        ,
        t.prototype.editorFactory = function(e, t, i) {
            var o = this.getDiagramReference(t)
              , n = Firepad.fromACE(o, e, {
                defaultText: i
            });
            return this.registeerDiagramUnreadableHandler(o, n),
            this.registerDiagramUnwritableHandler(o),
            this.registerOnDisconnectHandler(),
            n
        }
        ,
        t.prototype.registeerDiagramUnreadableHandler = function(e, t) {
            var i = this;
            e.on("value", function() {}, function(e) {
                t && !t.zombie_ && (e && "PERMISSION_DENIED" === e.code ? (i.ToastService.showError("Diagram does not exist."),
                t.firebaseAdapter_.ready_ && t.setText(""),
                i.disposeFirepad(t)) : e && i.ToastService.showError(e.message))
            })
        }
        ,
        t.prototype.registerDiagramUnwritableHandler = function(e) {
            var t = this;
            e.child("writeCheck").set(firebase.database.ServerValue.TIMESTAMP, function(e) {
                e && "PERMISSION_DENIED" === e.code ? t.$rootScope.$broadcast("diagram-writable-changed", !1) : e && t.ToastService.showError(e.message)
            })
        }
        ,
        t.prototype.headlessFactory = function(e) {
            var t = this.getDiagramReference(e);
            return new Firepad.Headless(t)
        }
        ,
        t.prototype.registerOnDisconnectHandler = function() {
            var e = this;
            this.isDisconnectHandlerInitialized || this.getConnectionReference().on("value", function(t) {
                t.val() ? (e.isDisconnectHandlerInitialized && e.DialogService.closDialogNotification(),
                e.isDisconnectHandlerInitialized = !0) : e.isDisconnectHandlerInitialized && e.DialogService.showDialogNotification("Uh-oh. We can't connect to our server. Please check your internet connection.")
            })
        }
        ,
        t.prototype.getRootReference = function() {
            return firebase.database().ref()
        }
        ,
        t.prototype.getConnectionReference = function() {
            return firebase.database().ref(".info/connected")
        }
        ,
        t.prototype.getChildReference = function(e, t, i) {
            var o = this.getRootReference()
              , n = e + "/" + t;
            return i && (n = n + "/" + i),
            o.child(n)
        }
        ,
        t.prototype.getUserChildReference = function(e, t, i) {
            return this.getRootReference().child(e + "/" + t + "/" + i)
        }
        ,
        t.prototype.getDiagramReference = function(e) {
            return this.getChildReference("diagram", e)
        }
        ,
        t.prototype.getDiagramLayoutTableReference = function(e, t) {
            return this.getChildReference("diagramLayout", e, t)
        }
        ,
        t.prototype.setData = function(e, t, i, o, n) {
            return this.dbSave(e, t, i, "set", o, n)
        }
        ,
        t.prototype.updateData = function(e, t, i, o, n) {
            return this.dbSave(e, t, i, "update", o, n)
        }
        ,
        t.prototype.dbSave = function(e, t, i, o, n, r) {
            if (!t || !i || !this.currentUserExists())
                return this.$q.resolve();
            var a = this.$q.defer();
            return (n ? this.getUserChildReference(e, this.getCurrentUserUid(), t) : this.getChildReference(e, t, r))[o](this.clearUndefinedProperties(i), function(e) {
                e ? a.reject() : a.resolve()
            }),
            a.promise
        }
        ,
        t.prototype.setDiagramSchema = function(e, t) {
            if (!e || !t || !this.currentUserExists())
                return this.$q.resolve();
            var i = this.headlessFactory(e)
              , o = this.$q.defer();
            return i.setText(t, function(e, t) {
                i.dispose(),
                e || !t ? o.reject() : o.resolve()
            }),
            o.promise
        }
        ,
        t.prototype.setDiagramSharedMetadata = function(e, t) {
            return this.setData("diagramSharedMetadata", e, t)
        }
        ,
        t.prototype.setDiagramLayout = function(e, t) {
            return this.setData("diagramLayout", e, t)
        }
        ,
        t.prototype.setDiagramLayoutTable = function(e, t, i) {
            return this.setData("diagramLayout", e, i, null, t)
        }
        ,
        t.prototype.setDiagramViewport = function(e, t) {
            return this.setData("diagramViewport", e, t, this.getCurrentUserUid())
        }
        ,
        t.prototype.removeDiagramLayoutTables = function(e, t) {
            return e && t && 0 !== t.length ? this.getChildReference("diagramLayout", e).transaction(function(e) {
                return _.each(t, function(t) {
                    e[t] = null
                }),
                e
            }) : this.$q.resolve()
        }
        ,
        t.prototype.setDiagram = function(e) {
            return e ? this.setDiagramSchema(e.shortcode, e.schema) : this.$q.resolve()
        }
        ,
        t.prototype.saveDiagram = function(e) {
            var t = [this.setDiagram(e), this.setDiagramSharedMetadata(e.shortcode, e.sharedMetadata), this.setDiagramLayout(e.shortcode, e.layout), this.setDiagramViewport(e.shortcode, e.viewport)];
            return this.$q.all(t)
        }
        ,
        t.prototype.saveDiagramMetadata = function(e) {
            var t = [this.setDiagramSharedMetadata(e.shortcode, e.sharedMetadata), this.setDiagramLayout(e.shortcode, e.layout), this.setDiagramViewport(e.shortcode, e.viewport)];
            return this.$q.all(t)
        }
        ,
        t.prototype.saveDiagrams = function(e) {
            var t = this;
            if (!e || 0 === e.length)
                return this.$q.resolve();
            var i = [];
            return _.each(e, function(e) {
                i.push(t.saveDiagram(e))
            }),
            this.$q.all(i)
        }
        ,
        t.prototype.renameDiagram = function(e) {
            return this.updateData("diagramSharedMetadata", e.shortcode, {
                name: e.name
            })
        }
        ,
        t.prototype.registerOnValueChangedHandler = function(e, t, i, o) {
            var n = this
              , r = o ? this.getUserChildReference(e, o, t) : this.getChildReference(e, t);
            return r.on("value", function(e) {
                n.$timeout(function() {
                    i(null, e.val())
                })
            }, function(e) {
                n.$timeout(function() {
                    i(e)
                })
            }),
            r
        }
        ,
        t.prototype.registerSharedMetadataListener = function(e, t) {
            return this.registerOnValueChangedHandler("diagramSharedMetadata", e, t)
        }
        ,
        t.prototype.registerLayoutListener = function(e, t) {
            return this.registerOnValueChangedHandler("diagramLayout", e, t)
        }
        ,
        t.prototype.registerViewportListener = function(e, t) {
            return this.registerOnValueChangedHandler("diagramViewport", e, t, this.getCurrentUserUid())
        }
        ,
        t.prototype.clearUndefinedProperties = function(e) {
            var t = this;
            return Object.keys(e).forEach(function(i) {
                e[i] && "object" == typeof e[i] ? t.clearUndefinedProperties(e[i]) : void 0 === e[i] && delete e[i]
            }),
            e
        }
        ,
        t = __decorate([e.Service("QdbdApp.Schema", "SchemaFirebaseService")], t)
    }();
    e.SchemaFirebaseService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o) {
            this.$http = e,
            this.$q = t,
            this.MessageScreenService = i,
            this.TrackingService = o
        }
        return t.$inject = ["$http", "$q", "MessageScreenService", "TrackingService"],
        t.prototype.importFromSQL = function(e, t) {
            var i = this;
            return this.TrackingService.trackImportFromSql(t),
            this.$http.post("api/v1/schemaImport/fromSql", {
                sql: e,
                importType: t,
                parsedSql: ""
            }).then(function(e) {
                return i.onImportFromSql(t, e.data)
            })
        }
        ,
        t.prototype.onImportFromSql = function(e, t) {
            var i = t.errors
              , o = "<p><strong>Important: You may lose information when importing your database schema because QuickDBD does not support all databases features. For example, QuickDBD will not import compound indexes, enums or triggers. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Therefore, DO NOT attempt to use QuickDBD for round-trip engineering.</strong></p> ";
            if (t.parsedSql)
                return i.length || this.MessageScreenService.showSuccess({
                    header: "File successfully imported",
                    message: "Your file has been successfully imported " + o
                }),
                this.$q.resolve(t.parsedSql);
            if (i && i.length || this.showUnhandledErrorsMessage(e, o),
            i && i.length) {
                var n = _.map(i, function(e) {
                    return n + " Line/Column: " + e.line + "/" + e.column + " - " + e.message + "<br />"
                }).join("");
                this.MessageScreenService.showError({
                    header: "The parser got the following errors",
                    message: n + " " + o
                })
            }
            return this.$q.reject()
        }
        ,
        t.prototype.showUnhandledErrorsMessage = function(e, t) {
            var i = "";
            switch (e) {
            case "mySql":
                i = "a MySQL/MariaDB";
                break;
            case "oracle":
                i = "an Oracle";
                break;
            case "tSql":
                i = "a SQL Server";
                break;
            case "postgresql":
                i = "a PostgreSQL";
                break;
            case "ansiSql":
                i = "an ANSI SQL";
                break;
            default:
                i = "a SQL Server"
            }
            var o = "Sorry, QuickDBD could not understand your schema file. We have logged this and will investigate it. Please run it against " + i + " database and check it is valid.";
            this.MessageScreenService.showError({
                header: "Import unhandled error",
                message: o
            })
        }
        ,
        t = __decorate([e.Service("QdbdApp.Schema", "SchemaImportService")], t)
    }();
    e.SchemaImportService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s) {
            this.$rootScope = e,
            this.$http = t,
            this.$location = i,
            this.$q = o,
            this.localStorageService = n,
            this.SchemaFirebaseService = r,
            this.SourceEditorService = a,
            this.AccountService = s,
            this.SCHEMA_KEY = "schema",
            this.RUN_DIAGNOSTICS = !0,
            this.removeLegacySchemaFromLocalStorage()
        }
        return t.$inject = ["$rootScope", "$http", "$location", "$q", "localStorageService", "SchemaFirebaseService", "SourceEditorService", "AccountService"],
        t.prototype.removeLegacySchemaFromLocalStorage = function() {
            this.localStorageService.remove(this.SCHEMA_KEY)
        }
        ,
        t.prototype.migrateToFirebase = function() {
            var e = this;
            return this.isMigrationToFirebaseRequired() ? this.AccountService.reAuthenticate().then(function() {
                return e.backupLocalSchemas()
            }).then(function() {
                return e.migrateOwnServerSchemas()
            }).then(function(t) {
                return e.migrateOwnLocalUnsavedSchemas(t)
            }).then(function() {
                e.removeLocalSchemas(),
                e.SourceEditorService.clearLocalShortcode()
            }) : this.backupAndRemoveLocalSchemas()
        }
        ,
        t.prototype.isMigrationToFirebaseRequired = function() {
            return !!this.AccountService.isUserLoggedIn() && !this.$rootScope.currentUser.firebaseUserId
        }
        ,
        t.prototype.schemaToDiagramModels = function(e) {
            return e && 0 !== e.length ? _.map(e, function(e) {
                var t = e.schemaSource || ""
                  , i = {
                    shortcode: e.shortcode,
                    legacyShortcode: e.legacyShortcode,
                    schema: t.split("\r\n").join("\n"),
                    sharedMetadata: {
                        name: e.name,
                        parentId: e.parentId,
                        parentName: e.parentName,
                        tableCount: e.tableCount
                    }
                };
                if (e.settings) {
                    var o = e.settings
                      , n = i.sharedMetadata;
                    n.isCaseSensitive = o.isCaseSensitive,
                    n.defaultType = o.defaultType,
                    i.viewport = {
                        zoom: o.zoom || 100
                    },
                    o.position && (i.viewport.position = angular.copy(o.position))
                }
                return e.layout && (i.layout = angular.copy(e.layout)),
                i
            }) : []
        }
        ,
        t.prototype.backupLocalSchemas = function() {
            var e = this.getLocalSchemas();
            if (!(e = _.filter(e, function(e) {
                return e.schemaSource || e.shortcode || e.name
            })) || 0 === e.length)
                return this.$q.resolve();
            if (this.RUN_DIAGNOSTICS) {
                var t = _.filter(e, {
                    userId: this.$rootScope.currentUser.userId
                })
                  , i = _.filter(t, {
                    isDirty: !0
                })
                  , o = _.filter(t, {
                    isDirty: !1
                })
                  , n = _.filter(e, {
                    userId: 0
                });
                console.log("User's diagrams to backup: " + t.length + " (" + i.length + " dirty, " + o.length + " non-dirty)"),
                console.log("Anonymous diagrams to backup: " + n.length),
                console.log("Previous users diagrams to backup: " + (e.length - t.length - n.length))
            }
            return this.$http.post("api/v1/schema/backupSchemas", e)
        }
        ,
        t.prototype.migrateOwnServerSchemas = function() {
            var e = this;
            return this.$http.get("api/v1/schema/getOwnSchemas").then(function(t) {
                var i = e.schemaToDiagramModels(t.data);
                return e.RUN_DIAGNOSTICS && console.log("Server diagrams to migrate: " + i.length),
                e.SchemaFirebaseService.saveDiagrams(i).then(function() {
                    return i
                })
            })
        }
        ,
        t.prototype.migrateOwnLocalUnsavedSchemas = function(e) {
            var t = this.getOwnUnsavedLocalSchemas()
              , i = this.schemaToDiagramModels(t);
            return this.updateWithServerShotcodes(i, e),
            this.RUN_DIAGNOSTICS && (console.log("Local diagrams to migrate: " + i.length),
            console.log("Local diagram shortcodes:", _.sortBy(_.map(t || [], "shortcode"))),
            console.log("Server diagram shortcodes:", _.sortBy(_.map(e || [], "shortcode")))),
            this.SchemaFirebaseService.saveDiagrams(i)
        }
        ,
        t.prototype.updateWithServerShotcodes = function(e, t) {
            _.each(e, function(e) {
                var i = _.find(t, {
                    legacyShortcode: e.shortcode
                });
                e.shortcode = i.shortcode
            })
        }
        ,
        t.prototype.backupAndRemoveLocalSchemas = function() {
            var e = this;
            return this.AccountService.isUserLoggedIn() ? this.backupLocalSchemas().then(function() {
                e.removeLocalSchemas()
            }) : this.$q.resolve()
        }
        ,
        t.prototype.removeLocalSchemas = function() {
            var e = this
              , t = this.localStorageService.keys()
              , i = _.filter(t, function(t) {
                return _.startsWith(t, "" + e.SCHEMA_KEY)
            });
            _.each(i, function(t) {
                e.localStorageService.remove(t)
            })
        }
        ,
        t.prototype.getLocalSchema = function(e) {
            return this.localStorageService.get(this.getSchemaKey(e))
        }
        ,
        t.prototype.getSchemaKey = function(e) {
            return this.SCHEMA_KEY + "." + (e || "default")
        }
        ,
        t.prototype.getLocalSchemasKeys = function() {
            var e = this
              , t = this.localStorageService.keys();
            return _.filter(t, function(t) {
                return _.startsWith(t, e.SCHEMA_KEY + ".")
            })
        }
        ,
        t.prototype.getLocalSchemas = function() {
            var e = this
              , t = this.getLocalSchemasKeys();
            return _.map(t, function(t) {
                return e.localStorageService.get(t)
            }) || []
        }
        ,
        t.prototype.getUnsavedLocalSchemas = function() {
            var e = this.getLocalSchemas();
            return _.filter(e, function(e) {
                return e.shortcode && (e.isDirty || e.isLocalOnly)
            })
        }
        ,
        t.prototype.getOwnUnsavedLocalSchemas = function() {
            var e = this
              , t = this.getUnsavedLocalSchemas();
            return _.filter(t, function(t) {
                return t.userId === e.$rootScope.currentUser.userId
            })
        }
        ,
        t = __decorate([e.Service("QdbdApp.Schema", "SchemaMigrationService")], t)
    }();
    e.SchemaMigrationService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var thing = function() {
        function t(e, t, i, o) {
            this.$rootScope = e,
            this.QdbdParserConfig = t,
            this.AccountService = i,
            this.TrackingService = o,
            this.allowedRelTypes = _.map(this.QdbdParserConfig.allowedRelTypes, "symbol")
        }
        return t.$inject = ["$rootScope", "QdbdParserConfig", "AccountService", "TrackingService"],
        t.prototype.isValidLine = function(e) {
            return !!this.errors[e.toString()]
        }
        ,
        t.prototype.getSchemaLine = function(e, t) {
            return this.splitDataByNewLine(t)[e - 1]
        }
        ,
        t.prototype.parseSource = function(e, t, i) {
            this.settings = t,
            this.security = i,
            this.initializeFields();
            var o = this.tokenizeData(e);
            this.parseSettings(o.settings),
            this.parseTables(o.tables),
            this.parseRelationships(),
            this.parseLayout(o.layout);
            var n = {
                sections: this.sections,
                errors: this.errors
            };
            return t && (t.tableCount = _.size(this.sections.tables) || 0),
            i && (i.isTableLimitReached = this.isTableLimitReached()),
            n
        }
        ,
        t.prototype.getDefaultQdbdSchema = function() {
            return this.parseSource("")
        }
        ,
        t.prototype.getToken = function(e, t, i) {
            var o = this.getSection(e, t);
            if (o) {
                var n = this.splitDataByNewLine(o);
                return _.find(n, function(e) {
                    return _.startsWith(_.trim(e), i)
                })
            }
        }
        ,
        t.prototype.getSection = function(e, t) {
            var i = e.split("[" + t + "]");
            if (1 !== i.length)
                return _.first(i.pop().split("["))
        }
        ,
        t.prototype.initializeFields = function() {
            this.sections = {
                settings: {},
                tables: {},
                relationships: [],
                layout: {},
                comments: []
            },
            this.relParsingQueue = [],
            this.errors = {},
            this.isLimitReached = !1
        }
        ,
        t.prototype.tokenizeData = function(e) {
            var t = this
              , i = this.splitDataByNewLine(e)
              , o = []
              , n = "tables"
              , r = []
              , a = !1
              , s = {
                settings: [],
                tables: [],
                relationships: [],
                layout: []
            };
            return _.each(i, function(e, i) {
                var c = !_.trimRight(e)
                  , d = t.getLineData(e);
                if (d.comment ? o.push(d.comment) : c && (a || (t.sections.comments.push.apply(t.sections.comments, o),
                o = [])),
                d.data.match(/\t/g)) {
                    t.addError((i + 1).toString(), "Whitespace expected, tab character found (To untabify the whole document use: Menu -> Edit -> Untabify)")
                }
                if (d.data && (a = !0),
                !(c && "tables" !== n || !c && !d.data)) {
                    var l = {
                        line: (i + 1).toString(),
                        value: d.data,
                        comments: a && d.data ? o : []
                    };
                    a && d.data && (o = []);
                    var u = _.startsWith(d.data, "[") && _.endsWith(d.data, "]");
                    if (u) {
                        var p = _.trimLeft(_.trimRight(d.data, "]"), "[").toLowerCase();
                        if (p = t.replaceSectionAliases(p),
                        !t.validateSection(p, r, l.line))
                            return;
                        r.push(p),
                        n = p
                    }
                    u || s[n].push(l)
                }
            }),
            s
        }
        ,
        t.prototype.replaceSectionAliases = function(e) {
            return this.QdbdParserConfig.aliasSchemaSections[e] ? this.QdbdParserConfig.aliasSchemaSections[e] : e
        }
        ,
        t.prototype.validateSection = function(e, t, i) {
            var o = this.QdbdParserConfig.schemaSections;
            if (!_.includes(o, e))
                return this.addError(i, "Invalid section name '[" + e + "]' (allowed: " + o.join(", ") + ")"),
                !1;
            if (_.includes(t, e))
                return this.addError(i, "Section '[" + e + "]' is already defined"),
                !1;
            var n = _.takeWhile(o, function(t) {
                return t !== e
            })
              , r = _.difference(t, n);
            return !(r.length > 0) || (this.addError(i, "Section '[" + e + "]' is out of order. It must be defined before: '[" + r.join(", ") + "]'"),
            !1)
        }
        ,
        t.prototype.parseSettings = function(e) {
            var t = this;
            _.each(e, function(e) {
                var i = t.splitTokenByFirstDelimiter(e.value, " ")
                  , o = _.trim(i[0])
                  , n = o.toLowerCase()
                  , r = _.trim(i[1]);
                n ? _.includes(n, " ") ? t.addError(e.line, "Setting key cannot contain whitespace") : r ? t.sections.settings[n] ? t.addError(e.line, "Setting '" + o + "' already defined") : ("casesensitive" !== n && "casesensitivity" !== n || (n = "casesensitive",
                r = t.parseCaseSensitiveSettingValue(r, e.line)),
                "position" === n && (r = t.parsePositionSettingValue(r, e.line)),
                "zoom" === n && (r = t.parseZoomSettingValue(r, e.line)),
                t.sections.settings[n] = r) : t.addError(e.line, "Setting value missing") : t.addError(e.line, "Setting key missing")
            }),
            this.resolveDefaultSettings()
        }
        ,
        t.prototype.getSettingTokenValue = function(e) {
            return _.trim(this.splitTokenByFirstWhitespace(e).pop())
        }
        ,
        t.prototype.parseCaseSensitiveSettingValue = function(e, t) {
            var i;
            return "off" === e.toLowerCase() ? i = !1 : "on" === e.toLowerCase() ? i = !0 : t && this.addError(t, "Invalid 'CaseSensitive' value (allowed: 'on', 'off')"),
            i
        }
        ,
        t.prototype.parsePositionSettingValue = function(e, t) {
            var i = this.splitTokenByFirstWhitespace(e);
            if (t && 2 !== i.length)
                this.addError(t, "Position setting requires 2 values (x, y)");
            else {
                var o = _.trim(i[0]);
                if (!t || this.isNumeric(o)) {
                    var n = parseInt(o)
                      , r = _.trim(i[1]);
                    if (!t || this.isNumeric(r))
                        return {
                            x: n,
                            y: parseInt(r)
                        };
                    this.addError(t, "Invalid Y coordinate '" + (r || void 0) + "', number expected")
                } else
                    this.addError(t, "Invalid X coordinate '" + (o || void 0) + "', number expected")
            }
        }
        ,
        t.prototype.parseZoomSettingValue = function(e, t) {
            var i = parseFloat(e);
            return t && (!this.isNumeric(i) || i < 10 || i > 200) && this.addError(t, "Invalid 'Zoom' value (allowed: number between 10 and 200)"),
            i
        }
        ,
        t.prototype.resolveDefaultSettings = function() {
            _.isBoolean(this.sections.settings.casesensitive) || (this.sections.settings.casesensitive = !1),
            this.sections.settings.position || (this.sections.settings.position = {
                x: 0,
                y: 0
            }),
            this.isNumeric(this.sections.settings.zoom) || (this.sections.settings.zoom = 100)
        }
        ,
        t.prototype.parseTables = function(e) {
            var t = this.splitAndGroupTokensByWhitespace(e);
            _.each(t, this.parseTable.bind(this))
        }
        ,
        t.prototype.parseTable = function(e) {
            var t, i = this, o = !1;
            _.each(e, function(e, n) {
                if (i.isTableFieldsSeparator(e.value))
                    return 0 === n && i.addError(e.line, "Table name not defined"),
                    void (o = !0);
                if (0 !== n) {
                    if (t)
                        if (o) {
                            var r = i.parseTableField(t, e);
                            i.setSectionTableField(t, r, e.line)
                        } else
                            i.parseTableMetadata(t, e)
                } else
                    t = i.parseTableName(e)
            })
        }
        ,
        t.prototype.parseTableName = function(e) {
            var t = this
              , i = this.parseTableNamesAndAliases(e);
            if (i) {
                if (!this.sections.tables[i.tableIdentifier]) {
                    if (this.sections.tables[i.tableIdentifier] = {
                        identifier: i.tableIdentifier,
                        caption: i.tableCaption,
                        fields: {},
                        aliases: i.tableAliases,
                        line: e.line,
                        comments: e.comments
                    },
                    this.isTableLimitReached()) {
                        var o = "Table " + _.size(this.sections.tables);
                        this.sections.tables[i.tableIdentifier].caption = o,
                        this.TrackingService.trackEditor(_.size(this.sections.tables), "TableLimitReached", "table_limit_reached")
                    }
                    return this.sections.aliases = this.sections.aliases || {},
                    _.each(i.tableAliases, function(e, o) {
                        t.sections.aliases[e] = i.tableIdentifier
                    }),
                    i.tableIdentifier
                }
                this.addError(e.line, "Table '" + i.tableCaption + "' already defined")
            }
        }
        ,
        t.prototype.parseTableNamesAndAliases = function(e) {
            var t = e.value.split(" as ")
              , i = []
              , o = t[0];
            if (_.contains(o, '"') || !_.contains(o, " ") && !_.contains(o, ".")) {
                t.length > 1 && (i = t[1].replace(/ /g, "").split(","));
                var n = this.unquoteText(o);
                return {
                    tableIdentifier: this.decimalEncodeText(n),
                    tableCaption: n,
                    tableAliases: i
                }
            }
            this.addError(e.line, "Invalid table name (use double quotes)")
        }
        ,
        t.prototype.parseTableMetadata = function(e, t) {
            _.startsWith(t.value, "rel") ? this.parseTableMetadataRelationship(e, t) : this.addError(t.line, "Unrecognized table metadata '" + t.value + "'")
        }
        ,
        t.prototype.parseTableMetadataRelationship = function(e, t) {
            var i = this.splitByWhitespaceAndRemoveEmptyStrings(t.value);
            i.length > 3 ? this.addError(t.line, "Unknown relationship param '" + i[3] + "'") : this.queueRelationshipParsing({
                relMember1: e,
                relationType: 3 === i.length ? i[1] : "-",
                relMember2: 3 === i.length ? i[2] : i[1],
                line: t.line
            })
        }
        ,
        t.prototype.parseTableField = function(e, t) {
            var i = this.tokenizeFieldLine(t.value);
            if (0 !== i.length) {
                var o = _.trim(i[0].value)
                  , n = this.decimalEncodeText(o)
                  , r = this.isTableLimitReached();
                if (n) {
                    if (this.isTableVirtualField(n))
                        return {
                            identifier: "qdbdvirtualfield"
                        };
                    for (var a = {
                        identifier: n,
                        caption: r ? "..." : o,
                        line: t.line,
                        comments: t.comments
                    }, s = -1, c = 1; c < i.length; c++) {
                        var d = i[c]
                          , l = _.trim(d.value);
                        if (s > -1)
                            if (c === s + 1) {
                                if (this.isRelationshipTypeToken(d.value)) {
                                    c === i.length - 1 && this.addError(t.line, "Relationship key cannot be empty");
                                    continue
                                }
                                s = -1
                            } else if (c === s + 2) {
                                var u = i[c - 1];
                                this.queueRelationshipParsing({
                                    relMember1: e + "." + n,
                                    relationType: u.value || "-",
                                    relMember2: d.encoded || d.value || "",
                                    line: t.line
                                }),
                                s = -1;
                                continue
                            }
                        var p = l.toLowerCase();
                        if ("null" === p || "nullable" === p)
                            a.isNullable = !0;
                        else if ("pk" === p)
                            a.isUniq && this.addError(t.line, "The field cannot be a primary key and an unique key, since a primary key is unique"),
                            a.isIdx && this.addError(t.line, "The field cannot be a primary key and an index, since a primary key is an index"),
                            a.isPk = !0;
                        else if ("unique" === p)
                            a.isPk && this.addError(t.line, "The field cannot be a primary key and an unique key, since a primary key is unique"),
                            a.isIdx && this.addError(t.line, "The field cannot be an unique key and an index, since an unique key is an index"),
                            a.isUniq = !0;
                        else if ("index" === p)
                            a.isPk && this.addError(t.line, "The field cannot be a primary key and an index, since a primary key is an index"),
                            a.isUniq && this.addError(t.line, "The field cannot be an unique key and an index, since an unique key is an index"),
                            a.isIdx = !0;
                        else if ("fk" === p)
                            a.isFk = !0,
                            s = c;
                        else if ("identity" === p || "autoincrement" === p)
                            a.isIdentity = !0;
                        else if (_.startsWith(p, "default="))
                            a.defaultValue = p.replace("default=", "");
                        else if (a.type)
                            this.addError(t.line, "Unrecognized keyword '" + l + "'");
                        else if (r)
                            a.type = " ";
                        else if (_.includes(l, "=")) {
                            var h = l.split("=");
                            a.type = h[0],
                            a.defaultValue = h[1]
                        } else
                            a.type = l
                    }
                    return a
                }
                this.addError(t.line, "Table field name cannot be empty")
            } else
                this.addError(t.line, "Table field name cannot be empty")
        }
        ,
        t.prototype.tokenizeFieldLine = function(e) {
            if (!_.contains(e, '"'))
                return _.map(this.splitByWhitespaceAndRemoveEmptyStrings(e), function(e) {
                    return {
                        value: e
                    }
                });
            for (var t = _.startsWith(e, '"') ? 0 : 1, i = [], o = [], n = [], r = 0 === t ? 1 : 0; r < e.length; r++) {
                var a = e[r];
                0 === t ? '"' === a ? t = 1 : (o.push(a),
                n.push(a)) : 1 === t ? " " === a ? o.length > 0 && (i.push(this.buildTableFieldToken(o, n)),
                o = [],
                n = []) : '"' === a ? t = 2 : (o.push(a),
                n.push(a)) : 2 === t && ('"' === a ? t = 1 : (o.push(a),
                this.isAllowedName(a) || (a = this.decimalEncodeCharacter(a)),
                n.push(a)))
            }
            return o.length > 0 && i.push(this.buildTableFieldToken(o, n)),
            i
        }
        ,
        t.prototype.buildTableFieldToken = function(e, t) {
            var i = e.join("")
              , o = t.join("")
              , n = {
                value: i
            };
            return i !== o && (n.encoded = o),
            n
        }
        ,
        t.prototype.setSectionTableField = function(e, t, i) {
            if (t && 0 !== Object.keys(this.sections.tables).length)
                if (this.sections.tables[e].fields[t.identifier])
                    this.addError(i, "Table field '" + t.identifier + "' already defined");
                else {
                    var o = this.sections.tables[e].fields;
                    t.order = _.size(o),
                    o[t.identifier] = t
                }
        }
        ,
        t.prototype.isTableFieldsSeparator = function(e) {
            return this.isMadeOfSameCharacters(e, this.QdbdParserConfig.tableSeparator)
        }
        ,
        t.prototype.isTableVirtualField = function(e) {
            return this.isMadeOfSameCharacters(e, ".")
        }
        ,
        t.prototype.isMadeOfSameCharacters = function(e, t) {
            return !!_.startsWith(e, t) && (e === t || /^(.)\1+$/.test(e))
        }
        ,
        t.prototype.getTable = function(e) {
            return this.isCaseSensitive() ? this.sections.tables[e] : _.find(this.sections.tables, function(t) {
                return t.identifier.toLowerCase() === e.toLowerCase()
            })
        }
        ,
        t.prototype.getTableField = function(e, t) {
            return this.isCaseSensitive() ? e.fields[t] : _.find(e.fields, function(e) {
                return e.identifier.toLowerCase() === t.toLowerCase()
            })
        }
        ,
        t.prototype.queueRelationshipParsing = function(e) {
            this.relParsingQueue.push(e)
        }
        ,
        t.prototype.parseRelationships = function() {
            var e = this;
            _.each(this.relParsingQueue, function(t) {
                var i = e.parseRelationship(t);
                i && e.postProcessRelationship(i)
            })
        }
        ,
        t.prototype.parseRelationship = function(e) {
            if (this.isRelationshipTypeToken(e.relationType)) {
                var t = this.parseRelationshipToken(e.relMember1, e.line)
                  , i = this.parseRelationshipToken(e.relMember2, e.line);
                if (t && i) {
                    this.resolveRelationshipAliases([t, i]);
                    var o = {
                        table1: t,
                        table2: i,
                        line: e.line
                    };
                    if (this.resolveAssociationTypes(o, e.relationType),
                    this.relationshipAlreadyExists(o))
                        return this.sections.relationships.push(o),
                        o
                }
            } else {
                var n = this.allowedRelTypes.join(", ");
                this.addError(e.line, "Invalid relationship description (allowed: " + n + ")")
            }
        }
        ,
        t.prototype.isRelationshipTypeToken = function(e) {
            return _.includes(this.allowedRelTypes, _.trim(e))
        }
        ,
        t.prototype.parseRelationshipToken = function(e, t) {
            var i = _.trim(e);
            if (i) {
                var o = i.split(".");
                if (!(o.length > 2)) {
                    var n, r = this.getTable(o[0]);
                    2 === o.length && r && (n = this.getTableField(r, o[1]));
                    var a = r && r.identifier ? r.identifier : o[0]
                      , s = r && r.caption ? r.caption : o[0];
                    return {
                        tableIdentifier: a,
                        fieldIdentifier: 2 === o.length ? n && n.identifier ? n.identifier : o[1] : "qdbdvirtualfield",
                        tableCaption: s,
                        type: "one",
                        isPk: !1,
                        isFk: !1
                    }
                }
                this.addError(t, "Multi-nested relationships are not allowed")
            } else
                this.addError(t, "Relationship key cannot be empty")
        }
        ,
        t.prototype.resolveRelationshipAliases = function(e) {
            var t = this;
            this.sections.aliases = this.sections.aliases || {},
            _.each(e, function(e) {
                var i = t.sections.aliases[e.tableIdentifier];
                i && (e.tableIdentifier = i);
                var o = t.getTable(e.tableIdentifier);
                o && (e.tableIdentifier = o.identifier)
            })
        }
        ,
        t.prototype.resolveAssociationTypes = function(e, t) {
            switch (t) {
            case ">-<":
                e.table1.type = "many",
                e.table2.type = "many";
                break;
            case ">-":
                e.table1.type = "many",
                e.table2.type = "one";
                break;
            case "-<":
                e.table1.type = "one",
                e.table2.type = "many";
                break;
            case "-":
                e.table1.type = "one",
                e.table2.type = "one";
                break;
            case "0-":
                e.table1.type = "zeroOne",
                e.table2.type = "one";
                break;
            case "-0":
                e.table1.type = "one",
                e.table2.type = "zeroOne";
                break;
            case "0-0":
                e.table1.type = "zeroOne",
                e.table2.type = "zeroOne";
                break;
            case ">0-":
                e.table1.type = "zeroMany",
                e.table2.type = "one";
                break;
            case "-0<":
                e.table1.type = "one",
                e.table2.type = "zeroMany"
            }
        }
        ,
        t.prototype.relationshipAlreadyExists = function(e) {
            var t = this
              , i = _.find(this.sections.relationships, function(i) {
                return t.getDuplicateRelationship(i, e)
            });
            return i && this.addError(e.line, "Relationship already defined at line " + i.line),
            !i
        }
        ,
        t.prototype.getDuplicateRelationship = function(e, t) {
            if (e.table1.tableIdentifier === t.table1.tableIdentifier && e.table1.fieldIdentifier === t.table1.fieldIdentifier && e.table2.tableIdentifier === t.table2.tableIdentifier && e.table2.fieldIdentifier === t.table2.fieldIdentifier || e.table1.tableIdentifier === t.table2.tableIdentifier && e.table1.fieldIdentifier === t.table2.fieldIdentifier && e.table2.tableIdentifier === t.table1.tableIdentifier && e.table2.fieldIdentifier === t.table1.fieldIdentifier)
                return e
        }
        ,
        t.prototype.postProcessRelationship = function(e) {
            var t = this.validateRelationshipTable(e.table1, e.line)
              , i = this.validateRelationshipTable(e.table2, e.line);
            if (t && i) {
                var o = this.validateRelationshipField(e.table1, t, e.line)
                  , n = this.validateRelationshipField(e.table2, i, e.line);
                o && n && this.resolveRelationshipKeys(e, o, n)
            }
        }
        ,
        t.prototype.validateRelationshipTable = function(e, t) {
            var i = this.getTable(e.tableIdentifier);
            {
                if (i)
                    return i;
                this.addError(t, "Invalid relationship, the table '" + e.tableIdentifier + "' does not exist")
            }
        }
        ,
        t.prototype.validateRelationshipField = function(e, t, i) {
            var o;
            {
                if (e.fieldIdentifier) {
                    if (!(o = this.getTableField(t, e.fieldIdentifier))) {
                        if ("qdbdvirtualfield" !== e.fieldIdentifier)
                            return void this.addError(i, "Invalid relationship, the field '" + e.tableIdentifier + "." + e.fieldIdentifier + "' does not exist");
                        t.fields.qdbdvirtualfield = {
                            identifier: "qdbdvirtualfield",
                            order: _.size(t.fields)
                        }
                    }
                    return o
                }
                this.addError(i, "Invalid relationship, the field '" + e.tableIdentifier + ".' is missing.")
            }
        }
        ,
        t.prototype.resolveRelationshipKeys = function(e, t, i) {
            this.resolveRelMemberKeys(e.table1, t),
            this.resolveRelMemberKeys(e.table2, i)
        }
        ,
        t.prototype.resolveRelMemberKeys = function(e, t) {
            t.isPk ? e.isPk = !0 : "qdbdvirtualfield" !== t.identifier && (e.isFk = !0,
            t.isFk = !0)
        }
        ,
        t.prototype.containsRelationshipType = function(e) {
            var t = this;
            return !!_.find(e, function(e) {
                return _.contains(t.allowedRelTypes, e)
            })
        }
        ,
        t.prototype.parseLayout = function(e) {
            var t = this;
            _.each(e, function(e) {
                var i = t.tokenizeLayoutLine(e.value);
                if (3 === i.length) {
                    var o = i[0]
                      , n = t.decimalEncodeText(o);
                    if (n)
                        if (t.getTable(n))
                            if (t.sections.layout[n])
                                t.addError(e.line, "Layout for '" + o + "' already defined");
                            else {
                                var r = _.trim(i[1]);
                                if (t.isNumeric(r)) {
                                    var a = parseFloat(r)
                                      , s = _.trim(i[2]);
                                    if (t.isNumeric(s)) {
                                        var c = {
                                            identifier: n,
                                            x: a,
                                            y: parseFloat(s)
                                        };
                                        t.sections.layout[c.identifier] = c
                                    } else
                                        t.addError(e.line, "Invalid Y coordinate '" + s + "', number expected")
                                } else
                                    t.addError(e.line, "Invalid X coordinate '" + r + "', number expected")
                            }
                        else
                            t.addError(e.line, "Invalid layout definition name, the table '" + o + "' does not exist");
                    else
                        t.addError(e.line, "Table name cannot be empty")
                } else
                    t.addError(e.line, "Layout definition requires 3 values (tableName, x, y)")
            })
        }
        ,
        t.prototype.tokenizeLayoutLine = function(e) {
            if (!_.contains(e, '"'))
                return this.splitByWhitespaceAndRemoveEmptyStrings(e);
            for (var t = _.startsWith(e, '"') ? 0 : 1, i = [], o = [], n = 0 === t ? 1 : 0; n < e.length; n++) {
                var r = e[n];
                0 === t ? '"' === r ? t = 1 : o.push(r) : 1 === t && (" " === r ? o.length > 0 && (i.push(o.join("")),
                o = []) : o.push(r))
            }
            return o.length > 0 && i.push(o.join("")),
            i
        }
        ,
        t.prototype.splitByWhitespaceAndRemoveEmptyStrings = function(e) {
            return e ? _.filter(e.split(" "), function(e) {
                return !!e
            }) : []
        }
        ,
        t.prototype.splitAndGroupTokensByWhitespace = function(e) {
            var t = []
              , i = [];
            return _.each(e, function(e) {
                if ("" === e.value)
                    return _.isEmpty(i) || t.push(i),
                    void (i = []);
                i.push(e)
            }),
            _.isEmpty(i) || t.push(i),
            t
        }
        ,
        t.prototype.getLineData = function(e) {
            if (-1 === e.indexOf("#"))
                return {
                    data: _.trimRight(e)
                };
            var t = e.split("#")
              , i = !1
              , o = ""
              , n = "";
            return _.each(t, function(e) {
                if (i)
                    return n = e,
                    !1;
                var t = (o ? o + "#" : "") + e
                  , r = t.split('"').length - 1;
                o = t,
                r % 2 == 0 && (i = !0)
            }),
            {
                data: _.trimRight(o),
                comment: _.trim(n)
            }
        }
        ,
        t.prototype.splitDataByNewLine = function(e) {
            return e.split(/\r?\n/)
        }
        ,
        t.prototype.stripMetadata = function(e) {
            return e ? (e = e.split(/\r?\n\[layout\]/i)[0],
            e = e.split(/\r?\n\[settings\]/i)[0]) : e
        }
        ,
        t.prototype.convertTabsToSpaces = function(e) {
            return e ? e = e.replace(/\t/g, " ") : e
        }
        ,
        t.prototype.splitTokenByFirstDelimiter = function(e, t) {
            var i = e.indexOf(t)
              , o = e.substr(0, i)
              , n = e.substr(i + 1);
            return -1 === i ? [n] : [o, n]
        }
        ,
        t.prototype.splitTokenByFirstWhitespace = function(e) {
            return this.splitTokenByFirstDelimiter(e, " ")
        }
        ,
        t.prototype.isNumeric = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        ,
        t.prototype.unquoteText = function(e) {
            return _.trim(e, '"')
        }
        ,
        t.prototype.isAllowedName = function(e) {
            return !!e.match(/[a-zA-Z0-9_]/)
        }
        ,
        t.prototype.decimalEncodeCharacter = function(e) {
            return e.charCodeAt(0).toString()
        }
        ,
        t.prototype.decimalEncodeText = function(e) {
            var t = this
              , i = [];
            return _.each(e, function(e) {
                t.isAllowedName(e) || (e = t.decimalEncodeCharacter(e)),
                i.push(e)
            }),
            i.join("")
        }
        ,
        t.prototype.addError = function(e, t) {
            this.errors[e] || (this.errors[e] = []),
            this.errors[e].push(t)
        }
        ,
        t.prototype.isCaseSensitive = function() {
            return this.settings ? this.settings.isCaseSensitive : this.sections.settings.casesensitive || !1
        }
        ,
        t.prototype.isTableLimitReached = function() {
            return false
        }
        ,
        t.prototype.isOwnerProUser = function() {
            return this.security && this.security.isOwnerProUser
        }
        ,
        t.prototype.currentUserHasProAccess = function() {
            return this.$rootScope.currentUser && this.$rootScope.currentUser.hasProAccess
        }
        ,
        t = __decorate([e.Service("QdbdApp.Schema", "SchemaParserService")], t)
    }();
    e.SchemaParserService = thing
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s, c, d) {
            this.$rootScope = e,
            this.$http = t,
            this.$state = i,
            this.$q = o,
            this.$mdDialog = n,
            this.SchemaFirebaseService = r,
            this.AccountService = a,
            this.AppStateService = s,
            this.BaseHttpService = c,
            this.ToastService = d
        }
        return t.$inject = ["$rootScope", "$http", "$state", "$q", "$mdDialog", "SchemaFirebaseService", "AccountService", "AppStateService", "BaseHttpService", "ToastService"],
        t.prototype.getDiagram = function(e) {
            return this.$http.get("api/v1/diagram/" + e)
        }
        ,
        t.prototype.getShortcode = function(e) {
            return this.$http.get("api/v1/diagram/shortcode/" + e)
        }
        ,
        t.prototype.filterDiagrams = function(e) {
            return this.$http.get("api/v1/diagram/filter", {
                params: e
            })
        }
        ,
        t.prototype.filterUserDiagrams = function(e) {
            return this.$http.get("api/v1/diagram/filterUserDiagrams", {
                params: e
            })
        }
        ,
        t.prototype.transitionToDiagram = function(e) {
            return this.$state.go("root.standardShrinkable.diagram", {
                shortcode: e
            }, {
                location: !0,
                inherit: !0,
                relative: this.$state.$current,
                notify: !1
            })
        }
        ,
        t.prototype.createDiagram = function(e) {
            var t = this;
            return e.sharedMetadata && e.sharedMetadata.name || _.extend(e.sharedMetadata, {
                name: this.getNewFileName()
            }),
            this.$http.post("api/v1/diagram", e).then(function(e) {
                var i = e.data;
                return t.SchemaFirebaseService.saveDiagram(i).then(function() {
                    return i
                })
            })
        }
        ,
        t.prototype.createNamedDiagramInDir = function(e, t) {
            var i = {
                sharedMetadata: {
                    name: e,
                    parentId: t
                }
            };
            return this.createDiagram(i)
        }
        ,
        t.prototype.createDiagramInDirWithNamePrompt = function(e) {
            var t = this
              , i = this.$q.defer();
            return this.isUserAllowedToCreateNewDiagram().then(function(o) {
                if (!o.data.isAllowed)
                    return t.AccountService.requireSubscription(o.data.message),
                    void i.reject();
                var n = t.$mdDialog.prompt().title("Enter new file name").placeholder("New Name").ariaLabel("New File Name").initialValue(t.getNewFileName()).ok("Save").cancel("Cancel").clickOutsideToClose(!0);
                t.$mdDialog.show(n).then(function(o) {
                    var n = t.createNamedDiagramInDir(o, e);
                    i.resolve(n)
                })
            }),
            i.promise
        }
        ,
        t.prototype.renameDiagram = function(e) {
            var t = this;
            return this.$http.put("api/v1/diagram/rename", e).then(function(i) {
                var o = i.data;
                return t.SchemaFirebaseService.renameDiagram(e).then(function() {
                    return o
                })
            })
        }
        ,
        t.prototype.deleteDiagram = function(e) {
            return this.$http.delete("api/v1/diagram/" + e)
        }
        ,
        t.prototype.moveDiagramToDir = function(e) {
            return this.BaseHttpService.post("api/v1/diagram/moveToDir", e)
        }
        ,
        t.prototype.getDiagramSecurity = function(e) {
            return this.$http.get("api/v1/diagram/security/" + e)
        }
        ,
        t.prototype.flipDiagramPrivacy = function(e) {
            return this.$http.put("api/v1/diagram/flipPrivacy/" + e, null)
        }
        ,
        t.prototype.isUserAllowedToCreateNewDiagram = function() {
            return this.$http.get("api/v1/diagram/isUserAllowedToCreateNewDiagram")
        }
        ,
        t.prototype.getNewFileName = function() {
            var e = this.$rootScope.currentUser;
            return e && e.hasProAccess ? "New File" : "Free Diagram"
        }
        ,
        t.prototype.autoSave = function(e) {
            return e && e.shortcode && e.schema ? this.$http.post("api/v1/diagram/autoSave", e) : this.$q.resolve()
        }
        ,
        t = __decorate([e.Service("QdbdApp.Schema", "SchemaService")], t)
    }();
    e.SchemaService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a, s) {
            var c = this;
            this.$rootScope = e,
            this.$scope = t,
            this.$timeout = i,
            this.AccountService = o,
            this.SourceEditorService = n,
            this.SchemaDirService = r,
            this.SidenavService = a,
            this.TrackingService = s,
            this.schema = {},
            this.isCanvasMouseZoomEnabled = this.SourceEditorService.isCanvasMouseZoomEnabled(),
            this.isBasicPaletteActive = this.SourceEditorService.isBasicPaletteActive(),
            this.$scope.$on("diagram-changed", function(e, t) {
                t && (c.schema = angular.copy(t))
            })
        }
        t.$inject = ["$rootScope", "$scope", "$timeout", "AccountService", "SourceEditorService", "SchemaDirService", "SidenavService", "TrackingService"],
        t.prototype.newDirectory = function() {
            var e = this;
            this.SchemaDirService.openDirTree(),
            this.$timeout(function() {
                e.AccountService.isUserLoggedIn() && e.menuAction("addRootDirectory")
            })
        }
        ,
        t.prototype.newSchema = function() {
            var e = this;
            this.SchemaDirService.openDirTree(),
            this.$timeout(function() {
                e.AccountService.isUserLoggedIn() && e.menuAction("addRootSchema")
            })
        }
        ,
        t.prototype.menuAction = function(e, t) {
            this.$rootScope.$broadcast("editor-menu-action", e, t)
        }
        ,
        t.prototype.showDocs = function(e) {
            this.SidenavService.toggleRightSidenav(),
            this.TrackingService.trackDocumetation("Main")
        }
        ,
        t.prototype.save = function() {
            this.AccountService.requireLogin()
        }
        ,
        t.prototype.flipIsCanvasMouseZoomEnabled = function() {
            this.SourceEditorService.flipIsCanvasMouseZoomEnabled(),
            this.isCanvasMouseZoomEnabled = this.SourceEditorService.isCanvasMouseZoomEnabled()
        }
        ,
        t.prototype.flipIsBasicPaletteActive = function() {
            this.SourceEditorService.flipActivePalette(),
            this.isBasicPaletteActive = this.SourceEditorService.isBasicPaletteActive(),
            this.TrackingService.trackColorPalette(this.SourceEditorService.getActivePalette()),
            this.$rootScope.$broadcast("re-render-diagram")
        }
        ,
        t = __decorate([e.Component("QdbdApp.SourceEditor", "dtSourceEditorMenu", {
            templateUrl: "cache/modules/source-editor/dt-source-editor-menu.html",
            controllerAs: "DtSourceEditorMenuVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function e(e, t, i, o, n, r, a, s, c, d, l, u, p, h, m, g, f, v, b, S, y, D) {
            this.$rootScope = e,
            this.$scope = t,
            this.$timeout = i,
            this.$state = o,
            this.$q = n,
            this.$mdDialog = r,
            this.SchemaService = a,
            this.SchemaDirService = s,
            this.SourceEditorService = c,
            this.SchemaParserService = d,
            this.SchemaImportService = l,
            this.SchemaExportService = u,
            this.SchemaFirebaseService = p,
            this.SchemaMigrationService = h,
            this.CollaboratorsService = m,
            this.DiagramExportService = g,
            this.AppStateService = f,
            this.AppTourService = v,
            this.AccountService = b,
            this.TrackingService = S,
            this.DialogService = y,
            this.ToastService = D,
            this.parsingStatus = "loading",
            this.isRenderingInitialized = !1,
            this.updateCausedByInteraction = !1,
            this.isMetadataConversionInProgress = !1
        }
        return e.$inject = ["$rootScope", "$scope", "$timeout", "$state", "$q", "$mdDialog", "SchemaService", "SchemaDirService", "SourceEditorService", "SchemaParserService", "SchemaImportService", "SchemaExportService", "SchemaFirebaseService", "SchemaMigrationService", "CollaboratorsService", "DiagramExportService", "AppStateService", "AppTourService", "AccountService", "TrackingService", "DialogService", "ToastService"],
        e.prototype.$onInit = function() {
            var e = this;
            this.SourceEditorService.setLocalShortcode(this.getUrlShortcode()),
            this.initializeAceEditor(),
            this.shouldSaveCurrentDiagram().then(function(t) {
                t ? e.saveCurrentDiagram() : e.initializeDirective()
            })
        }
        ,
        e.prototype.$onDestroy = function() {
            this.SchemaFirebaseService.disposeRefs(this.firebaseRefs)
        }
        ,
        e.prototype.shouldSaveCurrentDiagram = function() {
            var e = this
              , t = this.getUrlShortcode()
              , i = this.AppStateService.getCurrentDiagram();
            return !t && i && !i.shortcode && this.AccountService.isUserLoggedIn() && !this.isDefaultDiagramAndUserAlreadyHasDiagrams(i) ? this.SchemaService.isUserAllowedToCreateNewDiagram().then(function(t) {
                return !!t.data.isAllowed || e.disallowCurrentDiagramSaving()
            }).catch(this.disallowCurrentDiagramSaving.bind(this)) : this.$q.resolve(!1)
        }
        ,
        e.prototype.disallowCurrentDiagramSaving = function() {
            return this.ToastService.showError("Pro account required to save the diagram you just created before logging in"),
            !1
        }
        ,
        e.prototype.isDefaultDiagramAndUserAlreadyHasDiagrams = function(e) {
            return !!(e && _.isString(e.schema) && this.$rootScope.currentUser && 0 !== this.$rootScope.currentUser.schemaStats.diagramCount) && ("" === e.schema || this.SourceEditorService.isDemoSampleWithoutMeta(e.schema))
        }
        ,
        e.prototype.saveCurrentDiagram = function() {
            var e = this;
            this.DialogService.showDialogNotification(0 === this.$rootScope.currentUser.schemaStats.diagramCount ? "Please wait while we set up your account." : "Please wait while we save your new diagram."),
            this.SchemaFirebaseService.signIn().then(function() {
                return e.SchemaService.createDiagram(e.AppStateService.getCurrentDiagram())
            }).then(function(t) {
                e.$state.go("root.standardShrinkable.diagram", {
                    shortcode: t.shortcode
                })
            }).finally(function() {
                e.$mdDialog.cancel()
            })
        }
        ,
        e.prototype.initializeDirective = function() {
            var e = this.SourceEditorService.getLocalShortcode();
            if (this.firebaseRefs = {},
            this.diagram = this.AppStateService.diagramFactory(),
            this.diagram.shortcode) {
                if (this.isLegacySchemaRoute())
                    return void this.$state.go("root.standardShrinkable.diagram", {
                        shortcode: this.diagram.shortcode
                    });
                this.initializeServerDiagram()
            } else if (this.diagram && this.diagram.schema) {
                if (this.isDefaultDiagramAndUserAlreadyHasDiagrams(this.diagram))
                    return void this.goToFirstDirTreeItemOrLoadDefaultDiagram();
                this.loadCurrentDiagram()
            } else {
                if (e)
                    return void this.$state.go("root.standardShrinkable.diagram", {
                        shortcode: e
                    });
                this.AccountService.isUserLoggedIn() ? this.goToFirstDirTreeItemOrLoadDefaultDiagram() : this.loadDefaultDiagram()
            }
            this.registerEventHandlers()
        }
        ,
        e.prototype.isLegacySchemaRoute = function() {
            return this.$state.is("root.standardShrinkable.schema")
        }
        ,
        e.prototype.registerEventHandlers = function() {
            var e = this;
            this.registerMenuActionListener(),
            this.$scope.$on("diagram-writable-changed", this.onDiagramWritableChanged.bind(this)),
            this.$scope.$on("diagram-dragged", this.onDiagramDragged.bind(this)),
            this.$scope.$on("diagram-table-row-clicked", this.onDiagramTableRowClicked.bind(this)),
            this.$scope.$on("diagram-table-moved", this.onDiagramTableMoved.bind(this)),
            this.$scope.$on("diagram-ports-connected", this.onDiagramPortsConnected.bind(this)),
            this.$scope.$on("diagram-link-removed", this.onDiagramLinkRemoved.bind(this)),
            this.$scope.$on("center-diagram", this.centerDiagram.bind(this)),
            this.$scope.$on("diagram-zoom-set", this.onDiagramZoomSet.bind(this)),
            this.$scope.$on("diagram-viewport-set", this.onDiagramViewportSet.bind(this)),
            this.$scope.$on("re-render-diagram", function() {
                return e.rerenderCurrentSchema(!0)
            }),
            this.$scope.$on("unload-editor-diagram", this.unloadDiagram.bind(this)),
            this.$scope.$on("schema-share", this.share.bind(this))
        }
        ,
        e.prototype.initializeAceEditor = function() {
            this.$scope.aceLoaded = this.onAceLoaded.bind(this),
            this.$scope.aceChanged = this.onAceChanged.bind(this)
        }
        ,
        e.prototype.onAceLoaded = function(e) {
            this.aceEditor = e,
            this.aceEditor.$blockScrolling = 1 / 0,
            this.aceEditor.setOptions({
                maxLines: 1e4,
                autoScrollEditorIntoView: !0
            }),
            this.aceEditor.resize(!0),
            this.aceEditor.setValue("", -1),
            this.AppTourService.initializeTour(),
            this.aceEditor.commands.addCommand({
                name: "find",
                bindKey: {
                    win: "Ctrl-F",
                    mac: "Command-F",
                    sender: "editor|cli"
                },
                exec: function() {
                    return !1
                },
                readOnly: !0
            })
        }
        ,
        e.prototype.onAceChanged = function(e) {
            this.initializeRenderingStage1()
        }
        ,
        e.prototype.intializeFirePad = function() {
            var e = this;
            this.aceEditor.setReadOnly(this.diagramSecurity.isLockedForEditing);
            var t = this.SchemaMigrationService.isMigrationToFirebaseRequired();
            t && this.DialogService.showDialogNotification("Please wait while we update your account."),
            this.SchemaFirebaseService.signIn().then(function() {
                return e.SchemaMigrationService.migrateToFirebase()
            }).then(function() {
                if (t)
                    return e.$mdDialog.cancel(),
                    void e.goToFirstDirTreeItemOrLoadDefaultDiagram();
                e.firebaseRefs.firepad = e.SchemaFirebaseService.editorFactory(e.aceEditor, e.diagram.shortcode),
                e.firebaseRefs.firepad.setUserColor(e.getRandomUserColor()),
                e.intializeFirebaseEventHandlers()
            }).catch(function(t) {
                console.log(t),
                e.$timeout(function() {
                    e.$mdDialog.cancel()
                }, 1e4)
            })
        }
        ,
        e.prototype.getRandomUserColor = function() {
            return _.sample(["#63463b", "#635e3b", "#52633b", "#3b6345", "#3b6358", "#523b63", "#613b63", "#633b4d"])
        }
        ,
        e.prototype.intializeFirebaseEventHandlers = function() {
            var e = this.diagram.shortcode;
            this.firebaseRefs.sharedMetadata = this.SchemaFirebaseService.registerSharedMetadataListener(e, this.onSharedMetadataHandler.bind(this)),
            this.firebaseRefs.layout = this.SchemaFirebaseService.registerLayoutListener(e, this.onLayoutHandler.bind(this)),
            this.firebaseRefs.viewport = this.SchemaFirebaseService.registerViewportListener(e, this.onViewportHandler.bind(this))
        }
        ,
        e.prototype.onSharedMetadataHandler = function(e, t) {
            e || _.isEqual(this.diagram.sharedMetadata, t) || (this.diagram.sharedMetadata = t,
            this.initializeRenderingStage1())
        }
        ,
        e.prototype.onLayoutHandler = function(e, t) {
            e || _.isEqual(this.diagram.layout, t) || (this.diagram.layout = t,
            this.initializeRenderingStage1())
        }
        ,
        e.prototype.onViewportHandler = function(e, t) {
            e || _.isEqual(this.diagram.viewport, t) || (this.diagram.viewport = t,
            this.initializeRenderingStage1())
        }
        ,
        e.prototype.initializeRenderingStage1 = function() {
            if (this.diagram) {
                this.cancelInitializedRendering();
                var e = this.aceEditor.getValue();
                return e ? ".." === e ? (this.demo(),
                void (this.isRenderingInitialized = !1)) : void (this.isMetadataConversionInProgress && this.SourceEditorService.schemaContainsMetadata(e) || (this.isMetadataConversionInProgress = !1,
                this.diagram.schema = e,
                this.qdbdSchema = this.SchemaParserService.parseSource(e, this.diagram.sharedMetadata, this.diagramSecurity),
                this.SourceEditorService.schemaErrorsExist(this.qdbdSchema) ? this.handleSchemaErrors(this.diagram, this.qdbdSchema) : (this.setPageTitle(),
                this.initializeRenderingStage2(this.diagram, this.diagramSecurity, this.qdbdSchema)))) : (this.setPageTitle(),
                this.initializeRenderingStage2(this.diagram, this.diagramSecurity),
                this.diagram.schema = "",
                void (this.qdbdSchema = this.SchemaParserService.parseSource("")))
            }
        }
        ,
        e.prototype.initializeRenderingStage2 = function(e, t, i) {
            var o = this;
            this.SourceEditorService.applySchemaMetadataConversion(e, i) && this.onMetadataConversion(e),
            this.SourceEditorService.purgeParentlessLayoutTables(e, i),
            this.broadcastDiagramChanged(e, i),
            this.broadcastRenderPromise = this.$timeout(function() {
                o.aceEditor.getSession().clearAnnotations(),
                o.broadcastRenderDiagram(e, i),
                o.autoSave(e),
                o.profitWellTrack(),
                o.TrackingService.trackEditor(0, "Keypress", "initialize_rendering"),
                o.isRenderingInitialized = !0,
                o.updateCausedByInteraction = !1
            }, this.updateCausedByInteraction ? void 0 : 750)
        }
        ,
        e.prototype.onMetadataConversion = function(e) {
            this.AccountService.isUserLoggedIn() && (this.isMetadataConversionInProgress = !0,
            this.SchemaFirebaseService.saveDiagramMetadata(e)),
            this.aceEditor.setValue(e.schema, -1),
            this.SourceEditorService.metadataConversionNotification(e)
        }
        ,
        e.prototype.cancelInitializedRendering = function() {
            this.broadcastRenderPromise && (this.$timeout.cancel(this.broadcastRenderPromise),
            this.isRenderingInitialized = !1,
            this.broadcastRenderPromise = void 0)
        }
        ,
        e.prototype.rerenderCurrentSchema = function(e) {
            void 0 === e && (e = !1),
            this.updateCausedByInteraction = e,
            this.initializeRenderingStage1()
        }
        ,
        e.prototype.initializeServerDiagram = function() {
            var e = this
              , t = this.getUrlShortcode();
            t.length > 6 ? this.resolveShorterShortcodeRoute(t) : this.resolveDiagramSecurity().then(function(t) {
                _.isEmpty(t) ? (e.ToastService.showError("Diagram does not exist."),
                e.AccountService.isUserLoggedIn() || (e.SourceEditorService.clearLocalShortcode(),
                e.$state.go("root.standardShrinkable.home"))) : e.intializeFirePad()
            })
        }
        ,
        e.prototype.resolveShorterShortcodeRoute = function(e) {
            var t = this;
            this.SchemaService.getShortcode(e).then(function(e) {
                e.data ? t.$state.go("root.standardShrinkable.diagram", {
                    shortcode: e.data
                }) : t.ToastService.showError("Diagram does not exist.")
            })
        }
        ,
        e.prototype.resolveDiagramSecurity = function() {
            var e = this;
            return this.SchemaService.getDiagramSecurity(this.diagram.shortcode).then(function(t) {
                return e.diagramSecurity = t.data || {}
            })
        }
        ,
        e.prototype.loadCurrentDiagram = function() {
            this.loadSchema(this.diagram.schema),
            this.AccountService.isUserLoggedIn() && !this.$rootScope.currentUser.hasProAccess && this.$rootScope.currentUser.schemaStats.diagramCount > 0 && this.aceEditor.setReadOnly(!0)
        }
        ,
        e.prototype.goToFirstDirTreeItemOrLoadDefaultDiagram = function() {
            var e = this;
            this.SchemaDirService.getFirstDirDiagram().then(function(t) {
                t ? e.$state.go("root.standardShrinkable.diagram", {
                    shortcode: t.shortCode
                }, {
                    reload: !0
                }) : e.loadDefaultDiagram()
            })
        }
        ,
        e.prototype.loadDefaultDiagram = function() {
            this.SourceEditorService.isDemoInitialized() ? this.loadSchema("") : (this.loadDemoSchema(),
            this.SourceEditorService.flagDemoAsInitialized())
        }
        ,
        e.prototype.loadDemoSchema = function() {
            var e = this.SourceEditorService.getDemoSample();
            this.loadSchema(e)
        }
        ,
        e.prototype.loadSchema = function(e) {
            var t = this;
            angular.element("#schema-canvas").ready(function() {
                t.aceEditor.setValue(e || "", -1)
            })
        }
        ,
        e.prototype.handleSchemaErrors = function(e, t) {
            var i = this.SourceEditorService.createAceErrors(t.errors);
            this.aceEditor.getSession().setAnnotations(i),
            this.broadcastDiagramChanged(e, t)
        }
        ,
        e.prototype.onDiagramDragged = function(e, t) {
            var i = this;
            this.delayInteraction(function() {
                i.SourceEditorService.setViewportPosition(i.diagram, t.x, t.y),
                i.SchemaFirebaseService.setDiagramViewport(i.diagram.shortcode, i.diagram.viewport)
            })
        }
        ,
        e.prototype.onDiagramTableRowClicked = function(e, t) {
            this.goToLine(t)
        }
        ,
        e.prototype.onDiagramTableMoved = function(e, t, i) {
            var o = this;
            this.delayInteraction(function() {
                o.SourceEditorService.purgeParentlessLayoutTables(o.diagram, o.qdbdSchema),
                o.SourceEditorService.ensureLayoutExists(o.diagram);
                var e = {
                    x: t.x,
                    y: t.y
                };
                o.SourceEditorService.updateTablePosition(o.diagram, i, e),
                o.SchemaFirebaseService.setDiagramLayoutTable(o.diagram.shortcode, i, e)
            })
        }
        ,
        e.prototype.onDiagramPortsConnected = function(e, t) {
            var i = this;
            this.diagramSecurity && this.diagramSecurity.isLockedForEditing ? this.ToastService.showInfo("This diagram is in read-only mode.") : this.delayInteraction(function() {
                i.updateCausedByInteraction = !0;
                var e = parseInt(t.fromLine) - 1
                  , o = i.aceEditor.session.getLine(e)
                  , n = i.SourceEditorService.addRelationshipToLine(o, t);
                i.updateAceLine(e, n)
            })
        }
        ,
        e.prototype.onDiagramLinkRemoved = function(e, t) {
            var i = this;
            this.diagramSecurity && this.diagramSecurity.isLockedForEditing ? this.ToastService.showInfo("This diagram is in read-only mode.") : this.delayInteraction(function() {
                i.updateCausedByInteraction = !0;
                var e = t - 1
                  , o = i.aceEditor.session.getLine(e)
                  , n = i.SourceEditorService.removeRelationshipFromLine(o, t);
                n ? i.updateAceLine(e, n) : i.removeAceLine(e)
            })
        }
        ,
        e.prototype.centerDiagram = function(e, t) {
            this.SourceEditorService.setViewportPosition(this.diagram, 0, 0),
            t && this.rerenderCurrentSchema(!0),
            this.SchemaFirebaseService.setDiagramViewport(this.diagram.shortcode, this.diagram.viewport)
        }
        ,
        e.prototype.onDiagramZoomSet = function(e, t, i) {
            this.SourceEditorService.resolveZoomLevel(this.diagram, t),
            i && this.rerenderCurrentSchema(!0),
            this.SchemaFirebaseService.setDiagramViewport(this.diagram.shortcode, this.diagram.viewport)
        }
        ,
        e.prototype.onDiagramViewportSet = function(e, t, i) {
            this.SourceEditorService.setViewport(this.diagram, t),
            i && this.rerenderCurrentSchema(!0),
            this.SchemaFirebaseService.setDiagramViewport(this.diagram.shortcode, this.diagram.viewport)
        }
        ,
        e.prototype.onDiagramWritableChanged = function(e, t) {
            this.aceEditor.setReadOnly(!t)
        }
        ,
        e.prototype.registerMenuActionListener = function() {
            var e = this;
            this.$scope.$on("editor-menu-action", function(t, i, o) {
                e[i] && e[i](o)
            })
        }
        ,
        e.prototype.rename = function() {
            var e = this
              , t = this.$mdDialog.prompt().title("Rename file").placeholder("New Name").ariaLabel("New File Name").initialValue(this.diagram.sharedMetadata.name).ok("Ok").cancel("Cancel").clickOutsideToClose(!0);
            this.$mdDialog.show(t).then(function(t) {
                t ? (e.SchemaService.renameDiagram({
                    name: t,
                    shortcode: e.diagram.shortcode
                }),
                e.broadcastDiagramChanged(e.diagram, e.qdbdSchema)) : e.ToastService.showWarning("Empty names not allowed")
            })
        }
        ,
        e.prototype.copyCurrentDiagram = function() {
            var e = this;
            this.AccountService.requireLogin() || this.AccountService.requireSubscription() || this.SchemaService.createDiagram(this.diagram).then(function(t) {
                _.extend(e.diagram, t),
                e.onSchemaSaved(e.diagram.shortcode),
                e.ToastService.showInfo("Diagram copied successfully.")
            })
        }
        ,
        e.prototype.share = function() {
            this.AccountService.requireLogin() || (this.TrackingService.trackShare("LINK"),
            this.showShortcode(this.getUrlShortcode()))
        }
        ,
        e.prototype.onSchemaSaved = function(e) {
            this.SchemaService.transitionToDiagram(e),
            this.SourceEditorService.setLocalShortcode(e),
            this.setPageTitle(),
            this.broadcastDiagramChanged(this.diagram, this.qdbdSchema)
        }
        ,
        e.prototype.showShortcode = function(e) {
            this.$mdDialog.show({
                template: "\n          <md-dialog aria-label='Shortcode' class='modal-dialog'>\n            <dt-shortcode shortcode=\"" + (e || "") + '"></dt-shortcode>\n          </md-dialog>\n        ',
                parent: angular.element(document.body),
                clickOutsideToClose: !0
            })
        }
        ,
        e.prototype.flipPrivate = function() {
            var e = this;
            if (!this.AccountService.requireSubscription()) {
                var t = this.$mdDialog.confirm().title(this.diagramSecurity.isPrivate ? "Make public" : "Make private").htmlContent("<p>Are you sure you want to change the privacy of the diagram?</p>").ok("Yes").cancel("No").clickOutsideToClose(!0);
                this.$mdDialog.show(t).then(function() {
                    e.SchemaService.flipDiagramPrivacy(e.diagram.shortcode).then(function() {
                        return e.resolveDiagramSecurity()
                    }).then(function() {
                        e.rerenderCurrentSchema(!0)
                    })
                })
            }
        }
        ,
        e.prototype.clear = function() {
            this.aceEditor.setValue("", -1)
        }
        ,
        e.prototype.demo = function() {
            var e = this.SourceEditorService.getDemoSample();
            this.aceEditor.setValue(e, -1),
            this.TrackingService.trackEditor(0, "Reset", "reset")
        }
        ,
        e.prototype.undo = function() {
            this.aceEditor.undo(),
            this.aceEditor.gotoLine(0, 0)
        }
        ,
        e.prototype.redo = function() {
            this.aceEditor.redo(),
            this.aceEditor.gotoLine(0, 0)
        }
        ,
        e.prototype.cut = function() {
            this.copy(),
            this.aceEditor.insert("")
        }
        ,
        e.prototype.copy = function() {
            this.aceEditor.selection.toJSON();
            this.aceEditor.focus(),
            document.execCommand("copy")
        }
        ,
        e.prototype.exportToSQL = function(e) {
            this.SchemaExportService.exportToSQL(this.diagram.shortcode, this.qdbdSchema, e, this.getSchemaUrl(), this.getSchemaName())
        }
        ,
        e.prototype.importFromSQL = function(e) {
            var t, i = this;
            (t = document.getElementById("import-file-input")).onchange = function(o) {
                var n = o.target.files[0]
                  , r = new FileReader;
                r.onload = function() {
                    i.SchemaImportService.importFromSQL(r.result, e).then(function(e) {
                        i.aceEditor.setValue(e, -1)
                    })
                }
                ,
                r.readAsText(n),
                t.value = ""
            }
            ,
            t.click()
        }
        ,
        e.prototype.exportToDoc = function(e) {
            this.SchemaExportService.exportToDoc(this.diagram.shortcode, this.qdbdSchema, e, this.getSchemaUrl(), this.getSchemaName())
        }
        ,
        e.prototype.exportToSVG = function() {
            0 !== Object.keys(this.qdbdSchema.errors).length ? this.ToastService.showError("Schema contains errors and cannot be exported.") : this.DiagramExportService.exportToSVG(this.diagram, this.qdbdSchema)
        }
        ,
        e.prototype.exportToPNG = function() {
            0 !== Object.keys(this.qdbdSchema.errors).length ? this.ToastService.showError("Schema contains errors and cannot be exported.") : this.DiagramExportService.exportToPNG(this.diagram, this.qdbdSchema)
        }
        ,
        e.prototype.untabify = function() {
            var e = this.aceEditor.getValue()
              , t = this.SchemaParserService.convertTabsToSpaces(e);
            this.loadSchema(t)
        }
        ,
        e.prototype.setFieldType = function() {
            var e = this
              , t = this.$mdDialog.prompt().title("Enter default field type").placeholder("Field Type").ariaLabel("New Field Type").initialValue(this.getDefaultFieldType()).ok("Ok").cancel("Cancel").clickOutsideToClose(!0);
            this.$mdDialog.show(t).then(function(t) {
                e.SourceEditorService.ensureSharedMetadataExists(e.diagram),
                e.diagram.sharedMetadata.defaultType = t,
                e.SchemaFirebaseService.setDiagramSharedMetadata(e.diagram.shortcode, e.diagram.sharedMetadata),
                e.rerenderCurrentSchema(!0)
            })
        }
        ,
        e.prototype.flipCasing = function() {
            this.SourceEditorService.ensureSharedMetadataExists(this.diagram),
            this.diagram.sharedMetadata.isCaseSensitive = !this.diagram.sharedMetadata.isCaseSensitive,
            this.SchemaFirebaseService.setDiagramSharedMetadata(this.diagram.shortcode, this.diagram.sharedMetadata),
            this.rerenderCurrentSchema(!0)
        }
        ,
        e.prototype.getDefaultFieldType = function() {
            return this.diagram && this.diagram.sharedMetadata ? this.diagram.sharedMetadata.defaultType || "int" : "int"
        }
        ,
        e.prototype.focusEditor = function() {
            this.aceEditor.focus()
        }
        ,
        e.prototype.getTableCount = function() {
            return this.aceEditor.getValue() && this.qdbdSchema && this.qdbdSchema.sections ? _.size(this.qdbdSchema.sections.tables) : 0
        }
        ,
        e.prototype.unloadDiagram = function() {
            this.SchemaFirebaseService.disposeRefs(this.firebaseRefs),
            this.diagram = void 0
        }
        ,
        e.prototype.delayInteraction = function(e, t) {
            this.interactionTimeout && this.$timeout.cancel(this.interactionTimeout),
            this.interactionTimeout = this.$timeout(function() {
                e()
            }, t || 150)
        }
        ,
        e.prototype.getParsingStatus = function() {
            return this.broadcastRenderPromise && 0 === this.broadcastRenderPromise.$$state.status && !this.updateCausedByInteraction ? this.parsingStatus = "loading" : this.SourceEditorService.schemaErrorsExist(this.qdbdSchema) ? this.parsingStatus = "error" : this.parsingStatus = "success",
            this.parsingStatus
        }
        ,
        e.prototype.updateAceLine = function(e, t, i) {
            void 0 === i && (i = !0),
            this.aceEditor.session.replace({
                start: {
                    row: e,
                    column: 0
                },
                end: {
                    row: e,
                    column: Number.MAX_VALUE
                }
            }, t),
            i && this.goToLine(e + 1)
        }
        ,
        e.prototype.removeAceLine = function(e) {
            this.aceEditor.session.replace({
                start: {
                    row: e - 1,
                    column: Number.MAX_VALUE
                },
                end: {
                    row: e,
                    column: Number.MAX_VALUE
                }
            }, "")
        }
        ,
        e.prototype.goToLine = function(e) {
            this.aceEditor.resize(!0),
            this.aceEditor.gotoLine(e, Number.MAX_VALUE),
            this.aceEditor.focus()
        }
        ,
        e.prototype.getSchemaUrl = function() {
            return this.getUrlShortcode() ? window.location.href : void 0
        }
        ,
        e.prototype.getUrlShortcode = function() {
            return this.$state.params.shortcode
        }
        ,
        e.prototype.getSchemaName = function() {
            return this.diagram && this.diagram.sharedMetadata && this.diagram.sharedMetadata.name ? this.diagram.sharedMetadata.name : void 0
        }
        ,
        e.prototype.getDiagramLockedReason = function() {
            if (this.diagramSecurity && this.diagramSecurity.isLockedForEditing) {
                if (!this.AccountService.isUserLoggedIn())
                    return "Login to edit this diagram.";
                if (!this.diagramSecurity.isOwnedByCurrentUser)
                    return "This diagram is in read-only mode for you because the owner does not have Pro access. Click to copy and enable editing.";
                if (this.diagramSecurity.requireProAccess)
                    return "Go Pro to edit this diagram."
            }
            return "Diagram locked for editing."
        }
        ,
        e.prototype.onLockButtonClick = function() {
            if (this.diagramSecurity && this.diagramSecurity.isLockedForEditing) {
                if (!this.AccountService.isUserLoggedIn())
                    return void this.$state.go("root.centered.login");
                if (!this.diagramSecurity.isOwnedByCurrentUser)
                    return void this.copyCurrentDiagram();
                if (this.diagramSecurity.requireProAccess)
                    return void this.$state.go("root.centered.subscribe")
            }
        }
        ,
        e.prototype.showReadOnlyMessage = function() {
            return this.diagramSecurity && this.AccountService.isUserLoggedIn() && this.diagramSecurity.isLockedForEditing && !this.diagramSecurity.isOwnedByCurrentUser
        }
        ,
        e.prototype.setPageTitle = function() {
            if (this.diagram && this.diagram.shortcode) {
                var e = (this.diagram.sharedMetadata ? this.diagram.sharedMetadata.name : void 0) || this.SchemaService.getNewFileName();
                e && (e += " - "),
                this.$rootScope.pageTitle = e + "QuickDBD"
            } else
                this.$rootScope.pageTitle = "QuickDBD"
        }
        ,
        e.prototype.goPro = function() {
            this.AccountService.requireLogin() || this.$state.go("root.centered.subscribe")
        }
        ,
        e.prototype.broadcastDiagramChanged = function(e, t) {
            this.$rootScope.$broadcast("diagram-changed", e, t)
        }
        ,
        e.prototype.broadcastRenderDiagram = function(e, t) {
            this.$rootScope.$broadcast("render-diagram", e, t),
            this.broadcastDiagramChanged(e, t)
        }
        ,
        e.prototype.autoSave = function(e) {
            this.lastAutoSaveAt ? this.lastAutoSaveAt.isAfter(moment().add(-1, "minutes")) || (this.lastAutoSaveAt = moment(),
            this.SchemaService.autoSave(e),
            this.diagram.sharedMetadata && !this.diagramSecurity.isLockedForEditing && this.SchemaFirebaseService.setDiagramSharedMetadata(this.diagram.shortcode, this.diagram.sharedMetadata)) : this.lastAutoSaveAt = moment()
        }
        ,
        e.prototype.profitWellTrack = function() {
            this.lastProfitWellAt ? this.lastProfitWellAt.isAfter(moment().add(-1, "hours")) || (this.lastProfitWellAt = moment(),
            this.TrackingService.profitWellTrack()) : this.lastProfitWellAt = moment()
        }
        ,
        e.prototype.collaborate = function() {
            this.CollaboratorsService.collaborate(this.diagram.shortcode, "file", this.diagramSecurity.isOwnedByCurrentUser)
        }
        ,
        e
    }();
    angular.module("QdbdApp.SourceEditor").controller("DtSourceEditorCtrl", t).directive("dtSourceEditor", function() {
        return {
            restrict: "E",
            templateUrl: "cache/modules/source-editor/dt-source-editor.html"
        }
    })
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r, a, s, c) {
            this.$rootScope = e,
            this.$state = t,
            this.$http = i,
            this.$mdDialog = o,
            this.localStorageService = n,
            this.SchemaParserService = r,
            this.SchemaFirebaseService = a,
            this.AccountService = s,
            this.ToastService = c,
            this.editorSize = {},
            this.SHORTCODE_KEY = "shortcode",
            this.EDITOR_SIZE_KEY = "editorSize",
            this.IS_CANVAS_MOUSE_ZOOM_ENABLED = "isCanvasMouseZoomEnabled",
            this.COLOR_PALETTE = "colorPalette",
            this.DEMO_INITIALIZED_KEY = "demoInitialized",
            this.CONVERSION_NOTIFICATION_KEY = "metaConversionNotified",
            this.initializeEditorSize()
        }
        return t.$inject = ["$rootScope", "$state", "$http", "$mdDialog", "localStorageService", "SchemaParserService", "SchemaFirebaseService", "AccountService", "ToastService"],
        t.prototype.getLocalShortcode = function() {
            return this.localStorageService.get(this.SHORTCODE_KEY)
        }
        ,
        t.prototype.setLocalShortcode = function(e) {
            e && this.localStorageService.set(this.SHORTCODE_KEY, e)
        }
        ,
        t.prototype.clearLocalShortcode = function() {
            this.localStorageService.remove(this.SHORTCODE_KEY)
        }
        ,
        t.prototype.isDemoInitialized = function() {
            return this.localStorageService.get(this.DEMO_INITIALIZED_KEY)
        }
        ,
        t.prototype.flagDemoAsInitialized = function() {
            this.localStorageService.set(this.DEMO_INITIALIZED_KEY, !0)
        }
        ,
        t.prototype.getDemoSample = function() {
            return "# Modify this code to update the DB schema diagram.\n# To reset the sample schema, replace everything with\n# two dots ('..' - without quotes).\n\nCustomer\n-\nCustomerID PK int\nName string INDEX\nAddress1 string\nAddress2 NULL string\nAddress3 NULL string\n\nOrder\n-\nOrderID PK int\nCustomerID int FK >- Customer.CustomerID\nTotalAmount money\nOrderStatusID int FK >- os.OrderStatusID\n\nOrderLine as ol\n----\nOrderLineID PK int\nOrderID int FK >- Order.OrderID\nProductID int FK >- p.ProductID\nQuantity int\n\n# Table documentation comment 1 (try the PDF/RTF export)\nProduct as p # Table documentation comment 2\n------------\nProductID PK int\n# Field documentation comment 1\n# Field documentation comment 2 \nName varchar(200) UNIQUE # Field documentation comment 3\nPrice money\n\nOrderStatus as os\n----\nOrderStatusID PK int\nName UNIQUE string\n\n[settings]\nZoom 100\nDefaultFieldType int\nCaseSensitive on\n\n[layout]\nOrder 564 208\nCustomer 189 348\nOrderStatus 819 230\nProduct 63 55\nOrderLine 322 122"
        }
        ,
        t.prototype.isDemoSample = function(e) {
            return e === this.getDemoSample()
        }
        ,
        t.prototype.isDemoSampleWithoutMeta = function(e) {
            var t = this.getDemoSample()
              , i = this.SchemaParserService.stripMetadata(t);
            return _.trim(e) === _.trim(i)
        }
        ,
        t.prototype.isCanvasMouseZoomEnabled = function() {
            var e = this.localStorageService.get(this.IS_CANVAS_MOUSE_ZOOM_ENABLED);
            return !_.isBoolean(e) || e
        }
        ,
        t.prototype.flipIsCanvasMouseZoomEnabled = function() {
            var e = this.isCanvasMouseZoomEnabled();
            this.localStorageService.set(this.IS_CANVAS_MOUSE_ZOOM_ENABLED, !e)
        }
        ,
        t.prototype.getActivePalette = function() {
            return this.localStorageService.get(this.COLOR_PALETTE)
        }
        ,
        t.prototype.isBasicPaletteActive = function() {
            return "basic" === this.getActivePalette()
        }
        ,
        t.prototype.flipActivePalette = function() {
            var e = this.isBasicPaletteActive();
            this.localStorageService.set(this.COLOR_PALETTE, e ? "default" : "basic")
        }
        ,
        t.prototype.saveLocalEditorSize = function() {
            this.localStorageService.set(this.EDITOR_SIZE_KEY, this.editorSize.x)
        }
        ,
        t.prototype.initializeEditorSize = function() {
            this.editorSize.x = this.getLocalEditorSize() || 25
        }
        ,
        t.prototype.getLocalEditorSize = function() {
            return this.localStorageService.get(this.EDITOR_SIZE_KEY)
        }
        ,
        t.prototype.ensureSharedMetadataExists = function(e) {
            e.sharedMetadata || (e.sharedMetadata = {})
        }
        ,
        t.prototype.ensureLayoutExists = function(e) {
            e.layout || (e.layout = {})
        }
        ,
        t.prototype.ensureViewportExists = function(e) {
            e.viewport || (e.viewport = {});
            var t = e.viewport.position;
            void 0 !== t && null !== t || (e.viewport.position = {
                x: 0,
                y: 0
            });
            var i = e.viewport.zoom;
            void 0 !== i && null !== i || (e.viewport.zoom = 100)
        }
        ,
        t.prototype.setViewport = function(e, t) {
            this.ensureViewportExists(e),
            _.extend(e.viewport, t)
        }
        ,
        t.prototype.setViewportPosition = function(e, t, i) {
            this.ensureViewportExists(e),
            _.extend(e.viewport.position, {
                x: t,
                y: i
            })
        }
        ,
        t.prototype.getZoomValue = function(e) {
            return e && e.viewport && e.viewport.zoom ? e.viewport.zoom : 100
        }
        ,
        t.prototype.resolveZoomLevel = function(e, t) {
            this.ensureViewportExists(e),
            e.viewport.zoom = this.validateZoom(t)
        }
        ,
        t.prototype.resolveZoomDiff = function(e, t) {
            this.ensureViewportExists(e),
            e.viewport.zoom = this.resolveZoomDiffValue(e.viewport.zoom, t)
        }
        ,
        t.prototype.resolveZoomDiffValue = function(e, t) {
            return this.validateZoom(e + t)
        }
        ,
        t.prototype.validateZoom = function(e) {
            return void 0 === e || null === e ? 100 : e < 10 ? 10 : e > 200 ? 200 : e
        }
        ,
        t.prototype.addRelationshipToLine = function(e, t) {
            if (t.fromLine === t.toLine)
                return e;
            if (this.SchemaParserService.isValidLine(parseInt(t.fromLine)))
                return this.ToastService.showError("Could not create relationship, found error on line " + t.fromLine + "."),
                e;
            var i = "FK >- " + this.createRelDefinitionSegment(t.toTable) + "." + this.createRelDefinitionSegment(t.toField)
              , o = this.stripExtraWhitespace(e)
              , n = o.split(" ")
              , r = _.findIndex(n, function(e) {
                return "fk" === e.toLowerCase()
            });
            if (-1 === r)
                o = o + " " + i;
            else {
                var a = this.SchemaParserService.containsRelationshipType(n) ? 3 : 1
                  , s = n.slice(r, r + a).join(" ");
                o = o.replace(s, i)
            }
            return o
        }
        ,
        t.prototype.createRelDefinitionSegment = function(e) {
            return _.contains(e, ".") ? '"' + e + '"' : e
        }
        ,
        t.prototype.removeRelationshipFromLine = function(e, t) {
            if (this.SchemaParserService.isValidLine(t))
                return this.ToastService.showError("Could not create relationship, found error on line " + t + "."),
                e;
            if (_.startsWith(e, "rel ") && !_.contains(e.toLowerCase(), "fk"))
                return "";
            var i = e.split(" ")
              , o = _.findIndex(i, function(e) {
                return "fk" === e.toLowerCase()
            });
            return i.splice(o, 3),
            i.join(" ")
        }
        ,
        t.prototype.createAceErrors = function(e) {
            return _.map(e, function(e, t) {
                return {
                    row: parseInt(t) - 1,
                    text: e.join("\r\n"),
                    type: "error"
                }
            })
        }
        ,
        t.prototype.schemaErrorsExist = function(e) {
            return !!e && !_.isEmpty(e.errors)
        }
        ,
        t.prototype.applySchemaMetadataConversion = function(e, t) {
            var i = this;
            if (!e || !t)
                return !1;
            if (!this.schemaContainsMetadata(e.schema))
                return !1;
            if (t.sections && t.sections.settings) {
                var o = t.sections.settings;
                this.ensureSharedMetadataExists(e),
                this.ensureViewportExists(e),
                _.extend(e.sharedMetadata, {
                    isCaseSensitive: o.casesensitive,
                    defaultType: o.defaultfieldtype
                }),
                _.extend(e.viewport, {
                    zoom: o.zoom,
                    position: o.position
                })
            }
            return t.sections && t.sections.layout && (this.ensureLayoutExists(e),
            _.each(t.sections.layout, function(t, o) {
                i.updateTablePosition(e, o, {
                    x: t.x,
                    y: t.y
                })
            })),
            e.schema = this.SchemaParserService.stripMetadata(e.schema),
            !0
        }
        ,
        t.prototype.schemaContainsMetadata = function(e) {
            var t = this.SchemaParserService.stripMetadata(e);
            return _.trim(t) !== _.trim(e)
        }
        ,
        t.prototype.updateTablePosition = function(e, t, i) {
            e.layout && (e.layout[t] = i)
        }
        ,
        t.prototype.purgeParentlessLayoutTables = function(e, t) {
            if (t && t.sections) {
                var i = _.map(t.sections.tables, "identifier")
                  , o = this.removeNonExistingLayoutTables(e.layout, i);
                o.length > 0 && this.SchemaFirebaseService.removeDiagramLayoutTables(e.shortcode, o)
            }
        }
        ,
        t.prototype.removeNonExistingLayoutTables = function(e, t) {
            var i = _.keys(e)
              , o = _.filter(i, function(e) {
                return _.indexOf(t, e) < 0
            });
            return _.each(o, function(t) {
                delete e[t]
            }),
            o
        }
        ,
        t.prototype.metadataConversionNotification = function(e) {
            var t = this;
            this.isDemoSampleWithoutMeta(e.schema) || (this.localStorageService.get(this.CONVERSION_NOTIFICATION_KEY) ? this.ToastService.showInfoWithAction("Diagram format updated", "INFO", function() {
                return t.showMetadataConversionModal()
            }) : (this.localStorageService.set(this.CONVERSION_NOTIFICATION_KEY, !0),
            this.showMetadataConversionModal()))
        }
        ,
        t.prototype.showMetadataConversionModal = function() {
            var e = this.$mdDialog.alert().title("Notification - Diagram format updated").htmlContent("Due to a system upgrade, the [Settings] and [Layout] sections are no longer<br/>visible. This information is now stored in the background. Your diagram has<br/>been automatically converted to the new format.").ok("Ok").clickOutsideToClose(!0);
            this.$mdDialog.show(e).finally(function() {
                e = void 0
            })
        }
        ,
        t.prototype.stripExtraWhitespace = function(e) {
            return _.trim(e.replace(/  +/g, " "))
        }
        ,
        t.prototype.getCurrentShortcode = function() {
            return this.$state.params.shortcode
        }
        ,
        t = __decorate([e.Service("QdbdApp.SourceEditor", "SourceEditorService")], t)
    }();
    e.SourceEditorService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a) {
            this.$rootScope = e,
            this.$scope = t,
            this.$state = i,
            this.$timeout = o,
            this.SubscriptionService = n,
            this.AccountService = r,
            this.ToastService = a,
            this.isEditEnabled = !1,
            this.editForm = !1,
            this.SubscriptionService.ensureUserNotSubscribed(),
            this.initialize()
        }
        t.$inject = ["$rootScope", "$scope", "$state", "$timeout", "SubscriptionService", "AccountService", "ToastService"],
        t.prototype.initialize = function() {
            var e = this.SubscriptionService.getBillingDetails();
            this.billingDetails = e,
            this.billingDetails ? this.editForm = !this.billingDetails.firstName || !this.billingDetails.lastName : this.$state.go("root.standardShrinkable.home")
        }
        ,
        t.prototype.confirmEmail = function() {
            var e = this;
            this.AccountService.requestEmailConfirmation().then(function() {
                e.ToastService.showInfo("Confirmation email sent"),
                e.$state.go("root.standard.user.profile", {
                    userId: e.$rootScope.currentUser.userId
                })
            })
        }
        ,
        t.prototype.confirmBillingDetails = function() {
            var e = this;
            this.SubscriptionService.updateBillingDetails(this.billingDetails).then(function() {
                e.SubscriptionService.cacheVoucherCodeChoice(e.billingDetails.voucherCode),
                e.$state.go("root.centered.checkout")
            }, function() {
                e.SubscriptionService.cacheVoucherCodeChoice("")
            })
        }
        ,
        t.prototype.back = function() {
            !this.$rootScope.currentUser.hasProAccess && this.SubscriptionService.hasVoucherCode() ? this.$state.go("root.standardShrinkable.home") : this.$state.go("root.centered.subscribe")
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Subscription", "BillingDetailsCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a, s, c) {
            this.$scope = e,
            this.$log = t,
            this.$timeout = i,
            this.SubscriptionService = o,
            this.MessageScreenService = n,
            this.ToastService = r,
            this.ErrorService = a,
            this.TrackingService = s,
            this.$state = c,
            this.braintreeInitStarted = !1,
            this.isMethodSelectable = !1,
            this.isMethodSelected = !1,
            this.acceptedTerms = !1,
            this.authorizationInProgress = !1,
            this.isVoucher = !1,
            this.SubscriptionService.ensureUserNotSubscribed(),
            this.initialize(),
            e.$on("$destroy", this.teardown.bind(this))
        }
        t.$inject = ["$scope", "$log", "$timeout", "SubscriptionService", "MessageScreenService", "ToastService", "ErrorService", "TrackingService", "$state"],
        t.prototype.initialize = function() {
            var e = this;
            this.SubscriptionService.getCheckoutDetails().then(function(t) {
                return e.checkoutDetails = t.data,
                e.isVoucher = "voucher" === e.checkoutDetails.plan,
                e.SubscriptionService.getToken()
            }).then(function(t) {
                var i = t.data;
                i ? e.$timeout(function() {
                    e.initializeDropin(i)
                }) : e.showErrorToast()
            }, function(t) {
                t.data.modelState["model.DiscountCode"] && t.data.modelState["model.DiscountCode"].length > 0 ? (e.SubscriptionService.clearDiscountCached(),
                e.ToastService.showError(t.data.modelState["model.DiscountCode"][0]),
                e.back()) : e.showErrorToast()
            })
        }
        ,
        t.prototype.teardown = function() {
            var e = this;
            this.$timeout(function() {
                e.dropInInstance && e.dropInInstance.teardown(function() {
                    e.$log.info("Braintree checkout teardown complete.")
                })
            })
        }
        ,
        t.prototype.initializeDropin = function(e) {
            var t = this;
            this.braintreeInitStarted = !0,
            "voucher" !== this.checkoutDetails.plan && braintree.dropin.create({
                authorization: e,
                container: "#dropin-container",
                paypal: {
                    flow: "vault"
                }
            }, function(e, i) {
                t.$timeout(function() {
                    e ? (t.ErrorService.logError(e),
                    t.showErrorToast()) : t.initializeDropinInstance(i)
                })
            })
        }
        ,
        t.prototype.initializeDropinInstance = function(e) {
            var t = this;
            this.dropInInstance = e,
            this.isMethodSelected = !!this.getActivePaymentMethod(),
            this.dropInInstance.on("paymentMethodRequestable", function(e) {
                t.$timeout(function() {
                    t.isMethodSelectable = t.isPaymentMethodSelectable(e),
                    t.isMethodSelectable ? t.isMethodSelected = !1 : t.isMethodSelected = !!t.getActivePaymentMethod()
                })
            }),
            this.dropInInstance.on("noPaymentMethodRequestable", function() {
                t.$timeout(function() {
                    t.isMethodSelectable = !1,
                    t.isMethodSelected = !1
                })
            }),
            this.dropInInstance.on("paymentOptionSelected", function() {
                t.$timeout(function() {
                    t.isMethodSelectable = !1,
                    t.isMethodSelected = !1
                })
            })
        }
        ,
        t.prototype.isPaymentMethodSelectable = function(e) {
            return e && !e.paymentMethodIsSelected
        }
        ,
        t.prototype.getActivePaymentMethod = function() {
            if (this.dropInInstance && this.dropInInstance._model && this.dropInInstance._model._activePaymentMethod)
                return this.dropInInstance._model._activePaymentMethod
        }
        ,
        t.prototype.selectPaymentMethod = function() {
            var e = this;
            this.dropInInstance.requestPaymentMethod(function(t, i) {
                e.$timeout(function() {
                    t ? (e.ErrorService.logError(t),
                    e.showErrorToast()) : (e.isMethodSelectable = !1,
                    e.isMethodSelected = !!e.getActivePaymentMethod())
                })
            })
        }
        ,
        t.prototype.authorizePayment = function() {
            var e = this
              , t = {};
            if (this.isVoucher)
                t.voucherCode = this.checkoutDetails.voucherCode;
            else {
                var i = this.getActivePaymentMethod();
                if (!i || !i.nonce)
                    return void this.showErrorToast();
                t.nonce = i.nonce
            }
            t.discountCode = this.SubscriptionService.getCachedDiscountCodeChoice(),
            this.authorizationInProgress = !0,
            this.SubscriptionService.subscribe(t).then(function() {
                e.TrackingService.trackPurchase(e.checkoutDetails.amountToPay, e.checkoutDetails.planCaption.split(" ")[0]),
                e.MessageScreenService.showSuccess({
                    header: "Payment successful!",
                    message: "Thank you! You have successfuly subscribed to QuickDBD."
                })
            }, function() {
                e.showErrorContactUsPage()
            })
        }
        ,
        t.prototype.showErrorToast = function() {
            this.ToastService.showError("An error occured, please refresh and try again.")
        }
        ,
        t.prototype.showErrorContactUsPage = function() {
            this.MessageScreenService.showError({
                header: "Payment failed",
                message: "Sorry, something went wrong during the payment process. Please contact us at info@dovetail.ie and we'll sort it out for you."
            })
        }
        ,
        t.prototype.back = function() {
            this.$state.go("root.centered.billingDetails")
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Subscription", "CheckoutCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o) {
            this.$rootScope = e,
            this.$mdDialog = t,
            this.SubscriptionService = i,
            this.ToastService = o,
            this.model = {
                reasonId: "price"
            },
            this.reasons = {
                price: {
                    id: "price",
                    reason: "The price is too high",
                    question: "How much would you be willing to pay for it?"
                },
                otherProduct: {
                    id: "otherProduct",
                    reason: "I decided to use another product",
                    question: "Could you please share with us which one?"
                },
                other: {
                    id: "other",
                    reason: "Other",
                    question: "Could you please tell us why?"
                },
                dontNeedIt: {
                    id: "dontNeedIt",
                    reason: "I don't need it anymore",
                    question: "Any additional comments?"
                },
                didntWork: {
                    id: "didntWork",
                    reason: "The product did not work as expected",
                    question: "Could you please provide us with some details?"
                },
                missingFeatures: {
                    id: "missingFeatures",
                    reason: "Some features that I need are missing",
                    question: "Could you please tell us which ones?"
                }
            }
        }
        t.$inject = ["$rootScope", "$mdDialog", "SubscriptionService", "ToastService"],
        t.prototype.$onInit = function() {
            this.model.userId = this.userId
        }
        ,
        t.prototype.close = function() {
            this.$mdDialog.cancel()
        }
        ,
        t.prototype.confirm = function() {
            var e = this;
            this.model.reason = this.reasons[this.model.reasonId].reason,
            this.SubscriptionService.cancelSubscription(this.model).then(function() {
                e.$rootScope.$broadcast("subscription-cancelled"),
                e.ToastService.showInfo("Successfully unsubscribed"),
                e.close()
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.Subscription", "dtCancelSubscription", {
            bindings: {
                userId: "@"
            },
            templateUrl: "cache/modules/subscription/dt-cancel-subscription/dt-cancel-subscription.html",
            controllerAs: "DtCancelSubscriptionVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r) {
            var a = this;
            this.$rootScope = e,
            this.$state = t,
            this.AccountService = i,
            this.SubscriptionService = o,
            this.SharingService = n,
            this.MessageScreenService = r,
            this.$state.current.url.toString().indexOf("voucher") >= 0 ? this.parseVoucherURL() : this.$state.current.url.toString().indexOf("discount") >= 0 ? this.parseDiscountURL() : this.AccountService.reAuthenticate().then(function() {
                a.SubscriptionService.ensureUserNotSubscribed(),
                !a.$rootScope.currentUser.hasProAccess && a.SubscriptionService.hasVoucherCode() && a.selectSubscription("voucher")
            })
        }
        t.$inject = ["$rootScope", "$state", "AccountService", "SubscriptionService", "SharingService", "MessageScreenService"],
        t.prototype.parseDiscountURL = function() {
            var e = this;
            this.$state.params && this.$state.params.discountCode && (this.SubscriptionService.cacheDiscountCodeChoice(this.$state.params.discountCode),
            this.SubscriptionService.getDiscount().then(function(t) {
                t.data <= 0 ? (e.MessageScreenService.showError({
                    header: "Discount code not found!",
                    message: "Sorry, the discount code <b>" + e.SubscriptionService.getCachedDiscountCodeChoice() + "</b> was not found, please contact the system administrator"
                }),
                e.SubscriptionService.clearDiscountCached()) : (e.MessageScreenService.showSuccess({
                    header: "Discount code redeemed!",
                    message: "Your discount code <b>" + e.$state.params.discountCode + "</b> is valid. To activate your discount code go pro now!",
                    buttonText: "Subscribe now",
                    redirectRoute: "root.centered.subscribe"
                }),
                e.SubscriptionService.cacheDiscountedValue(t.data.toFixed(2)))
            }))
        }
        ,
        t.prototype.parseVoucherURL = function() {
            if (this.$state.params && this.$state.params.voucherCode) {
                this.SubscriptionService.cacheVoucherCodeChoice(this.$state.params.voucherCode);
                var e = "Thanks for using voucher <b>" + this.$state.params.voucherCode + "</b>. We've made a record of it. When you upgrade to Pro you will be able to redeem the voucher instead of entering payment details. For now, just carry on using QuickDBD.";
                this.MessageScreenService.showSuccess({
                    header: "Voucher recorded successfully!",
                    message: e
                })
            }
        }
        ,
        t.prototype.redirectIfNotLoggedIn = function() {
            this.AccountService.isUserLoggedIn() || this.$state.go("root.centered.login")
        }
        ,
        t.prototype.selectSubscription = function(e) {
            this.SubscriptionService.cacheSubscriptionChoice(e),
            this.$state.go("root.centered.billingDetails")
        }
        ,
        t.prototype.tweet = function() {
            this.SharingService.tweet("@Quick_DBD is giving away free Pro Plans!! Awesome online tool to design databases online. I love it! TWITTER_LOVE_EMOJI ")
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Subscription", "SubscribeCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o, n, r) {
            this.$rootScope = e,
            this.$http = t,
            this.localStorageService = i,
            this.BaseHttpService = o,
            this.AccountService = n,
            this.MessageScreenService = r,
            this.SUBSCRIPTION_PLAN = "subscriptionPlan",
            this.VOUCHER_CODE = "voucherCode",
            this.DISCOUNT_CODE = "discountCode",
            this.DISCOUNTED_VALUE = "discountedValue"
        }
        return t.$inject = ["$rootScope", "$http", "localStorageService", "BaseHttpService", "AccountService", "MessageScreenService"],
        t.prototype.ensureUserNotSubscribed = function() {
            this.$rootScope.currentUser && this.$rootScope.currentUser.activeSubscription && this.MessageScreenService.showError({
                header: "Subscription exists",
                message: "You already have an active subscription."
            })
        }
        ,
        t.prototype.updateBillingDetails = function(e) {
            var t = this
              , i = this.BaseHttpService.put("api/v1/payment/updateBillingDetails", e);
            return i.then(function() {
                t.AccountService.resolveCurrentUser()
            }),
            i
        }
        ,
        t.prototype.getToken = function() {
            return this.$http.get("api/v1/payment/token")
        }
        ,
        t.prototype.subscribe = function(e) {
            var t = this;
            e.subscriptionPlan = this.getCachedSubscriptionChoice();
            var i = this.$http.post("api/v1/payment/subscribe", e);
            return i.then(function() {
                t.AccountService.reAuthenticate(),
                t.cacheVoucherCodeChoice(""),
                t.clearDiscountCached()
            }),
            i
        }
        ,
        t.prototype.cancelSubscription = function(e) {
            var t = this
              , i = this.$http.put("api/v1/payment/cancelSubscription", e);
            return i.then(function() {
                t.AccountService.reAuthenticate()
            }),
            i
        }
        ,
        t.prototype.getUserPayments = function(e) {
            return this.$http.get("api/v1/payment/getUserPayments/" + e)
        }
        ,
        t.prototype.getBillingDetails = function() {
            return this.$rootScope.currentUser ? {
                emailConfirmed: this.$rootScope.currentUser.emailConfirmed,
                firstName: this.$rootScope.currentUser.firstName,
                lastName: this.$rootScope.currentUser.lastName,
                voucherCode: this.getCachedVoucherCodeChoice(),
                isVoucher: "voucher" === this.getCachedSubscriptionChoice()
            } : null
        }
        ,
        t.prototype.cacheSubscriptionChoice = function(e) {
            this.localStorageService.set(this.SUBSCRIPTION_PLAN, e)
        }
        ,
        t.prototype.getCachedSubscriptionChoice = function() {
            return this.localStorageService.get(this.SUBSCRIPTION_PLAN)
        }
        ,
        t.prototype.cacheVoucherCodeChoice = function(e) {
            this.localStorageService.set(this.VOUCHER_CODE, e)
        }
        ,
        t.prototype.cacheDiscountCodeChoice = function(e) {
            this.localStorageService.set(this.DISCOUNT_CODE, e)
        }
        ,
        t.prototype.clearDiscountCached = function() {
            this.cacheDiscountCodeChoice(""),
            this.cacheDiscountedValue("")
        }
        ,
        t.prototype.getCachedVoucherCodeChoice = function() {
            return this.localStorageService.get(this.VOUCHER_CODE)
        }
        ,
        t.prototype.getCachedDiscountCodeChoice = function() {
            return this.localStorageService.get(this.DISCOUNT_CODE)
        }
        ,
        t.prototype.getCheckoutDetails = function() {
            var e = this.getCachedSubscriptionChoice()
              , t = this.getCachedVoucherCodeChoice()
              , i = this.getCachedDiscountCodeChoice();
            return null !== t && void 0 !== t && "" !== t || (t = e),
            null !== i && void 0 !== i && "" !== i || (i = e),
            this.$http.get("api/v1/payment/checkoutDetails/" + e + "/" + t + "/" + i)
        }
        ,
        t.prototype.grantProAccess = function(e, t) {
            return this.$http.post("api/v1/user/grantProAccess", {
                userId: e,
                grantType: t
            })
        }
        ,
        t.prototype.removeSubscription = function(e) {
            return this.$http.post("api/v1/user/removeSubscription/" + e, null)
        }
        ,
        t.prototype.hasVoucherCode = function() {
            return !!this.getCachedVoucherCodeChoice()
        }
        ,
        t.prototype.getDiscount = function() {
            return this.$http.get("api/v1/payment/getDiscountedValue/" + this.getCachedDiscountCodeChoice(), null)
        }
        ,
        t.prototype.hasDiscountId = function() {
            return !!this.getCachedDiscountCodeChoice()
        }
        ,
        t.prototype.getCachedDiscountedValue = function() {
            return this.localStorageService.get(this.DISCOUNTED_VALUE)
        }
        ,
        t.prototype.cacheDiscountedValue = function(e) {
            this.localStorageService.set(this.DISCOUNTED_VALUE, e)
        }
        ,
        t = __decorate([e.Service("QdbdApp.Subscription", "SubscriptionService")], t)
    }();
    e.SubscriptionService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            this.$scope = e,
            this.SchemaService = t,
            this.PagingService = i,
            this.diagrams = {}
        }
        t.$inject = ["$scope", "SchemaService", "PagingService"],
        t.prototype.$onInit = function() {
            this.pager = this.PagingService.pagerFactory(this.filter, this.diagrams, this.getUserDiagrams.bind(this), "root.standard.user.diagrams"),
            this.$scope.$watch("DtUserDiagramsVM.filter", this.pager.onFilterChanged.bind(this), !0)
        }
        ,
        t.prototype.getUserDiagrams = function() {
            var e = this;
            this.SchemaService.filterUserDiagrams(this.filter).then(function(t) {
                _.extend(e.diagrams, t.data)
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.SourceEditor", "dtUserDiagrams", {
            bindings: {
                filter: "="
            },
            templateUrl: "cache/modules/user/dt-user-diagrams/dt-user-diagrams.html",
            controllerAs: "DtUserDiagramsVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o) {
            this.$scope = e,
            this.UserService = t,
            this.ToastService = i,
            this.PagingService = o,
            this.users = {}
        }
        t.$inject = ["$scope", "UserService", "ToastService", "PagingService"],
        t.prototype.$onInit = function() {
            this.pager = this.PagingService.pagerFactory(this.filter, this.users, this.loadUsers.bind(this), "root.standard.admin.userList"),
            this.$scope.$watch("DtUserListVM.filter", this.pager.onFilterChanged.bind(this), !0)
        }
        ,
        t.prototype.loadUsers = function() {
            var e = this;
            this.UserService.filterUsers(this.filter).then(function(t) {
                _.extend(e.users, t.data)
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.User", "dtUserList", {
            bindings: {
                filter: "="
            },
            templateUrl: "cache/modules/user/dt-user-list/dt-user-list.html",
            controllerAs: "DtUserListVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e) {
            this.SubscriptionService = e
        }
        t.$inject = ["SubscriptionService"],
        t.prototype.$onInit = function() {
            this.getUserPayments()
        }
        ,
        t.prototype.getUserPayments = function() {
            var e = this;
            this.SubscriptionService.getUserPayments(this.userId).then(function(t) {
                e.payments = t.data
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.User", "dtUserPayments", {
            bindings: {
                userId: "="
            },
            templateUrl: "cache/modules/user/dt-user-payments/dt-user-payments.html",
            controllerAs: "DtUserPaymentsVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a) {
            this.$rootScope = e,
            this.$mdDialog = t,
            this.$state = i,
            this.AccountService = o,
            this.UserService = n,
            this.SubscriptionService = r,
            this.ToastService = a
        }
        t.$inject = ["$rootScope", "$mdDialog", "$state", "AccountService", "UserService", "SubscriptionService", "ToastService"],
        t.prototype.$onInit = function() {
            this.initializeFilter()
        }
        ,
        t.prototype.cancelSubscription = function() {
            this.$mdDialog.show({
                template: "\n          <md-dialog aria-label='Cancel Subscription' class='modal-dialog'>\n            <dt-cancel-subscription user-id=\"" + this.userProfile.userId + '"></dt-cancel-subscription>\n          </md-dialog>\n        ',
                parent: angular.element(document.body),
                clickOutsideToClose: !0
            })
        }
        ,
        t.prototype.confirmEmail = function() {
            var e = this;
            this.AccountService.requestEmailConfirmation().then(function() {
                e.ToastService.showInfo("Confirmation email sent")
            })
        }
        ,
        t.prototype.initializeFilter = function() {
            this.filter = {
                page: 1,
                pageSize: 5,
                sortBy: "name",
                ownerId: this.userProfile ? this.userProfile.userId : null
            }
        }
        ,
        t.prototype.grantProAccess = function(e) {
            var t = this
              , i = this.$mdDialog.confirm().title("Grant Pro Access").htmlContent("Are you sure you want to give this user pro access?").ok("Yes").cancel("No").clickOutsideToClose(!0);
            this.$mdDialog.show(i).then(function() {
                t.SubscriptionService.grantProAccess(t.userProfile.userId, e).then(function() {
                    t.ToastService.showInfo("Pro access granted"),
                    t.initializeUser && t.initializeUser(),
                    t.AccountService.reAuthenticateIfCurrentUser(t.userProfile.userId)
                })
            })
        }
        ,
        t.prototype.removeSubscription = function() {
            var e = this
              , t = this.$mdDialog.confirm().title("Remove subscription").htmlContent("Are you sure you want to remove this user's subscription?").ok("Yes").cancel("No").clickOutsideToClose(!0);
            this.$mdDialog.show(t).then(function() {
                e.SubscriptionService.removeSubscription(e.userProfile.userId).then(function() {
                    e.ToastService.showInfo("Subscription removed"),
                    e.initializeUser && e.initializeUser(),
                    e.AccountService.reAuthenticateIfCurrentUser(e.userProfile.userId)
                })
            })
        }
        ,
        t.prototype.flipCollab = function(e) {
            var t = this
              , i = this.$mdDialog.confirm().title("Collab status change").htmlContent("Are you sure you want to change the collab status for this user?").ok("Yes").cancel("No").clickOutsideToClose(!0);
            this.$mdDialog.show(i).then(function() {
                t.UserService.flipCollab(e).then(function() {
                    t.initializeUser(),
                    t.ToastService.showInfo("Collab status changed")
                })
            })
        }
        ,
        t.prototype.deleteUser = function(e) {
            var t = this
              , i = this.$mdDialog.confirm().title("WARNING - Account Deletion").htmlContent("This is a destructive action. Your account will be removed and you will no longer have access to it. <br /><br />All diagrams associated with this account will be lost. This operation is irreversible. <br /><br />Are you sure you want to proceed? ").ok("Yes, DELETE my account").cancel("Cancel").clickOutsideToClose(!0);
            this.$mdDialog.show(i).then(function() {
                t.UserService.deleteUser(e).then(function() {
                    t.ToastService.showInfo("Account Deleted"),
                    t.$rootScope.currentUser.userId === e ? t.AccountService.logout() : t.$state.go("root.standard.admin.userList")
                })
            })
        }
        ,
        t = __decorate([e.Component("QdbdApp.User", "dtUserProfile", {
            bindings: {
                userProfile: "=",
                initializeUser: "&"
            },
            templateUrl: "cache/modules/user/dt-user-profile/dt-user-profile.html",
            controllerAs: "DtUserProfileVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i) {
            var o = this;
            this.$scope = e,
            this.$state = t,
            this.UserService = i,
            this.initializeUser(),
            this.$scope.$on("subscription-cancelled", function() {
                o.initializeUser()
            })
        }
        t.$inject = ["$scope", "$state", "UserService"],
        t.prototype.initializeUser = function() {
            var e = this.$state.params.userId;
            e ? this.UserService.getUserProfile(e).then(this.onProfileFetched.bind(this), this.onProfileFetchError.bind(this)) : this.UserService.getCurrentUserProfile().then(this.onProfileFetched.bind(this), this.onProfileFetchError.bind(this))
        }
        ,
        t.prototype.onProfileFetched = function(e) {
            this.userProfile = e.data || null
        }
        ,
        t.prototype.onProfileFetchError = function() {
            this.userProfile = null
        }
        ,
        t = __decorate([e.Controller("QdbdApp.User", "ProfileCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o) {
            this.$rootScope = e,
            this.$state = t,
            this.$timeout = i,
            this.TrackingService = o,
            this.setupRoutes(),
            this.handleRouting(),
            this.initializeFilter()
        }
        t.$inject = ["$rootScope", "$state", "$timeout", "TrackingService"],
        t.prototype.setupRoutes = function() {
            var e = this;
            this.userId = this.$state.params.userId,
            this.routes = [{
                caption: "Profile",
                name: "root.standard.user.profile"
            }, {
                caption: "Diagrams",
                name: "root.standard.user.diagrams"
            }, {
                caption: "Payments",
                name: "root.standard.user.payments"
            }],
            this.$timeout(function() {
                e.selectedTab = _.findIndex(e.routes, {
                    name: e.$state.current.name
                })
            })
        }
        ,
        t.prototype.handleRouting = function() {
            this.$state.is("root.standard.user") && this.$state.go("root.standard.user.profile", {
                userId: this.$rootScope.currentUser.userId
            })
        }
        ,
        t.prototype.initializeFilter = function() {
            this.filter = {
                page: this.$state.params.page || 1,
                pageSize: this.$state.params.pageSize || 20,
                ownerId: this.$state.params.ownerId || this.userId,
                search: this.$state.params.search,
                sortBy: this.$state.params.sortBy || "schemaSourceId",
                sortOperator: this.$state.params.sortOperator
            }
        }
        ,
        t.prototype.loadRoute = function(e) {
            var t = {
                userId: this.userId
            }
              , i = "root.standard.user.diagrams" === e ? _.extend(t, this.filter) : t;
            this.$state.go(e, i);
            var o = "";
            switch (e.toLowerCase()) {
            case "root.standard.user.diagrams":
                o = "Diagram";
                break;
            case "root.standard.user.payments":
                o = "Payments";
                break;
            default:
                o = "Profile"
            }
            this.TrackingService.trackAccount(o)
        }
        ,
        t = __decorate([e.Controller("QdbdApp.User", "UserCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e) {
            this.$http = e
        }
        return t.$inject = ["$http"],
        t.prototype.filterUsers = function(e) {
            return this.$http.get("api/v1/user/filter", {
                params: e
            })
        }
        ,
        t.prototype.getUserProfile = function(e) {
            return this.$http.get("api/v1/user/profile/" + e)
        }
        ,
        t.prototype.getCurrentUserProfile = function() {
            return this.$http.get("api/v1/user/profile")
        }
        ,
        t.prototype.flipCollab = function(e) {
            return this.$http.put("api/v1/user/flipCollab/" + e, void 0)
        }
        ,
        t.prototype.deleteUser = function(e) {
            return this.$http.delete("api/v1/user/" + e)
        }
        ,
        t = __decorate([e.Service("QdbdApp.User", "UserService")], t)
    }();
    e.UserService = t
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o, n, r, a) {
            this.$scope = e,
            this.VoucherService = t,
            this.$state = i,
            this.PagingService = o,
            this.ToastService = n,
            this.$window = r,
            this.$location = a,
            this.vouchers = {}
        }
        t.$inject = ["$scope", "VoucherService", "$state", "PagingService", "ToastService", "$window", "$location"],
        t.prototype.$onInit = function() {
            this.pager = this.PagingService.pagerFactory(this.filter, this.vouchers, this.loadVouchers.bind(this), "root.standard.admin.vouchersList"),
            this.$scope.$watch("DtVoucherListVM.filter", this.pager.onFilterChanged.bind(this), !0)
        }
        ,
        t.prototype.loadVouchers = function() {
            var e = this;
            this.VoucherService.filterVoucher(this.filter).then(function(t) {
                _.extend(e.vouchers, t.data)
            })
        }
        ,
        t.prototype.addNewVoucher = function() {
            this.$state.go("root.standard.admin.voucher")
        }
        ,
        t.prototype.editNewVoucher = function(e) {
            this.$state.go("root.standard.admin.voucher", {
                voucher: e
            })
        }
        ,
        t.prototype.copyVoucherUrl = function(e) {
            this.VoucherService.copyVoucherUrl(e)
        }
        ,
        t = __decorate([e.Component("QdbdApp.Voucher", "dtVoucherList", {
            bindings: {
                filter: "="
            },
            templateUrl: "cache/modules/voucher/dt-voucher-list/dt-voucher-list.html",
            controllerAs: "DtVoucherListVM"
        })], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    !function() {
        function t(e, t, i, o) {
            this.$state = e,
            this.$scope = t,
            this.VoucherService = i,
            this.ToastService = o,
            this.voucher = {},
            this.isEdit = !1;
            var n = this.$state.params.voucher;
            null === n ? (this.voucher.maxRedemptions = 1,
            this.voucher.valueInWeeks = 4,
            this.voucher.minDate = new Date,
            this.voucher.validFrom = new Date,
            this.voucher.validFrom.setHours(0, 0, 0, 0),
            this.isEdit = !1) : (this.voucher = n,
            this.voucher.validFrom = this.voucher.validFrom ? new Date(this.voucher.validFrom.toString()) : this.voucher.validFrom,
            this.voucher.validTo = this.voucher.validTo ? new Date(this.voucher.validTo.toString()) : this.voucher.validTo,
            this.voucher.validFrom && this.voucher.validFrom.setHours(0, 0, 0, 0),
            this.voucher.validTo && this.voucher.validTo.setHours(0, 0, 0, 0),
            this.voucher.minDate = this.voucher.validFrom ? _.min([this.voucher.validFrom, new Date]) : new Date,
            this.isEdit = !0)
        }
        t.$inject = ["$state", "$scope", "VoucherService", "ToastService"],
        t.prototype.back = function() {
            this.$state.go("root.standard.admin.vouchersList")
        }
        ,
        t.prototype.save = function() {
            var e = this;
            this.VoucherService.save(this.voucher).then(function() {
                e.ToastService.showInfo("Voucher saved successfully."),
                e.back()
            }, function(t) {
                e.voucher.modelState = t.data.modelState,
                t.data && t.data.error_description && (e.voucher.modelState = {},
                e.voucher.modelState[""] = [t.data.error_description])
            })
        }
        ,
        t.prototype.setDefaultPeriod = function(e) {
            switch (e) {
            case "week":
                this.voucher.validFrom = new Date,
                this.voucher.validTo = new Date,
                this.voucher.validTo.setDate(this.voucher.validTo.getDate() + 7);
                break;
            case "month":
                this.voucher.validFrom = new Date,
                this.voucher.validTo = new Date,
                this.voucher.validTo.setMonth(this.voucher.validTo.getMonth() + 1);
                break;
            default:
                this.voucher.validFrom = new Date,
                this.voucher.validTo = new Date,
                this.voucher.validTo.setFullYear(this.voucher.validTo.getFullYear() + 1)
            }
            this.voucher.validFrom.setHours(0, 0, 0, 0),
            this.voucher.validTo.setHours(0, 0, 0, 0)
        }
        ,
        t.prototype.copyVoucherUrl = function(e) {
            this.VoucherService.copyVoucherUrl(e)
        }
        ,
        t = __decorate([e.Controller("QdbdApp.Voucher", "VoucherCtrl")], t)
    }()
}(QdbdApp || (QdbdApp = {}));
var QdbdApp;
!function(e) {
    var t = function() {
        function t(e, t, i, o) {
            this.$http = e,
            this.ToastService = t,
            this.$window = i,
            this.$location = o
        }
        return t.$inject = ["$http", "ToastService", "$window", "$location"],
        t.prototype.filterVoucher = function(e) {
            return this.$http.get("api/v1/payment/filterVouchers", {
                params: e
            })
        }
        ,
        t.prototype.save = function(e) {
            return this.$http.post("api/v1/payment/saveVoucher", e)
        }
        ,
        t.prototype.copyVoucherUrl = function(e) {
            var t = angular.element(this.$window.document.body)
              , i = angular.element("<textarea/>");
            try {
                var o = this.$location.absUrl().substr(0, this.$location.absUrl().indexOf("#") + 1) + "/voucher/" + e.code;
                i.val(o),
                t.append(i),
                i.select(),
                document.execCommand("copy") && this.ToastService.showInfo("Copied to clipboard.")
            } finally {
                i.remove()
            }
        }
        ,
        t = __decorate([e.Service("QdbdApp.Voucher", "VoucherService")], t)
    }();
    e.VoucherService = t
}(QdbdApp || (QdbdApp = {})),
angular.module("QdbdApp.Common").run(["$templateCache", function(e) {
    e.put("cache/common/layouts/centered.html", '<main layout="row" flex="noshrink">\n  <dt-side-toolbar layout="column"></dt-side-toolbar>\n  <div id="main-content" ui-view="main-content" layout="column" layout-align="start center" flex></div>\n</main>\n\n\n'),
    e.put("cache/common/layouts/standard-padded.html", '<main layout="row" flex="noshrink">\n  <dt-side-toolbar layout="column"></dt-side-toolbar>\n  <div id="main-content" class="padded-content" ui-view="main-content" layout="row" flex></div>\n</main>'),
    e.put("cache/common/layouts/standard-shrinkable.html", '<main layout="row" flex>\n  <dt-side-toolbar layout="column"></dt-side-toolbar>\n  <div id="main-content" ui-view="main-content" layout="row" flex></div>\n</main>\n'),
    e.put("cache/common/layouts/standard.html", '<main layout="row" flex="noshrink">\n  <dt-side-toolbar layout="column"></dt-side-toolbar>\n  <div id="main-content" ui-view="main-content" layout="row" flex></div>\n</main>\n'),
    e.put("cache/modules/admin/admin.html", '<div ng-controller="AdminCtrl as AdminVM" flex class="tabbed-layout">\n  <md-tabs class="md-primary" md-selected="AdminVM.selectedTab">\n    <md-tab ng-repeat="route in AdminVM.routes" label="{{route.caption}}" ng-click="AdminVM.loadRoute(route.name)"></md-tab>\n  </md-tabs>\n  <div layout="row">\n    <div id="admin-content" class="tabbed-content" ui-view="admin-content"></div>\n    <div flex></div>\n  </div>\n</div>'),
    e.put("cache/modules/diagram-renderer/dt-diagram-renderer.html", '<div id="renderer-container" flex class="tour-overlay-container">\n  <div id="dragger" layout="column">\n    \x3c!-- This is the dragger for resizing the editor on the left side --\x3e\n    <div class="dragger-top" flex></div>\n    <div class="dragger-handle first">\n      <div class="dragger-handle second">\n        <div class="dragger-handle third"></div>\n      </div>\n    </div>\n    <div flex></div>\n  </div>\n\n  <div class="tour-overlay renderer-overlay"></div>\n  <div class="canvas" ng-if="!DtDiagramRendererVM.isUnsupportedBrowser"></div>\n  <div class="unsupported" ng-if="DtDiagramRendererVM.isUnsupportedBrowser">\n    <span>\n      Sorry - you are using an unsupported browser and we cannot draw your diagram. We suggest using Chrome, Brave, Opera or Firefox.<br><br>\n      If this is a major problem for you, please <a href="https://twitter.com/quick_dbd">contact us</a>. Thanks.\n    </span>\n  </div>\n\n\n  <div ng-if="DtDiagramRendererVM.diagram.viewport.zoom && !DtDiagramRendererVM.isUnsupportedBrowser">\n    <md-button aria-label="Center" class="md-mini md-icon-button zoom canvas-center" ng-click="DtDiagramRendererVM.centerDiagram()">\n      <md-tooltip md-direction="below">Center</md-tooltip>\n      <md-icon class="mdi mdi-crosshairs-gps"></md-icon>\n    </md-button>\n\n\n    <md-button aria-label="Zoom In" class="md-mini md-icon-button zoom zoom-in" ng-click="DtDiagramRendererVM.zoomIn()" ng-disabled="DtDiagramRendererVM.diagram.viewport.zoom == 200">\n      <md-tooltip md-direction="below">Zoom In</md-tooltip>\n      <md-icon class="mdi mdi-plus"></md-icon>\n    </md-button>\n\n\n    <md-menu md-position-mode="target-right bottom">\n      <a>\n        <md-button aria-label="{{DtDiagramRendererVM.diagram.viewport.zoom}}% Zoom" class="md-mini md-icon-button zoom zoom-default" ng-click="$mdMenu.open($event)">\n          <md-tooltip md-direction="below">Set Zoom Level</md-tooltip>\n          <span>{{DtDiagramRendererVM.diagram.viewport.zoom}}%</span>\n        </md-button>\n      </a>\n      <md-menu-content width="2">\n        <md-menu-item ng-repeat="zoomLevel in [10, 50, 100, 150, 200]">\n          <md-button ng-click="DtDiagramRendererVM.setZoom(zoomLevel)">\n            <div layout="row" flex>\n              <p class="zoom-level" flex>{{zoomLevel}}%</p>\n            </div>\n          </md-button>\n        </md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n\n    <md-button aria-label="Zoom Out" class="md-mini md-icon-button zoom zoom-out" ng-click="DtDiagramRendererVM.zoomOut()" ng-disabled="DtDiagramRendererVM.diagram.viewport.zoom == 10">\n      <md-tooltip md-direction="below">Zoom Out</md-tooltip>\n      <md-icon class="mdi mdi-minus"></md-icon>\n    </md-button>\n  </div>\n</div>'),
    e.put("cache/modules/diagram-renderer/dt-shortcode.html", '<md-toolbar>\n  <div class="md-toolbar-tools">\n    <h2>Share Diagram</h2>\n    <span flex></span>\n    <md-button class="md-icon-button" ng-click="DtShortcodeVM.closeDialog()">\n      <md-icon class="mdi mdi-close" aria-label="Close dialog"></md-icon>\n    </md-button>\n  </div>\n</md-toolbar>\n\n<md-dialog-content>\n  <md-content class="md-padding">\n    <md-input-container md-no-float class="md-block no-bottom-margin">\n      <label>Diagram link</label>\n      <input id="shotcode-link" ng-model="DtShortcodeVM.shortcodeLink" type="text">\n      <md-icon class="mdi mdi-content-copy copy-to-clipboard" ng-click="DtShortcodeVM.copyToClipboard()">\n        <md-tooltip>Copy to Clipboard</md-tooltip>\n      </md-icon>\n    </md-input-container>\n    \n    <div class="social-share" layout="column" layout-gt-xs="row">\n      <div flex-gt-xs="50" class="left-column">\n        <div layout="row">\n          <md-button class="md-raised twitter-button" flex ng-click="DtShortcodeVM.socialShare(\'twitter\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-twitter"></md-icon>\n              <span flex layout="row" layout-align="start center">Tweet about it</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div layout="row">\n          <md-button class="md-raised facebook-button" flex ng-click="DtShortcodeVM.socialShare(\'facebook\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-facebook"></md-icon>\n              <span flex layout="row" layout-align="start center">Share on Facebook</span>\n            </span>\n          </md-button>\n        </div>\n      </div>\n\n      <div flex-gt-xs="50" class="right-column">\n        <div layout="row">\n          <md-button class="md-raised linkedin-button" flex ng-click="DtShortcodeVM.socialShare(\'linkedin\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-linkedin"></md-icon>\n              <span flex layout="row" layout-align="start center">Share on Linkedin</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div layout="row">\n          <md-button class="md-raised google-button" flex ng-click="DtShortcodeVM.socialShare(\'google\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-google"></md-icon>\n              <span flex layout="row" layout-align="start center">Share on Google+</span>\n            </span>\n          </md-button>\n        </div>\n      </div>\n    </div>\n  </md-content>\n</md-dialog-content>'),
    e.put("cache/modules/collaborators/dt-collaborators.html", '<md-toolbar>\n  <div class="md-toolbar-tools">\n    <h2>Collaborators</h2>\n    <span flex></span>\n    <md-button class="md-icon-button" ng-click="DtCollaboratorsVM.closeDialog()">\n      <md-icon class="mdi mdi-close" aria-label="Close dialog"></md-icon>\n    </md-button>\n  </div>\n</md-toolbar>\n<md-dialog-content>\n  <md-content class="md-padding">\n      <div layout="row">\n        <div flex-gt-xs="90" class="left-column">\n          <dt-input-text model="DtCollaboratorsVM.model" property-name="email" label="E-mail address" input-type="email"></dt-input-text>\n        </div>\n        <div flex-gt-xs="10" class="right-column">\n          <md-button class="input-icon-button" href="javascript:void(0)" ng-click="DtCollaboratorsVM.addCollaborator()">\n            <md-tooltip md-direction="bottom" md-z-index="1000">Add collaborator</md-tooltip>\n            <md-icon class="mdi mdi-account-plus"></md-icon>\n          </md-button>\n        </div>\n      </div>\n      <div>\n        <div ng-if="!DtCollaboratorsVM.collaborators || DtCollaboratorsVM.collaborators.length <= 0">\n          <p>There is no collaborator to this {{DtCollaboratorsVM.collabType === "dir" ? "folder" : "file" }}</p>\n        </div>\n        <div class="dialog-table-wrap" ng-if="DtCollaboratorsVM.collaborators && DtCollaboratorsVM.collaborators.length > 0">\n          <table class="dialog-table collaborators">\n            <tbody>\n              <tr ng-repeat="collab in DtCollaboratorsVM.collaborators">\n                <td class="dialog-table-auto-fit-column dialog-table-icon-left-column" ng-if="!collab.isFolderPermission"><md-icon class="mdi mdi-file-outline"></md-icon></td>\n                <td class="dialog-table-auto-fit-column dialog-table-icon-left-column" ng-if="collab.isFolderPermission"><md-icon class="mdi mdi-folder-multiple"></md-icon></td>\n                <td>{{collab.email}}</td>\n                <td class="dialog-table-auto-fit-column">\n                  <span class="label-dialog" ng-class="{ accepted: collab.isAccepted }">\n                    {{collab.isAccepted ? "Accepted" : "Pending"}}\n                  </span>\n                </td>\n                <td class="dialog-table-auto-fit-column" ng-if="DtCollaboratorsVM.isOwnedByCurrentUser">\n                  <md-button class="md-collab-button" href="javascript:void(0)" ng-click="DtCollaboratorsVM.removeCollaborator(collab)">\n                    <md-tooltip md-direction="right" md-z-index="1000">Remove collaborator</md-tooltip>\n                    <md-icon class="mdi mdi-account-remove"></md-icon>\n                  </md-button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n  </md-content>\n</md-dialog-content>\n'),
    e.put("cache/modules/home/home.html", '<div layout="row" flex ng-controller="HomeCtrl as HomeVM">\n  <dt-source-editor ng-show="!HomeVM.dirTreeState.isOpen" ng-style="{ width: HomeVM.editorSize.x + \'%\' }" layout="column" hide-xs></dt-source-editor>\n  <dt-schema-dir ng-if="HomeVM.dirTreeState.isOpen" ng-style="{ width: HomeVM.editorSize.x + \'%\' }" class="dir-tree-container" layout="column" hide-xs></dt-schema-dir>\n  <dt-diagram-renderer layout="column" flex></dt-diagram-renderer>\n\n  <md-sidenav flex="18" class="md-sidenav-right" md-is-locked-open="true" ng-if="HomeVM.rightSidenav.isOpen">\n    <dt-docs></dt-docs>\n  </md-sidenav>\n</div>'),
    e.put("cache/modules/login/login.html", '<div ng-controller="LoginCtrl as LoginVM" layout="column" flex>\n  <md-card class="md-card-box centered-card-box login-box" layout="column" flex="none" layout-gt-sm="row">\n    <div class="regular-login" flex-gt-sm="50">\n      <md-card-title class="card-box-title">\n        <md-card-title-text>\n          <span class="md-headline">Sign In</span>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-content>\n        <dt-validation-summary model="LoginVM.credentials"></dt-validation-summary>\n\n        <form class="md-card-form" novalidate>\n          <div class="auth-row first-row">\n            <dt-input-text model="LoginVM.credentials" property-name="email" label="E-mail address" input-type="email"></dt-input-text>\n          </div>\n          <div class="auth-row second-row">\n            <dt-input-password model="LoginVM.credentials" property-name="password" label="Password" class="auth-row"></dt-input-password>\n          </div>\n          <div class="auth-row third-row" layout="row" layout-align="end start">\n            <a ui-sref="root.centered.forgotPassword" class="auth-href">Forgot password?</a>\n          </div>\n          <div class="auth-row fourth-row" layout="row">\n            <md-button type="submit" class="md-raised md-primary" flex ng-click="LoginVM.login()">Sign In</md-button>\n          </div>\n        </form>\n      </md-card-content>\n\n      <md-card-actions class="md-card-action" layout="row">\n        Don\'t have an account? &nbsp;&nbsp;<a ui-sref="root.centered.register" class="auth-href">Sign Up</a>\n      </md-card-actions>\n    </div>\n\n    <div flex-gt-sm="50">\n      <md-card-title class="card-box-title">\n        <md-card-title-text>\n          <span class="md-headline">Social Sign In</span>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-content>\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised google-button" flex ng-click="LoginVM.authenticate(\'google\')">\n            <span class="social-button-wrapper" layout="row">\n              \x3c!--<md-icon class="mdi mdi-google"></md-icon>--\x3e\n              <img src="/images/google-logo.png">\n              <span flex layout="row" layout-align="start center">Sign in with Google</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised github-button" flex ng-click="LoginVM.authenticate(\'github\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-github-circle"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with GitHub</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised twitter-button" flex ng-click="LoginVM.authenticate(\'twitter\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-twitter"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with Twitter</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised live-button" flex ng-click="LoginVM.authenticate(\'live\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-microsoft"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with Microsoft</span>\n            </span>\n          </md-button>\n        </div>\n      </md-card-content>\n    </div>\n  </md-card>\n  <div flex></div>\n</div>\n'),
    e.put("cache/modules/message-screen/message-screen.html", '<div layout="column" ng-controller="MessageScreenCtrl as MessageScreenVM">\n  <div flex="5"></div>\n  <md-card class="md-card-box-message">\n    <md-card-title class="card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">{{MessageScreenVM.message.header}}</span>\n        <span class="md-subhead" ng-bind-html="MessageScreenVM.message.message"></span>\n      </md-card-title-text>\n    </md-card-title>\n    <md-card-content>\n      <form class="md-card-form">\n        <div layout="row">\n          <md-button type="submit" class="md-raised no-left-margin" ui-sref="{{MessageScreenVM.message.redirectRoute}}">{{MessageScreenVM.message.buttonText}}</md-button>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n  <div flex></div>\n</div>'),
    e.put("cache/modules/register/change-email.html", '<div ng-controller="ChangeEmailCtrl as ChangeEmailVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Change E-mail</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content>\n      <dt-validation-summary model="ChangeEmailVM.changeEmailModel"></dt-validation-summary>\n\n      <form class="md-card-form" novalidate>\n        <div class="auth-row second-row">\n          <dt-input-text model="ChangeEmailVM.changeEmailModel" property-name="newEmail" label="New e-mail address" input-type="email"></dt-input-text>\n        </div>\n\n        <div class="auth-row second-row sign-up-password-row">\n          <dt-input-text model="ChangeEmailVM.changeEmailModel" property-name="confirmationEmail" label="Confirm new e-mail address" input-type="email"></dt-input-text>\n        </div>\n\n        <div layout="row">\n          <md-button type="submit" class="md-raised md-primary" ng-click="ChangeEmailVM.changeEmail()" flex>Change E-mail</md-button>\n        </div>\n      </form>\n    </md-card-content>\n\n    <md-card-actions class="md-card-action" layout="row" layout-align="center center">\n      <a ui-sref="root.standard.user.profile({ userId: $root.currentUser.userId })" class="auth-href">Back</a>\n    </md-card-actions>\n  </md-card>\n  <div flex></div>\n</div>'),
    e.put("cache/modules/register/change-password.html", '<div ng-controller="ChangePasswordCtrl as ChangePasswordVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Change Password</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content>\n      <dt-validation-summary model="ChangePasswordVM.changePasswordModel"></dt-validation-summary>\n\n      <form class="md-card-form" novalidate>\n        <div class="auth-row second-row">\n          <dt-input-password model="ChangePasswordVM.changePasswordModel" property-name="oldPassword" label="Current Password" class="auth-row"></dt-input-password>\n        </div>\n\n        <div class="auth-row second-row sign-up-password-row">\n          <dt-input-password model="ChangePasswordVM.changePasswordModel" property-name="newPassword" label="New Password" show-extra-validation="true"></dt-input-password>\n        </div>\n\n        <div class="auth-row second-row">\n          <dt-input-password model="ChangePasswordVM.changePasswordModel" property-name="confirmPassword" label="Confirm Password"></dt-input-password>\n        </div>\n\n        <div layout="row">\n          <md-button type="submit" class="md-raised md-primary" ng-click="ChangePasswordVM.changePassword()" flex>Change Password</md-button>\n        </div>\n      </form>\n    </md-card-content>\n\n    <md-card-actions class="md-card-action" layout="row" layout-align="center center">\n      <a ui-sref="root.standard.user.profile({ userId: $root.currentUser.userId })" class="auth-href">Back</a>\n    </md-card-actions>\n  </md-card>\n  <div flex></div>\n</div>'),
    e.put("cache/modules/register/confirm-email.html", '<div layout="column" ng-controller="ConfirmEmailCtrl as ConfirmEmailVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="no-content card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Email Confirmation</span>\n        <span class="md-subhead">Confirming your email, please wait...</span>\n      </md-card-title-text>\n    </md-card-title>\n  </md-card>\n</div>'),
    e.put("cache/modules/register/forgot-password.html", '<div ng-controller="ForgotPasswordCtrl as ForgotPasswordVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Forgot Password?</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content>\n      <dt-validation-summary model="ForgotPasswordVM.forgotPasswordModel"></dt-validation-summary>\n\n      <form class="md-card-form" novalidate>\n        <dt-input-text model="ForgotPasswordVM.forgotPasswordModel" property-name="email" label="Email" input-type="email"></dt-input-text>\n        <div layout="row">\n          <md-button type="submit" class="md-raised md-primary" ng-click="ForgotPasswordVM.forgotPassword()" flex>Send email</md-button>\n        </div>\n      </form>\n    </md-card-content>\n\n    <md-card-actions class="md-card-action" layout="row" layout-align="center center">\n      <a ui-sref="root.centered.login" class="auth-href">Back</a>\n    </md-card-actions>\n  </md-card>\n  <div flex></div>\n</div>'),
    e.put("cache/modules/register/register.html", '<div ng-controller="RegisterCtrl as RegisterVM" layout="column" flex>\n  <md-card class="md-card-box centered-card-box register-box" layout="column" flex="none" layout-gt-sm="row">\n    <div class="regular-login" flex-gt-sm="50">\n      <md-card-title class="card-box-title">\n        <md-card-title-text>\n          <span class="md-headline">Create an account</span>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-content>\n        <dt-validation-summary model="RegisterVM.credentials"></dt-validation-summary>\n\n        <form class="md-card-form" novalidate>\n          <div class="auth-row first-row">\n            <dt-input-text model="RegisterVM.credentials" property-name="email" label="E-mail address" input-type="email"></dt-input-text>\n          </div>\n          <div class="auth-row second-row sign-up-password-row">\n            <dt-input-password model="RegisterVM.credentials" property-name="password" label="Password" show-extra-validation="true"></dt-input-password>\n          </div>\n          <div class="auth-row fourth-row" layout="row">\n            <md-button type="submit" class="md-raised md-primary" ng-click="RegisterVM.register()" flex>Sign Up</md-button>\n          </div>\n        </form>\n      </md-card-content>\n\n      <md-card-actions class="md-card-action" layout="row">\n        Already have an account? &nbsp;&nbsp;<a ui-sref="root.centered.login" class="auth-href">Sign In</a>\n      </md-card-actions>\n    </div>\n\n    <div flex-gt-sm="50">\n      <md-card-title class="card-box-title">\n        <md-card-title-text>\n          <span class="md-headline">Social Sign Up</span>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-content>\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised google-button" flex ng-click="RegisterVM.authenticate(\'google\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-google"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with Google</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised github-button" flex ng-click="RegisterVM.authenticate(\'github\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-github-circle"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with GitHub</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised twitter-button" flex ng-click="RegisterVM.authenticate(\'twitter\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-twitter"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with Twitter</span>\n            </span>\n          </md-button>\n        </div>\n\n        <div class="auth-row" layout="row">\n          <md-button class="md-raised live-button" flex ng-click="RegisterVM.authenticate(\'live\')">\n            <span class="social-button-wrapper" layout="row">\n              <md-icon class="mdi mdi-microsoft"></md-icon>\n              <span flex layout="row" layout-align="start center">Sign in with Microsoft</span>\n            </span>\n          </md-button>\n        </div>\n      </md-card-content>\n    </div>\n  </md-card>\n  <div flex></div>\n</div>'),
    e.put("cache/modules/register/reset-password.html", '<div ng-controller="ResetPasswordCtrl as ResetPasswordVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Reset password</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content class="no-actions">\n      <dt-validation-summary model="ResetPasswordVM.resetPasswordModel"></dt-validation-summary>\n\n      <form class="md-card-form" novalidate>\n        <dt-input-password model="ResetPasswordVM.resetPasswordModel" property-name="password" label="Password" show-extra-validation="true"></dt-input-password>\n        <div layout="row">\n          <md-button type="submit" class="md-raised md-primary" ng-click="ResetPasswordVM.resetPassword()" flex>Reset password</md-button>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n</div>'),
    e.put("cache/modules/register/set-email.html", '<div ng-controller="SetEmailCtrl as SetEmailVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Set Email</span>\n        <span class="md-subhead">You need to set your email before proceeding</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content class="no-actions">\n      <form class="md-card-form" novalidate>\n        <dt-input-text model="SetEmailVM.credentials" property-name="email" label="Email" input-type="email"></dt-input-text>\n        <div layout="row">\n          <md-button type="submit" class="md-raised md-primary" ng-click="SetEmailVM.setEmail()" flex>Set</md-button>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n</div>'),
    e.put("cache/modules/schema-dir/dt-schema-dir.html", '<div>\n  <div class="dir-tabs" ng-if="$root.currentUser.isCollabEnabled">\n    <md-tabs class="md-primary" md-selected="DtSchemaDirVM.tabIndex" flex layout="column" md-stretch-tabs="always">\n      <md-tab label="My Diagrams" ng-click="DtSchemaDirVM.getFlatTree(route.name)" flex></md-tab>\n      <md-tab label="Shared With Me" ng-click="DtSchemaDirVM.getSharedFlatTree(route.name)" flex></md-tab>\n    </md-tabs>\n  </div>\n  <div ng-if="$root.currentUser && DtSchemaDirVM.dirTree && !DtSchemaDirVM.dirTreeState.showSharedDiagrams">\n    <md-button aria-label="New Folder" class="new-folder-button" ng-click="DtSchemaDirVM.addDir()">\n      <md-icon class="mdi mdi-folder-plus"></md-icon>\n      New Folder\n    </md-button>\n  </div>\n  <md-list ng-if="$root.currentUser" class="dir-tree-items" ng-class="{ \'shared\': DtSchemaDirVM.dirTreeState.showSharedDiagrams }">\n    <md-list-item ng-repeat="treeItem in DtSchemaDirVM.dirTree" ng-click="DtSchemaDirVM.onTreeItemClick(treeItem)" ng-if="treeItem.itemType === \'dir\' || treeItem.isExpanded" ng-class="{ closed: treeItem.itemType === \'dir\' && !treeItem.isExpanded,\n                              selected: DtSchemaDirVM.isSelected(treeItem.shortCode),\n                              folder: treeItem.itemType === \'dir\',\n                              schema: treeItem.itemType === \'file\',\n                              locked: DtSchemaDirVM.isLocked(treeItem),\n                              \'non-drag\':  (treeItem.itemType === \'file\' && !treeItem.isOwnedByCurrentUser) || treeItem.itemType === \'empty-dir-holder\' }" class="dir-tree-item" ng-attr-is-droppable-dir="{{treeItem.itemType === \'dir\' && treeItem.id >= 0}}" ng-attr-item-id="{{treeItem.id}}" on-drag-enter="DtSchemaDirVM.onDragEnter()" on-drag-leave="DtSchemaDirVM.onDragLeave()" on-drop="DtSchemaDirVM.onDrop()" html5-drop>\n      <md-icon ng-if="treeItem.itemType === \'file\' && treeItem.parentId !== -1 && treeItem.isOwnedByCurrentUser" class="mdi mdi-drag-vertical tree-icon file-icon" aria-label="Reorder" drag-data="treeItem" on-drop="DtSchemaDirVM.onDrop()" ng-click="$event.stopPropagation()" html5-drag></md-icon>\n      <md-icon ng-if="treeItem.itemType === \'dir\'" class="dir-action mdi folder-icon" ng-class="DtSchemaDirVM.getDirIconClass(treeItem)" aria-label="Dir Actions" on-drop="DtSchemaDirVM.onDrop()" ng-click="DtSchemaDirVM.onTreeItemClick(treeItem); $event.stopPropagation()"></md-icon>\n      <md-icon ng-if="treeItem.itemType === \'new-file-holder\'" class="mdi mdi-plus new-tree-file-icon" aria-label="New File" on-drop="DtSchemaDirVM.onDrop()"></md-icon>\n      <p class="tree-item-name" ng-class="{ \'schema-dir-item\': treeItem.itemType !== \'file\', \'no-icon\': treeItem.parentId === -1 }">\n        {{treeItem.name || \'NAME NOT SET\'}}\n      </p>\n      <md-icon class="mdi mdi-lock-outline tree-info-icon" ui-sref="root.centered.subscribe" ng-if="DtSchemaDirVM.isLocked(treeItem)">\n        <md-tooltip md-direction="bottom">Subscribe to edit this diagram</md-tooltip>\n      </md-icon>\n      <md-icon class="mdi mdi-new-box tree-info-icon" ng-if="treeItem.isPending">\n        <md-tooltip md-direction="bottom">Newly shared with you</md-tooltip>\n      </md-icon>\n      <md-menu class="md-secondary" ng-if="treeItem.itemType !== \'new-file-holder\'" ng-hide="(treeItem.itemType === \'dir\' && (treeItem.id === -1 || (treeItem.id === 0 && !treeItem.isOwnedByCurrentUser))) || treeItem.itemType === \'empty-dir-holder\'">\n        <md-icon class="mdi mdi-dots-vertical tree-icon" ng-click="$mdMenu.open($event)"></md-icon>\n        <md-menu-content width="3">\n          <md-menu-item ng-if="treeItem.itemType === \'dir\' && (treeItem.id === 0 || treeItem.isOwnedByCurrentUser)">\n            <md-button aria-label="Add File" ng-click="DtSchemaDirVM.addSchema(treeItem)">\n              Add File\n            </md-button>\n          </md-menu-item>\n          <md-menu-item ng-hide="treeItem.itemType === \'dir\' && treeItem.id === 0">\n            <md-button aria-label="Rename" ng-click="DtSchemaDirVM.renameItem(treeItem)">\n              Rename\n            </md-button>\n          </md-menu-item>\n          <md-menu-item ng-if="$root.currentUser.isCollabEnabled && (treeItem.id || treeItem.shortCode)">\n            <md-button aria-label="Collaborate" ng-click="DtSchemaDirVM.collaborate(treeItem)">\n              Collaborate\n            </md-button>\n          </md-menu-item>\n          <md-menu-item ng-hide="(treeItem.itemType === \'dir\' && treeItem.id === 0) || !treeItem.isOwnedByCurrentUser">\n            <md-button aria-label="Delete" ng-click="DtSchemaDirVM.deleteItem(treeItem)">\n              Delete\n            </md-button>\n          </md-menu-item>\n          <md-menu-item ng-if="$root.currentUser.isCollabEnabled && !treeItem.isOwnedByCurrentUser && treeItem.collabPermissionId">\n            <md-button aria-label="Leave" ng-click="DtSchemaDirVM.leaveCollab(treeItem.collabPermissionId)">\n              Leave\n            </md-button>\n          </md-menu-item>\n        </md-menu-content>\n      </md-menu>\n    </md-list-item>\n  </md-list>\n  <div class="long-required" ng-if="!$root.currentUser">\n    <a ui-sref="root.centered.login">Login</a> or <a ui-sref="root.centered.register">register</a> to access your files.\n  </div>\n</div>'),
    e.put("cache/modules/source-editor/dt-source-editor-menu.html", '<md-menu-bar>\n  <md-menu>\n    <md-button aria-label="File" ng-click="$mdMenu.open()">\n      File\n    </md-button>\n    <md-menu-content>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-plus-box"></md-icon>\n        <md-menu>\n          <md-button ng-click="$mdMenu.open()">New</md-button>\n          <md-menu-content width="3">\n            <md-menu-item class="md-indent">\n              <md-icon class="mdi mdi-folder"></md-icon>\n              <md-button ng-click="DtSourceEditorMenuVM.newDirectory()">\n                Folder\n              </md-button>\n            </md-menu-item>\n            <md-menu-item class="md-indent">\n              <md-icon class="mdi mdi-file"></md-icon>\n              <md-button ng-click="DtSourceEditorMenuVM.newSchema()">\n                File\n              </md-button>\n            </md-menu-item>\n          </md-menu-content>\n        </md-menu>\n      </md-menu-item>\n      \x3c!--<md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-content-save"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'save\')">\n          Save\n        </md-button>\n      </md-menu-item>--\x3e\n      <md-menu-item class="md-indent" ng-if="$root.currentUser">\n        <md-icon class="mdi mdi-pencil"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'rename\')">\n          Rename\n        </md-button>\n      </md-menu-item>\n      <md-menu-divider></md-menu-divider>\n      <md-menu-item class="md-indent" ng-if="$root.currentUser && $root.currentUser.isCollabEnabled">\n        <md-icon class="mdi mdi-account-group"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'collaborate\')">\n          Collaborate\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-share-variant"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'share\')">\n          Share...\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-check" ng-if="DtSourceEditorMenuVM.schema.isPrivate"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'flipPrivate\')">\n          Private\n        </md-button>\n      </md-menu-item>\n      <md-menu-divider></md-menu-divider>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-palette"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.flipIsBasicPaletteActive()">\n          {{DtSourceEditorMenuVM.isBasicPaletteActive ? "Use Default color palette" : "Use Basic color palette"}}\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-eraser-variant"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'clear\')">\n          Clear\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'demo\')">\n          Load Sample Diagram\n        </md-button>\n      </md-menu-item>\n    </md-menu-content>\n  </md-menu>\n  <md-menu>\n    <md-button aria-label="Edit" ng-click="$mdMenu.open()">\n      Edit\n    </md-button>\n    <md-menu-content>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-undo"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'undo\')">\n          Undo\n          <span class="md-alt-text">{{ \'M-Z\' | keyboardShortcut }}</span>\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-redo"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'redo\')">\n          Redo\n          <span class="md-alt-text">{{ \'M-Y\' | keyboardShortcut }}</span>\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-keyboard-tab"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'untabify\')">\n          Untabify\n        </md-button>\n      </md-menu-item>\n      <md-menu-divider></md-menu-divider>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-content-cut"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'cut\')">\n          Cut\n          <span class="md-alt-text">{{ \'M-X\' | keyboardShortcut }}</span>\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-content-copy"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'copy\')">\n          Copy\n          <span class="md-alt-text">{{ \'M-C\' | keyboardShortcut }}</span>\n        </md-button>\n      </md-menu-item>\n      <md-menu-divider></md-menu-divider>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-check" ng-if="DtSourceEditorMenuVM.isCanvasMouseZoomEnabled"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.flipIsCanvasMouseZoomEnabled()">\n          Mouse Zoom Enabled\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-check" ng-if="DtSourceEditorMenuVM.schema.schemaSettings.isCaseSensitive"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'flipCasing\')">\n          Case Sensitive\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'setFieldType\')">\n          <span>Default Field Type</span>\n          <span ng-if="DtSourceEditorMenuVM.schema.schemaSettings.defaultType">&nbsp;({{DtSourceEditorMenuVM.schema.schemaSettings.defaultType}})</span>\n        </md-button>\n      </md-menu-item>\n    </md-menu-content>\n  </md-menu>\n  <md-menu>\n    <md-button aria-label="Export" ng-click="$mdMenu.open()">\n      Export\n    </md-button>\n    <md-menu-content>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToSQL\', \'ansiSql\')">\n          ANSI SQL\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToSQL\', \'mySql\')">\n          MySQL/MariaDB\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToSQL\', \'oracle\')">\n          Oracle (12c+)\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToSQL\', \'postgresql\')">\n          PostgreSQL\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToSQL\', \'tSql\')">\n          SQL Server\n        </md-button>\n      </md-menu-item>\n      <md-menu-divider></md-menu-divider>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-file-pdf"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToDoc\', \'pdf\')">\n          PDF Documentation\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-file-document"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToDoc\', \'rtf\')">\n          RTF (Word) Documentation\n        </md-button>\n      </md-menu-item>\n      <md-menu-divider></md-menu-divider>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-file-image"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToPNG\')">\n          PNG Image\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-file-image"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'exportToSVG\')">\n          SVG File\n        </md-button>\n      </md-menu-item>\n    </md-menu-content>\n  </md-menu>\n  <md-menu>\n    <md-button aria-label="Import" ng-click="$mdMenu.open()">\n      Import\n    </md-button>\n    <md-menu-content>\n      <input id="import-file-input" type="file" style="display:none" accept=".sql,.ddl">\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'importFromSQL\', \'mySql\')">\n          MySQL/MariaDB (beta)\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'importFromSQL\', \'oracle\')">\n          Oracle (beta)\n        </md-button>\n      </md-menu-item>\n      <md-menu-item class="md-indent">\n        <md-icon class="mdi mdi-database"></md-icon>\n        <md-button ng-click="DtSourceEditorMenuVM.menuAction(\'importFromSQL\', \'tSql\')">\n          SQL Server (beta)\n        </md-button>\n      </md-menu-item>\n    </md-menu-content>\n  </md-menu>\n  <a>\n    <md-button class="menu-button docs-button" aria-label="Docs" ng-click="DtSourceEditorMenuVM.showDocs()">\n      Docs\n    </md-button>\n  </a>\n  <a ng-if="!$root.currentUser">\n    <md-button class="toolbar-button extra-button" ng-click="DtSourceEditorMenuVM.save()" aria-label="Save">\n      <md-tooltip md-direction="bottom">Save</md-tooltip>\n      <md-icon class="mdi mdi-content-save"></md-icon>\n      <span class="menu-button extra-caption">\n        SAVE\n      </span>\n    </md-button>\n  </a>\n</md-menu-bar>'),
    e.put("cache/modules/source-editor/dt-source-editor.html", '<div ng-controller="DtSourceEditorCtrl as DtSourceEditorVM" layout="column" flex="100" class="editor-container">\n  <div class="ace-source-container tour-overlay-container" ng-click="DtSourceEditorVM.focusEditor()" flex>\n    <div class="tour-overlay editor-overlay"></div>\n    <div ng-if="DtSourceEditorVM.diagram.shortcode">\n      <h4 class="padded" ng-if="DtSourceEditorVM.diagram.sharedMetadata.parentName">\n        {{DtSourceEditorVM.diagram.sharedMetadata.parentName}}\n      </h4>\n      <h3 layout="row">\n        <span class="schema-title" ng-click="DtSourceEditorVM.rename()" flex>\n          <span ng-if="!DtSourceEditorVM.diagram.sharedMetadata">LOADING...</span>\n          <span ng-if="DtSourceEditorVM.diagram.sharedMetadata">{{DtSourceEditorVM.diagram.sharedMetadata.name || "NAME NOT SET"}}</span>\n        </span>\n        <md-button class="md-icon-button md-mini" ng-click="DtSourceEditorVM.onLockButtonClick()" ng-if="DtSourceEditorVM.diagramSecurity.isLockedForEditing" aria-label="Diagram Locked">\n          <md-tooltip md-direction="bottom">{{DtSourceEditorVM.getDiagramLockedReason()}}</md-tooltip>\n          <md-icon class="mdi mdi-lock-outline" aria-label="Diagram Locked"></md-icon>\n        </md-button>\n        <md-menu class="last-icon" ng-if="$root.currentUser && DtSourceEditorVM.diagram.sharedMetadata">\n          <md-button class="md-icon-button md-mini" aria-label="Options" ng-click="$mdMenu.open()">\n            <md-tooltip md-direction="bottom">Options</md-tooltip>\n            <md-icon class="mdi mdi-dots-vertical" aria-label="Options"></md-icon>\n          </md-button>\n          <md-menu-content>\n            <md-menu-item>\n              <md-button aria-label="Rename" ng-click="DtSourceEditorVM.rename()">\n                Rename\n              </md-button>\n            </md-menu-item>\n            <md-menu-item ng-if="DtSourceEditorVM.diagramSecurity.isOwnedByCurrentUser">\n              <md-button aria-label="Rename" ng-click="DtSourceEditorVM.flipPrivate()">\n                {{DtSourceEditorVM.diagramSecurity.isPrivate ? "Make Public" : "Make Private"}}\n              </md-button>\n            </md-menu-item>\n            <md-menu-item ng-if="$root.currentUser.isCollabEnabled">\n              <md-button aria-label="Collaborate" ng-click="DtSourceEditorVM.collaborate()">\n                Collaborate\n              </md-button>\n            </md-menu-item>\n          </md-menu-content>\n        </md-menu>\n      </h3>\n    </div>\n    <div ui-ace="{\n         showPrintMargin: false,\n         onLoad: aceLoaded,\n         onChange: aceChanged,\n         mode: \'qdbdrules\',\n         advanced: {\n           enableBasicAutocompletion: true,\n           enableLiveAutocompletion: false\n         }}" ng-class="{ \'locked-for-editing\': DtSourceEditorVM.isDiagramLocked() }">\n    </div>\n  </div>\n\n  <div class="tour-overlay-container">\n    <div class="tour-overlay"></div>\n    <md-progress-linear md-mode="query" ng-disabled="DtSourceEditorVM.parsingStatus !== \'loading\'" ng-class="DtSourceEditorVM.getParsingStatus()"></md-progress-linear>\n  </div>\n\n  <div class="compiler-errors tour-overlay-container" flex="10">\n    <div class="tour-overlay"></div>\n    <ul>\n      <li class="editor-notification" ng-if="DtSourceEditorVM.diagramSecurity.isTableLimitReached">\n        <pre>Only the first 10 tables are shown on the free plan. Please <a href="javascript:void(0)" ng-click="DtSourceEditorVM.goPro()" class="notification-action">GO PRO</a> from $7 for more.</pre>\n      </li>\n      <li class="editor-notification" ng-if="DtSourceEditorVM.showReadOnlyMessage()">\n        \x3c!-- TEMPORARILY DISABLED BUTTON UNTIL FUNCTIONALITY FULLY IMPLEMENTED --\x3e\n        \x3c!--<pre>You are viewing this diagram in read-only mode. Ask the owner to make you a collaborator or <a href="javascript:void(0)" ng-click="DtSourceEditorVM.copyCurrentDiagram()" class="notification-action">COPY</a> it to enable editing.</pre>--\x3e\n        <pre>You are viewing this diagram in read-only mode. <a href="javascript:void(0)" ng-click="DtSourceEditorVM.copyCurrentDiagram()" class="notification-action">COPY</a> it to enable editing.</pre>\n      </li>\n      <li ng-if="DtSourceEditorVM.parsingStatus === \'loading\'"><pre>Parsing...</pre></li>\n      <li ng-if="DtSourceEditorVM.parsingStatus === \'success\'"><pre>No errors found. Good job!</pre></li>\n      <li ng-repeat="(line, errors) in DtSourceEditorVM.qdbdSchema.errors" ng-if="DtSourceEditorVM.parsingStatus === \'error\'">\n        <ul>\n          <li ng-repeat="error in errors track by $index" ng-click="DtSourceEditorVM.goToLine(line)" class="compiler-error">\n            <pre><span class="compiler-error-line">Line {{line}}:</span> {{error}}</pre>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n'),
    e.put("cache/modules/subscription/billing-details.html", '<div class="billing-details-card" ng-controller="BillingDetailsCtrl as BillingDetailsVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="billing-details-title-container card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Billing Details</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content ng-if="!BillingDetailsVM.billingDetails.emailConfirmed">\n      <p class="card-content-description">Your email address hasn\'t been confirmed yet. Please confirm your email before proceeding with the checkout and when done please refresh the page.</p>\n      <div layout="row">\n        <md-button class="md-raised md-primary card-action-button" ng-click="BillingDetailsVM.confirmEmail()" flex>Confirm</md-button>\n      </div>\n    </md-card-content>\n\n    <md-card-content ng-if="BillingDetailsVM.billingDetails.emailConfirmed">\n      <p class="card-content-description">Please ensure your personal details are correct.</p>\n\n      <form class="md-card-form" novalidate>\n        <div>\n          <dt-input-text model="BillingDetailsVM.billingDetails" property-name="firstName" label="First Name"></dt-input-text>\n        </div>\n        <div>\n          <dt-input-text model="BillingDetailsVM.billingDetails" property-name="lastName" label="Last Name"></dt-input-text>\n        </div>\n        <div ng-if="BillingDetailsVM.billingDetails.isVoucher">\n          <dt-input-text model="BillingDetailsVM.billingDetails" property-name="voucherCode" label="Voucher Code"></dt-input-text>\n        </div>\n        <div layout="row">\n          <md-button class="md-raised md-primary card-action-button" type="submit" ng-click="BillingDetailsVM.confirmBillingDetails()" flex>Confirm</md-button>\n        </div>\n        <div layout="row">\n          <md-button class="md-raised card-action-button back-button" ng-click="BillingDetailsVM.back()" flex>\n            Back\n          </md-button>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n  <div flex></div>\n</div>'),
    e.put("cache/modules/subscription/checkout.html", '<div class="checkout-card" ng-controller="CheckoutCtrl as CheckoutVM">\n  <md-card class="md-card-box centered-card-box">\n    <md-card-title class="checkout-title-container card-box-title">\n      <md-card-title-text>\n        <span class="md-headline">Checkout</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content class="checkout-content-container">\n      <div class="checkout-details">\n        <div>Plan: <span>{{CheckoutVM.checkoutDetails.planCaption}}</span></div>\n        <div>Payment: <span>{{CheckoutVM.checkoutDetails.amountToPay | currency : CheckoutVM.checkoutDetails.currencySymbol}}</span></div>\n        <div ng-if="CheckoutVM.checkoutDetails.nextBillingDate">\n          Next billing date: <span>{{CheckoutVM.checkoutDetails.nextBillingDate | date : "d MMM yyyy"}}</span>\n        </div>\n        <div>Subscription expiry date: <span>{{CheckoutVM.checkoutDetails.subscriptionExpiresOn | date : "d MMM yyyy"}}</span></div>\n      </div>\n\n      <div ng-if="!CheckoutVM.braintreeInitStarted" layout="row" layout-sm="column" layout-align="space-around" class="progress-container">\n        <md-progress-circular md-diameter="96"></md-progress-circular>\n      </div>\n\n      <div ng-if="CheckoutVM.isVoucher && CheckoutVM.braintreeInitStarted">\n        Voucher Code: <span><b>{{CheckoutVM.checkoutDetails.voucherCode}}</b></span>\n      </div>\n\n      <div id="dropin-container"></div>\n\n      <div ng-if="(!CheckoutVM.isMethodSelectable && CheckoutVM.isMethodSelected) || CheckoutVM.isVoucher" class="accept-tos">\n        <md-checkbox ng-model="CheckoutVM.acceptedTerms" aria-label="Accept terms & conditions">\n          I accept terms & conditions\n        </md-checkbox>\n      </div>\n\n      <div layout="row" ng-if="CheckoutVM.dropInInstance || CheckoutVM.isVoucher">\n        <md-button class="md-raised md-primary card-action-button" ng-if="CheckoutVM.isMethodSelectable && !CheckoutVM.isMethodSelected" ng-click="CheckoutVM.selectPaymentMethod()" flex>\n          Select payment method\n        </md-button>\n        <md-button class="md-raised card-action-button authorize-button" ng-class="{ \'md-primary\': CheckoutVM.acceptedTerms && !CheckoutVM.authorizationInProgress }" ng-disabled="!CheckoutVM.acceptedTerms || CheckoutVM.authorizationInProgress" ng-if="(!CheckoutVM.isMethodSelectable && CheckoutVM.isMethodSelected) || CheckoutVM.isVoucher" ng-click="CheckoutVM.authorizePayment()" flex>\n          {{CheckoutVM.checkoutDetails.plan === "voucher" ? \'Confirm\' : CheckoutVM.checkoutDetails.nextBillingDate ? \'Authorize Payment\' : \'Pay\'}}\n        </md-button>\n      </div>\n      <div layout="row">\n        <md-button class="md-raised card-action-button back-button" ng-click="CheckoutVM.back()" flex>\n          Back\n        </md-button>\n      </div>\n    </md-card-content>\n  </md-card>\n\n  <div flex></div>\n</div>'),
    e.put("cache/modules/subscription/subscribe.html", '<div layout="column" flex ng-controller="SubscribeCtrl as SubscribeVM" class="subscription-plans">\n  <md-card class="limited-offer">\n    <md-card-title>\n      <md-card-title-text>\n        <span class="md-headline">Limited time offer - get Pro for FREE!</span>\n        <span class="md-subhead">We are currently offering <strong>free</strong> plans in exchange for <strong>publicity</strong>.</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content layout="row">\n      <div class="left" flex>\n        <div layout="row">\n          <div class="left offer-icon-container">\n            <md-icon class="mdi mdi-twitter offer-icon"></md-icon>\n          </div>\n          <div class="right offer-message">\n            <strong>Tweet</strong> about <a href="https://twitter.com/quick_dbd">@Quick_DBD</a> and get <strong>two months</strong> for FREE. You can retweet a user\'s tweet or write your own.\n          </div>\n        </div>\n\n        <div class="center-content">\n          <md-button class="md-raised md-primary offer-button write-own-tweet" ng-click="SubscribeVM.tweet()" flex>I\'ll write my own tweet</md-button>\n        </div>\n        <div class="center-content write-my-tweet-text">\n          (This will open a pre-populated editor.)\n        </div>\n\n        <div class="twitter-embed">\n          <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://t.co/6YVmL6GWL2">https://t.co/6YVmL6GWL2</a> is currently giving away free Pro Plans!! Awesome tool to quickly design databases online. I love it! 😍 <a href="https://twitter.com/quick_dbd?ref_src=twsrc%5Etfw">@quick_dbd</a></p>&mdash; Trevor Jobling (@TrevorJobling) <a href="https://twitter.com/TrevorJobling/status/1052145360179789824?ref_src=twsrc%5Etfw">October 16, 2018</a></blockquote>\n          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>\n        </div>\n\n        <div class="center-content">\n          <md-button class="md-raised md-primary offer-button retweet" href="https://twitter.com/intent/retweet?tweet_id=1052145360179789824">Retweet this</md-button>\n        </div>\n      </div>\n\n      <div class="right" flex>\n        <div layout="row">\n          <div class="left offer-icon-container">\n            <md-icon class="mdi mdi-lead-pencil offer-icon"></md-icon>\n          </div>\n          <div class="right offer-message">\n            <strong>Write a review</strong> on your blog or other website and get <strong>1 year</strong> for FREE.<br><br>\n            You don\'t have to <em>promote</em> QuickDBD. Just be honest and write something of reasonable length (minimum 500 words). Email <a href="mailto:promo@quickdbd.com">promo@quickdbd.com</a> to claim your free Pro Plan when it\'s published.\n          </div>\n        </div>\n      </div>\n    </md-card-content>\n\n    <md-card-content class="center-content instructions">\n      <div>\n        To claim your free Pro Plan, email <a href="mailto:promo@quickdbd.com">promo@quickdbd.com</a> with a link to your tweet/review and to your QuickDBD <a ui-sref="root.standard.user.profile({ userId: $root.currentUser.userId })">profile</a>.\n      </div>\n      <div>\n        Send it from the email account associated with your QuickDBD account.\n      </div>\n      <div class="reserved-rights">\n        We reserve the right to withold free Plans for unsuitable content.\n      </div>\n    </md-card-content>\n  </md-card>\n\n  <md-card class="choose-plan">\n    <md-card-title>\n      <md-card-title-text>\n        <span class="md-headline">Choose a Pro Plan</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content class="plans-container">\n      <div layout="row">\n        <div class="subscription-plan" flex="33">\n          <div class="plan-name">One Week Pass</div>\n          <div class="plan-price">\n            &#36;7.00 ONE-OFF PAYMENT <br>\n            <div class="highlighted-label"><b>&nbsp;</b></div>\n          </div>\n          <div layout="row">\n            <md-button class="md-raised md-primary card-action-button alt" ng-click="SubscribeVM.selectSubscription(\'weekPass\')" flex>Get Week Pass</md-button>\n          </div>\n        </div>\n\n        <div class="subscription-plan" flex="33">\n          <div class="plan-name">Monthly</div>\n          <div class="plan-price">\n            &#36;14.00 / MONTH\n            <br>\n            <div class="highlighted-label"><b>&nbsp;</b></div>\n          </div>\n          <div layout="row">\n            <md-button class="md-raised md-primary card-action-button alt" ng-click="SubscribeVM.selectSubscription(\'monthly\')" flex>Get Monthly</md-button>\n          </div>\n        </div>\n\n        <div class="subscription-plan" flex="33">\n          <div class="plan-name annually">Annual</div>\n          <div class="plan-price annually" ng-if="!SubscribeVM.SubscriptionService.hasDiscountId()">\n            &#36;95.00 / YEAR <span class="yearly-per-month">(&#36;7.92 / MONTH)</span><br>\n            <div class="highlighted-label"><b>&nbsp;</b></div>\n          </div>\n          <div class="plan-price annually" ng-if="SubscribeVM.SubscriptionService.hasDiscountId()">\n            Normally &#36;95.00 / YEAR <br>\n            <div class="highlighted-label">\n              <b>\n                Discounted to &#36;{{ SubscribeVM.SubscriptionService.getCachedDiscountedValue() }} for you!\n              </b>\n            </div>\n          </div>\n          <div layout="row">\n            <md-button class="md-raised md-primary card-action-button" ng-click="SubscribeVM.selectSubscription(\'annual\')" flex>Get Annual</md-button>\n          </div>\n        </div>\n      </div>\n    </md-card-content>\n  </md-card>\n\n  <md-card class="voucher-box" ng-if="!SubscribeVM.$rootScope.currentUser.hasProAccess && SubscribeVM.SubscriptionService.hasVoucherCode()">\n    <div layout="row">\n      <div class="voucher-box-button"></div>\n      <md-button class="md-raised md-primary card-action-button alt voucher-box-button" ng-click="SubscribeVM.selectSubscription(\'voucher\')" flex>Use your voucher code here</md-button>\n      <div class="voucher-box-button"></div>\n    </div>\n  </md-card>\n\n  <md-card class="feature-comparison">\n    <md-card-title>\n      <md-card-title-text>\n        <span class="md-headline">Compare Features</span>\n      </md-card-title-text>\n    </md-card-title>\n\n    <md-card-content layout="row">\n      <div class="plan-features left" flex>\n        <h4>Free</h4>\n        <div>\n          Max diagrams <span class="feature-value">1</span>\n        </div>\n        <div>\n          Max tables per diagram <span class="feature-value">10</span>\n        </div>\n        <div>\n          Private diagrams <span class="feature-value">No</span>\n        </div>\n        <div>\n          Real-time collaboration <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Export images <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Export SQL <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Export PDF/RTF <span class="feature-value">Yes</span>\n        </div>\n      </div>\n      <div class="plan-features right" flex>\n        <h4>Pro</h4>\n        <div>\n          Max diagrams <span class="feature-value">30</span>\n        </div>\n        <div>\n          Max tables per diagram <span class="feature-value">Any</span>\n        </div>\n        <div>\n          Private diagrams <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Real-time collaboration <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Export images <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Export SQL <span class="feature-value">Yes</span>\n        </div>\n        <div>\n          Export PDF/RTF <span class="feature-value">Yes</span>\n        </div>\n      </div>\n    </md-card-content>\n  </md-card>\n\n  <div flex></div>\n</div>\n'),
    e.put("cache/modules/user/profile.html", '<div layout="row" flex ng-controller="ProfileCtrl as ProfileVM">\n  <dt-user-profile user-profile="ProfileVM.userProfile" ng-if="ProfileVM.userProfile" initialize-user="ProfileVM.initializeUser()"></dt-user-profile>\n  <h2 ng-if="ProfileVM.userProfile === undefined">Loading profile, please wait...</h2>\n  <h2 ng-if="ProfileVM.userProfile === null">Profile does not exist</h2>\n</div>'),
    e.put("cache/modules/user/user.html", '<div ng-controller="UserCtrl as UserVM" flex class="tabbed-layout">\n  <md-tabs class="md-primary" md-selected="UserVM.selectedTab">\n    <md-tab ng-repeat="route in UserVM.routes" label="{{route.caption}}" ng-click="UserVM.loadRoute(route.name)"></md-tab>\n  </md-tabs>\n  <div layout="row">\n    <div id="user-content" class="tabbed-content" ui-view="user-content"></div>\n    <div flex></div>\n  </div>\n</div>'),
    e.put("cache/modules/voucher/voucher.html", '<div ng-controller="VoucherCtrl as VoucherVM" layout="column" flex>\n  <md-card class="md-card-box centered-card-box voucher-box" flex="none" layout-gt-sm="row">\n    <div class="left-side-voucher">\n      <md-card-title class="card-box-title" ng-if="!VoucherVM.isEdit">\n        <md-card-title-text>\n          <span class="md-headline">Add new voucher</span>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-title class="card-box-title" ng-if="VoucherVM.isEdit">\n        <md-card-title-text>\n          <table>\n            <tr>\n              <td>\n                <span class="md-headline">Edit voucher</span>\n              </td>\n              <td align="right">\n                <md-button class="md-icon-button grid-md-button" href="javascript:void(0)" ng-click="VoucherVM.copyVoucherUrl(VoucherVM.voucher)">\n                  <md-tooltip md-direction="right">Copy voucher URL to clipboard</md-tooltip>\n                  <md-icon class="mdi copy-icon-button"></md-icon>\n                </md-button>\n              </td>\n            </tr>\n          </table>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-content>\n        <dt-validation-summary model="VoucherVM.voucher"></dt-validation-summary>\n\n        <form class="md-card-form" validate>\n          <div class="auth-row first-row">\n            <dt-input-text model="VoucherVM.voucher" property-name="code" label="Code" max-length="50"></dt-input-text>\n          </div>\n\n          <div class="auth-row first-row">\n            <dt-input-text model="VoucherVM.voucher" property-name="description" label="Description"></dt-input-text>\n          </div>\n          <div class="auth-row first-row">\n            <dt-input-text model="VoucherVM.voucher" property-name="validFrom" label="Valid From" input-type="date" class="ng-isolate-scope" min-date="VoucherVM.voucher.minDate"></dt-input-text>\n          </div>\n\n          <div class="auth-row first-row">\n            <dt-input-text model="VoucherVM.voucher" property-name="validTo" label="Valid To" input-type="date" class="ng-isolate-scope" min-date="VoucherVM.voucher.minDate">></dt-input-text>\n          </div>\n\n          <div class="auth-row remembering-message">\n            * A voucher must have a start and a end date to be valid.\n          </div>\n\n          <div class="auth-row first-row">\n            <dt-input-text model="VoucherVM.voucher" property-name="maxRedemptions" label="Max Redemptions" input-type="number" no-float></dt-input-text>\n          </div>\n\n          <div class="auth-row first-row">\n            <dt-input-text model="VoucherVM.voucher" property-name="valueInWeeks" label="Weeks" input-type="number" no-float></dt-input-text>\n          </div>\n\n          <div class="button-section" layout="row" flex="none" layout-gt-sm="row">\n            <div class="auth-row fourth-row double-button" layout="column">\n              <md-button type="submit" class="md-raised" flex ng-click="VoucherVM.back()">Back</md-button>\n            </div>\n            <div class="auth-row fourth-row double-button" layout="column">\n              <md-button type="submit" class="md-raised md-primary" flex ng-click="VoucherVM.save()">Save</md-button>\n            </div>\n          </div>\n        </form>\n      </md-card-content>\n    </div>\n\n    <div class="right-side-voucher" flex-gt-xs="50">\n      <md-card-title class="card-box-title">\n        <md-card-title-text>\n          <span class="md-headline">&nbsp;</span>\n        </md-card-title-text>\n      </md-card-title>\n\n      <md-card-content>\n        <div class="auth-row first-row">\n        </div>\n\n        <div class="auth-row first-row">\n        </div>\n\n        <div class="auth-row fourth-row double-button" layout="column">\n          <md-button type="submit" class="md-primary md-raised" flex ng-click="VoucherVM.setDefaultPeriod(\'week\')">One Week</md-button>\n        </div>\n\n        <div class="auth-row fourth-row double-button" layout="column">\n          <md-button type="submit" class="md-primary md-raised" flex ng-click="VoucherVM.setDefaultPeriod(\'month\')">One Month</md-button>\n        </div>\n\n        <div class="auth-row fourth-row double-button" layout="column">\n          <md-button type="submit" class="md-primary md-raised" flex ng-click="VoucherVM.setDefaultPeriod(\'year\')">One Year</md-button>\n        </div>\n\n        <div class="auth-row remembering-message">\n        </div>\n\n        <div class="auth-row first-row">\n        </div>\n\n        <div class="auth-row first-row">\n        </div>\n      </md-card-content>\n    </div>\n  </md-card>\n  <div flex></div>\n</div>\n\n'),
    e.put("cache/common/components/dt-docs/dt-docs.html", '<div class="sidenav-container" layout="column" flex>\n  <div class="md-toolbar-tools" ng-if="!DtDocsVM.docsSection" ng-click="DtDocsVM.closeSidebar()">\n    <div flex>\n      <h3 class="side-header">\n        Docs\n      </h3>\n      <span class="side-subheader">Support</span>\n    </div>\n    <md-button class="md-icon-button close-sidebar">\n      <md-icon class="mdi mdi-close" aria-label="Close"></md-icon>\n    </md-button>\n  </div>\n\n  <md-content flex ng-if="!DtDocsVM.docsSection">\n    <md-list flex>\n      <md-list-item ng-click="DtDocsVM.loadDocsSection(\'Basics\')">\n        <div flex>\n          <h4>Basics</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Basics"></md-icon>\n        </md-button>\n      </md-list-item>\n      <md-list-item ng-click="DtDocsVM.loadDocsSection(\'Tables\')">\n        <div flex>\n          <h4>Tables</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Tables"></md-icon>\n        </md-button>\n      </md-list-item>\n      <md-list-item ng-click="DtDocsVM.loadDocsSection(\'Relationships\')">\n        <div flex>\n          <h4>Relationships</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Relationships"></md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item ng-click="DtDocsVM.loadDocsSection(\'Collaboration\')">\n        <div flex>\n          <h4>NEW! Collaboration</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Collaboration"></md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item ng-click="DtDocsVM.loadDocsSection(\'Importing\')">\n        <div flex>\n          <h4>Importing</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Importing"></md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item ng-click="DtDocsVM.loadDocsSection(\'Invoicing\')">\n        <div flex>\n          <h4>Invoicing</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Invoicing"></md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item href="https://www.youtube.com/watch?v=dR5lPbGLY84" target="_blank" ng-click="DtDocsVM.trackDocumentation(\'Video\')">\n        <div flex>\n          <h4>Video Tutorial</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Video Tutorial"></md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item href="https://www.quickdatabasediagrams.com/faq/" target="_blank" ng-click="DtDocsVM.trackDocumentation(\'FAQ\')">\n        <div flex>\n          <h4>FAQ</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="FAQ"></md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item ng-click="DtDocsVM.flipSupportChat()">\n        <div flex>\n          <h4>Support Chat</h4>\n        </div>\n        <md-button class="md-icon-button">\n          <md-icon class="mdi mdi-chevron-right" aria-label="Support Chat"></md-icon>\n        </md-button>\n      </md-list-item>\n    </md-list>\n  </md-content>\n\n  <div class="md-toolbar-tools" ng-if="DtDocsVM.docsSection" ng-click="DtDocsVM.closeDocsSection()">\n    <md-button class="md-icon-button sidebar-back">\n      <md-icon class="mdi mdi-chevron-left" aria-label="Back"></md-icon>\n    </md-button>\n    <div flex>\n      <h3 class="side-header">\n        Docs / {{DtDocsVM.docsSection}}\n      </h3>\n      <span class="side-subheader">Support</span>\n    </div>\n  </div>\n\n  <md-content class="md-padding docs-content" flex ng-if="DtDocsVM.docsSection === \'Basics\'">\n    <p><strong>Comments</strong> are defined by a leading hashtag and may stand on their own, separate line or may follow any code inline.</p>\n    <p>\n    <pre># This is a comment</pre>\n    </p>\n    <p>For a <strong>sample schema</strong> remove all text from the editor and simply type in two dots ".." (without the quotation marks).</p>\n    <p><strong>Autocomplete</strong> can be used by pressing <strong>CTRL + SPACE</strong>.</p>\n    <p>The app used to work with <strong>sections</strong> such as "settings" and "layout", but a decision was made to move these to the background and now they\'re a part of diagram metadata.</p>\n    <p>We ensured backwards compatibility by automatic conversion to the new format. All you need to do is to save the diagram to persist it in the cloud.</p>\n  </md-content>\n\n  <md-content class="md-padding docs-content" flex ng-if="DtDocsVM.docsSection === \'Collaboration\'">\n    <p>\n      QuickDBD now supports real-time collaboration!\n    </p>\n    <p>\n      If you would like to work on the same diagram with someone else, simply go to your folders, click on the three dots next to a folder or file name and select the Collaborate option. Enter the email address of your collaborator and he/she will then be able to collaborate with you.\n    </p>\n  </md-content>\n\n  <md-content class="md-padding docs-content" flex ng-if="DtDocsVM.docsSection === \'Importing\'">\n    <p>\n      You can import any <strong>.sql</strong> or <strong>.ddl</strong> files, but if you intend to import your database schema to make some changes and export it again\n      <strong>Note that you might lose information, since QuickDBD does not cover all databases features.</strong>\n    </p>\n    <p>\n      Some features not covered by QuickDBD will be added as a comment\n    </p>\n    <p>\n      If your database schema has table or field names using <strong>reserved words</strong> you must make sure that these names are between the database delimiter like the examples below:\n    </p>\n    <p>\n      SQL Server: <pre>[Order]</pre>\n      Oracle: <pre>"Order"</pre>\n      MySQL/MariaDB: <pre>`Order`</pre>\n    </p>\n  </md-content>\n\n  <md-content class="md-padding docs-content" flex ng-if="DtDocsVM.docsSection === \'Invoicing\'">\n    <p>\n      If you need an <strong>invoice</strong> you can request it by sending an email to\n      <a class="doc-link" href="mailto:accounts@quickdbd.com?subject=Invoicing">\n        accounts@quickdbd.com\n      </a>\n    </p>\n  </md-content>\n\n  <md-content class="md-padding docs-content" flex ng-if="DtDocsVM.docsSection === \'Tables\'">\n    <p><strong>Tables</strong> are defined inside the <em>tables</em> section.</p>\n    <p><strong>Table names</strong> are defined by a newline followed by a string.</p>\n    <p>\n<pre>\n# The begining of the script\nCustomer\nOrder</pre>\n    </p>\n    <p><strong>Table name aliases</strong> are defined with the <em>as</em> keyword. Multiple comma-delimited aliases are allowed. Aliases can be used instead of full table names in relationship definitions.</p>\n    <p>\n<pre>\n# The begining of the script\nCustomer as c\nOrder as o, or</pre>\n    </p>\n    <p><strong>Table fields</strong> are defined after the table name followed by an arbitrary amount of hyphens. Each table field must be defined on a separate line in the following format: <em>"FieldName FieldType"</em> or <em>"FieldName, FieldType"</em>. Field name needs to go first and any additional params (such as data type, PK, FK, UNIQUE, INDEX, IDENTITY or AUTOINCREMENT, DEFAULT, NULL or NULLABLE) may follow in any order.</p>\n    <p>\n<pre>\nOrder\n-----\nOrderID PK int IDENTITY\nOrderDate dateTime default=GETUTCDATE()\nSignedByID int FK\nAddress3 string NULL</pre>\n    </p>\n    <p>All table fields are defined as <strong>NOT NULL</strong> by default. Explicitly defining it as such will at the moment result in a parser error. For better clarity, we intend to add support for defining explicit non-nullable fields in the future.</p>\n    <p><strong>UNIQUE constraints</strong> can be defined by setting the UNIQUE keyword on the field which has to be an unique constraint.</p>\n    <p><strong>INDEX constraints</strong> can be defined by setting the INDEX keyword on the field which has to be an index constraint.</p>\n    <p>A field can\'t be a PK and an unique or an index, since a PK is already an unique and an index, and also an unique constraint can\'t be an index, since the unique constraint is already an index.</p>\n    <p><strong>Composite PKs</strong> can be defined by setting the PK keyword on all the fields which are a part of the composite key.</p>\n    <p><strong>Non-standard table and field names</strong> can be defined using double quotes:</p>\n    <p>\n<pre>\n"Non-Standard #1"\n--\n"Non-Standard #2"\nOtherTable\n--\nOtherField FK -&lt; "Non-Standard #1"."Non-Standard #2"</pre>\n    </p>\n    <p><strong>Default values</strong> are defined with the default keyword or as a part of type definition.</p>\n    <p>\n<pre>\nDateCreated dateTime default=GETUTCDATE()\nTemperature int=27\nAddress string="Some default address"</pre>\n    </p>\n    <p><strong>Documentation comments</strong> can be added before or in-line with table or field definitions. These comments will appear in PDF/RTF exports.</p>\n    <p>\n<pre>\n# Table documentation comment 1 (try the PDF/RTF export)\nProduct# Table documentation comment 2\n------------\nProductID PK int\n# Field documentation comment 1\n# Field documentation comment 2\nName varchar(200) # Field documentation comment 3</pre>\n    </p>\n  </md-content>\n\n  <md-content class="md-padding docs-content" flex ng-if="DtDocsVM.docsSection === \'Relationships\'">\n    <p>Table <strong>relationships</strong> can be defined either as a part of table metadata or inline as a part of a table field definition.</p>\n    <p>Relationships as a part of <strong>table metadata definition</strong> can be defined between the table name definition and the table fields separator ("------") using the <em>rel</em> keyword followed by relationship type and the related table. If the relationship type is omitted <em>one-to-one</em> relationship type will be used by default. Relationship table fields may or may not be specified.</p>\n    <p>\n<pre>\n# Relation type and field\n# not specified\nOrder\nrel Customer\n---\nOrderID\nCustomerID\n# Relation type and field\n# specified\nOrder\nrel &gt;- Customer.CustomerID\n------\nOrderID\nCustomerID</pre>\n    </p>\n    <p>Relationships as a part of <strong>table field definition</strong> (inline) can be defined at any position after the field name has been defined. In this case relationship type is mandatory, but the connection relation field name is still optional.</p>\n    <p>\n<pre>\nOrder\n-\nOrderID PK int\nCustomerID int FK >- cst.CustomerID</pre>\n    </p>\n    <p><strong>Allowed relationship types</strong> are:</p>\n    <p>\n      <pre>\n-     - one TO one\n-&lt;    - one TO many\n&gt;-    - many TO one\n&gt;-&lt;   - many TO many\n-0    - one TO zero or one\n0-    - zero or one TO one\n0-0   - zero or one TO zero or one\n-0&lt;   - one TO zero or many\n&gt;0-   - zero or many TO one</pre>\n    </p>\n\n    <p><strong>Frequently asked for examples</strong>:</p>\n    <p>\n      </p><div><a href="https://app.quickdatabasediagrams.com/#/d/xPGxIW" target="_blank" class="doc-link">Multi-FK-to-PK</a></div>\n      <div><a href="https://app.quickdatabasediagrams.com/#/d/vMC8i4" target="_blank" class="doc-link">FK-as-multi-PK</a></div>\n      <div><a href="https://app.quickdatabasediagrams.com/#/d/uEXQCU" target="_blank" class="doc-link">Polymorphic Rels</a></div>\n    <p></p>\n  </md-content>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'),
    e.put("cache/common/components/dt-header/dt-header.html", '<md-toolbar layout="row" class="tour-overlay-container">\n  <div class="tour-overlay header-overlay"></div>\n\n  <div class="qdbd-home">\n    <md-button ng-href="/" class="md-icon-button" aria-label="QuickDBD"></md-button>\n  </div>\n  <div class="md-toolbar-tools header-toolbar-tools" flex hide-xs>\n    <div ui-view="context-menu"></div>\n\n    <span flex></span>\n    <md-button class="toolbar-button" aria-label="Sign In" ui-sref="root.centered.login" ng-if="!$root.currentUser && !$root.stateIncludes(\'root.centered.login\')">\n      Sign In\n    </md-button>\n    <md-menu md-position-mode="target-right bottom" ng-if="$root.currentUser">\n      <md-button class="toolbar-button" aria-label="User Menu" ng-click="$mdMenu.open($event)">\n        {{$root.currentUser.userName || $root.currentUser.email}}\n      </md-button>\n      <md-menu-content width="3">\n        <md-menu-item>\n          <md-button ui-sref="root.standard.user.profile({ userId: $root.currentUser.userId })" ng-click="DtHeaderVM.trackAccount()">\n            <div layout="row" flex>\n              <p flex>Account</p>\n              <md-icon class="mdi mdi-account dropdown-item"></md-icon>\n            </div>\n          </md-button>\n        </md-menu-item>\n        <md-menu-item ng-if="!$root.currentUser.nextBillingDate">\n          <md-button ui-sref="root.centered.subscribe">\n            <div layout="row" flex>\n              <p flex>Subscribe</p>\n              <md-icon class="mdi mdi-account-star dropdown-item"></md-icon>\n            </div>\n          </md-button>\n        </md-menu-item>\n        <md-menu-item>\n          <md-button ng-click="DtHeaderVM.logout()">\n            <div layout="row" flex>\n              <p flex>Logout</p>\n              <md-icon class="mdi mdi-logout-variant dropdown-item"></md-icon>\n            </div>\n          </md-button>\n        </md-menu-item>\n      </md-menu-content>\n    </md-menu>\n    <md-divider class="vertical" ng-if="$root.stateIncludes([\'root.standardShrinkable.home\', \'root.standardShrinkable.diagram\'])"></md-divider>\n    <md-button class="toolbar-button" aria-label="Share" ng-click="DtHeaderVM.shareSchema()" ng-if="$root.stateIncludes([\'root.standardShrinkable.home\', \'root.standardShrinkable.diagram\'])">\n      <md-icon class="mdi mdi-share"></md-icon>\n      Share\n    </md-button>\n  </div>\n</md-toolbar>'),
    e.put("cache/common/components/dt-login-required/dt-login-required.html", '<md-toolbar>\n  <div class="md-toolbar-tools">\n    <h2>Login Required</h2>\n    <span flex></span>\n    <md-button class="md-icon-button" ng-click="DtLoginRequiredVM.closeDialog()">\n      <md-icon class="mdi mdi-close" aria-label="Close dialog"></md-icon>\n    </md-button>\n  </div>\n</md-toolbar>\n\n<md-dialog-content>\n  <md-content class="md-padding">\n    <p>\n      <a ui-sref="root.centered.login" class="call-to-action" ng-click="DtLoginRequiredVM.closeDialog()">Login</a> or\n      <a ui-sref="root.centered.register" class="call-to-action" ng-click="DtLoginRequiredVM.closeDialog()">register</a> to access this feature.\n    </p>\n  </md-content>\n</md-dialog-content>'),
    e.put("cache/common/components/dt-pager/dt-pager.html", '<div class="paging" layout="row" ng-if="DtPagerVM.collection.items.length > 0">\n  <md-icon class="mdi mdi-chevron-double-left" ng-click="DtPagerVM.pager.first()" ng-class="{ disabled: DtPagerVM.pager.isFirstPage() }">\n    <md-tooltip md-direction="below">Beginning</md-tooltip>\n  </md-icon>\n  <md-icon class="mdi mdi-chevron-left" ng-click="DtPagerVM.pager.prev()" ng-class="{ disabled: DtPagerVM.pager.isFirstPage() }">\n    <md-tooltip md-direction="below">Prev</md-tooltip>\n  </md-icon>\n\n  <span flex></span>\n  <div class="page-number">\n    <span>{{DtPagerVM.filter.page}}</span>\n    <span ng-if="DtPagerVM.collection.pageCount">/ {{DtPagerVM.collection.pageCount}}</span>\n  </div>\n  <span flex></span>\n\n  <md-icon class="mdi mdi-chevron-right" ng-click="DtPagerVM.pager.next()" ng-class="{ disabled: DtPagerVM.pager.isLastPage() }">\n    <md-tooltip md-direction="below">Next</md-tooltip>\n  </md-icon>\n  <md-icon class="mdi mdi-chevron-double-right" ng-click="DtPagerVM.pager.last()" ng-class="{ disabled: DtPagerVM.pager.isLastPage() }">\n    <md-tooltip md-direction="below">Last</md-tooltip>\n  </md-icon>\n</div>'),
    e.put("cache/common/components/dt-side-toolbar/dt-side-toolbar.html", '<div class="side-toolbar tour-overlay-container" layout="column" flex hide-xs>\n  <div class="tour-overlay"></div>\n  <div ng-if="!DtSideToolbarVM.toolbarVisibility.isDiagramRoute">\n    <md-button class="md-icon-button" aria-label="Home" ng-href="/">\n      <md-tooltip md-direction="right">Home</md-tooltip>\n      <md-icon class="mdi mdi-home"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button" ng-class="{ active: !DtSideToolbarVM.dirTreeState.isOpen }" ng-if="DtSideToolbarVM.toolbarVisibility.isDiagramRoute">\n    <md-button class="md-icon-button" aria-label="Files" ng-click="DtSideToolbarVM.showFile()">\n      <md-tooltip md-direction="right">Current File</md-tooltip>\n      <md-icon class="mdi mdi-file-outline"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button" ng-class="{ active: DtSideToolbarVM.dirTreeState.isOpen }" ng-if="DtSideToolbarVM.toolbarVisibility.isDiagramRoute">\n    <md-button class="md-icon-button" aria-label="Files" ng-click="DtSideToolbarVM.openDirTree()">\n      <md-tooltip md-direction="right">Files</md-tooltip>\n      <md-icon class="mdi mdi-folder-multiple"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button" ng-class="{ active: $root.stateIncludes(\'root.standard.user\') }" ng-if="$root.currentUser">\n    <md-button class="md-icon-button" aria-label="Profile" ui-sref="root.standard.user.profile({ userId: $root.currentUser.userId })">\n      <md-tooltip md-direction="right">Profile</md-tooltip>\n      <md-icon class="mdi mdi-account-circle"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button" ng-class="{ active: $root.stateIncludes(\'root.standard.admin\') }" ng-if="$root.currentUser.isAdmin">\n    <md-button class="md-icon-button" aria-label="Admin" ui-sref="root.standard.admin">\n      <md-tooltip md-direction="right">Admin</md-tooltip>\n      <md-icon class="mdi mdi-settings"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button">\n    <md-button class="md-icon-button" aria-label="Support Chat" ng-click="DtSideToolbarVM.flipSupportChat()">\n      <md-tooltip md-direction="right">Support Chat</md-tooltip>\n      \x3c!--<md-icon class="mdi mdi-chat"></md-icon>--\x3e\n      <svg>\n        \x3c!-- WHY? - SVG embedded directly because for some reason the icon is not embedded in the material design icons pack - YET. So this is only temporary --\x3e\n        <path fill="#848a90" d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"/>\n      </svg>\n    </md-button>\n  </div>\n\n  <div flex></div>\n\n  <div class="side-button top-padded">\n    <md-button class="md-icon-button link-button" aria-label="Get Link" ng-click="DtSideToolbarVM.shareLink()" ng-if="$root.stateIncludes([\'root.standardShrinkable.home\', \'root.standardShrinkable.diagram\'])">\n      <md-tooltip md-direction="right">Get Link</md-tooltip>\n      <md-icon class="mdi mdi-link-variant"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button">\n    <md-button class="md-icon-button twitter-button" aria-label="Tweet about it" ng-click="DtSideToolbarVM.socialShare(\'twitter\')">\n      <md-tooltip md-direction="right">Tweet about it</md-tooltip>\n      <md-icon class="mdi mdi-twitter"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button">\n    <md-button class="md-icon-button facebook-button" aria-label="Share on Facebook" ng-click="DtSideToolbarVM.socialShare(\'facebook\')">\n      <md-tooltip md-direction="right">Share on Facebook</md-tooltip>\n      <md-icon class="mdi mdi-facebook"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button">\n    <md-button class="md-mini md-icon-button google-button" aria-label="Share on Google+" ng-click="DtSideToolbarVM.socialShare(\'google\')">\n      <md-tooltip md-direction="right">Share on Google+</md-tooltip>\n      <md-icon class="mdi mdi-google"></md-icon>\n    </md-button>\n  </div>\n  <div class="side-button">\n    <md-button class="md-icon-button linkedin-button" aria-label="Share on Linkedin" ng-click="DtSideToolbarVM.socialShare(\'linkedin\')">\n      <md-tooltip md-direction="right">Share on Linkedin</md-tooltip>\n      <md-icon class="mdi mdi-linkedin"></md-icon>\n    </md-button>\n  </div>\n</div>'),
    e.put("cache/common/components/dt-sortable-heading/dt-sortable-heading.html", "<span class=\"sortable-heading\" ng-click=\"DtSortableHeadingVM.pager.sort(DtSortableHeadingVM.sortBy)\">\n  {{DtSortableHeadingVM.name}}\n  <span ng-if=\"DtSortableHeadingVM.filter.sortBy === DtSortableHeadingVM.sortBy\">\n    {{DtSortableHeadingVM.filter.sortOperator === 'descending' ? '&#9660;' : '&#9650;'}}\n  </span>\n</span>"),
    e.put("cache/common/components/dt-subscription-required/dt-subscription-required.html", '<md-toolbar>\n  <div class="md-toolbar-tools">\n    <h2>Pro Access Required</h2>\n    <span flex></span>\n    <md-button class="md-icon-button" ng-click="DtSubscriptionRequiredVM.closeDialog()">\n      <md-icon class="mdi mdi-close" aria-label="Close dialog"></md-icon>\n    </md-button>\n  </div>\n</md-toolbar>\n\n<md-dialog-content>\n  <md-content class="md-padding">\n    <p ng-if="DtSubscriptionRequiredVM.customMessage">\n      {{DtSubscriptionRequiredVM.customMessage}}\n    </p>\n    <span layout-align="end center" layout="row" ng-if="DtSubscriptionRequiredVM.customMessage">\n      <md-button class="call-to-action no-right-margin no-bottom-margin" ng-click="DtSubscriptionRequiredVM.subscribe()">Subscribe</md-button>\n    </span>\n\n    <p ng-if="!DtSubscriptionRequiredVM.customMessage">\n      <a href="javascript:void(0)" class="call-to-action" ng-click="DtSubscriptionRequiredVM.subscribe()">Subscribe</a> to access this Pro feature.\n    </p>\n  </md-content>\n</md-dialog-content>'),
    e.put("cache/common/components/dt-validation-summary/dt-validation-summary.html", '<md-list class="md-dense validation-summary" flex ng-if="DtValidationSummaryVM.summaryMessages.length > 0">\n  <md-subheader class="md-no-sticky">Please ensure all the fields are filled-in correctly</md-subheader>\n  <md-list-item class="md-1-line md-long-text summary-list-item" ng-repeat="message in DtValidationSummaryVM.summaryMessages">\n    <div class="md-list-item-text" layout="column">\n      <span class="summary-message">{{message}}</span>\n    </div>\n  </md-list-item>\n</md-list>'),
    e.put("cache/common/directives/dt-form-elements/dt-input-password.html", '<md-input-container class="md-block" ng-class="{ \'invalid-input\': !!validationMessage }">\n  <input ng-model="model[propertyName]" type="password" ng-click="onFieldClicked()" data-placeholder="{{label}}" aria-label="{{label}}" dt-focus-on="{{focusOn}}" ng-required="!!validationMessage" ng-disabled="model.isEditingDisabled || disable">\n  <div ng-messages="required" class="input-error-message">\n    {{validationMessage}}\n  </div>\n  <div ng-show="showExtraValidation && passwordValidation && !passwordValidation.isValid" class="password-validation">\n    <span ng-class="{ valid: passwordValidation.isValid }"><md-icon class="mdi mdi-lock"></md-icon>Your password needs to:</span>\n    <ul>\n      <li ng-class="{ valid: passwordValidation.lowercase }">\n        <md-icon class="mdi {{ passwordValidation.lowercase ? \'mdi-checkbox-marked-circle-outline\' : \'mdi-close-circle-outline\' }}"></md-icon>\n        include at least one lower case character.\n      </li>\n      <li ng-class="{ valid: passwordValidation.uppercase }">\n        <md-icon class="mdi {{ passwordValidation.uppercase ? \'mdi-checkbox-marked-circle-outline\' : \'mdi-close-circle-outline \'}}"></md-icon>\n        include at least one UPPER case character.\n      </li>\n      <li ng-class="{ valid: passwordValidation.digits }">\n        <md-icon class="mdi {{ passwordValidation.digits ? \'mdi-checkbox-marked-circle-outline\' : \'mdi-close-circle-outline\' }}"></md-icon>\n        include at least one digit.\n      </li>\n      <li ng-class="{ valid: passwordValidation.minCharacters }">\n        <md-icon class="mdi {{ passwordValidation.minCharacters ? \'mdi-checkbox-marked-circle-outline\' : \'mdi-close-circle-outline\' }}"></md-icon>\n        be at least 8 characters long.\n      </li>\n    </ul>\n  </div>\n</md-input-container>'),
    e.put("cache/common/directives/dt-form-elements/dt-input-text-i.html", '<md-input-container class="md-block" ng-class="{ \'invalid-input\': !!validationMessage }">\n  <md-icon class="mdi input-icon" ng-class="icon"></md-icon>\n  <input ng-model="model[propertyName]" type="{{ inputType || \'text\'}}" data-placeholder="{{label}}" aria-label="{{label}}" dt-focus-on="{{focusOn}}" ng-required="!!validationMessage" ng-disabled="model.isEditingDisabled || disable">\n  <div ng-messages="required" class="input-error-message">\n    {{validationMessage}}\n  </div>\n</md-input-container>'),
    e.put("cache/common/directives/dt-form-elements/dt-input-text.html", '<md-input-container class="md-block" ng-class="{ \'invalid-input\': !!validationMessage }">\n  <input ng-model="model[propertyName]" type="{{inputType || \'text\'}}" data-placeholder="{{label}}" aria-label="{{label}}" dt-focus-on="{{focusOn}}" ng-required="!!validationMessage" ng-disabled="model.isEditingDisabled || disable" ng-maxlength="maxLength" min="{{minDate | date:\'yyyy-MM-dd\'}}">\n  <div ng-messages="required" class="input-error-message" ng-bind-html="validationMessage">\n    {{model[propertyName].$valid}}\n  </div>\n</md-input-container>'),
    e.put("cache/common/directives/dt-form-elements/dt-input-textarea.html", '<md-input-container class="md-block dt-input-container" ng-class="{ \'invalid-input\': !!validationMessage }">\n  <textarea ng-model="model[propertyName]" data-placeholder="{{label}}" rows="6" aria-label="{{label}}" dt-focus-on="{{focusOn}}" ng-required="!!validationMessage" ng-disabled="model.isReadOnly || disable" ng-change="onChange()" dt-remove-ng-validation></textarea>\n  <div ng-messages="required" class="input-error-message">\n    {{model[propertyName].$valid}}\n    {{validationMessage}}\n  </div>\n</md-input-container>'),
    e.put("cache/modules/schema/dt-schema-list/dt-schema-list.html", '<div class="dt-paged-content">\n  <div class="search-filter">\n    <dt-input-text model="DtSchemaListVM.filter" property-name="search" label="Search"></dt-input-text>\n  </div>\n  <div ng-if="DtSchemaListVM.diagrams.items && DtSchemaListVM.diagrams.items.length > 0">\n    <table>\n      <tr>\n        <th>\n          <dt-sortable-heading name="Name" sort-by="name" filter="DtSchemaListVM.filter" pager="DtSchemaListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          Folder\n        </th>\n        <th>\n          Created By\n        </th>\n        <th>\n          <dt-sortable-heading name="Created At" sort-by="dateCreated" filter="DtSchemaListVM.filter" pager="DtSchemaListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Updated At" sort-by="dateUpdated" filter="DtSchemaListVM.filter" pager="DtSchemaListVM.pager"></dt-sortable-heading>\n        </th>\n        <th class="no-right-padding">\n          <dt-sortable-heading name="Tables" sort-by="tableCount" filter="DtSchemaListVM.filter" pager="DtSchemaListVM.pager"></dt-sortable-heading>\n        </th>\n      </tr>\n      <tr ng-repeat="diagram in DtSchemaListVM.diagrams.items">\n        <td><a ui-sref="root.standardShrinkable.diagram({ shortcode: diagram.shortcode })">{{diagram.name || "NAME NOT SET"}}</a></td>\n        <td>{{diagram.parentDirName || \'DEFAULT FOLDER\'}}</td>\n        <td ng-if="diagram.userName">\n          <a ui-sref="root.standard.user.profile({ userId: diagram.userId })">{{diagram.userName}}</a>\n        </td>\n        <td ng-if="!diagram.userName">\n          ANONYMOUS\n        </td>\n        <td>{{diagram.dateCreated | date: "dd/MM/yy hh:mm a"}}</td>\n        <td>{{diagram.dateUpdated | date: "dd/MM/yy hh:mm a"}}</td>\n        <td class="center-aligned-content no-right-padding">{{diagram.tableCount}}</td>\n      </tr>\n    </table>\n    <dt-pager filter="DtSchemaListVM.filter" collection="DtSchemaListVM.diagrams" pager="DtSchemaListVM.pager"></dt-pager>\n  </div>\n  <dt-no-items collection="DtSchemaListVM.diagrams"></dt-no-items>\n</div>'),
    e.put("cache/modules/subscription/dt-cancel-subscription/dt-cancel-subscription.html", '<md-toolbar>\n  <div class="md-toolbar-tools">\n    <h2>Cancel Subscription</h2>\n    <span flex></span>\n    <md-button class="md-icon-button" ng-click="DtCancelSubscriptionVM.close()">\n      <md-icon class="mdi mdi-close" aria-label="Close dialog"></md-icon>\n    </md-button>\n  </div>\n</md-toolbar>\n\n<md-dialog-content>\n  <md-content class="md-padding">\n    <p>Please tell us more about your subscription cancellation</p>\n    <p>{{DtCancelSubscriptionVM.userProfile}}</p>\n\n    <div class="cancellation-reasons">\n      <md-radio-group ng-model="DtCancelSubscriptionVM.model.reasonId">\n        <md-radio-button ng-repeat="reason in DtCancelSubscriptionVM.reasons" ng-value="reason.id" class="md-primary md-hue-1">\n          {{reason.reason}}\n        </md-radio-button>\n      </md-radio-group>\n    </div>\n\n    <dt-input-textarea model="DtCancelSubscriptionVM.model" property-name="comment" label="{{DtCancelSubscriptionVM.reasons[DtCancelSubscriptionVM.model.reasonId].question}}">\n    </dt-input-textarea>\n    \n    <span layout-align="end center" layout="row">\n      <md-button class="md-primary md-raised no-right-margin" ng-click="DtCancelSubscriptionVM.confirm()">CONFIRM</md-button>\n    </span>\n  </md-content>\n</md-dialog-content>'),
    e.put("cache/modules/user/dt-user-diagrams/dt-user-diagrams.html", '<div class="dt-paged-content">\n  <div class="search-filter">\n    <dt-input-text model="DtUserDiagramsVM.filter" property-name="search" label="Search"></dt-input-text>\n  </div>\n  <div ng-if="DtUserDiagramsVM.diagrams.items && DtUserDiagramsVM.diagrams.items.length > 0">\n    <table>\n      <tr>\n        <th>\n          <dt-sortable-heading name="Name" sort-by="name" filter="DtUserDiagramsVM.filter" pager="DtUserDiagramsVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          Folder\n        </th>\n        <th>\n          <dt-sortable-heading name="Created At" sort-by="dateCreated" filter="DtUserDiagramsVM.filter" pager="DtUserDiagramsVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Updated At" sort-by="dateUpdated" filter="DtUserDiagramsVM.filter" pager="DtUserDiagramsVM.pager"></dt-sortable-heading>\n        </th>\n        <th class="no-right-padding">\n          <dt-sortable-heading name="Tables" sort-by="tableCount" filter="DtUserDiagramsVM.filter" pager="DtUserDiagramsVM.pager"></dt-sortable-heading>\n        </th>\n      </tr>\n      <tr ng-repeat="diagram in DtUserDiagramsVM.diagrams.items">\n        <td><a ui-sref="root.standardShrinkable.diagram({ shortcode: diagram.shortcode })">{{diagram.name || "NAME NOT SET"}}</a></td>\n        <td>{{diagram.parentDirName || \'DEFAULT FOLDER\'}}</td>\n        <td>{{diagram.dateCreated | date: "dd/MM/yy hh:mm a"}}</td>\n        <td>{{diagram.dateUpdated | date: "dd/MM/yy hh:mm a"}}</td>\n        <td class="center-aligned-content no-right-padding">{{diagram.tableCount}}</td>\n      </tr>\n    </table>\n    <dt-pager filter="DtUserDiagramsVM.filter" collection="DtUserDiagramsVM.diagrams" pager="DtUserDiagramsVM.pager"></dt-pager>\n  </div>\n  <dt-no-items collection="DtUserDiagramsVM.diagrams"></dt-no-items>\n</div>'),
    e.put("cache/modules/user/dt-user-list/dt-user-list.html", '<div class="dt-paged-content">\n  <div class="search-filter">\n    <dt-input-text model="DtUserListVM.filter" property-name="search" label="Search"></dt-input-text>\n  </div>\n  <div ng-if="DtUserListVM.users.items && DtUserListVM.users.items.length > 0">\n    <table>\n      <tr>\n        <th>\n          <dt-sortable-heading name="Id" sort-by="id" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="First Name" sort-by="firstName" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Last Name" sort-by="lastName" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Email" sort-by="email" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Last Active" sort-by="lastActive" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Registered On" sort-by="dateCreated" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n        <th class="no-right-padding">\n          <dt-sortable-heading name="Subscription Until" sort-by="subscriptionExpiresOn" filter="DtUserListVM.filter" pager="DtUserListVM.pager"></dt-sortable-heading>\n        </th>\n      </tr>\n      <tr ng-repeat="user in DtUserListVM.users.items">\n        <td>{{user.userId}}</td>\n        <td>{{user.firstName || "NOT SET"}}</td>\n        <td>{{user.lastName || "NOT SET"}}</td>\n        <td><a ui-sref="root.standard.user.profile({ userId: user.userId })">{{user.email}}</a></td>\n        <td>{{user.lastActive | date: "dd/MM/yyyy HH:mm"}}</td>\n        <td class="center-aligned-content">{{user.dateCreated | date: "dd/MM/yyyy"}}</td>\n        <td class="center-aligned-content no-right-padding">{{user.subscriptionExpiresOn | date: "dd/MM/yyyy"}}</td>\n      </tr>\n    </table>\n    <dt-pager filter="DtUserListVM.filter" collection="DtUserListVM.users" pager="DtUserListVM.pager"></dt-pager>\n  </div>\n  <dt-no-items collection="DtUserListVM.users"></dt-no-items>\n</div>'),
    e.put("cache/modules/user/dt-user-payments/dt-user-payments.html", '<div class="dt-paged-content user-payments">\n  <table ng-if="DtUserPaymentsVM.payments && DtUserPaymentsVM.payments.length > 0">\n    <tr>\n      <th>Transaction</th>\n      <th>Status</th>\n      <th>Amount</th>\n      <th>Created At</th>\n    </tr>\n    <tr ng-repeat="payment in DtUserPaymentsVM.payments">\n      <td>{{"#" + payment.transactionId}}</td>\n      <td>{{payment.status || \'-\'}}</td>\n      <td>{{payment.amount | currency:"\\u0024"}}</td>\n      <td>{{payment.dateCreated | date: "dd/MM/yy hh:mm a"}}</td>\n    </tr>\n  </table>\n  <div>\n    <span ng-if="!DtUserPaymentsVM.payments">Loading, please wait...</span>\n    <span ng-if="DtUserPaymentsVM.payments.length === 0">No items to display.</span>\n  </div>\n</div>'),
    e.put("cache/modules/user/dt-user-profile/dt-user-profile.html", '<div class="user-profile">\n  <h2 ng-if="DtUserProfileVM.userProfile.firstName || DtUserProfileVM.userProfile.lastName">\n    {{DtUserProfileVM.userProfile.firstName + " " + DtUserProfileVM.userProfile.lastName}}\n  </h2>\n\n  <h3>\n    {{DtUserProfileVM.userProfile.userName}}\n    \x3c!-- WHY: We\'re checking for the existence here so users who got free Pro access from us could still go and pre-approve a subscription with a card or paypal --\x3e\n    <span class="call-to-action" ng-if="!DtUserProfileVM.userProfile.activeSubscription">\n      (<a ui-sref="root.centered.subscribe">subscribe</a>)\n    </span>\n  </h3>\n\n  <h5>Joined</h5>\n  <div class="profile-detail">{{DtUserProfileVM.userProfile.dateCreated | date: "d MMM yyyy h:mm a"}}</div>\n\n  <h5 ng-if="$root.currentUser.isAdmin">Last Active</h5>\n  <div class="profile-detail" ng-if="$root.currentUser.isAdmin">{{DtUserProfileVM.userProfile.lastActive | date: "d MMM yyyy h:mm a"}}</div>\n\n  \x3c!-- Don\'t have a valid subscription now, and never paid for it before --\x3e\n  <div ng-if="!DtUserProfileVM.userProfile.hasProAccess && !DtUserProfileVM.userProfile.hadSubscription">\n    <h5>\n      Pro Plan\n    </h5>\n    <div class="profile-detail">\n      No\n    </div>\n  </div>\n\n  \x3c!-- Have valid subscription now or paid for it before --\x3e\n  <div ng-if="DtUserProfileVM.userProfile.hasProAccess || DtUserProfileVM.userProfile.hadSubscription">\n    <h5>\n      Pro Plan {{DtUserProfileVM.userProfile.hasProAccess ? \'Expires\' : \'Expired\' }} On\n    </h5>\n    <div class="profile-detail">\n      {{DtUserProfileVM.userProfile.subscriptionExpiresOn | date: "d MMM yyyy h:mm a"}}\n    </div>\n  </div>\n\n  <h5 ng-if="DtUserProfileVM.userProfile.activeSubscription">\n    Next Billing On\n  </h5>\n  <div class="profile-detail" ng-if="DtUserProfileVM.userProfile.activeSubscription">\n    {{DtUserProfileVM.userProfile.nextBillingDate | date: "d MMM yyyy"}}\n    (<a href="javascript:void(0)" ng-click="DtUserProfileVM.cancelSubscription()">cancel subscription</a>)\n  </div>\n\n  <h5>Email confirmed</h5>\n  <div class="profile-detail">\n    {{DtUserProfileVM.userProfile.emailConfirmed ? \'Yes\' : \'No\'}}\n    <span ng-if="!DtUserProfileVM.userProfile.emailConfirmed">\n      (<a href="javascript:void(0)" ng-click="DtUserProfileVM.confirmEmail()">confirm</a>)\n    </span>\n    <span class="call-to-action">\n      (<a ui-sref="root.centered.changeEmail">change</a>)\n    </span>\n  </div>\n\n  <div class="profile-detail" ng-if="!$root.currentUser.isSocialSignIn">\n    <h3>\n      <span class="call-to-action">\n        <a ui-sref="root.centered.changePassword">Change password</a>\n      </span>\n    </h3>\n  </div>\n\n  <div class="profile-detail">\n    <h3>\n      <span class="call-to-action">\n        <a href="javascript:void(0)" ng-click="DtUserProfileVM.deleteUser(DtUserProfileVM.userProfile.userId)">Delete Account</a>\n      </span>\n    </h3>\n  </div>\n\n  <h5 ng-if="$root.currentUser.isAdmin">Administration</h5>\n  <div class="profile-detail" ng-if="$root.currentUser.isAdmin && !DtUserProfileVM.userProfile.hasProAccess">\n    Grant:\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'week\')">Week</a> /\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'month\')">Month</a> /\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'2months\')">2 Months</a> /\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'3months\')">3 Months</a> /\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'6months\')">6 Months</a> /\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'year\')">Year</a> /\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.grantProAccess(\'lifetime\')">Lifetime</a> of Pro access\n  </div>\n  <div class="profile-detail" ng-if="$root.currentUser.isAdmin && DtUserProfileVM.userProfile.hasProAccess">\n    <a href="javascript:void(0)" ng-click="DtUserProfileVM.removeSubscription()">Remove Pro access</a>\n  </div>\n  <div class="profile-detail" ng-if="$root.currentUser.isAdmin">\n    <span ng-if="DtUserProfileVM.userProfile.isCollabEnabled">\n      Real-time collab enabled (<a href="javascript:void(0)" ng-click="DtUserProfileVM.flipCollab(DtUserProfileVM.userProfile.userId)">disable</a>)\n    </span>\n    <span ng-if="!DtUserProfileVM.userProfile.isCollabEnabled">\n      <a href="javascript:void(0)" ng-click="DtUserProfileVM.flipCollab(DtUserProfileVM.userProfile.userId)">Enable real-time collab</a>\n    </span>\n  </div>\n</div>\n'),
    e.put("cache/modules/voucher/dt-voucher-list/dt-voucher-list.html", '<div class="dt-paged-content">\n  <div class="search-filter">\n    <dt-input-text model="DtVoucherListVM.filter" property-name="search" label="Search"></dt-input-text>\n  </div>\n\n  <div class="right-aligned-content centered-card-box grid-md-button">\n    <md-button type="submit" class="md-primary md-raised" flex ng-click="DtVoucherListVM.addNewVoucher()">Add new voucher</md-button>\n    <br>\n    <br>\n  </div>\n\n  <div ng-if="DtVoucherListVM.vouchers.items && DtVoucherListVM.vouchers.items.length > 0">\n    <table>\n      <tr>\n        <th>\n          <dt-sortable-heading name="Id" sort-by="voucherId" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Code" sort-by="code" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Description" sort-by="description" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Date Created" sort-by="dateCreated" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Created By" sort-by="createdByUserId" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Valid From" sort-by="validFrom" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Valid To" sort-by="validTo" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Max Redemptions" sort-by="maxRedemptions" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <dt-sortable-heading name="Value In Weeks" sort-by="valueInWeeks" filter="DtVoucherListVM.filter" pager="DtVoucherListVM.pager"></dt-sortable-heading>\n        </th>\n        <th>\n          <span class="sortable-heading">Current Redemptions</span>\n        </th>\n        <th>\n          <span class="sortable-heading">Edit</span>\n        </th>\n        <th>\n          <span class="sortable-heading">Copy</span>\n        </th>\n      </tr>\n      <tr ng-repeat="voucher in DtVoucherListVM.vouchers.items">\n        <td>{{voucher.voucherID}}</td>\n        <td>{{voucher.code}}</td>\n        <td>{{voucher.description}}</td>\n        <td class="center-aligned-content">{{voucher.dateCreated | date: "dd/MM/yyyy"}}</td>\n        <td>{{voucher.userName}}</td>\n        <td class="center-aligned-content">{{voucher.validFrom | date: "dd/MM/yyyy"}}</td>\n        <td class="center-aligned-content">{{voucher.validTo | date: "dd/MM/yyyy"}}</td>\n        <td class="center-aligned-content">{{voucher.maxRedemptions}}</td>\n        <td class="center-aligned-content">{{voucher.valueInWeeks}}</td>\n        <td class="center-aligned-content">{{voucher.redemptionCount}}</td>\n        <td class="center-aligned-content grid-md-button">\n          <md-button class="md-icon-button grid-md-button" href="javascript:void(0)" ng-click="DtVoucherListVM.editNewVoucher(voucher)">\n            <md-tooltip md-direction="right">Edit voucher</md-tooltip>\n            <md-icon class="mdi edit-icon-button"></md-icon>\n          </md-button>\n        </td>\n        <td class="center-aligned-content grid-md-button">\n          <md-button class="md-icon-button grid-md-button" href="javascript:void(0)" ng-click="DtVoucherListVM.copyVoucherUrl(voucher)">\n            <md-tooltip md-direction="right">Copy voucher URL to clipboard</md-tooltip>\n            <md-icon class="mdi copy-icon-button"></md-icon>\n          </md-button>\n        </td>\n      </tr>\n    </table>\n    <dt-pager filter="DtVoucherListVM.filter" collection="DtVoucherListVM.vouchers" pager="DtVoucherListVM.pager"></dt-pager>\n  </div>\n  <dt-no-items collection="DtVoucherListVM.vouchers"></dt-no-items>\n\n</div>\n')
}
]);
