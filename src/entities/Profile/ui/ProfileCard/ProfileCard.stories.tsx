import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'username',
        lastname: 'lastname',
        first: 'first',
        age: 18,
        country: Country.UKRAINE,
        currency: Currency.BLR,
        city: 'city',
        avatar: '',
    },
};
export const WithError = Template.bind({});
WithError.args = {
    error: 'Some Error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
