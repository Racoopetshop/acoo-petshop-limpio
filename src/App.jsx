import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowRight, Globe, Menu, ShoppingBag, Bone, Heart, Star, CheckCircle2, MapPin } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('es');

  // CONFIGURACIÓN DE WHATSAPP
  const phoneNumber = "+523223780668"; // <-- CAMBIA ESTO POR TU NÚMERO
  
  const generateWhatsAppLink = (message) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // DICCIONARIO BILINGÜE
  const t = {
    es: {
      nav: { home: "Inicio", catalog: "Catálogo", bar: "Delicias Bar", contact: "Contacto", order: "Hacer Pedido" },
      hero: {
        badge: "Petshop & Delicias Bar en Bucerías, Nayarit",
        title1: "Bienestar, nutrición y",
        title2: "amor para tu",
        titleHighlight: "compañero de vida",
        subtitle: "Alimentos holísticos, accesorios confortables y nuestro famoso Delicias Bar con premios 100% naturales a granel.",
        btnCatalog: "Ver Catálogo",
        btnBar: "Explorar Delicias Bar"
      },
      catalog: {
        title: "Nuestros Productos",
        subtitle: "Una selección cuidadosa para la salud y felicidad de tu mascota.",
        btnInfo: "Pedir info",
        categories: [
          { name: "Alimentación Premium", desc: "Croquetas holísticas, dietas naturales y suplementos.", icon: "Bone" },
          { name: "Accesorios y Juguetes", desc: "Camas confortables, pecheras y juguetes interactivos.", icon: "ShoppingBag" },
          { name: "Estética y Salud", desc: "Shampoos naturales, cepillos y cuidado dental.", icon: "Heart" }
        ]
      },
      delicias: {
        title: "Delicias Bar a Granel",
        subtitle: "El favorito de Bucerías. Arma tu mix de premios 100% naturales, deshidratados y libres de conservadores artificiales. ¡Pagas solo lo que llevas!",
        features: ["Traquea de res", "Pulmón de res", "Hígado de res premium", "Ternera", "Patas de pollo", "Carnza de tocino"],
        btnOrder: "¡Quiero armar mi Mix!"
      },
      reviews: {
        title: "Familias Felices",
        subtitle: "Lo que nuestros clientes opinan sobre Racoo Petshop.",
        items: [
          { name: "WmWMARIANOWmW Delgado", text: "Excelente atención y productos de la más alta calidad. A mi perro le encantaron los premios del Delicias Bar, 100% naturales.", rating: 5 },
          { name: "Valeria M.", text: "¡El mejor pet shop en Bucerías! Tienen una gran variedad de accesorios y alimentos holísticos que no encuentro en otro lado.", rating: 5 },
          { name: "Sarah Jenkins", text: "Amazing service! The natural treats selection is great, and my dog absolutely loves them. Highly recommended.", rating: 5 }
        ]
      },
      footer: {
        desc: "Tu tienda de confianza para el bienestar integral de tus mascotas en la bahía.",
        location: "Golden Zone, Bucerías, Nayarit",
        links: "Enlaces Rápidos",
        rights: "Todos los derechos reservados."
      }
    },
    en: {
      nav: { home: "Home", catalog: "Catalog", bar: "Treats Bar", contact: "Contact", order: "Order Now" },
      hero: {
        badge: "Petshop & Treats Bar in Bucerías, Nayarit",
        title1: "Wellness, nutrition and",
        title2: "love for your",
        titleHighlight: "lifelong companion",
        subtitle: "Holistic food, comfortable accessories and our famous Treats Bar with 100% natural bulk rewards.",
        btnCatalog: "View Catalog",
        btnBar: "Explore Treats Bar"
      },
      catalog: {
        title: "Our Products",
        subtitle: "A careful selection for the health and happiness of your pet.",
        btnInfo: "Request info",
        categories: [
          { name: "Premium Food", desc: "Holistic kibble, natural diets and supplements.", icon: "Bone" },
          { name: "Accessories & Toys", desc: "Comfortable beds, harnesses and interactive toys.", icon: "ShoppingBag" },
          { name: "Health & Grooming", desc: "Natural shampoos, brushes and dental care.", icon: "Heart" }
        ]
      },
      delicias: {
        title: "Bulk Treats Bar",
        subtitle: "Bucerías' favorite! Build your mix of 100% natural, dehydrated treats free of artificial preservatives. Pay only for what you take!",
        features: ["Beef trachea", "Beef lung", "Premium beef liver", "Veal", "Chicken feet", "Bacon hide"],
        btnOrder: "I want to build my Mix!"
      },
      reviews: {
        title: "Happy Families",
        subtitle: "What our clients say about Racoo Petshop.",
        items: [
          { name: "WmWMARIANOWmW Delgado", text: "Excellent service and top quality products. My dog loved the treats from the Delicias Bar, 100% natural.", rating: 5 },
          { name: "Valeria M.", text: "The best pet shop in Bucerías! They have a great variety of accessories and holistic food I can't find anywhere else.", rating: 5 },
          { name: "Sarah Jenkins", text: "Amazing service! The natural treats selection is great, and my dog absolutely loves them. Highly recommended.", rating: 5 }
        ]
      },
      footer: {
        desc: "Your trusted shop for the comprehensive wellness of your pets in the bay.",
        location: "Golden Zone, Bucerías, Nayarit",
        links: "Quick Links",
        rights: "All rights reserved."
      }
    }
  };

  const currentLang = t[lang];

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Bone': return <Bone className="w-8 h-8 text-[#D96C4A]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-[#D96C4A]" />;
      case 'Heart': return <Heart className="w-8 h-8 text-[#D96C4A]" />;
      default: return <Star className="w-8 h-8 text-[#D96C4A]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-[#2D3A2F]">
      
      {/* --- NAVBAR --- */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png.jpg" alt="Racoo Petshop" className="w-10 h-10 rounded-full object-cover shadow-sm bg-white" />
          <span className="text-xl font-bold text-[#D96C4A]">Racoo <span className="text-[#2D3A2F]">Petshop</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#inicio" className="hover:text-[#D96C4A] transition-colors">{currentLang.nav.home}</a>
          <a href="#catalogo" className="hover:text-[#D96C4A] transition-colors">{currentLang.nav.catalog}</a>
          <a href="#delicias" className="flex items-center gap-1 hover:text-[#D96C4A] transition-colors">
            <Sparkles className="w-4 h-4 text-[#D96C4A]" /> {currentLang.nav.bar}
          </a>
          <a href="#contacto" className="hover:text-[#D96C4A] transition-colors">{currentLang.nav.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <a 
            href={generateWhatsAppLink(lang === 'es' ? "¡Hola! Me gustaría hacer un pedido." : "Hello! I would like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#2D3A2F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-md"
          >
            {currentLang.nav.order} <MessageCircle className="w-4 h-4" />
          </a>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#F3EBE1] text-[#7A6B5D] px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#D96C4A]"></span>
            {currentLang.hero.badge}
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {currentLang.hero.title1} <br />
            {currentLang.hero.title2} <br />
            <span className="text-[#D96C4A]">{currentLang.hero.titleHighlight}</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            {currentLang.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#catalogo" className="flex items-center gap-2 bg-[#D96C4A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c25e3f] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              {currentLang.hero.btnCatalog} <ArrowRight className="w-5 h-5" />
            </a>
            
            <a href="#delicias" className="flex items-center gap-2 bg-transparent border-2 border-[#E8DCCB] text-[#D96C4A] px-6 py-3 rounded-xl font-semibold hover:bg-[#F3EBE1] transition-colors">
              <Sparkles className="w-5 h-5" /> {currentLang.hero.btnBar}
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="bg-white p-4 rounded-3xl shadow-xl shadow-orange-900/5 border border-gray-100">
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center gap-3">
                <img src="/logo.png.jpg" alt="Racoo" className="w-10 h-10 rounded-full border border-gray-100 object-cover" />
                <div className="leading-tight">
                  <p className="font-bold text-sm">racoo_petshop</p>
                  <p className="text-xs text-gray-500">Golden Zone, Bucerías</p>
                </div>
              </div>
              <span className="bg-gray-100 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                Pet Friendly 🐾
              </span>
            </div>
            
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100">
              <img 
                src="/hero-photo.jpg.webp" 
                alt="Mascotas felices" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </main>

      {/* --- SECCIÓN CATÁLOGO --- */}
      <section id="catalogo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4">{currentLang.catalog.title}</h2>
            <p className="text-lg text-gray-600">{currentLang.catalog.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentLang.catalog.categories.map((cat, index) => (
              <div key={index} className="bg-[#FCFAF8] p-8 rounded-3xl border border-[#E8DCCB] hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {renderIcon(cat.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cat.desc}</p>
                <a 
                  href={generateWhatsAppLink(lang === 'es' ? `Hola, me interesa información sobre ${cat.name}.` : `Hello, I'm interested in ${cat.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D96C4A] font-semibold hover:text-[#c25e3f]"
                >
                  {currentLang.catalog.btnInfo} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECCIÓN DELICIAS BAR (GRANEL) --- */}
      <section id="delicias" className="py-20 bg-[#2D3A2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-[#F3EBE1]">
                <Sparkles className="w-4 h-4 text-[#D96C4A]" />
                100% Natural
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {currentLang.delicias.title}
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentLang.delicias.subtitle}
              </p>

              <ul className="space-y-4 pt-4">
                {currentLang.delicias.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#F3EBE1]">
                    <CheckCircle2 className="w-6 h-6 text-[#D96C4A]" />
                    <span className="font-medium text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <a 
                  href={generateWhatsAppLink(lang === 'es' ? "¡Hola! Quiero armar mi mix en el Delicias Bar." : "Hello! I want to build my mix at the Treats Bar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D96C4A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c25e3f] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {currentLang.delicias.btnOrder} <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-black/20 border border-white/10 shadow-2xl">
                <img 
                  src="/hero-photo.jpg.webp" 
                  alt="Delicias Bar" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 border-4 border-white/10 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN RESEÑAS --- */}
      <section className="py-20 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4">{currentLang.reviews.title}</h2>
            <p className="text-lg text-gray-600">{currentLang.reviews.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentLang.reviews.items.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-[#2D3A2F]">{review.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Cliente Verificado</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Columna 1: Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png.jpg" alt="Racoo Petshop" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-lg font-bold text-[#D96C4A]">Racoo <span className="text-[#2D3A2F]">Petshop</span></span>
              </div>
              <p className="text-gray-600 mb-6">{currentLang.footer.desc}</p>
              
              <div className="flex gap-4">
                {/* BOTÓN DE INSTAGRAM CON SVG */}
                <a 
                  href="https://instagram.com/racoo_petshop" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-[#F3EBE1] flex items-center justify-center text-[#D96C4A] hover:bg-[#D96C4A] hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                
                {/* BOTÓN DE FACEBOOK CON SVG */}
                <a 
                  href="https://www.facebook.com/people/Racoo-Petshop/pfbid02nbNiCUhfyR6W1AViMKFfiREh7cc1qbJKcj5SRm8SzxZwinav9FB9BsAxXw3BANKnl/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-[#F3EBE1] flex items-center justify-center text-[#D96C4A] hover:bg-[#D96C4A] hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Columna 2: Ubicación */}
            <div>
              <h4 className="text-lg font-bold mb-4">{currentLang.nav.contact}</h4>
              <div className="space-y-4">
                <p className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#D96C4A] shrink-0" />
                  <span>{currentLang.footer.location}</span>
                </p>
                <a 
                  href={generateWhatsAppLink(lang === 'es' ? "¡Hola! Vengo de su página web." : "Hello! I'm visiting from your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#D96C4A] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#D96C4A] shrink-0" />
                  <span>WhatsApp: +{phoneNumber}</span>
                </a>
              </div>
            </div>

            {/* Columna 3: Enlaces */}
            <div>
              <h4 className="text-lg font-bold mb-4">{currentLang.footer.links}</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-600 hover:text-[#D96C4A] transition-colors">{currentLang.nav.home}</a></li>
                <li><a href="#catalogo" className="text-gray-600 hover:text-[#D96C4A] transition-colors">{currentLang.nav.catalog}</a></li>
                <li><a href="#delicias" className="text-gray-600 hover:text-[#D96C4A] transition-colors">{currentLang.nav.bar}</a></li>
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Racoo Petshop. {currentLang.footer.rights}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
