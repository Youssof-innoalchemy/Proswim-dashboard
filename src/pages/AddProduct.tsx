import AdminMultipleSelect from "../components/AdminMultipleSelect";
import AdminInput from "../components/AdminInput";
import AdminSelect from "../components/AdminSelect";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminTextArea from "../components/AdminTextArea";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(-1);
  const [selectedSport, setSelectedSport] = useState(-1);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<number[]>([]);

  const [priceLBP, setPriceLBP] = useState(0);
  const [priceUSD, setPriceUSD] = useState(0);

  const [brands, setBrands] = useState<{ id: number; title: string }[]>([]);
  const [sports, setSports] = useState<{ id: number; title: string }[]>([]);
  const [categories, setCategories] = useState<{ id: number; title: string }[]>(
    []
  );
  const [genders, setGenders] = useState<{ id: number; title: string }[]>([]);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "shop/brands"
      );

      setBrands(response.data["data"]);
    } catch {
      return;
    }
  };
  const fetchSports = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "shop/sports"
      );

      setSports(response.data["data"]);
    } catch {
      return;
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "shop/categories"
      );

      setCategories(response.data["data"]);
    } catch {
      return;
    }
  };
  const fetchGenders = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "shop/genders"
      );

      setGenders(response.data["data"]);
    } catch {
      return;
    }
  };

  useEffect(() => {
    fetchBrands();
    fetchSports();
    fetchCategories();
    fetchGenders();
  }, []);

  return (
    <div className="bg-white w-full h-full px-5 py-6 rounded-lg">
      <div className="text-2xl font-semibold text-primary mb-5 flex justify-between items-center">
        Add Product
      </div>
      <AdminInput
        label="Title"
        input={title}
        handleChange={(s: string) => setTitle(s)}
      />
      <div className="xl:flex grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-2">
        <AdminInput
          label="Stock"
          type="number"
          input={stock.toString()}
          handleChange={(s: string) => setStock(parseInt(s))}
        />
        <AdminSelect
          label="Brand"
          options={brands}
          selected={selectedBrand}
          handleSelection={(id: number) => setSelectedBrand(id)}
        />
        <AdminSelect
          label="Sport"
          options={sports}
          selected={selectedSport}
          handleSelection={(id: number) => setSelectedSport(id)}
        />
        <AdminMultipleSelect
          label="Categories"
          options={categories}
          selected={selectedCategories}
          handleSelection={(id: number) =>
            setSelectedCategories((prevSelected) =>
              prevSelected.includes(id)
                ? prevSelected.filter((optionId) => optionId !== id)
                : [...prevSelected, id]
            )
          }
        />
        <AdminMultipleSelect
          label="Genders"
          options={genders}
          selected={selectedGenders}
          handleSelection={(id: number) =>
            setSelectedGenders((prevSelected) =>
              prevSelected.includes(id)
                ? prevSelected.filter((optionId) => optionId !== id)
                : [...prevSelected, id]
            )
          }
        />
      </div>
      <div className="xl:flex grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-2">
        <AdminInput
          label="Price LBP"
          type="decimal"
          input={priceLBP.toString()}
          handleChange={(s: string) => setPriceLBP(parseFloat(s))}
        />
        <AdminInput
          label="Price USD"
          type="decimal"
          input={priceUSD.toString()}
          handleChange={(s: string) => setPriceUSD(parseFloat(s))}
        />
      </div>
      <AdminTextArea
        label="Description"
        input={description}
        handleChange={(s: string) => setDescription(s)}
      />
    </div>
  );
};

export default AddProduct;
