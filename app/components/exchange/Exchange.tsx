"use client";
import { useState } from "react";
import { IAccount } from "../lib/types/types";
import Account from "./account/Account";
import ExchangeForm from "./form/ExchangeForm";
import style from "./styles/exchange.module.css";

const Exchange = () => {
  const [accountData, setAccountData] = useState<IAccount[] | null>(null);

  return (
    <section className={style.main}>
      <Account accountData={accountData} />
      <ExchangeForm />
    </section>
  );
};

export default Exchange;
