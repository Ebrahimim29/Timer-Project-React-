import { useState } from "react";
import Timer from "./Timer";

// Function Component:
const App = () => {
  const [title , setTitle] = useState("Hello My Friend");

  const handleSetTitle = () => {
    setTitle("GoodBye My friend");
  }

  return (
    <div className="main">
      <h1 className="title">{title}</h1>
      <Timer handleSetTitle={handleSetTitle}/>
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
