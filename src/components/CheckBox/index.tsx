import React from 'react';
import styled from 'styled-components';

// 이 방법도있음
// interface IndexProps {
//     checked?: boolean;
//     onClick?: () => void;
// }

const Circle = styled.div<{ checked?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${(props) => (props.checked ? 'red ' : '')};

    & > .checked-icon {
        width: 70%;
        height: 70%;
        background: red;
        border-radius: 50%;
    }
`;

const CheckBox = ({ checked, onClick }: { checked?: boolean; onClick?: () => void }) => {
    return (
        <Circle checked={checked} onClick={onClick}>
            {checked ? <div className="checked-icon" /> : null}
        </Circle>
    );
};

export default CheckBox;
