import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/layouts/navbar/Navbar";
import ReferFriend from "./components/ReferFriend/ReferFriend";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import { isAuthorized } from 'helpers/auth';


function App() {
  const isLoggedIn = isAuthorized();
  return (
    <div className="App">
      <BrowserRouter>
        {/* {!isLoggedIn && <Navigate to="/login" />} */}
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<ReferFriend />} />
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
