// Comfigurar punto de entrada para el uso de React
import { createRoot } from 'react-dom/client'

// indicamos donde se quiere renderizar la aplicación
const root = createRoot(document.getElementById('app'))
root.render(<h1>Hello World</h1>)
