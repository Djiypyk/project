import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from './assets/img/storybook.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {

    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
    alt: 'Аватар пользователя',
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: 50,
    src: AvatarImg,
    alt: 'Аватар пользователя',
};
