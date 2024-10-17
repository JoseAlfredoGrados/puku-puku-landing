import React from 'react';
import { Leaf, Coffee, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Puku Puku Café</h2>
        <p className="text-lg text-center mb-12">
          Fundado en 2013, Puku Puku Café es pionero en la difusión de una cultura del café responsable,
          destacándose por su compromiso con los productores locales y el comercio justo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Leaf className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
            <p>Adoptamos prácticas amigables con el medio ambiente en toda nuestra cadena de producción.</p>
          </div>
          <div className="text-center">
            <Coffee className="mx-auto mb-4 text-amber-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Café de Especialidad</h3>
            <p>Ofrecemos café peruano de alta calidad de regiones como Cajamarca y Cusco.</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
            <p>Apoyamos a pequeños productores y promovemos una cultura de apreciación del café.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;