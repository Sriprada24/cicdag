import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any login/session data
    localStorage.removeItem('role'); // or clear entire storage: localStorage.clear()

    // Redirect to home
    navigate('/');
  }, [navigate]);

  return null; // or <p>Logging out...</p>
};

export default Logout;
