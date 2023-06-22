import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SidebarItem.module.scss';

import { SidebarItemType } from '../Sidebar/model/items';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

const SidebarItemFancy: FC<SidebarItemProps> = (props) => {
    const {
        item,
        collapsed,
    } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};

export const SidebarItem = memo(SidebarItemFancy);
