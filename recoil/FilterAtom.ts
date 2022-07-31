import { atom } from 'recoil';
import { Todo } from '../types/TodoType';

export const enabledAtom = atom<boolean>({
  key: 'enabledAtom',
  default: false,
});

export const filteredAtom = atom<Todo[]>({
  key: 'filteredAtom',
  default: [],
});
