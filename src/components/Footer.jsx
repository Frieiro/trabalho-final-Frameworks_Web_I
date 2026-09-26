import { Box, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', color: 'text.secondary' }}>
      <Typography variant="body2">
        Dados da{' '}
        <Link href="https://rickandmortyapi.com" target="_blank" rel="noreferrer" color="secondary">
          Rick and Morty API
        </Link>
        {' '}- Trabalho Final de Frameworks Web I, Unilavras
      </Typography>
    </Box>
  )
}
