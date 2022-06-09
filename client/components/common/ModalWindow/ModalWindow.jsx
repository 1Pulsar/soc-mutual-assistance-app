import style from "./ModalWindow.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {setModalStatus} from "../../../Redux/Reducers/appReducer";

const ModalWindow = ({children}) => {
    const modalStatus = useSelector(state => state.app.modalStatus)
    const dispatch = useDispatch()

    const modalClasses = modalStatus ? `${style.modal} ${style.active}` : style.modal
    const modalContentClasses = modalStatus ? `${style.modalContent} ${style.active}` : style.modalContent
    const setModalClose = () => {
        dispatch(setModalStatus(false))
        document.body.classList.remove('lock')
    }

    return (
        <div className = {modalClasses} onClick={setModalClose}>
            <div className={modalContentClasses} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow