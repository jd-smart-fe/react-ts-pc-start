import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleTodo, ToggleTodoAction } from './store/actions';
import TodoList from '../../components/todoList';
import { Todo, StoreState, VisibilityFilters } from '../../typings/type';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
  console.log(filter);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos || [];
  }
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
  // eslint-disable-next-line prettier/prettier
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (
  dispatch: Dispatch
): { toggleTodo: (id: number) => ToggleTodoAction } => ({
  // eslint-disable-next-line prettier/prettier
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
