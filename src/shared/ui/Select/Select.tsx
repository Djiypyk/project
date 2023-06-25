import React, { ChangeEvent, memo, useMemo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readOnly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option key={opt.value} className={cls.option} value={opt.value}>{opt.content}</option>)), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {};
    return (
        <div className={classNames(cls.Select, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readOnly} className={cls.select} value={value} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
});
