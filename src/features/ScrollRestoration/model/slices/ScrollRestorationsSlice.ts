import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { actions } from '@storybook/addon-actions';
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema';

const initialState: ScrollRestorationSchema = {
    scroll: {},
};

export const scrollRestorationSlice = createSlice({
    name: 'scrollRestorationSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, {
            payload,
        }: PayloadAction<{
            path: string;
            position: number
        }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },

});

// Action creators are generated for each case reducer function
export const { actions: scrollRestorationActions } = scrollRestorationSlice;
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice;
