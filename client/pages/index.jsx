import MainLayout from "../layouts/MainLayout/MainLayout";
import GreetingSection from "../components/AboutPage/GreetingSection/GreetingSection";

const index = () => {
return (
    <MainLayout pageTitle={'About page'} whiteLogo={true}>
    <GreetingSection />
    </MainLayout>
    )
}

export default index