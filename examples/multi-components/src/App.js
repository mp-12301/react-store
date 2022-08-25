import React from 'react'

import { useStore } from 'react-store'

const CountDisplay = function () {
  const [count, setCount] = useStore('count', 0)

  const handlePress = function () {
    setCount(count + 1)
  }

  return (
    <div className="count-display-container">
      <div>Count: { count }</div>
      <button onClick={handlePress}>
        Increment Count
      </button>
    </div>
  )
}

function App () {
  return (
    <div className="App">
      <div className="title">
        Count is the state being shared across all components
      </div>
      <CountDisplay />
    </div>
  )
}

export default App
