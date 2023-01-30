
import './App.css'
import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./signup";
import Secondsection from "./Secondsection";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Footer from "./footer";
function App() {
  return (
    
    <div className="flex main__div p-3">
        <div className="w-2/5  justify-between space-y-24 ">
          <Navbar />      
          <Login />      
          <Signup />      
        </div>
        <div class="chart__div w-3/5">
          <Secondsection/>

            <div class="flex mx-12 justify-center">
          <Graph1 />
          <Graph2 />
            </div>
          
          <Graph3 />
          <Footer />
          </div>
    </div>
    
  );
}

export default App;
