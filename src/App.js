import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import { useState } from "react";

function App() {
  const [view, setView] = useState()
  return (
    <div className="App">
      <Header view={view} setView={setView} />
      <Content view={view}/>
    </div>
  );
}

export default App;
