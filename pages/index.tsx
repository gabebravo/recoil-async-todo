// import { css } from '@emotion/react';
// import Todolist from '../components/Todolist';
import dynamic from 'next/dynamic';
const Todolist = dynamic(() => import('../components/Todolist'), {
  ssr: false,
});
import { Box, Text } from '@chakra-ui/react';
import TodoForm from '../components/TodoForm';
import TodoCount from '../components/TodoCount';
import ResetTodos from '../components/ResetTodos';

// const todoInput = css`
//   color: blue;
// `;

const BasicTodoAtom = () => {
  return (
    <div>
      <Box m="1em">
        <Text fontSize="xl">Basic Todo Atom</Text>
        <ResetTodos />
      </Box>
      <Box m="1em">
        <TodoCount />
      </Box>
      <Box m="1em">
        <TodoForm />
      </Box>
      <Box>
        <Todolist />
      </Box>
    </div>
  );
};

export default BasicTodoAtom;
