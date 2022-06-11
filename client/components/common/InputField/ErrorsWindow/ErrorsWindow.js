import warning from "../../../../public/images/common/warning.svg";
import style from "./ErrorsWindow.module.scss";
import {useState} from "react";

const ErrorsWindow = ({errorsArray, inputPlaceholder}) => {
    const [iconIsHovered, setHovered] = useState(false)

    const parsedErrorsArray = errorsArray.map((error, index) => <p key={index + error}>! {inputPlaceholder} {error}</p>)
    const warningWindowClasses = iconIsHovered ? `${style.warningWindow} ${style.active}` : style.warningWindow

    return (
        <div className={style.warningWrapper}>
            <img src={warning} alt={'warning'} className={style.warningIcon} onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}/>
            <div className={warningWindowClasses}>
                {parsedErrorsArray}
            </div>
        </div>
    )
}

export default ErrorsWindow