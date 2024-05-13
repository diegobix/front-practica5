import { FunctionComponent } from "preact";
import { FilmType } from "../types.ts";

const FilmPreview: FunctionComponent<{ film: FilmType }> = ({ film }) => {
  return (
    <div class="filmPreview">
      <div class="imgContainer">
        <img src={film.staticImageUrl} alt={film.name} />
        <span id="description">{film.description}</span>
      </div>
      <div class="info">
        <span id="name">{film.name.toUpperCase()}</span>
        <span id="brand">{film.brand.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default FilmPreview;
