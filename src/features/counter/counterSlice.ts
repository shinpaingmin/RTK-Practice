// DUCKS pattern

import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        incremented(state) {
            // it's ok to do this because immer makes it immutable
            // under the hook
            state.value += 1;
        }
        // decrement


        //reset
    }
});

export const { incremented } = counterSlice.actions;

export default counterSlice.reducer;