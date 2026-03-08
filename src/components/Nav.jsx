import { Link } from 'react-router-dom';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

export default function Nav() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Box sx={{ background: '#1565c0', padding: '0.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {/* Enlaces centrados */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button component={Link} to="/" sx={{ color: 'white', '&:hover': { color: 'white', background: 'rgba(255,255,255,0.15)' } }}>Inicio</Button>
        <Button component={Link} to="/portfolio" sx={{ color: 'white', '&:hover': { color: 'white', background: 'rgba(255,255,255,0.15)' } }}>Portfolio</Button>
        <Button component={Link} to="/experience" sx={{ color: 'white', '&:hover': { color: 'white', background: 'rgba(255,255,255,0.15)' } }}>Experiencia</Button>
      </Box>

      {/* Toggle a la derecha sin descentrar los enlaces */}
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={toggleTheme} />}
        label={darkMode ? '🌙' : '☀️'}
        sx={{ color: 'white', position: 'absolute', right: '2rem' }}
      />
    </Box>
  );
}
