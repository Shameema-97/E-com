// "use client";
import React from 'react';  
import Link from 'next/link';
import { Productservice } from '../../Service/Product-service';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductDetails(props:any) {

     const param = await props.params;
     const productId = param.productId;

     const product= await Productservice.getproductbyId(productId)
     if(!product){
        return <h2>Product not found</h2>
     }
   return <ProductDetailsClient product={product}/>
//   return (

//    <div>
//         <div className='container-fluid'>
//             <div className='row'>
//                 <div className='col  text-centerd d-flex justify-content-center gap-1 '>
//                     <div className='card h-100 rounded-3 mt-4' style={{width:"18rem"}}>
//                      <img src={product?.thumbnail} className="card-img-top p-3" alt={product?.title} 
//                       style={{height:'200px',objectFit:'contain'}}  />
//                     <div className="card-body" >
//                         <h5 className="card-title">{product?.title}</h5>
//                         <h5 className='card-price'>₹{product?.price}</h5>
//                         <h6 className="card-category">{product?.category}</h6>
//                         <p className="text-truncate">{product?.description}</p>
//                         {/* <b>⭐  {product?.rating?.rate} ({product?.rating?.count} ratings)</b> */}
//                         <Link href='/Cart'><button className="btn btn-dark me-4 mt-2">Add to cart </button></Link>
//                         <Link href='/Products'> <button className="btn btn-dark mt-2"> Cancel</button></Link>
//                     </div>  
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
}
