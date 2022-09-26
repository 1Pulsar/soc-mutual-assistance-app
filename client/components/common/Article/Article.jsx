import whiteStyle from "./Article.module.scss"
import greenStyle from "./ArticleGreen.module.scss"
import Button from "../Button";

const Article = ({buttonClickHandler ,titleText, paragraphText, whiteDecorationColor = true, showButton=true, showText=true }) => {
    const style = whiteDecorationColor ? whiteStyle : greenStyle
    return (<>
            <article className={style.articleWrapper}>
                <div className={style.articleTitleWrapper}>
                    <div className={style.decorationBlockLeft}/>
                    <h1 className={style.articleTitle}>{titleText}</h1>
                    <div className={style.decorationBlockRight}/>
                </div>
                {showText && <p className={style.articleContent}>{paragraphText}</p>}
                {showButton && <Button link={''} clickFunction={buttonClickHandler}  borderColor={'#67910d'} innerText={'Sign in'} textColor={'#67910d'}
                         hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>}
            </article>
        </>
    )
}

export default Article