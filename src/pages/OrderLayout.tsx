import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const OrderLayout = () => {
  return (
    <div className="w-full md:ml-[300px]">
      <Navbar
        links={[
          { title: "Products", path: "/products" },
          { title: "Orders", path: "/orders" },
        ]}
      />
      <div className="m-3">
        <Outlet />
      </div>
    </div>
  );
};

export default OrderLayout;
