import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePageNumber,
} from '../../selectors/articlesPageSelector';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { articlePageActions } from '../../slices/articlePageSlice';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPagePageNumber(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
