import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlePageFilter } from './ArticlePageFilter';

export default {
    title: 'shared/ArticlePageFilter',
    component: ArticlePageFilter,
    argTypes: {},
} as ComponentMeta<typeof ArticlePageFilter>;

const Template: ComponentStory<typeof ArticlePageFilter> = (args) => <ArticlePageFilter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
