import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-4 mt-3">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-6 col-md-3 mb-3">
            <h6>Get to know Us</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h6>Shop with Us</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Your Account</a></li>
              <li><a href="#" className="text-white text-decoration-none">Your Orders</a></li>
              <li><a href="#" className="text-white text-decoration-none">Your Address</a></li>
              <li><a href="#" className="text-white text-decoration-none">Your Lists</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h6>Make money with Us</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Protect and build your brand</a></li>
              <li><a href="#" className="text-white text-decoration-none">Become an Affiliate</a></li>
              <li><a href="#" className="text-white text-decoration-none">Advertise Your Products</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h6>Let us help You</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Help</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping & Delivery</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns & Replacement</a></li>
              <li><a href="#" className="text-white text-decoration-none">App Download</a></li>
            </ul>
          </div>

        </div>

        <div className=" text-center   mt-3">
          <a href="#" className="text-white me-3 text-decoration-none">Twitter</a>
          <a href="#" className="text-white me-3 text-decoration-none">Facebook</a>
          <a href="#" className="text-white text-decoration-none">Instagram</a>
        </div>

      </div>
    </footer>
  )
}

