import { Box, Typography, Button, Avatar, Chip, Stack, Container } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import foto from '../assets/foto.jpg';


export default function LandingPage() {
  const { darkMode } = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0d2137, #1a3a5c)'  // oscuro: azul muy oscuro
          : 'linear-gradient(135deg, #1565c0, #42a5f5)',  // claro: azul vivo
        color: 'white',
        py: 10,
        textAlign: 'center',
        width: '100%'
      }}>
        <Avatar
          src={foto}
          sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '4px solid white' }}
        />
        <Typography variant="h3" fontWeight="bold">Hamza Lahrour</Typography>
        <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
          Estudiante de DAW — Desarrollo de Aplicaciones Web
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: 500, mx: 'auto', opacity: 0.85 }}>
          Apasionado por el desarrollo web, actualmente cursando el ciclo formativo de DAW. 
          Me gusta construir aplicaciones limpias y funcionales.
        </Typography>
        <Button
          variant="outlined"
          href="https://github.com/HamzaLahrour"
          target="_blank"
          sx={{ mt: 3, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', background: 'rgba(255,255,255,0.1)' } }}
        >
          GitHub →
        </Button>
      </Box>

      <Container sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Habilidades</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" gap={1}>
          {['JavaScript', 'React', 'PHP', 'Laravel', 'Java', 'MySQL', 'HTML', 'CSS'].map(skill => (
            <Chip key={skill} label={skill} color="primary" variant="outlined" />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}