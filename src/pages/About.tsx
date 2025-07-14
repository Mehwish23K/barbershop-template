import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import scrollToTop from '../helpers/scrollToTop';

const About: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent z-10" />
        <motion.img 
          className="w-full h-full object-cover object-center"
          src="https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg"
          alt="Barbershop interior"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4 tracking-tight">
            Our Barbering Legacy
          </h1>
          <p className="text-xl text-blue-400 max-w-2xl mx-auto">
            Crafting excellence since 2023 in the heart of Ottawa
          </p>
        </motion.div>
      </div>

      {/* Our Beginning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
            <img 
              src="https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg" 
              className="w-full h-auto rounded-xl shadow-2xl border-4 border-gray-800"
              alt="Barber working"
            />
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-gray-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-blue-500"></div>
              <span className="text-blue-400 uppercase tracking-widest text-sm">Our Roots</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif">
              How We Started
            </h2>
            <p className="text-gray-400 italic">Ottawa | Since 2023</p>
            <div className="space-y-4 text-gray-300">
              <p>
                At Billy's Barber, our journey began with a deep passion for the art of barbering and a strong commitment to serving our community. Our story unfolds in a small, modest barbershop where Billy, our founder, honed his craft.
              </p>
              <p>
                From those early days, word quickly spread about the quality of service and the welcoming atmosphere we offered. As our reputation grew, so did our barbershop.
              </p>
              <p>
                We proudly uphold the same values that guided us from the start: exceptional craftsmanship, a warm atmosphere, and dedication to helping clients achieve their desired look.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 order-2 md:order-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-blue-500"></div>
                <span className="text-blue-400 uppercase tracking-widest text-sm">The Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif">
                Who We Are
              </h2>
              <p className="text-gray-400 italic">Dedicated Professionals</p>
              <div className="space-y-4 text-gray-300">
                <p>
                  In the heart of Ottawa, a small barbershop opened its doors. It was here that Billy embarked on his journey, armed with his scissors, razors, and relentless pursuit of perfection.
                </p>
                <p>
                  As time went on, Billy's reputation as a master barber grew. He built not only a thriving business but also strong relationships with his clients.
                </p>
                <p>
                  Today, Billy's Barber has evolved, but our commitment to excellence remains unchanged. Our barbers are artists who understand that a great haircut is more than service - it's an experience.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg" 
                className="w-full h-auto rounded-xl shadow-2xl border-4 border-blue-400/30"
                alt="Barber team"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            The principles that guide every cut, shave, and interaction at Billy's Barber
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Craftsmanship",
              description: "Precision and attention to detail in every service",
              icon: "✂️"
            },
            {
              title: "Community",
              description: "Building relationships beyond the chair",
              icon: "👥"
            },
            {
              title: "Consistency",
              description: "Delivering excellence every single time",
              icon: "🔄"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center hover:border-blue-400 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;