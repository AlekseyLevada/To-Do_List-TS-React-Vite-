import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 
import "@fontsource/poppins/800.css"; 
import "@fontsource/poppins/900.css"; 
import './styles/reset.scss'
import './styles/index.module.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>

)
