import m from "mithril"
import htm from "htm";
import { Actions, State } from "./actions"

import Wrapper from "./utils/wrapper";

// prepare the htm (HyperText Markup) to be passed into the Wrapper component
const html = htm.bind(m)

// initialise the state and the corresponding actions
const state = State()
const actions = Actions(state)


// lazy load components by default...
m.route(document.body, '/', {

  '/': {
    onmatch: () => import("./pages/home").then(module => Wrapper(module.default)(state, actions, html))
  },

  '/users': {
    onmatch: () => import("./pages/users").then(module => Wrapper(module.default)(state, actions, html))
  },

  '/pojo': {
    onmatch: () => import("./pages/pojo").then(module => Wrapper(module.default)(state, actions, html))
  },

  '/function': {
    onmatch: () => import("./pages/function").then(module => Wrapper(module.default)(state, actions, html))
  },

  '/class': {
    onmatch: () => import("./pages/class").then(module => Wrapper(module.default)(state, actions, html))
  },

})
