import { Handlers, PageProps } from "$fresh/server.ts";
import Films from "../components/Films.tsx";
import MainContainer from "../components/MainContainer.tsx";
import FilmsFilter from "../islands/FilmsFilter.tsx";
import { FilmType } from "../types.ts";

export const handler: Handlers<FilmType[]> = {
  GET: async (req, ctx) => {
    const url = "https://filmapi.vercel.app/api/films";
    const res = await fetch(url);
    const data = await res.json();

    return ctx.render(data);
  },
};

export default (props: PageProps<FilmType[]>) => {
  const films = props.data;

  return (
    <MainContainer>
      <FilmsFilter films={films} />
    </MainContainer>
  );
};
