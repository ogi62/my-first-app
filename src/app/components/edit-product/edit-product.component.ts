import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  editForm!: FormGroup;
  productRef: any;

  constructor(
    private productService: ProductsService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      title: [''],
      image: [''],
      description: [''],
      quantity: [0],
      price: [0],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(id).subscribe((res) => {
      this.productRef = history.state.data.item;

      this.editForm = this.formBuilder.group({
        title: [this.productRef.title],
        description: [this.productRef.description],
        image: [this.productRef.image],
        price: [this.productRef.price],
        quantity: [this.productRef.quantity],
      });
    });
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.updateProduct(this.editForm.value, id);
    this.router.navigate(['/admin/products']);
  }

  goBack() {
    this.router.navigate(['/admin/products']);
  }
}
