import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Evitar duplicidade nos testes Console em Dev (<StrictMode>)
  //<StrictMode> 
  <App />
  //</StrictMode>,
)
