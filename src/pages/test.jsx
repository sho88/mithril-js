import m from 'mithril'

// Import the Panel component
import HeaderComponent from '../components/navigation/header'
import FooterComponent from '../components/navigation/footer'
import PanelComponent from '../components/panel/panel'

// Import SASS styles that imports GOV.UK Frontend styles
import '../test.sass'

export const component = {

  oninit(vnode) {
    vnode.state.message = ""
    vnode.state.submitted = false
  },

  view: (vnode) => (
    <>
      <HeaderComponent />

      <div class="govuk-width-container">
        <main class="govuk-main-wrapper" id="main-content">
          <h1 class="govuk-heading-xl">Default page template</h1>

        </main>
        <form className="example-component" onsubmit={(e) => {
          e.preventDefault()
          vnode.state.submitted = true

          console.clear()
          console.log(`Form submitted with message: ${vnode.state.message}`)
        }}>

          <div class="govuk-form-group">
            <h1 class="govuk-label-wrapper">
              <label class="govuk-label govuk-label--l" for="more-detail">
                Can you provide more detail?
              </label>
            </h1>

            <div id="more-detail-hint" class="govuk-hint">
              Do not include personal or financial information, like your National Insurance number or credit card details
            </div>

            <textarea class="govuk-textarea"
              id="more-detail"
              name="moreDetail"
              rows="5"
              aria-describedby="more-detail-hint"
              onchange={(e) => {
                vnode.state.message = e.target.value.trim()
              }}></textarea>
          </div>

          <div className="actions" style={{ marginTop: '20px' }}>
            <button className='govuk-button'
              data-module="govuk-button"
              disabled={!vnode.state.message.trim().length}>
              Submit Application
            </button>
          </div>

          {vnode.state.submitted && (
            <PanelComponent title="Success!" message={vnode.state.message} />
          )}
        </form>
      </div>

      <FooterComponent />
    </>
  ),

}

export default component;
