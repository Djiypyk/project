import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const error = useSelector(getProfileError);

    const validateErrorTranslation = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка на сервере при сохранении'),
        [ValidateProfileError.INCORRECT_CITY]: t('Некорретный город'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Некорректная валюта'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData());
    });

    const onChangeFirstname = useCallback((firstname?: string) => {
        dispatch(profileActions.updateProfile({ first: firstname || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((lastname?: string) => {
        dispatch(profileActions.updateProfile({ lastname: lastname || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((age?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(age || 0) }));
    }, [dispatch]);
    const onChangeCity = useCallback((city?: string) => {
        dispatch(profileActions.updateProfile({ city: city || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((username?: string) => {
        dispatch(profileActions.updateProfile({ username: username || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((avatarUrl?: string) => {
        dispatch(profileActions.updateProfile({ avatar: avatarUrl || '' }));
    }, [dispatch]);
    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCountry={onChangeCountry}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeUsername={onChangeUsername}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    readOnly={readonly}
                />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        text={validateErrorTranslation[err]}
                        theme={TextTheme.ERROR}
                        key={err}
                    />
                ))}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
