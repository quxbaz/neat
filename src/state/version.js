const setVersion = (version) => ({
  type: 'version/SET_VERSION',
  payload: {version},
})

const version = (state, setState, action) => {
  if (state === undefined) {
    setState('0.0.0')
  }
  if (action.type === 'version/SET_VERSION') {
    setState(action.payload.version)
  }
}

export {
  setVersion,
  version,
}
