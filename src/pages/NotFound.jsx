import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h1" color="primary" sx={{ fontSize: { xs: '4rem', md: '6rem' } }}>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Essa dimensao nao existe
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        O endereco que voce abriu nao leva a lugar nenhum.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Voltar para o inicio
      </Button>
    </Box>
  )
}
