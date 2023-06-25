import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'username',
            lastname: 'lastname',
            first: 'first',
            age: 18,
            country: Country.UKRAINE,
            currency: Currency.BLR,
            city: 'city',
            avatar: '',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'username',
            lastname: 'lastname',
            first: 'first',
            age: 18,
            country: Country.UKRAINE,
            currency: Currency.BLR,
            city: 'city',
            avatar: '',
        },
    },
})];
