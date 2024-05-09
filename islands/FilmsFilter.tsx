import { FunctionComponent } from "preact";
import { FilmType, FilterType, FilterValuesType } from "../types.ts";
import { useSignal } from "@preact/signals";
import Filter from "../components/Filter.tsx";
import Films from "../components/Films.tsx";

const getValues = (films: FilmType[]) => {
  const brands = Array.from(new Set(films.map((f) => f.brand)));
  const isos = Array.from(new Set(films.map((f) => f.iso)));

  return { brands, isos } as FilterValuesType;
};

const FilmsFilter: FunctionComponent<{ films: FilmType[] }> = ({ films }) => {
  const filterValues: FilterValuesType = getValues(films);

  const filter = useSignal<FilterType>({
    brand: "",
    iso: undefined,
    formatThirtyFive: undefined,
    formatOneTwenty: undefined,
    color: undefined,
    name: "",
  });

  console.log("Render");

  const filteredFilms = films.filter((film) => {
    if (filter.value.brand && film.brand !== filter.value.brand) {
      return false;
    }
    if (
      filter.value.iso && film.iso.toString() !== filter.value.iso
    ) {
      return false;
    }
    if (filter.value.formatThirtyFive && !film.formatThirtyFive) {
      return false;
    }
    if (filter.value.formatOneTwenty && !film.formatOneTwenty) {
      return false;
    }
    if (filter.value.color !== undefined && film.color !== filter.value.color) {
      return false;
    }
    if (
      filter.value.name &&
      !film.name.toLowerCase().includes(filter.value.name.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Filter filter={filter} values={filterValues} />
      <Films films={filteredFilms} />
    </>
  );
};

export default FilmsFilter;
