import App from './App'; //(parcel 번들러는 뒤에 확장자 생략가능)
import router from './routes'; // router라는 이름을 만듬

const root = document.querySelector("#root");
root.append(new App().el) //메소드 : App을 생성자 함수로 호출하고 내부에서 el(element)이라는 속성을 쓸거임 인스튼스 생성. == ui componnet개념으로 만들어서 루트에 어팬드할거임.


router() // import router 호출

