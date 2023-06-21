import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    text={t('Вы ввели неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                autoFocus
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
                placeholder={t('Введите пароль')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
