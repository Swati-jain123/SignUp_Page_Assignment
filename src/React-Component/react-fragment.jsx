import React from 'react'
//css modeling
import style from "./react-fragment.module.css";
// let Items=[];

function Fragment({item,onKeyDown}) {
  
  return (
//     <React.Fragment>  // Fragment or <></>
//     <h1>List Items</h1>
//     <ul class="list-group">
//   <li class="list-group-item">An item</li>
//   <li class="list-group-item">A second item</li>
//   <li class="list-group-item">A third item</li>
//   <li class="list-group-item">A fourth item</li>
//   <li class="list-group-item">And a fifth one</li>
// </ul>
// </React.Fragment>

<>
<center>
<h1 className={style.head}>List Items</h1>


</center>
    <ul className="list-group">
      {/* {Items.length===0 && <h3>List is Empty</h3>} */}
      {item.length===0 ?<h4>List is Empty</h4>:null}
      {/* {Empty} */}
      <input type="text" placeholder="Add Item in the list" onKeyDown={onKeyDown}/>
      {item.map(item=>
   <li key={item} className="list-group-item">{item}</li>)}
  
 </ul>

</>
  )
}

export default Fragment