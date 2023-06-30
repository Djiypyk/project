import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
import { ArticlePageSchema } from '../types/ArticlePageSchema';

import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => (
    state.articlesPage || articlesAdapter.getInitialState()));
export const articlePageSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.BIG,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
                state.error = undefined;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

// Action creators are generated for each case reducer function
export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
