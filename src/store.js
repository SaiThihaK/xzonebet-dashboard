import {configureStore} from '@reduxjs/toolkit';
import bettingSlice from './features/betting';

const store = configureStore({
    reducer: {
        betting: bettingSlice,
    }
})
export default store;