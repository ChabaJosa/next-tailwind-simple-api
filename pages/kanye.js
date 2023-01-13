import styles from "../styles/Home.module.css";
export default function Kanye({ res }) {
  console.log(res);

  return (
    <main className={`${styles.main} ${styles.crazy}`}>
      <h1
        className={`${styles.title}`}
        style={{
          minWidth: "750px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        Here are <span className={styles.rotate}>Kanye</span> {"       "}Quotes:
      </h1>
      <div className={styles.grid}>
        <div
          className={`${styles.card}`}
          onClick={() => {
            window.location.reload();
          }}
        >
          {res.quote ? res.quote : "Nothing"}
        </div>
      </div>
    </main>
  );
}

Kanye.getInitialProps = async (ctx) => {
  const res = await fetch(`https://api.kanye.rest/n`);
  const json = await res.json();
  return { res: json };
};
