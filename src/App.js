import {Routes,Route,Link} from "react-router-dom";
import Register from "./pages/Register";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import HomeTest from "./pages/HomeTest";
import AccountBook from "./pages/AccountBook";
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/splash" element={<Splash/>}></Route>
          <Route path="/onboarding" element={<Onboarding/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/test" element={<HomeTest/>}></Route>
          <Route path='/accountBook' element={<AccountBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
