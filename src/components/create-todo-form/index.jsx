import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class CreateTodoForm extends Component {
   state = {
      text: '',
      description: '',
   };

   hangleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   };
   hangleSubmit = (event) => {
      event.preventDefault();
      this.props.createTodo(this.state);
      event.target.reset();
      this.setState({ text: '', description: '' });
   };
   render() {
      return (
         <Form onSubmit={this.hangleSubmit}>
            <FormGroup>
               <Label>Enter Task</Label>
               <Input
                  placeholder='Do some Code'
                  name='text'
                  value={this.state.text}
                  onChange={this.hangleChange}
               />
            </FormGroup>
            <FormGroup>
               <Label>Describe Task</Label>
               <Input
                  type='textarea'
                  placeholder='Write some shrot description about your task'
                  name='description'
                  value={this.state.description}
                  onChange={this.hangleChange}
               />
            </FormGroup>
            <Button type='submit'>Create Task</Button>
         </Form>
      );
   }
}

CreateTodoForm.propTypes = {
   createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
