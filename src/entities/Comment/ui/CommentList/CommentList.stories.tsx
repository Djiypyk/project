import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'some text',
            user: {
                id: '1',
                username: 'Djiypyk',
            },
        },
        {
            id: '2',
            text: 'some text',
            user: {
                id: '1',
                username: 'Djiypyk',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
