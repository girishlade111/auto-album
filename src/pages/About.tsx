
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CarFront } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <CarFront className="h-12 w-12 text-carred" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About AutoAlbum</h1>
            
            <div className="prose prose-lg prose-invert mx-auto">
              <p>
                Welcome to AutoAlbum, a virtual gallery dedicated to the most iconic and beautiful sports cars in automotive history. 
                As an enthusiast and lover of automotive engineering, I've created this space to share my passion with others who appreciate 
                the artistry, innovation, and excitement that these machines represent.
              </p>
              
              <p>
                Each car in our collection has been carefully selected for its historical significance, engineering excellence, 
                or cultural impact. My goal is not just to showcase beautiful machines, but to tell their stories – the designers who 
                shaped them, the engineering challenges they overcame, and the legacy they've left in the automotive world.
              </p>
              
              <p>
                This site is a labor of love, created by a passionate collector and enthusiast. I'm constantly updating the collection 
                with new additions and more detailed information. If you have suggestions for cars to add or information to include, 
                please feel free to reach out.
              </p>
              
              <p>
                Thank you for visiting AutoAlbum. I hope you enjoy exploring these masterpieces of design and engineering as much as I 
                enjoy sharing them with you.
              </p>
              
              <div className="mt-12 text-center text-gray-400">
                <p>"The sound of a car engine is a symphony, its design a sculpture, and the experience of driving a form of poetry."</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
