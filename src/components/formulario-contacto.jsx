// src/components/ContactoForm.jsx
import React, { useState } from 'react';

const ContactoForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    // Aquí iría la lógica para enviar el formulario (email, API, etc.)
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-gray-100 shadow-md p-6">
          <h3 className="bg-black text-white text-center font-semibold py-3 px-4 mb-6">
            ¿Tienes alguna pregunta para CENTURY 21 Norte? Contáctanos<br/>
            Para quejas y solicitudes por favor utiliza el formulario a continuación
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="nombre" placeholder="NOMBRE*" value={form.nombre} onChange={handleChange} className="p-2 border w-full" required />
              <input type="text" name="apellido" placeholder="APELLIDO*" value={form.apellido} onChange={handleChange} className="p-2 border w-full" required />
              <input type="tel" name="telefono" placeholder="TELEFONO*" value={form.telefono} onChange={handleChange} className="p-2 border w-full" required />
              <input type="email" name="correo" placeholder="CORREO*" value={form.correo} onChange={handleChange} className="p-2 border w-full" required />
            </div>
            <textarea name="mensaje" placeholder="Déjenos su mensaje aquí..." value={form.mensaje} onChange={handleChange} className="p-2 border w-full h-32 resize-none" required></textarea>
            <button type="submit" className="bg-yellow-700 text-white py-2 px-6 font-semibold hover:bg-yellow-800">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoForm;