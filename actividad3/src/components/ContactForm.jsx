import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      if (response.status === 200) {
        setStatus('Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Hubo un problema al enviar el mensaje.');
    }
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Enviar
            </button>
          </div>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
