import Brands from "./brands";
import Testimonials from "./testmonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Elevate Your Style with 
              <span className="block bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                StyleSphere
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Discover curated fashion, premium electronics, and lifestyle products 
              from top brands worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/products" 
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Shop Collection →
              </a>
              <a 
                href="/products?category=electronics" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Explore Electronics
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of premium categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Fashion", icon: "👗", color: "from-pink-500 to-rose-500", count: "2.5K+" },
              { name: "Electronics", icon: "📱", color: "from-blue-500 to-cyan-500", count: "1.8K+" },
              { name: "Home & Living", icon: "🏠", color: "from-green-500 to-emerald-500", count: "3.2K+" },
              { name: "Beauty", icon: "💄", color: "from-purple-500 to-violet-500", count: "1.5K+" },
            ].map((category) => (
              <a 
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group relative bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center text-3xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-500">{category.count} Products</p>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <span className="text-sm font-semibold text-purple-600">Shop Now →</span> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Trending Products
              </h2>
              <p className="text-gray-600">Most loved by our customers</p>
            </div>
            <a 
              href="/products" 
              className="text-purple-600 font-semibold hover:text-purple-800 flex items-center gap-2"
            >
              View All <span>→</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                id: 1, 
                name: "Premium Wireless Headphones", 
                price: "$249.99", 
                originalPrice: "$299.99",
                rating: 4.8,
                imageColor: "bg-gradient-to-br from-gray-900 to-gray-700",
                badge: "BEST SELLER"
              },
              { 
                id: 2, 
                name: "Smart Watch Pro", 
                price: "$349.99", 
                originalPrice: "$399.99",
                rating: 4.7,
                imageColor: "bg-gradient-to-br from-blue-900 to-blue-600",
                badge: "NEW"
              },
              { 
                id: 3, 
                name: "Designer Handbag", 
                price: "$189.99", 
                originalPrice: "$229.99",
                rating: 4.9,
                imageColor: "bg-gradient-to-br from-rose-900 to-pink-600",
                badge: "LIMITED"
              },
              { 
                id: 4, 
                name: "4K Ultra HD TV", 
                price: "$899.99", 
                originalPrice: "$1099.99",
                rating: 4.6,
                imageColor: "bg-gradient-to-br from-indigo-900 to-purple-600",
                badge: "SALE"
              },
            ].map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 ${product.imageColor} relative`}>
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white text-gray-900 text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white">❤️</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      <span className="text-gray-300">{"★".repeat(5 - Math.floor(product.rating))}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <Brands />

      {/* Promo Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Black Friday Sale! 🎉
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Up to 50% OFF on all electronics. Limited time offer!
          </p>
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-2xl">⏰</span>
            <span className="font-mono text-xl">24:59:59</span>
          </div>
          <div className="mt-8">
            <a 
              href="/sale" 
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Shop Sale Now →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to get exclusive deals, new arrivals, and style tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}