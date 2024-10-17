import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'María Lozano',
      text: 'Puku Puku no solo ofrece un excelente café, sino que también siento que estoy apoyando una causa mayor, promoviendo el trabajo local y cuidando el medio ambiente. El ambiente en sus locales es perfecto para relajarse o trabajar.',
    },
    {
      name: 'Carlos Gutiérrez',
      text: 'Puku Puku me ha hecho apreciar aún más el café peruano. Me encanta cómo se enfocan en la sostenibilidad y en educar a los clientes sobre el proceso del café. Sus catas son de lo mejor para cualquier fanático del café.',
    },
    {
      name: 'Lucía Ortega',
      text: 'Cuando me recomendaron Puku Puku durante mi viaje, no esperaba encontrar una experiencia tan única. Su café es increíble, y la atmósfera acogedora realmente marca la diferencia. Además, me encanta que sean responsables con el medio ambiente.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;