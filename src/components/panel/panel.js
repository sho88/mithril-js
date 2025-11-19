import m from 'mithril'

export const component = {
  view: (vnode) =>
    m('div', { className: 'govuk-panel govuk-panel--confirmation' },
      m('h1', { className: 'govuk-panel__title' }, vnode.attrs.title || 'Confirmation'),
      m('div', { className: 'govuk-panel__body' }, vnode.attrs.message || 'Your action was successful.'),
    )
}

export default component