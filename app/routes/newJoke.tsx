import { Form, redirect } from "react-router";
import type { Route } from "../+types/root.js";
import { getJoke, addJoke } from "../jokes.ts";
import Jokes from "./jokes.js";

export async function clientLoader({ params }: Route.LoaderArgs) {
  try {
    const joke = await getJoke(Number(params.jokeID));
    return { joke };
  } catch (e) {
    return { joke: { message: "Can't get the joke", success: false } };
  }
}

export async function clientAction({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();

  await addJoke(
    {
      id: Number(params.jokeID),
      punchline: formData.get("punchline") as string,
      setup: formData.get("setup") as string,
      type: (formData.get("type") || " ") as string,
    },
    Number(params.jokeID)
  );
  return redirect("/jokes");
}

export default function NewJoke({ loaderData }: Route.ComponentProps) {
  const joke = loaderData!.joke.data;

  if (!loaderData || !loaderData.joke.success) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Error</h1>
        <p>{loaderData?.joke?.message}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Edit Joke</h1>

      <Form method="post" style={{ display: "flex", flexDirection: "column" }}>
        {/* Setup Input */}
        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Set up
        </label>
        <input
          name="setup"
          type="text"
          defaultValue={joke?.setup}
          style={{
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />

        {/* Punchline Input */}
        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Punchline
        </label>
        <input
          name="punchline"
          type="text"
          defaultValue={joke?.punchline}
          style={{
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />

        {/* Type Input */}
        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>Type</label>
        <input
          name="type"
          type="text"
          defaultValue={joke?.type}
          style={{
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "center",
          }}>
          Submit
        </button>
      </Form>
    </div>
  );
}
