import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="Layout">
      <div class="Header">
        <Header />
      </div>

      <Component />
    </div>
  );
}
