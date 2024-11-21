import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vueDevTools(), vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
