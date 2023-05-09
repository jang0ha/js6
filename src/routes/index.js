import { creatRouter } from '../core/heropy' 
import Home from "./Home";
import About from "./About";

// 기본내보내기로 내보냄
export default creatRouter([
  // 함수 만듬
  { path : '#/', componet : Home},
  { path: '#/about', componet: About }
])