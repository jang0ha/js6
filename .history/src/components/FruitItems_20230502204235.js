import { Component } from "../core/heropy";

export default class FruitItems extends Component {
  constructor() {
    super({
      tagName: 'li'
    })
  }

  render() {
    this.el.textContent = 'Apple'
  }
}