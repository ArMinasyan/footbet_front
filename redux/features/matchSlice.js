import { createSlice } from '@reduxjs/toolkit'


export const matchSlice = createSlice({
    name: "user",
    initialState: {
        matchId: null
    },
    reducers: {
        setMatchId: (state, action) => {
            state.matchId = action.payload
        }
    }
})


export const { setMatchId } = matchSlice.actions

export const getMatchId = state => state.match.matchId

export default matchSlice.reducer