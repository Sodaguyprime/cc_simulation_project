import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Change this line to target "app" instead of "root"
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)