import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { ProductModel } from "../models";
import AddCircle from "../icons/AddCircle";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "shop/products"
      );
      console.log(response.data["data"]);

      setProducts(response.data["data"]);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white w-full h-full px-5 py-6 rounded-lg">
      <div className="text-2xl font-semibold text-primary mb-5 flex justify-between items-center">
        Products{" "}
        <AddCircle
          handleClick={() => {
            navigate("/products/add");
          }}
          size="8"
        />
      </div>

      {loading ? (
        <div>Loading Products...</div>
      ) : (
        products && (
          <div className="flex flex-wrap gap-3">
            {products.map((prod) => (
              <ProductCard
                key={prod.id}
                images={prod.images}
                brand={prod.brand}
                title={prod.product_info[0].title}
                price={
                  prod.price.find((p) => p.currency === "lbp")?.value ||
                  "Price not available"
                }
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Products;
