import style from "./PostCard.module.scss"
import aroundCoin from "../../../public/images/common/aroundCoin.svg"
import {useDispatch} from "react-redux";
import {setModalChildrenName, setModalStatus} from "../../../Redux/Reducers/appReducer";
import {setActivePost, setActivePostOwner} from "../../../Redux/Reducers/postsReducer";
import useHttp from "../../../hooks/hook.fetch";

const PostCard = ({post}) => {
    const {city, date, price, text, title} = post
    const dispatch = useDispatch()
    const {sendRequest} = useHttp()

    const cardClickHandler = async () => {
        const activePostOwnerData = await sendRequest.getData(`/api/user/profile/${post.owner[0]}`)
        dispatch(setActivePostOwner(activePostOwnerData))
        dispatch(setActivePost(post))
        dispatch(setModalStatus(true))
        dispatch(setModalChildrenName('post'))
        document.body.classList.add('lock')
    }

    return (
        <div onClick={cardClickHandler} className={style.postCardWrapper}>
            <div className={style.commonContent}>
            <p className={style.cardTitle}>{title}</p>
            <div className={style.rightCornerElements}>
                <p>{date.slice(0, 10)}</p>
                <p>{city}</p>
            </div>
            <p className={style.cardText}>{text}</p>
            </div>
        <div className={style.cardFooterBlock}>
            <div className={style.priceWrapper}>

                <p>Price: <span className={style.priceValue}>{price}</span></p>
                <img className={style.aroundCoin} src={aroundCoin} alt={'Around coin'}/>
            </div>
        </div>
        </div>
    )
}

export default PostCard