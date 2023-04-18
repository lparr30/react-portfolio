import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import { useState } from "react";
import Footer from "./components/Footer"

function App() {
  const [view, setView] = useState()
  return (
    <div className="App">
      <Header view={view} setView={setView} />
      <Content view={view}/>
      <Footer />
    </div>
  );
}

export default App;
