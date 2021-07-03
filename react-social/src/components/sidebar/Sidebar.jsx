import './sidebar.css';
import ContactsIcon from '@material-ui/icons/Contacts';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import MovieIcon from '@material-ui/icons/Movie';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
export default function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <span className="sidebarListItemIcon">
                        <ContactsIcon className="sidebarIcons"/>
                        Friends
                    </span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemIcon">
                        <GroupIcon className="sidebarIcons"/>
                        Groups
                    </span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemIcon">
                        <MovieIcon className="sidebarIcons"/>
                        Watch
                    </span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemIcon">
                        <ChatIcon className="sidebarIcons"/>
                        Chat
                    </span>
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemIcon">
                        <FavoriteIcon className="sidebarIcons"/>
                        Favorite
                    </span> 
                </li>
                <li className="sidebarListItem">
                    <span className="sidebarListItemIcon">
                        <KeyboardArrowDownIcon className="sidebarIcons"/>
                        See More
                    </span>
                </li>
            </ul>
            <hr class="solid"></hr>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 1</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 2</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 3</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 1</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 2</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 3</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 1</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 2</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 3</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 1</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 2</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/asset/profile/profile1.jpg" alt="friend"></img>
                    <span className="sidebarFriendName">Person 3</span>
                </li>
            </ul>
        </div>
    )
}