import React from "react";

function Navbar() {
  return (

    
    <div className="flex items-center m-5">
        <img src={require('./images/LOGO Shape.png')} alt="elixir logo" />
        <span className="text-2xl font-bold">Elixer . DS</span>
    </div>

    
  );
}

export default Navbar;