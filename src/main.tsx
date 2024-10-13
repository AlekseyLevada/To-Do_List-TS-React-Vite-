import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import './styles/reset.scss'
import './styles/index.module.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>

)
