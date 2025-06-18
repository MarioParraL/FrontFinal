import { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <div class="Header">
      <nav>
        <a href="/">Todos</a>
        <a href="/favorites">Favoritos</a>
      </nav>
    </div>
  );
};

export default Header;
