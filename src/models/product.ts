// Define the ProductModel type
export type ProductModel = {
  id: number;
  title: string;
  description: string;
  brand: { id: number; title: string };
  sport: { id: number; title: string };
  stock: number;
  categories: { id: number; title: string }[];
  genders: { id: number; title: string }[];
  product_info: { title: string; description: string }[];
  sizes: string[]; // Array of available sizes
  images: {
    generic: string[]; // Array of generic images
    colored: { color: string; images: string[] }[]; // Array of colored images with color and images
  };
  price: { currency: string; value: string }[];
  created_at: string; // Creation date
  updated_at: string; // Last update date
};

// Function to convert JSON to ProductModel
export const fromJsonToProduct = (json: any): ProductModel => {
  return {
    id: json.id,
    title: json.title,
    description: json.description,
    brand: {
      id: json.brand.id,
      title: json.brand.title,
    },
    sport: {
      id: json.sport.id,
      title: json.sport.title,
    },
    stock: json.stock,
    categories: json.categories.map(
      (category: { id: number; title: string }) => ({
        id: category.id,
        title: category.title,
      })
    ),
    genders: json.genders.map((gender: { id: number; title: string }) => ({
      id: gender.id,
      title: gender.title,
    })),
    product_info: json.product_info.map(
      (info: { title: string; description: string }) => ({
        title: info.title,
        description: info.description,
      })
    ),
    sizes: json.sizes,
    images: {
      generic: json.images.generic,
      colored: json.images.colored.map(
        (colored: { color: string; images: string[] }) => ({
          color: colored.color,
          images: colored.images,
        })
      ),
    },
    price: json.price.map((priceItem: { currency: string; value: string }) => ({
      currency: priceItem.currency,
      value: priceItem.value,
    })),
    created_at: json.created_at,
    updated_at: json.updated_at,
  };
};
