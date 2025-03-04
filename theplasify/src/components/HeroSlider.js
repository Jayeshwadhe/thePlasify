// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// function HeroSlider() {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/heroSlider/getAllslides');
//         console.log(response.data);
        
//         setSlides(response.data);
//       } catch (err) {
//         console.error('Error fetching slides:', err);
//       }
//     };

//     fetchSlides();
//   }, []);
//   console.log(slides);
  

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div className="relative h-[500px] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide._id}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <img
//             src={slide.images && slide.images.length > 0 
//               ? `http://localhost:5000/${slide.images[0]}`
//               : 'http://localhost:5000/default-placeholder.png'}
//             alt={slide.title}
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-black/50">
//             <div className="container mx-auto h-full flex items-center px-4">
//               <div
//                 className={`max-w-2xl text-white transition-transform duration-1000 ${
//                   index === currentSlide ? 'translate-x-0' : 'translate-x-full'
//                 }`}
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
//                 <p className="text-xl md:text-2xl">{slide.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// }

// export default HeroSlider;



























import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import HomeSLider from '../assest/homeslider.jpg'
function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/heroSlider/getAllslides');
        setSlides(response.data);
      } catch (err) {
        console.error('Error fetching slides:', err);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className=' px-0 lg:px-16'>
    <div className="relative w-[100%] mx-auto h-[600px] overflow-hidden  shadow-lg ">
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            // src={slide.images && slide.images.length > 0
            //   ? `http://localhost:5000/${slide.images[0]}`
            //   : {HomeSLider}}
            src={HomeSLider}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40">
            <div className="container mx-auto h-full flex items-center ">
              <div
                className={`max-w-3xl text-white transition-transform duration-1000 ${
                  index === currentSlide ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-center">
                  {/* {slide.title || "We are Offering"} */}
                   UK's No.1 Staffing and Recruitment company
                </h1>
                <p className="text-2xl md:text-3xl font-light opacity-90">
                  {/* {slide.description || "IT Solutions to improve and simulate your business"} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-[#00BFB3]/20 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-[#00BFB3]/20 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-[#00BFB3] w-6' 
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default HeroSlider;