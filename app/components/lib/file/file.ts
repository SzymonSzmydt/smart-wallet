"use server";
import fs from "node:fs";
import path from "path";
import { IAccount } from "../types/types";

export async function readFile() {
  const filePath = path.join(process.cwd(), "./storage/currency-euro.json");

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData) as IAccount[];
  } catch (err) {
    console.error(err);
  }
  return [];
}

export async function writeFile(file: Array<IAccount>) {
  if (file) {
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
