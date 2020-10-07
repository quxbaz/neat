import Profile from './Profile'
import InputField from './InputField'

const App = (store, props) => {

  const {state} = store

  const dom = document.createElement('div')
  const profile = Profile(store)
  const inputField = InputField(store)

  dom.innerHTML = `
<div>
  <h1>App</h1>
  <div id='profile'></div>
  <div id='inputField'>InputField</div>
</div>
`

  const $profile = dom.querySelector('#profile')
  $profile.replaceWith(profile.dom)

  const $inputField = dom.querySelector('#inputField')
  $inputField.replaceWith(inputField.dom)

  return {
    dom,
  }

}

export default App
