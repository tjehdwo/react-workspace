//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './js/Blog';
const About = () => <div>소개페이지</div>;
/*
const About = () => {
return (
  <div>소개페이지</div>
  )
}
*/
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;

/*
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import React from 'react';
//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './js/Blog';

const About = () => <div>소개페이지</div>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;

/*
//BrowserRouter
//화면에 나타내는 과정
//Route : URL 경로에 따라 특정 컴포넌트(function)을
//랜더링(화면에 나타내는 과정) 하는데 사용
//Routes : 여러개 Route를 그룹으로 만들고 관리하는데 사용
//Link : 클릭 가능한 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//useState : 상태를 관리하기 위해 사용되는 함수



//Js에서는 글자값인지 숫자값인지
//중요하지 않음
//재사용이 가능한지 재할당이 가능한지 가 중요

// var : 재할당, 재선언 가능
// let : 재할당 가능
// const : 재선언 재할당 둘다 불가 한번 선언하면 값을 변경하거나 수정할 수 없음

const msg ="hihi";

function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
     <h1>안녕 React</h1>
     <h2>{msg}</h2>
     <HiComponent />
    </div>
  );
}

export default App;
//사용법 : 배열형식으로 사용을 하며,
//첫번째 배열은 현재 상태값
//두번째 배열은 상태 업데이트 하는 값
// const [count, setConunt] = useState(0);

function Counter (){
  const [count, setConunt] = useState(0);
  return ( //html 태그 코드는 return 안에 작성해줌
    <div>
      <h1>Count</h1>
      <button>증가시키는 버튼</button>
    
    </div>
  )
  //순수자바스크립트 에서는 onclick 작성을 했지만
  //리액트자바스크립트 에서는 onClick C를 대문자로 활용하는 카멜케이스를 사용함
}
// export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
// 기본적으로 내보낼 항목을 지정하는 역할을 함
// 다른 Js 에서 app.js에 있는 function App을 사용할 수 있도록
// 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함

*/ 