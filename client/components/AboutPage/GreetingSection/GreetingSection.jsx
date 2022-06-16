import style from './GreetingSection.module.scss'
import greetingImage from '../../../public/pages/aboutPage/greetingImage.svg'
import Article from "../../common/Article/Article";
import {setModalChildrenName, setModalStatus} from "../../../Redux/Reducers/appReducer";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

const GreetingSection = (props) => {
    const dispatch = useDispatch()
    const [bodyClasses, setBodyClasses] = useState(style.greetingBody)

    useEffect(()=>{
        setBodyClasses(style.greetingBody + ' ' + style.active)
    }, [])

    const signInClickHandler = () => {
        dispatch(setModalChildrenName('signin'))
        dispatch(setModalStatus(true))
        document.body.classList.add('lock')
    }

    return (
        <section className={style.greeting}>
            <div className={style.greetingContainer}>
                <div className={bodyClasses}>
                    <img className={style.greetingImage} src={greetingImage} alt={'Hello'}/>
                    <Article buttonClickHandler={signInClickHandler} titleText={'{ A } r o u n d'} paragraphText={'Non-commercial project for the provision of social mutual assistance'}
                    />
                </div>
            </div>
        </section>
    )
}

export default GreetingSection