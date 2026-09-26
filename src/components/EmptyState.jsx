import { Box, Typography, Button } from '@mui/material'

export default function EmptyState({ onClear }) {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h5" gutterBottom>
        Ninguem por aqui
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Nenhum personagem combina com essa busca. Tente outro nome ou tire algum filtro.
      </Typography>
      <Button variant="contained" onClick={onClear}>
        Limpar filtros
      </Button>
    </Box>
  )
}
