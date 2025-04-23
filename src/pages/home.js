import htm from "htm";
import m from "mithril";

const html = htm.bind(m);

export default function ({ attrs: { actions, state } }) {

  console.log(state)

  async function handleClick() {
    actions.incrementCounter()
    actions.changeName('James Doe')
  }

  return {
    view: () => html`
    <div>
      <pre>${JSON.stringify(state, null, 2)}</pre>
      <p>Hello ${state.name}</p>
      <div>
        <button onclick=${handleClick}>Change Name!</button>
      </div>

      ${state.selectedUser && html`<pre>${JSON.stringify(state.selectedUser, null, 2)}</pre>`}
    </div>
  `}
}
