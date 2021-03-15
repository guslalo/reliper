
export interface Brand {
    id: number;
    name: string;
    slug?: any;
    description: string;
    image?: any;
    style: string;
    state: string;
    order: number;
    organization: number;
    parent?: any;
    images: any[];
}

export interface Categories {
    id: number;
    name: string;
    slug?: any;
    description: string;
    image?: any;
    style: string;
    state: string;
    order: number;
    organization: number;
    parent?: Categories;
    images: any[];
}

export interface Product {
    id: number;
    created: Date;
    modified: Date;
    is_removed: boolean;
    name: string;
    slug: string;
    description: string;
    image: string;
    style: string;
    state: string;
    length: string;
    width: string;
    height: string;
    sku: string;
    short_description: string;
    price_1: string;
    price_2: string;
    weight?: any;
    manage_stock: boolean;
    stock_quantity?: any;
    stock_status: string;
    virtual: boolean;
    organization: number;
    parent?: any;
    brand: Brand;
    images: any[];
    categories: Categories[];
    variations?: any;
}


export class ProductView implements Product{
    id: number;
    created: Date;
    modified: Date;
    is_removed: boolean;
    name: string;
    slug: string;
    description: string;
    image: string;
    style: string;
    state: string;
    length: string;
    width: string;
    height: string;
    sku: string;
    short_description: string;
    price_1: string;
    price_2: string;
    weight?: any;
    manage_stock: boolean;
    stock_quantity?: any;
    stock_status: string;
    virtual: boolean;
    organization: number;
    parent?: any;
    brand: Brand;
    images: any[];
    categories: Categories[];
    variations?: any;
    quatitySelect?: number = 0;

    constructor(){
        this.quatitySelect = 1;
    }

}