import { Routes, Route } from "react-router-dom"
import Home from "./components/home";
import Users from "./routes/users";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>

  );
}

export default App;
