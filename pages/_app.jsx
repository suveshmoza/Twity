import '@/styles/globals.css';
import Layout from '@/components/layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Layout>
				<ToastContainer limit={1} position={toast.POSITION.TOP_CENTER} />
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
