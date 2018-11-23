import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class HttpRequestProvider {
  constructor(public http: Http) {
    console.log("Hello HttpRequestProvider Provider");
  }

  public fotosRandon() {
    return this.http.get("https://picsum.photos/2000/450/?random");
  }

  public getFotosLista() {
    return this.http.get("https://picsum.photos/list");
  }

  public listarJson() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
