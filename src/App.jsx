import Header from "./Componet/Header";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Page/LogIn";
import Sigin from "./Page/Sigin";
import Contact from "./Page/Contact";
import About from "./Page/About";
import Profile from "./Page/Profile";
import Trades from "./Page/Trades";
import Send from "./Page/Send";
import Invest from "./Page/Invest";
import Recive from "./Page/Recive";
import Buy from "./Page/Buy";
import Sell from "./Page/Sell";

function App() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<LogIn />}></Route>
          <Route path="/Sigin" element={<Sigin />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Trades" element={<Trades />}></Route>
          <Route path="/Send" element={<Send />}></Route>
          <Route path="/Invest" element={<Invest />}></Route>
          <Route path="/Recive" element={<Recive />}></Route>
          <Route path="/Buy" element={<Buy />}></Route>
          <Route path="/Sell" element={<Sell />}></Route>
        </Routes>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
