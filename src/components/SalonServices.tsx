interface SalonServicesProps {
  darkBackground?: boolean;
}

function SalonServices({ darkBackground = false }: SalonServicesProps) {
  return (
    <div className="space-y-6">
      {[
        {
          name: "Wash, Cut & Style",
          price: "$50.00+",
          description: "Longer style haircuts with blowdry and styling."
        },
        {
          name: "Salon Cut - 13 & Under",
          price: "$31.00+",
          description: "Longer style haircuts with quick blowdry and styling."
        },
        {
          name: "Bang Trim",
          price: "$22.00+",
          description: ""
        },
        {
          name: "Shampoo & Blowdry",
          price: "$40.00+",
          description: "$1/min"
        },
        {
          name: "Wash, Cut & Style - Curly Hair",
          price: "$60.00+",
          description: "If your name is Eva this haircut is 100% free."
        },
        {
          name: "Dry Cut - Curly Hair",
          price: "$50.00+",
          description: ""
        }
      ].map((service, index) => (
        <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className={`text-lg font-bold ${darkBackground ? 'text-white' : 'text-gray-900'}`}>
              {service.name}
            </h3>
            <span className={`text-lg font-medium ${darkBackground ? 'text-red-300' : 'text-red-600'}`}>
              {service.price}
            </span>
          </div>
          {service.description && (
            <p className={darkBackground ? 'text-gray-300' : 'text-gray-600'}>
              {service.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SalonServices;