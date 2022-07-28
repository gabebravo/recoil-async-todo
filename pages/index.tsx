import { todosAtom } from '../recoil/TodoAtoms';
import { Box, Text } from '@chakra-ui/react';
import TodoForm from '../components/TodoForm';
import TodoCount from '../components/TodoCount';
import { Todo } from '../types/TodoType';
import { RecoilRoot } from 'recoil';
import Todolist from '../components/Todolist';

export async function getStaticProps() {
  // Call an external API endpoint to get todos
  const appId = process.env.NEXT_PUBLIC_API_ID;
  const todoData = await fetch(`https://${appId}.mockapi.io/todo`);
  const todos = await todoData.json();

  // By returning { props: { todos } }, the BasicTodoAtom component
  // will receive `todos` as a prop at build time
  return {
    props: {
      todos,
    },
  };
}

const BasicTodoAtom = ({ todos }: { todos: Todo[] }) => {
  return (
    <RecoilRoot initializeState={(snapshot) => snapshot.set(todosAtom, todos)}>
      <div>
        <Box m="1em">
          <Text fontSize="xl">Basic Todo Atom</Text>
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
    </RecoilRoot>
  );
};

export default BasicTodoAtom;

// import { css } from '@emotion/react';
// const todoInput = css`
//   color: blue;
// `;
