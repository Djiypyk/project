import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem insup',
    text: 'Description',
};

export const TextComponent = Template.bind({});
TextComponent.args = {
    text: 'Text lorem',
};

export const TitleComponent = Template.bind({});
TitleComponent.args = {
    title: 'Title lorem',
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
    title: 'Title lorem insup',
    text: 'Description',
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTextComponent = Template.bind({});
DarkTextComponent.args = {
    text: 'Text lorem',
};
DarkTextComponent.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTitleComponent = Template.bind({});
DarkTitleComponent.args = {
    title: 'Title lorem',
};
DarkTitleComponent.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title Error',
    text: 'Some error',
    theme: TextTheme.ERROR,
};
