webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraFotosPageModule", function() { return MostraFotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mostra_fotos__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MostraFotosPageModule = /** @class */ (function () {
    function MostraFotosPageModule() {
    }
    MostraFotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mostra_fotos__["a" /* MostraFotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mostra_fotos__["a" /* MostraFotosPage */]),
            ],
        })
    ], MostraFotosPageModule);
    return MostraFotosPageModule;
}());

//# sourceMappingURL=mostra-fotos.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraFotosPage; });
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



var MostraFotosPage = /** @class */ (function () {
    function MostraFotosPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
        this.img = new Array();
        this.contador = 0;
    }
    MostraFotosPage.prototype.ionViewDidLoad = function () {
        this.pesquisar();
    };
    MostraFotosPage.prototype.proximaImg = function () {
        if (this.img.length == this.contador + 1) {
            this.pesquisar();
        }
        else {
            this.contador = this.contador + 1;
        }
    };
    MostraFotosPage.prototype.anteriorImg = function () {
        if (this.contador > 0) {
            this.contador--;
        }
    };
    MostraFotosPage.prototype.pesquisar = function () {
        var _this = this;
        this.httpRequest.fotosRandon().subscribe(function (response) {
            if (_this.img.length != 0) {
                _this.contador++;
            }
            _this.img.push(response.url);
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    MostraFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-mostra-fotos",template:/*ion-inline-start:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/mostra-fotos/mostra-fotos.html"*/'<!--\n  Generated template for the MostraFotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar> <ion-title>Mostra Fotos</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-list>\n      <img src="{{img[contador]}}" />\n\n      <ion-item>\n        <button ion-button icon-start clear item-start (click)="anteriorImg()">\n          Anterior\n        </button>\n\n\n        <button ion-button icon-start clear item-end (click)="proximaImg()">\n          Próximo\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/mostra-fotos/mostra-fotos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], MostraFotosPage);
    return MostraFotosPage;
}());

//# sourceMappingURL=mostra-fotos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map