import style from "./Footer.module.scss"
import InfoColumn from "./InfoColumn";
import LinksColumn from "./LinksColumn";

const Footer = (props) => {
    const linksListContent = [["Service", "#"], ["Financial optimization", "#"], ["Chief Accountant", '#'],
        ["Tax optimization", "#"], ["Legal", "#"], ["Business", "#"], ["People", "#"]]
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerBody}>
                    <InfoColumn />
                    <LinksColumn header={'Services'} linksList={linksListContent}/>
                    <LinksColumn header={'More information'} linksList={linksListContent}/>
                    <LinksColumn header={'Help'} linksList={linksListContent}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer