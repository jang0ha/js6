//////////component//////////


export class Component{
  // constructor() {
  //   // 함수 역할
  // }
  constructor(payload = {}) { // payload라는 매개변수로 받을꺼고 객체 데이터(빈데이터)로 기본값 설정
    const { tagName = "div" } = payload  // payload 에서 tagname을 꺼낼 건데 tagname의 기본값은 div로 설정, tagName이 설정이 안되면 div로 출력 (객체구조 할당에서 재설정 )
    this.el = document.createElement(tagName)
    this.render()
  }
  render() {
    //... 
  }
}