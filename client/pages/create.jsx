import MainLayout from "../layouts/MainLayout/MainLayout";
import PostCreatePage from "../components/PostCreatePage/PostCreatePage";

const create = () => {
    return (<MainLayout pageTitle={'Create post'} whiteLogo={true}>
            <PostCreatePage />
        </MainLayout>

    )
}

export default create