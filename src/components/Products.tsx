import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'Café de Especialidad',
      description: 'Selección de granos de diferentes regiones del Perú, preparados con métodos como V60, Chemex y Aeropress.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Bebidas Frías y Calientes',
      description: 'Desde los clásicos espresso y cappuccino hasta creaciones innovadoras con ingredientes locales.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Comida Saludable',
      description: 'Variedad de snacks y comidas, como sándwiches, pastelería artesanal y bowls de frutas, con opciones veganas.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Café para Llevar',
      description: 'Compra café en grano o molido para disfrutar en casa, con distintas opciones de tueste y origen.',
      image: 'https://images.unsplash.com/photo-1442550528053-c431ecb55509?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <section id="products" className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;