import { bind } from "./../../utils"

import usersStyle from "./styles.module.scss"


const UsersComponent = {

  // template rendering goes here...
  view: ({ attrs: { users, whenUserClick, html } }) => html`
    <ul className=${usersStyle.list}>
      ${users.map(user => html`
        <li className=${usersStyle.listItem} onclick=${() => whenUserClick(user)}>
          ${user.name}
        </li>
      `)}
    </ul>
  `

}


export default bind(UsersComponent)

