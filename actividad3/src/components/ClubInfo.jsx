import React from 'react';
import { motion } from 'framer-motion';

function ClubInfo() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Información del Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Actividades Ofrecidas</h3>
            <ul className="list-disc list-inside">
              <li>Natación para principiantes</li>
              <li>Aguagym</li>
              <li>Entrenamiento avanzado</li>
              <li>Natación competitiva</li>
              <li>Clases privadas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Horarios y Precios</h3>
            <p>Lunes a Viernes: 6:00 AM - 8:00 PM</p>
            <p>Sábados: 8:00 AM - 2:00 PM</p>
            <p className="mt-4">Precios:</p>
            <ul className="list-disc list-inside">
              <li>Mensualidad: $50</li>
              <li>Clase privada: $20 por hora</li>
              <li>Promociones especiales: 10% de descuento en la primera inscripción</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ClubInfo;
