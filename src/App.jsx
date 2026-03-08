import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeProviderCustom, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import ExperiencePage from './pages/ExperiencePage';

// Componente interno que ya tiene acceso al contexto
function AppContent() {
  const { darkMode } = useTheme(); // leemos si está en modo oscuro o no

  // Creamos el tema de MUI según el modo actual
  const theme = createTheme({
    palette: { mode: darkMode ? 'dark' : 'light' }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* aplica el fondo correcto según el tema */}
      <BrowserRouter>
        <Header />
        <Nav />
        <main style={{ minHeight: '80vh', padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    // ThemeProviderCustom envuelve todo para que el contexto esté disponible
    <ThemeProviderCustom>
      <AppContent />
    </ThemeProviderCustom>
  );
}