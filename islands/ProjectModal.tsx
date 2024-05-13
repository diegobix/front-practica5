import { FunctionComponent } from "preact";
import { FilmType } from "../types.ts";
import { modalSignal } from "../signals.ts";
import { ProjectType } from "../types.ts";
import { useEffect, useState } from "preact/hooks";
import { modalFilm } from "../signals.ts";

enum Option {
  add,
  create,
}

const ProjectModal: FunctionComponent = () => {
  let projects: ProjectType[] = [];
  const film = modalFilm.value!;

  const [option, setOption] = useState<Option>(Option.create);
  const [projectIndex, setProjectIndex] = useState<number>(-1);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const projectsCookie = document.cookie.split(";").find((c) =>
      c.startsWith("projects")
    );
    if (!projectsCookie) {
      document.cookie = `projects=${JSON.stringify([])}`;
      return;
    }
    projects = JSON.parse(projectsCookie.split("=")[1]);
  }, []);

  const createProject = (name: string, film: FilmType) => {
    projects.push({
      name,
      films: [film],
    });

    document.cookie = `projects=${JSON.stringify(projects)}`;
  };

  const updateProject = (index: number, film: FilmType) => {
    const project = projects[index];
    project.films.push(film);

    document.cookie = `projects=${JSON.stringify(projects)}`;
  };

  return (
    <div class="projectModal">
      <span class="closeModal" onClick={(e) => modalSignal.value = false}>
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div class="options">
        <button onClick={(e) => setOption(Option.create)}>
          Create new project
        </button>
        <button onClick={(e) => setOption(Option.add)}>
          Add to existing project
        </button>
      </div>
      <div class="selection">
        {option === Option.add
          ? (
            <select
              onInput={(e) => setProjectIndex(Number(e.currentTarget.value))}
            >
              {projects.map((pr, i) => (
                <option value={i} key={pr.name + i}>{pr.name}</option>
              ))}
            </select>
          )
          : (
            <input
              type="text"
              onInput={(e) => setName(e.currentTarget.value)}
              value={name}
            />
          )}
      </div>
      <button
        onClick={(e) => {
          if (option === Option.create) {
            createProject(name, film);
          } else {
            updateProject(projectIndex, film);
          }
          modalSignal.value = false;
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ProjectModal;
