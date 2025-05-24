'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant background"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">SUSHIRO</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the Art of Japanese Cuisine</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToMenu}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-colors"
            >
              View Menu
            </button>
            <Link 
              href="/login"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full text-lg transition-colors inline-flex items-center justify-center"
            >
              Apply for Job
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Secret to Our Great Taste</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Industry-leading ingredients chosen for their freshness and quality are paired with rice prepared to exacting standards. Each dish is prepared in-house with the utmost care.
              </p>
              <p className="text-lg text-gray-700">
                Our attention to detail extends to every aspect of your dining experience, from the soy sauce to the wasabi, ensuring authentic Japanese deliciousness that will amaze you.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
                alt="Sushi preparation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu-section" className="py-20 px-4 bg-gray-50 scroll-mt-16 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Menu Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Premium Sushi", 
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80", 
                price: "From ¥120" 
              },
              { 
                title: "Special Rolls", 
                image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80", 
                price: "From ¥180" 
              },
              { 
                title: "Side Dishes", 
                image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80", 
                price: "From ¥150" 
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-red-600 font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multilingual Support",
                description: "Order with ease using our touch panel that supports multiple languages",
                icon: "🌐"
              },
              {
                title: "Cashless Payment",
                description: "Convenient payment with credit cards and QR code options",
                icon: "💳"
              },
              {
                title: "Fresh Ingredients",
                description: "Daily fresh ingredients sourced from trusted suppliers",
                icon: "🐟"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SUSHIRO</h4>
              <p className="text-gray-400">Experience authentic Japanese cuisine at its finest.</p>
            </div>
                       <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@sushiro.com</li>
                <li>Address: 1-1-1 Chiba Minato, Chuo-ku, Chiba-shi, Chiba 260-8722, Japan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SUSHIRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
