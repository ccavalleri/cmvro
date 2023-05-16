import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  if (typeof window === 'object') {
    const renderWithLayout =
      Component.getLayout ||
      function (page) {
        return { page };
      };

    return renderWithLayout(<Component {...pageProps} />);
  }
}
