import React from "react";
import ChildComponent from "./ChildComponent";

// ChildComponent에서는 prop 라는 이름으로 파라미터를 전달 받는다 
// prop는 무조건으로 사용해야하는 이름 x
// 부모에게 전달받아서 데이터를 사용한다는 의미를 지니기 때문에 부모 컴포넌트에서 전달받을 때는 prop라는 이름을 사용하는게 좋음
// message 와 data 또한 개발자가 정해놓은 이름 무조건적으로 작성 x

function ParentComponent(){
    const data = '나는 ParentComponent';
    return <ChildComponent message={data} />;
}
export default ParentComponent;