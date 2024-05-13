import { FunctionComponent } from "preact";
import { FilmType, FilterType } from "../types.ts";
import FilmPreview from "./FilmPreview.tsx";
import { modalSignal } from "../signals.ts";
import ProjectModal from "../islands/ProjectModal.tsx";

const Films: FunctionComponent<
  { films: FilmType[] }
> = ({ films }) => {
  return (
    <>
      <div class="films">
        {films.map((film) => <FilmPreview film={film} key={film._id} />)}
      </div>
      {modalSignal.value && <ProjectModal />}
    </>
  );
};

export default Films;
