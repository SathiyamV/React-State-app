import { useState } from "react";

export default function App() {
  const [joke, setJoke] = useState("");
  const [count, setCount] = useState(0);
  async function getJoke() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    setJoke(data.joke);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{joke || "Hello Click the Button"}</h1>
      <button onClick={getJoke}>Get Joke</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>
        you have read <strong>{props.count}</strong> piece of shit
      </p>
    </div>
  );
}
