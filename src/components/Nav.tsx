import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logo from '../images/logo.png';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileMenuShowing, setMobileMenuShowing] = useState(false);
    const [scrollDir, setScrollDir] = useState("scrolling up");
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        const threshold = 75;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            handleScroll();
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled]);

    // Determine navbar styles based on page and scroll state
    const getNavbarStyles = () => {
        if (isHomePage) {
            return {
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            };
        } else {
            return {
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
                backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            };
        }
    };

    return (  <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ 
                    y: scrollDir === 'scrolling up' ? 0 : -100,
                    ...getNavbarStyles()
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 w-full flex items-center justify-between text-white h-24 px-6 z-50"
            >
                <Link 
                    onClick={() => setMobileMenuActive(false)} 
                    to="/"
                    className="z-50"
                >
                    <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Enhanced Logo Container */}
                        <div className="relative">
                            <motion.img 
                                src={logo} 
                                className="w-48 h-auto drop-shadow-lg" 
                                alt="logo"
                                initial={{ opacity: 0.9 }}
                                whileHover={{ 
                                    opacity: 1,
                                    filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))'
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Optional Glow Effect */}
                            <motion.div 
                                className="absolute inset-0 bg-amber-400 rounded-full opacity-0"
                                initial={{ scale: 0.9 }}
                                whileHover={{ 
                                    opacity: 0.1,
                                    scale: 1.1
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                        
                     
                    </motion.div>
                </Link>
      {/* Desktop Navigation */}
                <motion.ul 
                    className="hidden md:flex items-center gap-12 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.li whileHover={{ scale: 1.05 }}>
                        <Link 
                            to='/services' 
                            className={`font-serif text-xl hover:text-amber-400 transition-colors duration-300 relative group ${isHomePage && !scrolled ? 'text-white' : 'text-gray-300'}`}
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.05 }}>
                        <Link 
                            to='/about' 
                            className={`font-serif text-xl hover:text-amber-400 transition-colors duration-300 relative group ${isHomePage && !scrolled ? 'text-white' : 'text-gray-300'}`}
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.05 }}>
                        <Link 
                            to='/team' 
                            className={`font-serif text-xl hover:text-amber-400 transition-colors duration-300 relative group ${isHomePage && !scrolled ? 'text-white' : 'text-gray-300'}`}
                        >
                            Our Team
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.05 }}>
                        <Link 
                            to='/contact' 
                            className={`font-serif text-xl hover:text-amber-400 transition-colors duration-300 relative group ${isHomePage && !scrolled ? 'text-white' : 'text-gray-300'}`}
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link 
                            to='/reservations' 
                            className={`${isHomePage && !scrolled ? 'bg-white text-black hover:bg-gray-200' : 'bg-white text-black hover:bg-amber-500 '} font-bold py-2 px-6 rounded-full transition-colors duration-300`}
                        >
                            Book Now
                        </Link>
                    </motion.li>
                </motion.ul>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden z-50"
                    onClick={() => { setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true) }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="w-10 h-10 flex flex-col justify-center items-center">
                        {mobileMenuActive ? (
                            <motion.span 
                                className="block w-8 h-0.5 bg-amber-400"
                                animate={{ rotate: 45, y: 6 }}
                            />
                        ) : (
                            <motion.span 
                                className={`block w-8 h-0.5 ${isHomePage && !scrolled ? 'bg-white' : 'bg-gray-300'} mb-2`}
                                animate={{ rotate: 0, y: 0 }}
                            />
                        )}
                        {mobileMenuActive ? (
                            <motion.span 
                                className="block w-8 h-0.5 bg-amber-400"
                                animate={{ rotate: -45, y: -6 }}
                            />
                        ) : (
                            <motion.span 
                                className={`block w-8 h-0.5 ${isHomePage && !scrolled ? 'bg-white' : 'bg-gray-300'}`}
                                animate={{ rotate: 0, y: 0 }}
                            />
                        )}
                    </div>
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuShowing && (
                <MobileMenu 
                    mobileMenuActive={mobileMenuActive} 
                    setMobileMenuActive={setMobileMenuActive}
                />
            )}
        </>
    );
};

export default Nav;