import { FunctionalComponent } from "preact";
import FavButton from "../islands/FavButton.tsx";

type Character = {
  id: string;
  image: string;
  name: string;
};

type Props = {
  characters: Character[];
};

const Characters: FunctionalComponent<Props> = (props) => {
  return (
    <div class="grid">
      {props.characters.map((ch) => {
        return (
          <div class="card">
            <div class="card-info">
              <a href={`/character/${ch.id}`}>
                <img src={ch.image} alt={ch.image} width={150} height={180} />

                <h2>
                  {ch.name} <FavButton characterId={ch.id} />
                </h2>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
