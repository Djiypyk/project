import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelector';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { articlePageActions } from '../../slices/articlePageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;

        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
