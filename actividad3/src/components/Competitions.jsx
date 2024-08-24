import React from 'react';
import { motion } from 'framer-motion';

function Competitions() {
  return (
    <motion.section
      className="py-16 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Competencias y Eventos</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Torneo de Natación</h3>
            <p>Fecha: 15 de Septiembre</p>
            <p>Descripción: Competencia abierta para todas las edades y niveles.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Carrera de Acuatlón</h3>
            <p>Fecha: 20 de Octubre</p>
            <p>Descripción: Evento combinado de natación y carrera a pie.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Competitions;
