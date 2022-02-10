import { Routes, Route } from "react-router-dom"
import Home from "./components/home";
// import { Users, Profile } from "./routes/users";
import Users from "./routes/users";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      {/* <Route path="/users/profile" element={<Profile />} /> */}
    </Routes>

  );
}

export default App;
