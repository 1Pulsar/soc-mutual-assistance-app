import style from "./Header.module.scss"
import Link from "next/link"
import Button from "../common/Button";
import Logo from "../common/Logo/Logo";
import {useDispatch} from "react-redux";
import {setModalChildrenName, setModalStatus} from "../../Redux/Reducers/appReducer";

const Header = ({whiteLogo = false}) => {
    const dispatch = useDispatch()
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
                    <nav className={style.navbar}>
                        <Link href={'/about'}><a>About us</a></Link>
                        <Link href={'/posts'}><a>Posts</a></Link>
                        <Link href={'/create'}><a>Create a post</a></Link>
                        <Link href={'/news'}><a>News</a></Link>
                    </nav>
                    <div className={style.buttonsBlock}>
                        <Button clickFunction={logInButtonClickHandler} link={'/'} borderColor={'#67910d'}
                                innerText={'Log in'} textColor={'#67910d'}
                                hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
                        <Button clickFunction={signInButtonClickHandler} link={'/'} borderColor={'#67910d'}
                                innerText={'Sign in'} textColor={'#020'} backgroundColor={'#67910d'}
                                hoveredBackgroundColor={'rgba(103, 145, 13, 0.2)'}/>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header