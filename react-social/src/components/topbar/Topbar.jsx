import './topbar.css'
import {Person,Search,ChatBubble,Notifications} from '@material-ui/icons';
export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SaKa12</span>
            </div>
            <div className="topbarCenter">
                <span className="searchbar">
                    <Search className="searchButton"/>
                    <input placeholder="Search for anything" className="searchInput"></input>
                </span>
            </div>

            <div className="topbarRight">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">Timeline</span>
            <img src="/asset/profile/profile3.jpg" alt="profile" className="topbarImg"></img>  

            </div>
             <div className="topbarIcons">
                 <div className="topbarIconsItem">
                     <Person/>
                     <span className="topbarIconBadge">1</span>
                 </div>
                 <div className="topbarIconsItem">
                     <ChatBubble/>
                     <span className="topbarIconBadge">1</span>
                 </div>
                 <div className="topbarIconsItem">
                     <Notifications/>
                     <span className="topbarIconBadge">1</span>
                 </div>
             </div>
            
        </div>
    )
}