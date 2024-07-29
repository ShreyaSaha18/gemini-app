import react from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import "./App.css";
import "./index.css";


const App = () => {
  return (
    <div className="container">
      <Sidebar></Sidebar>
    <Main></Main>
    </div>
  );
};

export default App;
