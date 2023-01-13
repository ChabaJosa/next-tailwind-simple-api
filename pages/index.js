import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ res }) {
  console.log(res.insult);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Here are insults:</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            {res.insult ? res.insult : "Nothing"}
          </div>
        </div>
      </main>

    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://evilinsult.com/generate_insult.php?lang=en&type=json`
  );
  const json = await res.json();
  return { res: json };
};
