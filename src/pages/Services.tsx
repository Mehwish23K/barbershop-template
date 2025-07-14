import React, { useEffect } from 'react';
import BarberServices from '../components/BarberServices';
import SalonServices from '../components/SalonServices';
import scrollToTop from '../helpers/scrollToTop';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[50vh]">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          className="w-full h-full object-cover object-center"
          src="https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-3.jpg"
          alt="Barbershop services background"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4 tracking-tight"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Experience Ottawa's finest grooming services
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Crafted to Perfection
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each service is meticulously designed to bring out your best look with premium products and expert techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-center">
              <h3 className="text-2xl font-bold text-white">Barber Services</h3>
              <p className="text-blue-100">Precision cuts for the modern gentleman</p>
            </div>
            <div className="p-6 ">
             <BarberServices darkBackground={false} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-center">
              <h3 className="text-2xl font-bold text-white">Salon Services</h3>
              <p className="text-red-100">Luxurious treatments for all hair types</p>
            </div>
            <div className="p-6">
              <SalonServices darkBackground={false} />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready for Your Transformation?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Book your appointment today and experience the difference of premium grooming.
          </p>
          <Link 
          to="/reservations" 
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;