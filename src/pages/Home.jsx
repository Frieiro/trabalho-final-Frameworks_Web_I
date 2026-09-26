import { useEffect, useState } from 'react'
import { Grid, Typography, Pagination, Box } from '@mui/material'
import CharacterCard from '../components/CharacterCard'
import Filters from '../components/Filters'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
import useDebounce from '../hooks/useDebounce'
import { getCharacters, getErrorMessage } from '../services/api'

const initialFilters = { name: '', status: '', gender: '', species: '' }

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState(initialFilters)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reload, setReload] = useState(0)

  const searchName = useDebounce(filters.name.trim())

  useEffect(() => {
    let ignore = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await getCharacters({
          page,
          name: searchName,
          status: filters.status,
          gender: filters.gender,
          species: filters.species,
        })
        if (!ignore) {
          setCharacters(data.results)
          setTotalPages(data.info.pages)
          setTotal(data.info.count)
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
  }, [page, searchName, filters.status, filters.gender, filters.species, reload])

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
    setPage(1)
  }

  const clearFilters = () => {
    setFilters(initialFilters)
    setPage(1)
  }

  const handlePageChange = (_, value) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let content
  if (loading) {
    content = <Loading text="Abrindo o portal..." />
  } else if (error) {
    content = <ErrorMessage message={error} onRetry={() => setReload((n) => n + 1)} />
  } else if (characters.length === 0) {
    content = <EmptyState onClear={clearFilters} />
  } else {
    content = (
      <>
        <Grid container spacing={3}>
          {characters.map((c) => (
            <Grid key={c.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CharacterCard character={c} />
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              siblingCount={1}
            />
          </Box>
        )}
      </>
    )
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" color="primary" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
          Personagens
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 620 }}>
          Todo mundo que ja apareceu em Rick and Morty. Busque pelo nome e combine os filtros para achar quem voce quer.
        </Typography>
      </Box>

      <Filters filters={filters} onChange={handleFilterChange} onClear={clearFilters} />

      {!loading && !error && total > 0 && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {total} {total === 1 ? 'personagem encontrado' : 'personagens encontrados'} - pagina {page} de {totalPages}
        </Typography>
      )}

      {content}
    </>
  )
}
