import ModalWindow from "../common/ModalWindow/ModalWindow";
import LoginWindow from "./authWindows/LoginWindow";
import SignInWindow from "./authWindows/SingnInWindow";
import {useSelector} from "react-redux";

const AuthModalWindowWrapper = ({}) => {
    const modalChildrenName = useSelector(state => state.app.modalChildrenName)
    let modalChildren = null
    if (modalChildrenName === 'login')  {
        modalChildren = <LoginWindow/>
    } else if (modalChildrenName === 'signin') {
        modalChildren = <SignInWindow />
    }

    return (
        <>
            <ModalWindow children={modalChildren} />
        </>
    )
}

export default AuthModalWindowWrapper