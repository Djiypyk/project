import React, { memo, useCallback } from 'react';

import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleSortSelector, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlePageFilter.module.scss';

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter = memo((props: ArticlePageFilterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const searchValue = useSelector(getArticlesPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback((viewType: ArticleView) => {
        dispatch(articlePageActions.setView(viewType));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(sort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((searchValue: string) => {
        dispatch(articlePageActions.setSearch(searchValue));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    order={order}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={searchValue} placeholder={t('Поиск')} onChange={onChangeSearch} />
            </Card>

        </div>
    );
});
