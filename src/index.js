import {values, keys} from './util'
import createStore from './createStore'
import {setVersion, version} from './state/version'
import {setAge, setName, person} from './state/person'

const combineMutators = (state, mutators) => {
  return (state, action) => {
    keys(mutators).forEach((key) => {
      const setState = (value) => state[key] = value
      mutators[key](state[key], setState, action)
    })
  }
}

const appState = {}

const baseMutator = combineMutators(appState, {
  version,
  person,
})

const store = createStore(appState, baseMutator)

store.subscribe((state, action) => {
  if (action.type === '@@INIT') {
    return
  }
  console.log(state)
})

/*
  Trigger store state initialization in mutator functions.
*/
store.dispatch({
  type: '@@INIT',
  payload: {},
})

store.dispatch(setVersion('0.0.1'))
store.dispatch(setName('Bob'))
store.dispatch(setAge(21))
