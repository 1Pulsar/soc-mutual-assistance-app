import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./MainLayout.module.scss"

const MainLayout = ({children, pageTitle, whiteLogo}) => {
    return (
        <>
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
        </>
    )
}

export default MainLayout