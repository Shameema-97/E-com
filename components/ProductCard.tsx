import React from 'react'
import Link from 'next/link';
import Image from "next/image";

export default function ProductCard(props:any) {
    var prop=props.products;
  return (
   <div className="col-12 col-md-2 col-lg-2 mb-4 m-3">
        
       <div className='card h-100 mx-auto' style={{width:"13rem"}}>

        {/* imageclikable---------- */}
        <Link href ={`/Products/${prop.id}`}> 
          <Image src={prop.thumbnail} 
           className="card-img-top p-3"
           alt={prop.title}
            height={150}
            width={300}
          style={{ objectFit: "contain" }}/>
            </Link>
         <div className="card-body" >
          <p className="card-title">{prop.title}</p>
          <h6 className='card-price'>₹{prop.price}</h6>
        </div>
 
     </div>
  </div>
  )
}
