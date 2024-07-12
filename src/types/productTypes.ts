export type ProductTypes = {
  id: number;
  discount_percent: number;
  rating: number;
  price: number;
  product_details: ProductDetailTypes;
};

export type ProductColorTypes = {
  id: number;
  hex_code: string;
  name: string;
};

export type ProductDetailTypes = {
  img_url: string;
  model: string;
  product_brands: ProductBrandTypes;
};

export type ProductBrandTypes = {
  name: string;
  model: string;
};
