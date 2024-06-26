import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, Form, FormBuilder } from '@angular/forms';
import { Producto } from '../../producto';
import { NgClass } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormArray } from '@angular/forms';

import { ProductService } from '../../services/product-service.service';
import { SalesService } from '../../services/sales-service.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  errorPrice: boolean = false;
  errorName: boolean = false;

  @Input() searchedProduct: Producto = {
    reference: 0,
    name: '',
    description: '',
    price: 0,
    category: 0,
    stock: 0,
    sale: false,
    imageURL: '',
    //imageURLs: [],
    //image: ''
  };

  imageURLs: string[] = [''];

  constructor(private productService: ProductService, private salesService: SalesService, private api:ApiService) { }

  productForm = new FormGroup({
    reference: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')]),
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50), this.nameValidator]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, this.priceValidator]),
    category: new FormControl('', Validators.required),
    stock: new FormControl('', [Validators.required, Validators.min(100)]),
    sale: new FormControl(''),
    imageURL: new FormControl(),
    imageURLs: new FormBuilder().array([new FormControl()]),
    image: new FormControl()
  });

  product: Producto = {
    reference: 0,
    name: '',
    description: '',
    price: 0,
    category: 0,
    stock: 0,
    sale: false,
    imageURL: '',
    //imageURLs: [],
    //image: ''
  };

  nameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const n = control as FormControl;
    if (n.value === 'Nike Air Jordan 1') {
      return { 'errorName': true };
    }
    return null;
  }

  priceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const p = control as FormControl;
    if (p.value < 0) {
      return { 'errorPrice': true };
    }
    return null;
  }

  invalidInput = {
    border: '1px solid red'
  };

  onSubmit() {
    if (this.productForm.valid) {
      this.product = {
        reference: Number(this.productForm.value.reference),
        name: String(this.productForm.value.name),
        description: String(this.productForm.value.description),
        price: Number(this.productForm.value.price),
        category: Number(this.productForm.value.category),
        stock: Number(this.productForm.value.stock),
        sale: Boolean(this.productForm.value.sale),
        imageURL: String(this.productForm.value.imageURL),
        //imageURLs: this.imageURLs,
        //image: String(this.productForm.value.image)
      };
      //this.productService.addProduct(this.product);
      
      this.api.createProduct(this.product).subscribe();

      if (this.product.sale) {
        this.salesService.addSale(this.product);
      }

      //console.log(this.product);
      
      this.productForm.reset();
    }
  }

  addImageUrlField() {
    // if(this.imageURLs.length < 2) {
    //   this.imageURLs.pop();
      
    // }
    this.imageURLs.push('');
    console.log(this.imageURLs.length+1);
  }

  get reference() {
    return this.productForm.get('reference');
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get price() {
    return this.productForm.get('price');
  }

  get category() {
    return this.productForm.get('category');
  }

  get stock() {
    return this.productForm.get('stock');
  }

  get sale() {
    return this.productForm.get('sale');
  }

  // get image() {
  //   return this.productForm.get('image');
  // }
}
