import m from "mithril";

const DemoComponent = {

  oninit(vnode) {
    vnode.state.name = "Mithril Demo";
  },

  view: (vnode) =>
    m("div", { className: "demo-component" }, [
      m("h2", "Demo Component"),
      m("p", `Name: ${vnode.state.name}`),
      m('button',
        {
          "aria-label": "greet-button",
          "data-testid": "greet-button",
          onclick: () => {
            vnode.state.name = "Mithril Updated!";
          },
        },
        "Greet"
      )
    ])
};

export default DemoComponent;