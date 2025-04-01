
import React, { useState } from 'react';
import { getAllCars } from '@/data/cars';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';

const Cars = () => {
  const allCars = getAllCars();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCars = allCars.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    car.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-carblack text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Car Collection</h1>
          
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search by name or manufacturer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-secondary border-0 focus:ring-2 focus:ring-carred text-white"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No cars found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cars;
