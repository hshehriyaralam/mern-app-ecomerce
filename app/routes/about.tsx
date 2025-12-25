import { FaUsers, FaRocket, FaAward, FaHeart, FaHandshake, FaGlobe } from 'react-icons/fa';

export default function About() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "👨‍💼",
      bio: "10+ years in e-commerce industry"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image: "👩‍💼",
      bio: "Supply chain and logistics expert"
    },
    {
      name: "Michael Rodriguez",
      role: "Tech Lead",
      image: "👨‍💻",
      bio: "Full-stack development specialist"
    },
    {
      name: "Emma Wilson",
      role: "Customer Success",
      image: "👩‍💼",
      bio: "Dedicated to customer satisfaction"
    }
  ];

  const milestones = [
    { year: "2020", title: "Founded", description: "Started our journey in a small garage" },
    { year: "2021", title: "First 1000 Customers", description: "Reached our first major milestone" },
    { year: "2022", title: "Shopify Integration", description: "Integrated with Shopify platform" },
    { year: "2023", title: "Global Shipping", description: "Started international shipping" },
    { year: "2024", title: "50k+ Customers", description: "Serving customers worldwide" }
  ];

  const values = [
    {
      icon: <FaHandshake />,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do"
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Constantly evolving with technology and trends"
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    },
    {
      icon: <FaGlobe />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story at <span className="text-blue-600">StyleSphere</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're revolutionizing online shopping by combining cutting-edge technology 
              with exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To make premium shopping accessible to everyone through seamless 
                technology integration, transparent pricing, and unparalleled customer 
                experience. We believe everyone deserves quality products without compromise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FaGlobe className="text-purple-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the world's most trusted e-commerce platform, connecting 
                customers with quality products while empowering businesses through 
                innovative technology solutions. We're building the future of shopping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at StyleSphere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-600 text-xl">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind StyleSphere's success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                    <div className={`bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="text-sm text-blue-600 font-semibold mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                  
                  <div className="md:w-1/2 md:px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8">
              Be part of our journey. Shop with us or partner with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Shop Now
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}