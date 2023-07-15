import React, { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { CommentList } from 'entities/Comment';
import { ArticleDetails } from 'entities/Article';

import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import {
    fetchCommentByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

import cls from './ArticleDetailsPage.module.scss';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const { id } = useParams<{
        id: string
    }>();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducersList}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
                <ArticleDetails articleId={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}

                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
