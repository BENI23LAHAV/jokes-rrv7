import { useNavigate } from "react-router";
import type { Route } from "../+types/root.js";
import {
  initializeJokes,
  getJokes,
  addJoke,
  type Joke,
  type response,
} from "../jokes.ts";

// פונקציה שמטמיעה את הבדיחות ומחזירה את התוצאה
export async function clientLoader() {
  try {
    await initializeJokes();
    const res = await getJokes();
    console.log(res);

    return { res: res as response };
  } catch (e) {
    console.log(e);
    return {
      res: { message: "Can't get the jokes", success: false },
    };
  }
}

export default function Jokes({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();

  // יצירת מזהה אקראי עבור הבדיחה החדשה
  const jokeID = Math.random().toString(36).substring(2, 9);

  // אם לא נמצאו בדיחות או אם יש שגיאה, הצג הודעת שגיאה
  if (!loaderData || !loaderData.res.success) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Error</h1>
        <p>{loaderData?.res?.message}</p>
      </div>
    );
  }

  const jokes = loaderData.res.data;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Jokes</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => navigate(`/${jokeID}/new`)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          New Joke
        </button>
      </div>

      {jokes.map((joke: Joke, index: number) => (
        <div
          key={joke.id}
          style={{
            color: "black",
            padding: "15px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}>
          <p style={{ fontWeight: "bold" }}>
            {index + 1}: {joke.setup}
          </p>
          <p style={{ fontStyle: "italic" }}>{joke.punchline}</p>

          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => navigate(`/${index}/new`)}
              style={{
                marginRight: "10px",
                padding: "8px 15px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              Edit
            </button>
            <button
              onClick={() => navigate(`/${index}/delete`)}
              style={{
                padding: "8px 15px",
                backgroundColor: "#DC3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
