import { FunctionComponent } from "preact";
import { ProjectType } from "../types.ts";
import FilmPreview from "./FilmPreview.tsx";
import { FilmType } from "../types.ts";

type Props = {
  projects: ProjectType[];
  films: FilmType[];
};

const Projects: FunctionComponent<Props> = ({ projects, films }) => {
  return (
    <div class="projects">
      {projects.map((pr, i) => (
        <div class="projectItem" key={pr.name + i}>
          <h3>{pr.name}</h3>
          <div class="projectFilms">
            {pr.filmsId.map((id) => (
              <FilmPreview
                film={films.find((f) => f._id === id)!}
                key={id + pr.name + i}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
