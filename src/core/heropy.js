//////////component//////////


export class Component{
  // constructor() {
  //   // 함수 역할
  // }
  constructor(payload = {}) { // payload라는 매개변수로 받을꺼고 객체 데이터(빈데이터)로 기본값 설정
    const {
      tagName = "div",
      state = {},
      props= {},
    } = payload  // payload 에서 tagname을 꺼낼 건데 tagname의 기본값은 div로 설정, tagName이 설정이 안되면 div로 출력 (객체구조 할당에서 재설정 )
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  render() {
    //... 
  }
}


//////// router //////////
function routeRender(routes) {
  // 주소부분에 해쉬가 붙어있는지 아닌지 확인
  if (!location.hash) {
    history.replaceState(null, '', '/#/')
  }


  // 1. route-view를 만들어서
  const routerView = document.querySelector('router-view')
  // http://localhost:1234/#/about?name=heropy
  // #/about?name=heropy
  const [hash, queryString = ""] = location.hash.split("?")

//  4.location.hash로 현재주소 확인 후 > queryString을 제외한 주소hash만 찾아서
  
  // 5.주소와 일치한 배열데이터를 [.test()]부분을 찾아서, currentRouter로 할당한 뒤 > 
  const currentRouter = routes.find(route => 
    // 정규 표현식 (객체 RegExp)
    // /#/about .test('#/about')
    new RegExp(`${ route.path }/?$`).test(hash) //true
  )
  // 2. 비운다음에 
  routerView.innerHTML = '';
  // 3. 새로운 내용을 넣을건데(아래)
  // 6. 생성자 함수로 컴포넌트 (클래스)를 호출한다음에 el속성으로 꺼내 내용 넣어라
  routerView.append(new currentRouter.component().el)
}

export function creatRouter(routes) {
  return function () { 
    window.addEventListener("popstate", () => { 
      //popstate 주소가 바뀌면 동작
      routeRender(routes)
    })

    routeRender(routes) // popstate는 처음에 동작하지 않기때문에 최초 호출 
  }
} 