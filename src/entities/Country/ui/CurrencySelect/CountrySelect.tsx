import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

import { Country, countryList } from '../../model/types/country';

interface CurrencySelectProps {
    className?: string;
    value?: string;

    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

export const CountrySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите страну')}
            options={countryList}
            readOnly={readOnly}
        />

    );
});
