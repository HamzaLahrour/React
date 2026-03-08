import { Container, Typography } from '@mui/material';
import ExperienceItem from '../components/ExperienceItem';

const experiencia = [
  {
    id: 1,
    role: "Técnico Superior en DAW",
    place: "IES Al-Ándalus",
    dates: "2024 — Actualidad",
    details: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web. Actualmente cursando el segundo año."
  },
  {
    id: 2,
    role: "Bachillerato",
    place: "IES Campos de Nijar",
    dates: "2022 — 2024",
    details: "Bachillerato completado."
  },
  {
    id: 3,
    role: "ESO",
    place: "IES San Isidro Nijar",
    dates: "2018 — 2022",
    details: "Educación Secundaria Obligatoria completada."
  }
];

export default function ExperiencePage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>Experiencia y Formación</Typography>
      {experiencia.map(item => (
        <ExperienceItem
          key={item.id}
          role={item.role}
          place={item.place}
          dates={item.dates}
          details={item.details}
        />
      ))}
    </Container>
  );
}