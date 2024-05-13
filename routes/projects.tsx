import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { ProjectType } from "../types.ts";
import Projects from "../components/Projects.tsx";

type Data = {
  projects: ProjectType[];
};

export const handler: Handlers<Data> = {
  GET: (req, ctx) => {
    const projectsCookie = getCookies(req.headers).projects;
    if (!projectsCookie) {
      return ctx.render({ projects: [] });
    }
    const projects = JSON.parse(projectsCookie);
    console.log(projects);

    return ctx.render({ projects });
  },
};

export default (props: PageProps<Data>) => {
  const projects = props.data.projects;
  if (projects.length === 0) {
    return <p>You don't have any projects</p>;
  }

  return <Projects projects={projects} />;
};
