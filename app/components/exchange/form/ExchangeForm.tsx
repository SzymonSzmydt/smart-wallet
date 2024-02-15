"use client";
import { FormEvent, useState } from "react";
import ExchangeIcon from "../../icons/ExchangeIcon";
import { writeFile } from "../../lib/file/file";
import style from "./styles/exchange.module.css";

const ExchangeForm = () => {
  const [isBuying, setIsBuying] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      rate: formData.get("rate") as string,
      amount: formData.get("amount") as string,
      currency: "EURO",
    };
    writeFile(data);
  };

  return (
    <form onSubmit={handleSubmit} className={style.wrapper}>
      <div>
        {isBuying ? "Kupuję" : "Sprzedaję"}
        <ExchangeIcon handleClick={() => setIsBuying((state) => !state)} />
      </div>
      <div className={style.box}>
        <input
          type='number'
          name='rate'
          className={style.rate}
          placeholder='Kurs'
          max={10}
          min={0.01}
          step={0.01}
        />
        <input
          type='number'
          name='amount'
          className={style.amount}
          placeholder='Ilość'
          max={100000}
          min={1}
        />
      </div>
      <button type='submit'>Sprawdź kurs</button>
    </form>
  );
};

export default ExchangeForm;
