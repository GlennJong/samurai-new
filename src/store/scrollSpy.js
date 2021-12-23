import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'scrollSpy',
    initialState: {
        'spy': null,
    },
    reducers: {
        setSpy: (state, action) => {
            state.spy = action.payload;
        }
    }
});

export default appSlice;
