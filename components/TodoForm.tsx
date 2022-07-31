import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { createTodo } from '../api/todo';
import { isEmptyOrSpaces } from '../utils';
import useAddTodo from '../hooks/useAddTodo';

const TodoForm = () => {
  const todoInputRef = React.useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo();

  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    const todoValue = todoInputRef?.current?.value;

    if (!isEmptyOrSpaces(todoValue)) {
      const newTodo = await createTodo({ task: todoValue, done: false });
      addTodo(newTodo);
    }

    // @ts-ignore : RESET REF
    todoInputRef.current.value = '';
  }

  return (
    <Flex flexDir="column">
      <Box m={1}>
        <input
          style={{ border: '1px solid #000' }}
          placeholder="Enter Todo"
          type="text"
          required
          id="todo"
          ref={todoInputRef}
        />
      </Box>
      <Box m={1}>
        <Button colorScheme="blue" size="sm" onClick={submitHandler}>
          Add Todo
        </Button>
      </Box>
    </Flex>
  );
};

export default TodoForm;
