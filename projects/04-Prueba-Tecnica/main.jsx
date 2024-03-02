// Configurar punto de entrada para el uso de React
import { createRoot } from 'react-dom/client'

import { App } from './src/App'
// indicamos donde se quiere renderizar la aplicación
const root = createRoot(document.getElementById('app'))
root.render(<App />)
