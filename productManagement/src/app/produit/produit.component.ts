import { Component, OnInit } from '@angular/core';
import  { ProduitService } from './produit.service';
import  {  Produit  }  from '../shared/produit';
import  { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

    public produits:Produit[];
    formProduit : FormGroup;

  constructor(private produitService:ProduitService, private fb:FormBuilder) {

      this.formProduit = this.fb.group({
      nom : ['', Validators.required],
      prixUnitaire: '',
      quantity: ''

     });
  }


  ngOnInit() {
     this.produits = this.produitService.getProduits();
  }

}
