import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from "./Reducers/appReducer";
import postsReducer from "./Reducers/postsReducer"


const rootReducer = combineReducers({
    app: appReducer,
    postsPage: postsReducer
})

const store = configureStore({
    reducer: rootReducer,

})

export default store