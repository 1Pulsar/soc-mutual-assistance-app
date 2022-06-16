import style from "./PostsPage.module.scss";
import Article from "../common/Article/Article";
import {useEffect, useState} from "react";
import PostCard from "../common/PostCard/PostCard";
import backgroundImage from "../../public/pages/postsPage/backgroundImage.svg"
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../../hooks/hook.fetch";
import {setPosts} from "../../Redux/Reducers/postsReducer";

const PostsPage = () => {

    const [articleClasses, setArticleClasses] = useState(style.articleWrapper)
    const [postsClasses, setPostsClasses] = useState(style.mappedPostsContainer)
    const jwtToken = useSelector(state => state.app.jwtToken)
    const {isLoading, error, sendRequest} = useHttp()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsPage.posts)
    const appReady = useSelector(state => state.app.appReady)

    useEffect(() => {
        const postsData = async () => {
            try {
                const data = await sendRequest.getData('api/post/',
                    {authorization: `Bearer ${jwtToken}`})
                if (!data.message) {
                    dispatch(setPosts(data.reverse()))
                }
            } catch (e) {
                console.log(error)
            }
        }

        setArticleClasses(style.articleWrapper + ' ' + style.active)
        setPostsClasses(style.mappedPostsContainer + ' ' + style.active)
        appReady && postsData()

    }, [appReady])

    const mappedPosts = posts.map(post => <PostCard key={post._id} post={post}/>)

    return (
        <section className={style.posts}>
            <div className={style.postsContainer}>
                <img src={backgroundImage} style={{position: "absolute", top: "20px", width: '100%', zIndex: '-1'}}/>
                <div className={style.postsBody}>
                    <div className={articleClasses}>
                        <Article titleText={'Complete tasks of other users and earn Around coins!'} showText={false}
                                 showButton={false}
                                 whiteDecorationColor={false}/>
                    </div>
                    <div className={postsClasses}>
                        {mappedPosts}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostsPage