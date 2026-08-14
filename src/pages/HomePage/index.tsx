import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
`;

const Box = styled.div`
    width: 400px;
    height: 600px;
    background: white;
`;
const Title = styled.h1`
    margin: 0;
    padding: 15px 25px;
`;

const HomePage = () => {
    const [todoList, setTodoList] = useState<ITodoItem[]>([
        {
            id: '1',
            editing: false,
            complete: false,
            content: '1번',
        },
        {
            id: '2',
            editing: false,
            complete: true,
            content: '2번',
        },
        {
            id: '3',
            editing: true,
            complete: false,
            content: '3번',
        },
    ]);

    return (
        <Wrapper>
            <Box>
                <Title>To do</Title>
                <TodoInput settingTodoList={(todo) => setTodoList([...todoList, todo])}></TodoInput>
                {todoList.map((todo) => (
                    <TodoItem todo={todo}></TodoItem>
                ))}
            </Box>
        </Wrapper>
    );
};

export default HomePage;
