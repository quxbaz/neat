import {uniqId} from '/util'

const create = (text='') => ({
  type: 'todos/CREATE',
  payload: {
    id: uniqId(),
    text,
  },
})

const update = (id, text) => ({
  type: 'todos/UPDATE',
  payload: {id, text},
})

const remove = (id) => ({
  type: 'todos/REMOVE',
  payload: {id},
})

/*
  Todos mutator function. Analogous to a Redux reducer, except it
  mutates state instead of returning a new slice of state.
*/
const todos = (state, setState, action) => {
  if (state === undefined) {
    setState({})
  }
  const {id, text} = action.payload
  if (action.type === 'todos/CREATE') {
    state[id] = {id, text}
  } else if (action.type === 'todos/UPDATE') {
    state[id].text = text
  } else if (action.type === 'todos/REMOVE') {
    delete state[action.payload.id]
  }
}

export {
  create,
  update,
  remove,
  todos,
}
