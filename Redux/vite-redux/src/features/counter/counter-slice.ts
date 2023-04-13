import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';

// DUCKS Pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterSate{
    value:number;
}

const initialState: CounterSate = {
    value:0,

};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        // increment
        incremented(state) {
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
        // decrement
        //reset
    }
});

export const {incremented, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;