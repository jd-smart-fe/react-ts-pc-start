import * as React from 'react';
import { actions } from '../../application/addTodo/store';

interface Props {
  onClick: (id: number) => actions.TodoAction;
  completed: boolean;
  text: string;
  id: number;
}

const Todo = ({ onClick, id, completed, text }: Props) => (
  <li
    onClick={() => onClick(id)}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default Todo;
