import {Provider, useDispatch} from "react-redux";
import store from "../Redux/store";
import AuthModalWindowWrapper from "../components/main/AuthModalWindowWrapper";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {login, setAppReady, setUserInfo} from "../Redux/Reducers/appReducer";
import useHttp from "../hooks/hook.fetch";

const DefaultWrappersLayout = ({children}) => {
    const dispatch = useDispatch()
    const {isLoading, error, sendRequest} = useHttp()

    useEffect(() => {
        const userData = async (jwtToken) => {
            try {
                const data = await sendRequest.getData('api/auth/me',
                    {authorization: `Bearer ${jwtToken}`})
                if (!data.message) {
                    dispatch(setUserInfo(data))
                }
            } catch (e) {
                console.log(error)
            }
        }

        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.jwtToken) {
            dispatch(login({jwtToken: data.jwtToken, userId: data.userId}))
            userData(data.jwtToken)
        }
        dispatch(setAppReady(true))
    }, [])

    return (
        <>
            <Provider store={store}>
                {children}
                <AuthModalWindowWrapper/>
                <ToastContainer/>
            </Provider>
        </>
    )
}

export default DefaultWrappersLayout