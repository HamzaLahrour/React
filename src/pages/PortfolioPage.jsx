import { Container, Typography } from '@mui/material';
import Projects from '../components/Projects';

export default function PortfolioPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>Mis Proyectos</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Proyectos desarrollados durante mi formación en DAW.
      </Typography>
      <Projects />
    </Container>
  );
}