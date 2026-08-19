import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LatihanUseRef from './LatihanUseRef.jsx'
import LatihanControlComponent from './LatihanControlComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LatihanUseRef />
    <LatihanControlComponent />
  </StrictMode>
)
