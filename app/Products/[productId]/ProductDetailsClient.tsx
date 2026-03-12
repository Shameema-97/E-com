"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail?: string;
    category?: string;
    description?: string;
  };
};

export default function ProductDetailsClient({ product }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
        totalPrice: product.price,
      })
    );
    router.push("/Cart");
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div>       
        <div className='container-fluid'>
            <div className='row'>
                <div className='col  text-centerd d-flex justify-content-center gap-1 '>
                  <div className='card h-100 rounded-3 mt-4' style={{width:"18rem"}}>
                  <img src={product?.thumbnail} className="card-img-top p-3" alt={product?.title} 
                    style={{height:'200px',objectFit:'contain'}}  />
                  <div className="card-body" >
                    <h5 className="card-title">{product?.title}</h5>
                    <h5 className='card-price'>₹{product?.price}</h5>
                    <h6 className="card-category">{product?.category}</h6>
                    <p className="text-truncate">{product?.description}</p>
             {/* <b>⭐  {product?.rating?.rate} ({product?.rating?.count} ratings)</b> */}
                    <button className="btn btn-dark me-4 mt-2" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                    <button className="btn btn-dark mt-2" onClick={handleCancel}>
                      Cancel
                    </button>
                   </div>  
                   </div>
                </div>         
            </div>
        </div>
    </div>
 );
}