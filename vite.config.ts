import * as path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import postcssNesting from 'postcss-nesting';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		plugins:
			env.VITE_SSL === 'true' ? [react(), svgr(), basicSsl()] : [react(), svgr()],
		css: {
			postcss: {
				plugins: [postcssNesting],
			},
		},
	};
});
 