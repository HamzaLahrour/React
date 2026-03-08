import { Box, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

import img1 from '../assets/react.png';
import img2 from '../assets/laravel.jpg';
import img3 from '../assets/java.jpg';
const images = { 1: img1, 2: img2, 3: img3 };

export default function Projects() {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={images[project.id]}
              link={project.link}
              tags={project.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}