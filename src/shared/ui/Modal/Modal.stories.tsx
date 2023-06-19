import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
    necessitatibus voluptatem, minus officia modi eum. Cumque at
    accusamus optio! Aliquid alias error delectus blanditiis
    expedita beatae consequuntur, natus voluptate nulla.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
    necessitatibus voluptatem, minus officia modi eum. Cumque at
    accusamus optio! Aliquid alias error delectus blanditiis
    expedita beatae consequuntur, natus voluptate nulla.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
