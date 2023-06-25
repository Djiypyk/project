import React, { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency, currencyList } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: string;

    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите валюту')}
            options={currencyList}
            readOnly={readOnly}
        />

    );
});
