import React from 'react'
import Image from "next/image";

export default function TopDealsCard(props:any) {
 var prod=props.deal
  return (
    <div className="col-12 col-md-6 col-lg-2 mb-4 m-2">
        <div className='card h-100 rounded-3' style={{width:"13rem"}}>
           <Image src={prod.image} className="card-img-top p-3" alt="" style={{objectFit:'contain'}} height={150} width={200} />
           <div className="card-body" >
              <p className="card-title">{prod.title}</p>
              <h6 className='card-price'>{prod.price}</h6>
              <a href="#" className="btn btn-dark">Buy Now</a>
            </div>
        </div>
    </div>
  )
}
