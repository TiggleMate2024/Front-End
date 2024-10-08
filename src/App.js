import {Routes,Route} from "react-router-dom";
import Register from "./pages/Register";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import InputIncome from "./pages/InputIncome";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import AccountBook from "./pages/AccountBook";
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/" element={<Splash/>}></Route>
          <Route path="/setting" element={<Setting/>}></Route>
          <Route path="/onboarding" element={<Onboarding/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/inputIncome" element={<InputIncome/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/accountbook' element={<AccountBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
