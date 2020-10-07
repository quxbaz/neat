import {setName} from '/state/person'

const InputField = (store, props) => {

  const {state} = store

  const dom = document.createElement('input')
  dom.setAttribute('autofocus', true)
  dom.setAttribute('type', 'text')
  dom.setAttribute('value', state.person.name)

  dom.addEventListener('input', (event) => {
    store.dispatch(setName(event.target.value))
  })

  return {
    dom,
  }

}

export default InputField
