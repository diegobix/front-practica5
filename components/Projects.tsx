import { FunctionComponent } from "preact";
import { ProjectType } from "../types.ts";
import FilmPreview from "./FilmPreview.tsx";

type Props = {
  projects: ProjectType[];
};

const Projects: FunctionComponent<Props> = ({ projects }) => {
  return (
    <div class="projects">
      {projects.map((pr, i) => (
        <div class="projectItem" key={pr.name + i}>
          <h3>{pr.name}</h3>
          <div class="projectFilms">
            {pr.films.map((film) => (
              <FilmPreview film={film} key={film._id + pr.name + i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
