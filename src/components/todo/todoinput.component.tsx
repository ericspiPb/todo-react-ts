import React from 'react';
import PropTypes from 'prop-types';

export interface ToDoInputProps {
  onSubmit: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export interface ToDoInputStates {
  value: string
}

export default class ToDoInput extends React.Component<ToDoInputProps, ToDoInputStates> {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props: ToDoInputProps) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({value: event.target.value});
  }

  handleAddButtonClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    this.setState({ value: ''});
    this.props.onSubmit(event);
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleTextChange} value={value} />
        <input type="button" onClick={this.handleAddButtonClick} value='Add' />
      </div>
    )
  }
}
