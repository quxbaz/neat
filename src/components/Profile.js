const Profile = (store) => {

  const {person} = store.state

  const dom = document.createElement('div')

  const render = () => {
    dom.innerHTML = `
<div>Name: [ ${person.name} ]</div>
<div>Age: [ ${person.age} ]</div>
`
  }

  store.subscribe(render)

  render()

  return {
    dom,
  }

}

export default Profile
