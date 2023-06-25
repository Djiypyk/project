import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEditProfile = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEditProfile = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveChangeProfile = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button theme={ButtonTheme.OUTLINE} className={cls.editButton} onClick={onEditProfile}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.editButton}
                            onClick={onCancelEditProfile}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.saveBtn}
                            onClick={onSaveChangeProfile}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>

                )}
        </div>
    );
});
export default ProfilePageHeader;
