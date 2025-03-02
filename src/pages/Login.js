import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Données envoyées :', { email, password }); // Ajoute ce log
    try {       
        const response = await axios.post('http://localhost:5000/api/auth/login', { email, password }); 
        localStorage.setItem('token', response.data.token);
        dispatch(login(response.data.user));
        navigate('/dashboard'); // Redirection après connexion
    } catch (err) {
        console.error('Erreur lors de la connexion', err);
        alert(err.message || 'Erreur lors de la connexion'); // Affiche le message d'erreur
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      {error && <p style={{ color: 'red' }}>{error.message || 'Erreur lors de la connexion'}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Connexion en cours...' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
};

export default Login;