import LandingPage from "./components/LandingPage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
