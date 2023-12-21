import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimalSound from './js/Animal';
import TimerCount from './js/TimerCount';
import ExampleCallback from './js/ExampleCallback';
import PracticeTwo from './js/PracticeTwo';
import ChildComponent from './js/ChildComponent';
import ParentComponent from './js/ParentComponent';
import Blog from './js/Blog';
import HellowWorld from './js/JSXExam';
import TagExam from './js/TagExam';
import DogImage from './js/DogInfo';
import Exam from './js/Joker';
import Joker from './js/Joker';
import UserList from './js/UserExam';
import PostComment from './js/PostComment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HellowWorld /> */}
    {/* <TagExam /> */}
    {/* <App /> */}
    {/*<Count />*/}
    {/*<ToggleButton />*/}
    {/*<IndexExample />*/}
    {/*<ImageChange />*/}
    {/*<ObjectExample />*/}
    {/*<AnimalSound />*/}
    {/*<TimerCount />*/}
    {/*<PreticeTwo />*/}
    {/* <ParentComponent /> */}
    {/* <DogImage /> */}
    {/* <Joker /> */}
    {/* <UserList /> */}
    <PostComment />
  </React.StrictMode>
);
reportWebVitals();

//React.StrictMode : react 내부에서 
// 잠재적인 문제가 있는지 알아내기 위한 도구
//reportWebVitals : react 성능 측정하기 위한 메서드