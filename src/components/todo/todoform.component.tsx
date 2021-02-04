import React from 'react';
import PropTypes from 'prop-types';

import { ToDo } from './todo.entity';
import ToDoComponent from './todo.component';
import ToDoInput from './todoinput.component';

export interface ToDoFormProps {
  todos?: ToDo[]
}

export default class ToDoForm extends React.Component<ToDoFormProps> {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string}))
  }

  handleAdd = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    console.log('text add button', 'clicked');
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        <ToDoInput onSubmit={this.handleAdd} />
        <hr />
        {todos?.map((todo) => <ToDoComponent todo={todo} />)}
      </div>
    )
  }
}
