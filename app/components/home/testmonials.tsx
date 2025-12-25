export default function Testimonials() {
    return(
              <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Blogger",
                comment: "StyleSphere has transformed my shopping experience. The quality is exceptional!",
                rating: 5,
                avatar: "👩"
              },
              {
                name: "Michael Chen",
                role: "Tech Enthusiast",
                comment: "Best place for electronics! Fast delivery and excellent customer support.",
                rating: 5,
                avatar: "👨"
              },
              {
                name: "Emma Wilson",
                role: "Interior Designer",
                comment: "Their home & living collection is absolutely stunning. Highly recommended!",
                rating: 5,
                avatar: "👩"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
