import {createSlice} from "@reduxjs/toolkit";

const storageName = 'userData'

const appReducerSlice = createSlice({
    name: 'app',
    initialState: {
        modalStatus: false,
        modalChildrenName: null,
        authorized: false,
        name: '',
        surname: '',
        balance: '',
        email: '',
        phoneNumber: '',
        userId: null,
        nickName: null,
        jwtToken: null
    },
    reducers: {
        setModalStatus(state, action) {
            state.modalStatus = action.payload
        },
        setModalChildrenName(state, action) {
            state.modalChildrenName = action.payload
        },
        login(state, action) {
            state.jwtToken = action.payload.jwtToken
            state.userId = action.payload.userId
            localStorage.setItem(storageName, JSON.stringify({
                userId: action.payload.userId,
                jwtToken: action.payload.jwtToken
            }))
        },
        logout(state) {
            state.jwtToken = null
            state.userId = null
            localStorage.removeItem(storageName)
        },
        setUserInfo(state, action) {
            const {name, surname, balance, email, phoneNumber} = action.payload
            state.name = name
            state.balance = balance
            state.email = email
            state.surname = surname
            state.phoneNumber = phoneNumber
        }
    },
})

export default appReducerSlice.reducer
export const {setModalStatus, setModalChildrenName, login, logout, setUserInfo} = appReducerSlice.actions