import React from 'react';

const SustainabilityPillars = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
        Our sustainability pillars
      </h1>
      
      <p className="text-sm md:text-base lg:text-lg mb-12 mx-auto max-w-4xl">
        At Reed, we know that our business significantly impacts the world around us. We also know that if we want that impact to be positive, 
        we need to make a conscious effort to both minimise the harm our business might unwittingly cause, while actively seeking 
        opportunities to do good and make a difference. Our three sustainability pillars help us channel our efforts in places where we can make 
        real change, while also holding us accountable to ourselves and others.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12">
        <div className=" rounded-full w-64 h-64 flex items-center justify-center p-6 mx-auto"  style={{backgroundColor:'#1e1ef0'}}>
          <h2 className="text-white text-xl md:text-2xl font-medium">
            Improving people's lives
          </h2>
        </div>
        
        <div className="bg-navy-900 rounded-full w-64 h-64 flex items-center justify-center p-6 mx-auto" style={{backgroundColor:'#081351'}} >
          <h2 className="text-white text-xl md:text-2xl font-medium">
            Helping communities prosper
          </h2>
        </div>
        
        <div className="bg-teal-300 rounded-full w-64 h-64 flex items-center justify-center p-6 mx-auto" style={{backgroundColor:'#6fcfe1'}}>
          <h2 className="text-navy-900 text-xl md:text-2xl font-medium">
            Caring for our planet
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPillars;