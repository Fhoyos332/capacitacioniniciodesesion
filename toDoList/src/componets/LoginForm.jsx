import React, { useState } from 'react';
import { Form, FormGroup, TextInput, Button, Stack } from '@carbon/react';
import { useSelector } from 'react-redux';

const LoginForm = ({ onNavigateToRegister, onNavigateToHome }) => {
  const users = useSelector((state) => state.users.users);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
      setError('Usuario o contraseña incorrectos.');
      return;
    }

    setError('');
    onNavigateToHome(); // Redirige a la página de inicio
  };

  return (
    <div style={{ width: '100%' }}>
      <Form aria-label="Login Form" onSubmit={handleSubmit}>
        <Stack gap={7}>
          <h2 style={{ textAlign: 'center' }}>Inicio de Sesión</h2>

          <FormGroup legendText="Nombre de Usuario">
            <TextInput
              id="username"
              labelText="Nombre de Usuario"
              placeholder="Ingresa tu nombre de usuario"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </FormGroup>

          <FormGroup legendText="Contraseña">
            <TextInput
              id="password"
              labelText="Contraseña"
              placeholder="Ingresa tu contraseña"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </FormGroup>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <Button type="submit" kind="primary" style={{ width: '100%' }}>
            Iniciar sesión
          </Button>

          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            ¿No tienes cuenta?{' '}
            <button onClick={onNavigateToRegister} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Regístrate aquí
            </button>
          </p>
        </Stack>
      </Form>
    </div>
  );
};

export default LoginForm;

