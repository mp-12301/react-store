import React, { useState } from 'react'

import { useStore } from 'react-store'

const CountDisplay = function() {
  const [count, setCount] = useStore('count', 0)

  const handlePress = function() {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <div>Count: {count}</div>
      <button onClick={handlePress}>
        Increment Count
      </button>
    </div>
  )
}

const CompWithCountDisplay = function() {
  return (
    <div className="text-container">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Ut ullamcorper, massa at efficitur rutrum, dui massa
      rutrum turpis, quis ultricies sem risus eget urna. Maecenas a libero
      fermentum, commodo metus non, congue magna. Sed placerat consectetur
      purus, nec maximus quam consequat non. Sed lorem ante, tincidunt eget
      diam in, mollis egestas justo. Nullam suscipit justo id pellentesque
      interdum. Nulla sed egestas elit, eget hendrerit lorem.

      <CountDisplay />

      Aenean eleifend mi nulla. In efficitur aliquam lorem, eget
      consectetur mi porttitor dapibus. Nam lacinia elit nec arcu porta,
      aliquam auctor nunc blandit
    </div>
  )
}

function App() {
  const [list, setList] = useState([0, 1])

  const handleAddCounter = function() {
    setList([...list, 0])
  }

  const handleAddText = function() {
    setList([...list, 1])
  }

  return (
    <div className="app">
      <div className="title">
        Count is the state being shared using hook useStore
      </div>
      <div className="menu">
        <button onClick={handleAddCounter}>
          Add Counter
        </button>
        <button onClick={handleAddText}>
          Add Counter Inside Text Component
        </button>
      </div>
      <div className="list">
        { list.map(item => item === 0 ? <CountDisplay /> : <CompWithCountDisplay />) }
      </div>
    </div>
  )
}

export default App
