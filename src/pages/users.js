import htm from "htm";
import m from "mithril";
import { asyncify } from "./../utils";

const html = htm.bind(m);


export default function UsersComponent({ attrs: { state, actions } }) {

  // properties are declared here...
  let loading = false

  // hooks here...
  async function oninit() {
    await getUsers()
  }

  // utility functions here...
  async function getUsers() {
    loading = true

    const [error, response] = await asyncify(m.request("https://jsonplaceholder.typicode.com/users"))

    // @TODO: Handle this...
    if (error) {
      loading = false
      return
    }

    actions.addUsers( response )
    loading = false
  }

  // event handlers...
  async function handleClick(user) {
    actions.setSelectedUser( user )
  }

  return { oninit, view: () => html`
    <div>
      <ul>
        ${state.users.map(user => html`
          <li>
            ${user.name}
            <button onclick=${() => handleClick(user)}>Select</button>
          </li>
        `)}

        ${state.selectedUser && html`
          <p>The user you selected is:</p>
          <pre>${JSON.stringify(state.selectedUser, null, 2)}</pre>
        `}
      </ul>
    </div>
  ` }

}
