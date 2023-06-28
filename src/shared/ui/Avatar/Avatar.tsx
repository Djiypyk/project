import React, { CSSProperties, useMemo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png',
        alt,
        size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const mods: Mods = {};
    return (
        <img style={styles} className={classNames(cls.Avatar, mods, [className])} src={src} alt={alt} />
    );
};
