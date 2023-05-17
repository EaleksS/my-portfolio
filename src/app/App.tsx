import { Route, Routes } from "react-router-dom";
import "./styles/_variables.scss";
import { Main } from "../pages/Main/Main";
import { Router } from "./providers/Router";
import "./styles/reset.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
