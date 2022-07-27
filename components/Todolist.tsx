import { useRecoilValueLoadable } from 'recoil';
import { Todo } from '../types/TodoType';
import TodoItem from '../components/TodoItem';
import allTodosSelector from '../recoil/selectors/TodoIdsSelector';
import { OrderedList } from '@chakra-ui/react';

function Todolist() {
  const todos = useRecoilValueLoadable(allTodosSelector);
  console.log('todos', todos);

  switch (todos.state) {
    case 'hasValue':
      return (
        <div>
          {todos?.contents?.length > 0 ? (
            <OrderedList>
              {todos.contents.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </OrderedList>
          ) : null}
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw <div>Whoops! Error...</div>;
  }
}

export default Todolist;
