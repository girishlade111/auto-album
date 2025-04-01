
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CarType } from '@/types';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();
  
  const viewDetails = () => {
    navigate(`/car/${car.id}`);
  };
  
  return (
    <div className="car-item flex-shrink-0 w-80 md:w-96 mr-6 overflow-hidden group">
      <div 
        className="h-52 md:h-64 bg-cover bg-center rounded-lg relative overflow-hidden"
        style={{ backgroundImage: `url(${car.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-white text-xl font-bold mb-1">{car.manufacturer} {car.name}</h3>
          <p className="text-gray-300 text-sm">{car.year}</p>
          
          <div className="mt-3 transform opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Button 
              onClick={viewDetails} 
              size="sm" 
              variant="secondary"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              <span>Details</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
