import React from 'react';
import PropTypes from 'prop-types';

import ToDoEntity, { ToDo } from './todo.entity';
import ToDoComponent from './todo.component';
import ToDoInput from './todoinput.component';

export interface ToDoFormProps {
  todos?: ToDo[]
}

export interface ToDoFormStates {
  todos: ToDo[],
  // todoInput: React.RefObject<ToDoInput>
}

export default class ToDoForm extends React.Component<ToDoFormProps, ToDoFormStates> {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string}))
  }

  todoInput = React.createRef<ToDoInput>();

  constructor(props: ToDoFormProps) {
    super(props);

    this.state = {
      todos: this.props.todos || []
    };
  }

  handleSubmit = (text: HTMLInputElement, addButton: HTMLButtonElement): void => {
    const value = text.value.trim();

    if (value) {
      this.handleAdd(text, addButton);
    } else {
      this.handleEmpty(text, addButton);
    }
  }

  handleAdd = (text: HTMLInputElement, addButton: HTMLButtonElement): void => {
    this.setState({
      todos: [...this.state.todos, new ToDoEntity({value: text.value})]
    });

    this.todoInput.current?.clearText();
  }

  handleEmpty = (text: HTMLInputElement, addButton: HTMLButtonElement): void => {}

  render() {
    const { todos } = this.state;

    return (
      <div>
        <ToDoInput onSubmit={this.handleSubmit} ref={this.todoInput} />
        <hr />
        <ul>
          {todos?.map((todo) => <ToDoComponent todo={todo} />)}
        </ul>
      </div>
    )
  }
}
