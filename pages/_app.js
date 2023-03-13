import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  if (typeof window === 'object')
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
}
