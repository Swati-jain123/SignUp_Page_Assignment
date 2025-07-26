
import React from "react";
import SignUp from './Components/SignUp.jsx';
import Navbar from './Components/Navbar.jsx';
import './App.css';
function App() {

  return (
   <>
   <div className="bg-gray-100 min-h-screen"> 
   <Navbar/>
    <SignUp/>
    
    </div>
      </>
  );
}

export default App;
