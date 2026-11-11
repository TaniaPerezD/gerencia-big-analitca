import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// En desarrollo, sirve /api/probe con la misma función que corre en Vercel.
function apiDev() {
  return {
    name: 'api-dev',
    configureServer(server) {
      server.middlewares.use('/api/probe', async (req, res) => {
        const mod = await server.ssrLoadModule('/api/probe.js')
        await mod.default(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDev()],
})
