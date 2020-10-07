/*
  State
*/
import {setVersion} from './state/version'
import {setAge, setName} from './state/person'
import {
  create as createTodo,
  remove as removeTodo,
  update as updateTodo,
} from './state/todos'

import createApp from './createApp'

/*
  Components
*/
import App from './components/App'

const app = createApp()
const {store} = app

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

const render = (component, root) => {
  root.appendChild(component)
}

// const {state, dispatch} = store

render(
  App(store).dom,
  document.body
)
