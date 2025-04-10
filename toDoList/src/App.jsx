import { useState } from 'react';
import './App.css';
import '@carbon/styles/css/styles.css'; // Importación de los estilos de Carbon
import LoginForm from './componets/LoginForm';  // Importación del formulario de inicio de sesión
import RegisterForm from './componets/RegisterForm';  // Importación del formulario de registro

function App() {
  // Estado para controlar qué formulario se muestra
  const [showLogin, setShowLogin] = useState(true); // Inicialmente mostramos el formulario de login

  // Función para redirigir al formulario de Login después del registro exitoso
  const handleRegisterSuccess = () => {
    setShowLogin(true); // Cambia a LoginForm
  };

  return (
    <div>
      {/* Mostrar el formulario de Login o Registro basado en el estado */}
      {showLogin ? (
        <LoginForm onNavigateToRegister={() => setShowLogin(false)} />
      ) : (
        <RegisterForm onNavigateToLogin={() => setShowLogin(true)} onRegisterSuccess={handleRegisterSuccess} />
      )}
    </div>
  );
}

export default App;
