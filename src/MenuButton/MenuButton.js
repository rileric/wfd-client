import React from 'react';

export default function MenuButton(props) {
    const {tag, className, children, ...otherProps } = props;

    return React.createElement(
        props.tag,
        {
            className: ['MenuButton', props.className].join(' '),
            ...otherProps
        },
        props.children
    );
}

MenuButton.defaultProps = {
    tag: 'a'
}