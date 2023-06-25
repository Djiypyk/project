import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry: (country?: Country) => void;
    readOnly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
        readOnly,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar && <Avatar src={data?.avatar} alt={t('Аватар пользователя')} />}
                </div>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Ваш никнейм')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <Input
                    type='number'
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.country}
                    placeholder={t('Ваша страна')}
                    className={cls.input}
                    // onChange={onChangeCountry}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readOnly={readOnly}
                    className={cls.input}
                />
                <CountrySelect
                    onChange={onChangeCountry}
                    value={data?.country}
                    readOnly={readOnly}
                    className={cls.input}
                />
            </div>
        </div>
    );
});
export default ProfileCard;
