import { atom } from 'recoil';
import { Todo } from '../types/TodoType';

export const todosAtom = atom<Todo[]>({
  key: 'Todos',
  default: [],
});

export const enabledAtom = atom<boolean>({
  key: 'enabledAtom',
  default: false,
});

export const filteredAtom = atom<string>({
  key: 'filteredAtom',
  default: '',
});
