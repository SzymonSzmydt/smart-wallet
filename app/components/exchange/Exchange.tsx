import { readFile } from "../lib/file/file";
import Account from "./account/Account";
import ExchangeForm from "./form/ExchangeForm";
import style from "./styles/exchange.module.css";

const Exchange = async () => {
  const data = await readFile();
  return (
    <section className={style.main}>
      <Account accountData={data} />
      <ExchangeForm accountData={data} />
    </section>
  );
};

export default Exchange;
