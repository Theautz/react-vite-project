import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setData(data.data));

    console.log(data);
  }, []);

  return (
    <div className="App">
      <Header />
      <Content posts={data} />
      <Footer />
    </div>
  );
}

export default App;
