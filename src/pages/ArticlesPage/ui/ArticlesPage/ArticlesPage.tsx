import React, { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    // const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>Articles Page</div>
    );
};

export default memo(ArticlesPage);
