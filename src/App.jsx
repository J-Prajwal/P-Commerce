import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Kids from "./Pages/Kids";
import Mens from "./Pages/Mens";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/Signup";
import Womens from "./Pages/Womens";  

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Mens" element={<Mens />}></Route>
        <Route path="/Mens/:id" element={<Details />}></Route>
        <Route path="/Womens" element={<Womens />}></Route>
        <Route path="/Womens/:id" element={<Details />}></Route>
        <Route path="/Kids" element={<Kids />}></Route>
        <Route path="/Kids/:id" element={<Details />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
