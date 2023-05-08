import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        componentSubtitle: 'All button variants and options.',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The primary variant for buttons and call-to-actions.
 */
export const Primary: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary',
    },
};

export const Hollow: Story = {
    args: {
        children: 'Button',
        variant: 'hollow',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        disabled: true,
    },
};
