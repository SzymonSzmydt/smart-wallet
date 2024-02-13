"use client";
import { FormEvent, useState } from "react";
import style from "./styles/exchange.module.css";

interface IFormInput {
  rate: number;
  amount: number;
}

const ExchangeForm = () => {
  const [exchangeType, setExxhangeType] = useState<"buy" | "sell">("buy");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={style.wrapper}>
      <p> {exchangeType === "buy" ? "Kupuję" : "Sprzedaję"}</p>
      <input
        type='number'
        className={style.rate}
        placeholder='Kurs'
        max={10}
        min={0.1}
      />
      <input
        type='number'
        className={style.amount}
        placeholder='Ilość'
        max={100000}
        min={1}
      />
      <button type='submit'>Kupuję</button>
    </form>
  );
};

export default ExchangeForm;
