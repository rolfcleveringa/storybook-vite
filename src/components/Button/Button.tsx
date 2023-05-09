import './button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
    /**
     * The label of the button.
     */
    label?: string;
    /**
     * The variant of the button.
     */
    variant?: 'primary' | 'secondary' | 'hollow' | 'ghost';
    /**
     * The size of the button.
     */
    size?: 'default' | 'small' | 'large';
    /**
     * The icon of the button.
     */
    icon?: 'none';
    /**
     * The icon of the button.
     */
    iconPosition?: 'left' | 'right';
    /**
     * The icon of the button.
     */
    iconAnimation?: 'none' | 'rotate' | 'right';
    /**
     * The button type.
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * The loading state of the button.
     */
    loading?: boolean;
    /**
     * The label of the button when in loading state.
     */
    loadingLabel?: string;
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction. Use the controls in the table below to customize the preview.
 */
export const Button = ({
    label = '',
    variant = 'primary',
    size = 'default',
    icon = 'none',
    iconPosition = 'right',
    iconAnimation = 'right',
    type = 'button',
    loading = false,
    loadingLabel = '',
    disabled = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={[
                'button',
                variant,
                size ? `size-${size}` : '',
                loading ? 'loading' : '',
                disabled ? 'disabled' : '',
                iconPosition ? `icon-position-${iconPosition}` : '',
                iconAnimation ? `icon-animation-${iconAnimation}` : '',
            ].join(' ')}
            {...props}
        >
            {loading ? loadingLabel : label}
            {loading && <FontAwesomeIcon icon="spinner" spin />}
            {!loading && icon !== 'none' && <FontAwesomeIcon icon={icon} />}
        </button>
    );
};
