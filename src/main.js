import m from "mithril"
import { bind } from "./utils";
import './style.sass'

m.route(document.body, '/', {

  '/': {
    onmatch: () => import("./pages/index").then(module => bind(module.default))
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

})
