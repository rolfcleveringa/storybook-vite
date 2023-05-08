import './button.scss';

interface ButtonProps {
    /**
     * The variant of the button.
     */
    variant?: 'primary' | 'secondary' | 'hollow';
    /**
     * The size of the button.
     */
    size?: 'default' | 'small' | 'large';
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * The contents of the button.
     */
    children: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction. Use the controls in the table below to customize the preview.
 */
export const Button = ({
    variant = 'primary',
    size = 'default',
    disabled = false,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={[
                'button',
                variant,
                size,
                disabled ? 'disabled' : '',
            ].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
};
