import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BandNamesApp from './BandNamesApp.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BandNamesApp />
  </StrictMode>,
)
