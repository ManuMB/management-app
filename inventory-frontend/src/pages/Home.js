import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await fetch("/products");
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      console.error("Failed to fetch products");
      toast.error("Failed to fetch products.");
    }
  };

  const deleteProduct = async (id) => {
    const response = await fetch(`/product/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      loadProducts();
      toast.success(`Product with ID: ${id} has been deleted.`);
    } else {
      console.error(`Failed to delete product with ID: ${id}`);
      toast.error(`Failed to delete product with ID: ${id}.`);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Num</th>
              <th scope="col">Product Name</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Currency</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.brandName}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.curr}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editProduct/${product.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
