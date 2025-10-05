import { bind } from "./../../utils"

// @TODO: Find a way to integrate sass modules with tailwind...
// import usersStyle from "./styles.module.scss"
import "./styles.css"


const UsersComponent = {

  // template rendering goes here...
  view: ({ attrs: { users, whenUserClick, html } }) => html`
    <h1 class="text-3xl font-bold">
      MithrilJS Boilerplate
    </h1>

    <hr />

    <ul className="list">
      ${users.map(user => html`
        <li className="listItem" onclick=${() => whenUserClick(user)}>
          ${user.name}
        </li>
      `)}
    </ul>
  `

}


export default bind(UsersComponent)

