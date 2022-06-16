import MainLayout from "../layouts/MainLayout/MainLayout";
import GreetingSection from "../components/AboutPage/GreetingSection/GreetingSection";
import ServiceInfoSection from "../components/AboutPage/GreetingSection/ServiceInfoSection";

const index = () => {
    return (
        <MainLayout pageTitle={'About page'} whiteLogo={true}>
            <GreetingSection/>
            <ServiceInfoSection/>
        </MainLayout>
    )
}

export default index