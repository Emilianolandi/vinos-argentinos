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

  const [errores, setErrores] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampos({ ...campos, [name]: value });
    // Limpiar el mensaje de error cuando se actualiza el campo
    setErrores({ ...errores, [name]: '' });
  };

  const handleSubmit = () => {
    // Validar campos obligatorios antes de enviar el formulario
    const nuevosErrores = {};
    Object.keys(campos).forEach((campo) => {
      if (!campos[campo]) {
        nuevosErrores[campo] = 'Este campo es obligatorio';
      }
    });

    if (Object.keys(nuevosErrores).length > 0) {
      // Si hay errores, actualizar el estado de errores y no enviar el formulario
      setErrores(nuevosErrores);
    } else {
      
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
    }
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
            <p className="error-message">{errores.nombre}</p>
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
            <p className="error-message">{errores.apellido}</p>
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
            <p className="error-message">{errores.telefono}</p>
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
            <p className="error-message">{errores.email}</p>
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
            <p className="error-message">{errores.mensaje}</p>
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
