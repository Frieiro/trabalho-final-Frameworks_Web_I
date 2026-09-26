import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: 'rgba(16, 19, 31, 0.9)', backdropFilter: 'blur(6px)', borderBottom: '2px solid #97ce4c' }}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <Box
          component="span"
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #d8f7a8 0%, #97ce4c 45%, #3f7a23 100%)',
            boxShadow: '0 0 12px #97ce4c',
          }}
        />
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{ fontFamily: '"Bungee", sans-serif', color: 'primary.main', letterSpacing: 1 }}
        >
          Multiverso
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
