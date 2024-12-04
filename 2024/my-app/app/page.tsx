"use client";

import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count > 0 && <button onClick={() => setCount(0)}>Reset</button>}
    </div>
  );
}
export default Home;
