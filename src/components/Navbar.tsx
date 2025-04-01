
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CarFront } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carblack/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CarFront className="h-6 w-6 text-carred" />
            <span className="text-xl font-bold tracking-wider">AutoAlbum</span>
          </Link>
          
          {isMobile ? (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          ) : (
            <nav className="flex space-x-8">
              <Link to="/" className="text-white hover:text-carred transition-colors">
                Home
              </Link>
              <Link to="/cars" className="text-white hover:text-carred transition-colors">
                Cars
              </Link>
              <Link to="/about" className="text-white hover:text-carred transition-colors">
                About
              </Link>
            </nav>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-carblack/95 backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/" 
              className="text-2xl font-medium text-white hover:text-carred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/cars" 
              className="text-2xl font-medium text-white hover:text-carred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cars
            </Link>
            <Link 
              to="/about" 
              className="text-2xl font-medium text-white hover:text-carred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
