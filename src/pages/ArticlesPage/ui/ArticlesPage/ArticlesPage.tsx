import React, { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                articles={[]}
                view={ArticleView.SMALL}
            />
        </div>
    );
};

export default memo(ArticlesPage);
