"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { login, logout } from "../authSlice";

export default function Navbar() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state: any) => state.auth);
  const cart = useSelector((state: any) => state.cart.cartItems);

  // calculate total number of items in cart
  const cartCount = cart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    dispatch(login({ email }));
    alert("Successfully Logged in!!!");

    setEmail("");
    setPassword("");

    router.push("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">

        <Link href="/" className="navbar-brand">
          <h2 style={{ color: "orange" }}>Quick.com</h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex align-items-center text-white me-3">
          <i className="bi bi-geo-alt-fill fs-5 me-1"></i>
          <small>Deliver to Sharjah</small>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link href="/Products" className="nav-link">Products</Link>
            </li>

            <li className="nav-item">
              <Link href="/About" className="nav-link">About Us</Link>
            </li>

            <li className="nav-item">
              <Link href="/Contact" className="nav-link">Contact Us</Link>
            </li>

            <li className="nav-item">
              <Link href="/Cart" className="nav-link">
                <i className="bi bi-cart"></i> Cart
                {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-30 start-30 translate-middle">
                {cartCount}
                </span>
               )}  
              
              </Link>
            </li>

          </ul>
        </div>

        {/* Login Button */}
        {!auth?.user ? (
          <button
            className="btn btn-dark me-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Login
          </button>
        ) : (
          <button className="btn btn-danger me-3" onClick={handleLogout}>
            Logout
          </button>
        )}

        {/* Search Bar */}
        <div className="position-relative">
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"/>
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search products"
          />
        </div>

      </div>

      {/* Login Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>

              <button
                className="btn btn-dark"
                data-bs-dismiss="modal"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

          </div>
        </div>
      </div>

    </nav>
  );
}