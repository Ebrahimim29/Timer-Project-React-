import { useState } from "react";
import Timer from "./Timer";

// Function Component:
const App = () => {
  const [title , setTitle] = useState("Hello My Friend");
  const [isLight, setIsLight] = useState(false);

  const handleSetTitle = () => {
    setTitle("GoodBye My friend");
  }

  const handleSetIsLight = () => {
    setIsLight(!isLight)
  }

  return (
    <div className="main" style={{background:isLight ? "white" : "black"}}>
      <h1 className="title">{title}</h1>        
      <Timer handleSetTitle={handleSetTitle} isLight={isLight} handleSetIsLight={handleSetIsLight}/>      
    </div>
  );
};

// Class Component:
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component{
//   constructor() {
//     super();
//     this.state = {title:"Hello My Friend"}
//   }  
// }

// handleSetTitle = () => {
//   this.setState({
//     title : "GoodBye My friend"
//   })
// }

// render(){
//   return(
//     <div className="main">
//       <Hello title={this.state.title}/>
//       <Timer handleSetTitle={this.handleSetTitle}/>
//     </div>
//   )
// }

export default App;
