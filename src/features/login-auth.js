import {createSlice} from '@reduxjs/toolkit';
const initialState = {};

export const loginSlice = createSlice({
    name: 'login',
    initialState : {
        value: initialState,
    },
    reducers: {
        login: (state,action) => {
            state.value = action.payload
        }
    }
})
export const {login} = loginSlice.actions;
export default loginSlice.reducer;