import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="mr-2 text-amber-600" />
                <span>Calle Martir Olaya 139, Miraflores, Lima, Perú</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-amber-600" />
                <span>+51 1 445 6798</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-amber-600" />
                <span>contacto@pukupukucafe.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Nombre</label>
                <input type="text" id="name" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Correo electrónico</label>
                <input type="email" id="email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
              </div>
              <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;