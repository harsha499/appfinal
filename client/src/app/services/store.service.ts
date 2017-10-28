import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { Product } from '../models/products';
import { Cart } from '../models/cart';

@Injectable()
export class StoreService {
    private headers: Headers;
    constructor(private http: Http) { }
    GetProducts() {
        return this.http.get(environment.apiAddress + '/products.json').map((res) => {
            const data = res.json();
            const products: Product[] = [];
            // tslint:disable-next-line:forin
            for (const key in data) {
                const product: Product = data[key];
                product.productId = key;
                products.push(product);
            }
            return products;
        }).catch((err) => Observable.throw(err));
    }
    SaveCart(cart: Cart): Observable<string> {
        return this.http.post(environment.apiAddress + '/carts.json', JSON.stringify(cart),
            { headers: this.headers }).map((res) => {
                return res.json();
            }).catch((err) => Observable.throw(err));
    }
}
