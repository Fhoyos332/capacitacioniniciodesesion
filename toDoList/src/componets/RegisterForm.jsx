import React, { useState } from 'react';
import { Form, FormGroup, TextInput, Button, Stack } from '@carbon/react';  // Importación de los componentes de Carbon

const RegisterForm = ({ onNavigateToLogin }) => {
  // Estados para capturar los valores de los campos
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Función para manejar el cambio en el campo de nombre de usuario
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Función para manejar el cambio en el campo de correo electrónico
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Función para manejar el cambio en el campo de contraseña
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Función para manejar el envío del formulario (registro)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    // Validar si los campos no están vacíos
    if (!username || !email || !password) {
      setError('Por favor, ingresa todos los campos.');
      setSuccess('');
      return;
    }

    // Validación simple de formato de correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setSuccess('');
      return;
    }

    // Simular el registro (puedes integrar con una API para guardar el usuario en una base de datos)
    setError('');
    setSuccess('¡Registro exitoso! Ahora puedes iniciar sesión.');

    // Alerta de registro exitoso
    window.alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

    // Limpiar los campos después de que el usuario haya sido registrado
    setUsername('');
    setEmail('');
    setPassword('');

    // Redirigir al formulario de inicio de sesión después de la alerta
    onNavigateToLogin();
};

return (
    <div style={{ width: '100%' }}>
    <Form aria-label="Register Form" onSubmit={handleSubmit}>
        <Stack gap={7}>
          {/* Título centrado */}
        <h2 style={{ textAlign: 'center' }}>Registro</h2>

          {/* Campo para Nombre de Usuario */}
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

          {/* Campo para Correo Electrónico */}
        <FormGroup legendText="Correo Electrónico">
            <TextInput
            id="email"
            labelText="Correo Electrónico"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            />
        </FormGroup>

          {/* Campo para Contraseña */}
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

          {/* Mostrar mensajes de error o éxito */}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}

          {/* Botón de Submit */}
        <Button type="submit" kind="primary" style={{ width: '100%' }}>
            Registrarse
        </Button>

          {/* Enlace para volver al Login */}
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
            ¿Ya tienes una cuenta?{' '}
            <button onClick={onNavigateToLogin} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Inicia sesión aquí
            </button>
        </p>
        </Stack>
    </Form>
    </div>
);
};

export default RegisterForm;
