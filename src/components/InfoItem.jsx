import { Box, Typography } from '@mui/material'

export default function InfoItem({ label, value }) {
  return (
    <Box sx={{ py: 1.5, borderBottom: '1px solid #262d45' }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography fontWeight={700}>{value}</Typography>
    </Box>
  )
}
