import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inventory Management
          </Link>

          <Link className="btn btn-outline-light" to="/addProduct">
            Add Product
          </Link>
        </div>
      </nav>
    </div>
  );
}
