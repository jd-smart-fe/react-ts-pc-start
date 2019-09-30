import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addTodo } from './store/actions';

const AddTodo = ({ dispatch }: { dispatch: Dispatch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log((inputRef.current as HTMLInputElement).value);
    if (!(inputRef.current as HTMLInputElement).value) {
      return;
    }
    dispatch(addTodo((inputRef.current as HTMLInputElement).value));
    (inputRef.current as HTMLInputElement).value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit"> Add Todo </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
