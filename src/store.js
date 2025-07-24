import { configureStore } from '@reduxjs/toolkit'
import ZerodhaLoginSlice  from './Redux/Slices/ZerodhaLoginSlice'
import CounterSlice from './Redux/Slices/CounterSlice';

const store = configureStore({
  reducer: {
    loginform:ZerodhaLoginSlice,
    counter:CounterSlice,
  },
})

export default store;