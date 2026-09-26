import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Box, Typography, Button, Paper, List, ListItem, ListItemText } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import StatusChip from '../components/StatusChip'
import InfoItem from '../components/InfoItem'
import { getCharacter, getEpisodes, getErrorMessage } from '../services/api'
import { genderLabel, speciesLabel } from '../utils/labels'

const unknownText = (value) => (!value || value === 'unknown' ? 'Desconhecido' : value)

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [character, setCharacter] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reload, setReload] = useState(0)

  useEffect(() => {
    let ignore = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await getCharacter(id)
        const episodeIds = data.episode.map((url) => url.split('/').pop())
        const eps = await getEpisodes(episodeIds)
        if (!ignore) {
          setCharacter(data)
          setEpisodes(eps)
        }
      } catch (err) {
        if (!ignore) setError(getErrorMessage(err))
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    load()
    return () => {
      ignore = true
    }
  }, [id, reload])

  const backButton = (
    <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
      Voltar
    </Button>
  )

  if (loading) return <Loading text="Buscando personagem..." />

  if (error) {
    return (
      <>
        {backButton}
        <ErrorMessage message={error} onRetry={() => setReload((n) => n + 1)} />
      </>
    )
  }

  const created = new Date(character.created).toLocaleDateString('pt-BR')

  return (
    <>
      {backButton}

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src={character.image}
            alt={character.name}
            sx={{ width: '100%', borderRadius: 3, border: '3px solid', borderColor: 'primary.main', display: 'block' }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <StatusChip status={character.status} size="medium" />
          <Typography variant="h3" component="h1" sx={{ mt: 2, mb: 3, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            {character.name}
          </Typography>

          <Grid container columnSpacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <InfoItem label="Especie" value={speciesLabel(character.species)} />
              <InfoItem label="Tipo" value={character.type || 'Nao informado'} />
              <InfoItem label="Genero" value={genderLabel(character.gender)} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <InfoItem label="Origem" value={unknownText(character.origin.name)} />
              <InfoItem label="Ultima localizacao" value={unknownText(character.location.name)} />
              <InfoItem label="Cadastrado na API em" value={created} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 5, p: 3, border: '1px solid #262d45' }} elevation={0}>
        <Typography variant="h5" component="h2" gutterBottom>
          Episodios ({episodes.length})
        </Typography>
        <List dense sx={{ maxHeight: 360, overflowY: 'auto' }}>
          {episodes.map((ep) => (
            <ListItem key={ep.id} divider>
              <ListItemText
                primary={ep.name}
                secondary={`${ep.episode} - ${ep.air_date}`}
                slotProps={{ primary: { fontWeight: 700 } }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  )
}
