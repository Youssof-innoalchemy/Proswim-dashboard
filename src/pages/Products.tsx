import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { fromJsonToProduct, ProductModel } from "../models/product";
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
      const productsData = response.data["data"].map((data: any) =>
        fromJsonToProduct(data)
      );

      setProducts(productsData);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  const deleteProduct = async (id: string) => {
    try {
      const response = await axios.delete(
        process.env.REACT_APP_BASE_URL + "shop/products/" + id
      );

      setProducts((prevProd) =>
        prevProd.filter((prod) => prod.id.toString() !== id)
      );

      console.log(response);
    } catch {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white w-full h-full px-5 py-6 rounded-lg">
      <div className="text-2xl font-semibold text-primary mb-5 flex justify-between items-center">
        Products
        <AddCircle
          handleClick={() => {
            navigate("/products/add");
          }}
          size="h-8 w-8"
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
                id={prod.id.toString()}
                images={prod.images}
                brand={prod.brand.title}
                title={prod.title}
                price={
                  prod.price.find((p) => p.currency === "lbp")?.value ||
                  "Price not available"
                }
                onDelete={() => deleteProduct(prod.id.toString())}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Products;
