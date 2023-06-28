import React, { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { CommentList } from 'entities/Comment';
import { ArticleDetails } from 'entities/Article';

import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
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
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducersList}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails articleId={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}

                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
