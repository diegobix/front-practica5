import { FunctionComponent } from "preact";
import { FilmType } from "../types.ts";

const FilmPreview: FunctionComponent<{ film: FilmType }> = ({ film }) => {
  return (
    <div class="filmPreview">
      <img src={film.staticImageUrl} alt={film.name} />
      <div class="info">
        <span id="name">{film.name.toUpperCase()}</span>
        <span id="brand">{film.brand.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default FilmPreview;
