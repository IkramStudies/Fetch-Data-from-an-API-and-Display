import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setData2] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const input1 = e.target.value;
    setInput(e.target.value);
    setData2(
      data.filter((val) =>
        val.title.toLowerCase().startsWith(input1.toLowerCase()),
      ),
    );
  };
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data2 = await response.json();
      setData(data2);
      setData2(data2);
    }
    getData();
  }, []);
  return (
    <>
      <input type="text" onChange={handleChange} value={input} />
      <ul>
        {filteredData.map((val) => (
          <li>{val.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
