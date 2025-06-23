import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PreferencesProvider } from './PreferencesContext.jsx'

createRoot(document.getElementById('root')).render(
  <PreferencesProvider>
    <StrictMode>
      <App />
    </StrictMode>,

  </PreferencesProvider>
)
