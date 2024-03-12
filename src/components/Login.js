import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Agrega la lógica de autenticación aquí
    onLogin(username, password);
  };

  return (
    <div className='formulario-registro'>
      <h2 className='Registro'>Iniciar Sesión</h2>
      <form>
        <label>
          Usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          Contraseña:
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <br></br>
        <button type="button" onClick={onRegister}>
          Registrarse
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
