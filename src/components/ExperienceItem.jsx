import { Box, Typography, Divider } from '@mui/material';

export default function ExperienceItem({ role, place, dates, details }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6">{role}</Typography>
      <Typography variant="subtitle1" color="primary">{place}</Typography>
      <Typography variant="caption" color="text.secondary">{dates}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>{details}</Typography>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}