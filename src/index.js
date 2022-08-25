import { useCallback, useLayoutEffect, useState } from 'react'

import Store from './store.js'

const store = new Store()

export const useStore = (key, defaultValue) => {
  const [stateValue, setStateValue] = useState(defaultValue)

  const handleSubscribe = useCallback((event) => {
    if (event.key === key) {
      setStateValue(event.value)
    }
  }, [setStateValue, key])

  const handleSetStateValue = useCallback((value) => {
    store.fire({ key, value })
  }, [key])

  useLayoutEffect(() => {
    const handler = { key, fn: handleSubscribe }
    store.subscribe(handler)

    return () => {
      store.unsubscribe(handler)
    }
  }, [handleSubscribe])

  return [stateValue, handleSetStateValue]
}

export default { useStore }
