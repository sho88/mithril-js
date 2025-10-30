import m from "mithril"

const NavigationComponent = {

  view() {
    return m('nav',
      m('ul',
        m('li', m(m.route.Link, { href: '/users' }, 'Users')),
        m('li', m(m.route.Link, { href: '/pojo' }, 'Pojo')),
        m('li', m(m.route.Link, { href: '/function' }, 'Function')),
        m('li', m(m.route.Link, { href: '/class' }, 'Class')),
        m('li', m(m.route.Link, { href: '/old-school' }, 'Old School')),
        m('li', m(m.route.Link, { href: '/state' }, 'State')),
      )
    );
  }

}

export default NavigationComponent
