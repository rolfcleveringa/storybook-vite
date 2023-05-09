import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        componentSubtitle: 'All button variants and options.',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: 'select',
            options: Icons,
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The primary variant for buttons and call-to-actions.
 */
export const Primary: Story = {
    args: {
        label: 'Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
        variant: 'secondary',
    },
};

export const Hollow: Story = {
    args: {
        label: 'Button',
        variant: 'hollow',
    },
};

export const Loading: Story = {
    args: {
        label: 'Button',
        variant: 'primary',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Button',
        variant: 'primary',
        disabled: true,
    },
};
