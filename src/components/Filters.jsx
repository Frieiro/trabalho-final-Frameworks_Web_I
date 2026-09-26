import { Grid, TextField, MenuItem, Button, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { statusOptions, genderOptions, speciesOptions } from '../utils/labels'

function SelectFilter({ label, name, value, options, onChange }) {
  return (
    <TextField select fullWidth label={label} name={name} value={value} onChange={onChange}>
      <MenuItem value="">Todos</MenuItem>
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default function Filters({ filters, onChange, onClear }) {
  const hasFilter = Object.values(filters).some((v) => v !== '')

  function handleChange(e) {
    onChange(e.target.name, e.target.value)
  }

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          name="name"
          label="Buscar pelo nome"
          placeholder="Ex: Rick, Morty, Summer..."
          value={filters.name}
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 2 }}>
        <SelectFilter label="Status" name="status" value={filters.status} options={statusOptions} onChange={handleChange} />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 2 }}>
        <SelectFilter label="Genero" name="gender" value={filters.gender} options={genderOptions} onChange={handleChange} />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 2 }}>
        <SelectFilter label="Especie" name="species" value={filters.species} options={speciesOptions} onChange={handleChange} />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <Button fullWidth variant="outlined" size="large" onClick={onClear} disabled={!hasFilter}>
          Limpar filtros
        </Button>
      </Grid>
    </Grid>
  )
}
