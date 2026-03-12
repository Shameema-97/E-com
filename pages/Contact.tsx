import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          We’d love to hear from you. Get in touch with us anytime.
        </p>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Get in Touch</h5>

              <p className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" />
                Dubai, United Arab Emirates
              </p>

              <p className="d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-primary" />
                +971 50 123 4567
              </p>

              <p className="d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                support@mystore.com
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
