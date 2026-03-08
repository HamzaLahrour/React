import { Card, CardContent, CardMedia, CardActions, Typography, Button, Chip, Box } from '@mui/material';

export default function ProjectCard({ title, description, image, link, tags }) {
  return (
    <Card sx={{ maxWidth: 345, transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
      <CardMedia component="img" height="160" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Box sx={{ mt: 1, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {tags.map(tag => <Chip key={tag} label={tag} size="small" />)}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">Ver proyecto</Button>
      </CardActions>
    </Card>
  );
}