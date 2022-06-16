import style from "./InputField.module.scss"
import ErrorsWindow from "./ErrorsWindow/ErrorsWindow";

const InputField = ({
                        backgroundColor='#fff',
                        inputFieldWidth,
                        inputPlaceholder,
                        onChange,
                        onBlur,
                        value,
                        inputType,
                        inputId,
                        inputName,
                        error = false,
                        errorsArray = [],
                        maxLength = 100
                    }) => {

    const configureStyle = {width: inputFieldWidth}
    const errorWindowClasses = error ? `${style.errorsWindow} ${style.active}` : style.errorsWindow

    return (
        <div className={style.textField + " " + style.textFieldFloating2} style={configureStyle}>
            <input style={{
                width: "100%",
                border: error ? "2px solid red" : "1px solid grey",
                borderRadius: "4px",
                backgroundColor: backgroundColor
            }}
                   value={value} onChange={onChange} onBlur={onBlur} className={style.textFieldInput} type={inputType}
                   id={inputId} name={inputName}
                   placeholder="hello,world" maxLength={maxLength}/>
            <label style={{color: error ? "red" : "grey"}} className={style.textFieldLabel}
                   htmlFor="email">{inputPlaceholder}</label>
            <div className={errorWindowClasses}><ErrorsWindow inputPlaceholder={inputPlaceholder}
                                                              errorsArray={errorsArray}/></div>
        </div>
    )
}

export default InputField