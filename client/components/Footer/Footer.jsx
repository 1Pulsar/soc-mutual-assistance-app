import style from "./Footer.module.scss"
import Button from "../common/Button";
import facebookLogo from "../../public/images/social-media-brands/facebook-brands.svg";
import instagramLogo from "../../public/images/social-media-brands/instagram-brands.svg";
import telegramLogo from "../../public/images/social-media-brands/telegram-brands.svg";
import youtubeLogo from "../../public/images/social-media-brands/youtube-brands.svg";
import Logo from "../common/Logo/Logo";

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerBody}>
                    <div className={style.informationBlockWrapper}>
                        <Logo />
                        <div className={style.companyInformation}>
                            <p>© LLC Around, 2022</p>
                            <p>Zaporizhya, ul. Taras Shevchenko, 21, st. Dzerzhinsky, 32</p>
                            <p>Zhaporizhya: + 380 (98) 42-45-124</p>
                            <p>All Ukraine: 1 231 244-34-22</p>
                            <a className={style.footerLink}>Privacy Policy</a>
                        </div>
                        <div className={style.buttonsBlock}>
                            <Button link={'/'} borderColor={'#67910d'} innerText={'Blog Around'} textColor={'#fff'}
                                    backgroundColor={'#67910d'} hoveredBackgroundColor={'rgba(103, 145, 13, 0.2)'}/>
                            <a href={"facebook.com"} className={style.brandLogoRing}><img src={facebookLogo} alt={"facebookLogo"}/></a>
                            <a href={"telegram.org"} className={style.brandLogoRing}><img src={telegramLogo} alt={"telegramLogo"}/></a>
                            <a href={"youtube.com"} className={style.brandLogoNoRing}><img src={youtubeLogo} alt={"youtubeLogo"}/></a>
                            <a href={"instagram.com"} className={style.brandLogoNoRing}><img src={instagramLogo} alt={"instagramLogo"}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer