import style from "./InputField.module.scss"

const InputField = ({inputFieldWidth, inputPlaceholder, setValue, value, inputType, inputId, inputName}) => {
    const inputValueHandler = (e) => {
        setValue(e.target.value)
    }

    const configureStyle = {width: inputFieldWidth}

    return (
        <div className={style.textField + " " + style.textFieldFloating2} style={configureStyle}>
            <input style={{width:"100%"}} value={value} onChange={inputValueHandler} className={style.textFieldInput} type={inputType} id={inputId} name={inputName}
                   placeholder="hello,world"/>
                <label className={style.textFieldLabel} htmlFor="email">{inputPlaceholder}</label>
        </div>
)
}

export default InputField