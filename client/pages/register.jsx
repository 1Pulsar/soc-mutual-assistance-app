import {useState} from "react";
import useFetch from "../hooks/hook.fetch";
import MainLayout from "../layouts/MainLayout/MainLayout";

const register = () => {

    const [form, changeForm] = useState({name: '', surname: '', email: '', password: ''})
    const {isLoading, error, sendRequest, clearError} = useFetch()

    const formChangeHandler = (event) => {
        changeForm({...form, [event.target.name]: event.target.value})
    }

    const sendRegisterData = async (form) => {
        console.log(form)
        try {
            const response = await sendRequest(`http://localhost:5000/api/auth/register`, form, 'POST')
                .then(res => console.log(res))
            return response
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <MainLayout pageTitle={'About'}>
                <div>
                    <input placeholder={'name'} name={'name'} onChange={formChangeHandler} value={form.name}/>
                    <input placeholder={'surname'} name={'surname'} onChange={formChangeHandler} value={form.surname}/>
                    <input placeholder={'email'} name={'email'} onChange={formChangeHandler} value={form.email}/>
                    <input placeholder={'password'} name={'password'} onChange={formChangeHandler} value={form.password}/>
                    <button onClick={() => sendRegisterData(form)}>Submit</button>
                </div>
            </MainLayout>
        </>
    )
}

export default register