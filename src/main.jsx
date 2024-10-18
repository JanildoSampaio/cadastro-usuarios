import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Homes/index.jsx'
import { GlobalStyles } from './styles/globalstyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
