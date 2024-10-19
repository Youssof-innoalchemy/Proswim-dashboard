export type ProductModel = {
  brand: string; // Brand ID or name
  categories: string[]; // Array of category names
  colors: string[]; // Array of color names
  created_at: string; // ISO date string for creation date
  genders: string[]; // Array of gender labels (e.g., 'Male', 'Female')
  id: number; // Unique product ID
  images: string[]; // Array of image URLs
  price: {
    currency: string;
    value: string;
  }[]; // Array of price objects for different currencies
  product_info: {
    title: string; // Product info title
    description: string; // Product description
  }[]; // Array of product info objects
  sport: string; // Sport ID or name
  stock: number; // Stock quantity available
  updated_at: string; // ISO date string for last updated date
};
