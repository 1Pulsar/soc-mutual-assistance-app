import {createSlice} from "@reduxjs/toolkit";

const appReducerSlice = createSlice({
    name: 'postsPage',
    initialState: {
        posts:[],
        activePost: {},
        activePostOwner: {}
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        setActivePost(state, action) {
            state.activePost = action.payload
        },
        setActivePostOwner(state, action) {
            state.activePostOwner = action.payload
        }
    },
})

export default appReducerSlice.reducer
export const {setPosts, setActivePost, setActivePostOwner} = appReducerSlice.actions