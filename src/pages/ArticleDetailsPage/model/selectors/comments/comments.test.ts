import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './comments';

describe('getArticleDetailsIsLoading test', () => {
    test('should be true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema))
            .toBe(true);
    });
});

describe('getArticleDetailsCommentsError test', () => {
    test('should be equal undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: '',
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema))
            .toEqual('');
    });
});
