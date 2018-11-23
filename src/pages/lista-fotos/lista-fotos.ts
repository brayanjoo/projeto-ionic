import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpRequestProvider } from "../../providers/http-request/http-request";

@IonicPage()
@Component({
  selector: "page-lista-fotos",
  templateUrl: "lista-fotos.html"
})
export class ListaFotosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  arrayObj = [];
  ionViewDidLoad() {
    this.httpRequest.getFotosLista().subscribe(
      (request: any) => {
        var obj = JSON.parse(request._body);
        for (let i = 0; i < 50; i++) {
          var aux = obj[i];
          aux.img = "https://picsum.photos/2000/300?image=" + aux.id;
          this.arrayObj.push(aux);
        }
      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
