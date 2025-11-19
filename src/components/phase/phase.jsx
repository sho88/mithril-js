import m from 'mithril'

export const component = {

  oninit(vnode) {
    vnode.state.currentPhase = 1
  },

  view: (vnode) => (
    <div class="govuk-phase-banner">
      <p class="govuk-phase-banner__content">
        <strong class="govuk-tag govuk-phase-banner__content__tag">
          {vnode.attrs.phaseText || 'Alpha'}
        </strong>
        <span class="govuk-phase-banner__text">
          {vnode.children || 'This is a new service - your feedback will help us to improve it.'}
        </span>
      </p>
    </div>
  )
}

export default component