
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop')",
          backgroundPosition: "center 30%"
        }}
      ></div>
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="block">Discover</span>
            <span className="block text-carred">Automotive</span>
            <span className="block">Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore our curated collection of iconic sports cars, their remarkable histories, and the engineering that defines them.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-carred hover:bg-carred/90">
              <Link to="/cars" className="flex items-center gap-2">
                Browse Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
