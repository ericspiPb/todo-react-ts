import React from 'react';
import PropTypes from 'prop-types';

export interface ToDoInputProps {
  onSubmit: (event: React.MouseEvent<HTMLInputElement, MouseEvent>, text: string) => void;
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
    this.props.onSubmit(event, this.state.value);
    this.setState({ value: ''});
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
