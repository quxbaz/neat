import Profile from './Profile'
import InputField from './InputField'
import Todos from './Todos'

const App = (store, props) => {

  const {state} = store

  const dom = document.createElement('div')
  const profile = Profile(store)
  const inputField = InputField(store)
  const todos = Todos(store)

  dom.innerHTML = `
<div style='width:400px; margin: 20px auto;'>
  <h1>App</h1>
  <div id='profile'></div>
  <div id='inputField'>InputField</div>
  <div id='todos'></div>
</div>
`

  const $profile = dom.querySelector('#profile')
  $profile.replaceWith(profile.dom)

  const $inputField = dom.querySelector('#inputField')
  $inputField.replaceWith(inputField.dom)

  const $todos = dom.querySelector('#todos')
  $todos.replaceWith(todos.dom)

  return {
    dom,
  }

}

export default App
