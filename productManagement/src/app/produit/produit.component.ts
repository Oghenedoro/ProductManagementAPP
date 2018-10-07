import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Produit } from '../shared/produit';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  //public produits: Observable<IProduit[]>;
  public produits: Produit[];
  formProduit: FormGroup;
  operation: string = 'add';
  selectedProduit: Produit;

  constructor(private produitService: ProduitService, private fb: FormBuilder) {

    this.createForm();
  }


  ngOnInit() {
    this.initProduit();
    this.loadProduits();

  }

  loadProduits() {
    this.produitService.getProduits().subscribe(
      data => { this.produits = data },
      error => { console.log("Error occured !") },
      () => { console.log("Done successfully !") }
    );
  }

  addProduit() {
    const p = this.formProduit.value;
    this.produitService.ajouterProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }


  editProduit() {
    this.produitService.modifieProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();

      }
    );
  }

  initProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
  }

  createForm() {
    this.formProduit = this.fb.group({
      ref: ['', Validators.required],
      nom: '',
      prixUnitaire: '',
      quantity: ''

    });

  }

  deleteProduit() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.produitService.removeProduit(this.selectedProduit.ref).subscribe(
        res => {
          this.selectedProduit = new Produit();
          this.loadProduits();
        }
      );
    }
  }
}
