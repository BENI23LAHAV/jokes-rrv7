import { redirect } from "react-router";
import type { Route } from "../+types/root";
import { deleteJoke } from "../jokes";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const id = Number(params.jokeID);
  try {
    id && deleteJoke(id);
  } catch (e) {
    console.log(e);
  }
  return redirect("/jokes");
}
