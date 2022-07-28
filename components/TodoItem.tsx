import { useDeleteTodo, useUpdateTodo } from '../hooks/todoCrudHooks';
import { deleteTodo, updateTodo } from '../api/todo';
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
  const deleteTodoInRecoil = useDeleteTodo();
  const updateTodoInRecoil = useUpdateTodo();

  const deleteHandler = async (id: string) => {
    const deletedTodo = await deleteTodo(id);
    deleteTodoInRecoil(deletedTodo);
  };

  const toggleDone = async (todo: Todo) => {
    const updatedTodo = await updateTodo({ ...todo, done: !todo.done });
    updateTodoInRecoil(updatedTodo);
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
          onClick={() => toggleDone(todo)}
        >
          {todo.done ? 'Unmark done' : 'Mark done'}
        </Button>
        <Icon
          as={DeleteIcon}
          w={4}
          h={4}
          onClick={() => deleteHandler(todo.id)}
        />
      </Box>
      <Divider w={450} />
    </ListItem>
  );
};

export default TodoItem;
