import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [campos, setCampos] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    asunto: 'soporte',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampos({ ...campos, [name]: value });
  };

  const handleSubmit = () => {
    // Lógica de envío de formulario (puedes implementar esto según tus necesidades)
    console.log('Formulario enviado:', campos);
    // Limpieza de campos después del envío
    setCampos({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      asunto: 'soporte',
      mensaje: ''
    });
  };

  return (
    <>
      <h1>REGISTRATE</h1>

      <section className="formulario">
        <form>
          <div>
            <label htmlFor="nombre">Nombre </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="input-field"
              value={campos.nombre}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="apellido">Apellido </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              className="input-field"
              value={campos.apellido}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="input-field"
              value={campos.telefono}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              name="email"
              className="input-field"
              value={campos.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="asunto">Asunto </label>
            <select
              id="asunto"
              name="asunto"
              className="input-field"
              value={campos.asunto}
              onChange={handleInputChange}
            >
              <option value="soporte">Soporte</option>
              <option value="ventas">Ventas</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje </label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="input-field"
              value={campos.mensaje}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default Formulario;
