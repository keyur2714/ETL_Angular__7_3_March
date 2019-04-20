import { Category } from './category.model';

export class Item{
    public id: number;
    public code:string;
    public desc:string;
    public price:string;
    public category:Category;
}