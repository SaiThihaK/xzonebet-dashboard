import {configureStore} from '@reduxjs/toolkit';
import bettingSlice from './features/betting';
import globalbettingSlice from './features/globalbettingtable';

const store = configureStore({
    reducer: {
        betting: bettingSlice,
        globalbetting: globalbettingSlice,
    }
})
export default store;