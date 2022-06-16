import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./MainLayout.module.scss"
import DefaultWrappersLayout from "../DefaultWrappersLayout";
import store from "../../Redux/store";
import {Provider} from "react-redux";


const MainLayout = ({children, pageTitle, whiteLogo}) => {
    return (
        <Provider store={store}>
            <DefaultWrappersLayout>
                <Head>
                    <title>{pageTitle} - {'{A}'}round</title>
                </Head>
                <div className={style.appWrapper}>
                    <Header whiteLogo={whiteLogo}/>
                    <main className={style.mainWrapper}>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </DefaultWrappersLayout>
        </Provider>
    )
}

export default MainLayout