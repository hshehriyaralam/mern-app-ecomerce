// app/components/Footer.jsx
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaCcAmazonPay, FaCreditCard } from 'react-icons/fa';
import { SiAmericanexpress, SiShopify } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 border-t border-gray-200">
      {/* Top Section - Newsletter & Quick Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Newsletter Section */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold">SS</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StyleSphere
              </h2>
            </div>
            <p className="text-gray-600 mb-6 max-w-lg">
              Join over 50,000 customers who receive exclusive deals, style tips, 
              and new product announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mb-8">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebook />, label: 'Facebook', color: 'hover:text-blue-600' },
                  { icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-pink-600' },
                  { icon: <FaTwitter />, label: 'Twitter', color: 'hover:text-sky-500' },
                  { icon: <FaYoutube />, label: 'YouTube', color: 'hover:text-red-600' },
                  { icon: <FaTiktok />, label: 'TikTok', color: 'hover:text-black' },
                  { icon: <FaPinterest />, label: 'Pinterest', color: 'hover:text-red-500' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} hover:bg-gray-200 transition-all transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Shop */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900">Shop</h3>
              <ul className="space-y-3">
                {[
                  { name: 'New Arrivals', href: '/products?new=true' },
                  { name: 'Best Sellers', href: '/products?best=true' },
                  { name: 'Sale', href: '/sale' },
                  { name: 'Clothing', href: '/categories/clothing' },
                  { name: 'Electronics', href: '/categories/electronics' },
                  { name: 'Accessories', href: '/categories/accessories' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors hover:pl-2 block transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900">Support</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Help Center', href: '/help' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Shipping Info', href: '/shipping' },
                  { name: 'Returns & Exchanges', href: '/returns' },
                  { name: 'Size Guide', href: '/size-guide' },
                  { name: 'FAQs', href: '/faq' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors hover:pl-2 block transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Press', href: '/press' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Sustainability', href: '/sustainability' },
                  { name: 'Affiliate Program', href: '/affiliate' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors hover:pl-2 block transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900">Legal</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' },
                  { name: 'Accessibility', href: '/accessibility' },
                  { name: 'Site Map', href: '/sitemap' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors hover:pl-2 block transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaPhone className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-900">24/7 Customer Support</h4>
                <p className="text-gray-600">+1 (800) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Sun: 24 hours</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaEnvelope className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-900">Email Support</h4>
                <p className="text-gray-600">support@stylesphere.com</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaMapMarkerAlt className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-900">Global Headquarters</h4>
                <p className="text-gray-600">123 Fashion Ave, New York, NY 10001</p>
                <p className="text-sm text-gray-500">Visit our flagship store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50 hover:shadow-xl  cursor-pointer"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;