import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'
import { motion } from "framer-motion"

interface TeamMember {
  name: string
  title: string
  image: string
  link: string
  specialty: string
}

const Team: React.FC = () => { 
  useEffect(() => {
    scrollToTop()
  }, [])

  const teamMembers: TeamMember[] = [
    {
      name: "Sierra",
      title: "Expert Stylist",
      image: "https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg",
      link: "/team/sierra",
      specialty: "Modern Haircuts"
    },
    {
      name: "Billy",
      title: "Master Barber",
      image: "https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg",
      link: "/team/billy",
      specialty: "Precision Fades"
    },
    {
      name: "Jonny",
      title: "Expert Stylist",
      image: "https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg",
      link: "/team/jonny",
      specialty: "Creative Coloring"
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-950'>
      {/* Hero Banner with Parallax Effect */}
      <div className='relative h-[60vh] overflow-hidden'>
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            className='w-full h-full object-cover brightness-50'
            src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'
            alt="Barbershop team background"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white font-serif tracking-tight mb-4"
          >
            THE ARTISTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Meet the talented professionals behind Ottawa's finest cuts
          </motion.p>
        </div>
      </div>

      {/* Team Grid with Staggered Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 0.77, 0.47, 0.97] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Image Container with Glow Effect */}
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                {/* Main Image */}
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                  src={member.image}
                  alt={member.name}
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Specialty Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-6 left-6 bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg"
                >
                  {member.specialty}
                </motion.div>
                
                {/* Core Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-lg">{member.title}</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center"
              >
                <Link 
                  to={member.link}
                  className="relative z-10 px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full overflow-hidden group-hover:bg-white group-hover:text-gray-900 transition-all duration-300"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
              
              {/* Floating Social Icons */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[
                  { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", 
                    color: "bg-blue-600" },
                  { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                    color: "bg-pink-600" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className={`${social.color} p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA with Animated Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          </div>
          <div className="relative inline-block px-8 py-4 bg-gray-900 rounded-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Ready for Your Transformation?
            </h3>
            <Link 
              to="/reservations" 
              className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Session
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Team