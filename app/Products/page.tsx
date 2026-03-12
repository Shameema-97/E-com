import React from 'react'
import ProductCard from '../../components/ProductCard';
import { Productservice } from '../Service/Product-service';

export default async function Products() {
    const products= await Productservice.getallproducts();
  return (
    <div>
            <div className='container-fluid'>
              <h2 className='text-center'>Product List</h2>
              <div className='row '>
                <div className='col p-3 mb-4 text-centerd d-flex flex-wrap gap-1 '>
                   {products.map((p: any) => (
                   <ProductCard key={p.id} products={p} />
                   ))}
                </div>
              </div>
            </div>
        </div>
    
  )
}
