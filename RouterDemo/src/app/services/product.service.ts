import { Product } from '../sales/product.model';

export class ProductService {

    productList : Product[] = [];

    getProductList():Product[]{
        let product1 = new Product(1,'apple','Apple',200,1,200);
        let product2 = new Product(2,'banana','Banana',40,1,40);
        let product3 = new Product(3,'custerdapple','C Apple',100,1,100);
        let product4 = new Product(4,'guava','Guava',60,1,60);
        let product5 = new Product(5,'mango','Mango',300,1,300);
        let product6 = new Product(6,'pineapple','Pineapple',60,1,60);
        let product7 = new Product(7,'strawberry','Strawberry',100,1,100);
        let product8 = new Product(8,'watermelon','Water Melon',60,1,60);

        this.productList.push(product1);
        this.productList.push(product2);
        this.productList.push(product3);
        this.productList.push(product4);
        this.productList.push(product5);
        this.productList.push(product6);
        this.productList.push(product7);
        this.productList.push(product8);

        return this.productList;
    }
}