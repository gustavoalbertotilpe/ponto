import { createSlice } from '@reduxjs/toolkit';

const isLogged = parseInt(localStorage.getItem('isAdmin') as string);
const name = localStorage.getItem('name');

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: name,
        isAdmin: isLogged,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }, 
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        }
    }
});

export const { setName, setIsAdmin } = slice.actions;
export default slice.reducer;
