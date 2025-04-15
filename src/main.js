import m from "mithril"
import { Actions, State } from "./actions"
// import './style.css'

import Wrapper from "./components/wrapper";

// initialise the state and the corresponding actions
const state = State()
const actions = Actions(state)

m.route(document.body, '/', {

  '/': {
    // lazy load components by default...
    onmatch: () => import("./pages/home").then(module => Wrapper(module.default)(state, actions))
  },

  '/users': {
    onmatch: () => import("./pages/users").then(module => Wrapper(module.default)(state, actions))
  }

})
