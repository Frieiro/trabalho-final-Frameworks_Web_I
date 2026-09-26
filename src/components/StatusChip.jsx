import { Chip, Box } from '@mui/material'
import { statusLabel, statusColor } from '../utils/labels'

export default function StatusChip({ status, size = 'small' }) {
  const key = status?.toLowerCase() || 'unknown'
  const color = statusColor[key] || statusColor.unknown

  return (
    <Chip
      size={size}
      label={statusLabel(key)}
      icon={<Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color, ml: '8px !important' }} />}
      sx={{ bgcolor: 'rgba(0,0,0,0.55)', color: '#fff', fontWeight: 700 }}
    />
  )
}
