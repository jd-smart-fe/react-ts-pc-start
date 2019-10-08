import * as React from 'react';
import { actions } from '../../application/addTodo/store';

interface Props {
  onClick: (id: number) => actions.TodoAction;
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
