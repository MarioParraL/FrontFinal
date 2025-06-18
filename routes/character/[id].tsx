import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import FavButton from "../../islands/FavButton.tsx";

type Character = {
  id: string;
  name: string;
  image: string;
  house: string;
  alive: boolean;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Character>) => {
    const id = ctx.params.id;

    const response = await axios.get<Character[]>(
      `https://hp-api.onrender.com/api/character/${id}`,
    );
    const character = response.data[0];
    return ctx.render(character);
  },
};

const Page = (props: PageProps<Character>) => {
  return (
    <div class="CharacterCard">
      <img src={props.data.image} width={300} height={400} />
      <h1>
        {props.data.name} <FavButton characterId={props.data.id} />
      </h1>
      <p>Casa: {props.data.house}</p>
      <p>{props.data.alive ? "Vivo" : "Muerto"}</p>
      <a href={"/"}>Volver</a>
    </div>
  );
};

export default Page;
