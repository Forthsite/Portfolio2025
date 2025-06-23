import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { translations } from "./data/translations";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Portfolio translation={translations.cs} />}
          />
          <Route
            path="/en"
            element={<Portfolio translation={translations.en} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
