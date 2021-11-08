import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <header>
                <h1>Pokepedia</h1>
            </header>
            <div>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
