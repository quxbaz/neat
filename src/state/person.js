const setName = (name) => ({
  type: 'person/SET_NAME',
  payload: {name},
})

const setAge = (age) => ({
  type: 'person/SET_AGE',
  payload: {age},
})

/*
  Person mutator function. Analogous to a Redux reducer, except it
  mutates state instead of returning a new slice of state.
*/
const person = (state, setState, action) => {
  if (state === undefined) {
    setState({
      name: '',
      age: 0,
    })
  }
  if (action.type === 'person/SET_NAME') {
    state.name += action.payload.name
  } else if (action.type === 'person/SET_AGE') {
    state.age += action.payload.age
  }
}

export {
  setName,
  setAge,
  person,
}
