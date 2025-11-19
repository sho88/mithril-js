import m from "mithril";

import mailCss from "./mail.module.sass";

const component = {

  oninit(vnode) {
    vnode.state.emails = new Array(10).fill(null).map((_, index) => ({
      id: index + 1,
      description: `This is the description for email ${index + 1}`,
      from: `john.smith@gmail.com`,
      title: `Email Subject ${index + 1}`,
      to: `james.doe@gmail.com`
    }));
    vnode.state.emailsFiltered = [...vnode.state.emails];
    vnode.state.selectedEmails = [];
    vnode.state.viewedEmails = [];
  },

  onupdate(vnode) {
    const data = Object.keys(vnode.state)
      .filter(key => ['selectedEmails', 'viewedEmails'].includes(key))
      .reduce((accumulator, key) => ({ ...accumulator, [key]: vnode.state[key] }), {});

    console.clear();
    console.log(JSON.stringify(data, null, 2));
  },

  view: vnode => ([
    m("div", { className: mailCss['main'] },
      m("input[type='text']",
        {
          className: mailCss['main__search'],
          onkeyup: (e) => {
            const searchTerm = e.target.value
            vnode.state.emailsFiltered = vnode.state.emails.filter(email =>
              email.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              email.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              email.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
              email.to.toLowerCase().includes(searchTerm.toLowerCase())
            );
          },
          placeholder: "Search...",
        }
      ),
    ),

    m('div', { className: mailCss['email-list'] },
      vnode.state.emailsFiltered.map((email, index) =>
        m('div', { key: index, className: mailCss['email'] },
          m('div', { className: mailCss['email__item'] },
            m('input[type="checkbox"]',
              {
                className: mailCss['email__checkbox'],
                onclick: (e) => {
                  if (e.target.checked) {
                    vnode.state.selectedEmails = [...vnode.state.selectedEmails, email];
                    return;
                  }

                  vnode.state.selectedEmails = vnode.state.selectedEmails.filter(
                    selectedEmail => selectedEmail !== email
                  );
                }
              }
            ),

            m('div',
              {
                className: mailCss['email__information'],
                onclick: () => {
                  const emailAlreadyExists = vnode.state.selectedEmails.find(selectedEmail => selectedEmail === email);
                  if (emailAlreadyExists) return;

                  vnode.state.viewedEmails = [...vnode.state.viewedEmails, email];
                },
              },

              vnode.state.viewedEmails.find(selectedEmail => selectedEmail === email)
                ? m('span', email.title)
                : m('strong', email.title),

              m('br'),
              m('p',
                { className: mailCss['email__description'] },
                m('span', email.description)
              ),
            ),
          ),
        )
      )
    )
  ])

}

export default component;
