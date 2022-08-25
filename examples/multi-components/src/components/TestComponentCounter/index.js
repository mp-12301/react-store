import React from 'react'

import { useStore } from "react-store"

function TestComponent({name = "foobar", children, bgColor}) {
  const randomColor = () => Math.floor(Math.random()*16777215).toString(16)
  const [count, setCount] = useStore('count', 0)

  console.log('render component', name, 'with count', count)
  return (
    <div style={{backgroundColor: bgColor ?? `#${randomColor()}`}} className="container">
      <div className="name" onClick={() => {setCount(count + 1)}}>Im component {name} - I have useStore - count is {count}</div>

      <div className="children">{children}</div>
    </div>
  );
}

export default TestComponent;
