import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("./About")}>Go to About Page</button>
      <button>Go to filter page</button>
    </div>
  );
}

export default Home;
