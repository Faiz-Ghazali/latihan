import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LatihanUseRef from './LatihanUseRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LatihanUseRef />
  </StrictMode>
)
