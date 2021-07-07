import './online.css'

export default function Online({user}){
    console.log(user)
    return (
        <div className="rightbarOnlineUser">
            <img className="rightbarOnlineUserImg" alt="rightbarUser" src={user.profilePicture}></img>
            {user.username}
        </div>
    )
}