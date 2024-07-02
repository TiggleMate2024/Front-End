import {Routes,Route,Link} from "react-router-dom";
import Register from "./pages/Register";
import Splash from "./pages/Splash";
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/splash" element={<Splash/>}></Route>
      </Routes>
    </>
  );
}

export default App;
