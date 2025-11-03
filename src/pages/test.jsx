import m from 'mithril'

export const component = {

  oninit(vnode) {
    vnode.state.counter = 0
  },

  view: (vnode) => (
    <div className="example-component">
      <div className="text">
        <h1 className='text__header'>Hello, Mithril!</h1>
        <p className='text__message'>{vnode.state.message}</p>
      </div>
      
      <div className="actions">
        <button
          className="actions__button"
          onclick={() => {
            vnode.state.message = "You clicked the button!";
          }}>
          Click Me
        </button>
      </div>
    </div>
  ),

}

export default component;
