import './topbar.css'
import styles from './topbar.css'
import {Person,Search,ChatBubble,Notifications} from '@material-ui/icons';
import {Link} from 'react-router-dom';
export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                <span className="logo">SaKa12</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <span className="searchbar">
                    <Search className="searchButton"/>
                    <input placeholder="Search for anything" className="searchInput"></input>
                </span>
            </div>

            <div className="topbarRight">
                <Link to="/" style={{ textDecoration: 'none',marginTop:'5px',height:"100%" }}>
                    <span className="topbarLink">Home</span>
                </Link>
                <Link to="/profile">
                    <img src="/asset/profile/profile3.jpg" alt="profile" className="topbarImg"></img>  
                </Link>
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