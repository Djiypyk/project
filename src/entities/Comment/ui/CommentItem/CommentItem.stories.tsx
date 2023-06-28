import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {},
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'some text',
        user: {
            id: '1',
            username: 'Djiypyk',
        },
    },
};
export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'some text',
        user: {
            id: '1',
            username: 'Djiypyk',
        },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
