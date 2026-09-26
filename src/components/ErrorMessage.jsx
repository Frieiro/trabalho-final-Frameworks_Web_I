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
            Tente Novamente
          </Button>
        )
      }
    >
      <AlertTitle>Falha ao Carregar.</AlertTitle>
      {message}
    </Alert>
  )
}
