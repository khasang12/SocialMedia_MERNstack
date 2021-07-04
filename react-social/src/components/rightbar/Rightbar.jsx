import './rightbar.css'
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">Sponsored
                <div className="rightbarAd">
                    <img className="rightbarAdImg" src="/asset/nodejs.png"></img>
                    NodeJS for BackEnd
                </div>
                <div className="rightbarAd">
                    <img className="rightbarAdImg" src="/asset/reactjs.jpg"></img>
                    ReactJS for FrontEnd
                </div>
                <hr class="solid"></hr>
                <div className="rightbarEvent">Events
                    <div className="birthdayContainer">
                        <CakeRoundedIcon htmlColor="orange"/>Today is John's birthday
                    </div>
                    <div className="eventContainer">
                        <EventAvailableRoundedIcon htmlColor="blue"/>FrontEnd online meeting
                    </div>
                </div>
                <hr class="solid"></hr>
                <div className="rightbarOnline">Online
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                    <div className="rightbarOnlineUser">
                        <img className="rightbarOnlineUserImg" src="/asset/nodejs.png"></img>
                        Fred
                    </div>
                </div>
            </div>
        </div>
    )
}