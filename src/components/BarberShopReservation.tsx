import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import ServicesSelect from './ServicesSelect';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function BarberShopReservation() {
  const [selectedStylist, setSelectedStylist] = useState('Sierra');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('Signature Cut & Style');
  const [message, setMessage] = useState<string>('');
  const [datePicked, setDatePicked] = useState<number[]>([]);
  const [email, setEmail] = useState<string>('');

  // Generate time slots
  const timeSlots: string[] = [];
  let currentTime = new Date('2023-01-01T08:00:00');
  const endTime = new Date('2023-01-01T18:00:00');

  while (currentTime <= endTime) {
    const timeString: string = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeSlots.push(timeString);
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  useEffect(() => {
    setDatePicked([]);
    for (let i = 0; i < 20; i++) {
      if (Math.floor(Math.random() * 2) === 1) {
        setDatePicked(prev => prev.concat(i));
      }
    }
  }, [selectedDate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDate && selectedService && selectedStylist && selectedTime && email) {
      setMessage(`Success! Your booking with ${selectedStylist} for ${selectedService} on ${selectedDate} at ${selectedTime} is confirmed. We'll email details to ${email}.`);
    }
  };

  function CustomSelect({ options, value, onChange }: CustomSelectProps) {
    return (
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-3">
        {options.map((option, index) => (
          <button
            disabled={datePicked.includes(index)}
            key={option}
            className={`transition-all duration-200 rounded-lg text-sm sm:text-base ${
              datePicked.includes(index) 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : value === option 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
            } py-2 px-1 sm:px-3`}
            onClick={() => onChange(option)}
            type='button'
          >
            {option}
          </button>
        ))}
      </div>
    );
  }

  // Current date for min date input
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 font-serif">
            Book Your Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Reserve your spot with Ottawa's premier barbershop
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Progress indicator */}
          <div className="flex border-b border-gray-200">
            <div className="w-1/3 py-4 text-center border-b-2 border-blue-600 font-medium text-blue-600">
              Service
            </div>
            <div className={`w-1/3 py-4 text-center border-b-2 ${selectedDate ? 'border-blue-600 text-blue-600' : 'border-gray-200 text-gray-500'} font-medium`}>
              Date & Time
            </div>
            <div className={`w-1/3 py-4 text-center border-b-2 ${message ? 'border-blue-600 text-blue-600' : 'border-gray-200 text-gray-500'} font-medium`}>
              Confirm
            </div>
          </div>

          <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
            {/* Service Selection */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800">Select Your Service</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Barber
                  </label>
                  <select
                    value={selectedStylist}
                    onChange={(e) => setSelectedStylist(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                  >
                    <option value="Sierra">Sierra (Master Barber)</option>
                    <option value="Billy">Billy (Beard Specialist)</option>
                    <option value="Jonny">Jonny (Style Expert)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <ServicesSelect setSelectedService={setSelectedService} />
                </div>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </div>
                <h2 className="text-xl font-bold text-gray-800">Choose Date & Time</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Date
                  </label>
                  <input
                    min={minDate}
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selected Time
                  </label>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 min-h-[48px] flex items-center">
                    {selectedTime || <span className="text-gray-400">Time will appear after date selection</span>}
                  </div>
                </div>
              </div>

              {selectedDate && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots
                  </h3>
                  <CustomSelect 
                    options={timeSlots} 
                    value={selectedTime} 
                    onChange={setSelectedTime} 
                  />
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </div>
                <h2 className="text-xl font-bold text-gray-800">Your Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">We'll send confirmation details here</p>
                </div>
              </div>
            </div>

            {/* Summary & Submission */}
            <div className="border-t border-gray-200 pt-6">
              {message ? (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                  <p className="font-medium">{message}</p>
                </div>
              ) : (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Appointment Summary</h3>
                  <div className="text-sm text-gray-600">
                    {selectedService} with {selectedStylist}
                    {selectedDate && ` on ${selectedDate}`}
                    {selectedTime && ` at ${selectedTime}`}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !email}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need to reschedule? Contact us at least 24 hours before your appointment.</p>
        </div>
      </div>
    </div>
  );
}

export default BarberShopReservation;