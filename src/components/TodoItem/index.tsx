import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CheckBox from '../CheckBox';
import CircleButton from '../Button/CircleButton';

const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-bottom: 1px solid #ccc;
    width: auto;
    font-size: 1.2em;

    & > .delete-icon {
        display: none;
    }
    &:hover {
        padding: 10px 15px 10px 25px;
        & > .delete-icon {
            display: block;
        }
    }
`;
const TodoContents = styled.span<{ checked?: boolean }>`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    cursor: text;
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'initial')};
    color: ${(props) => (props.checked ? '#ccc' : 'black')};
`;

const TodoItem = ({ todo }: { todo: ITodoItem }) => {
    return (
        <Box>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <CheckBox checked={todo.complete} />
                <Block marginleft="10px" />
                <TodoContents checked={todo.complete}>{todo.content}</TodoContents>
            </div>
            <CircleButton
                className="delete-icon"
                onClick={() => {}}
                Icon={() => (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#1f1f1f"
                    >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                )}
            />
        </Box>
    );
};

export default TodoItem;
