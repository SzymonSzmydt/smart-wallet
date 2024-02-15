import { IAccount } from "../../lib/types/types";
import style from "./styles/acount.module.css";

interface IProps {
  accountData: Array<IAccount> | null;
}

const Account = ({ accountData }: IProps) => {
  const totalAmount = accountData?.reduce((a, b) => a + b.amount, 0);
  return (
    <section className={style.wrapper}>
      <p> Posiadam </p>
      <h2> {totalAmount || "Brak danych"} </h2>
      <p> Euro </p>
    </section>
  );
};

export default Account;
