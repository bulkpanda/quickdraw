(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\quickdraw\assignment\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1ZD4":
/*!**********************************************!*\
  !*** ./src/app/dataset/dataset.component.ts ***!
  \**********************************************/
/*! exports provided: DatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetComponent", function() { return DatasetComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["myCanvas"];
function DatasetComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatasetComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ob_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.object_select(ob_r2.objectName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ob_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ob_r2.objectName, " ");
} }
class DatasetComponent {
    constructor(http) {
        this.http = http;
        this.isClicked = false;
        this.objects = [
            {
                objectId: 1,
                objectName: 'Pencil',
            }, {
                objectId: 2,
                objectName: 'Sun',
            }, {
                objectId: 3,
                objectName: 'Flower',
            }, {
                objectId: 4,
                objectName: 'Umbrella',
            }, {
                objectId: 5,
                objectName: 'Spoon',
            }, {
                objectId: 6,
                objectName: 'Tree',
            }, {
                objectId: 7,
                objectName: 'Mug',
            }, {
                objectId: 8,
                objectName: 'House',
            }, {
                objectId: 9,
                objectName: 'Bird',
            }, {
                objectId: 10,
                objectName: 'Hand',
            }
        ];
        this.width = 500;
        this.height = 500;
        this.x = "black";
        this.y = 2;
    }
    check() {
        console.log(this.isClicked);
    }
    ngAfterViewInit() {
        const canvasEl = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext('2d');
        // canvasEl.width=this.width;
        // canvasEl.height=this.height;
        this.ctx.lineWidth = this.y;
        this.ctx.strokeStyle = this.x;
        this.eventcapture(canvasEl);
    }
    eventcapture(canvasEl) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])());
        }))
            .subscribe((res) => {
            const rect = canvasEl.getBoundingClientRect();
            const prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            const currPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            this.draw(prevPos, currPos);
        });
    }
    draw(prevPos, currPos) {
        if (!this.ctx) {
            return;
        }
        //this.pathHistory.push([prevPos, currPos]);
        this.ctx.beginPath();
        if (prevPos) {
            this.ctx.moveTo(prevPos.x, prevPos.y);
            this.ctx.lineTo(currPos.x, currPos.y);
            this.ctx.stroke();
        }
    }
    erase() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    not_updated() {
    }
    object_select(s) {
        this.className = s;
        console.log(this.className);
    }
    saveimage() {
        if (this.className == null) {
            console.log('Not Updated!');
            this.not_updated();
            return;
        }
        var canvas = this.canvas.nativeElement;
        var date = Date.now();
        var filename = this.className + '_' + date + '.png';
        var image = canvas.toDataURL('image/png');
        // console.log(image);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL + '/upload_canvas', { filename, image, className: this.className }, { responseType: 'text' }).subscribe((res) => {
            console.log(res, this.className);
            this.erase();
            this.className = null;
        });
    }
}
DatasetComponent.ɵfac = function DatasetComponent_Factory(t) { return new (t || DatasetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DatasetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DatasetComponent, selectors: [["app-dataset"]], viewQuery: function DatasetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height" }, decls: 29, vars: 1, consts: [[1, "container", "pt-3"], [1, "row"], [1, "col-md-2"], [1, "row", "mt-3"], [1, "col"], ["type", "button", "routerLink", "\\home", 1, "btn", 2, "font-size", "15px", "width", "100%", "background", "#fff748", "color", "#000"], [1, "fa", "fa-arrow-left"], [1, "col-lg-6", "text-center"], [1, "col", "style1", 2, "font-size", "40px"], [1, "row", "py-3"], [1, "col", "text-center"], ["width", "384", "height", "384", 2, "border", "1px solid #000000", "background", "#FFF"], ["myCanvas", ""], [1, "col-lg-3", "ml-4"], [1, "row", "pt-4"], ["class", "row pt-1", 4, "ngFor", "ngForOf"], [1, "row", "pt-1"], [1, "btn", "style2", "btn-success", "shadow", 3, "click"], [1, "btn", "style2", "btn-danger", "shadow", 3, "click"], [1, "col-md-1"], ["type", "button", 1, "btn", "style2", "background1", "shadow", "onHoverDark", 3, "click"]], template: function DatasetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Draw Inside the Canvas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "canvas", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DatasetComponent_div_19_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatasetComponent_Template_button_click_22_listener() { return ctx.saveimage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Confirm Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DatasetComponent_Template_button_click_26_listener() { return ctx.erase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Clear Canvas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.objects);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    background: #333333;\r\n}\r\n\r\n.style1[_ngcontent-%COMP%]{                                    \r\n    font-family: 'Dancing Script', cursive;\r\n    font-family: 'Yellowtail', cursive;\r\n    color: #000;}\r\n\r\n.style2[_ngcontent-%COMP%]{\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 15px;\r\n    width: 70%;\r\n    color: #fff;}\r\n\r\n.onHoverDark[_ngcontent-%COMP%]:hover { background-color: #444 !important; color: #DDD !important;}\r\n\r\n.background1[_ngcontent-%COMP%]{\r\n    background: #6666bb\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLFdBQVcsQ0FBQzs7QUFHaEI7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXLENBQUM7O0FBRWhCLHFCQUFxQixpQ0FBaUMsRUFBRSxzQkFBc0IsQ0FBQzs7QUFDL0U7SUFDSTtJQUNBIiwiZmlsZSI6ImRhdGFzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5zdHlsZTF7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnWWVsbG93dGFpbCcsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzAwMDt9XHJcblxyXG5cclxuLnN0eWxlMntcclxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6ICNmZmY7fSAgXHJcbiAgICAgXHJcbi5vbkhvdmVyRGFyazpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICM0NDQgIWltcG9ydGFudDsgY29sb3I6ICNEREQgIWltcG9ydGFudDt9XHJcbi5iYWNrZ3JvdW5kMXtcclxuICAgIGJhY2tncm91bmQ6ICM2NjY2YmJcclxuICAgIH0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() {
        this.bgcolor = "#333333";
        this.size = 'hello';
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "pt-5"], [1, "col-md-4"], [1, "col-lg-4", "text-center", "pt-5"], [1, "style1", 2, "font-size", "60px"], [1, "row", "my-5"], [1, "col-lg-2"], [1, "col-lg-8"], [1, "row", "mt-5"], [1, "col-md-1"], [1, "col-md-4", "text-center", "py-4"], ["type", "button", "routerLink", "/dataset", 1, "style2", "onHoverDark", "shadow", 2, "font-size", "30px", "width", "100%"], [1, "col-md-2"], ["type", "button", "routerLink", "/play", 1, "style2", "onHoverDark", "shadow", 2, "font-size", "30px", "width", "100%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Quick Draw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Create Dataset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Lets Play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".style1[_ngcontent-%COMP%]{font-family: 'Dancing Script', cursive;\r\n    font-family: 'Yellowtail', cursive; background: #fff748;\r\n    color: #000;}\r\n\r\n.style2[_ngcontent-%COMP%]{font-family: 'Dancing Script', cursive;\r\n    font-family: 'Yellowtail', cursive; background: #6f4d8e;\r\n    color: #fff;}\r\n\r\n.onHoverDark[_ngcontent-%COMP%]:hover { background-color: #4d2b6d !important; color: #BABABA !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFFBQVEsc0NBQXNDO0lBQzFDLGtDQUFrQyxFQUFFLG1CQUFtQjtJQUN2RCxXQUFXLENBQUM7O0FBRWhCLFFBQVEsc0NBQXNDO0lBQzFDLGtDQUFrQyxFQUFFLG1CQUFtQjtJQUN2RCxXQUFXLENBQUM7O0FBRWhCLHFCQUFxQixvQ0FBb0MsRUFBRSx5QkFBeUIsQ0FBQyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zdHlsZTF7Zm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBjdXJzaXZlOyBiYWNrZ3JvdW5kOiAjZmZmNzQ4O1xyXG4gICAgY29sb3I6ICMwMDA7fVxyXG5cclxuLnN0eWxlMntmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnWWVsbG93dGFpbCcsIGN1cnNpdmU7IGJhY2tncm91bmQ6ICM2ZjRkOGU7XHJcbiAgICBjb2xvcjogI2ZmZjt9XHJcblxyXG4ub25Ib3ZlckRhcms6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQyYjZkICFpbXBvcnRhbnQ7IGNvbG9yOiAjQkFCQUJBICFpbXBvcnRhbnQ7fSJdfQ== */"] });


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
    SERVER_URL: "http://127.0.0.1:5000"
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'quickdraw';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play/play.component */ "f/LG");
/* harmony import */ var _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataset/dataset.component */ "1ZD4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            //NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _play_play_component__WEBPACK_IMPORTED_MODULE_4__["PlayComponent"],
        _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_5__["DatasetComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        //NgbModule
    ] }); })();


/***/ }),

/***/ "f/LG":
/*!****************************************!*\
  !*** ./src/app/play/play.component.ts ***!
  \****************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["myCanvas"];
class PlayComponent {
    constructor(http) {
        this.http = http;
        this.width = 384;
        this.height = 384;
        this.x = "black";
        this.y = 2;
        this.object = '';
    }
    ngAfterViewInit() {
        const canvasEl = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext('2d');
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        this.ctx.lineWidth = this.y;
        this.ctx.strokeStyle = this.x;
        this.eventcapture(canvasEl);
    }
    eventcapture(canvasEl) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])());
        }))
            .subscribe((res) => {
            const rect = canvasEl.getBoundingClientRect();
            const prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            const currPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            this.draw(prevPos, currPos);
        });
    }
    draw(prevPos, currPos) {
        if (!this.ctx) {
            return;
        }
        //this.pathHistory.push([prevPos, currPos]);
        this.ctx.beginPath();
        if (prevPos) {
            this.ctx.moveTo(prevPos.x, prevPos.y);
            this.ctx.lineTo(currPos.x, currPos.y);
            this.ctx.stroke();
        }
    }
    erase() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.object = '';
    }
    sendimage() {
        var canvas = this.canvas.nativeElement;
        var date = Date.now();
        var filename = date + '.png';
        var image = canvas.toDataURL('image/png');
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL + '/play', { filename, image }, { responseType: 'text' }).subscribe((res) => {
            console.log(res);
            this.object = "It's a " + res + "!";
        });
    }
}
PlayComponent.ɵfac = function PlayComponent_Factory(t) { return new (t || PlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlayComponent, selectors: [["app-play"]], viewQuery: function PlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height" }, decls: 26, vars: 1, consts: [[1, "container"], [1, "row", "pt-5"], [1, "col-sm-2"], ["type", "button", "routerLink", "\\home", 1, "btn", 2, "font-size", "15px", "width", "100%", "background", "#fff748", "color", "#000"], [1, "fa", "fa-arrow-left"], [1, "col-lg-7", "text-center"], ["width", "384", "height", "384", 2, "border", "1px solid #000000", "background", "#FFF"], ["myCanvas", ""], [1, "col-lg-3"], [1, "row", "mt-5"], [1, "col", "text-center"], [1, "btn", "btn-success", "shadow", "style1", "rounded-pill", 2, "width", "80%", "font-size", "20px", 3, "click"], [1, "row", "mt-4"], [1, "btn", "btn-danger", "shadow", "style1", "rounded-pill", 2, "width", "80%", "font-size", "20px", 3, "click"], [1, "col-sm-3"], [1, "col-sm-5", "text-center", 2, "font-size", "15px", "width", "100%", "background", "#333333", "color", "#FFF"], [1, "col-sm-4"]], template: function PlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "canvas", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_15_listener() { return ctx.sendimage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Confirm Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_19_listener() { return ctx.erase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Clear Canvas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.object, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    background: #333333;\r\n}\r\n.style1[_ngcontent-%COMP%]{\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: white;}\r\n.onHoverDark[_ngcontent-%COMP%]:hover { background-color: #222222 !important; color: #BABABA !important;}\r\n.background1[_ngcontent-%COMP%]{\r\n    background: #555555\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksUUFBUTtJQUNSLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVksQ0FBQztBQUNqQixxQkFBcUIsb0NBQW9DLEVBQUUseUJBQXlCLENBQUM7QUFDckY7SUFDSTtJQUNBIiwiZmlsZSI6InBsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYm9keXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxufVxyXG4uc3R5bGUxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTt9XHJcbi5vbkhvdmVyRGFyazpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDsgY29sb3I6ICNCQUJBQkEgIWltcG9ydGFudDt9XHJcbi5iYWNrZ3JvdW5kMXtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU1NTVcclxuICAgIH1cclxuXHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataset/dataset.component */ "1ZD4");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play/play.component */ "f/LG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






//export {};
const routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' // prefix
    }, {
        path: 'dataset',
        component: _dataset_dataset_component__WEBPACK_IMPORTED_MODULE_2__["DatasetComponent"]
    }, {
        path: 'play',
        component: _play_play_component__WEBPACK_IMPORTED_MODULE_3__["PlayComponent"]
    }, {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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