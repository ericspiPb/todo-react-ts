import React from 'react';
import PropTypes from 'prop-types';

export interface ToDoInputProps {
  onSubmit: (text: HTMLInputElement, addButton: HTMLButtonElement) => void;
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

  clearText = (): void => {
    this.setState({value: ''});
  }

  handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({value: event.target.value});
  }

  handleTextEnterButtonPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      this.props.onSubmit(document.getElementById('todo-text') as HTMLInputElement,
                          document.getElementById('todo-add-button') as HTMLButtonElement);
    }
  }

  handleAddButtonClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    this.props.onSubmit(document.getElementById('todo-text') as HTMLInputElement,
                        document.getElementById('todo-add-button') as HTMLButtonElement);
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <input type="text" value={value} id='todo-text' onChange={this.handleTextChange} onKeyPress={this.handleTextEnterButtonPress}/>
        <input type="button" value='Add' id='todo-add-button' onClick={this.handleAddButtonClick} />
      </div>
    )
  }
}
