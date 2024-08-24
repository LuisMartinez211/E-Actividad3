import React from 'react';

function Testimonials() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonios de Nuestros Clientes</h2>
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p>"El aguagym ha cambiado mi vida. He mejorado mi condición física y he perdido peso mientras me divierto en el agua."</p>
            <p className="mt-4 text-right">- María González</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p>"Mis hijos han aprendido a nadar de manera segura y efectiva gracias a los entrenadores del club. ¡Estamos muy agradecidos!"</p>
            <p className="mt-4 text-right">- José Martínez</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
