import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counter'
import nameReducer from '../slices/name'

export const Store = configureStore({
    reducer:{
        counter:counterReducer,
        setname:nameReducer
    }
})

