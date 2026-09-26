import { Box, CircularProgress, Typography } from '@mui/material'

export default function Loading({ text = 'Carregando...' }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 8 }}>
      <CircularProgress color="primary" />
      <Typography color="text.secondary">{text}</Typography>
    </Box>
  )
}
