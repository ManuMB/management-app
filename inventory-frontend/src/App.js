import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddProduct from "./inventory/AddProduct";
import EditProduct from "./inventory/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/addProduct" element={<AddProduct></AddProduct>} />
          <Route
            exact
            path="/editProduct/:id"
            element={<EditProduct></EditProduct>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
