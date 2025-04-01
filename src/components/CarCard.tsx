
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
    <div className="car-item flex-shrink-0 w-full max-w-xs md:max-w-sm bg-secondary/30 rounded-lg overflow-hidden shadow-lg">
      <div 
        className="h-52 md:h-64 bg-cover bg-center relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${car.thumbnail})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{car.manufacturer} {car.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{car.year}</p>
        <p className="text-sm line-clamp-2 text-gray-300 mb-4">{car.description.substring(0, 100)}...</p>
        
        <Button 
          onClick={viewDetails} 
          size="sm" 
          variant="secondary"
          className="w-full bg-carred hover:bg-carred/80 text-white"
        >
          <span>View Details</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
