import { useLoaderData, Form } from "react-router";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";
import { Button } from "~/components/ui/button";
import type { IProduct } from "~/types/products";
import { FaShoppingCart, FaSync, FaSearch } from "react-icons/fa";
import { useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getProducts } = await import("~/model/product.server");
  const products: IProduct[] = await getProducts();
  return { products };
}

export async function action(){
  const { syncProdutsFromShopify } = await import("~/services/productSync.server");
  await syncProdutsFromShopify();
  return {  success: true };
}

export default function Products() {
  const { products } = useLoaderData<typeof loader>();
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product?.vendor?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product?.price?.toLowerCase().includes(searchTerm.toLowerCase()) 
  );


  return (  
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Discover Amazing Products
              </h1>
              <p className="text-lg text-gray-600">
                Browse our curated collection from Shopify. Find quality products at great prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products by name or brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Sync Button */}
              <Form method="post">
                <Button
                  type="submit"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl min-w-[150px]"
                >
                  <FaSync className="animate-spin-on-hover" />
                  <span className="font-medium">Sync Products</span>
                </Button>
              </Form>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">
                <span className="font-bold">{products.filter(p => p.inventoryQuantity && p.inventoryQuantity > 0).length}</span> In Stock
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">
                <span className="font-bold">{new Set(products.map(p => p.vendor)).size}</span> Brands
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">
                <span className="font-bold">{products.length}</span> Total Products
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">😕</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No products found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any products matching your search. Try different keywords or sync products from Shopify.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <>
            {/* Results Info */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-600">
                Found <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
                {searchTerm && (
                  <span> for "<span className="font-bold">{searchTerm}</span>"</span>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => {
                const isInWishlist = product._id ? wishlist.includes(product._id as string) : false;
                const isOutOfStock = product.inventoryQuantity !== undefined && product.inventoryQuantity <= 0;

                return (
                  <div
                    key={product._id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                  >
                    {/* Product Image Container - Fixed Height with Padding */}
                    <div className="relative pt-[100%] bg-gradient-to-br from-gray-50 to-gray-100">
                      {/* Product Image - Centered without object-cover */}
                      <div className="absolute inset-0 flex items-center justify-center p-2">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="max-w-full max-h-full w-auto h-auto object-contain  transition-transform duration-300"
                            style={{ maxHeight: "100%" , maxWidth: "100%" }}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-gray-400">
                            <span className="text-5xl mb-2">📦</span>
                            <span className="text-sm">No Image</span>
                          </div>
                        )}
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {isOutOfStock && (
                          <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow">
                            Out of Stock
                          </span>
                        )}
                        {parseFloat(product.price) < 50 && (
                          <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow">
                            Budget Friendly
                          </span>
                        )}
                      </div>

    
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      {/* Product Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>

                      {/* Price & Stock */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ${parseFloat(product.price).toFixed(0)}
                          </span>
                          {parseFloat(product.price) > 100 && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              ${(parseFloat(product.price) * 1.2).toFixed(0)}
                            </span>
                          )}
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${isOutOfStock 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'
                        }`}>
                          {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                        </div>
                      </div>

                      {/* Stock Quantity */}
                      {!isOutOfStock && product.inventoryQuantity && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Available:</span>
                            <span className="font-medium">{product.inventoryQuantity} units</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ 
                                width: `${Math.min((product.inventoryQuantity / 100) * 100, 100)}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          disabled={isOutOfStock}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${isOutOfStock
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover:shadow-lg'
                          }`}
                        >
                          <FaShoppingCart />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl pointer-events-none transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>

            {/* Load More (Optional) */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Load More Products
              </button>
            </div>
          </>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Shop With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Secure Payment</h4>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Easy Returns</h4>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this CSS for animation
const styles = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-on-hover:hover {
  animation: spin 1s linear infinite;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.min-h-\[3\.5rem\] {
  min-height: 3.5rem;
}
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}