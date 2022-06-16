import userImage from "../../../public/images/common/abstract-user.svg";
import style from "./UserIcon.module.scss"
import {useState} from "react";
import UserInfoWindow from "./UserInfoWindow";

const UserIcon = ({userInfo}) => {
    const [isWindowActive, setActive] = useState(false)
    const mouseEnterListener = () => {
        setActive(true)
    }
    const mouseLeaveListener = () => {
        setActive(false)
    }


    return (
        <div className={style.userIconBody}>
            <img alt={'user icon'} src={userImage} className={style.userIconImage} onMouseEnter={mouseEnterListener}
                 onMouseLeave={mouseLeaveListener}/>
            <UserInfoWindow isWindowActive={isWindowActive} userInfo={userInfo}/>
        </div>
    )
}

export default UserIcon