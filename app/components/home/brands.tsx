export default function Brands(){
    return(
          <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Leading Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-60">
            {["Nike", "Apple", "Samsung", "Sony", "Adidas", "Dior"].map((brand) => (
              <div 
                key={brand} 
                className="h-20 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl font-bold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}