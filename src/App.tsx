import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import ProductLayout from "./pages/ProductLaytout";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import OrderLayout from "./pages/OrderLayout";

function App() {
  return (
    <Router>
      <div className="md:flex block min-h-screen bg-[#edf6ff]">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
          <Route path="/orders" element={<OrderLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
