import React from "react";
import Search from "../Componet/Search";
import Balance from "../Componet/Balance";
import Bitcoin from "../Componet/Bitcoin";
import Trade from "../Componet/Trade";
function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Search />
      <Balance />
      <Bitcoin />
      <Trade />
    </div>
  );
}

export default Home;
