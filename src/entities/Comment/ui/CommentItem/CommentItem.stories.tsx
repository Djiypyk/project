import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/CommentItem',
    component: CommentItem,
    argTypes: {},
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
// Primary.decorators = [StoreDecorator({
//     articleDetailsComments: {
//         ids: ['1', '2'],
//         entities: {
//             1: {
//                 id: '1',
//                 user: {
//                     username: 'Djiypyk',
//                     id: '1',
//                 },
//                 text: 'Some text',
//             },
//             2: {
//                 id: '2',
//                 user: {
//                     username: 'Djiypyk',
//                     id: '1',
//                 },
//                 text: 'Some text 2',
//             },
//         },
//     },
// })];
