function createStore (state, baseMutator) {

  let subscribers = []

  const subscribe = (fn) => subscribers.push(fn)

  const dispatch = (action) => {
    baseMutator(state, action)
    subscribers.forEach((fn) => fn(state, action))
  }

  return {
    state,
    subscribe,
    dispatch,
  }

}

export default createStore
