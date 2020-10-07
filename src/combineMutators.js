import {each} from './util'

const combineMutators = (mutators) => (state) => {
  let setters = {}
  each(mutators, (mutator, key) => {
    setters[key] = (value) => state[key] = value
  })
  const combined = (state, action) => {
    each(mutators, (mutator, key) => {
      mutator(state[key], setters[key], action)
    })
  }
  return combined
}

export default combineMutators
