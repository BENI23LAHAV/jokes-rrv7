const localstorageJokesName = "jokes-arr";

async function initializeJokes(): Promise<void> {
  let jokes = localStorage.getItem(localstorageJokesName);
  if (!jokes) {
    jokes = await fetch(
      "https://official-joke-api.appspot.com/random_ten"
    ).then((res) => res.json());
    localStorage.setItem(localstorageJokesName, JSON.stringify(jokes));
  }
}

async function getJokes(): Promise<response> {
  try {
    const data: Joke[] = await JSON.parse(
      localStorage.getItem(localstorageJokesName) || "[]"
    );
    return { message: "success", success: true, data: data as Joke[] };
  } catch (e) {
    return { message: "can't fetch jokes", success: false };
  }
}
async function getJoke(id: number): Promise<response> {
  try {
    const data: Joke[] = await JSON.parse(
      localStorage.getItem(localstorageJokesName) || "[]"
    );
    return { message: "success", success: true, data: data[id] as Joke };
  } catch (e) {
    return { message: "can't fetch joke", success: false };
  }
}

async function addJoke(joke: Joke, id: number): Promise<response> {
  try {
    let jokes = (await getJokes()).data as Joke[];
    const prevJoke = await getJoke(id);
    if (!prevJoke) {
      jokes.push(joke);
    } else {
      jokes = await jokes.filter((joke, index) => {
        if (index !== id) return joke;
      });
      jokes.push(joke);
    }

    localStorage.setItem(localstorageJokesName, JSON.stringify(jokes));
    return { message: "success", success: true };
  } catch (e) {
    return { message: "can't add joke ", success: false };
  }
}
async function deleteJoke(id: number): Promise<response> {
  try {
    const ok = confirm("are you sure?");

    if (ok) {
      let jokes = (await getJokes()).data as Joke[];
      jokes = await jokes.filter((joke, index) => {
        if (index !== id) return joke;
      });
      localStorage.setItem(localstorageJokesName, JSON.stringify(jokes));
      alert("deleted");
      return { message: "success , deleted", success: true };
    }
    return { message: "success , Not deleted", success: false };
  } catch (e) {
    return { message: "can't delete joke ", success: false };
  }
}
/**----------Types---------- */

interface Joke {
  id: number;
  type?: string;
  setup: string;
  punchline: string;
}
interface response {
  message: string;
  success: boolean;
  data?: any;
}

export {
  initializeJokes,
  getJokes,
  getJoke,
  addJoke,
  deleteJoke,
  type Joke,
  type response,
};
