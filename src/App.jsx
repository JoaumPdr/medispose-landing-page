import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Leaf, 
  DollarSign, 
  Users, 
  MapPin, 
  Shield, 
  ChevronDown, 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  Globe, 
  TrendingUp, 
  Award, 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  Linkedin, 
  Github, 
  Mail,
  Recycle,
  Sparkles,
  Target,
  BarChart3
} from 'lucide-react';

// Import components
import FloatingPills from './components/FloatingPills';
import PulsingDot from './components/PulsingDot';
import MorphingShape from './components/MorphingShape';
import Enhanced3DCapsule from './components/Enhanced3DCapsule';
import Scene3D from './components/Scene3D';
import ParticleCanvas from './components/ParticleSystem';
import InteractiveCard from './components/InteractiveCard';

import './App.css';

const MeDispose = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef([]);
  const { scrollYProgress } = useScroll();

  // Transform values for parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 1500);

    // Intersection Observer for active sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = sectionRefs.current[1];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "João Pedro Escobar",
      role: "Full-Stack Developer & Data Science",
      description: "Desenvolvedor Full-Stack especializado em database e ciência de dados",
      education: "Graduando em Engenharia de Software pelo Inatel",
      responsibilities: ["Desenvolvimento Full-Stack", "Arquitetura de Database", "Data Science & Analytics"],
      tech: ["Vue.js", "Java", "SpringBoot", "SQLite"],
      linkedin: "https://www.linkedin.com/in/joaumpdr/",
      github: "https://github.com/JoaumPdr",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Sofia Groke",
      role: "Frontend Developer",
      description: "Desenvolvedora Front-end especializada em interfaces modernas e responsivas",
      education: "Graduanda em Engenharia de Software pelo Inatel",
      responsibilities: ["Desenvolvimento Frontend", "UX/UI Design", "Experiência do Usuário"],
      tech: ["Vue.js", "CSS3", "JavaScript", "Responsive Design"],
      linkedin: "https://www.linkedin.com/in/sofiagroke/",
      github: "https://github.com/aguainsalubre",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Felipe Campos",
      role: "Backend Developer & Database",
      description: "Desenvolvedor Backend especializado em APIs e arquitetura de banco de dados",
      education: "Graduando em Engenharia de Software pelo Inatel",
      responsibilities: ["Desenvolvimento Backend", "Database Architecture", "API REST Development"],
      tech: ["Java", "SpringBoot", "SQLite", "Google Maps API"],
      linkedin: "https://www.linkedin.com/in/felipe-campos-de-souza-/",
      github: "https://github.com/Felipee1236",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh-gradient overflow-hidden">
      {/* Enhanced Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            className="fixed inset-0 bg-mesh-gradient z-50 flex items-center justify-center"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="text-center">
              <motion.div 
                className="relative mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div 
                  className="w-24 h-24 border-4 border-emerald-500 rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent absolute top-4 left-4"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-emerald-600 absolute top-8 left-8" />
                </motion.div>
              </motion.div>
              
              <motion.h2 
                className="text-4xl font-bold text-gray-800 mb-4 text-shadow-glow gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                MeDispose
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Preparando experiência imersiva...
              </motion.p>
              
              <motion.div 
                className="flex justify-center space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 h-2 bg-emerald-500 rounded-full"
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Floating Navigation */}
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 backdrop-blur-2xl bg-white/80 rounded-full px-8 py-4 shadow-2xl border border-white/30"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-8">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-7 h-7 text-emerald-600" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 w-7 h-7 bg-emerald-500 rounded opacity-20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="font-bold text-gray-800 text-lg">MeDispose</span>
          </motion.div>
          
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className={`relative transition-all duration-500 ${
                  activeSection === index ? 'w-8 h-3' : 'w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
              >
                <div className={`rounded-full transition-all duration-500 ${
                  activeSection === index 
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 w-full h-full' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`} />
                {activeSection === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Background Morphing Shapes */}
      <MorphingShape className="top-10 left-10" size="w-32 h-32" mousePosition={mousePosition} scrollY={scrollY} />
      <MorphingShape className="top-1/3 right-20" size="w-24 h-24" mousePosition={mousePosition} scrollY={scrollY} />
      <MorphingShape className="bottom-1/4 left-1/4" size="w-40 h-40" mousePosition={mousePosition} scrollY={scrollY} />

      {/* Enhanced Hero Section */}
      <motion.section 
        ref={el => sectionRefs.current[0] = el}
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <FloatingPills count={60} />
        <ParticleCanvas mousePosition={mousePosition} />
        
        <Enhanced3DCapsule scrollY={scrollY} mousePosition={mousePosition} />

        <motion.div 
          className="max-w-5xl mx-auto px-4 text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
          >
            <div className="flex items-center gap-3 backdrop-blur-2xl bg-white/80 rounded-full px-8 py-3 shadow-xl border border-white/30">
              <PulsingDot color="emerald" />
              <span className="text-sm font-medium text-gray-700">Inovação em Gestão Hospitalar</span>
              <PulsingDot delay={500} color="blue" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-8xl md:text-9xl font-bold mb-8 leading-none text-shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <motion.span 
              className="gradient-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Me
            </motion.span>
            <span className="text-gray-800">Dispose</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            Plataforma web inteligente para 
            <motion.span 
              className="font-semibold text-emerald-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            > gestão sustentável</motion.span> de 
            medicamentos hospitalares através de 
            <motion.span 
              className="font-semibold text-blue-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            > tecnologia avançada</motion.span>
          </motion.p>

          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <motion.button 
              onClick={scrollToNext}
              className="group backdrop-blur-2xl bg-white/80 hover:bg-white/95 transition-all duration-700 rounded-full p-6 shadow-xl hover:shadow-2xl border border-white/30"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-10 h-10 text-emerald-600 group-hover:text-emerald-700" />
            </motion.button>
            
            <motion.p 
              className="text-sm text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Descubra como transformamos o descarte de medicamentos
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Economic Impact Section */}
      <motion.section 
        ref={el => sectionRefs.current[1] = el}
        className="min-h-screen relative flex items-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-emerald-600 font-semibold text-lg tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              01 — O Problema Real
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Potencial de <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Economia</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Os números impressionantes que mostram o impacto financeiro do desperdício de medicamentos no Brasil
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* National Losses Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(239, 68, 68, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <TrendingUp className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">2019-2023</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-5xl font-bold text-emerald-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  R$ 2,2 bi
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perdas Nacionais</h3>
                <p className="text-gray-600 leading-relaxed">
                  Perdas de insumos do Ministério da Saúde devido ao descarte inadequado e vencimento de medicamentos
                </p>
              </motion.div>
            </InteractiveCard>

            {/* Annual Waste Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(16, 185, 129, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <DollarSign className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">Por Hospital</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-5xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  R$ 479k
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Desperdício Anual</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custo anual com desperdício em hospital universitário médio no Brasil
                </p>
              </motion.div>
            </InteractiveCard>

            {/* Expired Medications Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(147, 51, 234, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">2 Meses</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-5xl font-bold text-purple-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  R$ 5,4k
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medicamentos Vencidos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prejuízo identificado em 48 enfermarias
                </p>
              </motion.div>
            </InteractiveCard>
          </div>
        </div>
      </motion.section>

      {/* Environmental Impact Section */}
      <motion.section 
        ref={el => sectionRefs.current[2] = el}
        className="min-h-screen relative flex items-center py-20 bg-mesh-gradient"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-emerald-600 font-semibold text-lg tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              02 — IMPACTO AMBIENTAL
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Planeta em <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Perigo</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Como o descarte inadequado de medicamentos afeta nosso meio ambiente e saúde pública
            </motion.p>
          </motion.div>

          {/* Environmental Stats */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mb-8 shadow-2xl"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            >
              <Globe className="w-16 h-16 text-white" />
            </motion.div>
            
            <motion.div 
              className="text-8xl font-bold text-blue-600 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              74%
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contaminação Global</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Da população mundial está exposta à contaminação farmacêutica em lixões a céu aberto
            </p>
          </motion.div>

          {/* Hospital Waste Awareness Section */}
          <motion.div 
            className="backdrop-blur-2xl bg-white/80 rounded-3xl p-12 shadow-xl border border-white/30 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              O Desperdício Hospitalar
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              viewport={{ once: true }}
            >
              O descarte inadequado de medicamentos por hospitais e população representa uma grave ameaça 
              ao meio ambiente e à saúde pública, além do desperdício de remédios em bom estado por 
              vencimento, excesso de estoque ou mudança de tratamento.
            </motion.p>

            {/* Indicators */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                viewport={{ once: true }}
              >
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Hospitais</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Clínicas</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                viewport={{ once: true }}
              >
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">População</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Environmental Impact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Super Bacteria Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(239, 68, 68, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-6xl font-bold text-red-600 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  100%
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Super Bactérias</h3>
                <p className="text-gray-600 leading-relaxed">
                  de risco de desenvolvimento de resistência bacteriana devido ao descarte incorreto
                </p>
              </motion.div>
            </InteractiveCard>

            {/* Ecosystem Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(16, 185, 129, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <Leaf className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-6xl font-bold text-emerald-600 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ∞
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecossistema</h3>
                <p className="text-gray-600 leading-relaxed">
                  tempo necessário para degradação natural de alguns compostos farmacêuticos
                </p>
              </motion.div>
            </InteractiveCard>
          </div>
        </div>
      </motion.section>

      {/* Platform Features Section */}
      <motion.section 
        ref={el => sectionRefs.current[3] = el}
        className="min-h-screen relative flex items-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-blue-600 font-semibold text-lg tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              03 — NOSSA SOLUÇÃO
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Plataforma <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inteligente</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Sistema web completo para gestão sustentável de medicamentos hospitalares
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Mapeamento Inteligente",
                desc: "Para população: localiza pontos de coleta mais próximos para medicamentos vencidos",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Marketplace Hospitalar", 
                desc: "Para hospitais: plataforma de troca e venda de medicamentos entre instituições regulamentadas",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Recycle,
                title: "Logística Reversa",
                desc: "Sistema completo que evita descarte inadequado e aproveita medicamentos em bom estado",
                color: "from-emerald-500 to-green-500"
              },
              {
                icon: Smartphone,
                title: "Acesso Web Responsivo",
                desc: "Interface otimizada para todos os dispositivos com experiência intuitiva",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group backdrop-blur-2xl bg-white/80 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div 
            className="backdrop-blur-2xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 p-8 rounded-3xl border border-white/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Stack Tecnológico</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { name: "Vue.js", icon: Code, desc: "Frontend", color: "text-green-600 bg-green-50" },
                { name: "Java", icon: Server, desc: "Backend", color: "text-red-600 bg-red-50" },
                { name: "SpringBoot", icon: Database, desc: "Framework", color: "text-blue-600 bg-blue-50" },
                { name: "SQLite", icon: Database, desc: "Database", color: "text-purple-600 bg-purple-50" }
              ].map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className={`p-2 rounded-lg ${tech.color}`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <tech.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800">{tech.name}</div>
                    <div className="text-sm text-gray-500">{tech.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center p-6 bg-white/80 rounded-xl shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              </motion.div>
              <h5 className="font-semibold text-gray-900 mb-1">Google Maps API</h5>
              <p className="text-sm text-gray-600">Geolocalização e mapeamento de pontos de coleta</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Brazilian Current Scenario Section */}
      <motion.section 
        className="min-h-screen relative flex items-center py-20 bg-mesh-gradient"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Cenário Atual no Brasil
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              A realidade brasileira no tratamento e descarte de medicamentos
            </motion.p>
          </motion.div>

          {/* Brazilian Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Adequate Treatment Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(147, 51, 234, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Award className="w-12 h-12 text-white" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-6xl font-bold text-purple-600 mb-4 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  14%
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Prefeituras com tratamento adequado</h3>
              </motion.div>
            </InteractiveCard>

            {/* Open Dumps Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(239, 68, 68, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <Recycle className="w-12 h-12 text-white" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-6xl font-bold text-red-600 mb-4 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  74%
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Municípios com lixões a céu aberto</h3>
              </motion.div>
            </InteractiveCard>

            {/* Rivers Contamination Card */}
            <InteractiveCard 
              className="backdrop-blur-2xl bg-white/80 p-8 rounded-3xl shadow-xl border border-white/30"
              glowColor="rgba(59, 130, 246, 0.2)"
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    <Globe className="w-12 h-12 text-white" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-6xl font-bold text-blue-600 mb-4 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  100%
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Rios com presença de fármacos</h3>
              </motion.div>
            </InteractiveCard>
          </div>
        </div>
      </motion.section>

      {/* Expected Impact Section */}
      <motion.section 
        className="min-h-screen relative flex items-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Impacto Esperado
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Os resultados que esperamos alcançar com a implementação do MeDispose
            </motion.p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div 
            className="backdrop-blur-2xl bg-gradient-to-br from-emerald-50/80 to-blue-50/80 rounded-3xl p-12 shadow-xl border border-white/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Waste Reduction */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-6xl font-bold text-emerald-600 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  -75%
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Descarte Inadequado</h3>
                <p className="text-gray-600">Redução significativa no descarte incorreto de medicamentos</p>
              </motion.div>

              {/* Utilization Increase */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-6xl font-bold text-blue-600 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  +50%
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aproveitamento</h3>
                <p className="text-gray-600">Aumento no reaproveitamento de medicamentos em bom estado</p>
              </motion.div>

              {/* Traceability */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-6xl font-bold text-purple-600 mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  100%
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rastreabilidade</h3>
                <p className="text-gray-600">Controle total sobre o ciclo de vida dos medicamentos</p>
              </motion.div>
            </div>

            {/* Additional Benefits */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Leaf className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustentabilidade Ambiental</h4>
                    <p className="text-sm text-gray-600">Redução da contaminação do meio ambiente</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <DollarSign className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Economia de Recursos</h4>
                    <p className="text-sm text-gray-600">Redução significativa nos custos hospitalares</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        ref={el => sectionRefs.current[4] = el}
        className="min-h-screen relative flex items-center py-20 bg-mesh-gradient-dark text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ perspective: "1200px" }}
      >
        <FloatingPills count={30} />
        
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-emerald-400 font-semibold text-xl tracking-wider uppercase mb-6 block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              04 — Conheça Nossa Equipe
            </motion.span>
            
            <motion.h2 
              className="text-7xl md:text-8xl font-bold mb-8 text-shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Desenvolvedores
              <motion.span 
                className="block gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Inatel
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Estudantes de Engenharia de Software unidos pela paixão por tecnologia e sustentabilidade
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="group backdrop-blur-2xl bg-black/40 rounded-3xl p-8 hover:bg-black/60 transition-all duration-700 border border-white/10"
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  z: 100
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: `translateY(${scrollY * 0.02 * (index - 1)}px)`
                }}
              >
                
                {/* Avatar with custom gradient */}
                <motion.div 
                  className="relative mb-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 * index, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl mx-auto flex items-center justify-center text-4xl font-bold text-white shadow-2xl`}
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>
                  
                  <motion.div 
                    className={`absolute inset-0 w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl mx-auto opacity-30`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                {/* Main info */}
                <div className="text-center mb-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 * index }}
                    viewport={{ once: true }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-emerald-400 font-semibold mb-2 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 * index }}
                    viewport={{ once: true }}
                  >
                    {member.role}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 * index }}
                    viewport={{ once: true }}
                  >
                    {member.description}
                  </motion.p>
                </div>

                {/* Education */}
                <motion.div 
                  className="mb-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 * index }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">🎓 EDUCAÇÃO</h4>
                  <p className="text-gray-300 text-sm">{member.education}</p>
                </motion.div>

                {/* Responsibilities */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 * index }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">💼 RESPONSABILIDADES</h4>
                  <div className="space-y-2">
                    {member.responsibilities.map((resp, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 * index + 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                        <span className="text-gray-300">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 * index }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">🛠️ TECNOLOGIAS</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.tech.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 * index + 0.1 * i }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Social links */}
                <motion.div 
                  className="flex justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 * index }}
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Linkedin, href: member.linkedin, color: "bg-blue-600/20 hover:bg-blue-600/40 text-blue-400" },
                    { icon: Github, href: member.github, color: "bg-gray-600/20 hover:bg-gray-600/40 text-gray-400" },
                    { icon: Mail, href: `mailto:${member.name.toLowerCase().replace(' ', '.')}@example.com`, color: "bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${social.color}`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 * index + 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div 
            className="pt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h3 
                className="text-4xl md:text-5xl font-bold mb-6 text-shadow-glow"
              >
                Transforme o
                <motion.span 
                  className="block gradient-text mt-2"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Futuro da Saúde
                </motion.span>
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Acesse nossa plataforma e seja parte da revolução sustentável na gestão de medicamentos hospitalares
              </motion.p>
              
              {/* Final stats */}
              <motion.div 
                className="grid md:grid-cols-3 gap-8 mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: "♻️", title: "Economia Circular", desc: "Redução de desperdícios", color: "text-emerald-400" },
                  { icon: "🌍", title: "Impacto Global", desc: "Preservação ambiental", color: "text-blue-400" },
                  { icon: "🚀", title: "Tecnologia Avançada", desc: "Soluções inteligentes", color: "text-purple-400" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-6 backdrop-blur-2xl bg-black/40 rounded-2xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <motion.div 
                      className="text-3xl mb-3"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <p className={`${stat.color} font-semibold mb-1`}>{stat.title}</p>
                    <p className="text-gray-400 text-sm">{stat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="group relative bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(16, 185, 129, 0.25)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Acessar MeDispose</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                </motion.button>
                
                <motion.p 
                  className="text-sm text-gray-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔗 Você será redirecionado para a aplicação principal
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer 
        className="bg-black/50 text-white py-12 backdrop-blur-md border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-emerald-400" />
            </motion.div>
            <span className="text-2xl font-bold">MeDispose</span>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Desenvolvido com 💚 por estudantes do Inatel
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2024 MeDispose - Transformando a gestão de medicamentos hospitalares
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
};

export default MeDispose;

