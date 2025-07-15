
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface MobileMenuProps {
  mobileMenuActive?: boolean;
  setMobileMenuActive: (active: boolean) => void;
}

const MobileMenu = ({ mobileMenuActive, setMobileMenuActive }: MobileMenuProps) => {
  const menuVariants: Variants = {

    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.div
      initial="closed"
      animate={mobileMenuActive ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-lg z-40 md:w-1/2 lg:w-1/3"
    >
      <div className="h-full flex flex-col items-center justify-center gap-8 p-8">
        <motion.div variants={itemVariants}>
          <Link 
            onClick={() => setMobileMenuActive(false)} 
            to='/services'
            className="text-3xl font-serif text-white hover:text-amber-400 transition-colors duration-300"
          >
            Services
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            onClick={() => setMobileMenuActive(false)} 
            to='/about'
            className="text-3xl font-serif text-white hover:text-amber-400 transition-colors duration-300"
          >
            About
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            onClick={() => setMobileMenuActive(false)} 
            to='/team'
            className="text-3xl font-serif text-white hover:text-amber-400 transition-colors duration-300"
          >
            Our Team
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            onClick={() => setMobileMenuActive(false)} 
            to='/contact'
            className="text-3xl font-serif text-white hover:text-amber-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-8">
          <Link 
            onClick={() => setMobileMenuActive(false)} 
            to='/reservations'
            className="text-2xl font-bold bg-amber-400 text-black px-8 py-3 rounded-full hover:bg-amber-500 transition-colors duration-300"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;