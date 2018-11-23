webpackJsonp([2],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaObjetosPageModule", function() { return ListaObjetosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_objetos__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaObjetosPageModule = /** @class */ (function () {
    function ListaObjetosPageModule() {
    }
    ListaObjetosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_objetos__["a" /* ListaObjetosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_objetos__["a" /* ListaObjetosPage */]),
            ],
        })
    ], ListaObjetosPageModule);
    return ListaObjetosPageModule;
}());

//# sourceMappingURL=lista-objetos.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaObjetosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the ListaObjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaObjetosPage = /** @class */ (function () {
    function ListaObjetosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contatos = [
            {
                nome: "Pedro",
                img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png",
                menssagem: "Buenas tchê"
            },
            {
                nome: "João",
                img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-buzz.png",
                menssagem: "Fala aí meu"
            },
            {
                nome: "Maria",
                img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-jessie.png",
                menssagem: "Olá"
            }
        ];
    }
    ListaObjetosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaObjetosPage');
    };
    ListaObjetosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-objetos',template:/*ion-inline-start:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/lista-objetos/lista-objetos.html"*/'<!--\n\n  Generated template for the ListaObjetosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Lista Objetos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>CONTATOS</ion-list-header>\n\n  <ion-item *ngFor="let contato of contatos">\n\n    <ion-avatar item-start>\n\n      <img src= "{{ contato.img }}">\n\n    </ion-avatar>\n\n    <h2>{{ contato.nome }}</h2>\n\n    <p>{{ contato.menssagem }}</p>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vazdhrv/Área de Trabalho/projeto-ionic/src/pages/lista-objetos/lista-objetos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListaObjetosPage);
    return ListaObjetosPage;
}());

//# sourceMappingURL=lista-objetos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map