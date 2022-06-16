import style from "./ModalWindow.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {setModalStatus} from "../../../Redux/Reducers/appReducer";
import {useEffect} from "react";

const ModalWindow = ({children}) => {
    const modalStatus = useSelector(state => state.app.modalStatus)
    const dispatch = useDispatch()


    useEffect(() => {
        if (!modalStatus) {
            document.body.classList.remove('lock')
        }
    }, [modalStatus])

    const modalClasses = modalStatus ? `${style.modal} ${style.active}` : style.modal
    const modalContentClasses = modalStatus ? `${style.modalContent} ${style.active}` : style.modalContent
    const setModalClose = () => {
        dispatch(setModalStatus(false))
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