import { PageProps } from "$fresh/server.ts";
import { FunctionComponent } from "preact";

const MainContainer: FunctionComponent = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default MainContainer;
