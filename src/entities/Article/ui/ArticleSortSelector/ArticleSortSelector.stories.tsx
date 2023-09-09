import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ArticleSortSelector,
} from './ArticleSortSelector';

export default {
    title: 'shared/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
