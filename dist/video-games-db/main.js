(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cex\OneDrive\Documents\A-CODE\moi\ng-video-games\src\main.ts */"zUnb");


/***/ }),

/***/ "1ujl":
/*!*************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @richardlt/ng2-semantic-ui */ "yotM");






class SearchbarComponent {
    constructor(_router, fb) {
        this._router = _router;
        this.fb = fb;
        this.searchForm = fb.group({
            searchQuery: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() { }
    onSubmit(form) {
        console.log(form.value);
        this._router.navigate(['search/', form.value.searchQuery]);
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["app-searchbar"]], decls: 11, vars: 1, consts: [[1, "ui", "basic", "segment"], [1, "ui", "form", 3, "formGroup", "ngSubmit"], [1, "ui", "stackable", "grid"], [1, "column", 2, "width", "50px", "margin-bottom", "0", "align-self", "center"], ["routerLink", "/", 2, "color", "#fff"], [1, "column", 2, "width", "calc(100% - 50px)"], [1, "ui", "right", "action", "mini", "input", 2, "width", "90%"], ["formControlName", "searchQuery", "type", "text", "placeholder", "Search 500, 000+ games", 2, "color", "#000 !important"], [1, "ui", "primary", "button"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchbarComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(ctx.searchForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
    } }, directives: [_richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_3__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-searchbar',
                templateUrl: './searchbar.component.html',
                styleUrls: ['./searchbar.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "8Qyz":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/http-headers.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptor", function() { return HttpHeadersInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HttpHeadersInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            // https://rapidapi.com/accujazz/api/rawg-video-games-database/details
            setHeaders: {
                'x-rapidapi-key': '42d813360dmsh8137b4197221fb2p19ed88jsn9b39155216ce',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            // rawg.io
            setParams: {
                key: '613215ec3d364759ada7617f5c86edf0',
            },
        });
        return next.handle(request);
    }
}
HttpHeadersInterceptor.ɵfac = function HttpHeadersInterceptor_Factory(t) { return new (t || HttpHeadersInterceptor)(); };
HttpHeadersInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpHeadersInterceptor, factory: HttpHeadersInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpHeadersInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'https://rawg-video-games-database.p.rapidapi.com',
    API_KEY: '0473fa5b6afe4637a1f6936b3035c014',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @richardlt/ng2-semantic-ui */ "yotM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HomeComponent_sui_select_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sui-select-option", 15);
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
} }
function HomeComponent_ng_container_14_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} if (rf & 2) {
    const game_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r4 == null ? null : game_r4.background_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_ng_container_14_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} }
function HomeComponent_ng_container_14_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/platforms/", item_r9 == null ? null : item_r9.platform == null ? null : item_r9.platform.slug, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r9 == null ? null : item_r9.platform == null ? null : item_r9.platform.slug);
} }
function HomeComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_container_14_img_3_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_container_14_img_4_Template, 1, 0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_ng_container_14_a_9_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const game_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", game_r4 == null ? null : game_r4.background_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(game_r4 == null ? null : game_r4.background_image));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r4 == null ? null : game_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", game_r4 == null ? null : game_r4.parent_platforms);
} }
const _c0 = function (a0) { return { loading: a0 }; };
class HomeComponent {
    constructor(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pending = false;
        this.maxSize = 5;
        this.sortOrder = 'desc';
        this.sortOptions = [
            {
                name: 'Name',
                value: 'name',
            },
            { name: 'Released', value: '-released' },
            { name: 'Added', value: '-added' },
            { name: 'Created', value: '-created' },
            { name: 'Updated', value: '-updated' },
            { name: 'Rating', value: '-rating' },
            { name: 'Metacritic', value: 'metacritic' },
        ];
        // namedOptions = this.options.map((name) => ({ name }));
        this.games = [];
        // sort: string;
        this.noImg = 'https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png';
        this.totalItems = 200;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.sortBy = this.sortBy ? this.sortBy : this.sortOptions[0];
        // this.options = this.namedOptions;
        this.activatedRoute.params.subscribe((params) => {
            if (params['game-search']) {
                this.searchGames(this.sortBy.value, this.currentPage, params['game-search']);
            }
            else {
                this.searchGames(this.sortBy.value, this.currentPage);
            }
        });
    }
    consoleSort(item) {
        console.log(item);
    }
    searchGames(sort, page, search) {
        this.pending = true;
        if (this.sortOrder == 'asc') {
            sort = /^-/.test(sort) ? sort : `-${sort}`;
        }
        else {
            sort = /^-/.test(sort) ? sort.substring(1) : sort;
        }
        this.http
            .getGames(sort, this.currentPage, search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((res) => {
            this.games = res.results;
            this.totalItems = Math.ceil(+res['count'] / res['results'].length);
            this.currentPage = page;
            this.pending = false;
            console.log(this.sortOrder, sort);
        }, (error) => {
            this.pending = false;
            console.log(error);
        });
    }
    nextPage(page) {
        //get and assign current page
        this.currentPage = page;
        this.ngOnInit();
    }
    onSortResults(order) {
        this.sortOrder = order;
        this.ngOnInit();
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 14, consts: [[1, "ui", "basic", "segment", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["labelField", "name", 1, "selection", 3, "ngModel", "options", "isSearchable", "isDisabled", "ngModelChange", "selectedOptionChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "ui", "basic", "segment", 2, "padding", "15px 0"], ["appMargin", "", "marginR", "4", "suiDropdown", "", 1, "ui", "pointing", "dropdown", "link", "item"], [3, "ngClass"], ["suiDropdownMenu", "", 1, "left", "menu"], [1, "item", 3, "click"], [1, "ui", "basic", "segment", 2, "background", "transparent !important", 3, "ngClass"], [1, "ui", "four", "doubling", "cards"], [4, "ngFor", "ngForOf"], [1, "ui", "segments"], [1, "ui", "basic", "segment", "right", "aligned"], [3, "collectionSize", "maxSize", "hasEllipses", "page", "pageChange"], [3, "value"], [1, "ui", "card"], ["href", "#", 1, "image"], [3, "src", 4, "ngIf"], ["src", "https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png", 4, "ngIf"], [1, "content"], ["href", "#", 1, "primary-color", "header"], [1, "platforms", 2, "margin-top", "8px"], [3, "src"], ["src", "https://res.cloudinary.com/adenike/image/upload/v1642002314/no-image_iah8ux.png"], [1, "game-platform", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sui-select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_sui_select_ngModelChange_1_listener($event) { return ctx.sortBy = $event; })("selectedOptionChange", function HomeComponent_Template_sui_select_selectedOptionChange_1_listener() { return ctx.searchGames(ctx.sortBy.value, 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_sui_select_option_3_Template, 1, 1, "sui-select-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_8_listener() { return ctx.onSortResults("desc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_10_listener() { return ctx.onSortResults("asc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_container_14_Template, 10, 4, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sui-pagination", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HomeComponent_Template_sui_pagination_pageChange_17_listener($event) { return ctx.currentPage = $event; })("pageChange", function HomeComponent_Template_sui_pagination_pageChange_17_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortBy)("options", ctx.sortOptions)("isSearchable", false)("isDisabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.filteredOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sortOrder == "desc" ? "large sort alphabet down icon" : "large sort alphabet up icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.pending));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItems)("maxSize", ctx.maxSize)("hasEllipses", true)("page", ctx.currentPage);
    } }, directives: [_richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiDropdownMenuItem"], _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiDropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiDropdownMenu"], _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["SuiPagination"], _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".ui.card[_ngcontent-%COMP%] {\n  background: #000;\n  display: flex;\n}\n.ui.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #ffcb9a !important;\n}\n.ui.card[_ngcontent-%COMP%]    > .image[_ngcontent-%COMP%], .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]    > .image[_ngcontent-%COMP%] {\n  flex: 50 0 auto;\n}\n.ui.card[_ngcontent-%COMP%]    > .image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .ui.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]    > .image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-height: 15rem;\n}\ni.icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.primary-color[_ngcontent-%COMP%]:hover {\n  color: #d9b08c !important;\n}\n  .selection * {\n  color: #000 !important;\n}\n.platforms[_ngcontent-%COMP%] {\n  display: flex;\n}\n.platforms[_ngcontent-%COMP%]   .game-platform[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 10px;\n  aspect-ratio: 3/2;\n  object-fit: contain;\n}\n  .ui.pagination.menu {\n  border: 0 solid transparent;\n  background: #1b1c1d;\n  box-shadow: none;\n}\n  .ui.pagination.menu .item:active,   .ui.pagination.menu .active.item {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n  .ui.pagination.menu .item.disabled {\n  color: #fff !important;\n}\n  .ui.pagination.menu .item {\n  background: 0 0;\n  color: rgba(255, 255, 255, 0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7QUFFSjtBQUVBOztFQUVFLGVBQUE7QUFDRjtBQUVBOztFQUVFLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7QUFDRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBS0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFPQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQUxGO0FBT0U7O0VBRUUscUNBQUE7RUFDQSxXQUFBO0FBTEo7QUFRRTtFQUNFLHNCQUFBO0FBTko7QUFTRTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5jb250ZW50ICoge1xyXG4gICAgY29sb3I6ICNmZmNiOWEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi51aS5jYXJkID4gLmltYWdlLFxyXG4udWkuY2FyZHMgPiAuY2FyZCA+IC5pbWFnZSB7XHJcbiAgZmxleDogNTAgMCBhdXRvO1xyXG59XHJcblxyXG4udWkuY2FyZCA+IC5pbWFnZSA+IGltZyxcclxuLnVpLmNhcmRzID4gLmNhcmQgPiAuaW1hZ2UgPiBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDE1cmVtO1xyXG59XHJcblxyXG5pLmljb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJpbWFyeS1jb2xvcjpob3ZlciB7XHJcbiAgY29sb3I6ICNkOWIwOGMgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zZWxlY3Rpb24gKiB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gaW1nIHtcclxuLy8gICBhc3BlY3QtcmF0aW86IDMvMjtcclxuLy8gfVxyXG5cclxuLnBsYXRmb3JtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmdhbWUtcGxhdGZvcm0ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBhc3BlY3QtcmF0aW86IDMvMjtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnVpLnBhZ2luYXRpb24ubWVudSB7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6ICMxYjFjMWQ7XHJcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gIC5pdGVtOmFjdGl2ZSxcclxuICAuYWN0aXZlLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0uZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





class HttpService {
    constructor(http) {
        this.http = http;
    }
    getGames(order, page, search) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('ordering', order).set('page', page);
        if (search) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('or', order)
                .set('page', page)
                .set('search', search);
        }
        console.log('outside type is ' + typeof page);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/games`, {
            params: params,
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'video-games-db';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "ui", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-searchbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_1__["SearchbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @richardlt/ng2-semantic-ui */ "yotM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/http.service */ "N+K7");
/* harmony import */ var _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/http-headers.interceptor */ "8Qyz");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpHeadersInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpHeadersInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["SuiModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__["SearchbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["SuiModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__["SearchbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _richardlt_ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["SuiModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ],
                providers: [
                    _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpHeadersInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpHeadersInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'search/:game-search', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map