import ReactDOM from 'react-dom/client';
import App from '@app';

document.body.classList.add(
	'theme',
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
