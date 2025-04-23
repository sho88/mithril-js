import htm from "htm";
import m from "mithril";

export class MithrilClass {

  constructor({ attrs }) {
    this.html = htm.bind(m)
    this.attrs = attrs
  }

}
