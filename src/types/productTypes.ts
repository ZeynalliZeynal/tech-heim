export type ProductTypes = {
  id: number;
  discount_percent: number;
  rating: number;
  price: number;
};

export type ProductColorTypes = {
  id: number;
  hex_code: string;
  name: string;
};

export type ProductDetailTypes = {
  img_url: string;
  model: string;
};

export type ProductBrandTypes = {
  name: string;
  model: string;
};
