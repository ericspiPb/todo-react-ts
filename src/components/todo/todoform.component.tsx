import React from 'react';
import PropTypes from 'prop-types';

import ToDoEntity, { ToDo } from './todo.entity';
import ToDoComponent from './todo.component';
import ToDoInput from './todoinput.component';

export interface ToDoFormProps {
  todos?: ToDo[]
}

export interface ToDoFormStates {
  todos: ToDo[]
}

export default class ToDoForm extends React.Component<ToDoFormProps, ToDoFormStates> {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string}))
  }

  constructor(props: ToDoFormProps) {
    super(props);

    this.state = {
      todos: this.props.todos || []
    }
  }

  handleAdd = (event: React.MouseEvent<HTMLInputElement, MouseEvent>, text: string): void => {
    this.setState({
      todos: [...this.state.todos, new ToDoEntity({value: text})]
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <ToDoInput onSubmit={this.handleAdd} />
        <hr />
        {todos?.map((todo) => <ToDoComponent todo={todo} />)}
      </div>
    )
  }
}
