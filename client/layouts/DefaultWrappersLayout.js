import {Provider} from "react-redux";
import store from "../Redux/store";
import AuthModalWindowWrapper from "../components/main/AuthModalWindowWrapper";
import {ToastContainer} from "react-toastify";

const DefaultWrappersLayout = ({children}) => {
    return (
        <>
            <Provider store={store}>
                {children}
                <AuthModalWindowWrapper />
                <ToastContainer />
            </Provider>
        </>
    )
}

export default DefaultWrappersLayout