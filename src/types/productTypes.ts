export type ProductTypes = {
  id: number;
  discount_percent: number;
  rating: number;
  price: number;
  image: string;
  model: string;
  product_brands: ProductBrandTypes;
};

export type ProductColorTypes = {
  id: number;
  hex_code: string;
  name: string;
};

export type ProductBrandTypes = {
  name: string;
  model: string;
};
