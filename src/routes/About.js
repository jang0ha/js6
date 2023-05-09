import { Component } from "../core/heropy";

export default class About extends Component{
  render() {
    this.el.innerHTML = /* html */ `
      <h1>어바웃!</h1>
    `
  }
}