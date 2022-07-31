import { useRecoilValue } from 'recoil';
import { Todo } from '../types/TodoType';
import TodoItem from '../components/TodoItem';
import { OrderedList } from '@chakra-ui/react';
import { todosAtom } from '../recoil/TodoAtoms';
import { enabledAtom, filteredAtom } from '../recoil/FilterAtom';

function Todolist() {
  const todos = useRecoilValue(todosAtom);
  const filteredTodos = useRecoilValue(filteredAtom);
  const isFilterEnabled = useRecoilValue(enabledAtom);
  const todoList = isFilterEnabled ? filteredTodos : todos;

  return (
    <div>
      <OrderedList>
        {/* @ts-ignore */}
        {todoList.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </OrderedList>
    </div>
  );
}

export default Todolist;
