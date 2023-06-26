import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('getArticleDetailsIsLoading test', () => {
    test('should be true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema))
            .toBe(true);
    });
});

describe('getArticleDetailsData test', () => {
    test('should be equal data', () => {
        const data = {
            id: '1',
            blocks: [],
            views: 123,
            title: 'Some text',
            img: 'url',
            // type: ArticleBlockType,
            // createdAt: '12.12.2023',
            subtitle: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema))
            .toEqual(data);
    });
});

describe('getArticleDetailsError test', () => {
    test('should return string', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: '123',
            },
        };
        expect(getArticleDetailsError(state as StateSchema))
            .toBe('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema))
            .toBe(undefined);
    });
});
