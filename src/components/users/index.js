import m from "mithril"
import htm from "htm"

import usersStyle from "./styles.module.scss"

const html = htm.bind(m)


const UsersComponent = {

  // template rendering goes here...
  view: ({ attrs: { users, whenUserClick } }) => html`
    <ul className=${usersStyle.list}>
      ${users.map(user => html`
        <li className=${usersStyle.listItem} onclick=${() => whenUserClick(user)}>
          ${user.name}
        </li>
      `)}
    </ul>
  `

}


export default UsersComponent

