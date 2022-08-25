import React, { useState } from 'react'

function TestComponent({name = "foobar", children, bgColor}) {
  const randomColor = () => Math.floor(Math.random()*16777215).toString(16)
  const [show, setShow] = useState(true)

  console.log('render component', name)
  return (
    <div  style={{backgroundColor: bgColor ?? `#${randomColor()}`}} className="container">
      <div className="name">Im component {name}</div>
      
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <div className="children">{children}</div> }
    </div>
  );
}

export default TestComponent;
