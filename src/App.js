import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route publique */}
        <Route path="/" element={<Home />} />

        {/* Route de connexion */}
        <Route path="/login" element={<Login />} />

        {/* Routes protégées */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Route par défaut pour les pages non trouvées */}
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
    </Router>
  );
}

export default App;