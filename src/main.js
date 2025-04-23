import m from "mithril"
import htm from "htm";
import { bind } from "./utils";
// import './style.css'

// prepare the htm (HyperText Markup) to be passed into the Wrapper component
const html = htm.bind(m)


m.route(document.body, '/', {

  '/': {
    // lazy load components by default...
    onmatch: () => import("./pages/home").then(module => bind(module.default))
  },

  '/users': {
    onmatch: () => import("./pages/users").then(module => bind(module.default))
  },

  '/pojo': {
    onmatch: () => import("./pages/pojo").then(module => bind(module.default))
  },

  '/function': {
    onmatch: () => import("./pages/function").then(module => bind(module.default))
  },

  '/class': {
    onmatch: () => import("./pages/class").then(module => bind(module.default))
  },

})
