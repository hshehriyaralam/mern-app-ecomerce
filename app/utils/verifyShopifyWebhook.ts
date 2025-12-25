import crypto from 'crypto';

export async function verifyShopifyWebhook(request: Request, body: string) {
    const hmacHeader = request.headers.get('X-Shopify-Hmac-Sha256');
    if (!hmacHeader) {
        console.error('❌ HMAC Header missing!');
        return false;
    }
    const secret = process.env.SHOPIFY_WEBHOOK_SECRET?.trim();
    if (!secret) {
        return false;
    }
    const hash = crypto
        .createHmac("sha256", Buffer.from(secret, 'utf8'))
        .update(body, 'utf8')
        .digest("base64");
    const isMatch = hash === hmacHeader;
    if (!isMatch) {
        console.error('⚠️  Hash mismatch!');
    }

    return isMatch;
}