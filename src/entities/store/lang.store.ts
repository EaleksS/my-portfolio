import { create } from "zustand";
import { persist } from "zustand/middleware";

type useLang = {
  lang: string;
  setLang: (l: string) => void;
};

export const useLang = create(
  persist<useLang>(
    (set) => ({
      lang: "ru",
      setLang: (l) => {
        set({ lang: l });
      },
    }),
    { name: "lang" }
  )
);
