import {createSlice} from "@reduxjs/toolkit";

const appReducerSlice = createSlice({
    name:'app',
    initialState: {
        modalStatus: false,
        modalChildrenName: null,
        authorized: false,
        userId: null,
        nickName: null,
    },
    reducers: {
        setModalStatus(state, action) {
            state.modalStatus = action.payload
        },
        setModalChildrenName(state, action) {
            state.modalChildrenName = action.payload
        }
    },
})

export default appReducerSlice.reducer
export const {setModalStatus, setModalChildrenName} = appReducerSlice.actions