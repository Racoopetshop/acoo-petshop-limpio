import React, { useState } from 'react';
import { ShoppingBag, Heart, ShieldCheck, MapPin, Phone, Star, Menu, X, Globe } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    es: {
      heroTitle: "Todo para consentir a tu mejor amigo",
      heroSubtitle: "Alimento premium, accesorios y estética canina en Bucerías.",
      btnCatalog: "Ver Productos",
      cat1Title: "Alimentación Premium",
      cat1Desc: "Nutrición especializada y alimentos naturales para una vida saludable.",
      cat2Title: "Accesorios y Juguetes",
      cat2Desc: "Correas, arneses ergonómicos y juguetes interactivos.",
      cat3Title: "Estética y Salud",
      cat3Desc: "Shampoos naturales, cepillos y suplementos de bienestar.",
      btnConsult: "Consultar por WhatsApp",
      footerDesc: "Tu tienda de mascotas de confianza en Bucerías para nutrición, salud y bienestar."
    },
    en: {
      heroTitle: "Everything to pamper your best friend",
      heroSubtitle: "Premium food, accessories, and pet grooming in Bucerias.",
      btnCatalog: "View Products",
      cat1Title: "Premium Nutrition",
      cat1Desc: "Specialized nutrition and natural food for a healthy life.",
      cat2Title: "Accessories & Toys",
      cat2Desc: "Leashes, ergonomic harnesses, and interactive toys.",
      cat3Title: "Grooming & Health",
      cat3Desc: "Natural shampoos, brushes, and health supplements.",
      btnConsult: "Inquire via WhatsApp",
      footerDesc: "Your trusted pet shop in Bucerias for nutrition, wellness, and pampering your pets."
    }
  }[lang];

  const RESENAS = [
    {
      nombre: "WmWMARIANOWmW Delgado",
      mascota: lang === 'es' ? "Cliente en Google Maps" : "Google Maps Reviewer",
      comentario: lang === 'es' ? "¡Me encantó! La atención es increíble y la ubicación es súper accesible así como los precios! Lo mejor es que tienen descuentos." : "I loved it! The service is incredible and the location is super accessible as well as the prices! The best part is they have discounts.",
      estrellas: 5
    },
    {
      nombre: "Valeria M.",
      mascota: lang === 'es' ? "Dueña de Bruno 🐶" : "Bruno's Owner 🐶",
      comentario: lang === 'es' ? "Excelente atención y los premios del Delicias Bar le encantan a mi perrito. La mejor petshop de Bucerías." : "Great service and the Delicias Bar treats are my puppy's favorite. The best pet shop in Bucerias.",
      estrellas: 5
    },
    {
      nombre: "Sarah Jenkins",
      mascota: lang === 'es' ? "Dueña de Luna 🐕" : "Luna's Owner 🐕",
      comentario: lang === 'es' ? "¡Súper Pet Friendly! Me encanta pasar aquí durante nuestros paseos en la Zona Dorada. Los snacks naturales son de primera." : "Super Pet Friendly! Love coming here during our walks in the Golden Zone. The natural snacks are top quality.",
      estrellas: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-amber-600">Racoo Petshop</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-sm bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition"
            >
              <Globe size={16} />
              <span className="uppercase font-semibold">{lang}</span>
            </button>
          </div>
        </div>
      </header>

      <section className="bg-amber-50 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t.heroTitle}</h1>
          <p className="text-lg text-slate-600 mb-8">{t.heroSubtitle}</p>
          <a 
            href="https://wa.me/523220000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition inline-block"
          >
            {t.btnConsult}
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2 text-slate-900">{t.cat1Title}</h3>
            <p className="text-slate-600">{t.cat1Desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2 text-slate-900">{t.cat2Title}</h3>
            <p className="text-slate-600">{t.cat2Desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2 text-slate-900">{t.cat3Title}</h3>
            <p className="text-slate-600">{t.cat3Desc}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            {lang === 'es' ? 'Lo que dicen nuestros clientes' : 'What our customers say'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {RESENAS.map((res, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(res.estrellas)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">"{res.comentario}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{res.nombre}</h4>
                  <span className="text-sm text-slate-500">{res.mascota}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Racoo Petshop</h2>
          <p className="max-w-md mx-auto text-slate-400 mb-6">{t.footerDesc}</p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Racoo Petshop. Bucerías, Nayarit.</p>
        </div>
      </footer>
    </div>
  );
}
