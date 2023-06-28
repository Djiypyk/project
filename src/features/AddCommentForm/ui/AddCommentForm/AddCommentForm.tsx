import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getAddCommentFromError, getAddCommentFromText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducersList: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFromText);
    const error = useSelector(getAddCommentFromError);

    const onCommentTextChange = useCallback((commentText: string) => {
        dispatch(addCommentFormActions.setCommentText(commentText));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default AddCommentForm;
