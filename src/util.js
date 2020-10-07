function omit (obj, key) {
  const newObj = {...obj}
  delete newObj[key]
  return newObj
}

function sortBy (list, key) {
  if (list.length === 0) {
    return []
  }
  const sorted = [...list].sort((a, b) => {
    if (a[key] < b[key]) {
      return -1
    } else if (a[key] > b[key]) {
      return 1
    }
    return 0
  })
  return sorted
}

const uniqId = (function () {
  let id = -1
  return () => {
    id++
    return id.toString()
  }
})()

function values (obj) {
  return Object.keys(obj).map(k => obj[k])
}

function keys (obj) {
  return Object.keys(obj)
}

export {
  omit,
  sortBy,
  uniqId,
  values,
  keys,
}