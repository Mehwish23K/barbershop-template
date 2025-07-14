
import './index.css';
import React, { useEffect, useState } from 'react';
import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import scrollToTop from "./helpers/scrollToTop";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
const App: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [activeCard, setActiveCard] = useState<'barber' | 'salon'>('barber');

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <VideoBanner/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col items-center justify-center">
           <h2 className='z-20 text-neutral-300 text-3xl text-center'>Looking Your Best Never Goes Out of Style.</h2>
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-serif tracking-wider"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            OTTAWA BARBERSHOP
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-2xl px-4"
          >
            Where precision meets passion - crafting Ottawa's finest cuts since 2023
          </motion.p>
            <Link to='/reservations' className='bg-red-900 nav z-22 text-neutral-300 text-xl px-6 py-2 font-bold block rounded-xl '>Book Now</Link>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-950">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-400 mb-8 sm:mb-12 font-serif">
            OUR WORK
          </h2>
          <ImageCarousel />
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          >
            <img 
              className="w-full h-auto rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500"
              src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg'
              alt="Barbershop interior"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 relative"
          >
            <span className="text-blue-400 text-lg sm:text-xl md:text-2xl font-medium">OUR STORY</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-serif text-white">
              About Billy's Barber
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Your go-to destination for top-notch grooming and hairstyling services in the heart of Ottawa.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Founded in 2023, Billy's Barber was born out of a lifelong dream and dedication to the craft of barbering.
            </p>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
              Our team of experienced and skilled barbers is the backbone of our success.
            </p>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-2xl sm:text-lg transition-all duration-300 ">
              Meet Our Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-blue-400 text-xl font-medium tracking-widest">WHAT WE OFFER</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-serif">
        <span className="border-b-4 border-blue-400 pb-2">Our Services</span>
      </h2>
      <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
        Premium grooming experiences tailored just for you
      </p>
    </motion.div>

    {/* Enhanced Card Stack Container */}
    <div className="relative h-[600px] md:h-[700px] w-full max-w-4xl mx-auto">
      {/* Stack Shadow Effect - Creates depth illusion */}
      <motion.div 
        className="absolute top-8 left-4 right-4 h-[600px] md:h-[700px] bg-gray-800 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ 
          opacity: activeCard === 'barber' ? 0.3 : 0.2,
          y: activeCard === 'barber' ? 40 : 60
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div 
        className="absolute top-4 left-2 right-2 h-[600px] md:h-[700px] bg-gray-800 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: activeCard === 'barber' ? 0.2 : 0.1,
          y: activeCard === 'barber' ? 20 : 40
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Barber Services Card */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 h-full w-full"
        initial={{ scale: 0.95, y: 20, opacity: 0.9 }}
        animate={{ 
          scale: activeCard === 'barber' ? 1 : 0.95,
          y: activeCard === 'barber' ? 0 : 20,
          opacity: activeCard === 'barber' ? 1 : 0.8,
          zIndex: activeCard === 'barber' ? 30 : 20,
          boxShadow: activeCard === 'barber' 
            ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' 
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center mb-6">
          <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white font-serif">Barber Services</h3>
        </div>
        <BarberServices />
      </motion.div>

      {/* Salon Services Card */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-700 hover:border-red-400 transition-all duration-300 h-full w-full"
        initial={{ scale: 0.9, y: 40, opacity: 0.7 }}
        animate={{ 
          scale: activeCard === 'salon' ? 1 : 0.9,
          y: activeCard === 'salon' ? 0 : 40,
          opacity: activeCard === 'salon' ? 1 : 0.7,
          zIndex: activeCard === 'salon' ? 30 : 20,
          boxShadow: activeCard === 'salon' 
            ? '0 25px 50px -12px rgba(239, 68, 68, 0.25)' 
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center mb-6">
          <div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white font-serif">Salon Services</h3>
        </div>
        <SalonServices darkBackground={true} />
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button 
          onClick={() => setActiveCard('barber')}
          className={`${activeCard === 'barber' ? 'bg-blue-700 scale-110 shadow-lg' : 'bg-blue-600 shadow-md'} hover:bg-blue-700 text-white uppercase font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center `}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Barber
        </button>
        <button 
          onClick={() => setActiveCard('salon')}
          className={`${activeCard === 'salon' ? 'bg-red-700 scale-110 shadow-lg' : 'bg-red-600 shadow-md'} hover:bg-red-700 text-white uppercase font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center`}
        >
          Salon
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    {/* Service Highlights */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="text-blue-400 mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 font-serif">Quick Service</h4>
              <p className="text-gray-300 text-sm sm:text-base">Efficient grooming without compromising quality</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="text-blue-400 mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 font-serif">Premium Products</h4>
              <p className="text-gray-300 text-sm sm:text-base">Only the finest grooming products used</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-red-400 transition-all duration-300">
              <div className="text-red-400 mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 font-serif">Membership</h4>
              <p className="text-gray-300 text-sm sm:text-base">Exclusive benefits for regular clients</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full opacity-10"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-serif">Ready for Your Transformation?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Ottawa Barbershop difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
              Book Online
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
              Call Us: (613) 555-BARB
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default App;