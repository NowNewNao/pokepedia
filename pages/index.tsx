import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { fetchPokemons } from '../libs/data';

export async function getStaticProps() {
    const pokemons = await fetchPokemons();

    return {
        props: {
            pokemons,
        },
    };
}

const Home: NextPage = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pokeedia</title>
                <meta name="description" content="HTTP request practice" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <ul>
                    {props.pokemons.res.results.map((pokemon, i) => (
                        <li key={i}>{pokemon.name}</li>
                    ))}
                </ul>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
