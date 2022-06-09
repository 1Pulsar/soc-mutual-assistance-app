import style from "./Footer.module.scss";

const LinksColumn = ({header ,linksList}) => {
    const mappedLinks = linksList.map((item)=> {
            return <a target="_blank" href={item[1]} className={style.footerLink}>— {item[0]}</a>
        }
    )

    return (
        <div className={style.linksColumnWrapper}>
            <h4 className={style.linksColumnHeader}>{header}</h4>
            {mappedLinks}
        </div>
    )

}

export default LinksColumn