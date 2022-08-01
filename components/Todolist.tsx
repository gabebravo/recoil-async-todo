import { useRecoilValue } from 'recoil';
import { Todo } from '../types/TodoType';
import TodoItem from '../components/TodoItem';
import { OrderedList } from '@chakra-ui/react';
import { enabledAtom, filteredAtom } from '../recoil/TodoAtoms';
import { filteredTodosSelector } from '../recoil/TodoSelectors';

function Todolist() {
  const isFilterEnabled = useRecoilValue(enabledAtom);
  const filterStatus = useRecoilValue(filteredAtom);
  const todos = useRecoilValue(
    filteredTodosSelector({ enabled: isFilterEnabled, status: filterStatus })
  );

  return todos.length > 0 ? (
    <div>
      <OrderedList>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </OrderedList>
    </div>
  ) : null;
}

export default Todolist;
