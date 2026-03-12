import { Servicebase } from "./Service-base";
export class Productservice extends Servicebase{

    static async getallproducts() {
     const response= await fetch(`${this.API_URL}/products`);
     const data= await response.json();
     return data.products;
    }

    static async getproductbyId(id:any){
        const response= await fetch(`${this.API_URL}/products/${id}`)
        const data= await response.json();
        return data;
    }
}