import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './common/ThemeContext.jsx'
import { ThemeProvider as MaterialTheme } from '@material-tailwind/react'
import { theme } from '../theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MaterialTheme value={theme}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MaterialTheme>
  </React.StrictMode>,
)
