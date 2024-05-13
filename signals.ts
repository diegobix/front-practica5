import { signal } from "@preact/signals";
import { FilmType } from "./types.ts";

export const modalSignal = signal<boolean>(false);
export const modalFilm = signal<FilmType | undefined>(undefined);
