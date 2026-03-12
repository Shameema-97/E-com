"use client"; // Must be at the top for Client Component

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../cartSlice"; 
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cart() {

  const router = useRouter();
  const dispatch = useDispatch();

  type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnail?: string; // or image
};

  const cartItems = useSelector((state: any) => state.cart.cartItems) as CartItem[];

  // Continue shopping (go back)
  function cancel() {
    router.push("/Products");
  }

  // If cart is empty
  if (cartItems.length === 0) {
    return <h2 className="text-center mt-5">Cart is Empty</h2>;
  }

  // Total cart price
  const totalPrice = cartItems.reduce(
    (sum:number, item: CartItem) => sum + item.totalPrice,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Cart</h2>

      <div className="row">
        {cartItems.map((item: any) => (
          <div
            key={item.id}
            className="col-12 col-md-4 d-flex justify-content-center"
          >
            <div className="card h-100 rounded-3 mt-4" style={{ width: "19rem" }}>

              <Image
                src={item.thumbnail || item.image} // your product image field
                alt={item.title}
                width={300}
                height={200}
                style={{ objectFit: "contain" }}
                className="card-img-top p-3"
              />

              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-price">₹{item.price}</h5>
                <p>Quantity: {item.quantity}</p>
                <h6>Total: ₹{item.price * item.quantity}</h6>

                <button
                  className="btn btn-dark mt-2 me-2"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Buy now
                </button>

                <button className="btn btn-dark mt-2" onClick={cancel}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-4 text-end">Grand Total: ₹{totalPrice}</h4>
    </div>
  );
}