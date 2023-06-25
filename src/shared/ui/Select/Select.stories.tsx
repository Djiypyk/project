import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [{
        value: '123',
        content: '123',
    }, {
        value: '345',
        content: '345',
    },
    {
        value: '567',
        content: '567',
    }],
};
