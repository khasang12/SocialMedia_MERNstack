import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Info from '../../components/info/Info'

import './profile.css'

export default function Profile(){
    return (
        <div>
            <Topbar/>
            <div className="profile">
                <div className="profileRight">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="asset/profile/profile2.jpg" alt="cover"></img>
                            <img className="profileAvatarImg" src="asset/profile/kakashi.jpg" alt="avatar"></img>
                            <div className="profileName">Hatake Kakashi</div>
                    </div>
                    <div className="profileBody">
                    <Info/>
                    <Feed className="feed"/>
                    </div>
                </div>
            </div>
        </div>
    )
}