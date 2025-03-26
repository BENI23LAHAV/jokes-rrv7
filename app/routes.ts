import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/jokes", "routes/jokes.tsx"),
  route("/:jokeID/new", "routes/newJoke.tsx"),
  route("/:jokeID/delete", "routes/deleteJoke.tsx"),
  route("/tailWindTest", "routes/tailWindTest.tsx"),
] satisfies RouteConfig;
