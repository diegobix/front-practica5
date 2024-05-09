import { FunctionComponent } from "preact";
import { FilmType, FilterType } from "../types.ts";
import FilmPreview from "./FilmPreview.tsx";
import { Signal } from "@preact/signals";

const Films: FunctionComponent<
  { films: FilmType[] }
> = ({ films }) => {
  return (
    <div class="films">
      {films.map((film) => <FilmPreview film={film} key={film._id} />)}
    </div>
  );
};

export default Films;
