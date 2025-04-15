import m from "mithril"
// import './style.css'

import Wrapper from "./components/wrapper";

m.route(document.body, '/', {

  '/': {
    // lazy load components by default...
    onmatch: () => import("./pages/home").then(module => Wrapper(module.default))
  },

  '/users': {
    onmatch: () => import("./pages/users").then(module => Wrapper(module.default))
  }

})
