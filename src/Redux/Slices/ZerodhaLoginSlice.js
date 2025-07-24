import { createSlice } from '@reduxjs/toolkit'

export const ZerodhaLoginSlice = createSlice({
    name: "login_form",
    initialState: {
        value: 0,
        username:"",
        password:"",
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ZerodhaLoginSlice.actions

export default ZerodhaLoginSlice.reducer