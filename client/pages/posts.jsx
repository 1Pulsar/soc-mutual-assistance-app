import MainLayout from "../layouts/MainLayout/MainLayout";
import PostsPage from "../components/PostsPage/PostsPage";

const posts = () => {
    return (
        <MainLayout pageTitle={'Posts'} whiteLogo={false}>
            <PostsPage/>
        </MainLayout>
    )
}

export default posts