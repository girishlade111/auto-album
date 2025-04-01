
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCar } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = id ? getCar(id) : undefined;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If car not found, redirect to home
    if (!car && id) {
      navigate('/');
    }
  }, [car, id, navigate]);
  
  if (!car) {
    return null;
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Image */}
        <div className="h-[50vh] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
          <div 
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${car.image})` }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-6 bg-background/50 backdrop-blur-sm border-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="bg-carblack border border-white/5 rounded-xl p-6 md:p-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {car.manufacturer} <span className="text-carred">{car.name}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">{car.year}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Overview</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {car.description}
                </p>
                
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">History</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {car.history}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Specifications</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-gray-400">Engine</h3>
                    <p className="text-white font-medium">{car.specs.engine}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Power</h3>
                    <p className="text-white font-medium">{car.specs.power}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Torque</h3>
                    <p className="text-white font-medium">{car.specs.torque}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Top Speed</h3>
                    <p className="text-white font-medium">{car.specs.topSpeed}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Acceleration</h3>
                    <p className="text-white font-medium">{car.specs.acceleration}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Weight</h3>
                    <p className="text-white font-medium">{car.specs.weight}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Transmission</h3>
                    <p className="text-white font-medium">{car.specs.transmission}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CarDetail;
