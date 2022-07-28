import { atom } from 'recoil';
import { Todo } from '../../types/TodoType';

const todosAtom = atom<Todo[]>({
  key: 'Todos',
  default: [],
});

export default todosAtom;
