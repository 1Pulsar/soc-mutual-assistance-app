import InputField from "../../common/InputField/InputField";
import style from "./AuthWindow.module.scss"
import {useState} from "react";
import Button from "../../common/Button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginWindow = ({}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notify = () => toast.success("You are successfully authorized!");
    const declineButtonClickFunction = () => {
        setEmail('')
        setPassword('')
        toast.success("Fields cleaned");
    }

    return (
        <div className={style.loginWindowWrapper}>
            <p>Enter your login and password</p>
            <InputField value={email} inputId={'email'} inputName={'email'} inputPlaceholder={'Email'}
                        inputFieldWidth={'100%'} inputType={'email'} setValue={setEmail}/>
            <InputField inputId={'password'} inputName={'password'} inputPlaceholder={'Password'} value={password}
                        inputFieldWidth={'100%'} inputType={'password'} setValue={setPassword}/>
            <div className={style.buttonsBlock}>
                <Button clickFunction={notify} link={''} borderColor={'#757575'}
                         innerText={'Submit'} textColor={'#757575'}
                         hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
                <Button clickFunction={declineButtonClickFunction} link={''} borderColor={'#757575'}
                        innerText={'Decline'} textColor={'#757575'}
                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
            </div>
        </div>
    )
}

export default LoginWindow