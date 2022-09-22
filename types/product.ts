export interface IProductData {
  _id: string;
  name: string;
  details: string;
  images: IProductImage[];
  price: number;
  quantity: number;
  slug: {
    current: string;
  };
}

export interface IProductImage {
  asset: {
    _ref: string;
  };
  options?: {
    hotspot?: boolean;
  };
}
