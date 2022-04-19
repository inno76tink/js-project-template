import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'
import path from 'path'

// https://vitejs.dev/config/
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [
      eslintPlugin({ fix: true }),
      StylelintPlugin({ fix: true }),
      svelte(),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
    server: {
      // proxy: {
      //   "/api": process.env.VITE_API_URL
      // },
      https: false,
      host: '0.0.0.0',
      // port: 8080,
      // hmr: {
      //   protocol: "wss",
      //   clientPort: 80
      // }
    },
  })
}
