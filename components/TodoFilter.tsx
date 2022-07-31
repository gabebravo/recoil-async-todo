import { useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { Box, Checkbox, Select } from '@chakra-ui/react';
import { enabledAtom } from '../recoil/TodoAtoms';
import { useFilterTodo } from '../hooks/useFilterTodo';

const filterSelector = css`
  width: 30%;
  margin: 10px 0px;
`;

const TodoFilterView = () => {
  const setEnabled = useSetRecoilState(enabledAtom);
  const filterTodo = useFilterTodo();

  const filterTodoList = (ev: React.FormEvent<EventTarget>) => {
    let target = ev.target as HTMLInputElement;
    filterTodo(target.value);
  };

  const toggleEnabledFlag = () => setEnabled((enabled) => !enabled);

  return (
    <Box css={filterSelector}>
      <Select onChange={filterTodoList} placeholder="Choose Filter">
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </Select>
      <Checkbox onChange={toggleEnabledFlag}>Enable Filter</Checkbox>
    </Box>
  );
};

const TodoFilterController = () => {
  return <TodoFilterView />;
};

export default TodoFilterController;
