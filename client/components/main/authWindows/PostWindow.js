import {useSelector} from "react-redux";
import style from "./PostWindow.module.scss";
import aroundCoin from "../../../public/images/common/aroundCoin.svg";
import Button from "../../common/Button";
import {toast} from "react-toastify";
import userImage from "../../../public/images/common/abstract-user.svg"
import useHttp from "../../../hooks/hook.fetch";

const PostWindow = () => {
    const {_id, city, date, owner, price, text, title, views} = useSelector(state => state.postsPage.activePost)
    const {email, phoneNumber, name, surname} = useSelector(state => state.postsPage.activePostOwner)
    const {sendRequest} = useHttp()
    const userId = useSelector(state => state.app.userId)

    const paymentButtonHandler = async () => {
        try {
            toast.success(`You are received ${price} around coins to ${name} ${surname}`)
            const response = await sendRequest.putData('api/payment/task', {price, recipientId: owner[0]})
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={style.postWindowWrapper}>
            <div className={style.commonContent}>
                <p className={style.windowTitle}>{title}</p>
                <div className={style.rightCornerElements}>
                    <p>{date.slice(0, 10)}</p>
                    <p>{city}</p>
                </div>
                <p className={style.windowText}>{text}</p>
            </div>
            <div className={style.windowFooterBlock}>
                <div className={style.paymentWrapper}>
                    <div className={style.priceWrapper}>
                        <p>Price: <span className={style.priceValue}>{price}</span></p>
                        <img className={style.aroundCoin} src={aroundCoin} alt={'Around coin'}/>
                    </div>
                    {userId !== owner[0] ?
                        <Button clickFunction={paymentButtonHandler} link={''} borderColor={'#67910d'}
                                innerText={'Pay'} textColor={'#67910d'}
                                hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/> :
                        <p>This is your post</p>
                    }
                </div>
                <div className={style.footerSeparator}/>
                <div className={style.ownerInformation}>
                    <img className={style.ownerImage} src={userImage} alt={'user image'}/>
                    <p>{name} {surname}</p>
                    <p>Email: <span>{email}</span></p>
                    <p>Phone number: <span>{phoneNumber}</span></p>
                </div>
            </div>
        </div>
    )
}

export default PostWindow