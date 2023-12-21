import React,{useEffect,useState} from "react";
import axios from "axios";
const DogImage = () => {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(()=>{
        axios.get('https://api.thedogapi.com/v1/images/search')
        .then(response =>{
            setImgUrl(response.data[0].url);
        })
        .catch(error =>{
            console.log("error",error);
        })
    },[]);
    return(
        <div>
            <h2>귀여운 강아지 이미지!!!</h2>
            {imgUrl && <img src={imgUrl} />}
        </div>
    )
}
export default DogImage;