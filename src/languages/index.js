import { en } from "./en";
import { uz } from "./uz";
import { tr } from "./tr";
import { ru } from "./ru";
import { LANGUAGE } from "../tools/contants";

export const flagImages = {
  uz: "/img/flag-uz.svg",
  tr: "/img/flag-tr.png",
  en: "/img/flag-en.svg",
  ru: "/img/flag-ru.svg",
};

export const getLanguage = () => {
  const storedLanguage = localStorage.getItem(LANGUAGE);
  return storedLanguage ? storedLanguage : "uz";
};

export const getText = (word) => {
  const language = getLanguage();
  return language === "uz"
    ? uz[word]
    : language === "en"
    ? en[word]
    : language === "ru"
    ? ru[word]
    : tr[word];
};
