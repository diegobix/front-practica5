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
        <h3 id="name">{film.name.toUpperCase()}</h3>
        <h5 id="brand">{film.brand.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default FilmPreview;
