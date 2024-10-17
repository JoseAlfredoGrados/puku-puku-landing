import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="z-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Bienvenidos a Puku Puku Café</h1>
        <p className="text-xl mb-8">Descubre el auténtico sabor del café peruano</p>
        <a
          href="#about"
          className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300"
        >
          Conócenos
        </a>
      </div>
    </div>
  );
};

export default Hero;