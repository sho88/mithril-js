import m from "mithril"
import styles from "./../styles/main.module.scss";

export default function Wrapper(component) {

  const links = [
    { label: "Home", href: "/", icon: "bi bi-house" },
    { label: "Users", href: "/users", icon: "bi bi-people" },
    { label: "Pojo", href: "/pojo", icon: "bi bi-braces" },
    { label: "Function", href: "/function", icon: "bi bi-file-code" },
  ]

  // ...then inject it into the component, along with the other attributes
  return (state, actions, html) => ({
    view: ({ attrs }) => [
      m('header',
        m('nav', { className: styles['mobile-nav'] },
          m('ul', { className: styles['mobile-nav__list'] },
            links.map(link =>
              m('li', { className: styles['mobile-nav__item'] },
                m(m.route.Link, { className: styles["mobile-nav__link"], href: link.href }, [
                  m('i', { className: link.icon }),
                  link.label
                ])
              )
            ),
          ),
        )
      ),
      m('main', { className: styles.layout }, m(component, { ...attrs, state, actions, html })),
      m('footer'),
    ]
  })

}
