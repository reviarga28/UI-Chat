import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContenApp } from './ContenApp'
import '../src/assets/css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ContenApp />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
