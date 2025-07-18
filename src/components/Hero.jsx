import React from 'react';
import { TypeAnimation } from 'react-type-animation';


function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center">
      <div className="text-4xl md:text-6xl font-bold mb-4 text-green-500">
      <TypeAnimation
      sequence={[
        'Hi, I’m Ridhi — Developer',
        2000, 
        'Hi, I’m Ridhi — Designer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </div>
      <p className="text-lg md:text-xl text-white mb-8">
        I craft digital experiences that are functional, user-focused, and beautifully simple. <br></br>
        From intuitive UI designs to scalable backend systems, I bring ideas to life with code.
      </p>
      <a
        href="#contact"
        className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
      >
        Contact Me
      </a>
      

    </section>
  );
}

export default Hero;
