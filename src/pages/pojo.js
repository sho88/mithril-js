const PojoComponent = {

  // template rendering goes here...
  view: ({ attrs: { actions, state, html } }) => html`
    <div>
      <p>Hello there ${state.name}, how are you doing?</p>
      <button onclick=${() => actions.changeName("James Doe")}>Change Name</button>
    </div>
  `

}


export default PojoComponent

