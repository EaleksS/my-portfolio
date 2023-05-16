import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Main } from "./pages/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
