import React from 'react';
import {useRef,useState} from 'react';
function UserefHook() {
 const refObject = useRef()
 let [Name,setName]=useState("Swati");
 let arr=['Aakash',"swati"];
 let spreadarr=[1,...arr];
 console.log(arr,spreadarr);

 function Reset(){
  setName("");
  refObject.current.focus();
  
 }
 function Default(){
  setName("Default Name")
  refObject.current.focus();
 }
  return (
    <center>
      <div>Useref hook </div>

      <input ref={refObject} type="text"  value={Name} onChange={(event)=>setName(event.target.value)}/>
      <button onClick={Reset}>Reset</button>
      <button onClick={Default}>Default</button>
      
      
      </center>

  )
}

export default UserefHook


// import './App.css';
// import Fragment from "./React-Component/react-fragment.jsx";
// import React,{useState} from "react";
// import Container from './React-Component/Container.jsx';
// import UserefHook from './React-Component/UsrefHook.jsx';
// import SignUp from './Components/SignUp.jsx';
// function App() {
//   let [Items,setItem]=useState(["Oil","Chargers"]);

  
//   const handleKeyDown=(event)=>{

//     if (event.key==="Enter"){
//       let newItem=event.target.value;
//       let newShopItem=[...Items,newItem];
//       console.log("new item is "+newItem);
//       setItem(newShopItem);
//     }
//   }
//   return (
//     <>
//     {/* <Container>
//     <div className="App">
    
//     <Fragment item={Items} onKeyDown={handleKeyDown}></Fragment>
//     <UserefHook/>
//     </div>
//     </Container> */}
    
//     <SignUp/>
//       </>
//   );
// }

// export default App;
