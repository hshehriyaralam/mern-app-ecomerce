import { connectDB } from "db.server";
import { fetchShopifyProducts } from "./shopify.server";
import { Product } from "~/model/product.server";



export async function syncProdutsFromShopify(){

    try{
        await connectDB()

        const products = await fetchShopifyProducts();
        const shopifyIds: string[] = [];

        for (const product of products){
            const shopifyId = product.id.toString();
            shopifyIds.push(shopifyId);

            await Product.updateOne(
               { shopifyId },
               {
                $set : {
                    shopifyId,
                    title: product.title,
                    vendor : product.vendor,
                    price : product.variants[0]?.price || "0.00",
                    image: product.images[0]?.src || "",
                    inventoryQuantity: product.variants[0]?.inventory_quantity || 0,
                }
               },
               {upsert: true},
            )

            
        }
        await Product.deleteMany({shopifyId: { $nin: shopifyIds } } )
    }catch(error){
        console.error("Error syncing products from Shopify:", error);
    }
}