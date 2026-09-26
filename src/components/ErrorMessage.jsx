import { Alert, AlertTitle, Button } from '@mui/material'

export default function ErrorMessage({ message, onRetry }) {
  return (
    <Alert
      severity="error"
      variant="outlined"
      sx={{ my: 4 }}
      action={
        onRetry && (
          <Button color="inherit" size="small" onClick={onRetry}>
            Tentar de novo
          </Button>
        )
      }
    >
      <AlertTitle>Nao deu para carregar</AlertTitle>
      {message}
    </Alert>
  )
}
