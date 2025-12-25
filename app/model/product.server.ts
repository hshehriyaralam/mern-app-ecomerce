import mongoose from "mongoose";
import type { IProduct } from "~/types/products"
import { connectDB } from "db.server";

const productShema = new mongoose.Schema<IProduct>({

    shopifyId: String,
    title: String,
    price: String,
    vendor: String,
    image : String,
    inventoryQuantity: Number,
},{ collection: "shopifyProducts" })


export const Product = mongoose.models.Product || mongoose.model<IProduct>("shopifyProduct", productShema);


export async function getProducts(): Promise<IProduct[]> {
  await connectDB();
  return await Product.find().lean();
}


export async function createOrUpdateProduct(productData: IProduct) {
  await connectDB();
  const existing = await Product.findOne({ shopifyId: productData.shopifyId });
  if (existing) {
    // Update existing product
    return Product.findOneAndUpdate(
      { shopifyId: productData.shopifyId },
      productData,
      { new: true }
    );
  } else {
    // Create new product
    const product = new Product(productData);
    return product.save();
  }
}


export async function deleteProductByShopifyId(shopifyId: string) {
  await connectDB();
  return Product.findOneAndDelete({ shopifyId });
}


export async function upsertProduct(productData: IProduct) {
  await connectDB();
  return Product.findOneAndUpdate(
    {shopifyId : productData.shopifyId},
    {$set : productData},
    {upsert : true, new : true}
  )
}



