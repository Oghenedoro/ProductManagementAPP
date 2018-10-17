import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = 'http://localhost:8080/app/prods';

  constructor(private http: HttpClient) { }


  getProduits(): Observable<any> {
    return this.http.get(this.url)
  }

  ajouterProduit(produit: Produit): Observable<any> {

    return this.http.post(`${this.url}`, produit);
  }

  modifieProduit(produit: Produit): Observable<any> {

    return this.http.put(`${this.url}`, produit);
  }

  consulteProduit(ref: string): Observable<any> {

    return this.http.get(this.url + `/${ref}`);
  }

  removeProduit(ref: string): Observable<any> {

    return this.http.delete(`${this.url}/${ref}`);

  }


}
