import { useEffect, useState } from "react"

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="main">
      <h1 className="title">Hello</h1>
      <h2 className="timer">
        it is {time}
      </h2>
    </div>
  )
}

export default App;