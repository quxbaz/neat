import combineMutators from './combineMutators'
import createStore from './createStore'
import {version} from './state/version'
import {person} from './state/person'
import {todos} from './state/todos'

function createApp () {

  const baseMutator = combineMutators({
    version,
    person,
    todos,
  })

  const store = createStore(baseMutator)

  store.subscribe((state, action) => {
    console.log(state)
  })

  return {
    store,
  }

}

export default createApp
