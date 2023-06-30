import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleList, ArticleView } from 'entities/Article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { ArticleViewSelector } from 'features/ArticleViewSelector';

import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';

import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageActions.initState());
    });

    const onChangeView = useCallback((viewType: ArticleView) => {
        dispatch(articlePageActions.setView(viewType));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
