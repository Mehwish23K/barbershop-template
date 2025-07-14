import React, { useEffect } from 'react';
import BarberShopReservation from '../components/BarberShopReservation';
import scrollToTop from '../helpers/scrollToTop';

const Reservations: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          className="w-full h-[50vh] object-cover object-center"
          src="https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-2.jpg"
          alt="Barbershop interior"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4 tracking-tight">
            Book Your Appointment
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Reserve your spot with Ottawa's premier barbers
          </p>
          <div className="mt-8 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Reservation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-600 to-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
              ✨ Your Perfect Style Awaits ✨
            </h2>
            <p className="text-blue-100 text-center mt-2">
              Complete the form below to secure your appointment
            </p>
          </div>
          
          <div className="p-6 sm:p-8">
            <BarberShopReservation />
          </div>
          
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              Need help? Call us at <span className="font-semibold text-blue-600">(613) 555-BARB</span> or visit our salon
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial/CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl sm:text-2xl italic mb-6">
            "The best barber experience in Ottawa. Always leave looking sharp and feeling confident."
          </blockquote>
          <p className="font-medium">- Michael T., Loyal Customer Since 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Reservations;