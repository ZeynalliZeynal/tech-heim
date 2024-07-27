interface DProducts {
  id: number;
  discount_percent: number | null;
  rating: number | null;
  price: number | null;
  image: string | undefined;
  model: string | null;
  category_id: number | null;
  subcategory_id: number | null;
  brand_id: number | null;
  guarantee_period: number | null;
  created_at: Date | null;
  updated: Date | null;
  in_stock: boolean | null;
  guaranteed: boolean | null;
  free_delivery: boolean | null;
  discount_time_left: string | null;
  detail: JSON | null;

  product_brands: DBrands;
}

interface DColors {
  id: number;
  hex_code: string;
  name: string;
}

interface DBrands {
  name: string;
  logo: string | null;
  subcategory_id: number | null;
}

interface DCartItem {
  id?: number;
  created_at?: Date;
  user_id: string | undefined;
  product_id: number;
  quantity?: number;
  color?: string | undefined;
}

interface DUserAttributes {
  email?: string;
  password?: string;
  phone?: string;
  data?: {
    fullName?: string;
    avatar?: File;
    address?: string;
  };
}
