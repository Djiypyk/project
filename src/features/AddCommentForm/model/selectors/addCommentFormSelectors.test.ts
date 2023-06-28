import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFromError,
    getAddCommentFromText,
} from './addCommentFormSelectors';

describe('addCommentFormSelector test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'true',
            },
        };
        expect(getAddCommentFromText(state as StateSchema))
            .toBe('true');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFromError(state as StateSchema))
            .toBe('');
    });
});
