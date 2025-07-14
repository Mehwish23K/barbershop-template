interface BarberServicesProps {
  darkBackground?: boolean;
}

const BarberServices: React.FC<BarberServicesProps> = ({ darkBackground = true }) => {
  return (
    <div className="space-y-6">
      {[
        {
          name: "Signature Cut & Style",
          price: "$45.00+",
          description: "First visit or has it been longer than 5 weeks? Please book this service!"
        },
        {
          name: "Maintenance Cut",
          price: "$35.00+",
          description: "30 min service with just the basics. For those visiting every 5 weeks or less"
        },
        {
          name: "Barber Cut - 13 & Under",
          price: "$31.00+",
          description: "Barber style haircuts (clipper and short scissor cuts)"
        },
        {
          name: "Advanced Fade/Design",
          price: "$65.00+",
          description: "$1/min"
        },
        {
          name: "Beard Trim",
          price: "$22.00+",
          description: ""
        },
        {
          name: "Scalp Treatment",
          price: "$22.00+",
          description: ""
        }
      ].map((service, index) => (
        <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className={`text-lg font-bold ${darkBackground ? 'text-white' : 'text-gray-900'}`}>
              {service.name}
            </h3>
            <span className={`text-lg font-medium ${darkBackground ? 'text-white' : 'text-gray-900'}`}>
              {service.price}
            </span>
          </div>
          {service.description && (
            <p className={darkBackground ? 'text-white' : 'text-gray-700'}>
              {service.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BarberServices;