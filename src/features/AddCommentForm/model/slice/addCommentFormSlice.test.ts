import { AddCommentFormSchema } from '../types/AddCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set comment text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setCommentText('123123')))
            .toEqual({ text: '123123' });
    });
});
