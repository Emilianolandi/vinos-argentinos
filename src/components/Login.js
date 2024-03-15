import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verificar si el usuario y la contraseña son válidos
    if (username.trim() === '' || password.trim() === '') {
      setError('Por favor ingrese un usuario y contraseña válidos.');
      return;
    }

    // Simular una autenticación exitosa (aquí puedes agregar tu lógica de autenticación real)
    if (username === 'usuario' && password === 'contraseña') {
      onLogin(username, password);
    } else {
      setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className='formulario-registro' >
      <div className="caja-principal">
      


      </div>
      <form className="centered-form">
      <h2 className='Registro'>Iniciar Sesión</h2>
        <label>
          <h3>Usuario</h3>
      

          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
       
        <label>
        <h3>Contraseña</h3> 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
       <br />

        <button type="button" onClick={onRegister}>
          Registrarse
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <br/>
      <br/>
      </form>
    </div>
  );
};

export default Login;