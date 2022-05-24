import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ReferFriend from "./components/ReferFriend/ReferFriend";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";

function App() {
  const [isLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            {isLoggedIn ? (
              <Route path="/" element={<ReferFriend />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/refer-friend" element={<ReferFriend />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
