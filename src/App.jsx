import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data2 = await response.json();
      setData(data2);
    }
    getData();
  }, []);
  return (
    <>
      <input type="text" />
      <ul>
        {data.map((val) => (
          <li>{val.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
