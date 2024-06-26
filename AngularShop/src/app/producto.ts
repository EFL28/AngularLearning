export interface Producto {
    id?: number;
    reference: number;
    name: string;
    description: string;
    price: number;
    category: number;
    stock: number;
    sale: boolean;
    imageURL: string;
    //imageURLs: string[];
    //image: string;
}
