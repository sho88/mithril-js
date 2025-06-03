import m from "mithril"
import { bind } from "./utils";
import './style.sass'

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

  '/old-school': {
    onmatch: () => import("./pages/old-school").then(module => bind(module.default))
  }

})
