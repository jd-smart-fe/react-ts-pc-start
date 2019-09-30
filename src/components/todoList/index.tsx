import * as React from 'react';

import { actions } from '../../application/visibleTodoList/store';
import { Todo as TodoClass } from '../../typings/type';
import Todo from '../todo';

interface Props {
  todos: TodoClass[];
  toggleTodo: (id: number) => actions.ToggleTodoAction;
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
