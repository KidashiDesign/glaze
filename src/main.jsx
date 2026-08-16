import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Order matters: the vendored design system first, then our additive tokens,
// then base styles, then section styles.
import './styles/fonts.css'
import './styles/classical.css'
import './styles/tokens.ext.css'
import './styles/base.css'
import './styles/sections.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
