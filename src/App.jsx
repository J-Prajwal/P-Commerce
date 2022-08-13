import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Kids from "./Pages/Kids";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
      </Routes>
    </div>
  );
}

export default App;
