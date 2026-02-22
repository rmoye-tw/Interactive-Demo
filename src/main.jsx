import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InteractiveDemo from './InteractiveDemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractiveDemo />
  </StrictMode>,
)
