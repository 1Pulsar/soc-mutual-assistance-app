import style from "./Logo.module.scss";
import whiteSiteLogo from "../../../public/images/site-logo-white.svg";
import greenSiteLogo from "../../../public/images/site-logo-green.svg";

const Logo = ({whiteLogo = false}) => {
    return (
        <div className={style.logoWrapper}>
            <img src={whiteLogo ? whiteSiteLogo : greenSiteLogo} className={style.logo} alt={'siteLogo'}/>
            <h3 className={style.appName}>{`{A}round`}</h3>
        </div>
    )
}

export default Logo