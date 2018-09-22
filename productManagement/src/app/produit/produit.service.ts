import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

    private produits : Produit[]=[];

     constructor() { 
      let p1 : Produit = new Produit();
      let p2 : Produit = new Produit();
      let p3 : Produit = new Produit();
      let p4 : Produit = new Produit();

      p1.nom = "book";
      p1.prixUnitaire = 12;
      p1.quantity = 29;

      p2.nom = "phone";
      p2.prixUnitaire = 15;
      p2.quantity = 10;

      p3.nom = "comp";
      p3.prixUnitaire = 6;
      p3.quantity = 20;

      p4.nom = "chair";
      p4.prixUnitaire = 9;
      p4.quantity = 23;

      this.produits.push(p1);
      this.produits.push(p2);
      this.produits.push(p3);
      this.produits.push(p4);
    }
  
  getProduits():Produit[]{
      return this.produits;
    }
}
