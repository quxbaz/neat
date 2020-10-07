function createStore (baseMutator) {

  let state = {}
  let subscribers = []
  baseMutator = baseMutator(state)

  const subscribe = (fn) => subscribers.push(fn)

  const dispatch = (action) => {
    baseMutator(state, action)
    subscribers.forEach((fn) => fn(state, action))
  }

  /*
    Trigger store state initialization in mutator functions.
  */
  dispatch({
    type: '@@INIT',
    payload: {},
  })

  return {
    state,
    subscribe,
    dispatch,
  }

}

export default createStore
