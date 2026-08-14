import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoInputProps {
    settingTodoList: (todo: ITodoItem) => void;
}

const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-bottom: 1px solid #ccc;
    width: 100%auto;
    font-size: 1.1em;
`;

const Input = styled.input`
    width: 100%;
    height: 32px;
    border: none;
    outline: 0;
    background: #e0e0e0;
    border-radius: 8px;
`;

const TodoInput = ({ settingTodoList }: TodoInputProps) => {
    const [content, setContent] = useState('');

    return (
        <Box>
            <Input
                placeholder="입력"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={(e) => {
                    if (content === '' || e.key !== 'Enter') return;
                    settingTodoList({
                        id: '0',
                        editing: false,
                        complete: false,
                        content: content,
                    });

                    setContent('');
                }}
            />
        </Box>
    );
};

export default TodoInput;
