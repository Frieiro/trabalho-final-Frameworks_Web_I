import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4, minHeight: 'calc(100vh - 150px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
