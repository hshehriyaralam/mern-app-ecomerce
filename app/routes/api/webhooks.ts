import { upsertProduct, deleteProductByShopifyId } from "~/model/product.server";
import { mapShopifyProduct } from "~/utils/mapShopifyProduct";
import { verifyShopifyWebhook } from "~/utils/verifyShopifyWebhook";

export async function action({ request }: { request: Request }) {
    const bodyBuffer = await request.arrayBuffer();
    const body = Buffer.from(bodyBuffer).toString('utf8');
    
    const isValid = await verifyShopifyWebhook(request, body);
    
    if (!isValid) {
        console.error('❌ Webhook verification failed');
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const payload = JSON.parse(body);
        const topic = request.headers.get("X-Shopify-Topic") || "";

        if (topic === "products/delete") {
            await deleteProductByShopifyId(String(payload.id));
        }

        if (topic === "products/create" || topic === "products/update") {
            const productData = mapShopifyProduct(payload);
            await upsertProduct(productData);
        }

        return new Response("OK", { status: 200 });
    } catch (error) {
        console.error('Webhook processing error:', error);
        return new Response("Internal Server Error", { status: 500 });
    }
}