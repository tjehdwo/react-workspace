import React, {useEffect, useState} from "react";

function Timer(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `남은티켓 : ${count}`;
    });
    /*
      <button onClick={()=> setCount(count + 1)}>Click</button>
      위 버튼 클릭과 const increment로 작성해준 메서드는
      동일한 효능을 지님
      
      <button onClick={()=> setCount(count + 1)}>Click</button>
      const increment = () => {
        setCount(count + 1);
      }
    
    */ 
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>Click</button>
        </div>
    )
}
export default Timer;