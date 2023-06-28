import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import cls from './CommentList.module.scss';
import { CommentItem } from '../CommentItem/CommentItem';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation();
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />

            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentItem key={comment.id} isLoading={isLoading} className={cls.commentItem} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}

        </div>
    );
});
