import { MithrilClass } from "../components/mithril-class";

// @TODO: Maybe revert to the class template being at the bottom?
export default class ClassComponent extends MithrilClass {

  // properties go here...
  fullName = "";


  // return to the template renderer...
  view() {
    return this.html`
      <div class="class">
        <form class="class__form" onsubmit=${ev => this.handleSubmit(ev)}>
          <div>
            <p class="class__paragraph">
              The name is ${this.fullName}.<br />
              To change the name, please do so using the input field below.
            </p>
          </div>

          <div>
            <input class="class__input"
              name="name"
              type="text"
              value="${this.fullName}" 
              onchange=${ev => this.handleChange(ev)} />
          </div>

          <div>
            <button class="class__button">Change Name</button>
          </div>
        </form>
      </div>
    `
  }

  // hooks go here...
  async oninit() {
    this.fullName = this.attrs.state.name
  }


  // events go here...
  async handleChange(ev) {
    this.fullName = ev.target.value.trim()
  }

  async handleSubmit(ev) {
    ev.preventDefault()
    this.attrs.actions.changeName(this.fullName)
  }

}

