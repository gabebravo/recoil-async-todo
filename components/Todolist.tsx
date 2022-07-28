import { useRecoilValue } from 'recoil';
import { Todo } from '../types/TodoType';
import TodoItem from '../components/TodoItem';
import { OrderedList } from '@chakra-ui/react';
import { todosAtom } from '../recoil/TodoAtoms';

function Todolist() {
  const todos = useRecoilValue(todosAtom);

  return (
    <div>
      {todos.length > 0 ? (
        <OrderedList>
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </OrderedList>
      ) : null}
    </div>
  );
}

export default Todolist;
