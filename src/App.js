import {Routes,Route,Link} from "react-router-dom";
import Register from "./pages/Register";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/splash" element={<Splash/>}></Route>
          <Route path="/onboarding" element={<Onboarding/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
