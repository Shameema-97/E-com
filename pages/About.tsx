import React from "react";
import { FaTruck, FaLock, FaStar, FaHeadset } from "react-icons/fa";

export default function About() {
  return (
   
    
    <div className="container my-5">

      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Quick.com</h1>
        <p className="text-muted">
          Your trusted online shopping destination
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="fw-semibold mb-3">Who We Are</h3>
          <p>
            Quick.com is a modern e-commerce platform created to provide a
            seamless and enjoyable online shopping experience. We offer a
            wide variety of products including electronics, fashion, beauty,
            and accessories at competitive prices.
          </p>

          <p>
            Our platform is designed with customers in mind, focusing on
            convenience, quality, and reliability.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="img-fluid rounded shadow"
            alt="About"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5">
        <h3 className="text-center fw-semibold mb-4">Why Choose Us</h3>

        <div className="row text-center">

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <FaStar size={40} className="text-warning mb-3 mx-auto"/>
              <h5>Quality Products</h5>
              <p className="text-muted">
                We carefully select the best products from trusted brands.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <FaLock size={40} className="text-primary mb-3 mx-auto"/>
              <h5>Secure Payments</h5>
              <p className="text-muted">
                Your transactions are protected with secure payment systems.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <FaTruck size={40} className="text-success mb-3 mx-auto"/>
              <h5>Fast Delivery</h5>
              <p className="text-muted">
                Reliable and quick delivery across multiple locations.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <FaHeadset size={40} className="text-danger mb-3 mx-auto"/>
              <h5>24/7 Support</h5>
              <p className="text-muted">
                Our support team is always ready to assist you.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-light p-5 rounded text-center">
        <h3 className="fw-semibold">Our Vision</h3>
        <p className="text-muted">
          To become a customer-first e-commerce platform delivering trust,
          convenience, and value with every order.
        </p>
      </div>

    </div>

  );
}