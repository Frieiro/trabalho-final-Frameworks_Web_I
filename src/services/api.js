import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 10000,
})

export async function getCharacters({ page = 1, name, status, gender, species }) {
  const params = { page }
  if (name) params.name = name
  if (status) params.status = status
  if (gender) params.gender = gender
  if (species) params.species = species

  try {
    const res = await api.get('/character', { params })
    return res.data
  } catch (err) {
    // a API responde 404 quando o filtro nao encontra ninguem, entao tratamos como lista vazia
    if (err.response?.status === 404) {
      return { info: { count: 0, pages: 0 }, results: [] }
    }
    throw err
  }
}

export async function getCharacter(id) {
  const res = await api.get(`/character/${id}`)
  return res.data
}

export async function getEpisodes(ids) {
  if (!ids.length) return []
  const res = await api.get(`/episode/${ids.join(',')}`)
  return Array.isArray(res.data) ? res.data : [res.data]
}

export function getErrorMessage(err) {
  if (err.code === 'ECONNABORTED') {
    return 'A API demorou demais para responder. Tente de novo em alguns segundos.'
  }
  if (!err.response) {
    return 'Sem conexao com a API. Verifique sua internet e tente novamente.'
  }
  if (err.response.status === 404) {
    return 'Nao encontramos o que voce procurou.'
  }
  return 'Algo deu errado ao buscar os dados. Tente novamente.'
}
