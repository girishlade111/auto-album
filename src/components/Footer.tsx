
import React from 'react';
import { Link } from 'react-router-dom';
import { CarFront } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-carblack py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <CarFront className="h-6 w-6 text-carred" />
              <span className="text-xl font-bold tracking-wider">AutoAlbum</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">A virtual gallery for automotive enthusiasts</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-white font-medium mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-carred transition-colors">Home</Link></li>
                <li><Link to="/cars" className="text-gray-400 hover:text-carred transition-colors">Cars</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-carred transition-colors">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-2">Collections</h3>
              <ul className="space-y-2">
                <li><Link to="/cars" className="text-gray-400 hover:text-carred transition-colors">Classics</Link></li>
                <li><Link to="/cars" className="text-gray-400 hover:text-carred transition-colors">Supercars</Link></li>
                <li><Link to="/cars" className="text-gray-400 hover:text-carred transition-colors">Racing Heritage</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} AutoAlbum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
