import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import StatusChip from './StatusChip'
import { speciesLabel } from '../utils/labels'

export default function CharacterCard({ character }) {
  const { id, name, image, status, species, location } = character

  return (
    <Card sx={{ height: '100%', border: '1px solid #262d45', transition: 'border-color .2s', '&:hover': { borderColor: 'primary.main' } }}>
      <CardActionArea component={Link} to={`/item/${id}`} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia component="img" image={image} alt={name} loading="lazy" sx={{ aspectRatio: '1 / 1' }} />
          <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
            <StatusChip status={status} />
          </Box>
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight={800} lineHeight={1.2} gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="secondary.main" fontWeight={600}>
            {speciesLabel(species)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Visto por ultimo em {location.name === 'unknown' ? 'lugar desconhecido' : location.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
