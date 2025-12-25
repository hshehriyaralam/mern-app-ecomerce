import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("products", "routes/products.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("product/:id", "routes/product.$id.tsx"),
    route("admin/products", "routes/admin.products.tsx"),
    route("admin/sync", "routes/admin.sync.tsx"),
    route("api/product/delete", "routes/api/product/delete.ts"),
    route("api/product/create", "routes/api/product/create.ts"),
    route("api/product/update", "routes/api/product/update.ts"),
    route("api/webhooks", "routes/api/webhooks.ts"),
] satisfies RouteConfig;
