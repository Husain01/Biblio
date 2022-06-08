import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login, Signup } from "./pages/Auth";
import { Rules } from "./pages/Rules/Rules";
import { RequiresAuth } from "./RequiresAuth";
import { Questions } from "./pages/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/rules"
          element={
            <RequiresAuth>
              <Rules />
            </RequiresAuth>
          }
        />
        <Route path="/quiz/:quizId" element={<RequiresAuth>
          <Questions/>
          </RequiresAuth>
          }/>
      </Routes>
    </div>
  );
}

export default App;
