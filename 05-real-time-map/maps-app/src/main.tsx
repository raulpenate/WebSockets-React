import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MapsApp from './MapsApp.tsx'

console.log('asarsa pre bug')
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
