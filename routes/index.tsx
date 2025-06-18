import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import Characters from "../components/Characters.tsx";
type Character = {
  id: string;
  name: string;
  image: string;
};

type Data = {
  characters: Character[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const response = await axios.get<Character[]>(
        "https://hp-api.onrender.com/api/characters",
      );
      const characters = response.data;
      return ctx.render({ characters });
    } catch (_e) {
      return ctx.render();
    }
  },
};

const Page = (props: PageProps<Data>) => {
  return <Characters {...props.data} />;
};

export default Page;
