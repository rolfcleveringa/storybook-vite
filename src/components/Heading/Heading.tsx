import './_heading.scss';

interface HeadingProps {
    /**
     * The label of the heading.
     */
    label?: string;
    /**
     * The heading level
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Primary UI component for user interaction. Use the controls in the table below to customize the preview.
 */
export const Heading = ({ label = '', as = 'h1', ...props }: HeadingProps) => {
    const HeadingTag = as;
    return <HeadingTag {...props}>{label}</HeadingTag>;
};
