import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../data.js"
import { useEffect,useState } from 'react';
import axios from 'axios'

export default function Feed(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        //axios is an async function
       const fetchPosts = async ()=>{
           const res = await axios.get("posts/timeline/60dbf7a4e2ffa5aa106d7ced")
           console.log(res);
       }
       fetchPosts();
    },[])
    return(
        <div className="feed">
            <Share/>
            {
                Posts.map((p)=>(
                    <Post key={p.id} post={p}/>
                ))
            }
        </div>    
    )
}