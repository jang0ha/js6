import App from './App'; //(parcel 번들러는 뒤에 확장자 생략가능)

const root = document.querySelector("#root");
root.append(new App().el) //메소드 : App을 생성자 함수로 호출하고 내부에서 el(element)이라는 속성을 쓸거임 