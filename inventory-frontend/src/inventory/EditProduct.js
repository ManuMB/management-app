import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProduct() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      toast.success(`Product with ID: ${id} has been updated.`, {
        autoClose: 1500,
        onClose: () => navigate("/"),
      });
    } else {
      console.error("Error updating product");
    }
  };

  const loadProduct = async () => {
    const response = await fetch(`/product/${id}`);

    if (response.ok) {
      const data = await response.json();
      setProduct(data);
    } else {
      console.error("Error loading product");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>

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
                placeholder="Enter currency ISO"
                name="curr"
                value={curr}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
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
