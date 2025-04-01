
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CarGallery from '@/components/CarGallery';
import Footer from '@/components/Footer';
import { getAllCars } from '@/data/cars';

const Index = () => {
  const allCars = getAllCars();
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CarGallery cars={allCars} title="Featured Collection" />
        
        <section className="py-20 bg-carblack">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Art of Engineering</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Each sports car is a testament to human ingenuity, pushing the boundaries of what's possible through 
                  aerodynamics, performance, and design. Our gallery showcases these mechanical masterpieces that represent 
                  the pinnacle of automotive excellence.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From the raw power of Italian supercars to the precision engineering of German manufacturers, 
                  explore the stories behind these iconic vehicles and the visionaries who created them.
                </p>
              </div>
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop"
                  alt="Car engine" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
