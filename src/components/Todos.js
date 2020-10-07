import {values} from '/util'
import {remove as removeTodo} from '/state/todos'

const Todos = (store) => {

  const dom = document.createElement('ul')

  function render () {

    const todos = values(store.state.todos)

    dom.innerHTML = todos.map((todo, i) => {
      return [
        '<li style="margin-bottom:24px">',
          `<div style="width:100%">${todo.text}</div>`,
          `<button class="button" key="${i}">`,
            'Remove',
          '</button>',
        '</li>',
      ].join('')
    }).join('')

    const buttons = dom.querySelectorAll('.button')
    for (let i=0; i < buttons.length; i++) {
      let button = buttons[i]
      let key = button.getAttribute('key')
      button.addEventListener('click', () => {
        store.dispatch(removeTodo(key))
      })
    }

  }

  render()
  store.subscribe(render)

  return {
    dom,
  }

}

export default Todos
