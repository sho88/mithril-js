export default function FunctionComponent({ attrs: { state, actions, html } }) {

  // properties go here...
  let name = null;


  // hooks go here...
  async function oninit() {
    name = state.name
  }


  // events go here...
  async function handleChange(ev) {
    name = ev.target.value.trim()
  }

  async function handleSubmit(ev) {
    ev.preventDefault()

    actions.changeName(name)
  }


  // template rendering goes here...
  return {
    oninit, view: () => html`
    <div class="name">
      <form class="name__form" onsubmit=${handleSubmit}>
        <h1 class="name__title">Change Name</h1>

        <div class="input">
          <input class="input__field"
            name="name"
            type="text"
            value=${name}
            onchange=${handleChange} />
        </div>

        <button class="name__button">Change Name</button>
      </form>
    </div>
  `}

}
