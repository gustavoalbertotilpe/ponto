import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'register',
    initialState: {
        lastRegister: '',
    },
    reducers: {
        setLastRegister: (state, action) => {
            state.lastRegister = action.payload;
        }, 
    }
});

export const { setLastRegister } = slice.actions;
export default slice.reducer;