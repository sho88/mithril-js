import m from "mithril"

export default function Wrapper(component) {
  
  // ...then inject it into the component, along with the other attributes
  return (state, actions) => ({
    view: ({ attrs }) => m('div', m(component, { ...attrs, state, actions }))
  })
  
}
