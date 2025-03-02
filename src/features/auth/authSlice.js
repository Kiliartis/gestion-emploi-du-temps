import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'; // Importe l'instance Axios configurée

// État initial
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Thunk pour la connexion
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data; // Retourne les données de l'utilisateur et le token
    } catch (err) {
      return rejectWithValue(err.response.data); // Gère les erreurs de l'API
    }
  }
);

// Slice pour l'authentification
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Déconnexion
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('token'); // Supprime le token du localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      // Connexion en cours
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Connexion réussie
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Met à jour l'utilisateur
        localStorage.setItem('token', action.payload.token); // Stocke le token
      })
      // Connexion échouée
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Met à jour l'erreur
      });
  },
});

// Exporte les actions
export const { logout } = authSlice.actions;

// Exporte le reducer
export default authSlice.reducer;