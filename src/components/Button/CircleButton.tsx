import React, { type JSX } from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background: #882727;
    }
`;

const CircleButton = ({
    className,
    onClick,
    Icon,
}: {
    className?: string;
    onClick: () => void;
    Icon: () => JSX.Element;
}) => {
    return (
        <Circle className={className} onClick={onClick}>
            <Icon />
        </Circle>
    );
};

export default CircleButton;
