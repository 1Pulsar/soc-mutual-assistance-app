import style from "./Header.module.scss"
import Link from "next/link"
import Button from "../common/Button";
import Logo from "../common/Logo/Logo";
import {useDispatch, useSelector} from "react-redux";
import {logout, setModalChildrenName, setModalStatus} from "../../Redux/Reducers/appReducer";
import UserIcon from "../common/UserIcon/UserIcon";
import menuIcon from "../../public/images/common/navbarMenuIcon.svg"
import {useState} from "react";

const Header = ({whiteLogo = false}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.app.userId)
    const [menuIsActive, changeMenuStatus] = useState(false)

    const navbarClasses = menuIsActive ? `${style.navbar} ${style.active}` : style.navbar

    const menuIconHandler = () => {
        changeMenuStatus(!menuIsActive)
    }

    const logOutButtonClickHandler = () => {
        dispatch(logout())
    }

    const logInButtonClickHandler = () => {
        dispatch(setModalChildrenName('login'))
        dispatch(setModalStatus(true))
        document.body.classList.add('lock')
    }
    const signInButtonClickHandler = () => {
        dispatch(setModalChildrenName('signin'))
        dispatch(setModalStatus(true))
        document.body.classList.add('lock')
    }

    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.headerBody}>
                    <Logo whiteLogo={whiteLogo}/>
                    <nav className={navbarClasses}>
                        <Link href={'/'}><a>About us</a></Link>
                        <Link href={'/news'}><a>News</a></Link>
                        {userId && <>
                            <Link href={'/posts'}><a>Posts</a></Link>
                            <Link href={'/create'}><a>Create a post</a></Link>
                        </>
                        }
                    </nav>
                    <div className={style.buttonsBlock}>
                        {userId ? <>
                                <Button clickFunction={logOutButtonClickHandler} link={'/'} borderColor={'#67910d'}
                                        innerText={'Log out'} textColor={'#67910d'}
                                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
                                <UserIcon/>
                                <img onClick={menuIconHandler} className={style.menuIcon} src={menuIcon} alt={'Navbar menu icon'}/>
                            </>
                            : <>
                                <Button clickFunction={logInButtonClickHandler} link={''} borderColor={'#67910d'}
                                        innerText={'Log in'} textColor={'#67910d'}
                                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
                                <Button clickFunction={signInButtonClickHandler} link={''} borderColor={'#67910d'}
                                        innerText={'Sign in'} textColor={'#020'} backgroundColor={'#67910d'}
                                        hoveredBackgroundColor={'rgba(103, 145, 13, 0.2)'}/>
                                <img onClick={menuIconHandler} className={style.menuIcon} src={menuIcon} alt={'Navbar menu icon'}/>
                            </>
                        }
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header