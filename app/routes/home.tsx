import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link, NavLink, useNavigation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigation = useNavigation();

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 flex items-center justify-center text-center">
      {navigation.state === "idle" && (
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : {})}
          to={"/jokes"}
          className="text-2xl font-bold hover:underline hover:text-blue-500 hover:cursor-pointer hover:border-2 transition duration-500 hover:scale-110 ">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20220704/pngtree-very-happy-laughing-man-peek-casual-man-photo-image_981410.jpg"
            alt="man laughing"
            className="rounded-full pt-8"
          />
          <p className="relative bottom-30">Jokes</p>
        </NavLink>
      )}
      {navigation.state === "loading" && <p>Loading...</p>}

      {/* <Welcome /> */}
      <NavLink to="/tailWindTest">TailWindTest</NavLink>
      <NavLink to="/foogle">Foogle</NavLink>
    </div>
  );
}
