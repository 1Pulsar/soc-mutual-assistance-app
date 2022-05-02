import style from "./Article.module.scss"
import Button from "../Button";

const Article = ({titleText, paragraphText, decorationColor}) => {
    return (<>
        <article className={style.articleWrapper}>
            <div className={style.articleTitleWrapper}>
                <div className={style.decorationBlockLeft}/>
                <h1 className={style.articleTitle}>{titleText}</h1>
                <div className={style.decorationBlockRight}/>
            </div>
            <p>{paragraphText}</p>
            <Button link={'/'} borderColor={'#67910d'} innerText={'Sign in'} textColor={'#020'}
                    backgroundColor={'#67910d'}
                    hoveredBackgroundColor={'rgba(103, 145, 13, 0.2)'}/>
        </article>
        </>
    )
}

export default Article