/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Sparkles, User, Heart, MessageSquare, Phone, 
  Mail, MapPin, Instagram, Facebook, Clock, ChevronRight, 
  MoveRight, Star, Quote, Send
} from 'lucide-react';

// Types
interface Service {
  id: string;
  title: string;
  category: 'Facial' | 'Corporal';
  description: string;
  fullDetails: string;
  price: string;
  icon: ReactNode;
}

// Data
const SERVICES: Service[] = [
  {
    id: 'f1',
    title: 'Limpieza Profunda Hydra',
    category: 'Facial',
    description: 'Tratamiento revitalizante para una piel radiante.',
    fullDetails: 'Nuestra limpieza profunda utiliza tecnología de punta para exfoliar, extraer e hidratar. Incluye terapia de vapor, extracción manual y mascarilla personalizada según tu tipo de piel.',
    price: '$85+',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 'f2',
    title: 'Peeling Químico de Lujo',
    category: 'Facial',
    description: 'Remueve imperfecciones y unifica el tono.',
    fullDetails: 'Un tratamiento avanzado que utiliza ácidos orgánicos equilibrados para renovar la capa superficial de la piel, reduciendo manchas, líneas finas y cicatrices de acné.',
    price: '$120+',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 'c1',
    title: 'Contorno Corporal Pro',
    category: 'Corporal',
    description: 'Moldea tu figura con tecnología no invasiva.',
    fullDetails: 'Combinación de radiofrecuencia y cavitación para reducir depósitos de grasa localizados y tensar la piel en áreas críticas como abdomen y muslos.',
    price: '$150+',
    icon: <User className="w-6 h-6" />
  },
  {
    id: 'c2',
    title: 'Drenaje Linfático Manual',
    category: 'Corporal',
    description: 'Elimina toxinas y reduce la inflamación.',
    fullDetails: 'Técnica de masaje suave y rítmica que estimula el sistema linfático, ideal para post-operatorios o simplemente para desintoxicar y desinflamar el cuerpo.',
    price: '$95+',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'b1',
    title: 'Masaje de Seda & Aroma',
    category: 'Corporal',
    description: 'Experiencia sensorial de relajación total.',
    fullDetails: 'Un viaje de 60 minutos utilizando aceites esenciales de primera calidad y movimientos fluidos que disuelven toda tensión muscular y mental.',
    price: '$110+',
    icon: <Heart className="w-6 h-6" />
  }
];

const TESTIMONIALS = [
  {
    name: "Sofía Martínez",
    role: "Cliente VIP",
    text: "La atención en Lumina es simplemente exquisita. Me realicé un facial y mi piel nunca se sintió tan viva.",
    rating: 5
  },
  {
    name: "Alejandro Ruiz",
    role: "Relacionista Público",
    text: "El ambiente de lujo y la profesionalidad del personal hacen que cada visita sea una inversión en mi bienestar.",
    rating: 5
  },
  {
    name: "Elena Gómez",
    role: "Directora Creativa",
    text: "Buscaba resultados naturales y Lumina superó mis expectativas con su tratamiento corporal. ¡Altamente recomendado!",
    rating: 4
  }
];

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Inicio', href: '#inicio' },
    { title: 'Nosotros', href: '#nosotros' },
    { title: 'Servicios', href: '#servicios' },
    { title: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-nude-100/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-serif tracking-widest text-ink flex items-center gap-2">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white text-sm">L</div>
          LUMINA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-ink/70 hover:text-gold-500 transition-colors font-medium"
            >
              {link.title}
            </a>
          ))}
          <a href="#contacto" className="px-6 py-3 border border-gold-400 text-gold-500 text-xs uppercase tracking-widest rounded-full hover:bg-gold-400 hover:text-white transition-all duration-300">
            Reserva Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nude-50 border-b border-nude-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif text-ink border-b border-nude-100 pb-2"
                >
                  {link.title}
                </a>
              ))}
              <a href="#contacto" onClick={() => setIsOpen(false)} className="w-full text-center py-4 gold-gradient text-white rounded-xl font-medium tracking-widest uppercase text-xs">
                Reservar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard: React.FC<{ service: Service; onOpen: (s: Service) => void }> = ({ service, onOpen }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl luxury-shadow flex flex-col h-full border border-nude-100/50"
  >
    <div className="w-12 h-12 rounded-2xl bg-nude-100 text-gold-500 flex items-center justify-center mb-6">
      {service.icon}
    </div>
    <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
    <p className="text-ink/60 mb-6 flex-grow leading-relaxed">{service.description}</p>
    <div className="flex items-center justify-between mt-auto">
      <span className="text-gold-500 font-medium tracking-wide">{service.price}</span>
      <button 
        onClick={() => onOpen(service)}
        className="text-sm font-medium text-ink flex items-center gap-1 hover:text-gold-500 transition-colors group"
      >
        Más información <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const DetailModal: React.FC<{ service: Service | null; onClose: () => void }> = ({ service, onClose }) => (
  <AnimatePresence>
    {service && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-nude-50 w-full max-w-2xl rounded-[2.5rem] overflow-hidden luxury-shadow"
          id="service-modal"
        >
          <div className="h-48 md:h-64 overflow-hidden relative">
            <img 
              src={`https://placehold.co/800x400/EDE0D4/2C2C2C?text=${service.title}`} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
              <Sparkles size={14} /> {service.category}
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">{service.title}</h2>
            <p className="text-ink/70 leading-relaxed mb-8 text-lg">
              {service.fullDetails}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="text-2xl font-serif text-ink tracking-wide">
                Desde <span className="text-gold-500">{service.price}</span>
              </div>
              <button 
                onClick={() => {
                  onClose();
                  window.location.href = '#contacto';
                }}
                className="gold-gradient text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:scale-105 transition-transform"
              >
                Regala o Reserva
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="relative">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <header id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/F5EFE6/B8966A?text=Luxury+MedSpa+Atmosphere" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nude-100/90 via-nude-100/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-gold-500 font-medium tracking-[0.3em] uppercase text-xs mb-6">
              Bienvenidos a la Excelencia Estética
            </span>
            <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] font-light">
              Redescubre tu <br />
              <span className="italic font-serif">mejor versión</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-md leading-relaxed">
              En Lumina MedSpa, fusionamos ciencia avanzada con el arte del cuidado personal en un entorno diseñado para tu paz total.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#servicios" className="px-10 py-4 gold-gradient text-white rounded-full uppercase tracking-widest text-xs font-bold hover:shadow-lg transition-all flex items-center gap-2">
                Explorar Servicios <MoveRight size={16} />
              </a>
              <a href="#contacto" className="px-10 py-4 border border-ink/20 text-ink rounded-full uppercase tracking-widest text-xs font-bold hover:bg-ink hover:text-white transition-all">
                Reserva Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. NOSOTROS SECTION */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] luxury-shadow">
              <img 
                src="https://placehold.co/600x750/EDE0D4/2C2C2C?text=Premium+Care" 
                alt="Nuestra Clínica" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 p-8 bg-nude-100 rounded-3xl luxury-shadow border-4 border-white">
              <Quote className="text-gold-400 mb-4" />
              <p className="text-sm italic font-serif leading-relaxed">
                "La belleza real comienza en el momento en que decides ser tú misma."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold-400" />
              <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">Nuestra Filosofía</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Excelencia, armonía y <br /> bienestar integral.
            </h2>
            <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
              <p>
                Fundada en 2018, **Lumina MedSpa** nace de la necesidad de ofrecer una experiencia personalizada y lujosa en el sector de la medicina estética. 
              </p>
              <p>
                Contamos con un equipo médico especializado y la última tecnología aprobada por la FDA para garantizar resultados visibles, naturales y seguros. Nos enfocamos no solo en la apariencia, sino en la confianza de cada paciente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-3xl font-serif text-gold-500 mb-1">100%</div>
                <div className="text-xs uppercase tracking-wider text-ink/50 font-bold">Seguridad Médica</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-gold-500 mb-1">5.0k+</div>
                <div className="text-xs uppercase tracking-wider text-ink/50 font-bold">Clientes Felices</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICIOS SECTION */}
      <section id="servicios" className="py-32 bg-nude-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
             <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">Tratamientos Exclusivos</span>
             <h2 className="text-4xl md:text-6xl mb-6 italic">Arte y Ciencia para tu Piel</h2>
             <p className="text-ink/60 text-lg">
               Selección curada de procedimientos de clase mundial, adaptados meticulosamente a las necesidades únicas de tu cuerpo.
             </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl uppercase tracking-[0.2em] mb-10 border-b border-nude-200 pb-4 flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-gold-500" /> Tratamientos Faciales
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.filter(s => s.category === 'Facial').map((s) => (
                <ServiceCard key={s.id} service={s} onOpen={setSelectedService} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl uppercase tracking-[0.2em] mb-10 border-b border-nude-200 pb-4 flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-gold-500" /> Tratamientos Corporales & Relax
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.filter(s => s.category === 'Corporal').map((s) => (
                <ServiceCard key={s.id} service={s} onOpen={setSelectedService} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIOS */}
      <section className="py-32 bg-ink text-nude-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-xl space-y-6">
              <span className="text-gold-400 uppercase tracking-widest text-xs font-bold">Experiencias Reales</span>
              <h2 className="text-4xl md:text-6xl font-light">Lo que dicen <br /> nuestros <span className="italic text-gold-400">pacientes</span></h2>
            </div>
            <div className="flex gap-4">
               {/* Controls if slider implemented */}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10"
              >
                <div className="flex text-gold-400 gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xl mb-10 text-nude-100/90 leading-relaxed font-serif italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold border border-gold-500/30">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg leading-none mb-1">{t.name}</h4>
                    <span className="text-xs uppercase tracking-widest text-gold-400 opacity-60 font-bold">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACTO SECTION */}
      <section id="contacto" className="py-32 bg-nude-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Form Side */}
            <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3rem] luxury-shadow border border-nude-200">
              <div className="mb-12">
                <h2 className="text-4xl mb-4">Reserva tu Consulta</h2>
                <p className="text-ink/60">Completa el formulario y una de nuestras especialistas te contactará en breve.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Enviando mensaje..."); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-ink/40 ml-1">Nombre Completo</label>
                    <input type="text" placeholder="Ej: Maria Garcia" className="w-full bg-nude-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold-400 outline-none transition-all placeholder:text-ink/30" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-ink/40 ml-1">Correo Electrónico</label>
                    <input type="email" placeholder="maria@ejemplo.com" className="w-full bg-nude-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold-400 outline-none transition-all placeholder:text-ink/30" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-ink/40 ml-1">Teléfono</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-nude-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold-400 outline-none transition-all placeholder:text-ink/30" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-ink/40 ml-1">Servicio de Interés</label>
                    <select className="w-full bg-nude-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold-400 outline-none transition-all text-ink/60 appearance-none">
                      <option>Limpieza Hidra</option>
                      <option>Peeling Químico</option>
                      <option>Contorno Corporal</option>
                      <option>Masaje Relajante</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-ink/40 ml-1">Tu Mensaje</label>
                  <textarea rows={4} placeholder="¿Cómo podemos ayudarte hoy?" className="w-full bg-nude-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold-400 outline-none transition-all placeholder:text-ink/30" required></textarea>
                </div>
                <button type="submit" className="w-full py-5 gold-gradient text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group shadow-xl">
                  Enviar Mensaje <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gold-500 luxury-shadow flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium">Ubicación</h4>
                    <p className="text-ink/60 leading-relaxed">
                      Av. Lujo & Bienestar 123, <br /> 
                      Piso 5, Ciudad Estética, 90210
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gold-500 luxury-shadow flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium">Contáctanos</h4>
                    <p className="text-ink/60 leading-relaxed font-medium">
                      info@lumina-medspa.com <br />
                      +1 (800) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gold-500 luxury-shadow flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium">Horarios</h4>
                    <div className="text-ink/60 flex flex-col gap-1 text-sm uppercase tracking-wide font-medium">
                      <div className="flex justify-between w-48 border-b border-nude-200 py-1">
                        <span>Lunes - Viernes</span>
                        <span className="text-ink">09:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between w-48 border-b border-nude-200 py-1">
                        <span>Sábado</span>
                        <span className="text-ink">10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between w-48 py-1">
                        <span>Domingo</span>
                        <span className="text-gold-500">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-118.43898495!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1715820000000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-nude-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <a href="#inicio" className="text-3xl font-serif tracking-[0.3em] text-ink flex items-center gap-3">
               <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white text-base">L</div>
               LUMINA
            </a>
            <div className="flex gap-10 text-xs uppercase tracking-widest font-bold">
               <a href="#nosotros" className="hover:text-gold-500 transition-colors">Nosotros</a>
               <a href="#servicios" className="hover:text-gold-500 transition-colors">Servicios</a>
               <a href="#contacto" className="hover:text-gold-500 transition-colors">Precios</a>
               <a href="#contacto" className="hover:text-gold-500 transition-colors">Legal</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-nude-200 flex items-center justify-center text-ink hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-nude-200 flex items-center justify-center text-ink hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-nude-200 flex items-center justify-center text-ink hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-nude-100 flex flex-col md:flex-row justify-between items-center text-ink/40 text-xs uppercase tracking-[0.2em] font-medium gap-4">
            <span>© 2026 Lumina MedSpa — All Rights Reserved.</span>
            <div className="flex gap-8">
              <span>Desing by Studio Elegant</span>
              <span>Built with AI Studio</span>
            </div>
          </div>
        </div>
      </footer>

      {/* DETAIL MODAL */}
      <DetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}
