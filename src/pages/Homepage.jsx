// pages/Homepage.jsx
import React, { useRef, useEffect } from 'react';
import { FaReact, FaLinkedinIn, FaGithub, FaTwitter, FaLaptopCode } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss } from 'react-icons/si';
import images from '../assets/images';
import { servicesData, projectsData } from './allpagesData';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { Wifi, Monitor, CheckCircle } from 'lucide-react'; 
import Form from '../components/Form';


const Homepage = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8; // tilt intensity
    const rotateY = ((x - centerX) / centerX) * -8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const location = useLocation();

  useEffect(() => {
    // If navigation passed state { scrollTo: 'experience' }, scroll smoothly
    if (location?.state?.scrollTo) {
      const id = location.state.scrollTo;
      // small timeout to ensure DOM finished rendering
      setTimeout(() => {
        const el = document.getElementById(id === 'home' ? 'hero' : id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // clear state from history so back button doesn't re-trigger
        window.history.replaceState({}, document.title);
      }, 50);
    }
  }, [location]);

  // --- New Data/Constants for Tech Stack and Socials ---

  const techIcons = [
    { Icon: FaReact, color: "text-cyan-400" },
    { Icon: SiNextdotjs, color: "text-white" },
    { Icon: SiTypescript, color: "text-blue-500" },
    { Icon: SiNodedotjs, color: "text-green-500" },
    { Icon: SiTailwindcss, color: "text-teal-400" },
    { Icon: FaLaptopCode, color: "text-purple-400" },
  ];

  const socialIcons = [
    { Icon: FaLinkedinIn, href: "#", color: "text-blue-400" },
    { Icon: FaGithub, href: "#", color: "text-gray-400" },
    { Icon: FaTwitter, href: "#", color: "text-blue-300" },
  ];

  // Variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // --- End New Data/Constants ---


  return (
    <>
      <div id="hero" className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Rotating Background Image */}
      <img
        src={images.heroImg}
        alt="Background"
        className="absolute b-[50%] min-w-screen inset-0 object-cover object-center z-1 rounded-full -translate-y-8"
        style={{
          animation: "rotateZoom 60s linear infinite",
          transformOrigin: "center center",
        }}
      />

      <style>
        {`
          @keyframes rotateZoom {
            0% {
              transform: scale(1.1) rotate(0deg);
            }
            50% {
              transform: scale(1.15) rotate(180deg);
            }
            100% {
              transform: scale(1.1) rotate(360deg);
            }
          }
        `}
      </style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 md:w-8 md:h-8 transform rotate-45 border border-purple-400/50"></div>
        <div className="absolute top-40 right-40 w-8 h-8 md:w-10 md:h-10 transform rotate-45 border border-cyan-400/50"></div>
        <div className="absolute bottom-60 left-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 border border-green-500/20"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center pt-40 pb-12 px-4  "
      >
        {/* Available Tag */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-400 text-blue-400 bg-blue-900/20"
        >
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Available for hire
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Ashhad
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Full-stack developer crafting elegant solutions with{" "}
          <b>modern technologies</b> and <b>clean code</b>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 font-semibold rounded-lg bg-[#2f2550] text-white border border-[#57419e] transition duration-300 hover:cursor-pointer hover:border-[#a48eeb] hover:bg-[#5f49a7]"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-6 py-3 font-semibold rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-800 transition duration-300 hover:cursor-pointer"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Tech Stack */}
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          Tech Stack
        </h2>

        {/* NEW: Framer Motion for Tech Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {techIcons.map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition duration-300 cursor-pointer ${color}`}
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Bar */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs h-1 rounded-full bg-gray-700 mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            ></motion.div>
          </div>
          <span className="text-sm text-gray-400">2+ Years of experience</span>
        </div>

        {/* Footer */}
        <footer className="mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="max-w-7xl mx-auto flex justify-center space-x-8 text-gray-400 z-20"
          >
            {/* NEW: Framer Motion for Social Icons */}
            {socialIcons.map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-300 ${color} hover:scale-125`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </footer>
      </motion.div>
    </div>

    {/* second overview section -> ABOUT */}
    <section id="about" className="bg-[#0f0f0f] min-h-screen py-16  font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Section Header --- */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView for scroll-based animation
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-400 text-blue-400 bg-blue-900/20"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Project Overview
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#987FFF] to-[#797FFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empower Your Business with Our <br className="hidden sm:inline" /> Comprehensive Technology & IT Solutions
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We specialize in creating powerful, scalable, and elegant solutions that empower businesses to thrive in the modern digital world.
          </motion.p>
        </motion.div>

        {/* --- Services Grid --- */}
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible" // Changed from animate to whileInView for scroll-based stagger
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {servicesData?.map((service, index) => {
            const Icon = service.icon;

            return (
             <motion.div
               key={index}
               ref={(el) => (cardRefs.current[index] = el)}
               onMouseMove={(e) => handleMouseMove(e, index)}
               onMouseLeave={() => handleMouseLeave(index)}
               className="relative p-0.5 rounded-lg overflow-hidden group"
               initial={{ opacity: 0, y: 50 }}
               variants={{ // Added variants for staggered effect
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
               }}
            >
              {/* Gradient overlay / corner highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative h-72 p-6 bg-[#1E182D]/90 rounded-lg border border-gray-500 shadow-xl">
                {/* Icon */}
                <motion.div
                  className="mb-4 text-green-400 group-hover:text-purple-400 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 p-2 rounded-full bg-green-900/50 group-hover:bg-purple-900/50 transition-colors duration-300" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-xl md:text-2xl font-semibold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-400 text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>

            );
          })}
        </motion.div>
      </div>
    </section>

    {/* third section -> EXPERIENCE (kept as-is) */}
    <section id="experience" className="bg-[#09152C] min-h-screen font-inter">
      {/* ... (your existing Experience content remains) */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible" // Changed to whileInView for scroll-based animation
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.span
              className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-400 text-blue-400 bg-blue-900/20"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              Best IT Solutions
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Let's Elevate Your Business with Strategic IT Solutions
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              At TechXen, we understand that every business is unique, which is why we offer a range 
              of flexible IT solutions designed to address your specific challenges and goals.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-6 mb-12"
              initial="hidden"
              whileInView="visible" // Changed to whileInView for scroll-based stagger
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div
                className="flex items-start space-x-4 p-4"
                initial={{ opacity: 0, x: -20 }}
                variants={{ // Added variants for staggered effect
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                 }}
              >
                <motion.div
                  className="flex-shrink-0 p-3 rounded-xl bg-[#2f2550] text-white border border-[#57419e]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Wifi className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Network Infrastructure Solutions</h3>
                  <p className="text-gray-300 text-base">
                    Build a reliable and secure network infrastructure that supports your business operations seamlessly.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 p-4"
                initial={{ opacity: 0, x: -20 }}
                 variants={{ // Added variants for staggered effect
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                 }}
              >
                <motion.div
                  className="flex-shrink-0 p-3 rounded-xl bg-[#2f2550] text-white border border-[#57419e]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Monitor className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Managed IT Services</h3>
                  <p className="text-gray-300 text-base">
                    Focus on your core business activities while we take care of your IT needs with our managed IT services.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              className="py-3 px-8 bg-[#2f2550] text-white border border-[#57419e] font-bold text-lg rounded-xl shadow-lg hover:bg-[#57419e] cursor-pointer transition duration-300 transform hover:scale-[1.03]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More <CheckCircle className="inline w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="lg:col-span-5 mt-12 lg:mt-0 flex justify-center lg:justify-end px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }} // Changed to whileInView
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative w-full max-w-md lg:max-w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={images.dummyImg1}
                alt="Tech Expert Working"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl transform transition duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} // Changed to whileInView
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <div className="absolute inset-0 border-4 border-lime-400 rounded-2xl opacity-50"></div>

              <motion.div
                className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-auto transform translate-x-8 -translate-y-8 shadow-2xl rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }} // Changed to whileInView
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 1 }}
              >
                <img src={images.dummyImg2} alt="Team Collaboration" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 border-2 border-[#09152C] rounded-xl"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-2/5 sm:w-1/3 md:w-2/5 transform -translate-x-8 translate-y-8 shadow-2xl rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }} // Changed to whileInView
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 1.2 }}
              >
                <img src={images.dummyImg3} alt="Client Consultation" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 border-2 border-[#09152C] rounded-xl"></div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* fourth section -> PROJECTS */}
<section id="projects" className="bg-gray-900 text-white ">
  <div className="max-w-7xl mx-auto px-4 py-12">
    {/* Heading */}
    <motion.div
      className="mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-sm sm:text-base text-gray-400">MY WORK</h3>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Projects.
      </h2>
      <p className="text-[#A7AAAD] max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
        Following Projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>
    </motion.div>

    {/* Project Cards */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      initial="hidden"
      whileInView="visible" // Changed to whileInView for scroll-based stagger
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1E182D]/90 border transition-transform duration-300 hover:scale-[1.02]"
          initial={{ opacity: 0, y: 30 }}
          variants={{ // Added variants for staggered effect
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover h-48 sm:h-56 md:h-64 lg:h-56 xl:h-60 rounded-t-lg"
            />
            
          </div>

          <div className="p-4 sm:p-6">
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 break-words"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-base mb-4 break-words"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm text-blue-400 bg-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


    {/* CONTACT (Form) */}
    <div id="contact" className="bg-transparent">
      <Form />
    </div>
    </>
  );
};

export default Homepage;