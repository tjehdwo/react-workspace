import React,{useEffect,useState} from "react";
import axios from "axios";
const Joker = () => {
    const [joker,setJoker] = useState('');

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            setJoker(response.data.joker || `${response.data.setup} ${response.data.delivery}`);
        })
        .catch(error =>{
            console.log("error",error);
        })
    },[]);
    return(
        <div>
            <p>{joker}</p>
        </div>
    )
}
export default Joker;