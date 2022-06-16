import style from './GreetingSection.module.scss'
import greetingImage from '../../../public/pages/aboutPage/greetingImage.svg'
import Article from "../../common/Article/Article";

const GreetingSection = (props) => {
    return (
        <section className={style.greeting}>
            <div className={style.greetingContainer}>
                <div className={style.greetingBody}>
                    <img className={style.greetingImage} src={greetingImage} alt={'Hello'}/>
                    <Article showButton={false} titleText={'{ A } r o u n d'} paragraphText={'Non-commercial project for the provision of social mutual assistance'}
                    />
                </div>
            </div>
        </section>
    )
}

export default GreetingSection