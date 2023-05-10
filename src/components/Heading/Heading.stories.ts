import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Atoms/Heading',
    component: Heading,
    tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
    args: {
        label: 'Heading',
        as: 'h1',
    },
};

export const Heading2: Story = {
    args: {
        label: 'Heading',
        as: 'h2',
    },
};

export const Heading3: Story = {
    args: {
        label: 'Heading',
        as: 'h3',
    },
};

export const Heading4: Story = {
    args: {
        label: 'Heading',
        as: 'h4',
    },
};

export const Heading5: Story = {
    args: {
        label: 'Heading',
        as: 'h5',
    },
};

export const Heading6: Story = {
    args: {
        label: 'Heading',
        as: 'h6',
    },
};
