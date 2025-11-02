import { bind } from "./../../utils"

import usersStyle from "./styles.module.sass"


const UsersComponent = {

  // template rendering goes here...
  view: ({ attrs: { users, whenUserClick, html } }) => html`
    <h1 class="text-3xl font-bold">
      MithrilJS Boilerplate
    </h1>

    <hr />

    <ul className=${usersStyle['list']}>
      ${users.map(user => html`
        <li className=${usersStyle['list__item']} onclick=${() => whenUserClick(user)}>
          ${user.name}
        </li>
      `)}
    </ul>
  `

}


export default bind(UsersComponent)

