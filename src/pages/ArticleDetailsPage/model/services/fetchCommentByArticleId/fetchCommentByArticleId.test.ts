import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { fetchCommentByArticleId } from './fetchCommentByArticleId';

const data: Comment[] = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'username',
            avatar: 'url',
        },
        text: 'some text',
    },
];
describe('fetchCommentByArticleId.test', () => {
    // test('success', async () => {
    //     const thunk = new TestAsyncThunk(fetchCommentByArticleId);
    //     thunk.api.get.mockReturnValue(Promise.resolve({}));
    //
    //     const result = await thunk.callThunk('1');
    //
    //     expect(thunk.api.get)
    //         .toHaveBeenCalled();
    //     expect(result.meta.requestStatus)
    //         .toBe('fulfilled');
    //     expect(result.payload)
    //         .toEqual(data);
    // });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus)
            .toBe('rejected');
    });
});
