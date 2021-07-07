import './post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import {useState} from 'react'
import {Users} from "../../data.js"
export default function Post({post}){
    const user = Users.filter((u)=>{ return u.id === post.userId})
    const [like,setLike] = useState(post.like)
    const [isLike,setIsLike] = useState(false)
    const likeHandler = () =>{
        setLike(isLike?like-1:like+1)
        setIsLike(!isLike)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postTopLeftImg" src={user[0].profilePicture} alt="friend"></img>
                        <div className="postTopLeftProfile">
                            <span className="postUser">{user[0].username}</span>
                            <span className="postTime">{post.date}</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreHorizIcon className="postMoreIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">
                        {post.desc}
                    </div>
                    <img className="postImg" src={post.photo} alt="friend"></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAltOutlinedIcon htmlColor="blue" onClick={likeHandler}/>
                        <FavoriteBorderRoundedIcon htmlColor="red"/>
                        {like}
                    </div>
                    <div className="postBottomRight">
                        {post.comment} Comments
                    </div>
                </div>
            </div>
        </div>
    )
}