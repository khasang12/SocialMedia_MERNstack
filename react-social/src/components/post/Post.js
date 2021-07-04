import './post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postTopLeftImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                        <div className="postTopLeftProfile">
                            <span className="postUser">SangKha</span>
                            <span className="postTime">5 mins ago</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreHorizIcon className="postMoreIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">
                        Heyyy this is my first Post. I'm really exciting !!!!!
                    </div>
                    <img className="postImg" src="/asset/profile/profile4.jpg" alt="friend"></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAltOutlinedIcon htmlColor="blue"/>
                        <FavoriteBorderRoundedIcon htmlColor="red"/>
                        32
                    </div>
                    <div className="postBottomRight">
                        3 Comments
                    </div>
                </div>
            </div>
        </div>
    )
}