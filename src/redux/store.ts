import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        register: registerReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
