import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { FilmType, ProjectType } from "../types.ts";
import Projects from "../components/Projects.tsx";

type Data = {
  projects: ProjectType[];
  films: FilmType[];
};

export const handler: Handlers<Data> = {
  GET: async (req, ctx) => {
    const url = "https://filmapi.vercel.app/api/films";
    const res = await fetch(url);
    const films: FilmType[] = await res.json();

    const projectsCookie = getCookies(req.headers).projects;
    if (!projectsCookie) {
      return ctx.render({ projects: [], films });
    }
    const projects = JSON.parse(projectsCookie);

    return ctx.render({ projects, films });
  },
};

export default (props: PageProps<Data>) => {
  const projects = props.data.projects;
  const films = props.data.films;
  if (projects.length === 0) {
    return <p>You don't have any projects</p>;
  }

  return <Projects projects={projects} films={films} />;
};
