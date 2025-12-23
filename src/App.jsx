import { useState } from "react";
import Timer from "./Timer";

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

export default App;
