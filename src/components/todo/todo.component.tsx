import React from 'react';
import PropTypes from 'prop-types';

import { ToDo } from './todo.entity';

export interface ToDoProps {
  todo: ToDo,
  onCompleted?: () => void,
  onDeleted?: () => void
}

export interface ToDoStates {
  completed: boolean
}

export default class ToDoComponent extends React.Component<ToDoProps, ToDoStates> {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
  }

  constructor(props: ToDoProps) {
    super(props);

    this.state = {
      completed: this.props.todo.completedAt !== undefined ? true : false
    };
  }

  handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    this.setState({
      completed: !this.state.completed
    });
  }

  render() {
    const { todo } = this.props;
    const { completed } = this.state;

    return completed ?
      <li style={{textDecoration: 'line-throught'}} onClick={this.handleClick}>{todo.value}</li> :
      <li onClick={this.handleClick}>{todo.value}</li>
  }
}
