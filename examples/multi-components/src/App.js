import React from "react"

import C from './components/TestComponent/index.js'
import CT from './components/TestComponentCounter/index.js'
import CC from './components/TestComponentColor/index.js'

function App() {
  return (
    <div className="App">
      <C name='A'>
        <C name='A1' />
        <CT name='A2'>
          <CC name='A2.1' />
          <CT name='A2.2' />
          <C name='A2.3' />
          <CT name='A2.4'>
            <C name='A2.4.1' />
            <C name='A2.4.2'>
              <CC name='A2.4.2.1' />
              <C name='A2.4.2.2' />
              <CT name='A2.4.2.2' />
            </C>
            <C name='A2.4.3' />
          </CT>
        </CT>
        <CC name='A3' />
      </C>
    </div>
  )
}

export default App
