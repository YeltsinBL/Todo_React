import { defineConfig } from 'vite' // definir la configuración
import react from '@vitejs/plugin-react' // importar el plugin de react

// exportar la configuración
export default defineConfig({
  plugins: [react()]
})
