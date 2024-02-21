import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  productid:number=0;
  products:any;

  constructor(private productsService:ProductsService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productid = this.route.snapshot.params['productid'];
    this.products = new Products();
    this.productsService.getProductById(this.productid).subscribe((data:any)=>{

        console.log(data)
  
        this.products = data[0];
  
        console.log(this.products)
  
    });
  }


}
