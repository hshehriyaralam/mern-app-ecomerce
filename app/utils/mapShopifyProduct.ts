export function mapShopifyProduct (payload: any) {
    return{
        shopifyId : String(payload.id),
        title : payload.title ?? "",
        vendor : payload.vendor ?? "",
        price : payload.variants?.[0]?.price ?? "0.00",
        image : payload.images?.[0]?.src  ?? "",
        inventoryQuantity: payload.variants?.[0]?.inventoryQuantity ?? 0,

     }
}