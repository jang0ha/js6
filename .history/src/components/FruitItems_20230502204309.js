import { Component } from "../core/heropy";

export default class FruitItems extends Component {
  constructor(payload) {
    super({
      tagName: 'li'
    })
  }

  render() {
    this.el.textContent = 'Apple'
  }
}