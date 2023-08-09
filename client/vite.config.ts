import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  return {

    plugins: [react()],
    define: {
      NODE_ENV: 'production',
    },
    server: {
      port: Number(process.env.PORT) || 3000
    }
  }

})
