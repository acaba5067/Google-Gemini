import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './contactText/contactText.jsx'
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,

)
