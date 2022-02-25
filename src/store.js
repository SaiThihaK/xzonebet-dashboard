import {configureStore} from '@reduxjs/toolkit';
import bettingSlice from './features/betting';
import globalbettingSlice from './features/globalbettingtable';
import loginSlice from './features/login-auth';

const store = configureStore({
    reducer: {
        betting: bettingSlice,
        globalbetting: globalbettingSlice,
        auth: loginSlice,
    }
})
export default store;