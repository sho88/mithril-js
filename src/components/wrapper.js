import m from "mithril"
import { Actions, State } from "../actions"

export default function Wrapper(component) {

  // initialise the state and the corresponding actions
  const state = State()
  const actions = Actions(state)

  // ...then inject it into the component, along with the other attributes
  return { view: ({ attrs }) => m('div', m(component, { ...attrs, state, actions })) }
}