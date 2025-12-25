
export async function fetchShopifyProducts(){
    try{
    const SHOP = process.env.SHOPIFY_STORE_URL;
    const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
    const VERSION = process.env.SHOPIFY_API_VERSION;

    if(!SHOP || !TOKEN || !VERSION){
        throw new Error("Missing Shopify environment variables");}

    const response = await fetch(`https://${SHOP}/admin/api/${VERSION}/products.json`,{
        headers:{
            "X-Shopify-Access-Token": TOKEN
        }
    });
    if(!response.ok){
        throw new Error("Failed to fetch products from Shopify"); }

        const data = await response.json();
        return data.products;
    } catch(error){
        console.error("Error fetching Shopify products:", error);
        throw error;   
    }
}

