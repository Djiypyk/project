import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'features/AddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    isLoading: false,
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setCommentText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
