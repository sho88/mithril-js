import htm from "htm";
import m from "mithril";

const html = htm.bind(m);

export default function({ attrs: { actions, state } }) {
  
  async function handleClick() {
    actions.incrementCounter()
    actions.changeName('John Doe')
  }


  return { view: () => html`
    <div>
      <p>Hello ${state.name}</p>
      <div>
        <button onclick=${handleClick}>Change Name!</button>
      </div>
    </div>
  `}
}