import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowRight, Globe, Menu } from 'lucide-react';

export default function App() {
  // 1. ESTADO DEL IDIOMA
  const [lang, setLang] = useState('es');

  // 2. CONFIGURACIÓN DE WHATSAPP
  const phoneNumber = "523221234567"; // <-- CAMBIA ESTO POR TU NÚMERO REAL CON CÓDIGO DE PAÍS
  
  const generateWhatsAppLink = (message) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // 3. DICCIONARIO BILINGÜE
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
      }
    }
  };

  const currentLang = t[lang];

  return (
    // Fondo crema inspirado en tu diseño
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-[#2D3A2F]">
      
      {/* --- NAVBAR --- */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png.jpg" alt="Racoo Petshop" className="w-10 h-10 rounded-full object-cover shadow-sm bg-white" />
          <span className="text-xl font-bold text-[#D96C4A]">Racoo <span className="text-[#2D3A2F]">Petshop</span></span>
        </div>

        {/* Enlaces de Navegación (Ocultos en móvil) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#inicio" className="text-[#D96C4A] border-b-2 border-[#D96C4A] pb-1">{currentLang.nav.home}</a>
          <a href="#catalogo" className="hover:text-[#D96C4A] transition-colors">{currentLang.nav.catalog}</a>
          <a href="#delicias" className="flex items-center gap-1 hover:text-[#D96C4A] transition-colors">
            <Sparkles className="w-4 h-4 text-[#D96C4A]" /> {currentLang.nav.bar}
          </a>
          <a href="#contacto" className="hover:text-[#D96C4A] transition-colors">{currentLang.nav.contact}</a>
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-4">
          {/* Toggle de Idioma */}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Botón WhatsApp Principal */}
          <a 
            href={generateWhatsAppLink(lang === 'es' ? "¡Hola! Me gustaría hacer un pedido." : "Hello! I would like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#2D3A2F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-md"
          >
            {currentLang.nav.order} <MessageCircle className="w-4 h-4" />
          </a>

          {/* Menú Móvil */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3EBE1] text-[#7A6B5D] px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#D96C4A]"></span>
            {currentLang.hero.badge}
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {currentLang.hero.title1} <br />
            {currentLang.hero.title2} <br />
            <span className="text-[#D96C4A]">{currentLang.hero.titleHighlight}</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            {currentLang.hero.subtitle}
          </p>

          {/* Botones Hero */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#catalogo"
              className="flex items-center gap-2 bg-[#D96C4A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#c25e3f] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {currentLang.hero.btnCatalog} <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href={generateWhatsAppLink(lang === 'es' ? "Hola, quiero saber más sobre el Delicias Bar." : "Hello, I want to know more about the Treats Bar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border-2 border-[#E8DCCB] text-[#D96C4A] px-6 py-3 rounded-xl font-semibold hover:bg-[#F3EBE1] transition-colors"
            >
              <Sparkles className="w-5 h-5" /> {currentLang.hero.btnBar}
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta estilo Instagram */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-white p-4 rounded-3xl shadow-xl shadow-orange-900/5 border border-gray-100">
            {/* Header de la tarjeta */}
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Racoo" className="w-10 h-10 rounded-full border border-gray-100 object-cover" />
                <div className="leading-tight">
                  <p className="font-bold text-sm">racoo_petshop</p>
                  <p className="text-xs text-gray-500">Golden Zone, Bucerías</p>
                </div>
              </div>
              <span className="bg-gray-100 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                Pet Friendly 🐾
              </span>
            </div>
            
            {/* Imagen Principal */}
            <div className="rounded-2xl overflow-hidden aspect-square bg-gray-100">
              {/* AQUÍ VA TU FOTO PRINCIPAL */}
              <img 
                src="/hero-photo.jpg.webp" 
                alt="Mascotas felices" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
