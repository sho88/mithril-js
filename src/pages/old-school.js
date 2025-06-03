import styles from "./../styles/old-school.module.sass"

const model = {
  forename: 'James',
  surname: 'Doe',
  email: 'james.doe@gmail.com',
  numberOfReversions: 0,
}

const component = {

  // events go here...
  handleClick: function() {
    model.forename = model.forename === "James" ? "John" : "James"
    
    if (model.forename === "James") model.numberOfReversions = model.numberOfReversions + 1;
  },

  // utility functions go here...
  renderFullName: function(currentModel) {
    return `${currentModel.forename}${currentModel.surname ? ' ' + currentModel.surname : ''}`
  },

  // template rendering goes here...
  view: ({ attrs: { html } }) => (html`
    <div class=${styles.user}>
      <p class=${styles.text}><strong>Mithril.js</span> is a modern, lightweight JavaScript framework for building fast and powerful single-page applications. With a tiny footprint (~10KB gzipped) and a simple, functional API, Mithril offers fast rendering through a virtual DOM and supports routing and XHR out of the box. Whether you're creating a small widget or a complex web app, Mithril makes it easy to build scalable, maintainable interfaces with minimal overhead.</p>

      <div class=${styles['horizontal-rule-container']}>
        <hr />
      </div>

      <p class=${styles.user__name}>Hi there, my name is ${component.renderFullName(model)}</p>
      <p class=${styles.user__counter}>You have reverted the name ${model.numberOfReversions} time(s).</p>

      <div class=${styles.button__container}>
        <button class=${styles.user__button} onclick=${component.handleClick}>Toggle Forename</button>
      </div>
    </div>
  `)

}

export default component 
