import './info.css'
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Info(){
    return(
        <div className="infoContainer">
            <div className="infoDetail">
                <span className="infoTitle">Info</span>
                <ul className="infoList">
                    <li><SchoolIcon className="infoListIcon"/>  Studies Khoa học máy tính at Trường Đại học Bách khoa - ĐH Quốc gia TP.HCM</li>
                    <li><SchoolIcon className="infoListIcon"/>  Went to Trường Trung học phổ thông chuyên Lê Hồng Phong, Thành phố Hồ Chí Minh</li>
                    <li><SchoolIcon className="infoListIcon"/>  Went to Tran Boi Co Secondary School</li>
                    <li><HomeIcon className="infoListIcon"/>  Lives in Ho Chi Minh City, Vietnam</li>
                    <li><LocationOnIcon className="infoListIcon"/>  From Ho Chi Minh City, Vietnam</li>
                    <li><FavoriteIcon className="infoListIcon"/>  Single</li>
                    <li><WatchLaterIcon className="infoListIcon"/>  Joined November 2014</li>
                    <li><RssFeedIcon className="infoListIcon"/>  Followed by 69 people</li>
                    <li><GitHubIcon className="infoListIcon"/>  https://github.com/khasang12-khmt</li>
                </ul>
            </div>
            <hr className="solid"></hr>
            <div className="infoLifeEvent">
                <span className="infoTitle">Life Events</span>
                <div className="infoEventItems">
                    <div className="infoEventItem">
                        <SchoolIcon className="infoEventIcon"></SchoolIcon>
                        <br></br>
                        Started School at Đại học Bách Khoa - ĐH Quốc gia TP.HCM
                        <div className="infoEventTimeline">August 28,2020</div>
                    </div>
                    <div className="infoEventItem">
                        <SchoolIcon className="infoEventIcon"></SchoolIcon>
                        <br></br>
                        Started School at THPT Chuyên Lê Hồng Phong, TP.HCM
                        <div className="infoEventTimeline">2017</div>
                    </div>
                </div>
            </div>
        </div>
    )
}