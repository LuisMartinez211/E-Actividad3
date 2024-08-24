import React from 'react';

function Blog() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Acuatlón: Un Deporte Completo</h3>
            <p>Descubre cómo el acuatlón combina la natación y la carrera en una sola competición desafiante.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Preparándote para un Triatlón</h3>
            <p>Consejos para entrenar y mejorar tu rendimiento en las tres disciplinas del triatlón.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
