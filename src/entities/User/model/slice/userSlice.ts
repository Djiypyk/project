import { createSlice } from '@reduxjs/toolkit';
import { UserShema } from '../types/user';

const initialState: UserShema = {};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
