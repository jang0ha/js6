// export default class App {
//   constructor() {
//     this.el = document.createElement('div') // 메모리에만 생성이 됨.
//     this.el.textContent = "Hello, world!"
//   }
// }


import { Component } from "./core/heropy"; //default가 아닌 이름을 가진 내보내기 방식을 불러올때

export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText : '' // 빈 문자 데이터를 만듬.
      }
    }

    ) // 가져오는 함수를 실행하기위해서 꼭 사용해야함! (기본)
  }

  render() {
    // 재정의
    this.el.classList.add("search")
    this.el.innerHTML = /*HTML*/ `
      <input />
      <button> Click! </button>
    `


    const inputEl = this.el.querySelector('input')
    inputEl.addEventListenr('input', () => {
      this.state.inputText = inputEl.value
    })

    const buttonEl = this.el.querySelector("button")
    buttonEl.addEventListenr('click', () => {
      console.log(this.state.inputText)
    })
  }
}