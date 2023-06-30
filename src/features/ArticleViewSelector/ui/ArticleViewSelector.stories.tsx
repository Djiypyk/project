import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from 'entities/Article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
};

export const BigDark = Template.bind({});
BigDark.args = {
    view: ArticleView.BIG,
};
BigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BigPurple = Template.bind({});
BigPurple.args = {
    view: ArticleView.BIG,
};
BigPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
