import ModalWindow from "../common/ModalWindow/ModalWindow";
import LoginWindow from "./authWindows/LoginWindow";
import SignInWindow from "./authWindows/SingnInWindow";
import PostWindow from "./authWindows/PostWindow";
import {useSelector} from "react-redux";

const AuthModalWindowWrapper = ({}) => {
    const modalChildrenName = useSelector(state => state.app.modalChildrenName)
    let modalChildren = null
    if (modalChildrenName === 'login')  {
        modalChildren = <LoginWindow/>
    } else if (modalChildrenName === 'signin') {
        modalChildren = <SignInWindow />
    } else if (modalChildrenName === 'post') {
        modalChildren = <PostWindow />
    }

    return (
        <>
            <ModalWindow children={modalChildren} />
        </>
    )
}

export default AuthModalWindowWrapper