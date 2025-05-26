import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Chat } from './Chat'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chat />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
