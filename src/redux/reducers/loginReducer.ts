import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const isLogged = parseInt(localStorage.getItem('isAdmin') as string);

export const slice = createSlice({
    name: 'login',
    initialState: {
        isLogged: isLogged,
        token: token,
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLogged = action.payload;
        },
        setToken: (state, action) => {
            state.token  = action.payload;
        }
    }
});

export const { setLogin, setToken } = slice.actions;
export default slice.reducer;
