import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSortSelector

.
ts;
}
from;
'./ArticleSortSelector.ts';

export default {
    title: 'shared/ArticleSortSelector.ts',
    component: ArticleSortSelector.ts,
    argTypes: {},
} as ComponentMeta<typeof ArticleSortSelector.ts>;

const Template: ComponentStory<typeof ArticleSortSelector.ts> = (args) => <ArticleSortSelector.ts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
