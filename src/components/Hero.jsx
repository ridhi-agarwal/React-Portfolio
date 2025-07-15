import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Hi, I’m Ridhi — a Developer & Designer.
      </h1>
      <p className="text-lg md:text-xl text-white mb-8">
        I craft digital experiences that are functional, user-focused, and beautifully simple. <br></br>
        From intuitive UI designs to scalable backend systems, I bring ideas to life with code.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
