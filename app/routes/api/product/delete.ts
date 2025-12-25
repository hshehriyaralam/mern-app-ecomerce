import { deleteProductByShopifyId } from "~/model/product.server";

export async function action({ request }: { request: Request }) {
  try {
    const payload = await request.json();
    const shopifyProductId = String(payload?.id);

    console.log("Webhook payload:", payload);

    await deleteProductByShopifyId(shopifyProductId);

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Webhook failed", { status: 500 });
  }
}
