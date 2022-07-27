import { useSetRecoilState } from 'recoil';
import { Todo } from '../types/TodoType';
import {
  Box,
  Button,
  Divider,
  Icon,
  ListItem,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import {
  CheckCircleIcon,
  QuestionOutlineIcon,
  DeleteIcon,
} from '@chakra-ui/icons';

const TodoItem = ({ todo }: { todo: Todo }) => {
  // const deleteTodo = (id: number): void => {
  //   setTodos((todos) => {
  //     const newTodos = todos.filter((todo: TodoType) => todo.id !== id);
  //     return newTodos;
  //   });
  // };

  const markDone = (id: string): void => {
    // setTodos((todos: any) => {
    //   const newTodos = todos.map((todo: TodoType) => {
    //     if (todo.id === id) {
    //       return { ...todo, complete: !todo.complete };
    //     }
    //     return todo;
    //   });
    //   return newTodos;
    // });
  };

  return (
    <ListItem padding={2}>
      <Box display="flex" alignItems="center">
        {todo.done ? (
          <ListIcon as={CheckCircleIcon} color="green.400" w={5} h={5} />
        ) : (
          <ListIcon as={QuestionOutlineIcon} color="orange.400" w={5} h={5} />
        )}
        <Text w={300}>{todo.task}</Text>
        <Button
          m={2}
          colorScheme="blue"
          size="xs"
          onClick={() => markDone(todo.id)}
        >
          {todo.done ? 'Unmark done' : 'Mark done'}
        </Button>
        {/* <Icon as={DeleteIcon} w={4} h={4} onClick={() => deleteTodo(todo.id)} /> */}
      </Box>
      <Divider w={450} />
    </ListItem>
  );
};

export default TodoItem;
