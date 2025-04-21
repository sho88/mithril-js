import m from "mithril"

import styles from "./../styles/main.module.scss";

export default function Wrapper(component) {

  // ...then inject it into the component, along with the other attributes
  return (state, actions, html) => ({
    view: ({ attrs }) => m('div', { className: styles.layout }, m(component, { ...attrs, state, actions, html }))
  })

}
