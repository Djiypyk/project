import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageOrder,
    getArticlesPagePageNumber,
    getArticlesPageSearch,
    getArticlesPageSort,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelector';

interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkAPI) => {
    const {

        extra,
        rejectWithValue,
        getState,
    } = thunkAPI;

    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const searchValue = getArticlesPageSearch(getState());
    const page = getArticlesPagePageNumber(getState());

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _sort: sort,
                _order: order,
                _search: searchValue,
                q: page,
            },
        });
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
