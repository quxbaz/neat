import combineMutators from './combineMutators'
import createStore from './createStore'
import {setVersion, version} from './state/version'
import {setAge, setName, person} from './state/person'
import {
  create as createTodo,
  remove as removeTodo,
  update as updateTodo,
  todos,
} from './state/todos'

const baseMutator = combineMutators({
  version,
  person,
  todos,
})

const store = createStore(baseMutator)

store.subscribe((state, action) => {
  if (action.type === '@@INIT') {
    return
  }
  console.log(state)
})

store.dispatch(setVersion('0.0.1'))
store.dispatch(setName('Bob'))
store.dispatch(setAge(21))
store.dispatch(setAge(21))

store.dispatch(createTodo('Buy milk.'))
store.dispatch(createTodo('Get gas.'))
store.dispatch(createTodo('Clean bathroom.'))

const action = createTodo('Cook dinner.')
const {id} = action.payload
store.dispatch(action)
store.dispatch(updateTodo(id, 'Cook big dinner.'))
store.dispatch(removeTodo(id))
