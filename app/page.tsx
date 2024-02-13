import ExchangeForm from "./components/form/ExchangeForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ExchangeForm />
    </main>
  );
}
