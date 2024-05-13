import { PageProps } from "$fresh/server.ts";
import MainContainer from "../components/MainContainer.tsx";
import Menu from "../components/Menu.tsx";

export default ({ Component }: PageProps) => {
  return (
    <>
      <Menu />
      <MainContainer>
        <Component />
      </MainContainer>
    </>
  );
};
