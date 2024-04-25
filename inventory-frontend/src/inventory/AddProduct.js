import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProduct() {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    brandName: "",
    stock: "",
    price: "",
    curr: "",
  });

  const { productName, brandName, stock, price, curr } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      toast.success(`Product has been added.`, {
        autoClose: 1500,
        onClose: () => navigate("/"),
      });
    } else {
      console.error("Error adding product");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Product</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Product Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter product name"
                name="productName"
                id="ProductName"
                value={productName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="BrandName" className="form-label">
                Brand Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter brand name"
                name="brandName"
                id="BrandName"
                value={brandName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Stock" className="form-label">
                Stock
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter stock amount"
                name="stock"
                id="Stock"
                value={stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter price"
                name="price"
                id="Price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Currency" className="form-label">
                Currency
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter currency ISO format"
                name="curr"
                id="Currency"
                value={curr}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Add
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
