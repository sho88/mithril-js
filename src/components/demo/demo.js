import m from "mithril";

const DemoComponent = {

  oninit(vnode) {
    vnode.state.name = "Mithril Demo";
  },

  view: (vnode) =>
    m("div", { class: "demo-component" }, [
      m("h2", "Demo Component"),
      m("p", `Name: ${vnode.state.name}`),
      m('button',
        {
          onclick: () => vnode.state.name = "Mithril Updated!",
          "aria-label": "greet-button",
          "data-testid": "greet-button",
        },
        "Greet"
      )
    ])
};

export default DemoComponent;