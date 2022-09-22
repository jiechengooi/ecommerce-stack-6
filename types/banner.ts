import { IProductImage } from "./product";

export interface IBannerData {
  _id: string;
  product: string;
  productImage: IProductImage;
  buttonText: string;
  smallText?: string;
  midText?: string;
  largeText?: string;
  discount?: string;
  discountTime?: string;
  productSlug: { current: string };
}
