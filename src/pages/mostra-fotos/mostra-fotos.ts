import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-mostra-fotos",
  templateUrl: "mostra-fotos.html"
})
export class MostraFotosPage {
  public UrlImgRandom: String;
  public img = new Array<any>();
  public contador = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  ionViewDidLoad() {
    this.pesquisar();
  }

  proximaImg() {
    if (this.img.length == this.contador + 1)
    {
      this.pesquisar();
    }
    else
    {
      this.contador = this.contador + 1;
    }
  }

  anteriorImg() {
    if (this.contador > 0){
      this.contador--;
    }

  }

  pesquisar() {
    this.httpRequest.fotosRandon().subscribe(
      response => {
        if (this.img.length != 0){
          this.contador++;
        }
        this.img.push(response.url);

      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
