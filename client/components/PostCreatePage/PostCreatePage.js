import Article from "../common/Article/Article";
import style from "./PostCreatePage.module.scss";
import PostForm from "./PostForm/PostForm";
import afterPostImage from "../../public/pages/createPage/afterPostFormImage.svg"
import {useEffect, useState} from "react";

const PostCreatePage = () => {
    const [contentClasses, setContentClasses] = useState(style.contentWrapper)
    useEffect(() => {
        setContentClasses(style.contentWrapper + ' ' + style.active)
    }, [])

    return (
        <section className={style.postCreate}>
            <div className={style.postCreateContainer}>
                <div className={style.postCreateBody}>
                    <div className={contentClasses}>
                        <Article titleText={'Create your mutual post!'}
                                 paragraphText={'Enter information in fields and people will see your services. Make our world better!'}
                                 showButton={false}
                        />
                        <div className={style.postForm}>
                            <PostForm/>
                        </div>
                        <Article titleText={'How does it work?'}
                                 showText={false} showButton={false}
                        />
                        <div className={style.instructionText}>
                            <b>1.</b> You post
                            your offer.<br/>
                            <b>2.</b> Another user may use your services.<br/>
                            <b>3.</b> After execution, he makes a payment using Around coins.<br/>
                            Complete tasks of other users and earn more Around coins for using the services!
                        </div>
                    </div>
                    <img src={afterPostImage} alt={"soc mutual image"} className={style.afterPostFormImage}/>
                </div>
            </div>
        </section>
    )
}

export default PostCreatePage