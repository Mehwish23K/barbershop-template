import { useState } from 'react';

interface ServicesSelectProps {
  setSelectedService: (service: string) => void;
}

function ServicesSelect({ setSelectedService }: ServicesSelectProps) {
  const [activeTab, setActiveTab] = useState<'barber' | 'salon'>('barber');
  const [localSelectedService, setLocalSelectedService] = useState<string>('Signature Cut & Style');

  const barberServices = [
    { name: 'Signature Cut & Style', emoji: '✂️', duration: '45min' },
    { name: 'Maintenance Cut', emoji: '🧔', duration: '30min' },
    { name: 'Barber Cut - 13 & Under', emoji: '👦', duration: '30min' },
    { name: 'Advanced Fade/Design', emoji: '💈', duration: '60min' },
    { name: 'Beard Trim', emoji: '🧔‍♂️', duration: '25min' },
    { name: 'Scalp Treatment', emoji: '💆', duration: '40min' }
  ];

  const salonServices = [
    { name: 'Wash, Cut & Style', emoji: '💇‍♀️', duration: '60min' },
    { name: 'Salon Cut - 13 & Under', emoji: '👧', duration: '45min' },
    { name: 'Bang Trim', emoji: '💁‍♀️', duration: '15min' },
    { name: 'Shampoo & Blowdry', emoji: '✨', duration: '45min' },
    { name: 'Wash, Cut & Style - Curly Hair', emoji: '🦱', duration: '75min' },
    { name: 'Dry Cut - Curly Hair', emoji: '🦳', duration: '50min' }
  ];

  const handleServiceSelect = (service: string) => {
    setLocalSelectedService(service);
    setSelectedService(service); // Call the parent's setter
  };

  return (
    <div className="space-y-4">
      {/* Service Type Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'barber'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('barber')}
        >
          Barber Services
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'salon'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('salon')}
        >
          Salon Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(activeTab === 'barber' ? barberServices : salonServices).map((service) => (
          <button
            key={service.name}
            type="button"
            className={`p-3 rounded-lg border text-left transition-all duration-200 ${
              localSelectedService === service.name
                ? 'border-blue-500 bg-blue-50 shadow-sm'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
            onClick={() => handleServiceSelect(service.name)}
          >
            <div className="flex justify-between items-start">
              <span className="font-medium text-gray-800">
                {service.emoji} {service.name}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
                {service.duration}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Fallback select for mobile/accessibility */}
      <select
        className="sr-only"
        value={localSelectedService}
        onChange={(e) => handleServiceSelect(e.target.value)}
      >
        {barberServices.concat(salonServices).map((service) => (
          <option key={service.name} value={service.name}>
            {service.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ServicesSelect;