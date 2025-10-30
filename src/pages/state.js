import m from 'mithril';

import DemoComponent from '../components/demo/demo.js';


// model for the component...
const model = {
  counter: 0,
  name: "James Doe",
}

const component = {

  // events go here...
  handleButtonClick() {
    model.name = "John Doe"
  },

  handleCounterClick() {
    if (model.counter === 10) model.counter = 0;

    model.counter = model.counter + 1
  },

  handleInput(ev) {
    model.name = ev.target.value
  },


  // template rendering...
  view() {
    return ([

      m(DemoComponent),

      m('div', { style: { padding: '20px' } }, [
        m('.user',
          m('div',
            m('p.user__name', `Hello ${model.name}...`),
          ),
  
          m('button.user__button', { onclick: component.handleButtonClick }, 'Change Name'),
        ),
  
        m('hr', {
          style: 'margin: 20px 0'
        }),
  
        m('.counter',
          m('button.counter__number', { onclick: component.handleCounterClick }, `You clicked ${model.counter} time${model.counter > 1 ? `(s)` : ''}`),
        ),
  
        m('hr', { style: 'margin: 20px 0' }),
  
        m('div.form',
          m('input[type=text]', {
            style: 'padding: 10px',
            oninput: component.handleInput
          }),
        )
      ])
    ])
  },

}


export default component;
