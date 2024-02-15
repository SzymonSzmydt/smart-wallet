"use server";
import fs from "node:fs";
import path from "path";
import { IAccount } from "../types/types";
import { formatDate } from "../utilitis/formatDate";

export async function readFile() {
  const filePath = path.join(process.cwd(), "./storage/currency-euro.json");

  const fileData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileData);
}

export async function writeFile(file: Partial<IAccount>) {
  if (file) {
    file.date = formatDate();
    const data = JSON.stringify(file);
    const filePath = "./storage/currency-euro.json";

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log("Błąd zapisu!");
      } else {
        console.log("Plik zapisany!");
      }
    });
  }
}
