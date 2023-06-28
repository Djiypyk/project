import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';

import {
    fetchCommentByArticleId,
} from '../../services/fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetailsPage/addCommentForArticle', async (text, thunkAPI) => {
    const {
        dispatch,
        extra,
        rejectWithValue,
        getState,
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data');
    }
    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });
        if (!response.data) {
            throw new Error();
        }
        dispatch(fetchCommentByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
