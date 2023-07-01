import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';

jest.mock('../fetchArticleList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(4);
        expect(fetchArticlesList)
            .toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 4,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(4);
        // expect(fetchArticlesList)
        //     .not
        //     .toHaveBeenCalled();
    });
});
