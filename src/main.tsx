import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Set document metadata
document.title = "Sanjay Kumar – Portfolio"
const metaDescription = document.createElement('meta')
metaDescription.name = 'description'
metaDescription.content = 'Graphic Designer & UI/UX Designer'
document.head.appendChild(metaDescription)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
