webpackJsonp([3],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFotosPageModule", function() { return ListaFotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_fotos__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaFotosPageModule = /** @class */ (function () {
    function ListaFotosPageModule() {
    }
    ListaFotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_fotos__["a" /* ListaFotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_fotos__["a" /* ListaFotosPage */]),
            ],
        })
    ], ListaFotosPageModule);
    return ListaFotosPageModule;
}());

//# sourceMappingURL=lista-fotos.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaFotosPage = /** @class */ (function () {
    function ListaFotosPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
        this.arrayObj = [];
    }
    ListaFotosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpRequest.getFotosLista().subscribe(function (request) {
            var obj = JSON.parse(request._body);
            for (var i = 0; i < 50; i++) {
                var aux = obj[i];
                aux.img = "https://picsum.photos/2000/300?image=" + aux.id;
                _this.arrayObj.push(aux);
            }
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    ListaFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-lista-fotos",template:/*ion-inline-start:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/lista-fotos/lista-fotos.html"*/'<ion-header>\n  <ion-navbar> <ion-title>Lista Fotos</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let obj of arrayObj">\n    <ion-card-content>\n      <p>{{ obj.author }}</p>\n    </ion-card-content>\n    <img src="{{ obj.img }}" />\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/lista-fotos/lista-fotos.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__["a" /* HttpRequestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__["a" /* HttpRequestProvider */]) === "function" && _c || Object])
    ], ListaFotosPage);
    return ListaFotosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=lista-fotos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map