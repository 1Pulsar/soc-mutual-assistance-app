import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from "./Reducers/appReducer";


const rootReducer = combineReducers({
    app: appReducer
})

const store = configureStore({
    reducer: rootReducer,

})

export default store