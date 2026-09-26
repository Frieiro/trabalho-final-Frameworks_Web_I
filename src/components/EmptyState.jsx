import { Box, Typography, Button } from '@mui/material'

export default function EmptyState({ onClear }) {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h5" gutterBottom>
        Busca sem Resultado.
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Nenhum personagem combina com essa busca.
      </Typography>
      <Button variant="contained" onClick={onClear}>
        Limpar filtros
      </Button>
    </Box>
  )
}
