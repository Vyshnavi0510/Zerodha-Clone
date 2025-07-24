import { createSlice } from '@reduxjs/toolkit';
export const CounterSlice = createSlice(
    {
        name: "counter_form",
        initialState: {
            count: 0,
        },
        reducers: {
            handleIncrement: (state) => { state.count += 1 },
            handleDecrement: (state) => { state.count -= 1 },
            handleReset: (state) => { state.count = 0 }
        },

    }

)
export const { handleIncrement, handleDecrement, handleReset } = CounterSlice.actions;
export default CounterSlice.reducer;

