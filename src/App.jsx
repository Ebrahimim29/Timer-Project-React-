import { useEffect, useState } from "react";

const App = () => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time >= 10) {
      return;
    }

    const interval = setInterval(() => {
      // setTime(new Date().toLocaleTimeString())
      setTime((prevTime) => {
        if (prevTime >= 9) {
          return 10;
        }
        return prevTime + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // }, [])
  }, [time]);

  return (
    <div className="main">
      <h1 className="title">Hello</h1>
      <h2 className="timer">it is {time}</h2>
    </div>
  );
};

export default App;
