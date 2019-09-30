import * as React from 'react';
import { actions } from '../../application/visibleTodoList/store';

interface Props {
  onClick: (id: number) => actions.ToggleTodoAction;
  completed: boolean;
  text: string;
}

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={() => onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default Todo;
