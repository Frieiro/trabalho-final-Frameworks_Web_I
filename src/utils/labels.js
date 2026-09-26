export const statusOptions = [
  { value: 'alive', label: 'Vivo' },
  { value: 'dead', label: 'Morto' },
  { value: 'unknown', label: 'Desconhecido' },
]

export const genderOptions = [
  { value: 'female', label: 'Feminino' },
  { value: 'male', label: 'Masculino' },
  { value: 'genderless', label: 'Sem genero' },
  { value: 'unknown', label: 'Desconhecido' },
]

export const speciesOptions = [
  { value: 'Human', label: 'Humano' },
  { value: 'Alien', label: 'Alienigena' },
  { value: 'Humanoid', label: 'Humanoide' },
  { value: 'Robot', label: 'Robo' },
  { value: 'Animal', label: 'Animal' },
  { value: 'Mythological Creature', label: 'Criatura mitologica' },
  { value: 'Cronenberg', label: 'Cronenberg' },
  { value: 'Poopybutthole', label: 'Poopybutthole' },
  { value: 'Disease', label: 'Doenca' },
  { value: 'unknown', label: 'Desconhecido' },
]

function findLabel(list, value) {
  const item = list.find((o) => o.value.toLowerCase() === String(value).toLowerCase())
  return item ? item.label : value
}

export const statusLabel = (v) => findLabel(statusOptions, v)
export const genderLabel = (v) => findLabel(genderOptions, v)
export const speciesLabel = (v) => findLabel(speciesOptions, v)

export const statusColor = {
  alive: '#97ce4c',
  dead: '#e4665c',
  unknown: '#9aa0b4',
}
