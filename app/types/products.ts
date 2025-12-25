export interface IProduct {
  _id?: undefined | string;
  shopifyId: string;
  title: string;
  vendor: string;
  price: string;
  image?: string;
  inventoryQuantity?: number;
}