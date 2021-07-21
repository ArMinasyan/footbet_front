// import { createStore } from 'redux'

// export const store = createStore(/*reducer function*/(state, action) => {
//     if (action.type === "login") {
//         return {
//             ...state,
//             currentUser: {
//                 name: action.payload.name
//             }
//         }
//     }
//     return state
// }, {
//     currentUser: {
//         name: 'Erik Muradyan'
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

export default configureStore({
    reducer: {
        user: userReducer
    }
})

