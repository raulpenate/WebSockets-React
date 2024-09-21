import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MapsApp from './MapsApp.tsx'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
