const setVersion = (version) => ({
  type: 'version/SET_VERSION',
  payload: {version},
})

const version = (state, setState, action) => {
  if (state === undefined) {
    setState('0.0.0')
  }
  const {version} = action.payload
  if (action.type === 'version/SET_VERSION') {
    setState(version)
  }
}

export {
  setVersion,
  version,
}
