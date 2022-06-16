import style from './ServiceInfoSection.module.scss'
import cardHeartImage from '../../../public/pages/aboutPage/boxesImage.svg'
import heartShapedBox from '../../../public/pages/aboutPage/heartShapedBox.svg'

const ServiceInfoSection = (props) => {
    return (
        <section className={style.serviceInfo}>
            <div className={style.serviceInfoContainer}>
                <div className={style.serviceInfoBody}>
                    <div className={style.serviceInfoCard}>
                        <div className={style.cardInfoWrapper}>
                            <h3 className={style.infoTitle}>Clear and fast help to each other. Helping businesses and ordinary people.</h3>
                            <p className={style.infoText}>Everyone can experience financial problems in our time. This service is aimed at fulfilling human needs both in everyday life and in professional life.</p>
                        </div>
                        <img className={style.cardHeartImage} src={cardHeartImage} alt={'card heart image'} />
                    </div>

                    <div className={style.additionalInformationBlock}>
                        <img className={style.additionalBlockImage} src={heartShapedBox} alt={'Heart shaped Box'} />
                        <div className={style.additionalInformation}>
                            <h2>How does this service work?</h2>
                            <p>You can register and get 50 bonus coins. Use coins to get favors from other users. Post your ads with services and earn coins.</p>
                            <p>Work on increasing the number of services and earn more. Get bonuses, exchange services and help others.</p>
                            <p> All this {' { A } '}round!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceInfoSection