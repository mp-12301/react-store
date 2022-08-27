# React Store
Package that provides the hook `useStore`

## 📦 useStore

A hook that provides a simple access to a global state across the React components without the 
need to setup a `Context` from React, implement a State Container or passing 
properties down or up.

This is implemented through the use of the `Observable` pattern that provides 
an object where you can subscribe in conjunction with `useState`.

Quite useful if you just want to quickly and simply implement a state that is 
shared between components regardless of where they are in the tree structure.

If you feel its overkill to implement a state container or a context to your case, 
then this might be of use for you.

### Example
```jsx
import { useStore } from 'react-store'

const componentA = () => {
  const [counter, setCounter] = useStore('counter', 0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
  )
}

// Somewhere else in another component to use the same state we just provide the same key
const componentB = () => {
  const [counter, setCounter] = useStore('counter')

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
  )
}
```
