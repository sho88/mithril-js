import m from "mithril";
import UsersComponent from "./../components/users/users.component"
import { asyncify } from "./../utils";


export default function UsersPageComponent({ attrs: { actions, state, html } }) {

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

    actions.addUsers(response)
    loading = false
  }

  // event handlers...
  async function handleClick(user) {
    actions.setSelectedUser(user)
  }

  return {
    oninit, view: () => html`
      <div>
        ${state.users && html`<${UsersComponent} users=${state.users} whenUserClick=${handleClick} />`}

        ${state.selectedUser && html`
          <p>The user you selected is:</p>
          <pre>${JSON.stringify(state.selectedUser, null, 2)}</pre>
        `}

      </div>
  ` }

}
