import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
  return (
    <nav>
      <a href="/">
        <i class="fa-solid fa-film"></i>
        <span>Films</span>
      </a>
      <a href="#">
        <i class="fa-solid fa-rectangle-list"></i>
        <span>Projects</span>
      </a>
    </nav>
  );
};

export default Menu;
