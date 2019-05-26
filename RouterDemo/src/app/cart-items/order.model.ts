import { Product } from '../sales/product.model';

export class Order {
    public id: number;
    public orderDate : Date;
    public items : Product[];
    public grandTotal : number;
    public discount : number;
}