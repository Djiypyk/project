import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from './articlesPageSelector';

describe('getArticlesPageIsLoading test', () => {
    test('should be true', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema))
            .toBe(true);
    });
});

describe('getArticlesPageError test', () => {
    test('should be equal empty string', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: '',
            },
        };
        expect(getArticlesPageError(state as StateSchema))
            .toEqual('');
    });
});
describe('getArticleDetailsCommentsError test', () => {
    test('should be true', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.SMALL,
            },
        };
        expect(getArticlesPageView(state as StateSchema))
            .toEqual(ArticleView.SMALL);
    });
});
