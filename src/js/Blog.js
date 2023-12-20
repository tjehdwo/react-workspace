// /js/Blog.js
import React,{useState,useEffect} from "react";
import { json } from "react-router-dom";

const Blog = () => {
  

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [posts, setPosts] = useState(savedPosts);
    const [newPost,setNewPost] =useState('');

    useEffect(() => {
        localStorage.setItem('posts',JSON.stringify(posts));
    },[posts]);

    const addPost = () => {
        setPosts([...posts,newPost]);
        setNewPost('');
    }
    localStorage.setItem('posts',JSON.stringify([...posts,newPost]));


    return(
        <div>
            {posts.map(post => (
                    <div>
                    <textarea
                    placeholder="게시글을 입력하세요." value={newPost} onChange={(e) => setNewPost(e.target.value)}
                    >
                    </textarea>
                    <br />
                    <button onClick={addPost}>게시글 추가</button>
                    </div>
            
                
            ))}
            </div>
      

    )
}
export default Blog;