import style from "./UserIcon.module.scss"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const UserInfoWindow = ({isWindowActive, userInfo}) => {
    const {balance, email, name, phoneNumber, surname} = useSelector(state => state.app)
    const [windowWrapperClasses, setWindowWrapperClasses] = useState(style.windowWrapper)
    useEffect(() => {
        isWindowActive ? setWindowWrapperClasses(style.windowWrapper + ' ' + style.active)
            :
            setWindowWrapperClasses(style.windowWrapper)
    }, [isWindowActive])
    return (
        <div className={windowWrapperClasses}>
            <h3 style={{textAlign:'center'}}>My information</h3>
            <p><b>Balance:</b> {balance}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Surname:</b> {surname}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone number:</b> {phoneNumber}</p>
        </div>
    )
}

export default UserInfoWindow