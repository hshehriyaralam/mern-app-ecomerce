import { createOrUpdateProduct } from "~/model/product.server";

export async function action({ request }: { request: Request }) {
  try {
    const payload = await request.json();

    const productData = {
      shopifyId: String(payload?.id),
      title: payload?.title,
      price: payload?.variants?.[0]?.price || "0",
      vendor: payload?.vendor || "",
      image: payload?.images?.[0]?.src || "",
      inventoryQuantity: payload?.variants?.[0]?.inventory_quantity || 0
    };

    await createOrUpdateProduct(productData);

    console.log("Product updated via webhook:", productData);
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Update Webhook error:", error);
    return new Response("Webhook failed", { status: 500 });
  }
}
