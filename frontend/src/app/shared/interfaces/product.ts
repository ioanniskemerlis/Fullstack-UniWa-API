export interface Product {
    name: string,
    description: string,
    price: string,
    category: string,
    stock: string,
    id:string,
}

export interface FProduct {

    name: string,
    description: string,
    price: string,
    category: string,
    stock: string,
    _id:string
    

}

export interface EProduct {

    name: string,
    description: string,
    price: string,
    category: string,
    stock: string,
    

}

export const ManyProduct: EProduct[] = [
    {
      "name": "παντοφλες",
      "description": "μαυρες ανατομικες",
      "price": "50",
      "category": "υποδηματα",
      "stock": "10"
    }
]
