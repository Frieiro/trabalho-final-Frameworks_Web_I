# Multiverso - Rick and Morty

Aplicacao web feita em React para o Trabalho Final da disciplina de **Frameworks Web I** (Unilavras).

A ideia e ser um catalogo dos personagens de Rick and Morty. Na pagina inicial aparecem todos os personagens com paginacao, e para fazer busca pelo nome e combinar filtros de status, genero e especie. Clicando em um personagem abre a pagina de detalhes, com as informacoes completas e a lista de episodios em que ele apareceu.

## API utilizada

[The Rick and Morty API](https://rickandmortyapi.com) - API publica e gratuita, nao precisa de chave. Ela ja devolve os dados paginados e aceita os filtros direto na URL, por isso a busca e os filtros sao feitos pela propria API.

Endpoints usados:

- `GET /character?page=1&name=&status=&gender=&species=` - listagem com paginacao e filtros
- `GET /character/:id` - dados de um personagem
- `GET /episode/:ids` - episodios do personagem

## Tecnologias

- React + Vite
- React Router DOM (rotas `/` e `/item/:id`)
- Axios (requisicoes HTTP)
- Material UI (componentes e tema)

## Integrantes

- Andre Mendes Frieiro
- Thiago

## Como executar

Precisa ter o [Node.js](https://nodejs.org) instalado (versao 20 ou mais nova).

```bash
git clone https://github.com/SEU-USUARIO/trabalho-final-Frameworks_Web_I.git
cd trabalho-final-Frameworks_Web_I
npm install
npm run dev
```

Depois e so abrir no navegador o endereco que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versao de producao:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
src/
  components/   componentes reutilizaveis (card, filtros, loading, erro...)
  hooks/        hook de debounce usado na busca
  pages/        paginas da aplicacao (Home, Details, NotFound)
  services/     configuracao do axios e chamadas da API
  utils/        opcoes dos filtros e traducao dos valores da API
```
