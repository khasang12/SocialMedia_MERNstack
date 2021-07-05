import './share.css'
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
export default function Share(){
    return (
        <div className="shareContainer">
            <span className="personalShare">
                <img className="shareImg" src="/asset/profile/profile3.jpg" alt="friend"></img>
                <input className="shareInput" placeholder="What's on your mind, Sang?"></input>
                <button className="shareButton">Share</button>
            </span>
            <hr className="solid"></hr>
            <span className="optionShare">
                <div className="optionShareInfo">
                    <LiveTvIcon htmlColor="tomato" className="optionShareIcon"/>
                    <div class="optionShareName">Live</div>
                </div>
                <div className="optionShareInfo">
                    <PhotoLibraryIcon htmlColor="lightgreen" className="optionShareIcon"/>
                    <div class="optionShareName">Photo/Video</div>
                </div>
                <div className="optionShareInfo">
                    <MoodIcon htmlColor="gold" className="optionShareIcon"/>
                    <div class="optionShareName">Feeling</div>
                </div>
            </span>
        </div>
    )
}