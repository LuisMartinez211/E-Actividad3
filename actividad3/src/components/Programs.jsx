import React from 'react';
import { motion } from 'framer-motion';

function Programs() {
  return (
    <motion.section
      className="py-16 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Programas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Entrenamiento Básico</h3>
            <p>Ideal para principiantes que quieren aprender a nadar.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Entrenamiento Avanzado</h3>
            <p>Perfecto para nadadores experimentados que buscan mejorar.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Natación Competitiva</h3>
            <p>Para aquellos que buscan competir a nivel profesional.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Programs;
