webpackJsonp([1],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaRetornoJsonPageModule", function() { return ListaRetornoJsonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_retorno_json__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaRetornoJsonPageModule = /** @class */ (function () {
    function ListaRetornoJsonPageModule() {
    }
    ListaRetornoJsonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_retorno_json__["a" /* ListaRetornoJsonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_retorno_json__["a" /* ListaRetornoJsonPage */]),
            ],
        })
    ], ListaRetornoJsonPageModule);
    return ListaRetornoJsonPageModule;
}());

//# sourceMappingURL=lista-retorno-json.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaRetornoJsonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListaRetornoJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaRetornoJsonPage = /** @class */ (function () {
    function ListaRetornoJsonPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
        this.arrayJson = new Array();
    }
    ListaRetornoJsonPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad ListaRetornoJsonPage");
        this.httpRequest.listarJson().subscribe(function (request) {
            var request = JSON.parse(request._body);
            _this.arrayJson = request;
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    ListaRetornoJsonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-lista-retorno-json",template:/*ion-inline-start:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/lista-retorno-json/lista-retorno-json.html"*/'<ion-header>\n  <ion-navbar> <ion-title>Lista Retorno JSON</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let obj of arrayJson">\n      <p>{{ obj.title }}</p>\n      <p>{{ obj.body }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/lista-retorno-json/lista-retorno-json.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], ListaRetornoJsonPage);
    return ListaRetornoJsonPage;
}());

//# sourceMappingURL=lista-retorno-json.js.map

/***/ })

});
//# sourceMappingURL=1.js.map